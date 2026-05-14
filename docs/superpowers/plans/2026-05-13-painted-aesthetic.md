# Painted Aesthetic Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace HeyFam's sage-green palette with a vibrant blue/cream/ink palette and apply a reusable "painted on paper" texture system (SVG filter + paper grain) across buttons, inputs, cards, chips, and surfaces.

**Architecture:** Token-driven. Palette lives in `theme.json` and flows into `tokens.css` semantic aliases. Texture is delivered as two SVG `<filter>` defs (emitted once in the existing `Icons.php` sprite) plus a paper-grain data-URI, exposed via CSS tokens (`--hf-filter-painted*`, `--hf-bg-paper`) and three utility classes (`.hf-painted`, `.hf-painted-soft`, `.hf-paper`). Component selectors apply filters directly. Focus rings convert from outside-positioned `outline` to inset `box-shadow` so they survive filter clipping.

**Tech Stack:** WordPress block theme (`theme.json`), vanilla CSS (tokens → semantic → components), PHP (Icons sprite). No JS, no build step for CSS — files are enqueued directly.

**Spec:** `docs/superpowers/specs/2026-05-13-painted-aesthetic-design.md`

**Verification model:** This is a visual/CSS feature, so each task's verification is a manual browser check (the design system reference at `/design` shows tokens + every component in one page). The user is running Studio CLI locally with the repo symlinked into `~/Studio/heyfam/wp-content` — file edits go live on the next page reload.

---

## File Structure

| File                                                | Responsibility                                                        |
|-----------------------------------------------------|-----------------------------------------------------------------------|
| `themes/heyfam-theme/theme.json`                    | Source-of-truth palette + 2 new slugs (`accent-strong`, `sky`).       |
| `themes/heyfam-theme/src/styles/tokens.css`         | Semantic alias layer + dark-mode rebind + 3 new texture tokens.       |
| `themes/heyfam-theme/src/styles/base.css`           | Body bg, utility classes, global `:focus-visible` rewrite.            |
| `themes/heyfam-theme/src/styles/components.css`     | Apply painted filters to component selectors, hover refactor, composer focus rewrite, auth/gallery focus override cleanup. |
| `plugins/heyfam-core/src/UI/Icons.php`              | Emit the two `<filter>` defs alongside the existing icon `<symbol>`s. |

---

## Task 1: Palette swap in theme.json

**Files:**
- Modify: `themes/heyfam-theme/theme.json` (color.palette block, lines ~7-19)

- [ ] **Step 1: Rewrite the palette block**

Replace the `"palette"` array inside `settings.color`:

```json
"palette": [
  { "slug": "background",        "name": "Background",         "color": "#fff7e0" },
  { "slug": "foreground",        "name": "Foreground",         "color": "#111827" },
  { "slug": "foreground-muted",  "name": "Foreground Muted",   "color": "#4b5563" },
  { "slug": "foreground-subtle", "name": "Foreground Subtle",  "color": "#9ca3af" },
  { "slug": "border",            "name": "Border",             "color": "#e8dfc4" },
  { "slug": "border-strong",     "name": "Border Strong",      "color": "#d4c9a8" },
  { "slug": "accent",            "name": "Accent",             "color": "#2563eb" },
  { "slug": "accent-foreground", "name": "Accent Foreground",  "color": "#fff7e0" },
  { "slug": "accent-strong",     "name": "Accent Strong",      "color": "#1e3a8a" },
  { "slug": "accent-soft",       "name": "Accent Soft",        "color": "#dbeafe" },
  { "slug": "sky",               "name": "Sky",                "color": "#60a5fa" },
  { "slug": "danger",            "name": "Danger",             "color": "#ff8a3d" },
  { "slug": "success",           "name": "Success",            "color": "#22c55e" }
]
```

- [ ] **Step 2: Verify in browser**

Reload `/design` (the design system reference page). The Color section should now show 13 swatches in the new palette. Verify each slug name matches a swatch with the right hex.

- [ ] **Step 3: Commit**

