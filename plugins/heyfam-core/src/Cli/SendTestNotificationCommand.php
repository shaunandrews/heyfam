<?php
namespace HeyFam\Core\Cli;

use HeyFam\Core\Auth\Authorization;
use HeyFam\Core\Notifs\FanOut;

/**
 * Send a one-off test notification to a real user, through the real fan-out
 * pipeline, so we can verify push/email rendering without staging a content event.
 *
 * ## OPTIONS
 *
 * --user=<id>
 * : User ID to deliver to (the recipient — *not* the sender). Required.
 *
 * [--blog=<id>]
 * : Fam (blog) ID for the notification. Defaults to the current site.
 *
 * [--kind=<kind>]
 * : One of: post, comment, reaction. Default: post.
 *
 * [--target=<post_id_or_comment_id>]
 * : The post or comment id to reference. Default: most recent post on the fam.
 *
 * [--dry-run]
 * : Print the payload that would be dispatched, but do not actually send.
 *
 * ## EXAMPLES
 *
 *     # Fire a "new post" notification to user 2 on the current fam
 *     wp heyfam send-test-notification --user=2 --kind=post
 *
 *     # Comment notification, targeting a specific comment
 *     wp heyfam send-test-notification --user=2 --kind=comment --target=14
 *
 *     # Just show the payload — don't actually push/email/SMS
 *     wp heyfam send-test-notification --user=2 --kind=reaction --dry-run
 */
final class SendTestNotificationCommand {
	public function __invoke( array $args, array $assoc ): void {
		$user_id = (int) ( $assoc['user'] ?? 0 );
		$blog_id = (int) ( $assoc['blog'] ?? get_current_blog_id() );
		$kind    = (string) ( $assoc['kind'] ?? 'post' );
		$target  = isset( $assoc['target'] ) ? (int) $assoc['target'] : 0;
		$dry     = ! empty( $assoc['dry-run'] );

		if ( ! $user_id || ! get_userdata( $user_id ) ) {
			\WP_CLI::error( "User $user_id not found." );
		}
		if ( ! in_array( $kind, [ 'post', 'comment', 'reaction' ], true ) ) {
			\WP_CLI::error( "Unknown --kind: $kind (use post|comment|reaction)" );
		}

		$payload = Authorization::in_blog( $blog_id, function () use ( $kind, $target ) {
			return $this->build_payload( $kind, $target );
		} );
		if ( is_wp_error( $payload ) ) {
			\WP_CLI::error( $payload->get_error_message() );
		}

		\WP_CLI::log( "→ kind=$kind user=$user_id blog=$blog_id" );
		\WP_CLI::log( '  title: ' . $payload['title'] );
		\WP_CLI::log( '  body:  ' . $payload['body'] );
		\WP_CLI::log( '  url:   ' . $payload['url'] );
		if ( $payload['sms'] ) \WP_CLI::log( '  sms:   ' . $payload['sms'] );

		if ( $dry ) {
			\WP_CLI::success( 'Dry run; nothing sent.' );
			return;
		}

		// Map kind → event used by Prefs::should_notify (matches FanOut keys).
		$event = match ( $kind ) {
			'post'     => 'posts',
			'comment'  => 'comments',
			'reaction' => 'reactions',
		};

		Authorization::in_blog( $blog_id, function () use ( $user_id, $blog_id, $event, $payload ) {
			( new FanOut() )->dispatch( $user_id, $blog_id, $event, $payload );
		} );
		\WP_CLI::success( "Dispatched $kind notification to user $user_id." );
	}

	private function build_payload( string $kind, int $target ): array {
		$blog = get_blog_details( get_current_blog_id() );
		if ( $kind === 'post' ) {
			$post = $target ? get_post( $target ) : ( get_posts( [ 'numberposts' => 1 ] )[0] ?? null );
			if ( ! $post ) return [
				'title' => "Test post in $blog->blogname",
				'body'  => 'A pretend post fired from `wp heyfam send-test-notification`.',
				'url'   => $blog->siteurl . '/',
				'sms'   => "Test ($blog->blogname): pretend post — $blog->siteurl/",
				'tag'   => 'test-post-' . time(),
			];
			return [
				'title' => sprintf( '%s in %s', get_userdata( $post->post_author )->display_name, $blog->blogname ),
				'body'  => wp_trim_words( $post->post_content, 18 ),
				'url'   => $blog->siteurl . '/p/' . $post->ID,
				'sms'   => sprintf( '%s (%s): %s — %s/p/%d',
					get_userdata( $post->post_author )->display_name, $blog->blogname,
					wp_trim_words( $post->post_content, 12 ),
					$blog->siteurl, $post->ID
				),
				'tag'   => 'test-post-' . $post->ID,
			];
		}
		if ( $kind === 'comment' ) {
			$comment = $target ? get_comment( $target ) : null;
			$post_id = $comment ? (int) $comment->comment_post_ID : ( get_posts( [ 'numberposts' => 1, 'fields' => 'ids' ] )[0] ?? 0 );
			return [
				'title' => sprintf( 'Test comment in %s', $blog->blogname ),
				'body'  => $comment ? wp_trim_words( $comment->comment_content, 18 ) : 'Pretend comment body',
				'url'   => $blog->siteurl . '/p/' . $post_id . ( $comment ? '#c-' . $comment->comment_ID : '' ),
				'sms'   => '',
				'tag'   => 'test-comment-' . ( $comment ? $comment->comment_ID : time() ),
			];
		}
		// reaction
		return [
			'title' => 'Test reaction in ' . $blog->blogname,
			'body'  => 'Someone reacted to your ' . ( $target ? 'post' : 'something' ) . '.',
			'url'   => $blog->siteurl . '/',
			'sms'   => '',
			'tag'   => 'test-reaction-' . ( $target ?: time() ),
		];
	}
}
