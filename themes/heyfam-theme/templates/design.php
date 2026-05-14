<?php
/**
 * Design system reference page — public, served at /design.
 *
 * Reads theme.json directly so tokens stay in sync automatically. Add a new
 * color/spacing/shadow to theme.json and it shows up here on the next load.
 */
defined( 'ABSPATH' ) || exit;

$theme_json_path = get_theme_file_path( 'theme.json' );
$tj              = file_exists( $theme_json_path )
    ? (array) json_decode( (string) file_get_contents( $theme_json_path ), true )
    : [];
$settings        = $tj['settings'] ?? [];

$palette  = $settings['color']['palette']           ?? [];
$sizes    = $settings['typography']['fontSizes']    ?? [];
$spaces   = $settings['spacing']['spacingSizes']    ?? [];
$shadows  = $settings['shadow']['presets']          ?? [];
$radii    = $settings['custom']['radius']           ?? [];
$weights  = $settings['custom']['fontWeight']       ?? [];
$lines    = $settings['custom']['lineHeight']       ?? [];
$mo_dur   = $settings['custom']['motion']['duration'] ?? [];
$mo_ease  = $settings['custom']['motion']['easing']   ?? [];

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Design System — HeyFam</title>
<?php wp_head(); ?>
<style>
/* Page-only layout, scoped to .heyfam-design. */
.heyfam-design-page { background: var(--hf-color-bg); color: var(--hf-color-fg); }
.heyfam-design { max-width: 960px; margin-inline: auto; padding: var(--hf-space-5) var(--hf-space-4) var(--hf-space-7); display: grid; gap: var(--hf-space-7); }
.heyfam-design__head { display: flex; align-items: baseline; justify-content: space-between; gap: var(--hf-space-4); padding-block-end: var(--hf-space-3); border-bottom: 1px solid var(--hf-color-border); }
.heyfam-design__head h1 { margin: 0; font-size: var(--hf-font-size-xxl); }
.heyfam-design__head nav { display: flex; flex-wrap: wrap; gap: var(--hf-space-2); font-size: var(--hf-font-size-sm); }
.heyfam-design__head nav a { color: var(--hf-color-fg-muted); text-decoration: none; }
.heyfam-design__head nav a:hover { color: var(--hf-color-accent); }

.heyfam-design section { display: grid; gap: var(--hf-space-4); }
.heyfam-design h2 { margin: 0; font-size: var(--hf-font-size-xl); }
.heyfam-design h3 { margin: 0; font-size: var(--hf-font-size-md); color: var(--hf-color-fg-muted); font-weight: var(--hf-font-weight-medium); }
.heyfam-design code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: var(--hf-font-size-xs); color: var(--hf-color-fg-muted); background: var(--hf-color-bg); padding: 0.05rem 0.35rem; border-radius: var(--hf-radius-sm); }

.hd-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--hf-space-3); }
.hd-row  { display: flex; flex-wrap: wrap; gap: var(--hf-space-3); align-items: center; }
.hd-stack{ display: grid; gap: var(--hf-space-2); }

/* Color swatches */
.hd-swatch { display: grid; gap: var(--hf-space-1); padding: var(--hf-space-2); border: 1px solid var(--hf-color-border); border-radius: var(--hf-radius-md); background: var(--hf-color-bg); }
.hd-swatch__chip { height: 64px; border-radius: var(--hf-radius-sm); border: 1px solid var(--hf-color-border); }
.hd-swatch strong { font-size: var(--hf-font-size-sm); }

/* Type samples */
.hd-type-row { display: grid; grid-template-columns: 6rem 1fr auto; gap: var(--hf-space-3); align-items: baseline; padding-block: var(--hf-space-2); border-bottom: 1px dashed var(--hf-color-border); }
.hd-type-row:last-child { border-bottom: 0; }

/* Spacing */
.hd-space-row { display: grid; grid-template-columns: 4rem 1fr auto; gap: var(--hf-space-3); align-items: center; padding-block: var(--hf-space-1); }
.hd-space-bar { height: 14px; background: var(--hf-color-accent); border-radius: var(--hf-radius-sm); }

/* Radius / shadow tiles */
.hd-tile { width: 120px; height: 120px; background: var(--hf-color-bg); border: 1px solid var(--hf-color-border); display: grid; place-items: center; font-size: var(--hf-font-size-xs); color: var(--hf-color-fg-muted); }

