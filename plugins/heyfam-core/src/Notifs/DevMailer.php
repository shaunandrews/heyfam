<?php
namespace HeyFam\Core\Notifs;

/**
 * Re-routes wp_mail through Mailpit (or a logfile) when a dev env flag is set.
 *
 * Modes (HEYFAM_DEV_MAIL):
 *   "mailpit" — send to 127.0.0.1:1025 (no auth). View at http://localhost:8025.
 *   "log"     — error_log() a one-line "[heyfam dev mail] To=... Subject=..." plus body.
 *   ""        — no-op (production / staging path).
 *
 * Why hook PHPMailer directly instead of using a plugin like WP Mail SMTP:
 *  - Zero extra dependencies on the local site.
 *  - Works identically whether you toggle by env var or by hand in wp-config.
 *  - The "log" fallback means a contributor can verify our fan-out without
 *    installing Mailpit at all.
 */
final class DevMailer {
	public function __construct() {
		$mode = getenv( 'HEYFAM_DEV_MAIL' ) ?: '';
		if ( $mode === '' ) return;
		if ( $mode === 'mailpit' ) {
			add_action( 'phpmailer_init', [ $this, 'route_to_mailpit' ] );
		}
		// Always also log a summary so debug.log shows what we tried to send.
		add_action( 'phpmailer_init', [ $this, 'log_summary' ] );
	}

	public function route_to_mailpit( \PHPMailer\PHPMailer\PHPMailer $mailer ): void {
		$mailer->isSMTP();
		$mailer->Host        = '127.0.0.1';
		$mailer->Port        = 1025;
		$mailer->SMTPAuth    = false;
		$mailer->SMTPAutoTLS = false;
		$mailer->SMTPSecure  = '';
		// Mailpit accepts any From; keep the wp_mail-provided value.
	}

	public function log_summary( \PHPMailer\PHPMailer\PHPMailer $mailer ): void {
		$to = is_array( $mailer->getToAddresses() )
			? implode( ',', array_map( static fn( $a ) => $a[0] ?? '', $mailer->getToAddresses() ) )
			: '';
		$mode = getenv( 'HEYFAM_DEV_MAIL' ) ?: '';
		error_log( sprintf(
			'[heyfam dev mail %s] To=%s Subject=%s',
			$mode,
			$to,
			$mailer->Subject
		) );
		if ( $mode === 'log' ) {
			// Print the body too in pure-log mode.
			error_log( '[heyfam dev mail body] ' . substr( wp_strip_all_tags( $mailer->Body ), 0, 800 ) );
			// Short-circuit the send by leaving the mailer in SMTP mode pointing at a
			// closed port. Cleaner: throw, but PHPMailer will surface that to wp_mail
			// as a failure and our Email::send() returns false, which is exactly what
			// we want — the queue does not retry.
			$mailer->isSMTP();
			$mailer->Host = '127.0.0.1';
			$mailer->Port = 65535; // guaranteed-closed sentinel; send fails silently
		}
	}
}
