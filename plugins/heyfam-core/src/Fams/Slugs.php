<?php
namespace HeyFam\Core\Fams;

final class Slugs {
	private const RESERVED = [
		'signup', 'login', 'logout', 'account', 'i', 'wp-admin', 'wp-login.php',
		'wp-content', 'wp-includes', 'wp-json', 'xmlrpc.php', 'feed', 'comments',
		'assets', 'sw.js', 'manifest.webmanifest', 'robots.txt', 'favicon.ico',
		'admin', 'api', 'rest', 'static',
	];

	public static function is_reserved( string $slug ): bool {
		$slug = strtolower( trim( $slug ) );
		if ( $slug === '' ) return true;
		if ( str_starts_with( $slug, 'wp-' ) ) return true;
		return in_array( $slug, self::RESERVED, true );
	}

	public static function validate( string $slug ): true|\WP_Error {
		if ( ! preg_match( '/^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/', $slug ) ) {
			return new \WP_Error( 'invalid_slug', 'Use 3–32 letters/numbers/hyphens; cannot start or end with a hyphen.' );
		}
		if ( self::is_reserved( $slug ) ) {
			return new \WP_Error( 'reserved_slug', 'That fam URL is reserved. Try another.' );
		}
		return true;
	}

	public static function suggest( string $name ): string {
		$slug = strtolower( $name );
		$slug = preg_replace( '/[^a-z0-9]+/', '-', $slug ) ?? '';
		$slug = trim( $slug, '-' );
		if ( strlen( $slug ) < 3 ) {
			$slug = $slug . '-fam';
		}
		if ( self::is_reserved( $slug ) || strlen( $slug ) < 3 ) {
			$slug = 'fam-' . substr( bin2hex( random_bytes( 3 ) ), 0, 5 );
		}
		return $slug;
	}
}
