# HeyFam Painted Aesthetic — Design

**Date:** 2026-05-13
**Status:** Draft
**Scope:** Replace the current sage-green palette with a vibrant blue/cream/ink palette, and introduce a reusable "painted on paper" texture system (paper-grain backgrounds + painted-edge filters) applied across buttons, surfaces, inputs, and chips. Built so any future element can opt in with a single class or filter token.

## Goals

- Swap the theme palette to Deep Blue, Ocean Blue, Sky Blue, Warm Cream, Tangerine, Leaf Green, Ink.
- Ship a reusable texture API (two CSS filter tokens + one paper-grain background token + matching utility classes) that any component or one-off element can adopt.
- Apply the painted aesthetic generously across the existing component library — body, buttons, inputs, cards, chips, composer, modals.
- Keep dark mode supported via an ink-paper inversion that preserves the painted feel.
- No new asset files. No JS changes. No new fonts. Pure CSS + one PHP emit (filter sprite).

## Non-goals

- Replacing icons, typography, or motion tokens. System font stack stays.
- Adding new components or rebuilding layouts. The painted treatment overlays existing markup.
- Theme switching / multiple palette variants. The new palette is the only palette.
- Touching JS interactivity, server code, REST routes, or template HTML files (theme `templates/*` and `parts/*` are unchanged).
- Re-doing the design system reference page (`/design`). It already reads `theme.json` and `tokens.css`, so it picks up the new look automatically.

## Reference

