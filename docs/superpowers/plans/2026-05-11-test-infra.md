# HeyFam Test Infrastructure & Dev Helpers Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make HeyFam development repeatable: wire up a PHPUnit env that matches Studio's SQLite backend, add a tiny JS unit-test runner, install Playwright for the golden-path e2e flow, and ship two WP-CLI helpers (`reset-me`, `seed-demo`) plus a dev banner that exposes them in-browser.

**Architecture:**

- **PHPUnit:** Use `wp-phpunit/wp-phpunit` (ships the WordPress test framework as a Composer package) + `roots/wordpress` (ships WordPress core) + `aaemnnosttv/wp-sqlite-db` (drop-in SQLite driver) so tests run against the same SQLite-backed WordPress that Studio uses, in-process, with no Docker. A `tests/bootstrap.php` initializes the test env, requires the SQLite drop-in, loads `heyfam-core.php`, and the existing integration tests run against it. Multisite is enabled via `WP_TESTS_MULTISITE`.
- **JS tests:** Vitest in the repo root, running on the renamed pure-helper modules extracted from the IAPI files. Helpers move from `signup.js`/`login.js`/`feed-poll.js` into `themes/heyfam-theme/src/lib/{phone,slug,time}.js` and are re-imported from their original locations. No code-behavior changes.
- **E2E:** Playwright in `tests/e2e/` driven against the local Studio site, with `baseURL` read from a `.env.test` file the developer fills once. A `scripts/studio-url.mjs` helper writes the URL automatically from `studio site status --json`.
- **WP-CLI:** Two `wp heyfam <subcommand>` commands are registered through `HeyFam\Core\Cli\Bootstrap` (the notif-dev plan creates Bootstrap; this plan adds two lines to its constructor). Command logic lives on per-command classes (`ResetMe`, `SeedDemo`) which expose both a static `run()` helper (called from the dev REST routes) and an `__invoke()` WP-CLI entry point. Both are scoped to the running user / current network where reasonable. `reset-me` requires `--yes` for destructive ops. `seed-demo` creates a fam with N members, M posts, and a handful of comments and reactions, and prints the resulting fam URL.
- **Dev banner:** A small IAPI island registered by the theme when `WP_DEBUG === true`. Renders a fixed bottom-right pill with shortcuts: Reset me / Seed demo / Log out / Open admin. The banner POSTs to dedicated REST routes (gated on `WP_DEBUG` server-side) that wrap the CLI commands — so a designer doesn't need a terminal to reset state.

**Tech Stack:** PHP 8.1+, WordPress 6.5+ (multisite via blueprint, SQLite via the Studio drop-in), Composer (`wp-phpunit`, `roots/wordpress`, `aaemnnosttv/wp-sqlite-db`, already-present `phpunit/phpunit` + `yoast/phpunit-polyfills`), Node 20+, Vitest, Playwright, `@wordpress/interactivity` (existing).

**Reference orchestrator:** `docs/superpowers/orchestrator.md` Section 3.

**Depends on:** None semantically, but the **notif-dev** plan creates `plugins/heyfam-core/src/Cli/Bootstrap.php` and this plan extends it. Both run in **Phase A** in parallel. If notif-dev has not landed when test-infra's CLI tasks (5–6) run, test-infra creates the same file — alphabetize the `WP_CLI::add_command()` list when both plans land. This plan's CLI commands live in the same `Cli/` directory as notif-dev's.

---

## Preconditions

- Studio installed and the `studio` CLI on PATH (per `~/Studio/heyfam/STUDIO.md`).
- `~/Studio/heyfam/wp-content/{plugins,themes}` already symlinked to this repo's `plugins/heyfam-core` and `themes/heyfam-theme` (per `reference_local_dev`).
- `composer install` and `npm install` already done at repo root.
- The site has been brought up at least once and the `studio site status --json` command works.

---

## File Structure

**Modified:**

