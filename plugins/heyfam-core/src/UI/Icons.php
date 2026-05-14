<?php
namespace HeyFam\Core\UI;

/**
 * Centralised SVG icon library.
 *
 * Each icon is registered as a `<symbol>` inside a single inline sprite that
 * gets emitted at `wp_body_open`. Markup references them via:
 *
 *   <svg class="hf-icon" width="16" height="16"><use href="#hfi-link"/></svg>
 *
 * Two paint families coexist:
 *   - "stroke": Lucide-style line icons. We bake the stroke attributes on
 *     the <symbol> so paths can stay attribute-free.
 *   - "fill":   Fluent / Heroicons-style filled icons. The symbol sets
 *     `fill="currentColor"`.
 *
 * Adding an icon is a one-line entry in the ICONS array — no markup edits.
 */
final class Icons {

	private const ICONS = [
		// --- Stroke / line icons (Lucide-style, 24×24) -------------------
		'photo' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>'
				. '<circle cx="9" cy="9" r="2"/>'
				. '<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
		],
		'poll' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M13 5h8"/>'
				. '<path d="M13 12h8"/>'
				. '<path d="M13 19h8"/>'
				. '<path d="m3 17 2 2 4-4"/>'
				. '<rect x="3" y="4" width="6" height="6" rx="1"/>',
		],
		'link' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>'
				. '<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
		],
		'more-vertical' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<circle cx="12" cy="12" r="1"/>'
				. '<circle cx="12" cy="5" r="1"/>'
				. '<circle cx="12" cy="19" r="1"/>',
		],
		'external-link' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M15 3h6v6"/>'
				. '<path d="M10 14 21 3"/>'
				. '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
		],
		'edit' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>'
				. '<path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
		],
		'trash' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M10 11v6"/>'
				. '<path d="M14 11v6"/>'
				. '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>'
				. '<path d="M3 6h18"/>'
				. '<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
		],
		'copy' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>'
				. '<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
		],
		'send' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M22 2L11 13"/>'
				. '<path d="M22 2l-7 20-4-9-9-4z"/>',
		],
		'message-check' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>'
				. '<path d="m9 12 2 2 4-4"/>',
		],
		'check' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<polyline points="20 6 9 17 4 12"/>',
		],
		'reply' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>'
				. '<path d="m10 15-3-3 3-3"/>'
				. '<path d="M7 12h8a2 2 0 0 1 2 2v1"/>',
		],

		'emoji-add' => [
			'viewBox' => '0 0 24 24',
			'paint'   => 'stroke',
			'content' => '<path d="M22 11v1a10 10 0 1 1-9-10"/>'
				. '<path d="M8 14s1.5 2 4 2 4-2 4-2"/>'
				. '<line x1="9" x2="9.01" y1="9" y2="9"/>'
				. '<line x1="15" x2="15.01" y1="9" y2="9"/>'
				. '<path d="M16 5h6"/>'
				. '<path d="M19 2v6"/>',
		],
	];

	public static function register(): void {
		add_action( 'wp_body_open', [ self::class, 'render_sprite' ] );
	}

	public static function render_sprite(): void {
		echo '<svg xmlns="http://www.w3.org/2000/svg" class="heyfam-icon-sprite" aria-hidden="true" focusable="false">';

		// Texture filters. Referenced from CSS via `filter: url(#hf-torn)` etc.
		// Higher baseFrequency = smaller noise pattern = more jagged/torn look
		// (vs lower freq, which gives smooth fluid waves). Seeds are fixed so
		// edges stay stable across reloads.
		//
		//   hf-torn      — construction-paper torn edge for buttons, chips.
		//   hf-torn-soft — gentler torn edge for large surfaces (cards, modals).
		//   hf-pencil    — light wobble that reads as a hand-drawn pencil line,
		//                  for inputs and form controls.
		echo '<defs>'
			// Torn paper — fractalNoise at LOW base frequency creates the big
			// irregular tear bumps; high numOctaves layers in finer fiber detail
			// on top (octaves run at 2x, 4x, 8x the base). Scale is large
			// because the displacement is the main tear shape, not just fringe.
			. '<filter id="hf-torn" x="-15%" y="-15%" width="130%" height="130%">'
			.   '<feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="4" seed="3"/>'
			.   '<feDisplacementMap in="SourceGraphic" scale="5"/>'
			. '</filter>'
			. '<filter id="hf-torn-soft" x="-8%" y="-8%" width="116%" height="116%">'
			.   '<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="5"/>'
			.   '<feDisplacementMap in="SourceGraphic" scale="3"/>'
			. '</filter>'
			// Pencil — tight, light wobble that reads as a drawn line.
			. '<filter id="hf-pencil" x="-4%" y="-4%" width="108%" height="108%">'
			.   '<feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="7"/>'
			.   '<feDisplacementMap in="SourceGraphic" scale="1.2"/>'
			. '</filter>'
			// Pencil wacky — large irregular bumps for big card outlines, so
			// the frames feel obviously hand-sketched, not just slightly off.
			. '<filter id="hf-pencil-wacky" x="-6%" y="-6%" width="112%" height="112%">'
			.   '<feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="9"/>'
			.   '<feDisplacementMap in="SourceGraphic" scale="4"/>'
			. '</filter>'
			. '</defs>';

		foreach ( self::ICONS as $name => $def ) {
			$paint_attrs = $def['paint'] === 'stroke'
				? 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'
				: 'fill="currentColor"';
			printf(
				'<symbol id="hfi-%s" viewBox="%s" %s>%s</symbol>',
				esc_attr( $name ),
				esc_attr( $def['viewBox'] ),
				$paint_attrs, // safe — hardcoded strings
				$def['content'] // safe — hardcoded SVG markup, never user input
			);
		}
		echo '</svg>';
	}

	/** Names of every registered icon. Used by the design system reference page. */
	public static function names(): array {
		return array_keys( self::ICONS );
	}
}
