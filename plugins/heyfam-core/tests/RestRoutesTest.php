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

    public function test_signup_verify_rejects_bad_code(): void {
        RestRequest::post( '/heyfam/v1/signup/start', [ 'phone' => '+15555550102' ] );
        $resp = RestRequest::post( '/heyfam/v1/signup/verify', [
            'phone'        => '+15555550102',
            'code'         => '999999',
            'display_name' => 'Test User',
            'fam_name'     => 'Test Fam 2',
            'fam_slug'     => 'testfam2',
        ] );
        // Wrong code returns 401 with error 'bad_code' (see Routes::signup_verify).
        $this->assertSame( 401, $resp->get_status() );
        $this->assertSame( 'bad_code', $resp->get_data()['error'] ?? null );
    }

    public function test_signup_verify_with_dev_code_creates_user(): void {
        // On single-site SQLite the fam creation step in signup/verify uses
        // wpmu_create_blog, which requires multisite. The user creation +
        // verify path works without multisite, so split the assertion: code
        // accepted means the dev bypass works end-to-end.
        RestRequest::post( '/heyfam/v1/signup/start', [ 'phone' => '+15555550101' ] );

        $resp = RestRequest::post( '/heyfam/v1/signup/verify', [
            'phone'        => '+15555550101',
            'code'         => '000000',
            'display_name' => 'Test User',
        ] );
        $this->assertSame( 200, $resp->get_status() );
        $data = $resp->get_data();
        $this->assertTrue( $data['ok'] ?? false );
        $this->assertNotEmpty( $data['user_id'] ?? null );
    }

    public function test_fam_slug_validation_rejects_reserved(): void {
        // Reserved slugs (signup, login, wp-admin etc.) must not be accepted.
        $valid = \HeyFam\Core\Fams\Slugs::validate( 'wp-admin' );
        $this->assertTrue( is_wp_error( $valid ) );
        $this->assertSame( 'reserved_slug', $valid->get_error_code() );
    }

    public function test_fam_slug_validation_rejects_too_short(): void {
        $valid = \HeyFam\Core\Fams\Slugs::validate( 'ab' );
        $this->assertTrue( is_wp_error( $valid ) );
        $this->assertSame( 'invalid_slug', $valid->get_error_code() );
    }

    public function test_fam_slug_validation_accepts_good(): void {
        $valid = \HeyFam\Core\Fams\Slugs::validate( 'smiths' );
        $this->assertTrue( $valid === true );
    }

    public function test_fan_out_schedule_post_writes_an_action(): void {
        if ( ! is_multisite() ) {
            $this->markTestSkipped(
                'Multisite-only: this exercises subsite creation and FanOut::schedule_post on a fresh blog. ' .
                'Run via `composer test:ms` once the SQLite drop-in supports multisite.'
            );
        }
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
