<?php
namespace HeyFam\Core\Tests\Helpers;

/**
 * Dispatch \WP_REST_Request objects through the REST server with JSON bodies,
 * because writing this twice on every test gets old.
 */
final class RestRequest {
    public static function post( string $route, array $body = [], array $headers = [] ): \WP_REST_Response {
        $req = new \WP_REST_Request( 'POST', $route );
        $req->set_header( 'Content-Type', 'application/json' );
        foreach ( $headers as $k => $v ) $req->set_header( $k, $v );
        $req->set_body( wp_json_encode( $body ) );
        return rest_get_server()->dispatch( $req );
    }

    public static function get( string $route, array $params = [] ): \WP_REST_Response {
        $req = new \WP_REST_Request( 'GET', $route );
        foreach ( $params as $k => $v ) $req->set_param( $k, $v );
        return rest_get_server()->dispatch( $req );
    }
}
