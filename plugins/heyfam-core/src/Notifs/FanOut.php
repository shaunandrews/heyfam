<?php
namespace HeyFam\Core\Notifs;

use HeyFam\Core\Auth\Authorization;

final class FanOut {
	public const ACTION_POST     = 'heyfam_fanout_post';
	public const ACTION_COMMENT  = 'heyfam_fanout_comment';
	public const ACTION_REACTION = 'heyfam_fanout_reaction';

	public function __construct() {
		add_action( self::ACTION_POST,     [ $this, 'run_post' ],     10, 2 );
		add_action( self::ACTION_COMMENT,  [ $this, 'run_comment' ],  10, 3 );
		add_action( self::ACTION_REACTION, [ $this, 'run_reaction' ], 10, 4 );
	}

	public static function schedule_post( int $blog_id, int $post_id ): void {
		as_enqueue_async_action( self::ACTION_POST, [ $blog_id, $post_id ], 'heyfam' );
	}

	public static function schedule_comment( int $blog_id, int $post_id, int $comment_id ): void {
		as_enqueue_async_action( self::ACTION_COMMENT, [ $blog_id, $post_id, $comment_id ], 'heyfam' );
	}

	public static function schedule_reaction( int $blog_id, string $target_type, int $target_id, int $user_id ): void {
		// Debounce 30s per target.
		$key  = 'heyfam_react_debounce_' . md5( $blog_id . ':' . $target_type . ':' . $target_id );
		if ( get_site_transient( $key ) ) return;
		set_site_transient( $key, 1, 30 );
		as_schedule_single_action( time() + 30, self::ACTION_REACTION, [ $blog_id, $target_type, $target_id, $user_id ], 'heyfam' );
	}

	public function run_post( int $blog_id, int $post_id ): void {
		Authorization::in_blog( $blog_id, function () use ( $blog_id, $post_id ) {
			$post = get_post( $post_id );
			if ( ! $post ) return;
			$blog = get_blog_details( $blog_id );
			$url  = $blog->siteurl . '/p/' . $post_id;

			foreach ( $this->recipients( $blog_id, (int) $post->post_author ) as $user_id ) {
				$this->dispatch( $user_id, $blog_id, 'posts', [
					'title' => sprintf( '%s in %s', get_userdata( $post->post_author )->display_name, $blog->blogname ),
					'body'  => wp_trim_words( $post->post_content, 18 ),
					'url'   => $url,
					'sms'   => sprintf( '%s (%s): %s — %s',
						get_userdata( $post->post_author )->display_name,
						$blog->blogname,
						wp_trim_words( $post->post_content, 12 ),
						$url
					),
					'tag'   => 'post-' . $post_id,
				] );
			}
		} );
	}

	public function run_comment( int $blog_id, int $post_id, int $comment_id ): void {
		Authorization::in_blog( $blog_id, function () use ( $blog_id, $post_id, $comment_id ) {
			$comment = get_comment( $comment_id );
			$post    = get_post( $post_id );
			if ( ! $comment || ! $post ) return;
			$blog = get_blog_details( $blog_id );
			$url  = $blog->siteurl . '/p/' . $post_id . '#c-' . $comment_id;

			$recipients = array_unique( array_filter( [
				(int) $post->post_author,
				$comment->comment_parent ? (int) get_comment( $comment->comment_parent )->user_id : 0,
				...$this->thread_participants( $post_id, (int) $comment->user_id ),
			] ) );

			foreach ( $recipients as $user_id ) {
				if ( $user_id === (int) $comment->user_id ) continue;
				$this->dispatch( $user_id, $blog_id, 'comments', [
					'title' => sprintf( '%s commented in %s', $comment->comment_author, $blog->blogname ),
					'body'  => wp_trim_words( $comment->comment_content, 18 ),
					'url'   => $url,
					'sms'   => '', // comments default to push only
					'tag'   => 'comment-' . $post_id,
				] );
			}
		} );
	}

	public function run_reaction( int $blog_id, string $target_type, int $target_id, int $reactor_id ): void {
		Authorization::in_blog( $blog_id, function () use ( $blog_id, $target_type, $target_id, $reactor_id ) {
			$blog = get_blog_details( $blog_id );
			$author_id = $target_type === 'post'
				? (int) get_post( $target_id )->post_author
				: (int) get_comment( $target_id )->user_id;
			if ( ! $author_id || $author_id === $reactor_id ) return;

			$url = $target_type === 'post'
				? $blog->siteurl . '/p/' . $target_id
				: $blog->siteurl . '/p/' . get_comment( $target_id )->comment_post_ID . '#c-' . $target_id;

			$this->dispatch( $author_id, $blog_id, 'reactions', [
				'title' => 'New reaction in ' . $blog->blogname,
				'body'  => 'Someone reacted to your ' . $target_type . '.',
				'url'   => $url,
				'sms'   => '',
				'tag'   => 'reaction-' . $target_type . '-' . $target_id,
			] );
		} );
	}

	/** Members of the fam minus the actor. */
	private function recipients( int $blog_id, int $exclude_user_id ): array {
		$users  = get_users( [ 'blog_id' => $blog_id, 'fields' => [ 'ID' ] ] );
		$ids    = array_map( static fn( $u ) => (int) $u->ID, $users );
		return array_values( array_filter( $ids, static fn( $id ) => $id !== $exclude_user_id ) );
	}

	private function thread_participants( int $post_id, int $exclude_user_id ): array {
		$rows = get_comments( [ 'post_id' => $post_id, 'fields' => 'ids' ] );
		$ids  = [];
		foreach ( $rows as $cid ) {
			$c = get_comment( $cid );
			if ( $c && (int) $c->user_id && (int) $c->user_id !== $exclude_user_id ) {
				$ids[] = (int) $c->user_id;
			}
		}
		return array_unique( $ids );
	}

	public function dispatch( int $user_id, int $blog_id, string $event, array $payload ): void {
		if ( Prefs::should_notify( $user_id, $blog_id, $event, 'push' ) ) {
			Push::send( $user_id, [
				'title' => $payload['title'],
				'body'  => $payload['body'],
				'url'   => $payload['url'],
				'tag'   => $payload['tag'] ?? null,
			] );
		}
		if ( Prefs::should_notify( $user_id, $blog_id, $event, 'email' ) ) {
			Email::send( $user_id, $payload['title'], '<p>' . esc_html( $payload['body'] ) . '</p>', $payload['url'], $event . '-' . $blog_id );
		}
		if ( $payload['sms'] !== '' && Prefs::should_notify( $user_id, $blog_id, $event, 'sms' ) ) {
			$phone = (string) get_user_meta( $user_id, 'phone_e164', true );
			if ( $phone ) SMS::send( $phone, $payload['sms'] );
		}
	}
}
