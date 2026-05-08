<?php
namespace HeyFam\Core;

final class PageBootstrap {
	/** Map of page slug => [title, template]. Templates live in themes/heyfam-theme/templates/. */
	private const PAGES = [
		'signup'  => [ 'Sign up',          'page-signup' ],
		'login'   => [ 'Log in',           'page-login' ],
		'account' => [ 'Account settings', 'page-account' ],
		'invite'  => [ 'Accept invite',    'page-invite' ],
	];

	public function __construct() {
		add_action( 'init', [ $this, 'add_rewrites' ] );
		add_filter( 'query_vars', [ $this, 'add_query_vars' ] );
	}

	public function add_rewrites(): void {
		// /i/{code} -> the "invite" page with ?heyfam_invite_code={code}
		add_rewrite_rule( '^i/([A-Za-z0-9_-]+)/?$', 'index.php?pagename=invite&heyfam_invite_code=$matches[1]', 'top' );
	}

	public function add_query_vars( array $vars ): array {
		$vars[] = 'heyfam_invite_code';
		return $vars;
	}

	/** Called from Plugin::activate. Idempotent. Creates pages on the main blog only. */
	public static function ensure_pages(): void {
		if ( ! is_main_site() ) return;
		foreach ( self::PAGES as $slug => [ $title, $template ] ) {
			$existing = get_page_by_path( $slug );
			if ( $existing ) {
				update_post_meta( $existing->ID, '_wp_page_template', $template );
				continue;
			}
			$id = wp_insert_post( [
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_content' => '<!-- HeyFam: rendered by ' . esc_html( $template ) . ' template -->',
			] );
			if ( $id && ! is_wp_error( $id ) ) {
				update_post_meta( $id, '_wp_page_template', $template );
			}
		}
	}
}
