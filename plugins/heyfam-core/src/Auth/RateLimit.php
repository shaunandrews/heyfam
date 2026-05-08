<?php
namespace HeyFam\Core\Auth;

final class RateLimit {
	public static function hit( string $bucket, int $window_seconds, int $max ): bool {
		$key   = 'heyfam_rl_' . md5( $bucket );
		$now   = time();
		$entry = get_site_transient( $key );
		if ( ! is_array( $entry ) || $entry['reset_at'] <= $now ) {
			$entry = [ 'count' => 0, 'reset_at' => $now + $window_seconds ];
		}
		$entry['count']++;
		set_site_transient( $key, $entry, $entry['reset_at'] - $now );
		return $entry['count'] <= $max;
	}

	public static function lockout_check( string $phone_e164 ): bool {
		return (bool) get_site_transient( 'heyfam_lock_' . md5( $phone_e164 ) );
	}

	public static function lockout_set( string $phone_e164, int $seconds = 900 ): void {
		set_site_transient( 'heyfam_lock_' . md5( $phone_e164 ), 1, $seconds );
	}

	public static function record_failure( string $phone_e164 ): int {
		$key   = 'heyfam_fail_' . md5( $phone_e164 );
		$count = (int) get_site_transient( $key );
		$count++;
		set_site_transient( $key, $count, 900 );
		if ( $count >= 5 ) {
			self::lockout_set( $phone_e164 );
		}
		return $count;
	}

	public static function clear_failures( string $phone_e164 ): void {
		delete_site_transient( 'heyfam_fail_' . md5( $phone_e164 ) );
		delete_site_transient( 'heyfam_lock_' . md5( $phone_e164 ) );
	}
}
