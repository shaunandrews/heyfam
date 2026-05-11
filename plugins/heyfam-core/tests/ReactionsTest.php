<?php
use HeyFam\Core\Reactions\Manager;

/**
 * @group integration
 * Run inside a WP test environment (wp-env or similar) where switch_to_blog works.
 */
final class ReactionsTest extends \WP_UnitTestCase {
	private int $blog_id;

	protected function setUp(): void {
		parent::setUp();
		$this->blog_id = (int) get_current_blog_id();
		// dbDelta's SHOW-INDEX path doesn't translate cleanly through the SQLite
		// drop-in on re-runs (the parser returns null for SHOW INDEX FROM and
		// dbDelta then array_shift()s the null). Create the table once per
		// process and rely on WP_UnitTestCase's transaction to roll back rows.
		static $table_ready = false;
		if ( ! $table_ready ) {
			Manager::create_table( $this->blog_id );
			$table_ready = true;
		}
	}

	public function test_add_is_idempotent_per_user_per_emoji(): void {
		$this->assertTrue(  Manager::add( 'post', 100, 7, '👍' ) );
		$this->assertFalse( Manager::add( 'post', 100, 7, '👍' ), 'Second add should be a no-op' );
		$this->assertSame( [ '👍' => 1 ], Manager::counts_for( 'post', 100 ) );
	}

	public function test_user_can_have_multiple_distinct_emoji_on_same_target(): void {
		Manager::add( 'post', 200, 7, '👍' );
		Manager::add( 'post', 200, 7, '😋' );
		$this->assertSame( [ '👍' => 1, '😋' => 1 ], Manager::counts_for( 'post', 200 ) );
	}
}
