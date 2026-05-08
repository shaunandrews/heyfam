<?php
namespace HeyFam\Core\Auth;

use HeyFam\Core\Fams\Membership;

final class Authorization {
	/**
	 * Resolve {fam} slug to blog_id, then check capability.
	 * Returns true on success or false if the user lacks the cap; never throws.
	 */
	public static function require_cap( \WP_REST_Request $request, string $cap ): bool {
		if ( ! is_user_logged_in() ) return false;
		$slug = (string) $request->get_param( 'fam' );
		if ( $slug === '' ) return false;

		$blog_id = self::slug_to_blog_id( $slug );
		if ( ! $blog_id ) return false;

		$request->set_param( '_blog_id', $blog_id );
		return Membership::user_can_in_fam( get_current_user_id(), $blog_id, $cap );
	}

	public static function slug_to_blog_id( string $slug ): ?int {
		$main = get_blog_details( get_network()->site_id );
		if ( ! $main ) return null;
		$details = get_blog_details( [
			'domain' => $main->domain,
			'path'   => rtrim( $main->path, '/' ) . '/' . $slug . '/',
		] );
		return $details ? (int) $details->blog_id : null;
	}

	/**
	 * try/finally helper for switching blogs.
	 */
	public static function in_blog( int $blog_id, callable $fn ) {
		switch_to_blog( $blog_id );
		try {
			return $fn();
		} finally {
			restore_current_blog();
		}
	}
}
