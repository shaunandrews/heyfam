<?php
namespace HeyFam\Core\Reactions;

final class Manager {
	public static function table_name( ?int $blog_id = null ): string {
		global $wpdb;
		$bid = $blog_id ?? get_current_blog_id();
		return $wpdb->base_prefix . $bid . '_heyfam_reactions';
	}

	public static function create_table( int $blog_id ): void {
		global $wpdb;
		$table   = self::table_name( $blog_id );
		$charset = $wpdb->get_charset_collate();
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( "CREATE TABLE $table (
			id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
			target_type VARCHAR(8) NOT NULL,
			target_id BIGINT UNSIGNED NOT NULL,
			user_id BIGINT UNSIGNED NOT NULL,
			emoji VARCHAR(32) NOT NULL,
			created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (id),
			UNIQUE KEY uniq_target_user_emoji (target_type, target_id, user_id, emoji),
			KEY target (target_type, target_id)
		) $charset;" );
	}

	/** Returns true on insert, false if the row already exists. */
	public static function add( string $target_type, int $target_id, int $user_id, string $emoji ): bool {
		global $wpdb;
		$table = self::table_name();
		$rows  = $wpdb->query( $wpdb->prepare(
			"INSERT IGNORE INTO $table (target_type, target_id, user_id, emoji) VALUES (%s, %d, %d, %s)",
			$target_type, $target_id, $user_id, $emoji
		) );
		return (int) $rows > 0;
	}

	public static function remove( string $target_type, int $target_id, int $user_id, string $emoji ): bool {
		global $wpdb;
		$table = self::table_name();
		$rows  = $wpdb->delete( $table, [
			'target_type' => $target_type,
			'target_id'   => $target_id,
			'user_id'     => $user_id,
			'emoji'       => $emoji,
		] );
		return (int) $rows > 0;
	}

	public static function counts_for( string $target_type, int $target_id ): array {
		global $wpdb;
		$table = self::table_name();
		$rows  = $wpdb->get_results( $wpdb->prepare(
			"SELECT emoji, COUNT(*) AS n FROM $table
			 WHERE target_type = %s AND target_id = %d GROUP BY emoji",
			$target_type, $target_id
		), ARRAY_A );
		$out = [];
		foreach ( $rows as $r ) {
			$out[ $r['emoji'] ] = (int) $r['n'];
		}
		return $out;
	}
}