```bash
git add themes/heyfam-theme/theme.json
git commit -m "Swap palette to blue/cream/ink"
```

---

## Task 2: Token aliases, texture tokens, dark mode

**Files:**
- Modify: `themes/heyfam-theme/src/styles/tokens.css` (full file rewrite of the alias + dark-mode blocks)

- [ ] **Step 1: Add `--hf-color-accent-strong` and `--hf-color-sky` to the alias block**

In `tokens.css`, under "Color — semantic aliases" (lines 15-26), add after `--hf-color-accent-soft`:

```css
--hf-color-accent-strong: var(--wp--preset--color--accent-strong);
--hf-color-sky:           var(--wp--preset--color--sky);
```

- [ ] **Step 2: Add texture tokens to the `:root` block**

At the end of the `:root` block (after the `Avatar` section), add a new block:

```css
/* Texture — painted edges + paper grain.
 * Filter IDs are emitted into the inline SVG sprite by Icons.php.
 * Paper grain is a single SVG tile inlined as a data-URI.
 */
--hf-filter-painted:      url('#hf-paint');
--hf-filter-painted-soft: url('#hf-paint-soft');
--hf-bg-paper: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7'/><feColorMatrix values='0 0 0 0 0.15  0 0 0 0 0.12  0 0 0 0 0.09  0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23g)'/></svg>");
```

Note the URL-encoded `%23` for `#` inside the inner `url(#g)` reference — required so the browser parses the data-URI correctly. The outer filter token (`url('#hf-paint')`) is a normal fragment reference and does NOT need encoding.

- [ ] **Step 3: Rewrite the dark-mode block**

Replace the entire `@media (prefers-color-scheme: dark)` block at the bottom of `tokens.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --hf-color-bg:            #0f172a;
    --hf-color-fg:            #fff7e0;
    --hf-color-fg-muted:      #c9cfa9;
    --hf-color-fg-subtle:     #8a8e70;
    --hf-color-border:        #1e293b;
    --hf-color-border-strong: #334155;
    --hf-color-accent:        #60a5fa;
    --hf-color-accent-fg:     #0f172a;
    --hf-color-accent-strong: #2563eb;
    --hf-color-accent-soft:   #1e3a8a;
    --hf-color-sky:           #93c5fd;
    --hf-color-danger:        #ffb07d;
    --hf-color-success:       #4ade80;
    --hf-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --hf-shadow-md: 0 6px 16px rgba(0, 0, 0, 0.35);
    --hf-shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
  }
}
```

- [ ] **Step 4: Bump CSS version for cache-bust**

Open `themes/heyfam-theme/functions.php` and change all three `wp_enqueue_style` version strings from `'0.2.0'` to `'0.3.0'` (lines 48, 54, 60). This forces fresh CSS download.

- [ ] **Step 5: Verify in browser**

Hard-reload any page (Cmd+Shift+R). Visit `/design`. Body should now be warm cream. Text should be ink. No console errors. Painted filter not visible yet (Task 3 adds the filter defs).

- [ ] **Step 6: Commit**

```bash
git add themes/heyfam-theme/src/styles/tokens.css themes/heyfam-theme/functions.php
git commit -m "Add texture tokens, accent-strong/sky aliases, ink-paper dark mode"
```

---

## Task 3: Emit painted filter defs in the icon sprite

**Files:**
- Modify: `plugins/heyfam-core/src/UI/Icons.php` (the `render_sprite` method, lines 122-137)

- [ ] **Step 1: Add `<defs>` block to `render_sprite`**

Replace the body of `render_sprite()`:

