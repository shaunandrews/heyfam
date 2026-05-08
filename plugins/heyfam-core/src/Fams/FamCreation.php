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

			// New subsites default to whatever the network's default theme is
			// (often `twentytwentyfive`). Switch to heyfam-theme so the front
			// end immediately uses our IAPI theme.
			if ( wp_get_theme( 'heyfam-theme' )->exists() ) {
				switch_theme( 'heyfam-theme' );
			}

			// Make the fam's front page a "Feed" page rendered by the
			// page-feed template (composer + scrolling feed). Out of the box,
			// new subsites land on a "your latest posts" archive which doesn't
			// load our IAPI islands.
			$feed_id = wp_insert_post( [
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_title'   => 'Feed',
				'post_name'    => 'feed',
				'post_content' => '<!-- HeyFam: rendered by page-feed template -->',
			] );
			if ( $feed_id && ! is_wp_error( $feed_id ) ) {
				update_post_meta( $feed_id, '_wp_page_template', 'page-feed' );
				update_option( 'show_on_front',  'page' );
				update_option( 'page_on_front',  $feed_id );
			}

			// Promote the creator to fam_admin (wpmu_create_blog gives them administrator).
			$user = new \WP_User( $creator_user_id );
			$user->set_role( Roles::ADMIN_ROLE );
		} finally {
			restore_current_blog();
		}

		return (int) $blog_id;
	}
}
