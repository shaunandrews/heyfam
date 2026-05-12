<?php
namespace HeyFam\Core\Fams;

/**
 * Per-family persistent invite link. Unlike single-use phone invites, an
 * open-invite code is reusable: anyone with the link can join the fam.
 * Lives in site_option keyed by blog id so it survives across requests.
 */
final class OpenInvites {
	private const OPTION_PREFIX = '_heyfam_open_invite_';

	/** Get the existing open invite for a fam, or create one. Returns the plaintext code. */
	public static function get_or_create( int $blog_id ): string {
		$existing = self::get( $blog_id );
		if ( $existing !== '' ) return $existing;
		$code = Invites::generate_code();
		update_site_option( self::OPTION_PREFIX . $blog_id, $code );
		return $code;
	}

	/** Plaintext code if set, empty string otherwise. */
	public static function get( int $blog_id ): string {
		$v = get_site_option( self::OPTION_PREFIX . $blog_id, '' );
		return is_string( $v ) ? $v : '';
	}

	/** Rotate the code (invalidates any previously-shared link). */
	public static function rotate( int $blog_id ): string {
		$code = Invites::generate_code();
		update_site_option( self::OPTION_PREFIX . $blog_id, $code );
		return $code;
	}

	/** True if the supplied code matches the fam's current open invite. */
	public static function matches( int $blog_id, string $code ): bool {
		$stored = self::get( $blog_id );
		if ( $stored === '' || $code === '' ) return false;
		return hash_equals( $stored, $code );
	}

	/** Walk every blog id and return the one whose open code matches. Null if none. */
	public static function resolve_blog( string $code ): ?int {
		if ( $code === '' ) return null;
		$sites = get_sites( [ 'fields' => 'ids', 'number' => 0 ] );
		foreach ( $sites as $sid ) {
			if ( self::matches( (int) $sid, $code ) ) return (int) $sid;
		}
		return null;
	}
}
