<?php
namespace HeyFam\Core\Notifs;

use Minishlink\WebPush\Subscription;
use Minishlink\WebPush\WebPush;

final class Push {
	public static function table_name(): string {
		global $wpdb;
		return $wpdb->base_prefix . 'heyfam_push_subscriptions';
	}

	public static function create_table(): void {
		global $wpdb;
		$table = self::table_name();
		$charset = $wpdb->get_charset_collate();
		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( "CREATE TABLE $table (
			id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
			user_id BIGINT UNSIGNED NOT NULL,
			endpoint TEXT NOT NULL,
			endpoint_hash CHAR(64) NOT NULL,
			p256dh_key VARCHAR(255) NOT NULL,
			auth_key VARCHAR(255) NOT NULL,
			user_agent VARCHAR(255) NULL,
			created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
			last_used_at DATETIME NULL,
			expiration_time BIGINT NULL,
			PRIMARY KEY (id),
			UNIQUE KEY endpoint_hash (endpoint_hash),
			KEY user_id (user_id)
		) $charset;" );
	}

	public static function upsert( int $user_id, string $endpoint, string $p256dh, string $auth, ?int $expiration_time, ?string $ua ): void {
		global $wpdb;
		$hash = hash( 'sha256', $endpoint );
		$wpdb->replace( self::table_name(), [
			'user_id'         => $user_id,
			'endpoint'        => $endpoint,
			'endpoint_hash'   => $hash,
			'p256dh_key'      => $p256dh,
			'auth_key'        => $auth,
			'user_agent'      => $ua,
			'expiration_time' => $expiration_time,
		] );
	}

	public static function for_user( int $user_id ): array {
		global $wpdb;
		return $wpdb->get_results( $wpdb->prepare(
			"SELECT * FROM " . self::table_name() . " WHERE user_id = %d", $user_id
		), ARRAY_A );
	}

	public static function delete_by_endpoint_hash( string $hash ): void {
		global $wpdb;
		$wpdb->delete( self::table_name(), [ 'endpoint_hash' => $hash ] );
	}

	public static function send( int $user_id, array $payload ): void {
		$subs = self::for_user( $user_id );
		if ( ! $subs ) return;

		$auth = [
			'VAPID' => [
				'subject'    => getenv( 'VAPID_SUBJECT' )    ?: 'mailto:support@heyfam.blog',
				'publicKey'  => getenv( 'VAPID_PUBLIC_KEY' ),
				'privateKey' => getenv( 'VAPID_PRIVATE_KEY' ),
			],
		];
		$webpush = new WebPush( $auth );
		$webpush->setDefaultOptions( [ 'TTL' => 60 * 60 * 24 ] );

		foreach ( $subs as $row ) {
			$sub = Subscription::create( [
				'endpoint'        => $row['endpoint'],
				'keys'            => [ 'p256dh' => $row['p256dh_key'], 'auth' => $row['auth_key'] ],
				'expirationTime'  => $row['expiration_time'] ? (int) $row['expiration_time'] : null,
			] );
			$webpush->queueNotification( $sub, wp_json_encode( $payload ) );
		}

		foreach ( $webpush->flush() as $report ) {
			if ( $report->isSuccess() ) continue;
			$code = $report->getResponse() ? $report->getResponse()->getStatusCode() : 0;
			if ( in_array( $code, [ 404, 410 ], true ) ) {
				self::delete_by_endpoint_hash( hash( 'sha256', $report->getRequest()->getUri()->__toString() ) );
			} else {
				error_log( '[heyfam] push send failed: ' . $report->getReason() );
			}
		}
	}
}
