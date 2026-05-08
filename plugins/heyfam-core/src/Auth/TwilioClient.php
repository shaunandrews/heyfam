<?php
namespace HeyFam\Core\Auth;

use Twilio\Rest\Client;

final class TwilioClient {
	private static ?Client $client = null;

	public static function rest(): Client {
		if ( self::$client === null ) {
			$sid   = getenv( 'TWILIO_ACCOUNT_SID' ) ?: '';
			$token = getenv( 'TWILIO_AUTH_TOKEN' )  ?: '';
			self::$client = new Client( $sid, $token );
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
