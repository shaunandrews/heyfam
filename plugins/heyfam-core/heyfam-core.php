<?php
/**
 * Plugin Name: HeyFam Core
 * Description: Auth, fams, content, notifs for HeyFam.
 * Version: 0.1.0
 * Network: true
 * Requires PHP: 8.1
 * Requires at least: 6.5
 */

defined( 'ABSPATH' ) || exit;

define( 'HEYFAM_CORE_FILE', __FILE__ );
define( 'HEYFAM_CORE_DIR', __DIR__ );
define( 'HEYFAM_CORE_URL', plugin_dir_url( __FILE__ ) );
define( 'HEYFAM_CORE_VERSION', '0.1.0' );

require_once __DIR__ . '/vendor/autoload.php';

// Action Scheduler ships as a library; bootstrap it if WooCommerce isn't already loading it.
if ( ! function_exists( 'as_schedule_single_action' ) ) {
    $as = __DIR__ . '/vendor/woocommerce/action-scheduler/action-scheduler.php';
    if ( file_exists( $as ) ) require_once $as;
}

add_action( 'plugins_loaded', static function () {
    ( new HeyFam\Core\Plugin() )->boot();
} );

register_activation_hook( __FILE__, [ HeyFam\Core\Plugin::class, 'activate' ] );
register_deactivation_hook( __FILE__, [ HeyFam\Core\Plugin::class, 'deactivate' ] );
