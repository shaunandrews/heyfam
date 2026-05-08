<?php
namespace HeyFam\Core\Fams;

final class FamCreation {
	/**
	 * Returns blog_id on success, or WP_Error.
	 */
	public static function create( int $creator_user_id, string $name, string $slug ): int|\WP_Error {
		$valid = Slugs::validate( $slug );
		if ( is_wp_error( $valid ) ) return $valid;

		$main_site = get_network()->site_id;
		$main      = get_blog_details( $main_site );
		$domain    = $main->domain;
		$path      = rtrim( $main->path, '/' ) . '/' . $slug . '/';

		if ( domain_exists( $domain, $path ) ) {
			return new \WP_Error( 'slug_taken', 'That fam URL is already taken.' );
		}

		$blog_id = wpmu_create_blog( $domain, $path, $name, $creator_user_id, [
			'public' => 0,
		] );
		if ( is_wp_error( $blog_id ) ) return $blog_id;

		switch_to_blog( (int) $blog_id );
		try {
			update_option( 'blogname',   $name );
			update_option( 'blog_public', 0 );
			update_option( 'comment_registration', 1 );
			update_option( 'thread_comments', 1 );
			update_option( 'thread_comments_depth', 5 );
			update_option( 'default_comment_status', 'open' );

			// Promote the creator to fam_admin (wpmu_create_blog gives them administrator).
			$user = new \WP_User( $creator_user_id );
			$user->set_role( Roles::ADMIN_ROLE );
		} finally {
			restore_current_blog();
		}

		return (int) $blog_id;
	}
}
