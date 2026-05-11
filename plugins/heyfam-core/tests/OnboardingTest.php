<?php
use HeyFam\Core\Tests\Helpers\RestRequest;

/**
 * @group integration
 *
 * Onboarding-flow guards: the user-meta side effects from ensure_user, the
 * skip-invites endpoint, and the logged-in invite-accept fast path. The fast
 * path proper needs multisite (invites live in per-site tables) — we mark the
 * full end-to-end as skipped when running on the SQLite single-site driver,
 * matching the pattern in RestRoutesTest.
 */
final class OnboardingTest extends \WP_UnitTestCase {
    protected function setUp(): void {
        parent::setUp();
        do_action( 'rest_api_init' );
    }

    public function test_ensure_user_writes_onboarded_at(): void {
        $uid = \HeyFam\Core\Auth\PhoneSignup::ensure_user( '+15555550301', 'Onboard Test' );
        $this->assertGreaterThan( 0, $uid );
        $this->assertNotEmpty( get_user_meta( $uid, 'heyfam_onboarded_at', true ) );
    }

    public function test_skip_invites_endpoint_sets_meta(): void {
        $uid = self::factory()->user->create();
        wp_set_current_user( $uid );

        $resp = RestRequest::post( '/heyfam/v1/me/skip-invites', [] );
        $this->assertSame( 200, $resp->get_status() );
        $this->assertNotEmpty( get_user_meta( $uid, 'heyfam_invites_skipped_at', true ) );
    }

    public function test_dismiss_nudge_endpoint_sets_meta(): void {
        $uid = self::factory()->user->create();
        wp_set_current_user( $uid );

        $resp = RestRequest::post( '/heyfam/v1/me/dismiss-nudge', [] );
        $this->assertSame( 200, $resp->get_status() );
        $this->assertNotEmpty( get_user_meta( $uid, 'heyfam_invites_nudge_dismissed_at', true ) );
    }

    public function test_skip_invites_requires_login(): void {
        wp_set_current_user( 0 );
        $resp = RestRequest::post( '/heyfam/v1/me/skip-invites', [] );
        $this->assertSame( 401, $resp->get_status() );
    }

    public function test_invite_accept_fast_path_rejects_without_user_phone(): void {
        if ( ! is_multisite() ) {
            $this->markTestSkipped( 'Invites live in per-site tables; requires multisite.' );
        }
        // Logged in but no phone_e164 stored on the account.
        $uid = self::factory()->user->create();
        wp_set_current_user( $uid );

        $resp = RestRequest::post( '/heyfam/v1/invites/accept', [ 'code' => 'abcdef' ] );
        $this->assertSame( 400, $resp->get_status() );
        $this->assertSame( 'no_user_phone', $resp->get_data()['error'] ?? null );
    }

    public function test_invite_accept_fast_path_returns_invalid_for_bad_code(): void {
        if ( ! is_multisite() ) {
            $this->markTestSkipped( 'Invites live in per-site tables; requires multisite.' );
        }
        $uid = self::factory()->user->create();
        update_user_meta( $uid, 'phone_e164', '+15555550302' );
        wp_set_current_user( $uid );

        $resp = RestRequest::post( '/heyfam/v1/invites/accept', [ 'code' => 'totally-fake-code' ] );
        $this->assertSame( 410, $resp->get_status() );
        $this->assertSame( 'invalid_or_expired', $resp->get_data()['error'] ?? null );
    }
}
