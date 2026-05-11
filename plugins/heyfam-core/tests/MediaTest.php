<?php
/**
 * @group integration
 *
 * Exercises the multi-attachment composer path with seeded fixture images.
 */
final class MediaTest extends \WP_UnitTestCase {
    /** @var string[] */
    private array $tmp_files = [];

    protected function tearDown(): void {
        foreach ( $this->tmp_files as $path ) {
            if ( file_exists( $path ) ) {
                @unlink( $path );
            }
        }
        parent::tearDown();
    }

    public function test_create_attaches_two_images_and_sets_thumbnail(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        $files = [ $this->fixture( 'a.jpg' ), $this->fixture( 'b.jpg' ) ];

        $result = \HeyFam\Core\Posts\Composer::create( $user_id, 'Hello fam', $files );
        $this->assertIsArray( $result );
        $this->assertArrayHasKey( 'post_id', $result );
        $this->assertGreaterThan( 0, $result['post_id'] );
        $this->assertCount( 2, $result['attachment_ids'] );

        $thumb = get_post_thumbnail_id( $result['post_id'] );
        $this->assertSame( $result['attachment_ids'][0], (int) $thumb );

        $children = get_attached_media( 'image', $result['post_id'] );
        $this->assertCount( 2, $children );
    }

    public function test_create_legacy_single_photo_path_still_works(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        $single = $this->fixture( 'legacy.jpg' );
        // Legacy callers pass a single $_FILES-shape array, not a list.
        $result = \HeyFam\Core\Posts\Composer::create( $user_id, 'Old client', $single );
        $this->assertIsArray( $result );
        $this->assertCount( 1, $result['attachment_ids'] );
    }

    public function test_text_only_post_still_allowed(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        $result = \HeyFam\Core\Posts\Composer::create( $user_id, 'Just words', [] );
        $this->assertIsArray( $result );
        $this->assertEmpty( $result['attachment_ids'] );
    }

    public function test_empty_post_rejected(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        $result = \HeyFam\Core\Posts\Composer::create( $user_id, '', [] );
        $this->assertInstanceOf( \WP_Error::class, $result );
        $this->assertSame( 'empty_post', $result->get_error_code() );
    }

    private function fixture( string $name ): array {
        $src = __DIR__ . '/fixtures/' . $name;
        if ( ! file_exists( $src ) ) {
            $this->markTestSkipped( "Fixture missing: $src" );
        }
        $tmp = wp_tempnam( $name );
        copy( $src, $tmp );
        $this->tmp_files[] = $tmp;
        return [
            'name'     => $name,
            'type'     => 'image/jpeg',
            'tmp_name' => $tmp,
            'error'    => 0,
            'size'     => filesize( $tmp ),
        ];
    }
}
