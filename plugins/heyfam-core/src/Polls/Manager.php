<?php
namespace HeyFam\Core\Polls;

/**
 * Poll votes + read helpers.
 *
 * Storage:
 *   - `wp_{N}_heyfam_poll_votes` (per subsite) — one row per (post_id, user_id).
 *     UNIQUE (post_id, user_id) is what enforces single-choice in v1; changing
 *     a vote uses `INSERT … ON DUPLICATE KEY UPDATE`.
 *   - post meta `heyfam_poll_options` — JSON array of strings (2–6 entries).
 *   - post meta `heyfam_poll_closes_at` — MySQL UTC datetime, or '' for never.
 *   - post meta `heyfam_poll_anon` — '1' / '0'.
 *
 * A post is a poll iff `heyfam_poll_options` decodes to an array of length ≥ 2.
 */
final class Manager {
	public static function table_name( ?int $blog_id = null ): string {
		global $wpdb;
		$bid = $blog_id ?? get_current_blog_id();
		return $wpdb->base_prefix . $bid . '_heyfam_poll_votes';
	}

	public static function create_table( int $blog_id ): void {
		global $wpdb;
		$table   = self::table_name( $blog_id );
		$charset = $wpdb->get_charset_collate();
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( "CREATE TABLE $table (
			id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
			post_id BIGINT UNSIGNED NOT NULL,
			user_id BIGINT UNSIGNED NOT NULL,
			option_index TINYINT UNSIGNED NOT NULL,
			voted_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (id),
			UNIQUE KEY uniq_post_user (post_id, user_id),
			KEY post_idx (post_id)
		) $charset;" );
	}

	/**
	 * Cast or change a vote. Returns null on success, or an error code:
	 * 'bad_option' | 'closed' | 'not_a_poll'.
	 *
	 * We use an explicit UPDATE-then-INSERT rather than `ON DUPLICATE KEY UPDATE`
	 * because the SQLite drop-in used in tests doesn't reliably rewrite the
	 * MySQL form, and `$wpdb->update`/`->insert` are portable.
	 */
	public static function vote( int $post_id, int $user_id, int $option_index ): ?string {
		$options = self::options_for( $post_id );
		if ( ! $options ) return 'not_a_poll';
		if ( $option_index < 0 || $option_index >= count( $options ) ) return 'bad_option';
		if ( self::is_closed( $post_id ) ) return 'closed';

		global $wpdb;
		$table = self::table_name();

		$updated = $wpdb->update(
			$table,
			[ 'option_index' => $option_index, 'voted_at' => current_time( 'mysql', true ) ],
			[ 'post_id' => $post_id, 'user_id' => $user_id ],
			[ '%d', '%s' ],
			[ '%d', '%d' ]
		);
		// `update` returns rows-affected (int) on success, false on error.
		// MySQL returns 0 when the row exists but no column changed; in that
		// case we still don't want to fall through to INSERT (UNIQUE would
		// reject it). Detect "no matching row" by counting first.
		if ( $updated === false || $updated === 0 ) {
			$exists = (int) $wpdb->get_var( $wpdb->prepare(
				"SELECT COUNT(*) FROM $table WHERE post_id = %d AND user_id = %d",
				$post_id, $user_id
			) );
			if ( $exists === 0 ) {
				$wpdb->insert(
					$table,
					[
						'post_id'      => $post_id,
						'user_id'      => $user_id,
						'option_index' => $option_index,
					],
					[ '%d', '%d', '%d' ]
				);
			}
		}
		return null;
	}

	/** @return int[] zero-padded counts aligned with the option index. */
	public static function counts_for( int $post_id, int $option_count ): array {
		global $wpdb;
		$table = self::table_name();
		$rows  = $wpdb->get_results( $wpdb->prepare(
			"SELECT option_index, COUNT(*) AS n FROM $table WHERE post_id = %d GROUP BY option_index",
			$post_id
		), ARRAY_A );
		$out = array_fill( 0, $option_count, 0 );
		foreach ( $rows as $r ) {
			$i = (int) $r['option_index'];
			if ( $i >= 0 && $i < $option_count ) $out[ $i ] = (int) $r['n'];
		}
		return $out;
	}

	/** Returns option_index for $user_id on $post_id, or -1 if no vote. */
	public static function my_vote( int $post_id, int $user_id ): int {
		if ( ! $user_id ) return -1;
		global $wpdb;
		$table = self::table_name();
		$row = $wpdb->get_var( $wpdb->prepare(
			"SELECT option_index FROM $table WHERE post_id = %d AND user_id = %d",
			$post_id, $user_id
		) );
		return $row === null ? -1 : (int) $row;
	}

	/**
	 * Voters for a poll, oldest first. Returns one row per voter with the
	 * design-system avatar URL (data: URI or attachment URL via
	 * `Avatar::url_for_user()`).
	 *
	 * Shape: `[ [ 'name' => string, 'avatar_url' => string, 'option_index' => int ], ... ]`.
	 *
	 * Caller should suppress the list when the poll is anonymous.
	 */
	public static function voters_for( int $post_id ): array {
		global $wpdb;
		$table = self::table_name();
		$rows  = $wpdb->get_results( $wpdb->prepare(
			"SELECT user_id, option_index FROM $table WHERE post_id = %d ORDER BY voted_at ASC",
			$post_id
		), ARRAY_A );
		$out = [];
		foreach ( $rows as $r ) {
			$u = get_userdata( (int) $r['user_id'] );
			if ( ! $u ) continue;
			$name = $u->display_name ?: $u->user_login;
			$out[] = [
				'name'         => $name,
				'avatar_url'   => \HeyFam\Core\Avatars\Avatar::url_for_user( (int) $u->ID, 22 ),
				'option_index' => (int) $r['option_index'],
			];
		}
		return $out;
	}

	/** Decoded options array (≥ 2 strings), or null if this post isn't a poll. */
	public static function options_for( int $post_id ): ?array {
		$raw = get_post_meta( $post_id, 'heyfam_poll_options', true );
		if ( ! is_string( $raw ) || $raw === '' ) return null;
		$decoded = json_decode( $raw, true );
		if ( ! is_array( $decoded ) || count( $decoded ) < 2 ) return null;
		return array_values( array_map( 'strval', $decoded ) );
	}

	public static function is_closed( int $post_id ): bool {
		$closes = (string) get_post_meta( $post_id, 'heyfam_poll_closes_at', true );
		if ( $closes === '' ) return false;
		$ts = strtotime( $closes . ' UTC' );
		return $ts && $ts < time();
	}

	public static function is_anon( int $post_id ): bool {
		return (string) get_post_meta( $post_id, 'heyfam_poll_anon', true ) === '1';
	}
}
