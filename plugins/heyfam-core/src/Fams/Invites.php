<?php
namespace HeyFam\Core\Fams;

final class Invites {
	public static function table_name( ?int $blog_id = null ): string {
		global $wpdb;
		$bid = $blog_id ?? get_current_blog_id();
		return $wpdb->base_prefix . $bid . '_heyfam_invites';
	}

	public static function create_table( int $blog_id ): void {
		global $wpdb;
		$table   = self::table_name( $blog_id );
		$charset = $wpdb->get_charset_collate();
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( "CREATE TABLE $table (
			id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
			phone_e164 VARCHAR(16) NOT NULL,
			invited_by_user_id BIGINT UNSIGNED NOT NULL,
			code_hash CHAR(64) NOT NULL,
			expires_at DATETIME NOT NULL,
			used_at DATETIME NULL,
			created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (id),
			UNIQUE KEY code_hash (code_hash),
			KEY phone_e164 (phone_e164)
		) $charset;" );
	}

	/**
	 * Returns the plain code (caller sends it via SMS, then discards it).
	 */
	public static function issue( int $blog_id, int $invited_by, string $phone_e164, int $ttl = 7 * DAY_IN_SECONDS ): string {
		global $wpdb;
		$code = self::generate_code();
		$hash = self::hash( $code );
		$wpdb->insert( self::table_name( $blog_id ), [
			'phone_e164'         => $phone_e164,
			'invited_by_user_id' => $invited_by,
			'code_hash'          => $hash,
			'expires_at'         => gmdate( 'Y-m-d H:i:s', time() + $ttl ),
		] );
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			update_site_option( '_heyfam_dev_invite_' . md5( $phone_e164 ), $code );
		}
		return $code;
	}

	/**
	 * Atomic accept. Returns the row on success, null on failure.
	 */
	public static function accept( int $blog_id, string $code, string $phone_e164 ): ?array {
		global $wpdb;
		$hash  = self::hash( $code );
		$table = self::table_name( $blog_id );
		$now   = gmdate( 'Y-m-d H:i:s' );

		$updated = $wpdb->query( $wpdb->prepare(
			"UPDATE $table SET used_at = %s
			 WHERE code_hash = %s
			   AND phone_e164 = %s
			   AND used_at IS NULL
			   AND expires_at >= %s",
			$now, $hash, $phone_e164, $now
		) );
		if ( ! $updated ) return null;
		return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table WHERE code_hash = %s", $hash ), ARRAY_A );
	}

	public static function generate_code(): string {
		return rtrim( strtr( base64_encode( random_bytes( 16 ) ), '+/', '-_' ), '=' );
	}

	public static function hash( string $code ): string {
		$secret = getenv( 'HEYFAM_INVITE_HMAC_SECRET' ) ?: wp_salt( 'auth' );
		return hash_hmac( 'sha256', $code, $secret );
	}
}
