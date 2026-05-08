<?php
namespace HeyFam\Core;

final class Plugin {
	public function boot(): void {
		new \HeyFam\Core\Privacy\PIIShield();
		new \HeyFam\Core\REST\Routes();
		new \HeyFam\Core\Fams\Roles();
		new \HeyFam\Core\Comments\Threading();
		new \HeyFam\Core\PWA\Serve();
		new \HeyFam\Core\PageBootstrap();
		new \HeyFam\Core\Notifs\FanOut();

		add_action( 'wp_initialize_site', static function ( \WP_Site $site ) {
			\HeyFam\Core\Fams\Invites::create_table(      (int) $site->blog_id );
			\HeyFam\Core\Reactions\Manager::create_table( (int) $site->blog_id );
		}, 30, 1 );

		add_action( 'wp_insert_post', static function ( int $post_id, \WP_Post $post, bool $update ) {
			if ( $update || $post->post_status !== 'publish' || $post->post_type !== 'post' ) return;
			\HeyFam\Core\Notifs\FanOut::schedule_post( get_current_blog_id(), $post_id );
		}, 20, 3 );

		add_action( 'wp_insert_comment', static function ( int $comment_id, \WP_Comment $comment ) {
			if ( (int) $comment->comment_approved !== 1 ) return;
			\HeyFam\Core\Notifs\FanOut::schedule_comment(
				get_current_blog_id(),
				(int) $comment->comment_post_ID,
				$comment_id
			);
		}, 20, 2 );

		add_action( 'heyfam_reaction_added', static function ( string $target_type, int $target_id, int $user_id ) {
			\HeyFam\Core\Notifs\FanOut::schedule_reaction( get_current_blog_id(), $target_type, $target_id, $user_id );
		}, 10, 3 );
	}

	public static function activate(): void {
		\HeyFam\Core\Fams\Roles::seed_all_existing_sites();
		foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
			\HeyFam\Core\Fams\Invites::create_table( (int) $site->blog_id );
		}
		foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
			\HeyFam\Core\Reactions\Manager::create_table( (int) $site->blog_id );
		}
		\HeyFam\Core\Notifs\Push::create_table();
		\HeyFam\Core\PageBootstrap::ensure_pages();
		flush_rewrite_rules();
	}

	public static function deactivate(): void {
		flush_rewrite_rules();
	}
}
