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
                'phones' => [ 'required' => true, 'type' => 'array' ],
            ],
            'callback'            => [ $this, 'invite_issue' ],
        ] );

        register_rest_route( 'heyfam/v1', '/invites/accept', [
            'methods'             => 'POST',
            'permission_callback' => '__return_true',
            'args'                => [
                'code'         => [ 'required' => true, 'type' => 'string' ],
                'phone'        => [ 'required' => true, 'type' => 'string' ],
                'sms_code'     => [ 'required' => true, 'type' => 'string' ],
                'display_name' => [ 'required' => false, 'type' => 'string' ],
            ],
            'callback'            => [ $this, 'invite_accept' ],
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

        return new \WP_REST_Response( [ 'ok' => true, 'user_id' => $user_id ], 200 );
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

        $user = get_user_by( 'login', $phone );
        if ( ! $user ) {
            // Phone enumeration prevention: same shape as success.
            return new \WP_REST_Response( [ 'error' => 'bad_code' ], 401 );
        }

        RateLimit::clear_failures( $phone );
        wp_set_current_user( $user->ID );
        wp_set_auth_cookie( $user->ID, true );
        return new \WP_REST_Response( [ 'ok' => true, 'user_id' => $user->ID ], 200 );
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

        switch_to_blog( $blog_id );
        try {
            $issued = [];
            $blog   = get_blog_details( $blog_id );
            foreach ( $phones as $phone ) {
                $code = \HeyFam\Core\Fams\Invites::issue( $blog_id, get_current_user_id(), $phone );
                $url  = home_url( '/i/' . rawurlencode( $code ) );
                $name = wp_get_current_user()->display_name;
                $msg  = sprintf( '%s invited you to %s — tap to join: %s', $name, $blog->blogname, $url );
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
        $phone    = $this->normalize_phone( $request->get_param( 'phone' ) );
        $sms_code = trim( (string) $request->get_param( 'sms_code' ) );
        if ( ! $code || ! $phone || ! $sms_code ) {
            return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
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
        ], 200 );
    }

    public function create_post( \WP_REST_Request $request ): \WP_REST_Response {
        $blog_id = (int) $request->get_param( '_blog_id' );
        $body    = (string) $request->get_param( 'body' );
        $photo   = $_FILES['photo'] ?? null;

        $result = \HeyFam\Core\Auth\Authorization::in_blog( $blog_id, function () use ( $body, $photo ) {
            return \HeyFam\Core\Posts\Composer::create( get_current_user_id(), $body, $photo );
        } );
        if ( is_wp_error( $result ) ) {
            return new \WP_REST_Response(
                [ 'error' => $result->get_error_code(), 'message' => $result->get_error_message() ],
                400
            );
        }
        return new \WP_REST_Response( [ 'ok' => true, 'post_id' => $result ], 201 );
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
            $user = wp_get_current_user();
            return wp_insert_comment( [
                'comment_post_ID' => $post_id,
                'comment_parent'  => $parent_id,
                'comment_content' => $body,
                'comment_author'  => $user->display_name,
                'comment_author_email' => $user->user_email ?: 'no-reply@heyfam.blog',
                'user_id'         => $user->ID,
                'comment_approved' => 1,
            ] );
        } );

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
            if ( ! $post ) return null;
            $comments = get_comments( [ 'post_id' => $post_id, 'orderby' => 'comment_date', 'order' => 'ASC' ] );
            return [
                'post'      => self::serialize_post( $post ),
                'comments'  => array_map( [ self::class, 'serialize_comment' ], $comments ),
                'reactions' => [
                    'post' => \HeyFam\Core\Reactions\Manager::counts_for( 'post', $post_id ),
                ],
            ];
        } );

        if ( ! $payload ) return new \WP_REST_Response( [ 'error' => 'not_found' ], 404 );
        return new \WP_REST_Response( [ 'ok' => true ] + $payload + [ 'now' => gmdate( 'c' ) ], 200 );
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

    private static function serialize_post( \WP_Post $p ): array {
        $author = get_userdata( $p->post_author );
        $thumb  = get_the_post_thumbnail_url( $p, 'large' );
        return [
            'id'          => $p->ID,
            'body'        => $p->post_content,
            'created_at'  => mysql2date( 'c', $p->post_date_gmt, false ),
            'author'      => [ 'id' => $p->post_author, 'name' => $author ? $author->display_name : 'Unknown' ],
            'photo_url'   => $thumb ?: null,
            'reactions'   => \HeyFam\Core\Reactions\Manager::counts_for( 'post', $p->ID ),
            'comment_count' => (int) $p->comment_count,
        ];
    }

    private static function serialize_comment( \WP_Comment $c ): array {
        return [
            'id'         => (int) $c->comment_ID,
            'parent_id'  => (int) $c->comment_parent,
            'body'       => $c->comment_content,
            'created_at' => mysql2date( 'c', $c->comment_date_gmt, false ),
            'author'     => [ 'id' => (int) $c->user_id, 'name' => $c->comment_author ],
            'reactions'  => \HeyFam\Core\Reactions\Manager::counts_for( 'comment', (int) $c->comment_ID ),
        ];
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
