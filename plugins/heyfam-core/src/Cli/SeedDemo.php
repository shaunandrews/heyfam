<?php
namespace HeyFam\Core\Cli;

use HeyFam\Core\Fams\FamCreation;
use HeyFam\Core\Fams\Membership;
use HeyFam\Core\Fams\Roles;
use HeyFam\Core\Fams\Slugs;

/**
 * Spin up a complete demo fam from scratch: admin user + N members,
 * M posts, a few comments and reactions. Useful for design work and
 * the e2e baseline.
 */
final class SeedDemo {
	/**
	 * @return array{blog_id:int, fam_url:string, admin_id:int, member_ids:int[], post_ids:int[]}
	 */
	public static function run( array $opts ): array {
		$name    = $opts['name']    ?? 'Demo Fam';
		$slug    = $opts['slug']    ?? Slugs::suggest( $name );
		$members = (int) ( $opts['members'] ?? 3 );
		$posts   = (int) ( $opts['posts']   ?? 5 );

		// 1. Admin user — uses a clearly-fake phone.
		$admin_id = self::ensure_user( '+15550000001', 'Demo Admin' );

		// 2. Fam.
		$blog_id = FamCreation::create( $admin_id, $name, $slug );
		if ( is_wp_error( $blog_id ) ) {
			throw new \RuntimeException( 'Fam create failed: ' . $blog_id->get_error_message() );
		}

		// 3. Members.
		$member_ids  = [];
		$first_names = [ 'Riley', 'Alex', 'Jordan', 'Sky', 'Robin', 'Sam', 'Casey', 'Drew', 'Quinn', 'Avery' ];
		for ( $i = 0; $i < $members; $i++ ) {
			$name_i  = $first_names[ $i % count( $first_names ) ] . ' Demo';
			$phone_i = '+1555000' . str_pad( (string) ( 1000 + $i + 1 ), 4, '0', STR_PAD_LEFT );
			$uid     = self::ensure_user( $phone_i, $name_i );
			$ok      = Membership::add( $uid, $blog_id, Roles::MEMBER_ROLE );
			if ( is_wp_error( $ok ) ) continue;
			$member_ids[] = $uid;
		}

		// 4. Posts + comments + reactions in the new blog's context.
		$post_ids = [];
		switch_to_blog( $blog_id );
		try {
			$authors = array_merge( [ $admin_id ], $member_ids );
			$bodies  = [
				'Hey fam — first post! 👋',
				'Anyone up for dinner this weekend?',
				'Saw this and thought of grandma.',
				'New baby photos in the family chat 💛',
				'Reminder: Sunday brunch @ 11.',
				'Trip planning — who is in?',
				'A funny thing happened on the way to soccer practice...',
			];
			for ( $i = 0; $i < $posts; $i++ ) {
				$author  = $authors[ $i % count( $authors ) ];
				$post_id = wp_insert_post( [
					'post_type'     => 'post',
					'post_status'   => 'publish',
					'post_author'   => $author,
					'post_title'    => '', // wall posts have no title
					'post_content'  => $bodies[ $i % count( $bodies ) ],
					'post_date_gmt' => gmdate( 'Y-m-d H:i:s', time() - ( $posts - $i ) * 1800 ),
				] );
				if ( $post_id && ! is_wp_error( $post_id ) ) {
					$post_ids[] = $post_id;

					// A couple of comments per post.
					$commenters = array_values( array_filter( $authors, fn( $a ) => $a !== $author ) );
					foreach ( array_slice( $commenters, 0, 2 ) as $c_uid ) {
						$c_user = get_userdata( $c_uid );
						wp_insert_comment( [
							'comment_post_ID'      => $post_id,
							'comment_content'      => 'Love it.',
							'comment_author'       => $c_user->display_name,
							'comment_author_email' => $c_user->user_email ?: 'no-reply@heyfam.blog',
							'user_id'              => $c_uid,
							'comment_approved'     => 1,
						] );
					}

					// A reaction or two.
					foreach ( array_slice( $commenters, 0, 2 ) as $r_uid ) {
						\HeyFam\Core\Reactions\Manager::add( 'post', $post_id, $r_uid, '❤️' );
					}
				}
			}
		} finally {
			restore_current_blog();
		}

		$url = trailingslashit( get_site_url( $blog_id ) );

		return [
			'blog_id'    => (int) $blog_id,
			'fam_url'    => $url,
			'admin_id'   => $admin_id,
			'member_ids' => $member_ids,
			'post_ids'   => $post_ids,
		];
	}

	private static function ensure_user( string $phone, string $display_name ): int {
		$existing = \HeyFam\Core\Auth\PhoneSignup::find_user_by_phone( $phone );
		if ( $existing ) return $existing;
		$uid = wp_insert_user( [
			'user_login'   => 'p' . preg_replace( '/\D/', '', $phone ),
			'user_pass'    => wp_generate_password( 32, true, true ),
			'display_name' => $display_name,
			'nickname'     => $display_name,
			'user_email'   => 'demo-' . substr( md5( $phone ), 0, 8 ) . '@heyfam.invalid',
		] );
		if ( is_wp_error( $uid ) ) {
			throw new \RuntimeException( 'Could not create demo user: ' . $uid->get_error_message() );
		}
		update_user_meta( $uid, 'phone_e164',        $phone );
		update_user_meta( $uid, 'phone_verified_at', gmdate( 'c' ) );
		return (int) $uid;
	}

	/**
	 * ## OPTIONS
	 *
	 * [--name=<name>]
	 * : Display name for the fam. Default: "Demo Fam".
	 *
	 * [--slug=<slug>]
	 * : URL slug. Default: auto-derived from name.
	 *
	 * [--members=<n>]
	 * : Number of demo members (in addition to the admin). Default: 3.
	 *
	 * [--posts=<m>]
	 * : Number of demo posts. Default: 5.
	 *
	 * [--reset]
	 * : Delete any existing fam at the same slug before creating.
	 *
	 * ## EXAMPLES
	 *
	 *     wp heyfam seed-demo --name="The Smiths" --slug=smiths --members=4 --posts=6
	 *     wp heyfam seed-demo --reset
	 */
	public function __invoke( array $args, array $assoc ): void {
		$slug = $assoc['slug'] ?? Slugs::suggest( $assoc['name'] ?? 'Demo Fam' );

		if ( isset( $assoc['reset'] ) ) {
			$main     = get_network()->site_id;
			$domain   = get_blog_details( $main )->domain;
			$path     = rtrim( get_blog_details( $main )->path, '/' ) . "/$slug/";
			$existing = (int) domain_exists( $domain, $path );
			if ( $existing ) {
				\WP_CLI::log( "Removing existing fam #$existing at /$slug/" );
				require_once ABSPATH . 'wp-admin/includes/ms.php';
				wpmu_delete_blog( $existing, true );
			}
		}

		try {
			$result = self::run( $assoc );
		} catch ( \Throwable $e ) {
			\WP_CLI::error( $e->getMessage() );
		}

		\WP_CLI::success( sprintf(
			'Seeded fam #%d at %s (admin #%d, %d members, %d posts).',
			$result['blog_id'],
			$result['fam_url'],
			$result['admin_id'],
			count( $result['member_ids'] ),
			count( $result['post_ids'] )
		) );
		\WP_CLI::log( "Login URL (admin): {$result['fam_url']}wp-login.php" );
		\WP_CLI::log( "Demo admin phone:  +15550000001 (dev-mode code: 000000)" );
	}
}
