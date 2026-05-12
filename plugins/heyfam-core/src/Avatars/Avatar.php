<?php
namespace HeyFam\Core\Avatars;

/**
 * Server-side avatar handling.
 *
 * Identity model:
 *   - If user_meta `heyfam_avatar_attachment_id` is set, return that
 *     attachment URL (preferring the size requested).
 *   - Otherwise generate a tiny inline SVG: a deterministically-colored
 *     circle with the user's initial. Returns a base64 data URI.
 *
 * Per-request memoization keeps repeat lookups (e.g. one user authoring
 * many comments in a single feed payload) cheap.
 */
final class Avatar {

    /** Cached SVG-data-URI strings per user, per process. */
    private static array $memo = [];

    /** Palette used to colour the default circle. Hashed against the user id. */
    private const PALETTE = [
        '#5a8a52', // accent (sage)
        '#7eaa6f', // lighter leaf
        '#3f7a4e', // success
        '#e07a5f', // coral (complement)
        '#a8b0a3', // foreground subtle (neutral)
    ];

    public static function url_for_user( int $user_id, int $size = 64 ): string {
        if ( $user_id <= 0 ) {
            return self::generated( 'anon', $size, '?' );
        }
        // External URL override — used by the demo seed (Pravatar) and a path
        // for any future "set my avatar from a URL" flow. Wins over attachments.
        $override = (string) get_user_meta( $user_id, 'heyfam_avatar_url', true );
        if ( $override !== '' ) {
            return $override;
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
        $user    = get_userdata( $user_id );
        $name    = $user ? (string) $user->display_name : '';
        $initial = $name !== '' ? mb_substr( $name, 0, 1 ) : '#';
        return self::generated( (string) $user_id, $size, $initial );
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

        // Drop memoized default URI so the next read returns the upload.
        foreach ( array_keys( self::$memo ) as $key ) {
            if ( str_starts_with( (string) $key, $user_id . ':' ) ) {
                unset( self::$memo[ $key ] );
            }
        }
        return (int) $attach_id;
    }

    /** Returns a `data:image/svg+xml;base64,...` URI for the given seed + initial. */
    private static function generated( string $seed, int $size, string $initial ): string {
        $initial = mb_strtoupper( $initial ?: '?' );
        $key     = $seed . ':' . $size . ':' . $initial;
        if ( isset( self::$memo[ $key ] ) ) {
            return self::$memo[ $key ];
        }

        $bg          = self::pick_color( $seed );
        $fg          = '#ffffff';
        $half        = (int) round( $size / 2 );
        $font_size   = (int) round( $size * 0.46 );
        $initial_esc = htmlspecialchars( $initial, ENT_QUOTES | ENT_XML1, 'UTF-8' );

        $svg = sprintf(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %1$d %1$d" width="%1$d" height="%1$d">'
            . '<circle cx="%2$d" cy="%2$d" r="%2$d" fill="%3$s"/>'
            . '<text x="50%%" y="50%%" dy=".35em" text-anchor="middle" '
            . 'font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" '
            . 'font-size="%4$d" font-weight="600" fill="%5$s">%6$s</text>'
            . '</svg>',
            $size, $half, $bg, $font_size, $fg, $initial_esc
        );

        $uri = 'data:image/svg+xml;base64,' . base64_encode( $svg );
        self::$memo[ $key ] = $uri;
        return $uri;
    }

    private static function pick_color( string $seed ): string {
        $idx = abs( crc32( $seed ) ) % count( self::PALETTE );
        return self::PALETTE[ $idx ];
    }
}
