<?php
use HeyFam\Core\Notifs\Prefs;
use PHPUnit\Framework\TestCase;

final class FanOutTest extends TestCase {
	public function test_default_prefs_send_post_via_all_channels(): void {
		$defaults = Prefs::DEFAULTS;
		$this->assertTrue( $defaults['posts']['push'] );
		$this->assertTrue( $defaults['posts']['email'] );
		$this->assertTrue( $defaults['posts']['sms'] );
	}

	public function test_default_prefs_send_comments_push_only(): void {
		$defaults = Prefs::DEFAULTS;
		$this->assertTrue(  $defaults['comments']['push'] );
		$this->assertFalse( $defaults['comments']['email'] );
		$this->assertFalse( $defaults['comments']['sms'] );
	}

	public function test_default_prefs_send_reactions_push_only(): void {
		$defaults = Prefs::DEFAULTS;
		$this->assertTrue(  $defaults['reactions']['push'] );
		$this->assertFalse( $defaults['reactions']['email'] );
		$this->assertFalse( $defaults['reactions']['sms'] );
	}
}
