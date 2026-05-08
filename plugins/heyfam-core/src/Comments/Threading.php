<?php
namespace HeyFam\Core\Comments;

final class Threading {
	public function __construct() {
		add_action( 'wp_initialize_site', [ $this, 'configure_site' ], 30, 1 );
		add_filter( 'preprocess_comment', [ $this, 'reject_anonymous' ] );
	}

	public function configure_site( \WP_Site $site ): void {
		switch_to_blog( (int) $site->blog_id );
		try {
			update_option( 'thread_comments', 1 );
			update_option( 'thread_comments_depth', 5 );
			update_option( 'comment_registration', 1 );
			update_option( 'default_comment_status', 'open' );
			update_option( 'require_name_email', 0 );
		} finally {
			restore_current_blog();
		}
	}

	/**
	 * No anonymous comments — only logged-in fam members.
	 */
	public function reject_anonymous( array $commentdata ): array {
		if ( ! is_user_logged_in() ) {
			wp_die( 'Comments require sign-in.', 'Forbidden', [ 'response' => 403 ] );
		}
		return $commentdata;
	}
}
