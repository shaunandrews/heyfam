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

    public function test_serialize_post_exposes_images_array(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        $files  = [ $this->fixture( 'a.jpg' ), $this->fixture( 'b.jpg' ) ];
        $result = \HeyFam\Core\Posts\Composer::create( $user_id, 'with images', $files );
        $this->assertIsArray( $result );

        $post       = get_post( $result['post_id'] );
        $serialized = \HeyFam\Core\REST\Routes::serialize_post( $post );

        $this->assertArrayHasKey( 'images',      $serialized );
        $this->assertArrayHasKey( 'image_count', $serialized );
        $this->assertArrayHasKey( 'photo_url',   $serialized );
        $this->assertSame( 2, $serialized['image_count'] );
        $this->assertCount( 2, $serialized['images'] );
        $this->assertArrayHasKey( 'id',        $serialized['images'][0] );
        $this->assertArrayHasKey( 'url',       $serialized['images'][0] );
        $this->assertArrayHasKey( 'thumb_url', $serialized['images'][0] );
        // photo_url stays non-null for backwards compatibility.
        $this->assertNotNull( $serialized['photo_url'] );
    }

    public function test_serialize_post_text_only_has_empty_images(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        $result     = \HeyFam\Core\Posts\Composer::create( $user_id, 'no photos', [] );
        $post       = get_post( $result['post_id'] );
        $serialized = \HeyFam\Core\REST\Routes::serialize_post( $post );

        $this->assertSame( 0, $serialized['image_count'] );
        $this->assertSame( [], $serialized['images'] );
        $this->assertNull( $serialized['photo_url'] );
    }

    public function test_serialize_post_legacy_single_photo_renders_in_gallery(): void {
        $user_id = self::factory()->user->create( [ 'role' => 'editor' ] );
        wp_set_current_user( $user_id );

        // Simulate an old client posting via the legacy single-photo path.
        $result     = \HeyFam\Core\Posts\Composer::create( $user_id, 'old client', $this->fixture( 'legacy.jpg' ) );
        $post       = get_post( $result['post_id'] );
        $serialized = \HeyFam\Core\REST\Routes::serialize_post( $post );

        // Both legacy `photo_url` and the new `images[]` are populated.
        $this->assertNotNull( $serialized['photo_url'] );
        $this->assertSame( 1, $serialized['image_count'] );
        $this->assertCount( 1, $serialized['images'] );
        // The first image's full URL should equal the legacy `photo_url`,
        // so frozen old clients reading `photo_url` see the same thing.
        $this->assertSame( $serialized['photo_url'], $serialized['images'][0]['url'] );
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
