<?php
namespace HeyFam\Core\PWA;

final class Serve {
	public function __construct() {
		add_action( 'init',              [ $this, 'add_rewrites' ] );
		add_filter( 'query_vars',        [ $this, 'add_query_vars' ] );
		add_action( 'template_redirect', [ $this, 'maybe_serve' ] );
	}

	public function add_rewrites(): void {
		add_rewrite_rule( '^sw\.js$',                'index.php?heyfam_pwa=sw', 'top' );
		add_rewrite_rule( '^manifest\.webmanifest$', 'index.php?heyfam_pwa=manifest', 'top' );
	}

	public function add_query_vars( array $vars ): array {
		$vars[] = 'heyfam_pwa';
		return $vars;
	}

	public function maybe_serve(): void {
		$kind = get_query_var( 'heyfam_pwa' );
		if ( ! $kind ) return;

		if ( $kind === 'sw' ) {
			header( 'Content-Type: application/javascript; charset=utf-8' );
			header( 'Service-Worker-Allowed: /' );
			header( 'Cache-Control: no-cache' );
			readfile( HEYFAM_CORE_DIR . '/assets/sw.js' );
			exit;
		}
		if ( $kind === 'manifest' ) {
			header( 'Content-Type: application/manifest+json; charset=utf-8' );
			header( 'Cache-Control: public, max-age=3600' );
			readfile( HEYFAM_CORE_DIR . '/assets/manifest.webmanifest' );
			exit;
		}
	}
}
