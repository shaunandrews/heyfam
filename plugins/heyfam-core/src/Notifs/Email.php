<?php
namespace HeyFam\Core\Notifs;

final class Email {
	public static function send( int $user_id, string $subject, string $html_body, string $url, string $list_id ): bool {
		$user = get_userdata( $user_id );
		if ( ! $user || ! $user->user_email ) return false;
		if ( ! self::email_enabled_for( $user_id ) ) return false;

		$unsub_token = self::unsubscribe_token( $user_id );
		$unsub_url   = home_url( '/account?unsub=' . urlencode( $unsub_token ) );
		$unsub_post  = home_url( '/wp-json/heyfam/v1/email/unsub' );

		$headers = [
			'Content-Type: text/html; charset=UTF-8',
			'From: ' . self::from_address(),
			"List-Unsubscribe: <$unsub_url>, <mailto:unsub+$unsub_token@heyfam.blog>",
			"List-Unsubscribe-Post: List-Unsubscribe=One-Click",
			"List-ID: <$list_id.heyfam.blog>",
		];

		$body = $html_body
			. sprintf(
				'<hr><p style="font-size:11px;color:#888">Tap <a href="%s">unsubscribe</a> to stop these emails. <a href="%s">Open in HeyFam</a>.</p>',
				esc_url( $unsub_url ), esc_url( $url )
			);

		return (bool) wp_mail( $user->user_email, $subject, $body, $headers );
	}

	public static function email_enabled_for( int $user_id ): bool {
		return ! get_user_meta( $user_id, 'heyfam_email_unsubscribed', true );
	}

	public static function set_unsubscribed( int $user_id, bool $unsub = true ): void {
		if ( $unsub ) update_user_meta( $user_id, 'heyfam_email_unsubscribed', 1 );
		else delete_user_meta( $user_id, 'heyfam_email_unsubscribed' );
	}

	public static function unsubscribe_token( int $user_id ): string {
		$secret = wp_salt( 'auth' );
		return $user_id . '.' . hash_hmac( 'sha256', (string) $user_id, $secret );
	}

	public static function user_id_from_token( string $token ): ?int {
		[ $uid, $sig ] = array_pad( explode( '.', $token, 2 ), 2, '' );
		if ( ! ctype_digit( $uid ) || ! $sig ) return null;
		$expected = hash_hmac( 'sha256', $uid, wp_salt( 'auth' ) );
		return hash_equals( $expected, $sig ) ? (int) $uid : null;
	}

	private static function from_address(): string {
		$from = getenv( 'POSTMARK_FROM' ) ?: 'notifications@heyfam.blog';
		return 'HeyFam <' . $from . '>';
	}
}
