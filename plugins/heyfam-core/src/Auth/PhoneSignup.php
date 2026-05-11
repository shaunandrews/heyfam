<?php
namespace HeyFam\Core\Auth;

use Twilio\Exceptions\TwilioException;

final class PhoneSignup {
	private static function is_dev_mode(): bool {
		return ! getenv( 'TWILIO_ACCOUNT_SID' );
	}

	/**
	 * Returns true on success. Always returns the same shape on enumeration paths
	 * to prevent existence leaks.
	 */
	public static function start_verification( string $phone_e164 ): bool {
		if ( self::is_dev_mode() ) {
			error_log( "[heyfam dev] OTP for $phone_e164 is 000000" );
			return true;
		}
		try {
			TwilioClient::rest()->verify->v2
				->services( TwilioClient::verify_sid() )
				->verifications
				->create( $phone_e164, 'sms' );
			return true;
		} catch ( TwilioException $e ) {
			error_log( '[heyfam] verify start failed: ' . $e->getMessage() );
			return false;
		}
	}

	public static function check_code( string $phone_e164, string $code ): bool {
		if ( self::is_dev_mode() ) {
			return $code === '000000';
		}
		try {
			$check = TwilioClient::rest()->verify->v2
				->services( TwilioClient::verify_sid() )
				->verificationChecks
				->create( [ 'to' => $phone_e164, 'code' => $code ] );
			return $check->status === 'approved';
		} catch ( TwilioException $e ) {
			error_log( '[heyfam] verify check failed: ' . $e->getMessage() );
			return false;
		}
	}

	/**
	 * Returns the user_id; creates the user if needed.
	 *
	 * Identity is the `phone_e164` user_meta value (NOT user_login).
	 * `wp_insert_user` strips `+` from user_login via sanitize_user, so
	 * looking up by user_login('+15555550100') would miss a user stored
	 * as '15555550100'.
	 */
	public static function ensure_user( string $phone_e164, string $display_name = '' ): int {
		$existing = self::find_user_by_phone( $phone_e164 );
		if ( $existing ) {
			return (int) $existing;
		}
		$user_id = wp_insert_user( [
			'user_login'    => self::user_login_for_phone( $phone_e164 ),
			'user_pass'     => wp_generate_password( 32, true, true ),
			'display_name'  => $display_name !== '' ? $display_name : 'New User',
			'nickname'      => $display_name !== '' ? $display_name : 'New User',
		] );
		if ( is_wp_error( $user_id ) ) {
			throw new \RuntimeException( 'wp_insert_user failed: ' . $user_id->get_error_message() );
		}
		update_user_meta( $user_id, 'phone_e164', $phone_e164 );
		update_user_meta( $user_id, 'phone_verified_at', gmdate( 'c' ) );
		update_user_meta( $user_id, 'heyfam_onboarded_at', gmdate( 'c' ) );
		return (int) $user_id;
	}

	/** Returns user_id or null. */
	public static function find_user_by_phone( string $phone_e164 ): ?int {
		$users = get_users( [
			'meta_key'    => 'phone_e164',
			'meta_value'  => $phone_e164,
			'number'      => 1,
			'fields'      => 'ID',
			'blog_id'     => 0, // any-site search on multisite
		] );
		return $users ? (int) $users[0] : null;
	}

	/**
	 * `+` is stripped by sanitize_user. Use a stable, predictable login
	 * derived from the phone (digits only, prefixed) so existing-user
	 * lookups by login still work for legacy code paths.
	 */
	public static function user_login_for_phone( string $phone_e164 ): string {
		return 'p' . preg_replace( '/\D/', '', $phone_e164 );
	}
}
