<?php
namespace HeyFam\Core\Fams;

final class Membership {
	public static function add( int $user_id, int $blog_id, string $role = Roles::MEMBER_ROLE ): true|\WP_Error {
		if ( ! get_userdata( $user_id ) ) return new \WP_Error( 'no_user', 'User not found.' );
		if ( ! get_blog_details( $blog_id ) ) return new \WP_Error( 'no_blog', 'Fam not found.' );
		$ok = add_user_to_blog( $blog_id, $user_id, $role );
		if ( is_wp_error( $ok ) ) return $ok;
		return true;
	}

	public static function remove( int $user_id, int $blog_id ): true|\WP_Error {
		$ok = remove_user_from_blog( $user_id, $blog_id );
		if ( is_wp_error( $ok ) ) return $ok;
		return true;
	}

	public static function user_blogs( int $user_id ): array {
		$sites  = get_blogs_of_user( $user_id );
		$result = [];
		foreach ( $sites as $site ) {
			if ( (int) $site->userblog_id === (int) get_network()->site_id ) {
				continue; // skip the main site
			}
			$result[] = [
				'blog_id' => (int) $site->userblog_id,
				'name'    => $site->blogname,
				'slug'    => trim( wp_parse_url( $site->siteurl, PHP_URL_PATH ) ?? '', '/' ),
				'url'     => $site->siteurl,
			];
		}
		return $result;
	}

	public static function user_can_in_fam( int $user_id, int $blog_id, string $cap ): bool {
		$can = false;
		switch_to_blog( $blog_id );
		try {
			$user = new \WP_User( $user_id );
			$can  = $user->has_cap( $cap );
		} finally {
			restore_current_blog();
		}
		return $can;
	}
}
