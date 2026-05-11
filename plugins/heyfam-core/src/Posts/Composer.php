<?php
namespace HeyFam\Core\Posts;

final class Composer {
	/**
	 * Create a post and attach zero or more uploaded photos, or a poll.
	 *
	 * `$photos` accepts one of three shapes for backwards compatibility:
	 *  - `null` or `[]`            — no photos.
	 *  - `[ 'name'=>..., 'tmp_name'=>..., ... ]` — single $_FILES slot (legacy).
	 *  - `[ [ 'name'=>..., ... ], [ 'name'=>..., ... ] ]` — list of slots (new).
	 *
	 * `$poll` is optional. When present, the resulting post is a poll: the
	 * body is the question, and three post_meta keys are written
	 * (`heyfam_poll_options`, `heyfam_poll_closes_at`, `heyfam_poll_anon`).
	 * Shape: `[ 'options' => string[], 'closes_at' => ?string, 'anon' => bool ]`.
	 *
	 * @return array{ post_id: int, attachment_ids: int[] }|\WP_Error
	 */
	public static function create( int $author_id, string $body, $photos = null, ?array $poll = null ): array|\WP_Error {
		$body  = trim( $body );
		$slots = self::normalize_slots( $photos );

		$is_poll = is_array( $poll );
		if ( $is_poll ) {
			$opts = self::sanitize_options( $poll['options'] ?? [] );
			if ( count( $opts ) < 2 ) {
				return new \WP_Error( 'too_few_options', 'A poll needs at least two options.' );
			}
			if ( count( $opts ) > 6 ) {
				return new \WP_Error( 'too_many_options', 'A poll can have up to 6 options.' );
			}
			if ( $body === '' ) {
				return new \WP_Error( 'no_question', 'Polls need a question.' );
			}
		} elseif ( $body === '' && empty( $slots ) ) {
			return new \WP_Error( 'empty_post', 'Add some text or a photo.' );
		}

		$post_id = wp_insert_post( [
			'post_type'    => 'post',
			'post_status'  => 'publish',
			'post_author'  => $author_id,
			'post_content' => wp_kses_post( $body ),
		], true );
		if ( is_wp_error( $post_id ) ) return $post_id;

		if ( $is_poll ) {
			update_post_meta( (int) $post_id, 'heyfam_poll_options', wp_json_encode( $opts ) );

			$closes_at    = isset( $poll['closes_at'] ) ? (string) $poll['closes_at'] : '';
			$closes_mysql = '';
			if ( $closes_at !== '' ) {
				$ts = strtotime( $closes_at );
				if ( $ts && $ts > time() ) {
					$closes_mysql = gmdate( 'Y-m-d H:i:s', $ts );
				}
			}
			update_post_meta( (int) $post_id, 'heyfam_poll_closes_at', $closes_mysql );

			$anon = ! empty( $poll['anon'] );
			update_post_meta( (int) $post_id, 'heyfam_poll_anon', $anon ? '1' : '0' );
		}

		$attachment_ids = [];
		// Polls don't attach photos — the composer hides the photo picker in
		// poll mode, but defensively skip uploads if any slot somehow arrives.
		if ( ! $is_poll && ! empty( $slots ) ) {
			require_once ABSPATH . 'wp-admin/includes/file.php';
			require_once ABSPATH . 'wp-admin/includes/media.php';
			require_once ABSPATH . 'wp-admin/includes/image.php';

			foreach ( $slots as $slot ) {
				if ( empty( $slot['tmp_name'] ) || ! empty( $slot['error'] ) ) continue;
				if ( ! self::is_acceptable_image( $slot ) ) continue;

				// media_handle_sideload accepts a slot-shaped array directly
				// and uploads from $slot['tmp_name'] without expecting $_FILES.
				$attach_id = media_handle_sideload( $slot, (int) $post_id );
				if ( is_wp_error( $attach_id ) ) {
					error_log( '[heyfam] photo upload failed: ' . $attach_id->get_error_message() );
					continue;
				}
				$attachment_ids[] = (int) $attach_id;
			}

			if ( ! empty( $attachment_ids ) ) {
				// Legacy clients still read `photo_url` from `_thumbnail_id`.
				set_post_thumbnail( (int) $post_id, $attachment_ids[0] );
			}
		}

		return [
			'post_id'        => (int) $post_id,
			'attachment_ids' => $attachment_ids,
		];
	}

	/** Strip + cap a list of option strings; drop empties; max 80 chars each. */
	private static function sanitize_options( array $raw ): array {
		$out = [];
		foreach ( $raw as $o ) {
			$s = trim( wp_strip_all_tags( (string) $o ) );
			if ( $s === '' ) continue;
			if ( mb_strlen( $s ) > 80 ) $s = mb_substr( $s, 0, 80 );
			$out[] = $s;
		}
		return array_values( $out );
	}

	/** Coerces the three input shapes into a list of $_FILES-style slots. */
	private static function normalize_slots( $photos ): array {
		if ( empty( $photos ) ) return [];
		// Legacy single-slot shape: `tmp_name` is a string at the top level.
		if ( is_array( $photos ) && isset( $photos['tmp_name'] ) && is_string( $photos['tmp_name'] ) ) {
			return [ $photos ];
		}
		// List of slots — values are themselves arrays with `tmp_name` strings.
		$out = [];
		foreach ( (array) $photos as $slot ) {
			if ( is_array( $slot ) && isset( $slot['tmp_name'] ) && is_string( $slot['tmp_name'] ) ) {
				$out[] = $slot;
			}
		}
		return $out;
	}

	/** Allow only browser-safe images. Server-side HEIC→JPEG is handled in core 6.7+. */
	private static function is_acceptable_image( array $slot ): bool {
		$allowed = [ 'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/avif', 'image/heic', 'image/heif' ];
		$mime    = $slot['type'] ?? '';
		if ( in_array( $mime, $allowed, true ) ) return true;
		// Fall back to extension check — Safari quirkily reports HEIC as octet-stream.
		$ext = strtolower( pathinfo( $slot['name'] ?? '', PATHINFO_EXTENSION ) );
		return in_array( $ext, [ 'jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'heic', 'heif' ], true );
	}
}
