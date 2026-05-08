<?php
namespace HeyFam\Core\Posts;

final class Composer {
	/**
	 * Create a post in the given fam (already-switched blog context).
	 * $photo: array from $_FILES (or null). The caller handles switch_to_blog.
	 */
	public static function create( int $author_id, string $body, ?array $photo = null ): int|\WP_Error {
		$body = trim( $body );
		if ( $body === '' && ! $photo ) {
			return new \WP_Error( 'empty_post', 'Add some text or a photo.' );
		}

		$post_id = wp_insert_post( [
			'post_type'    => 'post',
			'post_status'  => 'publish',
			'post_author'  => $author_id,
			'post_content' => wp_kses_post( $body ),
		], true );
		if ( is_wp_error( $post_id ) ) return $post_id;

		if ( $photo && ! empty( $photo['tmp_name'] ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			require_once ABSPATH . 'wp-admin/includes/media.php';
			require_once ABSPATH . 'wp-admin/includes/image.php';

			$attach_id = media_handle_sideload( $photo, $post_id );
			if ( is_wp_error( $attach_id ) ) {
				error_log( '[heyfam] photo upload failed: ' . $attach_id->get_error_message() );
			} else {
				set_post_thumbnail( $post_id, $attach_id );
			}
		}

		return (int) $post_id;
	}
}
