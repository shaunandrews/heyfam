<?php
namespace HeyFam\Core;

final class PageBootstrap {
	/** Map of page slug => [title, template]. Templates live in themes/heyfam-theme/templates/. */
	private const PAGES = [
		'signup' => [ 'Sign up',       'page-signup' ],
		'login'  => [ 'Log in',        'page-login' ],
		'invite' => [ 'Accept invite', 'page-invite' ],
	];

	public function __construct() {
		add_action( 'init', [ $this, 'add_rewrites' ] );
		add_action( 'init', [ $this, 'self_heal' ] );
		add_filter( 'query_vars', [ $this, 'add_query_vars' ] );
	}

	/**
	 * One-shot migration for the per-fam settings move. Bump the version below
	 * when the page set changes again. Uses a network option so the migration
	 * only runs once across the whole multisite, not once per subsite.
	 */
	public function self_heal(): void {
		if ( ! is_main_site() ) return;
		if ( get_site_option( 'heyfam_pages_v' ) === '2' ) return;
		self::ensure_pages();
		self::ensure_account_pages_for_subsites();
		update_site_option( 'heyfam_pages_v', '2' );
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
		// Settings moved to /{fam}/account/ — remove the legacy main-blog page if it
		// lingers from an older install so /account/ now 404s.
		$legacy_account = get_page_by_path( 'account' );
		if ( $legacy_account ) {
			wp_delete_post( $legacy_account->ID, true );
		}
	}

	/**
	 * Idempotent. Ensures the current blog has an /account/ page rendered by
	 * the page-account template. Caller is responsible for being in the
	 * desired blog context (e.g. inside switch_to_blog).
	 */
	public static function ensure_account_page(): void {
		$existing = get_page_by_path( 'account' );
		if ( $existing ) {
			update_post_meta( $existing->ID, '_wp_page_template', 'page-account' );
			return;
		}
		$id = wp_insert_post( [
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => 'Settings',
			'post_name'    => 'account',
			'post_content' => '<!-- HeyFam: rendered by page-account template -->',
		] );
		if ( $id && ! is_wp_error( $id ) ) {
			update_post_meta( $id, '_wp_page_template', 'page-account' );
		}
	}

	/** Backfill account pages on every existing fam subsite. Called from Plugin::activate. */
	public static function ensure_account_pages_for_subsites(): void {
		$network_main = (int) get_network()->site_id;
		foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
			$blog_id = (int) $site->blog_id;
			if ( $blog_id === $network_main ) continue;
			switch_to_blog( $blog_id );
			try {
				self::ensure_account_page();
			} finally {
				restore_current_blog();
			}
		}
	}
}
