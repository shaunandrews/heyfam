<?php
use HeyFam\Core\Polls\Manager;

/**
 * @group integration
 * Runs inside the WP test environment shipped via wp-phpunit + the SQLite drop-in.
 */
final class PollsTest extends \WP_UnitTestCase {
	private int $blog_id;
	private int $post_id;
	private int $user_a;
	private int $user_b;

	protected function setUp(): void {
		parent::setUp();
		$this->blog_id = (int) get_current_blog_id();

		// dbDelta's SHOW-INDEX path doesn't translate cleanly through the SQLite
		// drop-in on re-runs (see ReactionsTest for the same workaround).
		static $table_ready = false;
		if ( ! $table_ready ) {
			Manager::create_table( $this->blog_id );
			$table_ready = true;
		}

		$this->post_id = self::factory()->post->create( [
			'post_title'   => 'q',
			'post_content' => 'Pizza or sushi?',
			'post_status'  => 'publish',
		] );
		update_post_meta( $this->post_id, 'heyfam_poll_options', wp_json_encode( [ 'Pizza', 'Sushi' ] ) );

		$this->user_a = self::factory()->user->create( [ 'user_login' => 'poll_a_' . $this->post_id ] );
		$this->user_b = self::factory()->user->create( [ 'user_login' => 'poll_b_' . $this->post_id ] );
	}

	public function test_vote_inserts_row(): void {
		$err = Manager::vote( $this->post_id, $this->user_a, 0 );
		$this->assertNull( $err );
		$this->assertSame( [ 1, 0 ], Manager::counts_for( $this->post_id, 2 ) );
	}

	public function test_vote_change_replaces_existing(): void {
		Manager::vote( $this->post_id, $this->user_a, 0 );
		Manager::vote( $this->post_id, $this->user_a, 1 );
		$this->assertSame( [ 0, 1 ], Manager::counts_for( $this->post_id, 2 ) );
		$this->assertSame( 1, Manager::my_vote( $this->post_id, $this->user_a ) );
	}

	public function test_vote_out_of_range_rejected(): void {
		$err = Manager::vote( $this->post_id, $this->user_a, 9 );
		$this->assertSame( 'bad_option', $err );
	}

	public function test_vote_on_non_poll_rejected(): void {
		$plain = self::factory()->post->create( [ 'post_status' => 'publish' ] );
		$err   = Manager::vote( $plain, $this->user_a, 0 );
		$this->assertSame( 'not_a_poll', $err );
	}

	public function test_vote_on_closed_poll_rejected(): void {
		update_post_meta( $this->post_id, 'heyfam_poll_closes_at', gmdate( 'Y-m-d H:i:s', time() - 60 ) );
		$err = Manager::vote( $this->post_id, $this->user_a, 0 );
		$this->assertSame( 'closed', $err );
	}

	public function test_multiple_users_count_independently(): void {
		Manager::vote( $this->post_id, $this->user_a, 0 );
		Manager::vote( $this->post_id, $this->user_b, 0 );
		$this->assertSame( [ 2, 0 ], Manager::counts_for( $this->post_id, 2 ) );
	}

	public function test_my_vote_returns_minus_one_when_no_vote(): void {
		$this->assertSame( -1, Manager::my_vote( $this->post_id, $this->user_a ) );
	}

	public function test_options_for_returns_null_for_non_poll(): void {
		$plain = self::factory()->post->create( [ 'post_status' => 'publish' ] );
		$this->assertNull( Manager::options_for( $plain ) );
	}

	public function test_options_for_returns_array_for_poll(): void {
		$this->assertSame(
			[
				[ 'label' => 'Pizza', 'emoji' => '' ],
				[ 'label' => 'Sushi', 'emoji' => '' ],
			],
			Manager::options_for( $this->post_id )
		);
	}

	public function test_voters_for_returns_avatar_url(): void {
		Manager::vote( $this->post_id, $this->user_a, 0 );
		$voters = Manager::voters_for( $this->post_id );
		$this->assertCount( 1, $voters );
		$this->assertArrayHasKey( 'avatar_url',   $voters[0] );
		$this->assertArrayHasKey( 'name',         $voters[0] );
		$this->assertArrayHasKey( 'option_index', $voters[0] );
		$this->assertSame( 0, $voters[0]['option_index'] );
	}
}
