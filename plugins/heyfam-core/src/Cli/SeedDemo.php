<?php
namespace HeyFam\Core\Cli;

use HeyFam\Core\Fams\FamCreation;
use HeyFam\Core\Fams\Membership;
use HeyFam\Core\Fams\Roles;
use HeyFam\Core\Fams\Slugs;

/**
 * Spin up a complete demo fam from scratch: matriarch + N members,
 * M posts, threaded comments, varied reactions. Designed to look like
 * a real family chat so design work can be reviewed in context.
 */
final class SeedDemo {

	private const SURNAME      = 'Reyes';
	private const FIRST_NAMES  = [ 'Maria', 'Riley', 'Alex', 'Jordan', 'Sky', 'Robin', 'Sam', 'Casey', 'Drew', 'Quinn' ];
	private const REACT_EMOJIS = [ '❤️', '😂', '🥹', '🎉', '🙌', '🔥', '🥰', '👏', '😢', '💯' ];

	/** Post body + canned threaded chatter that fits each topic. */
	private const POSTS = [
		[
			'body'     => 'Sunday brunch at mine — 11 sharp. Cinnamon rolls confirmed 🥐',
			'comments' => [
				[ 'Count me in' ],
				[ 'I\'ll bring orange juice', [ 'Bless you', 'Two cartons pls' ] ],
				[ 'What time again?', [ 'Eleven!', 'Sharp 😅' ] ],
				[ 'Picking up grandma on the way' ],
			],
		],
		[
			'body'     => 'First day of kindergarten down. He survived. We survived.',
			'comments' => [
				[ 'Proud of him 💛' ],
				[ 'Look at that backpack 😭', [ 'I know!!', 'It\'s bigger than him' ] ],
				[ 'Tell him tía says high five' ],
			],
		],
		[
			'body'     => 'Anyone watching the game tonight? My couch, your snacks.',
			'comments' => [
				[ 'In', [ 'Same' ] ],
				[ 'Halftime nachos 🙋‍♂️' ],
				[ 'Score prediction: 24-20', [ 'Bold' ] ],
			],
		],
		[
			'body'     => 'Mom — the chocolate cake recipe please? The one with the espresso.',
			'comments' => [
				[ 'Sending now', [ 'Thank you ❤️' ] ],
				[ 'Two sticks of butter, btw — don\'t skimp' ],
				[ 'Save me a slice 🙏' ],
			],
		],
		[
			'body'     => 'Just landed in Lisbon. The light is unreal 🌞',
			'comments' => [
				[ 'JEALOUS' ],
				[ 'Bring me back a pastel de nata', [ 'Six. Minimum.', 'Same' ] ],
				[ 'Pictures or it didn\'t happen 📸' ],
			],
		],
		[
			'body'     => 'Birthday brainstorm for Dad — drop ideas before Friday.',
			'comments' => [
				[ 'A new fishing rod' ],
				[ 'Concert tickets? He keeps mentioning that band', [ 'Yes 🎯' ] ],
				[ 'Anything but more socks 🧦', [ 'lol', 'noted' ] ],
			],
		],
		[
			'body'     => 'Camping pics incoming. Phone was full so bear with me.',
			'comments' => [
				[ 'These are great' ],
				[ 'Look at Mateo by the fire ❤️' ],
				[ 'Send me the raw ones?', [ 'On it' ] ],
			],
		],
		[
			'body'     => 'Has anyone seen Carlos\' blue hat? He\'s been complaining for two days.',
			'comments' => [
				[ 'In the truck I think' ],
				[ 'Saw it on the porch this morning', [ 'Bless you' ] ],
				[ 'I\'ll check the garage' ],
			],
		],
	];

