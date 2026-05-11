<?php
namespace HeyFam\Core\Cli;

use HeyFam\Core\Auth\PhoneSignup;

/**
 * Plain-PHP implementation of "reset a user back to pre-onboarding state."
 * Importable from both the WP-CLI command and the dev REST route so the
 * dev banner does not have to shell out.
 *
 * Scope (all idempotent):
 *  - Remove `phone_verified_at` user meta.
 *  - Delete fams (subsites) where the user is the only fam_admin.
 *  - Remove the user from all remaining fams.
 *  - Optionally (when `--delete-user` is passed) delete the network user.
 */
final class ResetMe {
	/**
	 * @return array{user_id:int, fams_deleted:int[], fams_left:int[], user_deleted:bool}
	 */
	public static function run( int $user_id, bool $delete_user = false, bool $dry_run = false ): array {
		$user = get_user_by( 'id', $user_id );
		if ( ! $user ) {
			throw new \RuntimeException( "User $user_id not found." );
		}

		$fams_deleted = [];
		$fams_left    = [];

		$blogs = get_blogs_of_user( $user_id, /* all */ true );
		foreach ( $blogs as $b ) {
			$blog_id = (int) $b->userblog_id;
			if ( $blog_id === (int) get_network()->site_id ) continue;

			$admins        = self::admin_ids_for_blog( $blog_id );
			$is_sole_admin = ( count( $admins ) === 1 && (int) $admins[0] === $user_id );

			if ( $is_sole_admin ) {
				if ( ! $dry_run ) {
					require_once ABSPATH . 'wp-admin/includes/ms.php';
					wpmu_delete_blog( $blog_id, /* drop */ true );
				}
				$fams_deleted[] = $blog_id;
			} else {
				if ( ! $dry_run ) {
					remove_user_from_blog( $user_id, $blog_id );
				}
				$fams_left[] = $blog_id;
			}
		}

		if ( ! $dry_run ) {
			delete_user_meta( $user_id, 'phone_verified_at' );
		}

		$user_deleted = false;
		if ( $delete_user && ! $dry_run ) {
			require_once ABSPATH . 'wp-admin/includes/ms.php';
			wpmu_delete_user( $user_id );
			$user_deleted = true;
		}

		return [
			'user_id'      => $user_id,
			'fams_deleted' => $fams_deleted,
			'fams_left'    => $fams_left,
			'user_deleted' => $user_deleted,
		];
	}

	public static function for_phone( string $phone_e164, bool $delete_user = false, bool $dry_run = false ): array {
		$uid = PhoneSignup::find_user_by_phone( $phone_e164 );
		if ( ! $uid ) {
			throw new \RuntimeException( "No user with phone $phone_e164." );
		}
		return self::run( $uid, $delete_user, $dry_run );
	}

	private static function admin_ids_for_blog( int $blog_id ): array {
		$admins = [];
		switch_to_blog( $blog_id );
		try {
			$users = get_users( [
				'role'   => \HeyFam\Core\Fams\Roles::ADMIN_ROLE,
				'fields' => 'ID',
				'number' => 0,
			] );
			$admins = array_map( 'intval', $users );
		} finally {
			restore_current_blog();
		}
		return $admins;
	}

	/**
	 * ## OPTIONS
	 *
	 * [--user=<id>]
	 * : Target user id. Default: the user inferred from --phone, then the current user, then bail.
	 *
	 * [--phone=<e164>]
	 * : Lookup the user by phone (E.164, e.g. +15555550100).
	 *
	 * [--delete-user]
	 * : Also delete the WordPress network user. By default the user record is kept and only `phone_verified_at` is cleared.
	 *
	 * [--dry-run]
	 * : Show what would change without writing anything.
	 *
	 * [--yes]
	 * : Skip the confirmation prompt.
	 *
	 * ## EXAMPLES
	 *
	 *     # Reset by phone, keep the user record (default).
	 *     wp heyfam reset-me --phone=+15555550100 --yes
	 *
	 *     # Hard reset — delete user too.
	 *     wp heyfam reset-me --phone=+15555550100 --delete-user --yes
	 *
	 *     # See what would happen.
	 *     wp heyfam reset-me --user=42 --dry-run
	 */
	public function __invoke( array $args, array $assoc ): void {
		$phone   = $assoc['phone'] ?? null;
		$uid_arg = isset( $assoc['user'] ) ? (int) $assoc['user'] : 0;
		$delete  = isset( $assoc['delete-user'] );
		$dry     = isset( $assoc['dry-run'] );
		$yes     = isset( $assoc['yes'] );

		if ( ! $uid_arg && ! $phone ) {
			\WP_CLI::error( 'Pass --user=<id> or --phone=<e164>.' );
		}

		$target_uid = $uid_arg ?: PhoneSignup::find_user_by_phone( (string) $phone );
		if ( ! $target_uid ) {
			\WP_CLI::error( 'Could not find target user.' );
		}

		$user  = get_user_by( 'id', $target_uid );
		$label = sprintf( '#%d (%s, phone=%s)',
			$target_uid,
			$user ? $user->display_name : '?',
			get_user_meta( $target_uid, 'phone_e164', true ) ?: '?'
		);

		$verb = $delete ? 'DELETE user and remove all their fams' : 'reset phone-verification and prune fams';

		if ( ! $yes && ! $dry ) {
			\WP_CLI::confirm( "$verb for $label?" );
		}

		try {
			$result = self::run( $target_uid, $delete, $dry );
		} catch ( \Throwable $e ) {
			\WP_CLI::error( $e->getMessage() );
		}

		\WP_CLI::success( sprintf(
			'%s%s — fams deleted: [%s]; fams left: [%s]; user deleted: %s',
			$dry ? 'DRY-RUN: ' : '',
			$label,
			implode( ',', $result['fams_deleted'] ),
			implode( ',', $result['fams_left'] ),
			$result['user_deleted'] ? 'yes' : 'no'
		) );
	}
}
