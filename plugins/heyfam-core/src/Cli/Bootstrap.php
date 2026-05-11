<?php
namespace HeyFam\Core\Cli;

/**
 * Single registration point for all `wp heyfam …` commands.
 *
 * Both this workstream (notif-dev) and the Test Infrastructure workstream
 * (reset-me, seed-demo) add their commands here. Keep the list alphabetized.
 *
 * To add a new command:
 *   1. Drop the class into this directory (HeyFam\Core\Cli\YourCommand).
 *   2. Add one `\WP_CLI::add_command()` line below, alphabetized by subcommand.
 *
 * This file is intentionally trivial so that two parallel workstreams can
 * each add a single line without conflicting on anything else.
 */
final class Bootstrap {
	public function __construct() {
		if ( ! defined( 'WP_CLI' ) || ! \WP_CLI ) return;

		// Alphabetized by subcommand. Add new commands inline; keep the order.
		\WP_CLI::add_command( 'heyfam send-test-notification', SendTestNotificationCommand::class );
		// Test Infrastructure workstream will add (in this same file):
		//   \WP_CLI::add_command( 'heyfam reset-me',  ResetMeCommand::class );
		//   \WP_CLI::add_command( 'heyfam seed-demo', SeedDemoCommand::class );
	}
}
