<?php
namespace HeyFam\Core\Fams;

final class Roles {
	public const ADMIN_ROLE  = 'fam_admin';
	public const MEMBER_ROLE = 'fam_member';

	public const ADMIN_CAPS = [
		'read'                      => true,
		'heyfam_post_to_fam'        => true,
		'heyfam_react'              => true,
		'heyfam_comment'            => true,
		'heyfam_invite'             => true,
		'heyfam_manage_fam'         => true,
		'heyfam_remove_member'      => true,
		'heyfam_view_member_phone'  => true,
	];

	public const MEMBER_CAPS = [
		'read'               => true,
		'heyfam_post_to_fam' => true,
		'heyfam_react'       => true,
		'heyfam_comment'     => true,
	];

	public function __construct() {
		add_action( 'wp_initialize_site', [ $this, 'on_site_create' ], 20, 1 );
	}

	public function on_site_create( \WP_Site $site ): void {
		switch_to_blog( (int) $site->blog_id );
		try {
			$this->seed_roles();
		} finally {
			restore_current_blog();
		}
	}

	public function seed_roles(): void {
		remove_role( self::ADMIN_ROLE );
		remove_role( self::MEMBER_ROLE );
		add_role( self::ADMIN_ROLE,  'Fam Admin',  self::ADMIN_CAPS );
		add_role( self::MEMBER_ROLE, 'Fam Member', self::MEMBER_CAPS );
	}

	public static function seed_all_existing_sites(): void {
		$instance = new self();
		foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
			switch_to_blog( (int) $site->blog_id );
			try {
				$instance->seed_roles();
			} finally {
				restore_current_blog();
			}
		}
	}
}