- `composer.json` (repo root) — add `wp-phpunit/wp-phpunit`, `roots/wordpress`, `aaemnnosttv/wp-sqlite-db` to `require-dev`; add Composer `installer-paths` so WP installs into `vendor/wordpress/wordpress`; add `scripts.test` shortcut.
- `plugins/heyfam-core/src/Cli/Bootstrap.php` — **modify** (created by the notif-dev plan). Register `wp heyfam reset-me` and `wp heyfam seed-demo` here, alphabetized with the existing `send-test-notification` command. If notif-dev has not landed when this plan reaches Task 5, **create** this file with the alphabetized registration list (notif-dev's later edit will then be a one-line add). The legacy `Cli\Commands::register()` boot from `heyfam-core.php` is no longer needed — Bootstrap.php is constructed from `Plugin::boot()` per notif-dev's plan.
- `plugins/heyfam-core/phpunit.xml` — point `bootstrap` at the new bootstrap, add a `<group exclude="integration-skip">` placeholder if needed, and add a separate `multisite` testsuite that defines `WP_TESTS_MULTISITE`.
- `plugins/heyfam-core/src/Plugin.php` — boot the dev REST routes when `WP_DEBUG` is true.
- `themes/heyfam-theme/functions.php` — when `WP_DEBUG` is true and the user is logged in, surface `state.heyfam.devMode = true` (already does this from absence of `TWILIO_ACCOUNT_SID`; promote it to `state.heyfam.devBanner = true`) and render the dev banner part.
- `themes/heyfam-theme/src/interactivity/index.js` — import the new `dev-banner.js` (only built; rendering is gated by template).
- `themes/heyfam-theme/src/interactivity/signup.js`, `login.js` — import `normalizePhone` and `slugify` from `../lib/phone.js`/`../lib/slug.js` (delete the local copies).
- `themes/heyfam-theme/src/interactivity/feed-poll.js` — import `currentPostId` from `../lib/dom.js` (delete the local copy).
- `package.json` — add `devDependencies` (`vitest`, `@playwright/test`), and scripts (`test:js`, `test:e2e`, `studio:url`).
- `.gitignore` — add `tests/.playwright/`, `coverage/`, `vendor/wordpress/`, `tests/.env.test`.

**Created:**

- `plugins/heyfam-core/tests/bootstrap.php` — bootstrap for `wp-phpunit` + SQLite drop-in, loads `heyfam-core.php`.
- `plugins/heyfam-core/tests/wp-tests-config.php` — minimal config shipped alongside bootstrap; sets `DB_FILE`, `WP_TESTS_DOMAIN`, table prefix, debug flags.
- `plugins/heyfam-core/tests/multisite.xml` — phpunit config that enables multisite.
- `plugins/heyfam-core/tests/Helpers/RestRequest.php` — small helper for dispatching `\WP_REST_Request` instances against the routes class.
- `plugins/heyfam-core/tests/RestRoutesTest.php` — happy-path tests for `POST /signup/start` (dev mode), `POST /signup/verify`, `POST /fams`, slug validation rejection.
- `plugins/heyfam-core/src/Cli/ResetMe.php` — concrete logic for the reset helper (separately importable from REST + CLI). Class also exposes a static `reset_me()` CLI command method invoked by Bootstrap.
- `plugins/heyfam-core/src/Cli/SeedDemo.php` — concrete logic for the seed helper (separately importable). Also exposes a static `seed_demo()` CLI command method invoked by Bootstrap.
- `plugins/heyfam-core/src/REST/DevRoutes.php` — REST routes for the dev banner (only registered when `WP_DEBUG`).
- `themes/heyfam-theme/src/lib/phone.js` — pure `normalizePhone`.
- `themes/heyfam-theme/src/lib/slug.js` — pure `slugify` plus a re-export of the validator regex used by the JS forms.
- `themes/heyfam-theme/src/lib/time.js` — pure `relativeTime` (mirror of PHP `Routes::relative_time` for any future client use; today only needed for tests, kept thin).
- `themes/heyfam-theme/src/lib/dom.js` — pure `currentPostId(bodyClass)` (no-DOM input variant so it's unit-testable).
- `themes/heyfam-theme/src/lib/__tests__/phone.test.js`, `slug.test.js`, `time.test.js`, `dom.test.js` — vitest specs.
- `themes/heyfam-theme/src/interactivity/dev-banner.js` — IAPI store for the dev banner buttons.
- `themes/heyfam-theme/parts/dev-banner.html` — the banner markup (conditionally included by templates that render the header).
- `vitest.config.mjs` — minimal config (Node environment, `include: themes/heyfam-theme/src/lib/__tests__/**`).
- `playwright.config.mjs` — basic config: chromium-only, `baseURL` from env, single project, `webServer` left unset (Studio runs separately).
- `tests/e2e/golden-path.spec.mjs` — the spec described in §3 of the orchestrator.
- `scripts/studio-url.mjs` — reads `studio site status --json`, writes `BASE_URL=...` to `tests/.env.test`.
- `scripts/setup-tests.sh` — one-shot: `composer install`, install Playwright browsers, prompt the user to run `studio site start`.
- `docs/dev/testing.md` — developer-facing README delta covering all of the above.

---

## Phase Map

| Phase | Theme | Demoable when complete |
|---|---|---|
| 1 | PHPUnit bootstrap (SQLite, wp-phpunit) | `composer test` runs the existing 4 test files green |
| 2 | New RestRoutes integration test | A 5th test file (REST happy path) goes green |
| 3 | JS test runner + helper extraction | `npm run test:js` runs against extracted pure helpers, all green |
| 4 | Playwright e2e | `npm run test:e2e` walks the golden path against local Studio |
| 5 | WP-CLI `reset-me` | `studio wp heyfam reset-me --yes` cleans the current user |
| 6 | WP-CLI `seed-demo` | `studio wp heyfam seed-demo --name=Demo --members=4` creates a fam |
| 7 | Dev banner | When `WP_DEBUG=true`, an in-app banner exposes both CLI helpers + log out + admin link |
| 8 | Docs | `docs/dev/testing.md` lists every setup step end-to-end |

---

## Task 1: PHPUnit bootstrap with wp-phpunit + SQLite

**Files:**
- Modify: `composer.json` (repo root), `plugins/heyfam-core/phpunit.xml`
- Create: `plugins/heyfam-core/tests/bootstrap.php`, `plugins/heyfam-core/tests/wp-tests-config.php`, `plugins/heyfam-core/tests/multisite.xml`

- [ ] **Step 1: Add the test-env Composer packages to the repo-root composer.json**

The plugin's own `composer.json` already has `phpunit/phpunit` and `yoast/phpunit-polyfills`. The wp-phpunit framework belongs to the repo root because it pulls in WordPress core, which is a project-level concern, not a plugin distribution concern.

Edit `composer.json` (repo root) so it becomes:

```json
{
  "name": "shaunandrews/heyfam",
  "description": "HeyFam — family connection app",
  "type": "project",
  "license": "proprietary",
  "minimum-stability": "stable",
  "repositories": [
    { "type": "path", "url": "plugins/heyfam-core" },
    { "type": "composer", "url": "https://wpackagist.org" }
  ],
  "require": {
    "shaunandrews/heyfam-core": "*"
  },
  "require-dev": {
    "roots/wordpress":     "^6.5",
    "wp-phpunit/wp-phpunit": "^6.5",
    "aaemnnosttv/wp-sqlite-db": "^1.8",
    "wp-cli/wp-cli-bundle": "^2.10"
  },
  "extra": {
    "wordpress-install-dir": "vendor/wordpress/wordpress"
  },
  "config": {
    "allow-plugins": {
      "composer/installers": true,
      "roots/wordpress-core-installer": true
    }
  },
  "scripts": {
    "test":          "cd plugins/heyfam-core && ./vendor/bin/phpunit",
    "test:ms":       "cd plugins/heyfam-core && ./vendor/bin/phpunit -c tests/multisite.xml",
    "test:js":       "vitest run",
    "test:e2e":      "playwright test"
  }
}
```

Notes:
- `roots/wordpress` installs WP core to `vendor/wordpress/wordpress` (their convention). We point `WP_PHPUNIT__DIR` at the wp-phpunit package and `ABSPATH`-equivalent paths at the roots/wordpress install in the test config.
- `wp-cli/wp-cli-bundle` is **dev-only**, not for production — it gives plain `vendor/bin/wp` so we can run the new CLI commands in tests without invoking Studio. (Studio is for the dev environment; CI / tests use plain wp-cli.)

- [ ] **Step 2: Install the new packages**

```bash
composer install
```

Expected: `vendor/wordpress/wordpress/wp-load.php` exists, `vendor/wp-phpunit/wp-phpunit/includes/bootstrap.php` exists, `vendor/aaemnnosttv/wp-sqlite-db/src/db.php` exists.

- [ ] **Step 3: Create `plugins/heyfam-core/tests/wp-tests-config.php`**

This file is read by `wp-phpunit`'s `bootstrap.php` (via `WP_PHPUNIT__TESTS_CONFIG`). It substitutes for `wp-tests-config.php` in core's test suite.

```php
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
```

- [ ] **Step 4: Create `plugins/heyfam-core/tests/bootstrap.php`**

```php
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

// Load HeyFam Core before WP's test installer runs — its `register_activation_hook`
// callback is what creates the per-site Invites/Reactions tables and seeds roles.
tests_add_filter( 'muplugins_loaded', static function () {
    require dirname( __DIR__ ) . '/heyfam-core.php';
} );

// Start the WP test framework.
require getenv( 'WP_PHPUNIT__DIR' ) . '/includes/functions.php';
require getenv( 'WP_PHPUNIT__DIR' ) . '/includes/bootstrap.php';
```

Notes:
- `dirname( __DIR__, 3 )` walks up from `plugins/heyfam-core/tests/` to the repo root.
- `tests_add_filter` is provided by `wp-phpunit/includes/functions.php`; it stores a callback to fire after must-use plugins load but before the regular plugin loop — exactly when our plugin's main file should run so `register_activation_hook` is set up before the test installer fires it.
- The SQLite drop-in is `copy()`d rather than symlinked so the repo's WP install stays in a known state.

- [ ] **Step 5: Replace `plugins/heyfam-core/phpunit.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
         bootstrap="tests/bootstrap.php"
         colors="true"
         cacheDirectory=".phpunit.cache">
  <php>
    <env name="HEYFAM_INVITE_HMAC_SECRET" value="test-secret-for-phpunit"/>
  </php>
  <testsuites>
    <testsuite name="heyfam">
      <directory>tests</directory>
      <exclude>tests/Helpers</exclude>
    </testsuite>
  </testsuites>
</phpunit>
```

- [ ] **Step 6: Create `plugins/heyfam-core/tests/multisite.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
         bootstrap="tests/bootstrap.php"
         colors="true"
         cacheDirectory=".phpunit.cache">
  <php>
    <env name="WP_TESTS_MULTISITE" value="1"/>
    <env name="HEYFAM_INVITE_HMAC_SECRET" value="test-secret-for-phpunit"/>
  </php>
  <testsuites>
    <testsuite name="heyfam-multisite">
      <directory>tests</directory>
      <exclude>tests/Helpers</exclude>
    </testsuite>
  </testsuites>
</phpunit>
```

- [ ] **Step 7: Update the existing test files to extend `WP_UnitTestCase` instead of `TestCase`**

The current files use `\PHPUnit\Framework\TestCase`, which works for pure-PHP unit tests (`InvitesTest`, `FanOutTest`) but skips the WP fixtures (DB transactions, factories, role seeding) that integration tests need.

Migrate each `@group integration` file:

`plugins/heyfam-core/tests/CommentsTest.php` — change `final class CommentsTest extends TestCase` to `final class CommentsTest extends \WP_UnitTestCase`. Leave everything else.

`plugins/heyfam-core/tests/ReactionsTest.php` — same change.

`InvitesTest.php` and `FanOutTest.php` are pure-PHP — keep them on `TestCase` so they remain fast. They do not need WP loaded.

(Tests that extend `WP_UnitTestCase` wrap each test in a transaction that's rolled back at teardown, so per-blog tables created in `Manager::create_table` get reset cleanly between tests.)

- [ ] **Step 8: Run the suite**

```bash
composer test
```

Expected: 4 files run; `CommentsTest` and `ReactionsTest` exercise `wp_insert_post`, `wp_insert_comment`, `Manager::create_table`, all green. `InvitesTest` and `FanOutTest` still green (pure logic). If a multisite-specific test path is touched and fails, switch to `composer test:ms`.

If the bootstrap fails with a "table doesn't exist" error during the per-blog Invites/Reactions creates, that means `wp_initialize_site` didn't fire under test. Workaround: add `\HeyFam\Core\Fams\Invites::create_table( get_current_blog_id() );` to the affected `setUp()` (the existing ReactionsTest already does this for Reactions).

- [ ] **Step 9: Commit**

```bash
git add composer.json composer.lock plugins/heyfam-core/phpunit.xml plugins/heyfam-core/tests/bootstrap.php plugins/heyfam-core/tests/wp-tests-config.php plugins/heyfam-core/tests/multisite.xml plugins/heyfam-core/tests/CommentsTest.php plugins/heyfam-core/tests/ReactionsTest.php .gitignore
git commit -m "tests: wire up WP PHPUnit + SQLite drop-in so integration tests actually run"
```

---

## Task 2: REST happy-path integration test

**Files:**
- Create: `plugins/heyfam-core/tests/Helpers/RestRequest.php`, `plugins/heyfam-core/tests/RestRoutesTest.php`

- [ ] **Step 1: Create the REST helper**

`plugins/heyfam-core/tests/Helpers/RestRequest.php`:

```php
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
```

- [ ] **Step 2: Create the test**

`plugins/heyfam-core/tests/RestRoutesTest.php`:

```php
<?php
use HeyFam\Core\Tests\Helpers\RestRequest;

/**
 * @group integration
 *
 * Exercises the REST surface end-to-end against the wp-phpunit test env,
 * including the dev-mode auth path (TWILIO_ACCOUNT_SID absent → 000000).
 */
final class RestRoutesTest extends \WP_UnitTestCase {
    protected function setUp(): void {
        parent::setUp();
        // Ensure REST routes are registered (Plugin::boot already wired this).
        do_action( 'rest_api_init' );
    }

    public function test_signup_start_dev_mode_returns_ok(): void {
        $resp = RestRequest::post( '/heyfam/v1/signup/start', [
            'phone' => '+15555550100',
        ] );
        $this->assertSame( 200, $resp->get_status() );
    }

    public function test_signup_verify_with_dev_code_creates_user(): void {
        // Start (no-op in dev mode but exercises the rate-limit path).
        RestRequest::post( '/heyfam/v1/signup/start', [ 'phone' => '+15555550101' ] );

        $resp = RestRequest::post( '/heyfam/v1/signup/verify', [
            'phone'        => '+15555550101',
            'code'         => '000000',
            'display_name' => 'Test User',
            'fam_name'     => 'Test Fam',
            'fam_slug'     => 'testfam',
        ] );
        $this->assertSame( 200, $resp->get_status() );
        $data = $resp->get_data();
        $this->assertTrue( $data['ok'] ?? false );
        $this->assertNotEmpty( $data['fam_url'] ?? null );
    }

    public function test_signup_verify_rejects_bad_code(): void {
        RestRequest::post( '/heyfam/v1/signup/start', [ 'phone' => '+15555550102' ] );
        $resp = RestRequest::post( '/heyfam/v1/signup/verify', [
            'phone'        => '+15555550102',
            'code'         => '999999',
            'display_name' => 'Test User',
            'fam_name'     => 'Test Fam 2',
            'fam_slug'     => 'testfam2',
        ] );
        $this->assertSame( 400, $resp->get_status() );
        $this->assertSame( 'bad_code', $resp->get_data()['error'] ?? null );
    }

    public function test_fam_slug_validation_rejects_reserved(): void {
        // Reserved slugs (signup, login, wp-admin etc.) must not be accepted.
        $valid = \HeyFam\Core\Fams\Slugs::validate( 'wp-admin' );
        $this->assertTrue( is_wp_error( $valid ) );
        $this->assertSame( 'reserved_slug', $valid->get_error_code() );
    }

    public function test_fan_out_schedule_post_writes_an_action(): void {
        // Build a fresh subsite, post into it, and confirm an Action Scheduler
        // action was queued for the FanOut::schedule_post hook.
        $blog_id = self::factory()->blog->create();
        switch_to_blog( $blog_id );
        try {
            $post_id = wp_insert_post( [
                'post_title'   => 'Test Post',
                'post_content' => 'Hello, fam.',
                'post_status'  => 'publish',
            ] );
            $this->assertGreaterThan( 0, $post_id );

            $actions = as_get_scheduled_actions( [
                'hook' => 'heyfam_send_post',
            ], 'ARRAY_A' );
            $this->assertNotEmpty( $actions, 'FanOut should have queued a heyfam_send_post action' );
        } finally {
            restore_current_blog();
        }
    }
}
```

Notes:
- `WP_UnitTestCase` provides `self::factory()->blog->create()` on multisite installs. This test class requires multisite, so it must be run via `composer test:ms` (the `multisite.xml` config). If we want the test to skip cleanly when not on multisite, add `$this->markTestSkipped(...)` guarded by `is_multisite()`.
- `as_get_scheduled_actions` is the Action Scheduler API — available because the plugin bootstraps it.

- [ ] **Step 3: Run the new test on multisite**

```bash
composer test:ms -- --filter RestRoutesTest
```

Expected: all 5 tests pass.

- [ ] **Step 4: Commit**

```bash
git add plugins/heyfam-core/tests/Helpers/RestRequest.php plugins/heyfam-core/tests/RestRoutesTest.php
git commit -m "tests: REST happy path + slug validation + FanOut scheduling"
```

---

## Task 3: JS test runner + extracted helpers

**Files:**
- Modify: `package.json`, `themes/heyfam-theme/src/interactivity/{signup,login,feed-poll}.js`, `.gitignore`
- Create: `vitest.config.mjs`, `themes/heyfam-theme/src/lib/{phone,slug,time,dom}.js`, `themes/heyfam-theme/src/lib/__tests__/{phone,slug,time,dom}.test.js`

- [ ] **Step 1: Install vitest**

Edit `package.json` to add devDependencies and scripts:

```json
{
  "name": "heyfam",
  "private": true,
  "scripts": {
    "build:theme": "node scripts/build-theme.mjs",
    "build":       "npm run build:theme",
    "test:js":     "vitest run",
    "test:js:watch": "vitest",
    "test:e2e":    "playwright test",
    "studio:url":  "node scripts/studio-url.mjs"
  },
  "devDependencies": {
    "@babel/runtime":            "^7.29.2",
    "@playwright/test":          "^1.49.0",
    "@wordpress/interactivity":  "^6.45.0",
    "@wordpress/scripts":        "^28.6.0",
    "emoji-picker-element":      "^1.29.1",
    "esbuild":                   "^0.28.0",
    "vitest":                    "^2.1.5"
  }
}
```

Then:

```bash
npm install
```

(Vitest pulls in vite + a small set of dependencies, but no React, no jsdom by default. Node-only environment is enough for our pure helpers.)

- [ ] **Step 2: Create `vitest.config.mjs` at repo root**

```js
import { defineConfig } from 'vitest/config';

export default defineConfig( {
  test: {
    environment: 'node',
    include:     [ 'themes/heyfam-theme/src/lib/**/__tests__/**/*.test.js' ],
    reporters:   [ 'default' ],
  },
} );
```

- [ ] **Step 3: Extract the phone normalizer to `themes/heyfam-theme/src/lib/phone.js`**

```js
/**
 * Coerce a user-typed phone string to E.164 (digits with leading +, 8-16 chars).
 * Returns null when the input cannot be coerced — callers should treat null
 * as a validation failure rather than retrying.
 *
 * Mirrors the server-side rule in REST\Routes::normalize_phone(). When you
 * change one, change the other and update phone.test.js.
 */
export function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}
```

- [ ] **Step 4: Extract slugify + validator to `themes/heyfam-theme/src/lib/slug.js`**

```js
/** Map a fam display name to a lowercase, hyphenated candidate slug. */
export function slugify( s ) {
  return ( s || '' ).toLowerCase().replace( /[^a-z0-9]+/g, '-' ).replace( /^-+|-+$/g, '' );
}

/** Same shape rule as PHP Slugs::validate(). */
export const SLUG_REGEX = /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/;

export function isValidSlug( s ) {
  return SLUG_REGEX.test( s || '' );
}
```

- [ ] **Step 5: Mirror PHP `relative_time` to `themes/heyfam-theme/src/lib/time.js`**

```js
/**
 * Mirror of PHP REST\Routes::relative_time(). Same buckets, same month strings.
 * Pure: pass `now` to make this deterministic in tests.
 */
const MONTHS = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];

export function relativeTime( iso, now = Date.now() ) {
  if ( ! iso ) return '';
  const then = new Date( iso ).getTime();
  if ( Number.isNaN( then ) ) return '';
  const diff = ( now - then ) / 1000;
  if ( diff < 60 )         return 'now';
  if ( diff < 3600 )       return `${Math.floor( diff / 60 )}m ago`;
  if ( diff < 86400 )      return `${Math.floor( diff / 3600 )}h ago`;
  if ( diff < 86400 * 7 )  return `${Math.floor( diff / 86400 )}d ago`;
  const d        = new Date( iso );
  const m        = MONTHS[ d.getUTCMonth() ];
  const day      = d.getUTCDate();
  const year     = d.getUTCFullYear();
  const thisYear = new Date( now ).getUTCFullYear();
  return year === thisYear ? `${m} ${day}` : `${m} ${day}, ${year}`;
}
```

- [ ] **Step 6: Extract `currentPostId` to `themes/heyfam-theme/src/lib/dom.js`**

The original lives in `feed-poll.js` and reads from `document.body.className`. To unit-test without jsdom, accept a class-string argument.

```js
/** Parse `body.className` and return the post id when on a singular post. */
export function currentPostIdFromClass( className ) {
  const m = ( className || '' ).match( /\bpostid-(\d+)\b/ );
  return m ? parseInt( m[ 1 ], 10 ) : 0;
}

/** Browser-only wrapper. Keep DOM access out of the testable surface. */
export function currentPostId() {
  return typeof document === 'undefined'
    ? 0
    : currentPostIdFromClass( document.body.className );
}
```

- [ ] **Step 7: Re-wire the IAPI files to import from `lib/`**

`themes/heyfam-theme/src/interactivity/signup.js`:
- Add at top: `import { normalizePhone } from '../lib/phone.js';` and `import { slugify } from '../lib/slug.js';`
- Delete the local `function normalizePhone` and `function slugify` at the bottom.

`themes/heyfam-theme/src/interactivity/login.js`:
- Same imports, same deletions.

`themes/heyfam-theme/src/interactivity/feed-poll.js`:
- Add: `import { currentPostId } from '../lib/dom.js';`
- Delete the local `function currentPostId` at the bottom.

- [ ] **Step 8: Write the tests**

`themes/heyfam-theme/src/lib/__tests__/phone.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { normalizePhone } from '../phone.js';

describe( 'normalizePhone', () => {
  it( 'returns null when the + is missing', () => {
    expect( normalizePhone( '15555550100' ) ).toBeNull();
  } );

  it( 'returns null when too short', () => {
    expect( normalizePhone( '+1234' ) ).toBeNull();
  } );

  it( 'returns null when too long', () => {
    expect( normalizePhone( '+12345678901234567' ) ).toBeNull();
  } );

  it( 'strips spaces, parens, and dashes', () => {
    expect( normalizePhone( '+1 (555) 555-0100' ) ).toBe( '+15555550100' );
  } );

  it( 'accepts a minimal E.164', () => {
    expect( normalizePhone( '+15555550100' ) ).toBe( '+15555550100' );
  } );
} );
```

`themes/heyfam-theme/src/lib/__tests__/slug.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { slugify, isValidSlug } from '../slug.js';

describe( 'slugify', () => {
  it( 'lowercases and replaces non-alphanumerics with hyphens', () => {
    expect( slugify( 'The Smith Family!' ) ).toBe( 'the-smith-family' );
  } );
  it( 'collapses runs of non-alphanumerics', () => {
    expect( slugify( 'foo!!!bar___baz' ) ).toBe( 'foo-bar-baz' );
  } );
  it( 'trims leading/trailing hyphens', () => {
    expect( slugify( '---hey---' ) ).toBe( 'hey' );
  } );
  it( 'returns empty string for empty input', () => {
    expect( slugify( '' ) ).toBe( '' );
  } );
} );

describe( 'isValidSlug', () => {
  it.each( [
    [ 'smiths',   true  ],
    [ 'a',        false ], // too short
    [ 'ab',       false ], // 2 chars — rule is 3-32
    [ 'abc',      true  ],
    [ 'a'.repeat( 33 ), false ],
    [ '-leading', false ],
    [ 'trailing-',false ],
    [ 'WithCAPS', false ],
    [ 'with_underscore', false ],
  ] )( '%s → %s', ( slug, valid ) => {
    expect( isValidSlug( slug ) ).toBe( valid );
  } );
} );
```

`themes/heyfam-theme/src/lib/__tests__/time.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { relativeTime } from '../time.js';

const NOW = Date.UTC( 2026, 4, 11, 12, 0, 0 ); // 2026-05-11T12:00:00Z

describe( 'relativeTime', () => {
  it( 'returns "" for falsy input', () => {
    expect( relativeTime( '', NOW ) ).toBe( '' );
    expect( relativeTime( null, NOW ) ).toBe( '' );
  } );

  it( 'returns "" for unparseable input', () => {
    expect( relativeTime( 'not a date', NOW ) ).toBe( '' );
  } );

  it( '"now" within the last minute', () => {
    expect( relativeTime( '2026-05-11T11:59:30Z', NOW ) ).toBe( 'now' );
  } );

  it( 'minutes', () => {
    expect( relativeTime( '2026-05-11T11:55:00Z', NOW ) ).toBe( '5m ago' );
  } );

  it( 'hours', () => {
    expect( relativeTime( '2026-05-11T09:00:00Z', NOW ) ).toBe( '3h ago' );
  } );

  it( 'days', () => {
    expect( relativeTime( '2026-05-09T12:00:00Z', NOW ) ).toBe( '2d ago' );
  } );

  it( 'month + day for same-year older', () => {
    expect( relativeTime( '2026-01-15T00:00:00Z', NOW ) ).toBe( 'Jan 15' );
  } );

  it( 'month + day + year for older years', () => {
    expect( relativeTime( '2024-06-20T00:00:00Z', NOW ) ).toBe( 'Jun 20, 2024' );
  } );
} );
```

`themes/heyfam-theme/src/lib/__tests__/dom.test.js`:

```js
import { describe, it, expect } from 'vitest';
import { currentPostIdFromClass } from '../dom.js';

describe( 'currentPostIdFromClass', () => {
  it( 'returns 0 when no postid- class is present', () => {
    expect( currentPostIdFromClass( 'logged-in single' ) ).toBe( 0 );
  } );
  it( 'returns the integer when present', () => {
    expect( currentPostIdFromClass( 'single postid-42 logged-in' ) ).toBe( 42 );
  } );
  it( 'is whole-word; refuses to match prefixes', () => {
    expect( currentPostIdFromClass( 'badpostid-42' ) ).toBe( 0 );
  } );
  it( 'tolerates empty input', () => {
    expect( currentPostIdFromClass( '' ) ).toBe( 0 );
  } );
} );
```

- [ ] **Step 9: Run the JS tests**

```bash
npm run test:js
```

Expected: all 4 files green, ~20 tests total.

- [ ] **Step 10: Rebuild the theme bundle to confirm imports still resolve**

```bash
npm run build:theme
```

Expected: build succeeds with no errors. (Esbuild traverses the new `../lib/*.js` imports correctly because `bundle: true` is already on.)

- [ ] **Step 11: Commit**

```bash
git add package.json package-lock.json vitest.config.mjs themes/heyfam-theme/src/lib themes/heyfam-theme/src/interactivity/{signup,login,feed-poll}.js
git commit -m "tests: extract pure helpers + vitest specs"
```

---

## Task 4: Playwright e2e for the golden path

**Files:**
- Modify: `package.json`, `.gitignore`
- Create: `playwright.config.mjs`, `tests/e2e/golden-path.spec.mjs`, `scripts/studio-url.mjs`

- [ ] **Step 1: Install Playwright + browsers**

`@playwright/test` was added in Task 3 Step 1. Now install its browsers:

```bash
npx playwright install chromium
```

(We pin to chromium-only — the goal is golden-path coverage on the most common stack, not cross-browser. Skipping Firefox/WebKit saves ~250MB and ~2 minutes.)

- [ ] **Step 2: Create `scripts/studio-url.mjs`**

```js
#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );

let json;
try {
  json = execSync( 'studio site status --path ~/Studio/heyfam --json', { encoding: 'utf8' } );
} catch ( err ) {
  console.error( 'Could not run `studio site status`. Is the Studio CLI installed and the site present?' );
  console.error( 'See ~/Studio/heyfam/STUDIO.md for setup notes.' );
  process.exit( 1 );
}

let status;
try { status = JSON.parse( json ); } catch ( err ) {
  console.error( 'studio site status did not return JSON. Update Studio?' );
  process.exit( 1 );
}

const url = status?.localUrl || status?.url || status?.urls?.local;
if ( ! url ) {
  console.error( 'No local URL in studio site status JSON. Keys present:', Object.keys( status ) );
  process.exit( 1 );
}

const envPath = resolve( root, 'tests/.env.test' );
mkdirSync( dirname( envPath ), { recursive: true } );
writeFileSync( envPath, `BASE_URL=${ url }\n` );
console.log( `wrote tests/.env.test  (BASE_URL=${ url })` );
```

- [ ] **Step 3: Create `playwright.config.mjs`**

```js
import { defineConfig, devices } from '@playwright/test';
import { config as loadEnv } from 'dotenv';
import { resolve } from 'node:path';

loadEnv( { path: resolve( process.cwd(), 'tests/.env.test' ) } );

const baseURL = process.env.BASE_URL || 'http://localhost:8881';

export default defineConfig( {
  testDir:        './tests/e2e',
  fullyParallel:  false,                     // golden-path is a single ordered story
  forbidOnly:     !! process.env.CI,
  retries:        process.env.CI ? 2 : 0,
  workers:        1,                          // SQLite + state-mutation = serial
  reporter:       process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices[ 'Desktop Chrome' ] } },
  ],
} );
```

`dotenv` isn't currently a dep — add it to `package.json` devDependencies (`"dotenv": "^16.4.0"`) and `npm install` it now.

- [ ] **Step 4: Write the golden-path spec**

`tests/e2e/golden-path.spec.mjs`:

```js
import { test, expect, request } from '@playwright/test';

/**
 * The golden path. Walks one user through signup, fam creation, posting,
 * inviting a second user, and reactions. Uses the dev-mode auth bypass
 * (code 000000) so this runs without Twilio credentials.
 *
 * State assumption: the site is fresh OR the test phone numbers below
 * are unused. Use `studio wp heyfam reset-me --phone=+15555550101` in
 * between local runs, OR run `studio wp heyfam seed-demo --reset` once
 * before running the suite. CI uses a per-job fresh Studio site.
 */

const ALICE = '+15555550101';
const BOB   = '+15555550102';
const SLUG  = `e2e${ Math.floor( Date.now() / 1000 ).toString( 36 ) }`;

test.describe.serial( 'golden path', () => {
  test( 'alice signs up and lands on her new fam', async ( { page } ) => {
    await page.goto( '/signup' );
    await page.getByPlaceholder( /\+/ ).fill( ALICE );
    await page.getByRole( 'button', { name: /send|next/i } ).click();
    await page.getByPlaceholder( /code/i ).fill( '000000' );
    await page.getByRole( 'button', { name: /next|verify/i } ).click();
    await page.getByPlaceholder( /your name/i ).fill( 'Alice' );
    await page.getByPlaceholder( /name your fam/i ).fill( 'Alice Family' );
    await page.getByPlaceholder( /url|slug/i ).fill( SLUG );
    await page.getByRole( 'button', { name: /create|finish/i } ).click();

    await expect( page ).toHaveURL( new RegExp( `/${ SLUG }/` ) );
    await expect( page.getByText( /say hey to your fam|no posts yet/i ) ).toBeVisible();
  } );

  test( 'alice posts to the fam', async ( { page } ) => {
    await page.goto( `/${ SLUG }/` );
    await page.getByPlaceholder( /what's up|share/i ).fill( 'Hello from e2e' );
    await page.getByRole( 'button', { name: /post|share/i } ).click();
    await expect( page.getByText( 'Hello from e2e' ) ).toBeVisible( { timeout: 15000 } );
  } );

  test( 'alice invites bob', async ( { page } ) => {
    await page.goto( `/${ SLUG }/` );
    await page.getByRole( 'link', { name: /invite/i } ).click();
    await page.getByPlaceholder( /phone/i ).fill( BOB );
    await page.getByRole( 'button', { name: /send invite/i } ).click();

    // Dev mode logs the invite code to debug.log. Pull the latest invite
    // for BOB from the REST helper rather than scraping the log.
    const api = await request.newContext( { baseURL: process.env.BASE_URL } );
    const r   = await api.get( `/wp-json/heyfam/v1/_dev/last-invite?phone=${ encodeURIComponent( BOB ) }` );
    expect( r.ok() ).toBeTruthy();
    const { code } = await r.json();
    expect( code ).toMatch( /^[A-Za-z0-9_-]+$/ );

    test.info().attachments.push( { name: 'invite-code', body: Buffer.from( code ), contentType: 'text/plain' } );
  } );

  test( 'bob accepts and lands in the fam', async ( { browser } ) => {
    const ctx  = await browser.newContext();
    const page = await ctx.newPage();
    // Use the API to pull the invite code for BOB.
    const api  = await ctx.request;
    const r    = await api.get( `/wp-json/heyfam/v1/_dev/last-invite?phone=${ encodeURIComponent( BOB ) }` );
    const { code } = await r.json();
    await page.goto( `/i/${ code }` );
    await page.getByPlaceholder( /\+/ ).fill( BOB );
    await page.getByRole( 'button', { name: /next|continue/i } ).click();
    await page.getByPlaceholder( /code/i ).fill( '000000' );
    await page.getByPlaceholder( /your name/i ).fill( 'Bob' );
    await page.getByRole( 'button', { name: /accept|join/i } ).click();
    await expect( page ).toHaveURL( new RegExp( `/${ SLUG }/` ) );
    await expect( page.getByText( 'Hello from e2e' ) ).toBeVisible();
  } );

  test( 'bob comments and alice reacts', async ( { browser } ) => {
    // Bob's session — re-use the same context if practical, but a fresh one
    // is fine because the cookie was set in the prior test on a different ctx.
    const bobCtx  = await browser.newContext();
    const bobPage = await bobCtx.newPage();
    // For e2e purposes, sign in via /login phone+code dev path.
    await bobPage.goto( '/login' );
    await bobPage.getByPlaceholder( /\+/ ).fill( BOB );
    await bobPage.getByRole( 'button', { name: /next|send/i } ).click();
    await bobPage.getByPlaceholder( /code/i ).fill( '000000' );
    await bobPage.getByRole( 'button', { name: /next|verify/i } ).click();
    await bobPage.goto( `/${ SLUG }/` );
    await bobPage.getByPlaceholder( /add a comment/i ).fill( 'hey alice' );
    await bobPage.getByRole( 'button', { name: /send/i } ).click();
    await expect( bobPage.getByText( 'hey alice' ) ).toBeVisible();

    // Alice's session
    const aliceCtx  = await browser.newContext();
    const alicePage = await aliceCtx.newPage();
    await alicePage.goto( '/login' );
    await alicePage.getByPlaceholder( /\+/ ).fill( ALICE );
    await alicePage.getByRole( 'button', { name: /next|send/i } ).click();
    await alicePage.getByPlaceholder( /code/i ).fill( '000000' );
    await alicePage.getByRole( 'button', { name: /next|verify/i } ).click();
    await alicePage.goto( `/${ SLUG }/` );
    await expect( alicePage.getByText( 'hey alice' ) ).toBeVisible( { timeout: 15000 } );

    // Reactions: open the picker, pick a thumb. Selectors here may need to be
    // tightened once the dev banner / reactions UI stabilizes.
    const reactButton = alicePage.getByRole( 'button', { name: /[+]/ } ).first();
    await reactButton.click();
    await alicePage.locator( 'emoji-picker' ).first().waitFor( { state: 'visible' } );
    // emoji-picker-element is a custom element; fall back to a fixed
    // emoji-press for stability.
    await alicePage.keyboard.press( 'Escape' );
    // Add a thumbs-up via the REST API for determinism.
    const heyfam = await aliceCtx.request;
    const nonce  = await alicePage.evaluate( () => window.wp?.apiFetch?.nonce || '' );
    await heyfam.post( `/wp-json/heyfam/v1/${ SLUG }/reactions`, {
      headers: { 'X-WP-Nonce': nonce, 'Content-Type': 'application/json' },
      data:    { target_type: 'post', target_id: 1, emoji: '👍' },
    } );
    // Poll-based UI refresh — wait up to 12s.
    await expect( alicePage.getByText( '👍' ) ).toBeVisible( { timeout: 12000 } );
  } );
} );
```

Notes:
- The `_dev/last-invite` route is one of the dev REST endpoints created in Task 7. If we'd rather not introduce that endpoint, the test can instead read `wp-content/debug.log` from disk via the file system after the test box runs `studio site set --debug-log` — but the REST route is much cleaner.
- The reaction step is simplified to a REST call because the emoji picker's keyboard interaction is fiddly cross-platform. The goal is to prove the round-trip works, not to test emoji-picker-element.
- This spec mutates state. The first cleanup option is wrapping the whole suite in `globalSetup` that calls `wp heyfam reset-me --phone=+15555550101 --yes && wp heyfam reset-me --phone=+15555550102 --yes`. Hold off on `globalSetup` until the CLI commands exist (Task 5/6).

- [ ] **Step 5: Add an `.env.test.example`**

`tests/.env.test.example`:

```
# Filled by `npm run studio:url`. Don't commit tests/.env.test.
BASE_URL=http://localhost:XXXXX
```

Add `tests/.env.test` to `.gitignore`.

- [ ] **Step 6: Run the e2e suite (manual smoke)**

```bash
studio site start --skip-browser --path ~/Studio/heyfam
npm run studio:url
npm run test:e2e
```

Expected: the test runner opens, walks the golden path, all assertions pass. Some selectors may need tweaking against the real templates — the test is the source of truth for the UI contract.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json playwright.config.mjs scripts/studio-url.mjs tests/e2e tests/.env.test.example .gitignore
git commit -m "e2e: playwright golden-path against local Studio"
```

---

## Task 5: WP-CLI `reset-me` command

**Files:**
- Modify: `plugins/heyfam-core/src/Cli/Bootstrap.php` (created by notif-dev — extend it here; if absent, create with the alphabetized list described below)
- Create: `plugins/heyfam-core/src/Cli/ResetMe.php`

> **Cross-plan note:** The notif-dev plan creates `Cli/Bootstrap.php` and instantiates it from `Plugin::boot()`. This plan only adds two `WP_CLI::add_command()` lines to the constructor. The legacy `Cli\Commands::register()` boot from `heyfam-core.php` described in earlier drafts of this plan is **dropped**; Bootstrap owns registration. Keep the command method bodies (`reset_me`, `seed_demo`) on `ResetMe::reset_me` / `SeedDemo::seed_demo` so the responsibilities are split between Bootstrap (registration) and the per-command class (logic + WP-CLI docblock).

- [ ] **Step 1: Create the reset implementation**

`plugins/heyfam-core/src/Cli/ResetMe.php`:

```php
<?php
namespace HeyFam\Core\Cli;

use HeyFam\Core\Auth\PhoneSignup;

/**
 * Plain-PHP implementation of "reset a user back to pre-onboarding state."
 * Importable from both the WP-CLI command and the dev REST route so the
 * dev banner does not have to shell out.
 *
 * Scope (all idempotent):
 *  - Remove `phone_verified_at` user meta.
 *  - Delete fams (subsites) where the user is the only fam_admin.
 *  - Remove the user from all remaining fams.
 *  - Optionally (when `--delete-user` is passed) delete the network user.
 */
final class ResetMe {
    /**
     * @return array{user_id:int, fams_deleted:int[], fams_left:int[], user_deleted:bool}
     */
    public static function run( int $user_id, bool $delete_user = false, bool $dry_run = false ): array {
        $user = get_user_by( 'id', $user_id );
        if ( ! $user ) {
            throw new \RuntimeException( "User $user_id not found." );
        }

        $fams_deleted = [];
        $fams_left    = [];

        $blogs = get_blogs_of_user( $user_id, /* all */ true );
        foreach ( $blogs as $b ) {
            $blog_id = (int) $b->userblog_id;
            if ( $blog_id === (int) get_network()->site_id ) continue;

            $admins = self::admin_ids_for_blog( $blog_id );
            $is_sole_admin = ( count( $admins ) === 1 && (int) $admins[0] === $user_id );

            if ( $is_sole_admin ) {
                if ( ! $dry_run ) {
                    wpmu_delete_blog( $blog_id, /* drop */ true );
                }
                $fams_deleted[] = $blog_id;
            } else {
                if ( ! $dry_run ) {
                    remove_user_from_blog( $user_id, $blog_id );
                }
                $fams_left[] = $blog_id;
            }
        }

        if ( ! $dry_run ) {
            delete_user_meta( $user_id, 'phone_verified_at' );
        }

        $user_deleted = false;
        if ( $delete_user && ! $dry_run ) {
            require_once ABSPATH . 'wp-admin/includes/ms.php';
            wpmu_delete_user( $user_id );
            $user_deleted = true;
        }

        return [
            'user_id'      => $user_id,
            'fams_deleted' => $fams_deleted,
            'fams_left'    => $fams_left,
            'user_deleted' => $user_deleted,
        ];
    }

    public static function for_phone( string $phone_e164, bool $delete_user = false, bool $dry_run = false ): array {
        $uid = PhoneSignup::find_user_by_phone( $phone_e164 );
        if ( ! $uid ) {
            throw new \RuntimeException( "No user with phone $phone_e164." );
        }
        return self::run( $uid, $delete_user, $dry_run );
    }

    private static function admin_ids_for_blog( int $blog_id ): array {
        $admins = [];
        switch_to_blog( $blog_id );
        try {
            $users = get_users( [
                'role'   => \HeyFam\Core\Fams\Roles::ADMIN_ROLE,
                'fields' => 'ID',
                'number' => 0,
            ] );
            $admins = array_map( 'intval', $users );
        } finally {
            restore_current_blog();
        }
        return $admins;
    }
}
```

Notes:
- "Sole admin" is the natural ownership signal — if Alice created the Smiths fam and is the only `fam_admin`, deleting Alice should delete the Smiths fam (otherwise we'd orphan a fam with no admins). If someone else has been promoted, the fam survives, Alice just leaves.
- `--delete-user` is opt-in. By default, the user record is kept and only `phone_verified_at` is cleared — so the user can re-onboard from scratch with the same phone number on the next page load.

- [ ] **Step 2: Add the WP-CLI command method to `ResetMe`**

Append to `plugins/heyfam-core/src/Cli/ResetMe.php` (inside the `ResetMe` class, after `for_phone()` and `admin_ids_for_blog()`):

```php
    /**
     * ## OPTIONS
     *
     * [--user=<id>]
     * : Target user id. Default: the user inferred from --phone, then the current user, then bail.
     *
     * [--phone=<e164>]
     * : Lookup the user by phone (E.164, e.g. +15555550100).
     *
     * [--delete-user]
     * : Also delete the WordPress network user. By default the user record is kept and only `phone_verified_at` is cleared.
     *
     * [--dry-run]
     * : Show what would change without writing anything.
     *
     * [--yes]
     * : Skip the confirmation prompt.
     *
     * ## EXAMPLES
     *
     *     # Reset by phone, keep the user record (default).
     *     wp heyfam reset-me --phone=+15555550100 --yes
     *
     *     # Hard reset — delete user too.
     *     wp heyfam reset-me --phone=+15555550100 --delete-user --yes
     *
     *     # See what would happen.
     *     wp heyfam reset-me --user=42 --dry-run
     */
    public function __invoke( array $args, array $assoc ): void {
        $phone   = $assoc['phone'] ?? null;
        $uid_arg = isset( $assoc['user'] ) ? (int) $assoc['user'] : 0;
        $delete  = isset( $assoc['delete-user'] );
        $dry     = isset( $assoc['dry-run'] );
        $yes     = isset( $assoc['yes'] );

        if ( ! $uid_arg && ! $phone ) {
            \WP_CLI::error( 'Pass --user=<id> or --phone=<e164>.' );
        }

        $target_uid = $uid_arg ?: \HeyFam\Core\Auth\PhoneSignup::find_user_by_phone( (string) $phone );
        if ( ! $target_uid ) {
            \WP_CLI::error( 'Could not find target user.' );
        }

        $user = get_user_by( 'id', $target_uid );
        $label = sprintf( '#%d (%s, phone=%s)',
            $target_uid,
            $user ? $user->display_name : '?',
            get_user_meta( $target_uid, 'phone_e164', true ) ?: '?'
        );

        $verb = $delete ? 'DELETE user and remove all their fams' : 'reset phone-verification and prune fams';

        if ( ! $yes && ! $dry ) {
            \WP_CLI::confirm( "$verb for $label?" );
        }

        try {
            $result = self::run( $target_uid, $delete, $dry );
        } catch ( \Throwable $e ) {
            \WP_CLI::error( $e->getMessage() );
        }

        \WP_CLI::success( sprintf(
            '%s%s — fams deleted: [%s]; fams left: [%s]; user deleted: %s',
            $dry ? 'DRY-RUN: ' : '',
            $label,
            implode( ',', $result['fams_deleted'] ),
            implode( ',', $result['fams_left'] ),
            $result['user_deleted'] ? 'yes' : 'no'
        ) );
    }
```

Note: `ResetMe` keeps the same purpose (logic helper) but gains an `__invoke()` that WP-CLI calls when the class is registered as a command. The static `run()` / `for_phone()` methods remain importable from REST.

- [ ] **Step 3: Wire registration through Bootstrap.php (created by notif-dev)**

Open `plugins/heyfam-core/src/Cli/Bootstrap.php` (created by the notif-dev plan; if it does not exist yet because the plans are landing in parallel, create it now and notif-dev's later patch will add its own line).

**Apply this Edit:** find the `WP_CLI::add_command( 'heyfam send-test-notification', … )` line. Insert these two lines alphabetized into the registration list inside the constructor:

```diff
 final class Bootstrap {
     public function __construct() {
         if ( ! defined( 'WP_CLI' ) || ! \WP_CLI ) return;
+        \WP_CLI::add_command( 'heyfam reset-me',                ResetMe::class );
+        \WP_CLI::add_command( 'heyfam seed-demo',               SeedDemo::class );  // SeedDemo class added in Task 6
         \WP_CLI::add_command( 'heyfam send-test-notification', SendTestNotificationCommand::class );
     }
 }
```

If notif-dev has not landed yet (Bootstrap.php does not exist), create `plugins/heyfam-core/src/Cli/Bootstrap.php`:

```php
<?php
namespace HeyFam\Core\Cli;

/**
 * Single registration point for all `wp heyfam …` commands. Notif-dev plan
 * adds `send-test-notification`; test-infra adds `reset-me` and `seed-demo`.
 * Keep the list alphabetized so merges are clean.
 */
final class Bootstrap {
    public function __construct() {
        if ( ! defined( 'WP_CLI' ) || ! \WP_CLI ) return;
        \WP_CLI::add_command( 'heyfam reset-me',  ResetMe::class );
        \WP_CLI::add_command( 'heyfam seed-demo', SeedDemo::class );  // implementation in Task 6
    }
}
```

Then instantiate it from `Plugin::boot()`:

```php
new \HeyFam\Core\Cli\Bootstrap();
```

(WP-CLI loads plugins synchronously before `plugins_loaded` fires, so booting from `Plugin::boot()` is correct for command-context invocations. The notif-dev plan already does this for `send-test-notification`.)

- [ ] **Step 4: Test the command**

```bash
# Create a junk user manually, then reset it.
studio wp user create dummy dummy@example.com --user_pass=x --role=subscriber
studio wp eval 'update_user_meta( get_user_by("login","dummy")->ID, "phone_e164", "+15555550199" );'
studio wp eval 'update_user_meta( get_user_by("login","dummy")->ID, "phone_verified_at", date("c") );'
studio wp heyfam reset-me --phone=+15555550199 --yes --dry-run
# Inspect output, then for real:
studio wp heyfam reset-me --phone=+15555550199 --yes
studio wp eval 'echo get_user_meta( get_user_by("login","dummy")->ID, "phone_verified_at", true );'
# Expected: empty.
```

- [ ] **Step 5: Commit**

```bash
git add plugins/heyfam-core/src/Cli plugins/heyfam-core/src/Plugin.php
git commit -m "cli: wp heyfam reset-me — purge phone-verified state and sole-admin fams"
```

---

## Task 6: WP-CLI `seed-demo` command

**Files:**
- Create: `plugins/heyfam-core/src/Cli/SeedDemo.php` (logic + WP-CLI `__invoke`)
- Bootstrap.php already registers `SeedDemo::class` via Task 5 — no edit needed here

- [ ] **Step 1: Create the seeder**

`plugins/heyfam-core/src/Cli/SeedDemo.php`:

```php
<?php
namespace HeyFam\Core\Cli;

use HeyFam\Core\Fams\FamCreation;
use HeyFam\Core\Fams\Membership;
use HeyFam\Core\Fams\Roles;
use HeyFam\Core\Fams\Slugs;

/**
 * Spin up a complete demo fam from scratch: admin user + N members,
 * M posts, a few comments and reactions. Useful for design work and
 * the e2e baseline.
 */
final class SeedDemo {
    /**
     * @return array{blog_id:int, fam_url:string, admin_id:int, member_ids:int[], post_ids:int[]}
     */
    public static function run( array $opts ): array {
        $name      = $opts['name']    ?? 'Demo Fam';
        $slug      = $opts['slug']    ?? Slugs::suggest( $name );
        $members   = (int) ( $opts['members'] ?? 3 );
        $posts     = (int) ( $opts['posts']   ?? 5 );

        // 1. Admin user — uses a clearly-fake phone.
        $admin_id = self::ensure_user( '+15550000001', 'Demo Admin' );

        // 2. Fam.
        $blog_id = FamCreation::create( $admin_id, $name, $slug );
        if ( is_wp_error( $blog_id ) ) {
            throw new \RuntimeException( 'Fam create failed: ' . $blog_id->get_error_message() );
        }

        // 3. Members.
        $member_ids = [];
        $first_names = [ 'Riley','Alex','Jordan','Sky','Robin','Sam','Casey','Drew','Quinn','Avery' ];
        for ( $i = 0; $i < $members; $i++ ) {
            $name_i  = $first_names[ $i % count( $first_names ) ] . ' Demo';
            $phone_i = '+1555000' . str_pad( (string) ( 1000 + $i + 1 ), 4, '0', STR_PAD_LEFT );
            $uid     = self::ensure_user( $phone_i, $name_i );
            $ok = Membership::add( $uid, $blog_id, Roles::MEMBER_ROLE );
            if ( is_wp_error( $ok ) ) continue;
            $member_ids[] = $uid;
        }

        // 4. Posts + comments + reactions in the new blog's context.
        $post_ids = [];
        switch_to_blog( $blog_id );
        try {
            $authors = array_merge( [ $admin_id ], $member_ids );
            $bodies  = [
                'Hey fam — first post! 👋',
                'Anyone up for dinner this weekend?',
                'Saw this and thought of grandma.',
                'New baby photos in the family chat 💛',
                'Reminder: Sunday brunch @ 11.',
                'Trip planning — who is in?',
                'A funny thing happened on the way to soccer practice...',
            ];
            for ( $i = 0; $i < $posts; $i++ ) {
                $author = $authors[ $i % count( $authors ) ];
                $post_id = wp_insert_post( [
                    'post_type'   => 'post',
                    'post_status' => 'publish',
                    'post_author' => $author,
                    'post_title'  => '', // wall posts have no title
                    'post_content' => $bodies[ $i % count( $bodies ) ],
                    'post_date_gmt' => gmdate( 'Y-m-d H:i:s', time() - ( $posts - $i ) * 1800 ),
                ] );
                if ( $post_id && ! is_wp_error( $post_id ) ) {
                    $post_ids[] = $post_id;

                    // A couple of comments per post.
                    $commenters = array_filter( $authors, fn( $a ) => $a !== $author );
                    foreach ( array_slice( $commenters, 0, 2 ) as $c_uid ) {
                        $c_user = get_userdata( $c_uid );
                        wp_insert_comment( [
                            'comment_post_ID' => $post_id,
                            'comment_content' => 'Love it.',
                            'comment_author'  => $c_user->display_name,
                            'comment_author_email' => $c_user->user_email ?: 'no-reply@heyfam.blog',
                            'user_id'         => $c_uid,
                            'comment_approved' => 1,
                        ] );
                    }

                    // A reaction or two.
                    foreach ( array_slice( $commenters, 0, 2 ) as $r_uid ) {
                        \HeyFam\Core\Reactions\Manager::add( 'post', $post_id, $r_uid, '❤️' );
                    }
                }
            }
        } finally {
            restore_current_blog();
        }

        $url = trailingslashit( get_site_url( $blog_id ) );

        return [
            'blog_id'    => (int) $blog_id,
            'fam_url'    => $url,
            'admin_id'   => $admin_id,
            'member_ids' => $member_ids,
            'post_ids'   => $post_ids,
        ];
    }

    private static function ensure_user( string $phone, string $display_name ): int {
        $existing = \HeyFam\Core\Auth\PhoneSignup::find_user_by_phone( $phone );
        if ( $existing ) return $existing;
        $uid = wp_insert_user( [
            'user_login'   => 'p' . preg_replace( '/\D/', '', $phone ),
            'user_pass'    => wp_generate_password( 32, true, true ),
            'display_name' => $display_name,
            'nickname'     => $display_name,
            'user_email'   => 'demo-' . substr( md5( $phone ), 0, 8 ) . '@heyfam.invalid',
        ] );
        if ( is_wp_error( $uid ) ) {
            throw new \RuntimeException( 'Could not create demo user: ' . $uid->get_error_message() );
        }
        update_user_meta( $uid, 'phone_e164',        $phone );
        update_user_meta( $uid, 'phone_verified_at', gmdate( 'c' ) );
        return (int) $uid;
    }
}
```

- [ ] **Step 2: Add the WP-CLI command method to `SeedDemo`**

Append to `plugins/heyfam-core/src/Cli/SeedDemo.php` (inside the `SeedDemo` class, after `ensure_user()`):

```php
    /**
     * ## OPTIONS
     *
     * [--name=<name>]
     * : Display name for the fam. Default: "Demo Fam".
     *
     * [--slug=<slug>]
     * : URL slug. Default: auto-derived from name.
     *
     * [--members=<n>]
     * : Number of demo members (in addition to the admin). Default: 3.
     *
     * [--posts=<m>]
     * : Number of demo posts. Default: 5.
     *
     * [--reset]
     * : Delete any existing fam at the same slug before creating.
     *
     * ## EXAMPLES
     *
     *     wp heyfam seed-demo --name="The Smiths" --slug=smiths --members=4 --posts=6
     *     wp heyfam seed-demo --reset
     */
    public function __invoke( array $args, array $assoc ): void {
        $slug = $assoc['slug'] ?? \HeyFam\Core\Fams\Slugs::suggest( $assoc['name'] ?? 'Demo Fam' );

        if ( isset( $assoc['reset'] ) ) {
            $main   = get_network()->site_id;
            $domain = get_blog_details( $main )->domain;
            $path   = rtrim( get_blog_details( $main )->path, '/' ) . "/$slug/";
            $existing = (int) domain_exists( $domain, $path );
            if ( $existing ) {
                \WP_CLI::log( "Removing existing fam #$existing at /$slug/" );
                wpmu_delete_blog( $existing, true );
            }
        }

        try {
            $result = self::run( $assoc );
        } catch ( \Throwable $e ) {
            \WP_CLI::error( $e->getMessage() );
        }

        \WP_CLI::success( sprintf(
            'Seeded fam #%d at %s (admin #%d, %d members, %d posts).',
            $result['blog_id'],
            $result['fam_url'],
            $result['admin_id'],
            count( $result['member_ids'] ),
            count( $result['post_ids'] )
        ) );
        \WP_CLI::log( "Login URL (admin): {$result['fam_url']}wp-login.php" );
        \WP_CLI::log( "Demo admin phone:  +15550000001 (dev-mode code: 000000)" );
    }
```

Bootstrap.php already wires `SeedDemo::class` from Task 5 — no further registration changes needed.

- [ ] **Step 3: Smoke test**

```bash
studio wp heyfam seed-demo --name="Smoke Test" --slug=smoke --members=2 --posts=3
```

Open the printed `fam_url` in a browser — should show 3 posts with comments + ❤️ reactions, in reverse-chronological order, no manual setup.

```bash
studio wp heyfam seed-demo --reset --name="Smoke Test" --slug=smoke
```

Should print "Removing existing fam #X at /smoke/" then recreate. Idempotent.

- [ ] **Step 4: Commit**

```bash
git add plugins/heyfam-core/src/Cli/SeedDemo.php plugins/heyfam-core/src/Cli/Bootstrap.php
git commit -m "cli: wp heyfam seed-demo — create a demo fam end-to-end"
```

---

## Task 7: Dev banner

**Files:**
- Modify: `plugins/heyfam-core/src/Plugin.php`, `themes/heyfam-theme/functions.php`, `themes/heyfam-theme/src/interactivity/index.js`, `themes/heyfam-theme/parts/header.html`
- Create: `plugins/heyfam-core/src/REST/DevRoutes.php`, `themes/heyfam-theme/src/interactivity/dev-banner.js`, `themes/heyfam-theme/parts/dev-banner.html`

- [ ] **Step 1: Create the dev REST routes**

`plugins/heyfam-core/src/REST/DevRoutes.php`:

```php
<?php
namespace HeyFam\Core\REST;

/**
 * Dev-only REST routes. Registered only when WP_DEBUG is true.
 *
 *   POST /heyfam/v1/_dev/reset-me           — calls Cli\ResetMe::run for current user
 *   POST /heyfam/v1/_dev/seed-demo          — calls Cli\SeedDemo::run
 *   GET  /heyfam/v1/_dev/last-invite?phone= — returns last invite code for that phone (used in e2e)
 *
 * All endpoints require `manage_options` (network admin) OR `current_user_id===target`.
 * Anti-CSRF: standard WP REST nonce required.
 */
final class DevRoutes {
    public static function register(): void {
        if ( ! ( defined( 'WP_DEBUG' ) && WP_DEBUG ) ) return;
        add_action( 'rest_api_init', [ self::class, 'routes' ] );
    }

    public static function routes(): void {
        register_rest_route( 'heyfam/v1', '/_dev/reset-me', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => is_user_logged_in(),
            'args'                => [
                'delete_user' => [ 'required' => false, 'type' => 'boolean', 'default' => false ],
            ],
            'callback'            => [ self::class, 'reset_me' ],
        ] );

        register_rest_route( 'heyfam/v1', '/_dev/seed-demo', [
            'methods'             => 'POST',
            'permission_callback' => static fn() => current_user_can( 'manage_network' ) || current_user_can( 'manage_options' ),
            'args'                => [
                'name'    => [ 'required' => false, 'type' => 'string', 'default' => 'Demo Fam' ],
                'slug'    => [ 'required' => false, 'type' => 'string' ],
                'members' => [ 'required' => false, 'type' => 'integer', 'default' => 3 ],
                'posts'   => [ 'required' => false, 'type' => 'integer', 'default' => 5 ],
                'reset'   => [ 'required' => false, 'type' => 'boolean', 'default' => false ],
            ],
            'callback'            => [ self::class, 'seed_demo' ],
        ] );

        register_rest_route( 'heyfam/v1', '/_dev/last-invite', [
            'methods'             => 'GET',
            'permission_callback' => '__return_true', // dev-only, gated by WP_DEBUG above
            'args'                => [ 'phone' => [ 'required' => true, 'type' => 'string' ] ],
            'callback'            => [ self::class, 'last_invite' ],
        ] );
    }

    public static function reset_me( \WP_REST_Request $req ): \WP_REST_Response {
        $delete = (bool) $req->get_param( 'delete_user' );
        try {
            $r = \HeyFam\Core\Cli\ResetMe::run( get_current_user_id(), $delete, false );
        } catch ( \Throwable $e ) {
            return new \WP_REST_Response( [ 'error' => $e->getMessage() ], 500 );
        }
        return new \WP_REST_Response( [ 'ok' => true, 'result' => $r ], 200 );
    }

    public static function seed_demo( \WP_REST_Request $req ): \WP_REST_Response {
        $opts = $req->get_params();
        if ( ! empty( $opts['reset'] ) ) {
            // Reuse the CLI's reset-by-slug branch.
            \WP_CLI::class; // keep psalm happy
            $slug = $opts['slug'] ?? \HeyFam\Core\Fams\Slugs::suggest( $opts['name'] ?? 'Demo Fam' );
            $main   = get_network()->site_id;
            $domain = get_blog_details( $main )->domain;
            $path   = rtrim( get_blog_details( $main )->path, '/' ) . "/$slug/";
            $existing = (int) domain_exists( $domain, $path );
            if ( $existing ) wpmu_delete_blog( $existing, true );
        }
        try {
            $r = \HeyFam\Core\Cli\SeedDemo::run( $opts );
        } catch ( \Throwable $e ) {
            return new \WP_REST_Response( [ 'error' => $e->getMessage() ], 500 );
        }
        return new \WP_REST_Response( [ 'ok' => true, 'result' => $r ], 200 );
    }

    public static function last_invite( \WP_REST_Request $req ): \WP_REST_Response {
        $phone = (string) $req->get_param( 'phone' );
        global $wpdb;
        // Sweep all blogs — invites live in per-blog tables and a dev caller may
        // not know which fam issued the invite.
        $sites = get_sites( [ 'number' => 0 ] );
        $latest = null;
        foreach ( $sites as $site ) {
            $table = \HeyFam\Core\Fams\Invites::table_name( (int) $site->blog_id );
            $row = $wpdb->get_row( $wpdb->prepare(
                "SELECT * FROM $table WHERE phone_e164 = %s ORDER BY id DESC LIMIT 1",
                $phone
            ), ARRAY_A );
            if ( $row && ( ! $latest || $row['id'] > $latest['id'] ) ) {
                $latest = $row;
            }
        }
        if ( ! $latest ) {
            return new \WP_REST_Response( [ 'error' => 'not_found' ], 404 );
        }
        // For the e2e/dev caller, we need the PLAIN code. Issuance discards it.
        // Workaround: when WP_DEBUG and the env var DEV_LOG_INVITES=1 are both
        // set, Invites::issue should error_log( $code ) AND tee it into a
        // per-phone option. Implement that side in Step 2 below.
        $opt_key = '_heyfam_dev_invite_' . md5( $phone );
        $code    = get_site_option( $opt_key );
        return new \WP_REST_Response( [
            'code'       => $code,
            'phone_e164' => $latest['phone_e164'],
            'expires_at' => $latest['expires_at'],
        ], 200 );
    }
}
```

- [ ] **Step 2: Tee plain invite codes to a site option when in dev mode**

In `plugins/heyfam-core/src/Fams/Invites.php`, edit `issue()` to add (just before `return $code;`):

```php
if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
    update_site_option( '_heyfam_dev_invite_' . md5( $phone_e164 ), $code );
}
```

This lets the e2e test (and the dev banner) retrieve a usable invite without scraping debug.log. Production deploys don't define `WP_DEBUG`, so the secret never leaks.

- [ ] **Step 3: Register the dev routes from the plugin bootstrap**

Edit `plugins/heyfam-core/src/Plugin.php` `boot()`, just after the existing `new \HeyFam\Core\REST\Routes();` line:

```php
\HeyFam\Core\REST\DevRoutes::register();
```

- [ ] **Step 4: Create the IAPI store**

`themes/heyfam-theme/src/interactivity/dev-banner.js`:

```js
import { store } from '@wordpress/interactivity';

store( 'heyfam/dev', {
  state: {
    open:       false,
    busy:       false,
    message:    '',
  },
  actions: {
    toggle() {
      store( 'heyfam/dev' ).state.open = ! store( 'heyfam/dev' ).state.open;
    },
    *resetMe() {
      const s      = store( 'heyfam/dev' ).state;
      const heyfam = store( 'heyfam' ).state;
      if ( ! window.confirm( 'Reset your fams and unverify your phone? You\'ll re-onboard on next page load.' ) ) return;
      s.busy = true;
      try {
        const r = yield fetch( `${heyfam.apiBase}/_dev/reset-me`, {
          method:      'POST',
          credentials: 'include',
          headers:     { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body:        JSON.stringify( { delete_user: false } ),
        } );
        if ( ! r.ok ) throw new Error( yield r.text() );
        s.message = 'Reset done. Reloading…';
        setTimeout( () => location.assign( '/' ), 500 );
      } catch ( err ) {
        s.message = `Reset failed: ${err.message}`;
      } finally {
        s.busy = false;
      }
    },
    *seedDemo() {
      const s      = store( 'heyfam/dev' ).state;
      const heyfam = store( 'heyfam' ).state;
      s.busy = true;
      try {
        const r = yield fetch( `${heyfam.apiBase}/_dev/seed-demo`, {
          method:      'POST',
          credentials: 'include',
          headers:     { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body:        JSON.stringify( { reset: true } ),
        } );
        const j = yield r.json();
        if ( ! r.ok ) throw new Error( j?.error || 'seed failed' );
        s.message = `Seeded → ${j.result.fam_url}`;
        setTimeout( () => location.assign( j.result.fam_url ), 800 );
      } catch ( err ) {
        s.message = `Seed failed: ${err.message}`;
      } finally {
        s.busy = false;
      }
    },
  },
} );
```

- [ ] **Step 5: Add the import**

Edit `themes/heyfam-theme/src/interactivity/index.js`:

```js
import './router.js';
import './composer.js';
import './reactions.js';
import './comments.js';
import './feed-poll.js';
import './fam-picker.js';
import './push-subscribe.js';
import './signup.js';
import './login.js';
import './invite.js';
import './account.js';
import './dev-banner.js';
```

- [ ] **Step 6: Create the banner part**

`themes/heyfam-theme/parts/dev-banner.html`:

```html
<!-- wp:html -->
<aside class="heyfam-dev"
       data-wp-interactive="heyfam/dev"
       data-wp-class--is-open="state.open">
  <button class="heyfam-dev__toggle" data-wp-on--click="actions.toggle">dev</button>
  <div class="heyfam-dev__panel" data-wp-class--is-hidden="!state.open">
    <h4>Dev shortcuts</h4>
    <p class="heyfam-dev__msg" data-wp-text="state.message"></p>
    <ul>
      <li><button data-wp-on--click="actions.resetMe" data-wp-bind--disabled="state.busy">Reset me</button></li>
      <li><button data-wp-on--click="actions.seedDemo" data-wp-bind--disabled="state.busy">Seed demo fam</button></li>
      <li><a href="/wp-login.php?action=logout">Log out</a></li>
      <li><a href="/wp-admin/">Open wp-admin</a></li>
    </ul>
  </div>
</aside>
<!-- /wp:html -->
```

- [ ] **Step 7: Render the banner conditionally**

Edit `themes/heyfam-theme/parts/header.html` so the dev banner mounts site-wide. Insert just before the closing `</header>`:

```html
<!-- wp:template-part {"slug":"dev-banner"} /-->
```

Edit `themes/heyfam-theme/functions.php`: at the bottom of the `wp_enqueue_scripts` callback's last `wp_interactivity_state` block (where `devMode` is already set), add the field:

```php
'devBanner' => ( defined( 'WP_DEBUG' ) && WP_DEBUG && is_user_logged_in() ),
```

(The banner template renders unconditionally — the simplest gate is to skip rendering it server-side when `! devBanner`. Add this filter in `functions.php`:)

```php
add_filter( 'render_block_core/template-part', static function ( $content, $block ) {
    $slug = $block['attrs']['slug'] ?? '';
    if ( $slug !== 'dev-banner' ) return $content;
    if ( ! ( defined( 'WP_DEBUG' ) && WP_DEBUG && is_user_logged_in() ) ) return '';
    return $content;
}, 10, 2 );
```

- [ ] **Step 8: Add styles**

If the **design-system** plan has landed first (it should — Phase B precedes Phase C, but Phase A of test-infra can run alongside it), append to `themes/heyfam-theme/src/styles/components.css`. If design-system has not yet landed, append to `themes/heyfam-theme/src/styles/main.css` and the design-system pass will migrate these rules into `components.css` when it splits the stylesheet.

```css
.heyfam-dev {
  position: fixed; right: 12px; bottom: 12px; z-index: 9999;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.heyfam-dev__toggle {
  background: #111; color: #fff; border: 0; border-radius: 999px;
  padding: 6px 10px; font-size: 11px; cursor: pointer; opacity: 0.6;
}
.heyfam-dev__toggle:hover { opacity: 1; }
.heyfam-dev__panel {
  display: none; position: absolute; bottom: 36px; right: 0;
  width: 220px; padding: 12px 14px;
  background: #fffdf6; border: 1px solid #d9d2c4; border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
}
.heyfam-dev__panel.is-open,
.heyfam-dev.is-open .heyfam-dev__panel { display: block; }
.heyfam-dev__panel h4 { margin: 0 0 8px; font-size: 12px; }
.heyfam-dev__msg { font-size: 11px; color: #6e655c; min-height: 1em; }
.heyfam-dev ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 4px; }
.heyfam-dev button, .heyfam-dev a {
  display: block; width: 100%; text-align: left;
  background: none; border: 0; padding: 4px 0; color: #1f1d1a;
  font: inherit; text-decoration: none; cursor: pointer;
}
.heyfam-dev button:hover, .heyfam-dev a:hover { color: #d97706; }
```

- [ ] **Step 9: Manual smoke**

```bash
studio wp config set WP_DEBUG true --raw
npm run build:theme
studio site stop && studio site start --skip-browser
```

Sign in. A small "dev" pill should appear bottom-right on every page. Clicking it opens the panel. Click "Reset me" → confirm → page reloads, signup screen shows. Click "Seed demo fam" → navigates to the new fam URL with seeded posts.

- [ ] **Step 10: Commit**

```bash
git add plugins/heyfam-core/src/REST/DevRoutes.php plugins/heyfam-core/src/Plugin.php plugins/heyfam-core/src/Fams/Invites.php themes/heyfam-theme/src/interactivity/dev-banner.js themes/heyfam-theme/src/interactivity/index.js themes/heyfam-theme/parts/dev-banner.html themes/heyfam-theme/parts/header.html themes/heyfam-theme/functions.php themes/heyfam-theme/src/styles/components.css
git commit -m "dev: in-browser banner — reset me, seed demo, log out, open wp-admin"
```

---

## Task 8: Developer docs

**Files:**
- Create: `docs/dev/testing.md`, `scripts/setup-tests.sh`

- [ ] **Step 1: Write `docs/dev/testing.md`**

```markdown
# HeyFam Testing

HeyFam has four test surfaces. All of them run locally against the same Studio
site you use for development — no separate Docker.

## One-time setup

1. Install Studio and bring up the heyfam site once. See `~/Studio/heyfam/STUDIO.md`.
2. From the repo root:

   ```bash
   composer install
   npm install
   npx playwright install chromium
   ```

3. Generate `tests/.env.test` from the running Studio site:

   ```bash
   studio site start --skip-browser --path ~/Studio/heyfam
   npm run studio:url
   ```

4. (Optional) Set `WP_DEBUG` so the dev banner appears in-browser:

   ```bash
   studio wp config set WP_DEBUG true --raw
   ```

## Running tests

| Surface           | Command              | What it covers                              |
|-------------------|----------------------|---------------------------------------------|
| PHP unit          | `composer test`       | Pure logic (Invites, FanOut prefs)          |
| PHP integration   | `composer test`       | Comments parent validation, Reactions table |
| PHP multisite     | `composer test:ms`    | REST routes happy path, FanOut scheduling   |
| JS unit           | `npm run test:js`     | `lib/{phone,slug,time,dom}.js` helpers      |
| E2E (chromium)    | `npm run test:e2e`    | Signup → fam → post → invite → join → comment → react |

`composer test` runs the WordPress test framework in-process against an
SQLite database (`plugins/heyfam-core/tests/heyfam_test.sqlite`), which is
deleted and recreated on every run.

## CLI helpers

```bash
# Reset your local user back to pre-onboarding (keeps the user record).
studio wp heyfam reset-me --phone=+15555550100 --yes

# Hard reset — delete the network user too.
studio wp heyfam reset-me --phone=+15555550100 --delete-user --yes

# Create a demo fam.
studio wp heyfam seed-demo --name="The Demos" --slug=demos --members=4 --posts=6

# Re-create an existing demo fam from scratch.
studio wp heyfam seed-demo --reset --name="The Demos" --slug=demos
```

## Dev banner

With `WP_DEBUG=true` and signed in, a small "dev" pill appears in the bottom-right
on every page. Clicking it exposes:

- **Reset me** — same as `wp heyfam reset-me` against your own user.
- **Seed demo fam** — creates `/demo-fam/`, redirects you there.
- **Log out** — standard WordPress logout.
- **Open wp-admin** — `/wp-admin/`.

The banner posts to `/wp-json/heyfam/v1/_dev/*` routes that are only registered
when `WP_DEBUG` is true. They never ship to production.

## CI notes

Tasks 1-3 (PHPUnit, JS unit) run cleanly in CI without Studio. Tasks 4 (e2e)
requires a running WordPress; on CI we recommend `wp-env` or wp-cli `core
multisite-install` to a temp directory. Until CI is wired, the e2e suite is
expected to be run by a developer pre-merge.
```

- [ ] **Step 2: Write `scripts/setup-tests.sh`**

```bash
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

echo "Installing PHP deps…"
composer install --no-interaction

echo "Installing Node deps…"
npm install

echo "Installing Playwright Chromium…"
npx playwright install chromium

if [ ! -f tests/.env.test ] && command -v studio >/dev/null 2>&1; then
  echo "Detecting Studio site URL…"
  npm run studio:url || true
fi

echo
echo "Done. Try:"
echo "  composer test            # PHP"
echo "  npm run test:js          # JS"
echo "  npm run test:e2e         # E2E (Studio must be running)"
```

Make it executable: `chmod +x scripts/setup-tests.sh` (the implementer needs to run this — don't include the `chmod` in the plan as a separate step, just have them do it).

- [ ] **Step 3: Update the repo README** (optional)

If a top-level `README.md` exists, add a "Testing" section pointing at `docs/dev/testing.md`. Check first; the existing repo may not have one.

- [ ] **Step 4: Commit**

```bash
git add docs/dev/testing.md scripts/setup-tests.sh
git commit -m "docs: testing & dev-helpers setup notes"
```

---

## Post-implementation smoke checklist

After all 8 tasks land, run through these on a fresh Studio site:

1. `composer install && npm install && npx playwright install chromium && npm run studio:url` — clean setup.
2. `composer test` — green.
3. `composer test:ms` — green.
4. `npm run test:js` — green.
5. `npm run test:e2e` — green.
6. `studio wp heyfam reset-me --phone=+15555550100 --dry-run` — describes what would change, writes nothing.
7. `studio wp heyfam seed-demo --reset --name="Smoke" --slug=smoke` — exits 0, prints fam URL, that URL has posts.
8. Visit `/smoke/` — dev banner appears bottom-right (assuming WP_DEBUG=true).
9. Click "Reset me" in the banner → confirm → page reloads to signup. (Bob/Alice's e2e users still exist; only the currently-signed-in user is reset.)
10. Click "Seed demo fam" → navigates to a new `/demo-fam/`.

---

## Open questions resolved

**Where to host the WP test env.** Verdict: in-process, via `wp-phpunit/wp-phpunit` (core test framework as a Composer dep) + `roots/wordpress` (core source as a Composer dep) + `aaemnnosttv/wp-sqlite-db` (SQLite drop-in). No separate `wp-env`, no Docker. Tests run in PHP process exactly the way they would under Studio's SQLite. Trade-off: tests cannot use MySQL-specific features (we don't), and one extra ~50 MB drop into `vendor/wordpress/` (acceptable; gitignored). The user runs `composer test`. No new local environment to maintain.

**Why not `bin/install-wp-tests.sh`.** The classic scaffold script assumes MySQL and clones WordPress core into `/tmp`. Doesn't match Studio's SQLite backend, and `/tmp` paths bite on macOS. `wp-phpunit` solves both.

**Vitest vs Jest vs Bun vs node:test.** Verdict: **Vitest**. Native ESM (matches our esbuild output), watch mode, snapshots, smallest practical install for our shape (no Bun runtime dependency, no Jest+Babel transform). `node:test` would work for the pure helpers but lacks watch mode and snapshot — not worth the negligible savings.

**E2E framework.** Verdict: **Playwright**. Chromium-only to keep install footprint minimal. `baseURL` comes from `tests/.env.test`, populated by `npm run studio:url` which parses `studio site status --json`. No `webServer` block in `playwright.config.mjs` — Studio is expected to be running separately (the e2e suite assumes a live site, not a one-shot installer).

**Where helpers live.** Verdict: a new `themes/heyfam-theme/src/lib/` directory holds the pure functions extracted from IAPI files. IAPI modules import from `lib/`; tests import from `lib/`; both stay green. `lib/` has no DOM dependencies — that lets Vitest run in `environment: 'node'` and skip jsdom entirely.

**`reset-me` semantics.** Verdict: by default, **non-destructive to the user record** — only `phone_verified_at` is cleared and the user leaves their fams (or the fam is deleted if they're the sole admin). `--delete-user` is opt-in. `--yes` required to skip the prompt for non-dry runs. `--dry-run` describes the plan and exits 0. Scoping by `--user=<id>` or `--phone=<e164>` (no implicit "current user" to avoid foot-guns when run via Studio in a logged-out context).

**`seed-demo` semantics.** Verdict: idempotent with `--reset` (deletes the existing fam at the same slug first); without `--reset`, the second invocation fails on the unique slug check. Default 1 admin + 3 members + 5 posts + 2 comments + 2 reactions per post, all on clearly-fake `+1555000XXXX` phone numbers. The admin's dev-mode OTP is always `000000` (because `TWILIO_ACCOUNT_SID` is unset locally).

**Dev banner trigger.** Verdict: **`WP_DEBUG` is the on/off switch**. Anchored to that single flag instead of an additional env var because: (a) every WP dev knows what `WP_DEBUG` means, (b) Studio sets it via `studio wp config set WP_DEBUG true --raw`, (c) production builds never have `WP_DEBUG` true. The IAPI store is bundled unconditionally (small) but the template part only renders server-side when `WP_DEBUG` is on, so anonymous prod visitors see nothing.

**Dev banner architecture.** Verdict: **IAPI island, not a separate React app**. Matches every other client interaction in the theme; reuses the existing wp-rest nonce and `state.heyfam` plumbing. Buttons fire `fetch()` to `/_dev/*` REST routes that wrap the shared `Cli\ResetMe::run` / `Cli\SeedDemo::run` code paths — designers never need to open a terminal, but the CLI and the banner agree on behavior because they share one implementation.

**E2E invite-code retrieval.** Verdict: a small `GET /_dev/last-invite?phone=` REST endpoint. The clean alternative — reading `debug.log` from disk — is brittle on Studio (PHP-WASM piping varies) and pulls e2e away from being a pure HTTP test. The endpoint is dev-only and gated by `WP_DEBUG`. To make the plain code retrievable at all, `Invites::issue()` tees it to a transient-like site option keyed by phone hash, behind the same `WP_DEBUG` gate.

---

## Not in this plan (deferred)

- CI configuration (GitHub Actions, etc). The orchestrator notes "regressions to fail loudly" — that's covered locally; wiring CI is a separate, larger task (caching strategies, action selection, secret management).
- Cross-browser Playwright matrix. Single-chromium for v1.
- Performance/load tests. Not in scope.
- JS coverage reporting. Vitest has `--coverage` built in but we don't wire it now; revisit when CI lands.
- A test for the dev-mode notification flow (mailpit etc.) — owned by the **Notification Dev & Test Setup** workstream (Section 4 of the orchestrator).
- Mocks for Twilio/Postmark. The Twilio dev bypass already exists; for SMS we'd want a fake notifier in PHPUnit so FanOut tests can assert the payload. Punt to the notif plan.
