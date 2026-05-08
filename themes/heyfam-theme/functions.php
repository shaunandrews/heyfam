<?php
defined( 'ABSPATH' ) || exit;

add_action( 'after_setup_theme', static function () {
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'post-thumbnails' );
} );

add_action( 'wp_enqueue_scripts', static function () {
    if ( ! is_user_logged_in() && ! is_page_template( 'templates/index.html' ) ) {
        // Anonymous home gets a plain landing page.
        return;
    }

    $build = get_theme_file_path( 'build/index.asset.php' );
    $deps  = file_exists( $build ) ? require $build : [ 'dependencies' => [], 'version' => '0.1.0' ];
    wp_enqueue_script_module(
        'heyfam-interactivity',
        get_theme_file_uri( 'build/index.js' ),
        array_merge( [ '@wordpress/interactivity' ], $deps['dependencies'] ?? [] ),
        $deps['version'] ?? '0.1.0'
    );

    wp_enqueue_style(
        'heyfam-main',
        get_theme_file_uri( 'src/styles/main.css' ),
        [],
        '0.1.0'
    );

    // Surface the WP REST nonce, current fam slug, and VAPID public key to the IAPI store.
    $blog       = get_blog_details();
    $fam_slug   = trim( $blog->path, '/' );
    $is_main    = (int) get_current_blog_id() === (int) get_network()->site_id;

    wp_interactivity_state( 'heyfam', [
        'nonce'     => wp_create_nonce( 'wp_rest' ),
        'famSlug'   => $is_main ? null : $fam_slug,
        'vapidKey'  => getenv( 'VAPID_PUBLIC_KEY' ) ?: '',
        'apiBase'   => '/wp-json/heyfam/v1',
        'userId'    => get_current_user_id(),
    ] );
} );

add_action( 'wp_head', static function () {
    echo '<link rel="manifest" href="/manifest.webmanifest">' . "\n";
    echo '<meta name="theme-color" content="#d97706">' . "\n";
    echo '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' . "\n";
} );
