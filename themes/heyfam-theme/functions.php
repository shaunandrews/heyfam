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
        'heyfam-tokens',
        get_theme_file_uri( 'src/styles/tokens.css' ),
        [],
        '0.2.0'
    );
    wp_enqueue_style(
        'heyfam-base',
        get_theme_file_uri( 'src/styles/base.css' ),
        [ 'heyfam-tokens' ],
        '0.2.0'
    );
    wp_enqueue_style(
        'heyfam-components',
        get_theme_file_uri( 'src/styles/components.css' ),
        [ 'heyfam-base' ],
        '0.2.0'
    );

    // Surface the WP REST nonce, current fam slug, and VAPID public key to the IAPI store.
    $blog       = get_blog_details();
    $fam_slug   = trim( $blog->path, '/' );
    $is_main    = (int) get_current_blog_id() === (int) get_network()->site_id;

    $uid                = get_current_user_id();
    $onboarded_at       = $uid ? (string) get_user_meta( $uid, 'heyfam_onboarded_at', true ) : '';
    $invites_skipped_at = $uid ? (string) get_user_meta( $uid, 'heyfam_invites_skipped_at', true ) : '';
    $nudge_dismissed_at = $uid ? (string) get_user_meta( $uid, 'heyfam_invites_nudge_dismissed_at', true ) : '';

    wp_interactivity_state( 'heyfam', [
        'nonce'            => wp_create_nonce( 'wp_rest' ),
        'famSlug'          => $is_main ? null : $fam_slug,
        'vapidKey'         => getenv( 'VAPID_PUBLIC_KEY' ) ?: '',
        'apiBase'          => '/wp-json/heyfam/v1',
        'userId'           => $uid,
        'logoutUrl'        => is_user_logged_in() ? wp_logout_url( '/' ) : '',
        'devMode'          => ! getenv( 'TWILIO_ACCOUNT_SID' ),
        'devBanner'        => ( defined( 'WP_DEBUG' ) && WP_DEBUG && is_user_logged_in() ),
        'onboardedAt'      => $onboarded_at,
        'invitesSkippedAt' => $invites_skipped_at,
        'nudgeDismissedAt' => $nudge_dismissed_at,
    ] );

} );

// The dev-banner template part is referenced from the site header so it mounts
// site-wide. Gate it server-side: when WP_DEBUG is off OR the user is not
// signed in, render nothing — anonymous prod visitors never see it.
add_filter( 'render_block_core/template-part', static function ( $content, $block ) {
    $slug = $block['attrs']['slug'] ?? '';
    if ( $slug !== 'dev-banner' ) return $content;
    if ( ! ( defined( 'WP_DEBUG' ) && WP_DEBUG && is_user_logged_in() ) ) return '';
    return $content;
}, 10, 2 );

// SSR initial post data for the feed / single page so first paint is instant.
// Hook `wp` (after the main query resolves) so the state is populated before
// the block tree renders and our render_block filter calls process_directives.
add_action( 'wp', static function () {
    if ( is_admin() || ! class_exists( '\\HeyFam\\Core\\REST\\Routes' ) ) return;
    $is_main = (int) get_current_blog_id() === (int) get_network()->site_id;
    if ( $is_main ) return;

    if ( is_singular( 'post' ) ) {
        $post = get_post();
        if ( $post ) {
            $serialized = \HeyFam\Core\REST\Routes::serialize_post( $post );
            wp_interactivity_state( 'heyfam/feed', [
                'posts'    => [ $serialized ],
                'hasPosts' => true,
            ] );
        }
    } elseif ( is_front_page() || is_home() || is_page_template( 'templates/page-feed.html' ) ) {
        $posts      = get_posts( [ 'numberposts' => 50, 'orderby' => 'date', 'order' => 'DESC' ] );
        $serialized = array_map( [ '\\HeyFam\\Core\\REST\\Routes', 'serialize_post' ], $posts );
        wp_interactivity_state( 'heyfam/feed', [
            'posts'    => $serialized,
            'hasPosts' => ! empty( $serialized ),
        ] );
    }
} );

add_action( 'wp_head', static function () {
    echo '<link rel="manifest" href="/manifest.webmanifest">' . "\n";
    echo '<meta name="theme-color" content="#d97706">' . "\n";
    echo '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' . "\n";
} );

add_action( 'init', static function () {
    add_rewrite_rule( '^p/(\d+)/?$', 'index.php?p=$matches[1]', 'top' );
} );

// Server-render our IAPI directives (data-wp-each expansion, bind, text, etc.)
// for any core/html block in the heyfam/feed namespace. Without this, the
// `<template>` iteration only unfolds after JS hydration, leaving a blank flash.
add_filter( 'render_block', static function ( $content, $block ) {
    $name = $block['blockName'] ?? '';
    if ( $name !== 'core/html' ) {
        return $content;
    }
    if ( ! str_contains( $content, 'data-wp-interactive="heyfam/feed"' ) ) {
        return $content;
    }
    return wp_interactivity_process_directives( $content );
}, 20, 2 );
