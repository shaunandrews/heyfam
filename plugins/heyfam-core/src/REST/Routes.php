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

    private function normalize_phone( ?string $raw ): ?string {
        if ( ! $raw ) return null;
        $digits = preg_replace( '/[^0-9+]/', '', $raw );
        if ( ! str_starts_with( $digits, '+' ) ) return null;
        if ( strlen( $digits ) < 8 || strlen( $digits ) > 16 ) return null;
        return $digits;
    }
}