- Component library: `themes/heyfam-theme/src/styles/components.css`
- Token layer: `themes/heyfam-theme/src/styles/tokens.css`
- Theme.json palette: `themes/heyfam-theme/theme.json`
- Icon sprite emit (where the filter sprite will live): `plugins/heyfam-core/src/UI/Icons.php`
- Visual reference: user-provided palette swatches + painted-button mockups (Deep Blue #1E3A8A, Ocean Blue #2563EB, Sky Blue #60A5FA, Warm Cream #FFF7E0, Tangerine #FF8A3D, Leaf Green #22C55E, Ink #111827).

## Design

### 1. Palette mapping

`theme.json` `settings.color.palette` is rewritten. The slugs stay stable where possible so the semantic alias layer in `tokens.css` doesn't need restructuring; two new slugs are added.

| Slug                  | Hex       | Role                                                  |
|-----------------------|-----------|-------------------------------------------------------|
| `background`          | `#FFF7E0` | Warm Cream — page paper                               |
| `foreground`          | `#111827` | Ink — body text                                       |
| `foreground-muted`    | `#4B5563` | Muted ink (~60%) — secondary text                     |
| `foreground-subtle`   | `#9CA3AF` | Subtle ink (~40%) — placeholders, hints               |
| `border`              | `#E8DFC4` | Cream-shadow — default borders                        |
| `border-strong`       | `#D4C9A8` | Stronger cream-shadow — input borders                 |
| `accent`              | `#2563EB` | Ocean Blue — primary buttons, links                   |
| `accent-foreground`   | `#FFF7E0` | Cream — text on blue                                  |
| `accent-strong` ⊕     | `#1E3A8A` | Deep Blue — primary hover/active                      |
| `accent-soft`         | `#DBEAFE` | Sky-tint — hover backgrounds, soft pills              |
| `sky` ⊕               | `#60A5FA` | Sky Blue — informational fills, focus ring            |
| `danger`              | `#FF8A3D` | Tangerine — destructive actions                       |
| `success`             | `#22C55E` | Leaf Green — success states                           |

⊕ = new slug. The semantic alias layer in `tokens.css` gains:

```css
--hf-color-accent-strong: var(--wp--preset--color--accent-strong);
--hf-color-sky:           var(--wp--preset--color--sky);
```

Focus ring color flips from `--hf-color-accent` to `--hf-color-sky` (Sky Blue reads cleaner on cream than Ocean Blue).

### 2. Texture system

The texture system is exposed as three CSS tokens plus three utility classes. Every consumer — component CSS or one-off element — uses the same API.

#### 2.1 Tokens (defined in `tokens.css`)

```css
--hf-filter-painted:      url('#hf-paint');       /* main painted edge */
--hf-filter-painted-soft: url('#hf-paint-soft');  /* gentler displacement, for large surfaces */
--hf-bg-paper:            url("data:image/svg+xml;utf8,<svg …>…</svg>");  /* paper grain */
```

#### 2.2 Utility classes (defined in `base.css`)

```css
.hf-painted      { filter: var(--hf-filter-painted); }
.hf-painted-soft { filter: var(--hf-filter-painted-soft); }
.hf-paper        { background-image: var(--hf-bg-paper); }
```

A consumer can sprinkle these on any element — a custom Gutenberg block, a third-party widget, an inline `<span>` — without touching shared CSS.

#### 2.3 Inline SVG filter sprite

Two `<filter>` elements live in the inline SVG sprite emitted by `Icons.render_sprite()` (hooked on `wp_body_open`). Since `wp_body_open` fires before any template content renders, the filter defs are available when later elements reference them — no FOUC. The sprite is already hidden by the existing `.heyfam-icon-sprite` class in `base.css`.

The render method gains a `<defs>` block before the existing `<symbol>` loop:

```html
<svg class="heyfam-icon-sprite" aria-hidden="true">
  <defs>
    <filter id="hf-paint" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3"/>
      <feDisplacementMap in="SourceGraphic" scale="3"/>
    </filter>
    <filter id="hf-paint-soft" x="-3%" y="-3%" width="106%" height="106%">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="5"/>
      <feDisplacementMap in="SourceGraphic" scale="1.5"/>
    </filter>
  </defs>
  <!-- existing <symbol> icon defs continue here, unchanged -->
</svg>
```

Numbers are starting values; we tune visually after first render. `seed` is fixed so the painted edge is stable across reloads (no shimmer on refresh).

#### 2.4 Paper grain data-URI

The grain is a single self-contained SVG tile, URL-encoded and stored in the `--hf-bg-paper` token. Structure:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
  <filter id="g">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7"/>
    <feColorMatrix values="0 0 0 0 0.15  0 0 0 0 0.12  0 0 0 0 0.09  0 0 0 0.06 0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#g)"/>
</svg>
```

The `feColorMatrix` tints the noise to a warm sepia at ~6% alpha so it reads as paper fiber against any underlying `background-color`. The tile is 240×240; CSS repeats it by default. Final encoded URI lives in `tokens.css` as the value of `--hf-bg-paper`.

Surfaces with their own `background-color` (cards, modals, post-cards) overlay the grain on top of their tint — the grain stays warm and the surface color shows through.

### 3. Where the texture is applied

Generous — most surfaces. Concretely:

| Surface                                | Painted filter            | Paper grain |
|----------------------------------------|---------------------------|-------------|
| `body`                                 | —                         | yes         |
| `.heyfam-button` (all variants)        | `painted` (main)          | —           |
| `.heyfam-input`, `.heyfam-textarea`    | `painted` (main)          | yes (subtle)|
| `.heyfam-card`, `.heyfam-composer`     | `painted-soft`            | yes         |
| `.heyfam-post-card`                    | `painted-soft`            | yes         |
| `.heyfam-modal__dialog`                | `painted-soft`            | yes         |
| `.heyfam-reactions__chip`              | `painted`                 | —           |
| `.heyfam-landing__fam`                 | `painted-soft`            | yes         |
| `.heyfam-account__fam`                 | `painted-soft`            | yes         |
| `.heyfam-stepper li`                   | `painted` (soft on active)| —           |
| `.heyfam-poll__button`                 | `painted-soft`            | —           |
| `.heyfam-menu__list`                   | `painted-soft`            | yes         |
| `.heyfam-toast`                        | `painted`                 | —           |
| `.heyfam-nudge`                        | `painted-soft`            | yes         |
| `.heyfam-emoji-picker` (chrome)        | — (third-party, leave it) | —           |

Composer previews, gallery tiles, and avatars stay clean — they're media containers, not painted surfaces.

### 4. Hover and active states

Drop all `filter: brightness(...)` hovers. They compose multiplicatively with the painted filter and cause flicker / aliasing. Replace with:

- **Primary button hover:** swap `background` from `--hf-color-accent` → `--hf-color-accent-strong` (Deep Blue) and add `transform: scale(1.02)`.
- **Secondary button hover:** existing border-color shift stays.
- **Tertiary button hover:** existing background tint stays.
- **Danger button hover:** color shift to a slightly stronger tangerine (`color-mix(in srgb, #FF8A3D 90%, #111827)`) + `scale(1.02)`.
- **Active state (all variants):** existing `transform: scale(0.97)` stays. It composes cleanly.
- **Chip / card hover:** existing border-color shifts stay; no new transforms.

Scale and color-shift are filter-safe — they don't interact with displacement.

### 5. Focus ring strategy

The current pattern is `outline` with positive `outline-offset` (sits outside the element) plus, on the composer, an `::after` pseudo-element also positioned outside via negative `inset`. Both render *outside* the element's box. The painted filter clips its output to the filter region, which can clip outside-positioned focus rings.

**Decision: convert all focus rings to inset box-shadow.** Inset rings live inside the element's box, aren't clipped by the filter region, and get displaced by the painted filter along with the rest of the element's render — so they read as a wet brush stroke hugging the inside of the painted shape.

Audit of existing focus-ring touchpoints, all of which switch to the new pattern:

| Location                                          | Current                                                  | After                                                |
|---------------------------------------------------|----------------------------------------------------------|------------------------------------------------------|
| `base.css` global `:focus-visible`                | `outline` + positive `outline-offset`                    | `outline: none; box-shadow: inset 0 0 0 var(--hf-focus-width) var(--hf-color-sky)` |
| `components.css` `.heyfam-composer::after`        | `::after` with negative `inset` border ring              | Remove `::after`. Apply inset box-shadow to `.heyfam-composer:focus-within` directly. |
| `components.css` `.heyfam-auth input:focus-visible` | Redundant `outline + outline-offset` override            | Delete the override — let the global rule apply.   |
| `components.css` `.heyfam-gallery__tile:focus-visible` | `outline` with negative `outline-offset` (already inset-ish) | Convert to inset box-shadow for consistency.       |

The `--hf-focus-offset` token becomes unused. Leave the value in `theme.json` (it's surfaced through the WP preset layer and removing it would churn the JSON for no benefit). Stop reading it in CSS.

### 6. Dark mode — ink-paper inversion

Tokens.css rebinds the semantic layer inside `@media (prefers-color-scheme: dark)`:

```css
--hf-color-bg:          #0F172A;  /* ink deep */
--hf-color-fg:          #FFF7E0;  /* cream */
--hf-color-fg-muted:    #C9CFA9;
--hf-color-fg-subtle:   #8A8E70;
--hf-color-border:      #1E293B;
--hf-color-border-strong:#334155;
--hf-color-accent:      #60A5FA;  /* sky becomes primary */
--hf-color-accent-fg:   #0F172A;
--hf-color-accent-strong:#2563EB; /* ocean becomes hover */
--hf-color-accent-soft: #1E3A8A;
--hf-color-sky:         #93C5FD;
--hf-color-danger:      #FFB07D;
--hf-color-success:     #4ADE80;
```

Texture filters and paper grain stay applied — the painted feel translates to dark because grain on dark ink reads as charcoal-paper, and the painted edge filter is color-agnostic.

### 7. Reusable API summary

Anyone — including future blocks, plugins, or one-off pages — picks up the painted look by one of:

1. **Utility classes** on markup:
   ```html
   <div class="hf-painted hf-paper">…</div>
   ```
2. **Filter token** in custom CSS:
   ```css
   .my-thing { filter: var(--hf-filter-painted); }
   ```
3. **Color tokens** for paint fills:
   ```css
   .my-thing { background: var(--hf-color-accent); color: var(--hf-color-accent-fg); }
   ```

No additional registration, no JS, no asset pipeline.

## File touch list

| File                                              | Change                                                                 |
|---------------------------------------------------|------------------------------------------------------------------------|
| `themes/heyfam-theme/theme.json`                  | Palette rewrite (slug values), add `accent-strong` + `sky` slugs.      |
| `themes/heyfam-theme/src/styles/tokens.css`       | Add `--hf-color-accent-strong`, `--hf-color-sky` aliases. Add `--hf-filter-painted`, `--hf-filter-painted-soft`, `--hf-bg-paper`. Rewrite dark-mode rebind. |
| `themes/heyfam-theme/src/styles/base.css`         | Body gets `background-image: var(--hf-bg-paper)`. Add `.hf-painted`, `.hf-painted-soft`, `.hf-paper` utility classes. Rewrite `:focus-visible` to inset box-shadow. |
| `themes/heyfam-theme/src/styles/components.css`   | Apply painted filters to component selectors per §3. Refactor button hover states per §4. Convert composer `::after` focus ring to `:focus-within` inset box-shadow per §5. |
| `plugins/heyfam-core/src/UI/Icons.php`            | Add two `<filter>` defs to the emitted SVG sprite. Keep existing icon symbols intact. |

## Risks & open questions

- **Performance**: SVG filters with `feTurbulence` + `feDisplacementMap` rasterize on the GPU on most modern browsers. On low-end Android, applying them to ~30 buttons + cards on a long feed *could* cause jank. Mitigation: the `painted-soft` filter (lower scale) is cheaper; we use it for the large surfaces. If we see real-device jank, fall back to `painted-soft` everywhere or skip on the feed list.
- **Filter clipping**: Filter regions default to a bounding box plus 10% padding (the `x/y/width/height` on the filter el). If displacement pushes the edge outside this box, it gets clipped. The spec sets `x="-5%" width="110%"` which gives a 5% halo. If we see hard edges, bump to 10–15%.
- **Text wobble in inputs**: Applying `filter:` to `<input>`/`<textarea>` distorts the text as the user types. We're treating this as on-brand (notebook feel) but it may need to be toned down. Mitigation: use the soft filter on inputs only, or fall back to a pseudo-element painted background (would require a wrapper element).
- **`accent-soft` contrast in dark**: `#1E3A8A` as a hover background in dark mode may be too dark to read accent text on. We'll validate visually and adjust.
- **Native form-control rendering**: The dev banner and emoji picker are third-party / DOM-heavy. We leave them alone in this round.