/* Motion */
.hd-motion-row { display: grid; grid-template-columns: 9rem 9rem auto; gap: var(--hf-space-3); align-items: center; padding-block: var(--hf-space-1); }
.hd-motion-dot { width: 18px; height: 18px; border-radius: var(--hf-radius-pill); background: var(--hf-color-accent); transition: transform var(--hf-motion-normal) var(--hf-ease-standard); }
.hd-motion-track { position: relative; height: 18px; background: var(--hf-color-border); border-radius: var(--hf-radius-pill); }
.hd-motion-track:hover .hd-motion-dot { transform: translateX(calc(100% - 18px)); }

/* Component lab cells */
.hd-cell { padding: var(--hf-space-4); border: 1px solid var(--hf-color-border); border-radius: var(--hf-radius-lg); background: var(--hf-color-bg); display: grid; gap: var(--hf-space-3); }
.hd-cell h3 { margin-bottom: var(--hf-space-1); }
.hd-cell__meta { font-size: var(--hf-font-size-xs); color: var(--hf-color-fg-muted); }

/* Icon grid */
.hd-icon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: var(--hf-space-3); }
.hd-icon-cell { display: grid; place-items: center; gap: var(--hf-space-2); padding: var(--hf-space-3); border: 1px solid var(--hf-color-border); border-radius: var(--hf-radius-md); }
.hd-icon-cell .hf-icon { color: var(--hf-color-fg); }

/* Button matrix */
.hd-button-matrix { width: 100%; border-collapse: collapse; }
.hd-button-matrix th { text-align: left; font-weight: var(--hf-font-weight-medium); font-size: var(--hf-font-size-sm); color: var(--hf-color-fg-muted); padding: var(--hf-space-2) var(--hf-space-3); border-bottom: 1px solid var(--hf-color-border); }
.hd-button-matrix tbody th { font-weight: var(--hf-font-weight-semibold); color: var(--hf-color-fg); width: 8rem; }
.hd-button-matrix td { padding: var(--hf-space-2) var(--hf-space-3); border-bottom: 1px solid var(--hf-color-border); }
.hd-button-matrix tr:last-child th, .hd-button-matrix tr:last-child td { border-bottom: 0; }
</style>
</head>
<body <?php body_class( 'heyfam-design-page' ); ?>>
<?php wp_body_open(); ?>

