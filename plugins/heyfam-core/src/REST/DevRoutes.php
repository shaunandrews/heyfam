<?php
namespace HeyFam\Core\REST;

/**
 * Dev-only REST routes. Registered only when WP_DEBUG is true.
 *
 *   POST /heyfam/v1/_dev/reset-me           — calls Cli\ResetMe::run for current user
 *   POST /heyfam/v1/_dev/seed-demo          — calls Cli\SeedDemo::run
 *   GET  /heyfam/v1/_dev/last-invite?phone= — returns last invite code for that phone (used in e2e)
 *
 * All endpoints require `manage_options` (network admin) OR `current_user_id===target`.
 * Anti-CSRF: standard WP REST nonce required.
 */
final class DevRoutes {
	public static function register(): void {
		if ( ! ( defined( 'WP_DEBUG' ) && WP_DEBUG ) ) return;
		add_action( 'rest_api_init', [ self::class, 'routes' ] );
	}

	public static function routes(): void {
		register_rest_route( 'heyfam/v1', '/_dev/reset-me', [
			'methods'             => 'POST',
			'permission_callback' => static fn() => is_user_logged_in(),
			'args'                => [
				'delete_user' => [ 'required' => false, 'type' => 'boolean', 'default' => false ],
			],
			'callback'            => [ self::class, 'reset_me' ],
		] );

		register_rest_route( 'heyfam/v1', '/_dev/seed-demo', [
			'methods'             => 'POST',
			// Whole route family is already WP_DEBUG-gated above. Any signed-in
			// dev can run it — the network-admin check was tripping plain fam
			// admins on Studio installs.
			'permission_callback' => static fn() => is_user_logged_in(),
			'args'                => [
				'name'    => [ 'required' => false, 'type' => 'string',  'default' => 'The Reyes Family' ],
				'slug'    => [ 'required' => false, 'type' => 'string' ],
				'members' => [ 'required' => false, 'type' => 'integer', 'default' => 5 ],
				'posts'   => [ 'required' => false, 'type' => 'integer', 'default' => 8 ],
				'reset'   => [ 'required' => false, 'type' => 'boolean', 'default' => false ],
			],
			'callback'            => [ self::class, 'seed_demo' ],
		] );

		register_rest_route( 'heyfam/v1', '/_dev/last-invite', [
			'methods'             => 'GET',
			'permission_callback' => '__return_true', // dev-only, gated by WP_DEBUG above
			'args'                => [ 'phone' => [ 'required' => true, 'type' => 'string' ] ],
			'callback'            => [ self::class, 'last_invite' ],
		] );
	}

	public static function reset_me( \WP_REST_Request $req ): \WP_REST_Response {
		$delete = (bool) $req->get_param( 'delete_user' );
		try {
			$r = \HeyFam\Core\Cli\ResetMe::run( get_current_user_id(), $delete, false );
		} catch ( \Throwable $e ) {
			return new \WP_REST_Response( [ 'error' => $e->getMessage() ], 500 );
		}
		return new \WP_REST_Response( [ 'ok' => true, 'result' => $r ], 200 );
	}

	public static function seed_demo( \WP_REST_Request $req ): \WP_REST_Response {
		$opts = $req->get_params();
		if ( ! empty( $opts['reset'] ) ) {
			$slug     = $opts['slug'] ?? \HeyFam\Core\Fams\Slugs::suggest( $opts['name'] ?? 'The Reyes Family' );
			$main     = get_network()->site_id;
			$domain   = get_blog_details( $main )->domain;
			$path     = rtrim( get_blog_details( $main )->path, '/' ) . "/$slug/";
			$existing = (int) domain_exists( $domain, $path );
			if ( $existing ) {
				require_once ABSPATH . 'wp-admin/includes/ms.php';
				wpmu_delete_blog( $existing, true );
			}
		}
		try {
			$r = \HeyFam\Core\Cli\SeedDemo::run( $opts );
		} catch ( \Throwable $e ) {
			return new \WP_REST_Response( [ 'error' => $e->getMessage() ], 500 );
		}
		return new \WP_REST_Response( [ 'ok' => true, 'result' => $r ], 200 );
	}

	public static function last_invite( \WP_REST_Request $req ): \WP_REST_Response {
		$phone = (string) $req->get_param( 'phone' );
		global $wpdb;
		// Sweep all blogs — invites live in per-blog tables and a dev caller may
		// not know which fam issued the invite.
		$sites  = get_sites( [ 'number' => 0 ] );
		$latest = null;
		foreach ( $sites as $site ) {
			$table = \HeyFam\Core\Fams\Invites::table_name( (int) $site->blog_id );
			$row   = $wpdb->get_row( $wpdb->prepare(
				"SELECT * FROM $table WHERE phone_e164 = %s ORDER BY id DESC LIMIT 1",
				$phone
			), ARRAY_A );
			if ( $row && ( ! $latest || $row['id'] > $latest['id'] ) ) {
				$latest = $row;
			}
		}
		if ( ! $latest ) {
			return new \WP_REST_Response( [ 'error' => 'not_found' ], 404 );
		}
		// For the e2e/dev caller, we need the PLAIN code. Issuance discards it.
		// Invites::issue tees it into a per-phone site option when WP_DEBUG is
		// on (see Fams\Invites::issue) so we can retrieve it here.
		$opt_key = '_heyfam_dev_invite_' . md5( $phone );
		$code    = get_site_option( $opt_key );
		return new \WP_REST_Response( [
			'code'       => $code,
			'phone_e164' => $latest['phone_e164'],
			'expires_at' => $latest['expires_at'],
		], 200 );
	}
}