	/**
	 * @return array{blog_id:int, fam_url:string, admin_id:int, member_ids:int[], post_ids:int[]}
	 */
	public static function run( array $opts ): array {
		$name    = $opts['name']    ?? 'The Reyes Family';
		$slug    = $opts['slug']    ?? Slugs::suggest( $name );
		$members = (int) ( $opts['members'] ?? 5 );
		$posts   = (int) ( $opts['posts']   ?? 8 );

		// 1. Matriarch / admin. Avatar index 1.
		$admin_id = self::ensure_user( '+15550000001', self::FIRST_NAMES[0] . ' ' . self::SURNAME, 1 );

		// 2. Fam.
		$blog_id = FamCreation::create( $admin_id, $name, $slug );
		if ( is_wp_error( $blog_id ) ) {
			throw new \RuntimeException( 'Fam create failed: ' . $blog_id->get_error_message() );
		}

		// 3. Members — each gets a deterministic pravatar (img 2..N).
		$member_ids = [];
		for ( $i = 0; $i < $members; $i++ ) {
			$first   = self::FIRST_NAMES[ ( $i + 1 ) % count( self::FIRST_NAMES ) ];
			$display = "$first " . self::SURNAME;
			$phone   = '+1555000' . str_pad( (string) ( 1000 + $i + 1 ), 4, '0', STR_PAD_LEFT );
			$uid     = self::ensure_user( $phone, $display, $i + 2 );
			$ok      = Membership::add( $uid, $blog_id, Roles::MEMBER_ROLE );
			if ( is_wp_error( $ok ) ) continue;
			$member_ids[] = $uid;
		}

		// 3b. Add the seeding user as an admin too, so the fam appears in their
		// "My Sites" menu and they can post/react/manage as themselves.
		$current_uid = get_current_user_id();
		if ( $current_uid && $current_uid !== $admin_id ) {
			Membership::add( $current_uid, $blog_id, Roles::ADMIN_ROLE );
		}

		// 4. Posts, threaded comments, reactions — in the new blog's context.
		$post_ids = [];
		switch_to_blog( $blog_id );
		try {
			$authors = array_merge( [ $admin_id ], $member_ids );

			for ( $i = 0; $i < $posts; $i++ ) {
				$tpl    = self::POSTS[ $i % count( self::POSTS ) ];
				$author = $authors[ $i % count( $authors ) ];

				$post_id = wp_insert_post( [
					'post_type'     => 'post',
					'post_status'   => 'publish',
					'post_author'   => $author,
					'post_title'    => '',
					'post_content'  => $tpl['body'],
					'post_date_gmt' => gmdate( 'Y-m-d H:i:s', time() - ( $posts - $i ) * 1800 ),
				] );
				if ( ! $post_id || is_wp_error( $post_id ) ) continue;
				$post_ids[] = $post_id;

				// Comments — first author is everyone except the poster, rotating.
				$commenters = array_values( array_filter( $authors, fn( $a ) => $a !== $author ) );
				self::seed_comments( $post_id, $commenters, $tpl['comments'] );

				// Reactions — 2 to 4 distinct emojis on each post, 1-3 reactors each.
				self::seed_reactions( $post_id, $authors, $author );
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

	/** Insert top-level comments + 0-2 nested replies per comment template. */
	private static function seed_comments( int $post_id, array $commenters, array $templates ): void {
		if ( ! $commenters ) return;
		foreach ( $templates as $idx => $tpl ) {
			$text    = is_array( $tpl ) ? $tpl[0] : (string) $tpl;
			$replies = ( is_array( $tpl ) && isset( $tpl[1] ) && is_array( $tpl[1] ) ) ? $tpl[1] : [];
			$c_uid   = $commenters[ $idx % count( $commenters ) ];
			$parent  = self::insert_comment( $post_id, $c_uid, $text, 0 );
			if ( ! $parent ) continue;
			foreach ( $replies as $r_idx => $reply_text ) {
				$r_uid = $commenters[ ( $idx + $r_idx + 1 ) % count( $commenters ) ];
				self::insert_comment( $post_id, $r_uid, $reply_text, $parent );
			}
		}
	}

	private static function insert_comment( int $post_id, int $user_id, string $text, int $parent ): int {
		$user = get_userdata( $user_id );
		if ( ! $user ) return 0;
		$id = wp_insert_comment( [
			'comment_post_ID'      => $post_id,
			'comment_parent'       => $parent,
			'comment_content'      => $text,
			'comment_author'       => $user->display_name,
			'comment_author_email' => $user->user_email ?: 'no-reply@heyfam.blog',
			'user_id'              => $user_id,
			'comment_approved'     => 1,
		] );
		return is_int( $id ) ? $id : 0;
	}

	/** Pick a deterministic mix of reactions per post — distinct emojis, varied reactors. */
	private static function seed_reactions( int $post_id, array $authors, int $poster ): void {
		// Three emoji slots; rotate across posts so the front looks varied.
		$start  = $post_id % count( self::REACT_EMOJIS );
		$emojis = [
			self::REACT_EMOJIS[ $start ],
			self::REACT_EMOJIS[ ( $start + 3 ) % count( self::REACT_EMOJIS ) ],
			self::REACT_EMOJIS[ ( $start + 5 ) % count( self::REACT_EMOJIS ) ],
		];
		$pool = array_values( array_filter( $authors, fn( $a ) => $a !== $poster ) );
		if ( ! $pool ) return;
		foreach ( $emojis as $slot => $emoji ) {
			// Each emoji gets 1..min(3, |pool|) reactors, rotated through the pool.
			$count = min( count( $pool ), 1 + ( ( $post_id + $slot ) % 3 ) );
			for ( $i = 0; $i < $count; $i++ ) {
				$r_uid = $pool[ ( $i + $slot + $post_id ) % count( $pool ) ];
				\HeyFam\Core\Reactions\Manager::add( 'post', $post_id, $r_uid, $emoji );
			}
		}
	}

	/** Find-or-create a phone-verified user and set a deterministic Pravatar URL. */
	private static function ensure_user( string $phone, string $display_name, int $avatar_index ): int {
		$existing = \HeyFam\Core\Auth\PhoneSignup::find_user_by_phone( $phone );
		if ( $existing ) {
			// Refresh display name + avatar each seed so reruns track the latest template.
			wp_update_user( [ 'ID' => $existing, 'display_name' => $display_name, 'nickname' => $display_name ] );
			update_user_meta( $existing, 'heyfam_avatar_url', "https://i.pravatar.cc/300?img={$avatar_index}" );
			return $existing;
		}
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
		update_user_meta( $uid, 'heyfam_avatar_url', "https://i.pravatar.cc/300?img={$avatar_index}" );
		return (int) $uid;
	}

	/**
	 * ## OPTIONS
	 *
	 * [--name=<name>]
	 * : Display name for the fam. Default: "The Reyes Family".
	 *
	 * [--slug=<slug>]
	 * : URL slug. Default: auto-derived from name.
	 *
	 * [--members=<n>]
	 * : Number of demo members (in addition to the admin). Default: 5.
	 *
	 * [--posts=<m>]
	 * : Number of demo posts. Default: 8.
	 *
	 * [--reset]
	 * : Delete any existing fam at the same slug before creating.
	 */
	public function __invoke( array $args, array $assoc ): void {
		$slug = $assoc['slug'] ?? Slugs::suggest( $assoc['name'] ?? 'The Reyes Family' );

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
