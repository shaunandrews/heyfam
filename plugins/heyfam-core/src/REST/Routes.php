<?php
namespace HeyFam\Core\REST;

use HeyFam\Core\Auth\PhoneSignup;
use HeyFam\Core\Auth\RateLimit;

final class Routes {
    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'register' ] );
    }

    public function register(): void {
        register_rest_route( 'heyfam/v1', '/signup/start', [
            'methods'             => 'POST',
            'permission_callback' => '__return_true',
            'args'                => [
                'phone' => [ 'required' => true, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'signup_start' ],
        ] );

        register_rest_route( 'heyfam/v1', '/signup/verify', [
            'methods'             => 'POST',
            'permission_callback' => '__return_true',
            'args'                => [
                'phone'        => [ 'required' => true, 'type' => 'string' ],
                'code'         => [ 'required' => true, 'type' => 'string' ],
                'display_name' => [ 'required' => false, 'type' => 'string' ],
                'fam_name'     => [ 'required' => false, 'type' => 'string' ],
                'fam_slug'     => [ 'required' => false, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'signup_verify' ],
        ] );

        register_rest_route( 'heyfam/v1', '/login/start', [
            'methods'             => 'POST',
            'permission_callback' => '__return_true',
            'args'                => [ 'phone' => [ 'required' => true, 'type' => 'string' ] ],
            'callback'            => [ $this, 'signup_start' ],
        ] );

        register_rest_route( 'heyfam/v1', '/login/verify', [
            'methods'             => 'POST',
            'permission_callback' => '__return_true',
            'args'                => [
                'phone' => [ 'required' => true, 'type' => 'string' ],
                'code'  => [ 'required' => true, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'login_verify' ],
        ] );

        register_rest_route( 'heyfam/v1', '/fams', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => is_user_logged_in(),
            'args'                => [
                'name' => [ 'required' => true, 'type' => 'string' ],
                'slug' => [ 'required' => true, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'create_fam' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/invites', [
            'methods'             => 'POST',
            'permission_callback' => [ $this, 'require_fam_cap_invite' ],
            'args'                => [
                'phones'       => [ 'required' => true,  'type' => 'array' ],
                'message_note' => [ 'required' => false, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'invite_issue' ],
        ] );

        register_rest_route( 'heyfam/v1', '/invites/accept', [
            'methods'             => 'POST',
            'permission_callback' => '__return_true',
            'args'                => [
                'code'         => [ 'required' => true,  'type' => 'string' ],
                'phone'        => [ 'required' => false, 'type' => 'string' ],
                'sms_code'     => [ 'required' => false, 'type' => 'string' ],
                'display_name' => [ 'required' => false, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'invite_accept' ],
        ] );

        register_rest_route( 'heyfam/v1', '/invites/preview', [
            'methods'             => 'GET',
            'permission_callback' => '__return_true',
            'args'                => [ 'code' => [ 'required' => true, 'type' => 'string' ] ],
            'callback'            => [ $this, 'invite_preview' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/posts', [
            'methods'             => 'POST',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'heyfam_post_to_fam' ),
            'args'                => [
                'body' => [ 'required' => false, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'create_post' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/comments', [
            'methods'             => 'POST',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'heyfam_comment' ),
            'args'                => [
                'post_id'   => [ 'required' => true, 'type' => 'integer' ],
                'parent_id' => [ 'required' => false, 'type' => 'integer' ],
                'body'      => [ 'required' => true, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'create_comment' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/reactions', [
            'methods'             => 'POST',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'heyfam_react' ),
            'args'                => [
                'target_type' => [ 'required' => true, 'type' => 'string', 'enum' => [ 'post', 'comment' ] ],
                'target_id'   => [ 'required' => true, 'type' => 'integer' ],
                'emoji'       => [ 'required' => true, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'add_reaction' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/reactions', [
            'methods'             => 'DELETE',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'heyfam_react' ),
            'args'                => [
                'target_type' => [ 'required' => true, 'type' => 'string', 'enum' => [ 'post', 'comment' ] ],
                'target_id'   => [ 'required' => true, 'type' => 'integer' ],
                'emoji'       => [ 'required' => true, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'remove_reaction' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/feed', [
            'methods'             => 'GET',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'read' ),
            'args'                => [ 'since' => [ 'required' => false, 'type' => 'string' ] ],
            'callback'            => [ $this, 'feed' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/post/(?P<id>\d+)', [
            'methods'             => 'GET',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'read' ),
            'args'                => [ 'since' => [ 'required' => false, 'type' => 'string' ] ],
            'callback'            => [ $this, 'single_post' ],
        ] );

        register_rest_route( 'heyfam/v1', '/push/subscribe', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => is_user_logged_in(),
            'args'                => [
                'endpoint'        => [ 'required' => true, 'type' => 'string' ],
                'p256dh'          => [ 'required' => true, 'type' => 'string' ],
                'auth'            => [ 'required' => true, 'type' => 'string' ],
                'expiration_time' => [ 'required' => false, 'type' => 'integer' ],
            ],
            'callback'            => [ $this, 'push_subscribe' ],
        ] );

        register_rest_route( 'heyfam/v1', '/push/vapid', [
            'methods'             => 'GET',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => static fn() => new \WP_REST_Response( [ 'public_key' => getenv( 'VAPID_PUBLIC_KEY' ) ] ),
        ] );

        register_rest_route( 'heyfam/v1', '/email/unsub', [
            'methods'             => [ 'POST', 'GET' ],
            'permission_callback' => '__return_true',
            'args'                => [ 'token' => [ 'required' => true, 'type' => 'string' ] ],
            'callback'            => [ $this, 'email_unsub' ],
        ] );

        register_rest_route( 'heyfam/v1', '/twilio/inbound', [
            'methods'             => 'POST',
            'permission_callback' => [ $this, 'verify_twilio_signature' ],
            'callback'            => [ $this, 'twilio_inbound' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/prefs', [
            'methods'             => 'GET',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'read' ),
            'callback'            => [ $this, 'get_prefs' ],
        ] );

        register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/prefs', [
            'methods'             => 'POST',
            'permission_callback' => fn( $r ) => \HeyFam\Core\Auth\Authorization::require_cap( $r, 'read' ),
            'args'                => [ 'prefs' => [ 'required' => true, 'type' => 'object' ] ],
            'callback'            => [ $this, 'set_prefs' ],
        ] );

        register_rest_route( 'heyfam/v1', '/me/fams', [
            'methods'             => 'GET',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => static function () {
                return new \WP_REST_Response( [
                    'fams' => \HeyFam\Core\Fams\Membership::user_blogs( get_current_user_id() ),
                ], 200 );
            },
        ] );

        register_rest_route( 'heyfam/v1', '/me/skip-invites', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => static function () {
                update_user_meta( get_current_user_id(), 'heyfam_invites_skipped_at', gmdate( 'c' ) );
                return new \WP_REST_Response( [ 'ok' => true ], 200 );
            },
        ] );

        register_rest_route( 'heyfam/v1', '/me/dismiss-nudge', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => static function () {
                update_user_meta( get_current_user_id(), 'heyfam_invites_nudge_dismissed_at', gmdate( 'c' ) );
                return new \WP_REST_Response( [ 'ok' => true ], 200 );
            },
        ] );

        register_rest_route( 'heyfam/v1', '/me', [
            'methods'             => 'GET',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => [ $this, 'me_get' ],
        ] );

        register_rest_route( 'heyfam/v1', '/me/avatar', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => [ $this, 'me_avatar_set' ],
        ] );

        register_rest_route( 'heyfam/v1', '/me/avatar', [
            'methods'             => 'DELETE',
            'permission_callback' => static fn() => is_user_logged_in(),
            'callback'            => [ $this, 'me_avatar_clear' ],
        ] );
    }

    public function signup_start( \WP_REST_Request $request ): \WP_REST_Response {
        $phone = $this->normalize_phone( $request->get_param( 'phone' ) );
        if ( $phone === null ) {
            return new \WP_REST_Response( [ 'ok' => true ], 200 ); // do not leak validity
        }

        $ip = $request->get_header( 'x-forwarded-for' ) ?: ( $_SERVER['REMOTE_ADDR'] ?? 'unknown' );
        if ( ! RateLimit::hit( 'signup_ip:' . $ip,    3600,  10 ) ) {
            return new \WP_REST_Response( [ 'ok' => true ], 200 );
        }
        if ( ! RateLimit::hit( 'signup_ph:' . $phone, 600,    3 ) ) {
            return new \WP_REST_Response( [ 'ok' => true ], 200 );
        }
        if ( RateLimit::lockout_check( $phone ) ) {
            return new \WP_REST_Response( [ 'ok' => true ], 200 );
        }

        PhoneSignup::start_verification( $phone );
        return new \WP_REST_Response( [ 'ok' => true ], 200 );
    }

    public function signup_verify( \WP_REST_Request $request ): \WP_REST_Response {
        $phone = $this->normalize_phone( $request->get_param( 'phone' ) );
        $code  = trim( (string) $request->get_param( 'code' ) );
        if ( $phone === null || $code === '' ) {
            return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
        }
        if ( RateLimit::lockout_check( $phone ) ) {
            return new \WP_REST_Response( [ 'error' => 'locked_out' ], 429 );
        }

        if ( ! PhoneSignup::check_code( $phone, $code ) ) {
            RateLimit::record_failure( $phone );
            return new \WP_REST_Response( [ 'error' => 'bad_code' ], 401 );
        }

        $name    = sanitize_text_field( (string) ( $request->get_param( 'display_name' ) ?? '' ) );
        $user_id = PhoneSignup::ensure_user( $phone, $name );
        RateLimit::clear_failures( $phone );

        wp_set_current_user( $user_id );
        wp_set_auth_cookie( $user_id, true );

        // If fam details are provided, create the fam in the same request so
        // the client doesn't have to fight the new-session-vs-new-nonce window
        // that breaks REST cookie auth on the immediately-following request.
        $fam_name = sanitize_text_field( (string) ( $request->get_param( 'fam_name' ) ?? '' ) );
        $fam_slug = sanitize_title( (string) ( $request->get_param( 'fam_slug' ) ?? '' ) );
        $fam_url  = null;
        $fam_blog = null;
        if ( $fam_name !== '' && $fam_slug !== '' ) {
            $result = \HeyFam\Core\Fams\FamCreation::create( $user_id, $fam_name, $fam_slug );
            if ( is_wp_error( $result ) ) {
                return new \WP_REST_Response( [
                    'ok'      => false,
                    'error'   => $result->get_error_code(),
                    'message' => $result->get_error_message(),
                    'user_id' => $user_id,
                ], 400 );
            }
            $details   = get_blog_details( (int) $result );
            $fam_blog  = (int) $result;
            $fam_url   = $details->siteurl;
        }

        return new \WP_REST_Response( [
            'ok'         => true,
            'user_id'    => $user_id,
            'nonce'      => wp_create_nonce( 'wp_rest' ),
            'fam_blog'   => $fam_blog,
            'fam_url'    => $fam_url,
        ], 200 );
    }

    public function login_verify( \WP_REST_Request $request ): \WP_REST_Response {
        $phone = $this->normalize_phone( $request->get_param( 'phone' ) );
        $code  = trim( (string) $request->get_param( 'code' ) );
        if ( $phone === null || $code === '' ) {
            return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
        }
        if ( RateLimit::lockout_check( $phone ) ) {
            return new \WP_REST_Response( [ 'error' => 'locked_out' ], 429 );
        }
        if ( ! PhoneSignup::check_code( $phone, $code ) ) {
            RateLimit::record_failure( $phone );
            return new \WP_REST_Response( [ 'error' => 'bad_code' ], 401 );
        }

        $user_id = PhoneSignup::find_user_by_phone( $phone );
        if ( ! $user_id ) {
            // Phone enumeration prevention: same shape as success.
            return new \WP_REST_Response( [ 'error' => 'bad_code' ], 401 );
        }

        RateLimit::clear_failures( $phone );
        wp_set_current_user( $user_id );
        wp_set_auth_cookie( $user_id, true );
        return new \WP_REST_Response( [
            'ok'      => true,
            'user_id' => $user_id,
            'nonce'   => wp_create_nonce( 'wp_rest' ),
        ], 200 );
    }

    public function create_fam( \WP_REST_Request $request ): \WP_REST_Response {
        $name = sanitize_text_field( (string) $request->get_param( 'name' ) );
        $slug = sanitize_title( (string) $request->get_param( 'slug' ) );

        $result = \HeyFam\Core\Fams\FamCreation::create( get_current_user_id(), $name, $slug );
        if ( is_wp_error( $result ) ) {
            return new \WP_REST_Response(
                [ 'error' => $result->get_error_code(), 'message' => $result->get_error_message() ],
                400
            );
        }

        $details = get_blog_details( $result );
        return new \WP_REST_Response( [
            'ok'      => true,
            'blog_id' => $result,
            'slug'    => trim( $details->path, '/' ),
            'url'     => $details->siteurl,
        ], 200 );
    }

    public function require_fam_cap_invite( \WP_REST_Request $request ): bool {
        return \HeyFam\Core\Auth\Authorization::require_cap( $request, 'heyfam_invite' );
    }

    private function require_fam_cap( \WP_REST_Request $request, string $cap ): bool {
        return \HeyFam\Core\Auth\Authorization::require_cap( $request, $cap );
    }

    public function invite_issue( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        $phones  = array_filter( array_map( [ $this, 'normalize_phone' ], (array) $request->get_param( 'phones' ) ) );
        if ( ! $phones ) return new \WP_REST_Response( [ 'error' => 'no_valid_phones' ], 400 );

        $note = trim( (string) ( $request->get_param( 'message_note' ) ?? '' ) );
        $note = wp_strip_all_tags( $note, true );
        if ( $note !== '' && mb_strlen( $note ) > 120 ) {
            $note = mb_substr( $note, 0, 120 );
        }

        switch_to_blog( $blog_id );
        try {
            $issued = [];
            $blog   = get_blog_details( $blog_id );
            foreach ( $phones as $phone ) {
                $code = \HeyFam\Core\Fams\Invites::issue( $blog_id, get_current_user_id(), $phone );
                $url  = home_url( '/i/' . rawurlencode( $code ) );
                $name = wp_get_current_user()->display_name;
                $base = sprintf( '%s invited you to %s — tap to join: %s', $name, $blog->blogname, $url );
                $msg  = $note !== '' ? $base . ' (' . $note . ')' : $base;
                // Notifs\SMS::send() lands in Task 27. Until then, log so we can copy/paste the link in dev.
                if ( class_exists( '\\HeyFam\\Core\\Notifs\\SMS' ) ) {
                    \HeyFam\Core\Notifs\SMS::send( $phone, $msg );
                } else {
                    error_log( "[heyfam] SMS to $phone: $msg" );
                }
                $issued[] = [ 'phone' => $phone, 'sent' => true ];
            }
        } finally {
            restore_current_blog();
        }
        return new \WP_REST_Response( [ 'ok' => true, 'issued' => $issued ], 200 );
    }

    public function invite_accept( \WP_REST_Request $request ): \WP_REST_Response {
        $code     = trim( (string) $request->get_param( 'code' ) );
        $sms_code = trim( (string) ( $request->get_param( 'sms_code' ) ?? '' ) );
        if ( ! $code ) {
            return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
        }

        // Logged-in fast path — used when the inviter sent the link to a phone
        // that already belongs to a HeyFam account; the user just needs to join.
        if ( is_user_logged_in() && $sms_code === '' ) {
            $user_id    = get_current_user_id();
            $user_phone = (string) get_user_meta( $user_id, 'phone_e164', true );
            if ( ! $user_phone ) {
                return new \WP_REST_Response( [ 'error' => 'no_user_phone' ], 400 );
            }
            $blog_id = null;
            foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
                $candidate = \HeyFam\Core\Fams\Invites::accept( (int) $site->blog_id, $code, $user_phone );
                if ( $candidate ) {
                    $blog_id = (int) $site->blog_id;
                    break;
                }
            }
            if ( ! $blog_id ) {
                return new \WP_REST_Response( [ 'error' => 'invalid_or_expired' ], 410 );
            }
            \HeyFam\Core\Fams\Membership::add( $user_id, $blog_id );
            $blog = get_blog_details( $blog_id );
            return new \WP_REST_Response( [
                'ok'      => true,
                'blog_id' => $blog_id,
                'slug'    => trim( $blog->path, '/' ),
                'url'     => $blog->siteurl,
                'nonce'   => wp_create_nonce( 'wp_rest' ),
            ], 200 );
        }

        // SMS-code (new user / unauthed device) path — unchanged from prior behavior.
        $phone = $this->normalize_phone( $request->get_param( 'phone' ) );
        if ( ! $phone || ! $sms_code ) {
            return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
        }

        $ip = $request->get_header( 'x-forwarded-for' ) ?: ( $_SERVER['REMOTE_ADDR'] ?? 'unknown' );
        if ( ! \HeyFam\Core\Auth\RateLimit::hit( 'invite_accept_ip:' . $ip,   3600, 30 ) ) {
            return new \WP_REST_Response( [ 'error' => 'rate_limited' ], 429 );
        }
        if ( ! \HeyFam\Core\Auth\RateLimit::hit( 'invite_accept_code:' . md5( $code ), 600, 5 ) ) {
            return new \WP_REST_Response( [ 'error' => 'rate_limited' ], 429 );
        }

        if ( \HeyFam\Core\Auth\RateLimit::lockout_check( $phone ) ) {
            return new \WP_REST_Response( [ 'error' => 'locked_out' ], 429 );
        }
        if ( ! \HeyFam\Core\Auth\PhoneSignup::check_code( $phone, $sms_code ) ) {
            \HeyFam\Core\Auth\RateLimit::record_failure( $phone );
            return new \WP_REST_Response( [ 'error' => 'bad_code' ], 401 );
        }

        // Find which fam this code belongs to by scanning each site (rare path).
        $blog_id = null;
        $row     = null;
        foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
            $candidate = \HeyFam\Core\Fams\Invites::accept( (int) $site->blog_id, $code, $phone );
            if ( $candidate ) {
                $blog_id = (int) $site->blog_id;
                $row     = $candidate;
                break;
            }
        }
        if ( ! $blog_id ) return new \WP_REST_Response( [ 'error' => 'invalid_or_expired' ], 410 );

        $name    = sanitize_text_field( (string) ( $request->get_param( 'display_name' ) ?? '' ) );
        $user_id = \HeyFam\Core\Auth\PhoneSignup::ensure_user( $phone, $name );
        \HeyFam\Core\Fams\Membership::add( $user_id, $blog_id );
        \HeyFam\Core\Auth\RateLimit::clear_failures( $phone );

        wp_set_current_user( $user_id );
        wp_set_auth_cookie( $user_id, true );

        $blog = get_blog_details( $blog_id );
        return new \WP_REST_Response( [
            'ok'      => true,
            'blog_id' => $blog_id,
            'slug'    => trim( $blog->path, '/' ),
            'url'     => $blog->siteurl,
            'nonce'   => wp_create_nonce( 'wp_rest' ),
        ], 200 );
    }

    public function invite_preview( \WP_REST_Request $request ): \WP_REST_Response {
        $code = trim( (string) $request->get_param( 'code' ) );
        if ( $code === '' ) return new \WP_REST_Response( [ 'error' => 'invalid' ], 400 );

        $hash = \HeyFam\Core\Fams\Invites::hash( $code );
        foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
            global $wpdb;
            $blog_id = (int) $site->blog_id;
            $table = \HeyFam\Core\Fams\Invites::table_name( $blog_id );
            $row = $wpdb->get_row( $wpdb->prepare(
                "SELECT phone_e164, invited_by_user_id, expires_at, used_at FROM $table WHERE code_hash = %s",
                $hash
            ), ARRAY_A );
            if ( $row ) {
                if ( $row['used_at'] ) return new \WP_REST_Response( [ 'error' => 'used' ], 410 );
                if ( strtotime( $row['expires_at'] ) < time() ) return new \WP_REST_Response( [ 'error' => 'expired' ], 410 );
                $blog = get_blog_details( $blog_id );
                $inviter = get_userdata( (int) $row['invited_by_user_id'] );
                return new \WP_REST_Response( [
                    'fam_name'    => $blog->blogname,
                    'inviter'     => $inviter ? $inviter->display_name : 'Someone',
                    'phone_hint'  => self::mask_phone( $row['phone_e164'] ),
                ], 200 );
            }
        }
        return new \WP_REST_Response( [ 'error' => 'invalid' ], 404 );
    }

    private static function mask_phone( string $e164 ): string {
        if ( strlen( $e164 ) <= 4 ) return $e164;
        return substr( $e164, 0, 2 ) . str_repeat( '•', strlen( $e164 ) - 4 ) . substr( $e164, -2 );
    }

    public function create_post( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        $body    = (string) $request->get_param( 'body' );

        // Prefer the new `photos[]` shape; fall back to the legacy single `photo`.
        $slots = self::normalize_files_array( $_FILES['photos'] ?? null );
        if ( empty( $slots ) && isset( $_FILES['photo'] ) ) {
            $slots = [ $_FILES['photo'] ];
        }

        // Cap to a sane limit so a thumb fat-finger doesn't upload an album.
        $slots = array_slice( $slots, 0, 10 );

        $result = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $body, $slots ) {
            return \HeyFam\Core\Posts\Composer::create( get_current_user_id(), $body, $slots );
        } );
        if ( is_wp_error( $result ) ) {
            return new \WP_REST_Response(
                [ 'error' => $result->get_error_code(), 'message' => $result->get_error_message() ],
                400
            );
        }
        return new \WP_REST_Response( [
            'ok'             => true,
            'post_id'        => $result['post_id'],
            'attachment_ids' => $result['attachment_ids'],
        ], 201 );
    }

    /**
     * Turn the awkward $_FILES['photos'] shape:
     *   [ 'name' => [a,b], 'tmp_name' => [a,b], ... ]
     * into a list of per-file slots:
     *   [ [ 'name'=>a, 'tmp_name'=>a, ... ], [ 'name'=>b, ... ] ]
     */
    private static function normalize_files_array( ?array $files ): array {
        if ( empty( $files ) || ! is_array( $files['name'] ?? null ) ) return [];
        $count = count( $files['name'] );
        $out   = [];
        for ( $i = 0; $i < $count; $i++ ) {
            if ( ! empty( $files['error'][ $i ] ) ) continue;
            $out[] = [
                'name'     => $files['name'][ $i ]     ?? '',
                'type'     => $files['type'][ $i ]     ?? '',
                'tmp_name' => $files['tmp_name'][ $i ] ?? '',
                'error'    => $files['error'][ $i ]    ?? 0,
                'size'     => $files['size'][ $i ]     ?? 0,
            ];
        }
        return $out;
    }

    public function create_comment( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id   = (int) $request->get_param( '_blog_id' );
        $post_id   = (int) $request->get_param( 'post_id' );
        $parent_id = (int) ( $request->get_param( 'parent_id' ) ?? 0 );
        $body      = trim( wp_kses_post( (string) $request->get_param( 'body' ) ) );

        if ( $body === '' ) {
            return new \WP_REST_Response( [ 'error' => 'empty' ], 400 );
        }

        $result = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $post_id, $parent_id, $body ) {
            $err = self::validate_comment_parent( $parent_id, $post_id );
            if ( $err ) {
                return new \WP_Error( $err, 'Invalid parent comment' );
            }
            $user = wp_get_current_user();
            return wp_insert_comment( [
                'comment_post_ID'      => $post_id,
                'comment_parent'       => $parent_id,
                'comment_content'      => $body,
                'comment_author'       => $user->display_name,
                'comment_author_email' => $user->user_email ?: 'no-reply@heyfam.blog',
                'user_id'              => $user->ID,
                'comment_approved'     => 1,
            ] );
        } );

        if ( is_wp_error( $result ) ) {
            return new \WP_REST_Response( [ 'error' => $result->get_error_code() ], 400 );
        }
        if ( ! $result ) {
            return new \WP_REST_Response( [ 'error' => 'insert_failed' ], 500 );
        }
        return new \WP_REST_Response( [ 'ok' => true, 'comment_id' => $result ], 201 );
    }

    public function add_reaction( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id     = (int) $request->get_param( '_blog_id' );
        $target_type = (string) $request->get_param( 'target_type' );
        $target_id   = (int) $request->get_param( 'target_id' );
        $emoji       = self::sanitize_emoji( (string) $request->get_param( 'emoji' ) );
        if ( $emoji === null ) return new \WP_REST_Response( [ 'error' => 'bad_emoji' ], 400 );

        $added = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $target_type, $target_id, $emoji ) {
            return \HeyFam\Core\Reactions\Manager::add( $target_type, $target_id, get_current_user_id(), $emoji );
        } );
        return new \WP_REST_Response( [ 'ok' => true, 'added' => $added ], $added ? 201 : 200 );
    }

    public function remove_reaction( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id     = (int) $request->get_param( '_blog_id' );
        $target_type = (string) $request->get_param( 'target_type' );
        $target_id   = (int) $request->get_param( 'target_id' );
        $emoji       = self::sanitize_emoji( (string) $request->get_param( 'emoji' ) );

        $removed = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $target_type, $target_id, $emoji ) {
            return \HeyFam\Core\Reactions\Manager::remove( $target_type, $target_id, get_current_user_id(), $emoji );
        } );
        return new \WP_REST_Response( [ 'ok' => true, 'removed' => $removed ], 200 );
    }

    public function feed( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        $since   = $request->get_param( 'since' ) ? gmdate( 'Y-m-d H:i:s', strtotime( $request->get_param( 'since' ) ) ) : '1970-01-01 00:00:00';

        $payload = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $since ) {
            $posts = get_posts( [
                'numberposts' => 50,
                'date_query'  => [ [ 'after' => $since, 'inclusive' => false ] ],
                'orderby'     => 'date',
                'order'       => 'DESC',
            ] );
            return array_map( [ self::class, 'serialize_post' ], $posts );
        } );

        return new \WP_REST_Response( [ 'ok' => true, 'posts' => $payload, 'now' => gmdate( 'c' ) ], 200 );
    }

    public function single_post( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        $post_id = (int) $request->get_param( 'id' );

        $payload = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $post_id ) {
            $post = get_post( $post_id );
            return $post ? self::serialize_post( $post ) : null;
        } );

        if ( ! $payload ) return new \WP_REST_Response( [ 'error' => 'not_found' ], 404 );
        return new \WP_REST_Response( [ 'ok' => true, 'post' => $payload, 'now' => gmdate( 'c' ) ], 200 );
    }

    public function push_subscribe( \WP_REST_Request $request ): \WP_REST_Response {
        \HeyFam\Core\Notifs\Push::upsert(
            get_current_user_id(),
            (string) $request->get_param( 'endpoint' ),
            (string) $request->get_param( 'p256dh' ),
            (string) $request->get_param( 'auth' ),
            $request->get_param( 'expiration_time' ) ? (int) $request->get_param( 'expiration_time' ) : null,
            $request->get_header( 'user_agent' ) ?: null
        );
        return new \WP_REST_Response( [ 'ok' => true ], 200 );
    }

    public function email_unsub( \WP_REST_Request $request ): \WP_REST_Response {
        $uid = \HeyFam\Core\Notifs\Email::user_id_from_token( (string) $request->get_param( 'token' ) );
        if ( ! $uid ) return new \WP_REST_Response( [ 'error' => 'invalid' ], 400 );
        \HeyFam\Core\Notifs\Email::set_unsubscribed( $uid, true );
        return new \WP_REST_Response( [ 'ok' => true ], 200 );
    }

    public function verify_twilio_signature( \WP_REST_Request $request ): bool {
        $token = getenv( 'TWILIO_AUTH_TOKEN' );
        if ( ! $token ) return false;

        $sig    = $request->get_header( 'x-twilio-signature' );
        $url    = home_url( $_SERVER['REQUEST_URI'] );
        $params = $_POST; // Twilio sends form-encoded
        ksort( $params );
        $data = $url;
        foreach ( $params as $k => $v ) $data .= $k . $v;
        $expected = base64_encode( hash_hmac( 'sha1', $data, $token, true ) );
        return hash_equals( $expected, (string) $sig );
    }

    public function twilio_inbound( \WP_REST_Request $request ): \WP_REST_Response {
        $from = (string) ( $_POST['From'] ?? '' );
        $body = strtoupper( trim( (string) ( $_POST['Body'] ?? '' ) ) );
        if ( ! $from ) return new \WP_REST_Response( '', 200 );

        $reply = '';
        if ( in_array( $body, [ 'STOP', 'STOPALL', 'UNSUBSCRIBE', 'CANCEL', 'END', 'QUIT' ], true ) ) {
            \HeyFam\Core\Notifs\SMS::set_opted_out( $from, true );
            $reply = ''; // Twilio handles the auto-confirmation.
        } elseif ( in_array( $body, [ 'HELP', 'INFO' ], true ) ) {
            $reply = 'HeyFam: family group messages. Reply STOP to unsubscribe. Support: support@heyfam.blog';
        } elseif ( in_array( $body, [ 'START', 'YES', 'UNSTOP' ], true ) ) {
            \HeyFam\Core\Notifs\SMS::set_opted_out( $from, false );
            $reply = 'HeyFam: you are re-subscribed. Reply STOP to opt out again.';
        }

        header( 'Content-Type: text/xml' );
        $xml = '<?xml version="1.0" encoding="UTF-8"?><Response>';
        if ( $reply ) {
            $xml .= '<Message>' . esc_html( $reply ) . '</Message>';
        }
        $xml .= '</Response>';
        echo $xml;
        exit;
    }

    public function get_prefs( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        return new \WP_REST_Response( [ 'prefs' => \HeyFam\Core\Notifs\Prefs::for_user( get_current_user_id(), $blog_id ) ], 200 );
    }

    public function set_prefs( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        $prefs   = (array) $request->get_param( 'prefs' );
        \HeyFam\Core\Notifs\Prefs::set( get_current_user_id(), $blog_id, $prefs );
        return new \WP_REST_Response( [ 'ok' => true ], 200 );
    }

    public function me_get(): \WP_REST_Response {
        $uid      = get_current_user_id();
        $user     = get_userdata( $uid );
        $uploaded = (int) get_user_meta( $uid, 'heyfam_avatar_attachment_id', true ) > 0;
        return new \WP_REST_Response( [
            'id'                  => $uid,
            'name'                => $user ? $user->display_name : '',
            'avatar_url'          => \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 96 ),
            'has_uploaded_avatar' => $uploaded,
        ], 200 );
    }

    public function me_avatar_set( \WP_REST_Request $request ): \WP_REST_Response {
        $files = $request->get_file_params();
        $photo = $files['photo'] ?? null;
        if ( ! $photo || empty( $photo['tmp_name'] ) ) {
            return new \WP_REST_Response( [ 'error' => 'no_file' ], 400 );
        }
        $allowed = [ 'image/jpeg', 'image/png', 'image/webp', 'image/gif' ];
        $type    = wp_check_filetype( $photo['name'] )['type'] ?? '';
        if ( ! in_array( $type, $allowed, true ) ) {
            return new \WP_REST_Response( [ 'error' => 'bad_type' ], 400 );
        }
        $uid    = get_current_user_id();
        $result = \HeyFam\Core\Avatars\Avatar::set_for_user( $uid, $photo );
        if ( is_wp_error( $result ) ) {
            return new \WP_REST_Response( [ 'error' => $result->get_error_code() ], 400 );
        }
        return new \WP_REST_Response( [
            'ok'         => true,
            'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 96 ),
        ], 200 );
    }

    public function me_avatar_clear(): \WP_REST_Response {
        $uid      = get_current_user_id();
        $existing = (int) get_user_meta( $uid, 'heyfam_avatar_attachment_id', true );
        if ( $existing ) {
            wp_delete_attachment( $existing, true );
            delete_user_meta( $uid, 'heyfam_avatar_attachment_id' );
        }
        return new \WP_REST_Response( [
            'ok'         => true,
            'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 96 ),
        ], 200 );
    }

    /** Max visible nesting depth before comments flatten to one indent with @parent attribution. */
    public const MAX_VISUAL_DEPTH = 3;

    public static function serialize_post( \WP_Post $p ): array {
        $author    = get_userdata( $p->post_author );
        $thumb     = get_the_post_thumbnail_url( $p, 'large' );
        $reactions = \HeyFam\Core\Reactions\Manager::counts_for( 'post', $p->ID );
        return [
            'id'              => $p->ID,
            'body'            => self::plain_text( $p->post_content ),
            'created_at'      => mysql2date( 'c', $p->post_date_gmt, false ),
            'relative_time'   => self::relative_time( $p->post_date_gmt ),
            'author'          => [
                'id'         => (int) $p->post_author,
                'name'       => $author ? $author->display_name : 'Unknown',
                'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( (int) $p->post_author ),
            ],
            'photo_url'       => $thumb ?: null,
            'reactions'       => $reactions,
            'reactionEntries' => self::entries( $reactions ),
            'comment_count'   => (int) $p->comment_count,
            'permalink'       => get_permalink( $p ),
            'comments'        => self::decorated_comments_for_post( (int) $p->ID ),
        ];
    }

    /** DFS-ordered, decorated comment list for a single post. */
    public static function decorated_comments_for_post( int $post_id ): array {
        $raw = get_comments( [
            'post_id' => $post_id,
            'orderby' => 'comment_date',
            'order'   => 'ASC',
            'status'  => 'approve',
        ] );
        $byParent = [];
        foreach ( $raw as $c ) {
            $byParent[ (int) $c->comment_parent ][] = $c;
        }
        $out  = [];
        $walk = function ( int $parent_id, int $depth, string $parent_name ) use ( &$walk, &$out, $byParent ) {
            if ( empty( $byParent[ $parent_id ] ) ) return;
            foreach ( $byParent[ $parent_id ] as $c ) {
                $out[] = self::serialize_comment( $c, $depth, $parent_name );
                $walk( (int) $c->comment_ID, $depth + 1, (string) $c->comment_author );
            }
        };
        $walk( 0, 0, '' );
        return $out;
    }

    public static function serialize_comment( \WP_Comment $c, int $depth = 0, string $parent_name = '' ): array {
        $reactions    = \HeyFam\Core\Reactions\Manager::counts_for( 'comment', (int) $c->comment_ID );
        $visual_depth = min( $depth, self::MAX_VISUAL_DEPTH );
        $is_deep      = $depth > self::MAX_VISUAL_DEPTH;
        $user_id      = (int) $c->user_id;
        $name         = (string) $c->comment_author;
        return [
            'id'              => (int) $c->comment_ID,
            'parent_id'       => (int) $c->comment_parent,
            'body'            => self::plain_text( $c->comment_content ),
            'created_at'      => mysql2date( 'c', $c->comment_date_gmt, false ),
            'author'          => [
                'id'         => $user_id,
                'name'       => $name,
                'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( $user_id ),
            ],
            'reactions'       => $reactions,
            'reactionEntries' => self::entries( $reactions ),
            'depth'           => $visual_depth,
            'is_deep'         => $is_deep,
            'parent_name'     => $is_deep ? $parent_name : '',
            'relative_time'   => self::relative_time( $c->comment_date_gmt ),
        ];
    }

    private static function entries( array $assoc ): array {
        $out = [];
        foreach ( $assoc as $k => $v ) {
            $out[] = [ $k, $v ];
        }
        return $out;
    }

    private static function relative_time( string $mysql_gmt ): string {
        $then = strtotime( $mysql_gmt . ' UTC' );
        if ( ! $then ) return '';
        $diff = time() - $then;
        if ( $diff < 60 )         return 'now';
        if ( $diff < 3600 )       return (int) floor( $diff / 60 ) . 'm ago';
        if ( $diff < 86400 )      return (int) floor( $diff / 3600 ) . 'h ago';
        if ( $diff < 86400 * 7 )  return (int) floor( $diff / 86400 ) . 'd ago';
        $months    = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];
        $d         = (int) gmdate( 'j', $then );
        $m         = $months[ (int) gmdate( 'n', $then ) - 1 ];
        $y         = (int) gmdate( 'Y', $then );
        $this_year = (int) gmdate( 'Y' );
        return $y === $this_year ? "$m $d" : "$m $d, $y";
    }

    /** @internal Public only so the integration test can call it directly. */
    public static function validate_comment_parent( int $parent_id, int $post_id ): ?string {
        if ( $parent_id <= 0 ) {
            return null;
        }
        $parent = get_comment( $parent_id );
        if ( ! $parent ) {
            return 'invalid_parent';
        }
        if ( (int) $parent->comment_post_ID !== $post_id ) {
            return 'invalid_parent';
        }
        if ( (string) $parent->comment_approved !== '1' ) {
            return 'invalid_parent';
        }
        return null;
    }

    /**
     * Strip HTML and decode entities so the body renders cleanly in
     * `data-wp-text` (which sets textContent). Composer only accepts plain
     * text + an optional photo today, so we don't lose anything by stripping.
     */
    private static function plain_text( string $html ): string {
        return trim( html_entity_decode( wp_strip_all_tags( $html, true ), ENT_QUOTES, 'UTF-8' ) );
    }

    private static function sanitize_emoji( string $raw ): ?string {
        $raw = trim( $raw );
        if ( $raw === '' || strlen( $raw ) > 32 ) return null;
        return $raw;
    }

    private function normalize_phone( ?string $raw ): ?string {
        if ( ! $raw ) return null;
        $digits = preg_replace( '/[^0-9+]/', '', $raw );
        if ( ! str_starts_with( $digits, '+' ) ) return null;
        if ( strlen( $digits ) < 8 || strlen( $digits ) > 16 ) return null;
        return $digits;
    }
}
