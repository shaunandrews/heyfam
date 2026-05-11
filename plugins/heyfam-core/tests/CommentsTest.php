<?php
/**
 * @group integration
 * Run inside a WP test environment where wp_insert_comment + get_comment work.
 */
final class CommentsTest extends \WP_UnitTestCase {
	private int $post_id;
	private int $other_post_id;
	private int $valid_parent_id;

	protected function setUp(): void {
		parent::setUp();
		$this->post_id         = wp_insert_post( [ 'post_title' => 't1', 'post_content' => 'b1', 'post_status' => 'publish' ] );
		$this->other_post_id   = wp_insert_post( [ 'post_title' => 't2', 'post_content' => 'b2', 'post_status' => 'publish' ] );
		$this->valid_parent_id = wp_insert_comment( [
			'comment_post_ID'  => $this->post_id,
			'comment_content'  => 'parent',
			'comment_approved' => 1,
		] );
	}

	public function test_validate_parent_accepts_null_for_top_level(): void {
		$err = \HeyFam\Core\REST\Routes::validate_comment_parent( 0, $this->post_id );
		$this->assertNull( $err );
	}

	public function test_validate_parent_accepts_real_parent_on_same_post(): void {
		$err = \HeyFam\Core\REST\Routes::validate_comment_parent( $this->valid_parent_id, $this->post_id );
		$this->assertNull( $err );
	}

	public function test_validate_parent_rejects_nonexistent(): void {
		$err = \HeyFam\Core\REST\Routes::validate_comment_parent( 999999, $this->post_id );
		$this->assertSame( 'invalid_parent', $err );
	}

	public function test_validate_parent_rejects_parent_on_different_post(): void {
		$err = \HeyFam\Core\REST\Routes::validate_comment_parent( $this->valid_parent_id, $this->other_post_id );
		$this->assertSame( 'invalid_parent', $err );
	}

	public function test_validate_parent_rejects_unapproved(): void {
		$unapproved = wp_insert_comment( [
			'comment_post_ID'  => $this->post_id,
			'comment_content'  => 'spam',
			'comment_approved' => 0,
		] );
		$err = \HeyFam\Core\REST\Routes::validate_comment_parent( $unapproved, $this->post_id );
		$this->assertSame( 'invalid_parent', $err );
	}
}
