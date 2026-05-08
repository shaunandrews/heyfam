<?php
namespace HeyFam\Core\Notifs;

use HeyFam\Core\Auth\TwilioClient;
use Twilio\Exceptions\TwilioException;

final class SMS {
	public static function send( string $to_e164, string $body ): bool {
		if ( self::is_opted_out( $to_e164 ) ) return false;
		try {
			TwilioClient::rest()->messages->create( $to_e164, [
				'messagingServiceSid' => TwilioClient::messaging_sid(),
				'body'                => $body,
			] );
			return true;
		} catch ( TwilioException $e ) {
			error_log( '[heyfam] SMS send failed: ' . $e->getMessage() );
			return false;
		}
	}

	public static function is_opted_out( string $phone_e164 ): bool {
		return (bool) get_site_option( self::optout_key( $phone_e164 ) );
	}

	public static function set_opted_out( string $phone_e164, bool $out = true ): void {
		$key = self::optout_key( $phone_e164 );
		if ( $out ) update_site_option( $key, 1 );
		else delete_site_option( $key );
	}

	private static function optout_key( string $phone_e164 ): string {
		return 'heyfam_sms_optout_' . md5( $phone_e164 );
	}
}
