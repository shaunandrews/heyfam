<?php
namespace HeyFam\Core\Avatars;

/**
 * Server-side avatar generation + storage.
 *
 * Identity model:
 *   - If user_meta `heyfam_avatar_attachment_id` is set, return that
 *     attachment's URL (preferring the `thumbnail` size).
 *   - Otherwise generate a deterministic SVG via boring-avatars seeded
 *     on the user id, return a `data:image/svg+xml;base64,...` URI.
 *
 * `url_for_user()` is cheap (no DB writes on the generated path), but we
 * still memoize per request to keep `serialize_comment()` fast when a
 * single user authors many comments in one payload.
 *
 * The `wi-wissen/boring-avatars` Composer package has no PSR-4 autoload
 * and its own `include_once './Avatar.php'` relies on CWD, so we require
 * the two files manually the first time we need them.
 */
final class Avatar {

    /** Cached SVG-data-URI strings per user, per process. */
    private static array $memo = [];

    /** Have we already pulled in the boring-avatars files? */
    private static bool $library_loaded = false;

    /** Palette used by the procedural avatars. Tuned to the HeyFam palette. */
    private const PALETTE = [
        '#d97706', // accent
        '#fef3e2', // accent-soft
        '#f59e0b', // warm
        '#1f1d1a', // fg
        '#fffaf3', // bg
    ];

    public static function url_for_user( int $user_id, int $size = 64 ): string {
        if ( $user_id <= 0 ) {
            return self::generated( 'anon', $size );
        }
        $attachment_id = (int) get_user_meta( $user_id, 'heyfam_avatar_attachment_id', true );
        if ( $attachment_id > 0 ) {
            // Prefer a sized thumbnail; fall back to the full attachment URL
            // when metadata isn't generated yet (e.g. immediately after a
            // sideload that hasn't finished resizing).
            $url = wp_get_attachment_image_url( $attachment_id, [ $size, $size ] );
            if ( ! $url ) {
                $url = wp_get_attachment_url( $attachment_id );
            }
            if ( $url ) {
                return $url;
            }
        }
        $seed = (string) $user_id;
        return self::generated( $seed, $size );
    }

    /** Set/replace the uploaded avatar for a user. Returns the attachment id. */
    public static function set_for_user( int $user_id, array $upload ): int|\WP_Error {
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';

        $attach_id = media_handle_sideload( $upload, 0 );
        if ( is_wp_error( $attach_id ) ) {
            return $attach_id;
        }

        // Replace any previous one to keep the media library tidy.
        $previous = (int) get_user_meta( $user_id, 'heyfam_avatar_attachment_id', true );
        if ( $previous > 0 && $previous !== (int) $attach_id ) {
            wp_delete_attachment( $previous, true );
        }
        update_user_meta( $user_id, 'heyfam_avatar_attachment_id', (int) $attach_id );

        // Drop memoized procedural URI so the next read returns the upload.
        foreach ( array_keys( self::$memo ) as $key ) {
            if ( str_starts_with( (string) $key, $user_id . ':' ) ) {
                unset( self::$memo[ $key ] );
            }
        }
        return (int) $attach_id;
    }

    /** Returns a `data:image/svg+xml;base64,...` URI for the given seed. */
    private static function generated( string $seed, int $size ): string {
        $key = $seed . ':' . $size;
        if ( isset( self::$memo[ $key ] ) ) {
            return self::$memo[ $key ];
        }

        self::ensure_library();

        $svg = \BoringAvatars\AvatarBeam::make( [
            'name'   => $seed,
            'size'   => (string) $size,
            'colors' => self::PALETTE,
            'title'  => false,
            'square' => false,
        ] );

        $uri = 'data:image/svg+xml;base64,' . base64_encode( $svg );
        self::$memo[ $key ] = $uri;
        return $uri;
    }

    /**
     * Pull the boring-avatars classes into the runtime.
     *
     * The upstream package has no PSR-4 autoload and `AvatarBeam.php`
     * contains a literal `include_once './Avatar.php'` at the top of the
     * file (outside the class), which resolves against the current
     * working directory rather than the package directory. We chdir into
     * the package while requiring so that relative include succeeds, then
     * restore.
     */
    private static function ensure_library(): void {
        if ( self::$library_loaded ) {
            return;
        }
        $base = dirname( __DIR__, 2 ) . '/vendor/wi-wissen/boring-avatars';
        require_once $base . '/Avatar.php';
        $cwd = getcwd();
        chdir( $base );
        try {
            require_once $base . '/AvatarBeam.php';
        } finally {
            if ( $cwd !== false ) {
                chdir( $cwd );
            }
        }
        self::$library_loaded = true;
    }
}
