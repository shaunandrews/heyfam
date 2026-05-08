<?php
defined( 'ABSPATH' ) || exit;

add_action( 'after_setup_theme', static function () {
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'post-thumbnails' );
} );

add_action( 'wp_enqueue_scripts', static function () {
    // Anonymous visitors only get the bundle on the landing page and on the
    // public auth flow pages (signup, login, invite). Logged-in users get it
    // everywhere.
    $public_auth_templates = [ 'page-signup', 'page-login', 'page-invite' ];
    if (
        ! is_user_logged_in()
        && ! is_page_template( 'templates/index.html' )
        && ! ( is_page() && in_array( get_page_template_slug(), $public_auth_templates, true ) )
    ) {
        return;
    }

    $build = get_theme_file_path( 'build/index.asset.php' );
    $asset = file_exists( $build ) ? require $build : [ 'dependencies' => [], 'version' => '0.1.0' ];
    // The asset.php from wp-scripts lists script-handle dependencies (e.g. "wp-interactivity"),
    // not script-module IDs. Translate the only one we care about and drop the rest.
    $module_deps = [ '@wordpress/interactivity' ];
    wp_enqueue_script_module(
        'heyfam-interactivity',
        get_theme_file_uri( 'build/index.js' ),
        $module_deps,
        $asset['version'] ?? '0.1.0'
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
        'logoutUrl' => is_user_logged_in() ? wp_logout_url( '/' ) : '',
    ] );
} );

add_action( 'wp_head', static function () {
    echo '<link rel="manifest" href="/manifest.webmanifest">' . "\n";
    echo '<meta name="theme-color" content="#d97706">' . "\n";
    echo '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' . "\n";
} );

add_action( 'init', static function () {
    add_rewrite_rule( '^p/(\d+)/?$', 'index.php?p=$matches[1]', 'top' );
} );
