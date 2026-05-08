<?php
namespace HeyFam\Core\Privacy;

final class PIIShield {
    public function __construct() {
        add_filter( 'rest_endpoints',          [ $this, 'remove_user_endpoints' ] );
        add_filter( 'rest_authentication_errors', [ $this, 'block_user_routes' ], 10, 1 );
        add_action( 'template_redirect',       [ $this, 'block_author_archives' ] );
        add_filter( 'oembed_response_data',    [ $this, 'strip_author_oembed' ], 10, 4 );
    }

    public function remove_user_endpoints( array $endpoints ): array {
        if ( current_user_can( 'manage_network' ) ) {
            return $endpoints;
        }
        unset( $endpoints['/wp/v2/users'] );
        unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
        unset( $endpoints['/wp/v2/users/me'] );
        return $endpoints;
    }

    public function block_user_routes( $result ) {
        if ( $result instanceof \WP_Error ) {
            return $result;
        }
        $route = $GLOBALS['wp']->query_vars['rest_route'] ?? '';
        if ( str_starts_with( $route, '/wp/v2/users' ) && ! current_user_can( 'manage_network' ) ) {
            return new \WP_Error(
                'rest_user_invalid',
                'User routes are disabled.',
                [ 'status' => 404 ]
            );
        }
        return $result;
    }

    public function block_author_archives(): void {
        if ( is_author() ) {
            global $wp_query;
            $wp_query->set_404();
            status_header( 404 );
            nocache_headers();
        }
    }

    public function strip_author_oembed( $data, $post, $width, $height ) {
        unset( $data['author_name'], $data['author_url'] );
        return $data;
    }
}
