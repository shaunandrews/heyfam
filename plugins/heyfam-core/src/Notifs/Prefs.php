<?php
namespace HeyFam\Core\Notifs;

final class Prefs {
	public const DEFAULTS = [
		'posts'     => [ 'push' => true, 'email' => true, 'sms' => true ],
		'comments'  => [ 'push' => true, 'email' => false, 'sms' => false ],
		'reactions' => [ 'push' => true, 'email' => false, 'sms' => false ],
	];

	public static function for_user( int $user_id, int $blog_id ): array {
		$stored = get_user_meta( $user_id, 'heyfam_notif_prefs_' . $blog_id, true );
		if ( ! is_array( $stored ) ) return self::DEFAULTS;
		return array_replace_recursive( self::DEFAULTS, $stored );
	}

	public static function set( int $user_id, int $blog_id, array $prefs ): void {
		$clean = array_replace_recursive( self::DEFAULTS, $prefs );
		update_user_meta( $user_id, 'heyfam_notif_prefs_' . $blog_id, $clean );
	}

	public static function should_notify( int $user_id, int $blog_id, string $event, string $channel ): bool {
		$prefs = self::for_user( $user_id, $blog_id );
		return ! empty( $prefs[ $event ][ $channel ] );
	}
}
