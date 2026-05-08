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

    public function require_fam_cap_invite( \WP_REST_Request $request ) {
        return $this->require_fam_cap( $request, 'heyfam_invite' );
    }

    private function require_fam_cap( \WP_REST_Request $request, string $cap ) {
        if ( ! is_user_logged_in() ) return false;
        $slug    = (string) $request->get_param( 'fam' );
        $blog_id = $this->slug_to_blog_id( $slug );
        if ( ! $blog_id ) return false;
        $request->set_param( '_blog_id', $blog_id );
        return \HeyFam\Core\Fams\Membership::user_can_in_fam( get_current_user_id(), $blog_id, $cap );
    }

    private function slug_to_blog_id( string $slug ): ?int {
        $main = get_blog_details( get_network()->site_id );
        $details = get_blog_details( [
            'domain' => $main->domain,
            'path'   => rtrim( $main->path, '/' ) . '/' . $slug . '/',
        ] );
        return $details ? (int) $details->blog_id : null;
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

    private function normalize_phone( ?string $raw ): ?string {
        if ( ! $raw ) return null;
        $digits = preg_replace( '/[^0-9+]/', '', $raw );
        if ( ! str_starts_with( $digits, '+' ) ) return null;
        if ( strlen( $digits ) < 8 || strlen( $digits ) > 16 ) return null;
        return $digits;
    }
}