```php
public static function render_sprite(): void {
    echo '<svg xmlns="http://www.w3.org/2000/svg" class="heyfam-icon-sprite" aria-hidden="true" focusable="false">';

    // Painted-edge filters. Referenced from CSS via `filter: url(#hf-paint)`
    // and `filter: url(#hf-paint-soft)`. Seed is fixed so the painted edge
    // stays stable across reloads (no shimmer).
    echo '<defs>'
        . '<filter id="hf-paint" x="-5%" y="-5%" width="110%" height="110%">'
        .   '<feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3"/>'
        .   '<feDisplacementMap in="SourceGraphic" scale="3"/>'
        . '</filter>'
        . '<filter id="hf-paint-soft" x="-3%" y="-3%" width="106%" height="106%">'
        .   '<feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="5"/>'
        .   '<feDisplacementMap in="SourceGraphic" scale="1.5"/>'
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
```

- [ ] **Step 2: Verify in browser**

Reload any page. Inspect the DOM — at the top of `<body>` there should be an `<svg class="heyfam-icon-sprite">` containing `<defs><filter id="hf-paint">…</filter><filter id="hf-paint-soft">…</filter></defs>` followed by the existing `<symbol>` icons. No layout change yet (no element references the filter yet).

- [ ] **Step 3: Commit**

```bash
git add plugins/heyfam-core/src/UI/Icons.php
git commit -m "Emit painted-edge SVG filters in icon sprite"
```

---

## Task 4: Paper texture on body + utility classes + focus ring rewrite

**Files:**
- Modify: `themes/heyfam-theme/src/styles/base.css`

- [ ] **Step 1: Apply paper grain to `body`**

Replace the existing `body` rule (lines 19-28):

```css
body {
  margin: 0;
  font-family: var(--hf-font-family);
  font-size: var(--hf-font-size-md);
  line-height: var(--hf-line-height-normal);
  color: var(--hf-color-fg);
  background-color: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

- [ ] **Step 2: Rewrite global `:focus-visible` to inset box-shadow**

Replace the existing `:focus-visible` rule (lines 45-49):

```css
:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 var(--hf-focus-width) var(--hf-color-sky);
  border-radius: var(--hf-radius-sm);
}
```

- [ ] **Step 3: Add utility classes at the bottom of base.css**

Append to the file:

```css
/* Texture utilities — apply the painted/paper aesthetic to any element.
 * Component CSS uses the same tokens directly; these classes exist so
 * one-off elements, custom blocks, or third-party widgets can opt in
 * without touching shared rules.
 */
.hf-painted      { filter: var(--hf-filter-painted); }
.hf-painted-soft { filter: var(--hf-filter-painted-soft); }
.hf-paper {
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
}
```

- [ ] **Step 4: Verify in browser**

Reload `/design`. The body should now show the warm cream + subtle paper grain. Tab through any input/button — focus shows as a Sky Blue inset ring on the inside of the element (not outside). No painted edges yet on components.

- [ ] **Step 5: Commit**

```bash
git add themes/heyfam-theme/src/styles/base.css
git commit -m "Paper grain on body, utility classes, inset focus rings"
```

---

## Task 5: Apply painted filters across components

**Files:**
- Modify: `themes/heyfam-theme/src/styles/components.css`

This task applies the painted filter to every component selector listed in spec §3. Work through the sub-sections in order; commit at the end.

- [ ] **Step 1: Buttons — apply filter, refactor hover**

Replace the Button section (lines 26-102 — from `.heyfam-button {` through the `.heyfam-button.is-active` rule):

```css
.heyfam-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--hf-space-2);
  border: 1px solid transparent;
  border-radius: var(--hf-radius-md);
  height: 2.5rem;
  padding-inline: var(--hf-space-4);
  font: inherit;
  font-weight: var(--hf-font-weight-medium);
  line-height: var(--hf-line-height-tight);
  cursor: pointer;
  background: transparent;
  color: var(--hf-color-fg);
  filter: var(--hf-filter-painted);
  transition:
    background-color var(--hf-motion-fast) var(--hf-ease-standard),
    color            var(--hf-motion-fast) var(--hf-ease-standard),
    border-color     var(--hf-motion-fast) var(--hf-ease-standard),
    transform        var(--hf-motion-fast) var(--hf-ease-standard);
  user-select: none;
  -webkit-appearance: none;
}
.heyfam-button:hover   { transform: scale(1.02); }
.heyfam-button:active  { transform: scale(0.97); }
.heyfam-button:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

/* Variants */
.heyfam-button--primary {
  background: var(--hf-color-accent);
  color: var(--hf-color-accent-fg);
}
.heyfam-button--primary:hover { background: var(--hf-color-accent-strong); }

.heyfam-button--secondary {
  background: transparent;
  border-color: var(--hf-color-border-strong);
  color: var(--hf-color-fg);
}
.heyfam-button--secondary:hover { border-color: var(--hf-color-fg-muted); }

.heyfam-button--tertiary {
  background: transparent;
  color: var(--hf-color-fg-muted);
}
.heyfam-button--tertiary:hover { color: var(--hf-color-fg); background: var(--hf-color-accent-soft); }

.heyfam-button--danger {
  background: var(--hf-color-danger);
  color: #fff;
}
.heyfam-button--danger:hover { background: color-mix(in srgb, var(--hf-color-danger) 88%, var(--hf-color-fg)); }

/* Sizes */
.heyfam-button--sm {
  height: 1.75rem;
  padding-inline: var(--hf-space-3);
  font-size: var(--hf-font-size-sm);
  gap: var(--hf-space-1);
}

/* Shape: icon-only (square, no horizontal padding) */
.heyfam-button--icon {
  width: 2.5rem;
  padding-inline: 0;
}
.heyfam-button--icon.heyfam-button--sm {
  width: 1.75rem;
}

/* Modifiers */
.heyfam-button--block { width: 100%; }

/* Toggled state — used by tertiary toggles. */
.heyfam-button.is-active {
  color: var(--hf-color-accent);
  background: var(--hf-color-accent-soft);
}
```

- [ ] **Step 2: Inputs and textareas — apply filter**

Replace the input/textarea rules (lines 105-122):

```css
.heyfam-input,
.heyfam-textarea {
  font: inherit;
  width: 100%;
  padding: var(--hf-space-2) var(--hf-space-3);
  border: 1px solid var(--hf-color-border-strong);
  border-radius: var(--hf-radius-md);
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  color: var(--hf-color-fg);
  filter: var(--hf-filter-painted);
  transition: border-color var(--hf-motion-fast) var(--hf-ease-standard);
  -webkit-appearance: none;
}
.heyfam-textarea { resize: vertical; min-height: 2.5rem; line-height: var(--hf-line-height-normal); }
.heyfam-input::placeholder,
.heyfam-textarea::placeholder { color: var(--hf-color-fg-subtle); }
```

- [ ] **Step 3: Card, post-card, composer, modal dialog — apply soft filter**

Update `.heyfam-card` (line 140):

```css
.heyfam-card {
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-4);
  display: grid;
  gap: var(--hf-space-3);
  filter: var(--hf-filter-painted-soft);
}
```

Update `.heyfam-post-card` (line 356):

```css
.heyfam-post-card {
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-4);
  display: grid; gap: var(--hf-space-3);
  filter: var(--hf-filter-painted-soft);
}
```

Update `.heyfam-modal__dialog` (line 214):

```css
.heyfam-modal__dialog {
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-5);
  max-width: 480px; width: 100%;
  box-shadow: var(--hf-shadow-lg);
  display: grid; gap: var(--hf-space-4);
  filter: var(--hf-filter-painted-soft);
}
```

Update `.heyfam-composer` (line 507) — note the dual rules at line 1006 will need merging, see Step 5:

```css
.heyfam-composer {
  position: relative;
  display: grid; gap: var(--hf-space-3);
  padding: var(--hf-space-4);
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  filter: var(--hf-filter-painted-soft);
  transition: filter var(--hf-motion-fast) var(--hf-ease-standard),
              background-color var(--hf-motion-fast) var(--hf-ease-standard);
}
```

- [ ] **Step 4: Composer — replace `::after` focus ring with inset box-shadow**

Replace the focus-ring block (lines 518-528):

```css
/* Inset focus ring — composes with the painted filter, no clipping. */
.heyfam-composer:focus-within {
  box-shadow: inset 0 0 0 var(--hf-focus-width) var(--hf-color-sky);
}
```

(The textarea-disable rules at lines 538-542 stay as-is so the ring only paints on the composer edge, not inside the textarea.)

- [ ] **Step 5: Composer drop-target — merge with main rule**

The second `.heyfam-composer` rule at line 1006 sets `outline` for drop-target affordance. Outline composes oddly with filter. Replace lines 1006-1014:

```css
/* Drop-target affordance — uses border-color shift instead of outline to
 * keep the painted filter region intact (outline draws outside the box
 * and gets clipped). */
.heyfam-composer.is-drop-target {
  border-color: var(--hf-color-accent);
  background-color: color-mix(in srgb, var(--hf-color-accent) 8%, var(--hf-color-bg));
}
```

- [ ] **Step 6: Reaction chips — apply filter**

Replace `.heyfam-reactions__chip` (line 446):

```css
.heyfam-reactions__chip {
  display: inline-flex;
  align-items: center;
  gap: var(--hf-space-1);
  height: 1.75rem;
  padding: 0 var(--hf-space-2);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-md);
  background: var(--hf-color-bg);
  color: var(--hf-color-fg);
  cursor: pointer;
  font: inherit;
  filter: var(--hf-filter-painted);
  transition:
    background var(--hf-motion-fast) var(--hf-ease-standard),
    border-color var(--hf-motion-fast) var(--hf-ease-standard);
}
```

- [ ] **Step 7: Landing fam list + account fam card — apply soft filter**

Update `.heyfam-landing__fam` (line 336):

```css
.heyfam-landing__fam {
  display: flex; justify-content: space-between; align-items: center;
  padding: var(--hf-space-4);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  text-decoration: none; color: var(--hf-color-fg);
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  filter: var(--hf-filter-painted-soft);
  transition: border-color var(--hf-motion-fast) var(--hf-ease-standard);
}
```

Update `.heyfam-account__fam` (line 715):

```css
.heyfam-account__fam {
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-4);
  filter: var(--hf-filter-painted-soft);
}
```

- [ ] **Step 8: Stepper, poll button, menu list, toast, nudge — apply filters**

`.heyfam-stepper li` (line 890), append `filter`:

```css
.heyfam-stepper li {
  flex: 1;
  display: grid;
  gap: var(--hf-space-1);
  place-items: center;
  padding: var(--hf-space-2) var(--hf-space-1);
  border-radius: var(--hf-radius-md);
  border: 1px solid transparent;
  background: transparent;
  filter: var(--hf-filter-painted);
}
```

`.heyfam-poll__button` (line 1321), append `filter` and rewrite the painted-bar layering note:

```css
.heyfam-poll__button {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--hf-space-2);
  align-items: center;
  padding: var(--hf-space-2) var(--hf-space-3);
  background: var(--hf-color-bg);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-md);
  cursor: pointer;
  font: inherit;
  overflow: hidden;
  text-align: left;
  color: var(--hf-color-fg);
  filter: var(--hf-filter-painted-soft);
  transition: border-color var(--hf-motion-fast) var(--hf-ease-standard);
}
```

`.heyfam-menu__list` (line 383):

```css
.heyfam-menu__list {
  position: absolute;
  top: calc(100% + var(--hf-space-1));
  right: 0;
  min-width: 160px;
  margin: 0;
  padding: var(--hf-space-1);
  list-style: none;
  background: var(--hf-color-bg);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border: 1px solid var(--hf-color-border-strong);
  border-radius: var(--hf-radius-md);
  box-shadow: var(--hf-shadow-md);
  z-index: var(--hf-z-menu);
  display: none;
  filter: var(--hf-filter-painted-soft);
}
```

`.heyfam-toast` (line 189), append `filter`:

```css
.heyfam-toast {
  position: fixed;
  left: 50%; bottom: var(--hf-space-5);
  transform: translateX(-50%);
  background: var(--hf-color-fg);
  color: var(--hf-color-bg);
  padding: var(--hf-space-2) var(--hf-space-4);
  border-radius: var(--hf-radius-md);
  box-shadow: var(--hf-shadow-lg);
  z-index: var(--hf-z-toast);
  filter: var(--hf-filter-painted);
  animation: heyfam-toast-in var(--hf-motion-normal) var(--hf-ease-standard) both;
}
```

`.heyfam-nudge` (line 966), append `filter`:

```css
.heyfam-nudge {
  display: none;
  gap: var(--hf-space-3);
  align-items: center;
  justify-content: space-between;
  padding: var(--hf-space-3) var(--hf-space-4);
  border-radius: var(--hf-radius-md);
  background: var(--hf-color-accent-soft);
  background-image: var(--hf-bg-paper);
  background-repeat: repeat;
  border: 1px solid var(--hf-color-border);
  color: var(--hf-color-fg);
  filter: var(--hf-filter-painted-soft);
}
```

- [ ] **Step 9: Remove redundant focus-ring overrides**

Delete `.heyfam-auth input:focus-visible` block (lines 685-688) — global rule handles it.

Update `.heyfam-gallery__tile:focus-visible` (line 1091) to use inset box-shadow:

```css
.heyfam-gallery__tile:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 var(--hf-focus-width) var(--hf-color-sky);
  z-index: 1;
}
```

- [ ] **Step 10: Verify in browser**

Hard-reload `/design` (Cmd+Shift+R). Expect:
- All button variants show a painted edge.
- Primary button hover shifts to Deep Blue + slight scale up.
- Inputs and textareas show painted edges. Typing into them shows slight text wobble (this is intentional).
- Cards, post-cards, composer all show softer painted edges + paper grain.
- Reaction chips painted.
- No layout breaks; focus rings show as inset Sky Blue.

Also reload `/feed` if logged into a fam. Verify:
- Post cards render with paper texture.
- Composer focus ring appears as inset Sky Blue on click into the textarea.
- Reaction chips painted.

- [ ] **Step 11: Commit**

```bash
git add themes/heyfam-theme/src/styles/components.css
git commit -m "Apply painted filters across buttons, inputs, cards, chips, composer"
```

---

## Task 6: Visual tune-up

This task is iterative. After a real user-facing review, expect to adjust:
- `baseFrequency` and `scale` on the two filters (in `Icons.php`)
- Paper grain opacity (the `0.06` alpha in the `feColorMatrix` of `--hf-bg-paper`)
- Hover scale amount (currently `1.02` — may want `1.015`)

- [ ] **Step 1: Walk the app**

Visit each page logged into a test fam: `/`, `/feed`, a single post, `/account`, `/invite`, `/login`, `/signup`, `/design`. Note anything that feels off.

- [ ] **Step 2: Tune values inline**

For each issue, adjust the relevant token or filter parameter. Reload, repeat.

- [ ] **Step 3: Commit any tuning changes**

```bash
git add -A
git commit -m "Tune painted aesthetic values after visual review"
```

---

## Risks recap

- **Filter perf on long feeds:** 30+ painted post-cards may jank on low-end Android. Mitigation already baked in — large surfaces use `painted-soft` (lower scale). If still slow, fall back to `painted-soft` everywhere.
- **Text wobble in inputs:** typing distorts text slightly. Treated as on-brand. If it's too aggressive, lower the main filter `scale` from 3 to 2.
- **Dark mode `accent-soft` contrast:** `#1E3A8A` may be too dark for hover bg in dark mode — adjust during Task 6 walk-through if needed.

## Spec self-review

- ✅ Spec §1 palette → Task 1
- ✅ Spec §2 texture tokens → Tasks 2, 3
- ✅ Spec §3 application across surfaces → Task 5 (all 14 selectors covered)
- ✅ Spec §4 hover refactor → Task 5 Step 1
- ✅ Spec §5 focus ring strategy → Task 4 Step 2 (global), Task 5 Step 4 (composer), Task 5 Step 9 (auth/gallery)
- ✅ Spec §6 dark mode → Task 2 Step 3
- ✅ Spec §7 reusable API → Task 4 Step 3 (utility classes), Task 2 Step 2 (tokens)
- ✅ Spec file touch list → 5 files, all addressed
