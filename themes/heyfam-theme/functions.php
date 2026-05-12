<?php
defined( 'ABSPATH' ) || exit;

add_action( 'after_setup_theme', static function () {
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'post-thumbnails' );
} );

add_action( 'wp_enqueue_scripts', static function () {
    // Anonymous visitors only get the bundle on the landing page, public auth
    // flow pages (signup, login, invite), and the public /design reference.
    // Logged-in users get it everywhere.
    $public_auth_templates = [ 'page-signup', 'page-login', 'page-invite' ];
    $is_design_page        = (bool) get_query_var( 'heyfam_design' );
    if (
        ! is_user_logged_in()
        && ! is_page_template( 'templates/index.html' )
        && ! ( is_page() && in_array( get_page_template_slug(), $public_auth_templates, true ) )
        && ! $is_design_page
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

    // Bundle CSS emitted by esbuild (CropperJS styles, etc.). Only enqueued
    // when the build artefact exists so dev installs without a build don't 404.
    $bundle_css = get_theme_file_path( 'build/index.css' );
    if ( file_exists( $bundle_css ) ) {
        wp_enqueue_style(
            'heyfam-bundle',
            get_theme_file_uri( 'build/index.css' ),
            [ 'heyfam-components' ],
            $asset['version'] ?? '0.1.0'
        );
    }

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
        'userAvatarUrl'    => $uid && class_exists( '\\HeyFam\\Core\\Avatars\\Avatar' )
            ? \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 64 )
            : '',
        'logoutUrl'        => is_user_logged_in() ? wp_logout_url( '/' ) : '',
        'devMode'          => ! getenv( 'TWILIO_ACCOUNT_SID' ),
        'devBanner'        => ( defined( 'WP_DEBUG' ) && WP_DEBUG && is_user_logged_in() ),
        'onboardedAt'      => $onboarded_at,
        'invitesSkippedAt' => $invites_skipped_at,
        'nudgeDismissedAt' => $nudge_dismissed_at,
        'heicSupport'      => class_exists( '\\HeyFam\\Core\\REST\\Routes' )
            ? \HeyFam\Core\REST\Routes::server_supports_heic()
            : false,
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

    // Main site front page: seed the user's families so the landing renders
    // their fam list (instead of the marketing CTAs) on first paint.
    if ( $is_main && is_user_logged_in() && ( is_front_page() || is_home() ) ) {
        $fams = class_exists( '\\HeyFam\\Core\\Fams\\Membership' )
            ? \HeyFam\Core\Fams\Membership::user_blogs( get_current_user_id() )
            : [];
        wp_interactivity_state( 'heyfam/landing', [
            'fams'    => $fams,
            'hasFams' => ! empty( $fams ),
        ] );
    }

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
    echo '<meta name="theme-color" content="#5a8a52">' . "\n";
    echo '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' . "\n";
} );

add_action( 'init', static function () {
    add_rewrite_rule( '^p/(\d+)/?$', 'index.php?p=$matches[1]', 'top' );
    add_rewrite_rule( '^design/?$',  'index.php?heyfam_design=1', 'top' );

    // Self-heal: bump the version below when a rewrite rule changes.
    if ( get_option( 'heyfam_rewrite_v' ) !== '2' ) {
        flush_rewrite_rules();
        update_option( 'heyfam_rewrite_v', '2' );
    }
} );

add_filter( 'query_vars', static function ( $vars ) {
    $vars[] = 'heyfam_design';
    return $vars;
} );

// Route /design to the PHP-rendered design system reference template.
add_filter( 'template_include', static function ( $template ) {
    if ( get_query_var( 'heyfam_design' ) ) {
        $design = get_theme_file_path( 'templates/design.php' );
        if ( file_exists( $design ) ) {
            return $design;
        }
    }
    return $template;
} );

// Server-render our IAPI directives (data-wp-each expansion, bind, text, etc.)
// for any core/html block in the heyfam/feed namespace. Without this, the
// `<template>` iteration only unfolds after JS hydration, leaving a blank flash.
add_filter( 'render_block', static function ( $content, $block ) {
    $name = $block['blockName'] ?? '';
    if ( $name !== 'core/html' ) {
        return $content;
    }
    if (
        ! str_contains( $content, 'data-wp-interactive="heyfam/feed"' )
        && ! str_contains( $content, 'data-wp-interactive="heyfam/landing"' )
    ) {
        return $content;
    }
    return wp_interactivity_process_directives( $content );
}, 20, 2 );