<main class="heyfam-design">

  <header class="heyfam-design__head">
    <div>
      <h1>HeyFam Design System</h1>
      <p class="hd-cell__meta">Generated from <code>theme.json</code> + <code>tokens.css</code>. Visit <code>/design</code> any time.</p>
    </div>
    <nav>
      <a href="#color">Color</a>
      <a href="#type">Type</a>
      <a href="#space">Space</a>
      <a href="#radius">Radius</a>
      <a href="#shadow">Shadow</a>
      <a href="#motion">Motion</a>
      <a href="#icons">Icons</a>
      <a href="#buttons">Buttons</a>
      <a href="#fields">Fields</a>
      <a href="#cards">Cards</a>
      <a href="#avatars">Avatars</a>
      <a href="#tooltip">Tooltip</a>
      <a href="#feedback">Feedback</a>
    </nav>
  </header>

  <!-- ===================================================== TOKENS -->

  <section id="color">
    <h2>Color</h2>
    <div class="hd-grid">
      <?php foreach ( $palette as $c ) :
          $slug = $c['slug'] ?? '';
          $name = $c['name'] ?? $slug;
          $hex  = $c['color'] ?? '';
      ?>
        <article class="hd-swatch">
          <div class="hd-swatch__chip" style="background: <?php echo esc_attr( $hex ); ?>"></div>
          <strong><?php echo esc_html( $name ); ?></strong>
          <code>--hf-color-<?php echo esc_html( $slug ); ?></code>
          <code><?php echo esc_html( $hex ); ?></code>
        </article>
      <?php endforeach; ?>
    </div>
  </section>

  <section id="type">
    <h2>Type scale</h2>
    <div>
      <?php foreach ( $sizes as $s ) :
          $slug = $s['slug'] ?? '';
          $name = $s['name'] ?? $slug;
          $size = $s['size'] ?? '';
      ?>
        <div class="hd-type-row">
          <code>--hf-font-size-<?php echo esc_html( $slug ); ?></code>
          <span style="font-size: <?php echo esc_attr( $size ); ?>; line-height: var(--hf-line-height-tight);">The quick brown fox</span>
          <code><?php echo esc_html( $size ); ?></code>
        </div>
      <?php endforeach; ?>
    </div>

    <h3>Weights</h3>
    <div class="hd-row">
      <?php foreach ( $weights as $key => $val ) : ?>
        <div class="hd-stack" style="text-align: center;">
          <span style="font-weight: <?php echo esc_attr( $val ); ?>; font-size: var(--hf-font-size-lg);">Aa</span>
          <code><?php echo esc_html( $key ); ?> · <?php echo esc_html( $val ); ?></code>
        </div>
      <?php endforeach; ?>
    </div>

    <h3>Line heights</h3>
    <div class="hd-row">
      <?php foreach ( $lines as $key => $val ) : ?>
        <div class="hd-stack" style="max-width: 220px;">
          <span style="line-height: <?php echo esc_attr( $val ); ?>; font-size: var(--hf-font-size-sm);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
          <code><?php echo esc_html( $key ); ?> · <?php echo esc_html( $val ); ?></code>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <section id="space">
    <h2>Spacing</h2>
    <div>
      <?php foreach ( $spaces as $s ) :
          $slug = $s['slug'] ?? '';
          $size = $s['size'] ?? '';
      ?>
        <div class="hd-space-row">
          <code>--hf-space-<?php echo esc_html( $slug ); ?></code>
          <div class="hd-space-bar" style="width: <?php echo esc_attr( $size ); ?>;"></div>
          <code><?php echo esc_html( $size ); ?></code>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <section id="radius">
    <h2>Radius</h2>
    <div class="hd-row">
      <?php foreach ( $radii as $key => $val ) : ?>
        <div class="hd-stack" style="text-align: center;">
          <div class="hd-tile" style="border-radius: <?php echo esc_attr( $val ); ?>;"></div>
          <code><?php echo esc_html( $key ); ?> · <?php echo esc_html( $val ); ?></code>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <section id="shadow">
    <h2>Shadow</h2>
    <div class="hd-row">
      <?php foreach ( $shadows as $s ) :
          $slug = $s['slug']   ?? '';
          $name = $s['name']   ?? $slug;
          $val  = $s['shadow'] ?? '';
      ?>
        <div class="hd-stack" style="text-align: center;">
          <div class="hd-tile" style="box-shadow: <?php echo esc_attr( $val ); ?>; border-color: transparent;"></div>
          <code><?php echo esc_html( $name ); ?></code>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

  <section id="motion">
    <h2>Motion</h2>
    <p class="hd-cell__meta">Hover any track to play the animation.</p>
    <div>
      <?php foreach ( $mo_dur as $d_key => $d_val ) : ?>
        <?php foreach ( $mo_ease as $e_key => $e_val ) : ?>
          <div class="hd-motion-row">
            <code><?php echo esc_html( $d_key ); ?> · <?php echo esc_html( $d_val ); ?></code>
            <code><?php echo esc_html( $e_key ); ?></code>
            <div class="hd-motion-track">
              <div class="hd-motion-dot" style="transition-duration: <?php echo esc_attr( $d_val ); ?>; transition-timing-function: <?php echo esc_attr( $e_val ); ?>;"></div>
            </div>
          </div>
        <?php endforeach; ?>
      <?php endforeach; ?>
    </div>
  </section>

  <!-- ===================================================== COMPONENTS -->

  <section id="icons">
    <h2>Icons</h2>
    <p class="hd-cell__meta">
      Defined centrally in <code>plugins/heyfam-core/src/UI/Icons.php</code> and emitted once per page as an inline SVG sprite. Use anywhere with
      <code>&lt;svg class="hf-icon" width="16" height="16"&gt;&lt;use href="#hfi-NAME"/&gt;&lt;/svg&gt;</code>.
      The icon inherits <code>color</code> for stroke-style icons and fill-style icons alike.
    </p>
    <div class="hd-icon-grid">
      <?php if ( class_exists( '\\HeyFam\\Core\\UI\\Icons' ) ) :
          foreach ( \HeyFam\Core\UI\Icons::names() as $name ) : ?>
            <div class="hd-icon-cell">
              <svg class="hf-icon" width="24" height="24" aria-hidden="true"><use href="#hfi-<?php echo esc_attr( $name ); ?>"></use></svg>
              <code><?php echo esc_html( $name ); ?></code>
            </div>
      <?php endforeach; endif; ?>
    </div>
  </section>

  <section id="buttons">
    <h2>Buttons</h2>
    <p class="hd-cell__meta">
      Two axes compose freely. <strong>Variant</strong>: <code>--primary</code> (filled), <code>--secondary</code> (border, no fill), <code>--tertiary</code> (no border, no fill), <code>--danger</code> (filled red). <strong>Size</strong>: default is 2.5rem, add <code>--sm</code> for 1.75rem. Add <code>--icon</code> for square icon-only. <code>--block</code> for 100% width.
    </p>

    <div class="hd-cell">
      <h3>Normal — variants &amp; states</h3>
      <table class="hd-button-matrix">
        <thead>
          <tr><th></th><th>Default</th><th>Disabled</th><th>Icon-only</th></tr>
        </thead>
        <tbody>
          <tr>
            <th>Primary</th>
            <td><button class="heyfam-button heyfam-button--primary">Save</button></td>
            <td><button class="heyfam-button heyfam-button--primary" disabled>Save</button></td>
            <td><button class="heyfam-button heyfam-button--primary heyfam-button--icon" aria-label="Send" data-tooltip="Send"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg></button></td>
          </tr>
          <tr>
            <th>Secondary</th>
            <td><button class="heyfam-button heyfam-button--secondary">Cancel</button></td>
            <td><button class="heyfam-button heyfam-button--secondary" disabled>Cancel</button></td>
            <td><button class="heyfam-button heyfam-button--secondary heyfam-button--icon" aria-label="Settings" data-tooltip="Settings"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button></td>
          </tr>
          <tr>
            <th>Tertiary</th>
            <td><button class="heyfam-button heyfam-button--tertiary">Reset</button></td>
            <td><button class="heyfam-button heyfam-button--tertiary" disabled>Reset</button></td>
            <td><button class="heyfam-button heyfam-button--tertiary heyfam-button--icon" aria-label="More" data-tooltip="More"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></td>
          </tr>
          <tr>
            <th>Danger</th>
            <td><button class="heyfam-button heyfam-button--danger">Delete</button></td>
            <td><button class="heyfam-button heyfam-button--danger" disabled>Delete</button></td>
            <td><button class="heyfam-button heyfam-button--danger heyfam-button--icon" aria-label="Delete" data-tooltip="Delete"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg></button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hd-cell">
      <h3>Small — variants &amp; states (add <code>--sm</code>)</h3>
      <table class="hd-button-matrix">
        <thead>
          <tr><th></th><th>Default</th><th>Disabled</th><th>Icon-only</th></tr>
        </thead>
        <tbody>
          <tr>
            <th>Primary</th>
            <td><button class="heyfam-button heyfam-button--primary heyfam-button--sm">Save</button></td>
            <td><button class="heyfam-button heyfam-button--primary heyfam-button--sm" disabled>Save</button></td>
            <td><button class="heyfam-button heyfam-button--primary heyfam-button--sm heyfam-button--icon" aria-label="Send" data-tooltip="Send"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg></button></td>
          </tr>
          <tr>
            <th>Secondary</th>
            <td><button class="heyfam-button heyfam-button--secondary heyfam-button--sm">Cancel</button></td>
            <td><button class="heyfam-button heyfam-button--secondary heyfam-button--sm" disabled>Cancel</button></td>
            <td><button class="heyfam-button heyfam-button--secondary heyfam-button--sm heyfam-button--icon" aria-label="Settings" data-tooltip="Settings"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/></svg></button></td>
          </tr>
          <tr>
            <th>Tertiary</th>
            <td><button class="heyfam-button heyfam-button--tertiary heyfam-button--sm">Reset</button></td>
            <td><button class="heyfam-button heyfam-button--tertiary heyfam-button--sm" disabled>Reset</button></td>
            <td><button class="heyfam-button heyfam-button--tertiary heyfam-button--sm heyfam-button--icon" aria-label="More" data-tooltip="More"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></td>
          </tr>
          <tr>
            <th>Danger</th>
            <td><button class="heyfam-button heyfam-button--danger heyfam-button--sm">Delete</button></td>
            <td><button class="heyfam-button heyfam-button--danger heyfam-button--sm" disabled>Delete</button></td>
            <td><button class="heyfam-button heyfam-button--danger heyfam-button--sm heyfam-button--icon" aria-label="Delete" data-tooltip="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/></svg></button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="hd-cell">
      <h3>Toggled (tertiary + <code>.is-active</code>)</h3>
      <div class="hd-row">
        <button class="heyfam-button heyfam-button--tertiary is-active">Mode on</button>
        <button class="heyfam-button heyfam-button--tertiary heyfam-button--sm is-active">Sm on</button>
        <button class="heyfam-button heyfam-button--tertiary heyfam-button--icon is-active" aria-label="Active" data-tooltip="Toggled"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></button>
      </div>
    </div>

    <div class="hd-cell">
      <h3>Block</h3>
      <button class="heyfam-button heyfam-button--primary heyfam-button--block">Full-width primary</button>
      <p class="hd-cell__meta">Add <code>--block</code> for 100% width — only on dedicated CTAs (signup submit, etc.).</p>
    </div>
  </section>

  <section id="fields">
    <h2>Form fields</h2>

    <div class="hd-cell">
      <h3>Input</h3>
      <label class="heyfam-field">
        <span class="heyfam-field__label">Label</span>
        <input class="heyfam-input" type="text" placeholder="Placeholder text" />
        <span class="heyfam-field__hint">Hint text helps clarify what to enter.</span>
      </label>

      <label class="heyfam-field">
        <span class="heyfam-field__label">With error</span>
        <input class="heyfam-input" type="text" value="Bad value" />
        <span class="heyfam-field__error">Something's not right with this.</span>
      </label>
    </div>

    <div class="hd-cell">
      <h3>Textarea</h3>
      <textarea class="heyfam-textarea" rows="3" placeholder="Multiline text…"></textarea>
    </div>
  </section>

  <section id="cards">
    <h2>Cards</h2>
    <div class="hd-row" style="align-items: stretch;">
      <article class="heyfam-card" style="flex: 1; min-width: 220px;">
        <strong>Base card</strong>
        <p class="hd-cell__meta">Default <code>.heyfam-card</code>.</p>
      </article>
      <article class="heyfam-card heyfam-card--tight" style="flex: 1; min-width: 220px;">
        <strong>Tight card</strong>
        <p class="hd-cell__meta">Adds <code>--tight</code> for compact padding.</p>
      </article>
    </div>
  </section>

  <section id="avatars">
    <h2>Avatars</h2>
    <div class="hd-row">
      <div class="hd-stack" style="text-align: center;">
        <span class="heyfam-avatar" style="background: var(--hf-color-accent); color: var(--hf-color-accent-fg); display: inline-grid; place-items: center; font-weight: var(--hf-font-weight-semibold);">S</span>
        <code>default · 32px</code>
      </div>
      <div class="hd-stack" style="text-align: center;">
        <span class="heyfam-avatar heyfam-avatar--lg" style="background: var(--hf-color-accent); color: var(--hf-color-accent-fg); display: inline-grid; place-items: center; font-weight: var(--hf-font-weight-semibold);">S</span>
        <code>--lg · 48px</code>
      </div>
      <div class="hd-stack" style="text-align: center;">
        <span class="heyfam-avatar heyfam-avatar--square" style="background: var(--hf-color-accent); color: var(--hf-color-accent-fg); display: inline-grid; place-items: center; font-weight: var(--hf-font-weight-semibold);">S</span>
        <code>--square</code>
      </div>
    </div>
  </section>

  <section id="tooltip">
    <h2>Tooltip</h2>
    <div class="hd-cell">
      <h3>Usage</h3>
      <p class="hd-cell__meta">Add <code>data-tooltip="..."</code> to any element. Reveals on hover and keyboard focus. Empty values render nothing, so reactive bindings can switch a tooltip off by setting an empty string.</p>
      <div class="hd-row" style="padding-block: var(--hf-space-3);">
        <button class="heyfam-button heyfam-button--icon" aria-label="Add" data-tooltip="Add">+</button>
        <button class="heyfam-button heyfam-button--secondary" data-tooltip="Saves your changes">Save</button>
        <span data-tooltip="Pull up a chair" style="text-decoration: underline dotted; cursor: help;">Hover this text</span>
      </div>
    </div>
  </section>

  <section id="feedback">
    <h2>Feedback &amp; status</h2>

    <div class="hd-cell">
      <h3>Spinner</h3>
      <div class="hd-row" style="align-items: center;"><span class="heyfam-spinner"></span> <code>.heyfam-spinner</code></div>
    </div>

    <div class="hd-cell">
      <h3>Empty state</h3>
      <div class="heyfam-empty-state">
        <strong class="heyfam-empty-state__title">Nothing here yet</strong>
        <p>Posts your fam shares will appear in this space.</p>
      </div>
    </div>

    <div class="hd-cell">
      <h3>Toast</h3>
      <div class="heyfam-toast" style="position: static; transform: none; animation: none; display: inline-block;">Saved.</div>
      <p class="hd-cell__meta">In production this floats from <code>.heyfam-toast</code>; shown statically here.</p>
    </div>

    <div class="hd-cell">
      <h3>Modal (static preview)</h3>
      <div class="heyfam-modal" style="position: static; background: transparent; padding: 0;">
        <div class="heyfam-modal__dialog">
          <h3 style="margin: 0;">Confirm</h3>
          <p style="margin: 0; color: var(--hf-color-fg-muted);">Are you sure you want to leave this fam?</p>
          <div style="display: flex; gap: var(--hf-space-2); justify-content: end;">
            <button class="heyfam-button heyfam-button--tertiary">Cancel</button>
            <button class="heyfam-button heyfam-button--danger">Leave fam</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<?php wp_footer(); ?>
</body>
</html>
