<?php
// Pretend MySQL constants — wp-sqlite-db ignores them but core still touches them.
define( 'DB_NAME',     'heyfam_test' );
define( 'DB_USER',     'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST',     'localhost' );
define( 'DB_CHARSET',  'utf8' );
define( 'DB_COLLATE',  '' );

// SQLite drop-in target. Recreated on each run by tests/bootstrap.php.
define( 'DB_DIR',  __DIR__ );
define( 'DB_FILE', 'heyfam_test.sqlite' );

$table_prefix = 'wptests_';

define( 'WP_TESTS_DOMAIN',     'example.org' );
define( 'WP_TESTS_EMAIL',      'admin@example.org' );
define( 'WP_TESTS_TITLE',      'HeyFam Test' );
define( 'WP_PHP_BINARY',       'php' );

define( 'WPLANG', '' );

// Network/multisite — toggled by multisite.xml or env var.
if ( getenv( 'WP_TESTS_MULTISITE' ) === '1' ) {
    define( 'WP_TESTS_MULTISITE', true );
    define( 'MULTISITE',          true );
    define( 'SUBDOMAIN_INSTALL',  false );
    define( 'DOMAIN_CURRENT_SITE', 'example.org' );
    define( 'PATH_CURRENT_SITE',   '/' );
    define( 'SITE_ID_CURRENT_SITE', 1 );
    define( 'BLOG_ID_CURRENT_SITE', 1 );
}

// HeyFam needs a stable invite HMAC so accepted invites verify.
if ( ! getenv( 'HEYFAM_INVITE_HMAC_SECRET' ) ) {
    putenv( 'HEYFAM_INVITE_HMAC_SECRET=test-secret-for-phpunit' );
}

define( 'ABSPATH', dirname( dirname( dirname( __DIR__ ) ) ) . '/vendor/wordpress/wordpress/' );
