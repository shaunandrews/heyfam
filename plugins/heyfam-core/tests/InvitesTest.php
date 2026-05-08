<?php
use HeyFam\Core\Fams\Invites;
use PHPUnit\Framework\TestCase;

final class InvitesTest extends TestCase {
	public function test_generate_code_is_url_safe_and_unique(): void {
		$codes = [];
		for ( $i = 0; $i < 100; $i++ ) {
			$code = Invites::generate_code();
			$this->assertMatchesRegularExpression( '/^[A-Za-z0-9_-]+$/', $code );
			$codes[ $code ] = true;
		}
		$this->assertCount( 100, $codes );
	}

	public function test_hash_is_stable(): void {
		$a = Invites::hash( 'abc' );
		$b = Invites::hash( 'abc' );
		$this->assertSame( $a, $b );
		$this->assertNotSame( $a, Invites::hash( 'abcd' ) );
	}
}
