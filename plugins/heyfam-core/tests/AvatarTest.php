<?php
use PHPUnit\Framework\TestCase;

/**
 * @group integration
 */
final class AvatarTest extends TestCase {

    public function test_generated_avatar_is_deterministic(): void {
        $a = \HeyFam\Core\Avatars\Avatar::url_for_user( 42 );
        $b = \HeyFam\Core\Avatars\Avatar::url_for_user( 42 );
        $this->assertSame( $a, $b );
        $this->assertStringStartsWith( 'data:image/svg+xml;base64,', $a );
    }

    public function test_different_users_get_different_avatars(): void {
        $a = \HeyFam\Core\Avatars\Avatar::url_for_user( 42 );
        $b = \HeyFam\Core\Avatars\Avatar::url_for_user( 43 );
        $this->assertNotSame( $a, $b );
    }

    public function test_uploaded_attachment_overrides_generated(): void {
        $user_id  = wp_insert_user( [
            'user_login' => 'avatar-test-' . uniqid(),
            'user_pass'  => 'x',
            'role'       => 'subscriber',
        ] );
        // Set a `guid` so wp_get_attachment_url() can produce a URL without
        // a real file on disk (we never actually upload one here).
        $attach_id = wp_insert_attachment( [
            'post_title'     => 'avatar.png',
            'post_status'    => 'inherit',
            'post_mime_type' => 'image/png',
            'guid'           => 'http://example.test/wp-content/uploads/avatar.png',
        ] );
        update_user_meta( $user_id, 'heyfam_avatar_attachment_id', $attach_id );

        $url = \HeyFam\Core\Avatars\Avatar::url_for_user( $user_id );
        $this->assertStringNotContainsString( 'data:image/svg+xml', $url );
        $this->assertStringContainsString( 'wp-content', $url );
    }
}
