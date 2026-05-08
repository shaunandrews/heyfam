<?php
namespace HeyFam\Core;

final class Plugin {
	public function boot(): void {
		new \HeyFam\Core\Privacy\PIIShield();
		new \HeyFam\Core\REST\Routes();
		new \HeyFam\Core\Fams\Roles();

		add_action( 'wp_initialize_site', static function ( \WP_Site $site ) {
			\HeyFam\Core\Fams\Invites::create_table( (int) $site->blog_id );
		}, 30, 1 );
	}

	public static function activate(): void {
		\HeyFam\Core\Fams\Roles::seed_all_existing_sites();
		foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
			\HeyFam\Core\Fams\Invites::create_table( (int) $site->blog_id );
		}
		flush_rewrite_rules();
	}

	public static function deactivate(): void {
		flush_rewrite_rules();
	}
}
