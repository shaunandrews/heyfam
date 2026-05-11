<?php
/**
 * PHPUnit bootstrap for HeyFam Core tests.
 *
 * Uses wp-phpunit/wp-phpunit (ships the core test framework as a Composer package)
 * and aaemnnosttv/wp-sqlite-db (single-file SQLite drop-in) so tests run against
 * the same SQLite backend Studio uses, in-process, with no MySQL.
 */

// Tell wp-phpunit which config to load.
putenv( sprintf( 'WP_PHPUNIT__TESTS_CONFIG=%s', __DIR__ . '/wp-tests-config.php' ) );

// Repo-root vendor autoload (wp-phpunit, roots/wordpress, wp-sqlite-db).
$repo_vendor = dirname( __DIR__, 3 ) . '/vendor/autoload.php';
if ( ! file_exists( $repo_vendor ) ) {
    fwrite( STDERR, "Repo-root vendor missing; run `composer install` at the repo root.\n" );
    exit( 1 );
}
require_once $repo_vendor;

// Plugin's own vendor (phpunit, yoast/phpunit-polyfills, twilio sdk, action-scheduler...).
require_once dirname( __DIR__ ) . '/vendor/autoload.php';

// Recreate the SQLite test DB from scratch on each phpunit invocation.
$db_path = __DIR__ . '/heyfam_test.sqlite';
if ( file_exists( $db_path ) ) {
    unlink( $db_path );
}
touch( $db_path );

// Drop the SQLite driver in BEFORE WP boots so $wpdb is the SQLite version.
$dropin_src = dirname( __DIR__, 3 ) . '/vendor/aaemnnosttv/wp-sqlite-db/src/db.php';
$wp_content = dirname( __DIR__, 3 ) . '/vendor/wordpress/wordpress/wp-content';
if ( ! is_dir( $wp_content ) ) mkdir( $wp_content, 0755, true );
copy( $dropin_src, $wp_content . '/db.php' );

// Load wp-phpunit's helper functions BEFORE we can call `tests_add_filter`.
$wp_phpunit_dir = getenv( 'WP_PHPUNIT__DIR' );
if ( ! $wp_phpunit_dir ) {
    // The wp-phpunit package sets this in its `Activator` (autoload) but only
    // when it loads. Fall back to the conventional vendor path.
    $wp_phpunit_dir = dirname( __DIR__, 3 ) . '/vendor/wp-phpunit/wp-phpunit';
    putenv( 'WP_PHPUNIT__DIR=' . $wp_phpunit_dir );
}
require_once $wp_phpunit_dir . '/includes/functions.php';

// Load HeyFam Core before WP's test installer runs — its `register_activation_hook`
// callback is what creates the per-site Invites/Reactions tables and seeds roles.
tests_add_filter( 'muplugins_loaded', static function () {
    require dirname( __DIR__ ) . '/heyfam-core.php';
} );

// Start the WP test framework.
require $wp_phpunit_dir . '/includes/bootstrap.php';
