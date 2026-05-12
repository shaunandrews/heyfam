<?php
namespace HeyFam\Core\Auth;

use Twilio\Rest\Client;

final class TwilioClient {
	private static ?Client $client = null;

	public static function rest(): Client {
		if ( self::$client === null ) {
			$account = getenv( 'TWILIO_ACCOUNT_SID' )    ?: '';
			$key     = getenv( 'TWILIO_API_KEY_SID' )    ?: '';
			$secret  = getenv( 'TWILIO_API_KEY_SECRET' ) ?: '';
			$token   = getenv( 'TWILIO_AUTH_TOKEN' )     ?: '';

			// Prefer API Key auth (individually revocable); fall back to the
			// account-wide auth token if no API key is configured.
			if ( $key !== '' && $secret !== '' ) {
				self::$client = new Client( $key, $secret, $account );
			} else {
				self::$client = new Client( $account, $token );
			}
		}
		return self::$client;
	}

	public static function verify_sid(): string {
		return getenv( 'TWILIO_VERIFY_SID' ) ?: '';
	}

	public static function messaging_sid(): string {
		return getenv( 'TWILIO_MESSAGING_SID' ) ?: '';
	}
}
