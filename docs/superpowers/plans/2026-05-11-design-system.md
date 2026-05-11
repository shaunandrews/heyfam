# HeyFam Design System & Avatars Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace ad-hoc CSS with a small, well-named design token layer and a minimal base-component vocabulary, and bring back avatars as server-rendered SVG seeded by user id (no Gravatar).

**Architecture:** All site-editor-friendly tokens (color palette, font sizes, spacing scale, shadows) live in `theme.json`; everything else (radii, motion, semantic surface tokens, focus ring, z-index) lives under `theme.json` `settings.custom` so it generates `--wp--custom--*` CSS variables. The actual stylesheet is split into three files (`tokens.css`, `base.css`, `components.css`) that are concatenated at enqueue time. Components are vanilla HTML + utility classes — no new build pipeline, no JS framework, no per-component PHP partial. Avatars are server-rendered SVG via the `wi-wissen/boring-avatars` Composer package, exposed at `author.avatar_url` (data URI) and re-used for both `<img>` `src` and an SSR'd inline `<svg>` fallback in the comment/post templates.

**Tech Stack:** WordPress 6.5+ multisite, PHP 8.1+, `@wordpress/interactivity`, esbuild (existing), `wi-wissen/boring-avatars` (new Composer dep), pure CSS variables. No new JS dependencies.

**Reference:** `docs/superpowers/orchestrator.md` Section 1; the file structure mirrors `docs/superpowers/plans/2026-05-11-comments-v1.md`.

**Depends on:** None. Runs solo in **Phase B**, after the Phase A foundation (notif-dev + test-infra) and before all visual/feature plans. This plan is the canonical first refactor of `serialize_post()`, `parts/composer.html`, `parts/post-card.html`, and `themes/heyfam-theme/src/styles/main.css` (it deletes main.css and splits CSS into `tokens.css` + `base.css` + `components.css`). All later visual plans (invite-onboarding, media, polls) rebase additively on this plan's output — they append rules to `components.css` and apply additive Edits to the templates.

---

## Preconditions

- Local Studio site at `~/Studio/heyfam/` with the repo symlinked into `wp-content`.
- `composer install` runs cleanly in `plugins/heyfam-core/` (the avatar library is a plugin-level dep, not a theme dep).
- Read access to:
  - `themes/heyfam-theme/theme.json` (current minimal token surface).
  - `themes/heyfam-theme/src/styles/main.css` (current single-file CSS, 182 lines).
  - `themes/heyfam-theme/parts/*.html` and `templates/*.html` (existing markup that consumes today's CSS).
  - `plugins/heyfam-core/src/REST/Routes.php` `serialize_comment()` / `serialize_post()` (where avatar fields are emitted).

---

## Open Questions Resolved

| Question | Decision | Why |
|---|---|---|
| Pure CSS custom properties vs. piping through `theme.json`? | Both — palette/font-size/spacing/shadows go in `theme.json`'s standard presets (Site Editor visible); radii/motion/semantic/z-index/focus go under `settings.custom` (CSS-only). | Best of both: people editing the site through the editor see the palette in pickers; we get a complete token system as CSS variables without polluting the editor UI. |
| Base components: PHP partials, IAPI components, or CSS classes? | Vanilla CSS utility/component classes on plain HTML, BEM-named (`heyfam-button`, `heyfam-card`, `heyfam-input`). The only PHP helper is `Avatar::render_svg()` for SSR. | Existing templates are `<!-- wp:html -->` blocks with raw markup. A web component layer adds zero value here; PHP partial-per-component would proliferate `*.php` partials we don't need. Utility classes match the grain. |
| Avatar source: Gravatar, DiceBear, Boring Avatars, custom? | `wi-wissen/boring-avatars` ("beam" variant), rendered server-side as SVG, base64-encoded into a `data:image/svg+xml` URL emitted in the REST payload. Plus an upload path stored in user_meta. | The user explicitly does not want Gravatar. Boring-avatars has a maintained PHP port (so we get true SSR, no network call from the server, no third-party API). "Beam" looks like soft watercolor blobs — friendly for a family app. The data URI keeps things stateless; no cache, no rewrites. |
| Avatar storage: WP media library or plugin-managed table? | WP media library, referenced by user_meta key `heyfam_avatar_attachment_id`. | Reuses the existing `media_handle_sideload` machinery from `Posts/Composer.php` and WP's thumbnail-resize pipeline (we can ask for size `64` and get a stamped variant for free). |
| Dark mode strategy? | `@media (prefers-color-scheme: dark)` block in `tokens.css` that rebinds the `--hf-semantic-*` tokens to the dark palette tokens. No editor exposure for dark mode — it's automatic. | Light/dark in `theme.json` requires shipping two style variations and a switcher UI; far too much surface for a hobby project. A media-query rebind is 15 lines of CSS. |
| CSS reset strategy? | A pared-down reset inside `base.css`: box-sizing border-box, margin zero on headings + paragraphs (then re-applied via tokens), `:focus-visible` styles, `tap-highlight: transparent`. Skip Normalize/Reset CSS as a vendored file. | Block themes already get a baseline reset from WP core; we only need the missing pieces. Keeping this small avoids fighting WP defaults. |

---

## File Structure

**Modified:**

- `themes/heyfam-theme/theme.json` — gains a `settings.color.palette` expansion (semantic + scale tokens), `typography.fontSizes` + `lineHeight` + `fontWeight` presets, `spacing.spacingSizes` scale, `shadow.presets`, and a `settings.custom` tree for radii, motion, semantic surface tokens, focus ring, z-index.
- `themes/heyfam-theme/functions.php` — enqueues three CSS files (`tokens.css`, `base.css`, `components.css`) instead of `main.css`, in that order, all on one handle. Adds a `heyfam_user_avatar_url()` helper used by `Routes.php`.
- `themes/heyfam-theme/parts/header.html` — `.heyfam-header` becomes a card-style sticky bar; uses tokenized spacing.
- `themes/heyfam-theme/parts/fam-picker.html` — `.heyfam-fam-picker__toggle` becomes a `heyfam-button heyfam-button--ghost`.
- `themes/heyfam-theme/parts/composer.html` — wraps in `heyfam-card`, textarea gets `heyfam-input`, submit gets `heyfam-button heyfam-button--primary`. Adds an avatar slot on the left.
- `themes/heyfam-theme/parts/post-card.html` — replaces inline color string `<div class="heyfam-comment__avatar" data-wp-bind--style="...">` with `<img class="heyfam-avatar" data-wp-bind--src="context.comment.avatar_url" ...>` and reuses the same `.heyfam-avatar` class for the post header avatar.
- `themes/heyfam-theme/templates/page-feed.html`, `templates/single.html`, `templates/page-account.html`, `templates/page-login.html`, `templates/page-signup.html`, `templates/page-invite.html`, `templates/index.html` — replace bespoke wrapper classes (`heyfam-feed`, `heyfam-auth`, `heyfam-account`, etc.) with the new `heyfam-stack` / `heyfam-card` utility classes where appropriate; landing page (`index.html`) gets a hero treatment using new tokens.
- `plugins/heyfam-core/src/REST/Routes.php` — `serialize_post()` and `serialize_comment()` get `author.avatar_url` (data URI string). New static `avatar_url_for_user( int )` helper. Drops the `avatar_color`/`avatar_initial`/`avatar_style` triplet (replaced by `avatar_url`).
- `plugins/heyfam-core/composer.json` — adds `wi-wissen/boring-avatars: ^1.0` to `require`.

**Created:**

- `themes/heyfam-theme/src/styles/tokens.css` — `:root { ... }` and dark-mode `@media` rebind. Imports nothing; pure variable declarations.
- `themes/heyfam-theme/src/styles/base.css` — micro-reset, baseline typography (font-family, line-height defaults, headings scale), `:focus-visible` ring, `.is-hidden`, `.is-sr-only`, layout helpers (`.heyfam-stack`, `.heyfam-row`, `.heyfam-container`).
- `themes/heyfam-theme/src/styles/components.css` — `heyfam-button`, `heyfam-input`, `heyfam-textarea`, `heyfam-card`, `heyfam-pill`, `heyfam-avatar`, `heyfam-toast`, `heyfam-modal`, `heyfam-empty-state`, `heyfam-spinner`. Re-homes the existing `heyfam-post-card`, `heyfam-composer`, `heyfam-comment`, `heyfam-comment-form`, `heyfam-fam-picker`, `heyfam-auth`, `heyfam-account`, `heyfam-emoji-picker` rules onto tokens.
- `plugins/heyfam-core/src/Avatars/Avatar.php` — `Avatar::data_uri( int $user_id, int $size = 64 ): string` helper that returns either the uploaded attachment URL or a data-URI-encoded boring-avatars SVG. Also `Avatar::set_for_user( int $user_id, array $upload ): int|\WP_Error`.
- `plugins/heyfam-core/tests/AvatarTest.php` — integration test for `Avatar::data_uri()`: returns attachment URL when set, deterministic SVG data URI otherwise, same seed → same URI twice.
- `docs/design-system.md` — short README cataloguing the tokens, components, and the avatar contract. One page.

**Deleted:**

- `themes/heyfam-theme/src/styles/main.css` — superseded by the three new files. Keep no shim.

---

## Phase Map

| Task | Theme | Demoable when complete |
|---|---|---|
| 1 | Tokens — theme.json + tokens.css | `--hf-color-*`, `--wp--preset--color--*`, `--hf-space-*`, `--hf-radius-*`, `--hf-motion-*` all defined and visible in `:root` |
| 2 | Base & layout — base.css | Body + headings render with new fonts/sizes; `.heyfam-container`, `.heyfam-stack`, `.is-hidden` work |
| 3 | Components.css (Button, Input, Card, Pill, Spinner, EmptyState, Toast, Modal) | New utility classes available; isolated test page or visual smoke confirms each |
| 4 | Avatar — composer dep + PHP helper + REST swap | `serialize_comment()` returns `author.avatar_url` as a `data:image/svg+xml...` URI; the comment template renders the new `<img>` |
| 5 | Template refactor — header, fam-picker, composer, post-card, single, feed | Existing screens render with token-driven visuals, no remaining inline hex |
| 6 | Auth screens refactor — login, signup, invite, account | All forms share `heyfam-input` / `heyfam-button` / `heyfam-card` styling |
| 7 | Avatar upload — Account screen + REST route | A user can pick an image on the Account screen and it replaces their generated avatar across the site |
| 8 | Documentation — `docs/design-system.md` | One-page README covers tokens + components + avatar contract |

Tasks 1-3 are mechanical (no behavior change). 4 unblocks visuals. 5-6 refactor existing markup. 7 is the only feature-add. 8 closes the loop.

---

## Task 1: Tokens — theme.json + tokens.css

**Files:**
- Modify: `themes/heyfam-theme/theme.json`
- Create: `themes/heyfam-theme/src/styles/tokens.css`

- [ ] **Step 1: Expand `theme.json`**

Replace `themes/heyfam-theme/theme.json` with:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "appearanceTools": true,
    "color": {
      "palette": [
        { "slug": "bg",          "name": "Background",     "color": "#fffaf3" },
        { "slug": "bg-elev",     "name": "Background Elev","color": "#fffefb" },
        { "slug": "fg",          "name": "Foreground",     "color": "#1f1d1a" },
        { "slug": "fg-muted",    "name": "Foreground Muted","color": "#6e655c" },
        { "slug": "fg-subtle",   "name": "Foreground Subtle","color": "#b8a98a" },
        { "slug": "border",      "name": "Border",         "color": "#efe7d6" },
        { "slug": "border-strong","name": "Border Strong", "color": "#e3dac9" },
        { "slug": "accent",      "name": "Accent",         "color": "#d97706" },
        { "slug": "accent-fg",   "name": "Accent FG",      "color": "#ffffff" },
        { "slug": "accent-soft", "name": "Accent Soft",    "color": "#fef3e2" },
        { "slug": "danger",      "name": "Danger",         "color": "#b04141" },
        { "slug": "success",     "name": "Success",        "color": "#3f7a4e" }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          "name": "System",
          "slug": "system"
        }
      ],
      "fontSizes": [
        { "slug": "xs",   "size": "0.75rem",  "name": "Extra Small" },
        { "slug": "sm",   "size": "0.875rem", "name": "Small" },
        { "slug": "md",   "size": "1rem",     "name": "Medium" },
        { "slug": "lg",   "size": "1.125rem", "name": "Large" },
        { "slug": "xl",   "size": "1.375rem", "name": "Extra Large" },
        { "slug": "xxl",  "size": "1.75rem",  "name": "Display" }
      ]
    },
    "spacing": {
      "spacingSizes": [
        { "slug": "1",  "size": "0.25rem", "name": "1" },
        { "slug": "2",  "size": "0.5rem",  "name": "2" },
        { "slug": "3",  "size": "0.75rem", "name": "3" },
        { "slug": "4",  "size": "1rem",    "name": "4" },
        { "slug": "5",  "size": "1.5rem",  "name": "5" },
        { "slug": "6",  "size": "2rem",    "name": "6" },
        { "slug": "7",  "size": "3rem",    "name": "7" }
      ],
      "units": [ "rem", "px", "%" ]
    },
    "shadow": {
      "presets": [
        { "slug": "sm", "name": "Small",  "shadow": "0 1px 2px rgba(31, 29, 26, 0.05)" },
        { "slug": "md", "name": "Medium", "shadow": "0 6px 16px rgba(31, 29, 26, 0.06)" },
        { "slug": "lg", "name": "Large",  "shadow": "0 12px 32px rgba(31, 29, 26, 0.10)" }
      ]
    },
    "layout": { "contentSize": "640px", "wideSize": "960px" },
    "custom": {
      "radius": {
        "sm":   "6px",
        "md":   "10px",
        "lg":   "16px",
        "pill": "999px"
      },
      "motion": {
        "duration": {
          "fast":   "120ms",
          "normal": "200ms",
          "slow":   "320ms"
        },
        "easing": {
          "standard": "cubic-bezier(0.2, 0.0, 0.0, 1.0)",
          "emphasized": "cubic-bezier(0.2, 0.0, 0.0, 1.0)",
          "exit":     "cubic-bezier(0.4, 0.0, 1.0, 1.0)"
        }
      },
      "z": {
        "base":    "1",
        "elevated":"10",
        "menu":    "100",
        "modal":   "1000",
        "toast":   "1100"
      },
      "focusRing": {
        "color":  "var(--wp--preset--color--accent)",
        "width":  "2px",
        "offset": "2px"
      },
      "avatar": {
        "size":      "32px",
        "size-lg":   "48px"
      },
      "lineHeight": {
        "tight":  "1.15",
        "normal": "1.5",
        "loose":  "1.7"
      },
      "fontWeight": {
        "regular": "400",
        "medium":  "500",
        "semibold":"600",
        "bold":    "700"
      }
    }
  },
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--bg)",
      "text":       "var(--wp--preset--color--fg)"
    },
    "typography": {
      "fontFamily": "var(--wp--preset--font-family--system)",
      "fontSize":   "var(--wp--preset--font-size--md)",
      "lineHeight": "var(--wp--custom--line-height--normal)"
    }
  },
  "templateParts": [
    { "name": "header",     "title": "Header",     "area": "header" },
    { "name": "fam-picker", "title": "Fam Picker", "area": "uncategorized" },
    { "name": "composer",   "title": "Composer",   "area": "uncategorized" },
    { "name": "post-card",  "title": "Post Card",  "area": "uncategorized" }
  ],
  "customTemplates": [
    { "name": "page-feed",    "title": "Fam Feed",         "postTypes": [ "page" ] },
    { "name": "page-account", "title": "Account Settings", "postTypes": [ "page" ] }
  ]
}
```

Notes:
- I changed font-size slugs from `small`/`medium`/`large` to `xs`/`sm`/`md`/`lg`/`xl`/`xxl` so we have room for both small UI text and display sizes. The old `--wp--preset--font-size--medium` references in `styles.typography.fontSize` are updated.
- `settings.custom.lineHeight.normal` and `custom.fontWeight.medium` etc. become `--wp--custom--line-height--normal` and `--wp--custom--font-weight--medium`.
- The color palette is intentionally larger but each slug is semantic; CSS will alias them to short names in `tokens.css`.

- [ ] **Step 2: Create `tokens.css`**

Create `themes/heyfam-theme/src/styles/tokens.css`:

```css
/*
 * HeyFam design tokens.
 *
 * Two layers:
 *   1. WordPress preset variables (generated by theme.json) — keep them.
 *   2. Semantic aliases (`--hf-*`) that components and screens use.
 *
 * Components NEVER reference raw preset variables directly; they always go
 * through the semantic layer. That makes dark mode + future re-skins a
 * matter of rebinding the semantic layer.
 */
:root {
  color-scheme: light dark;

  /* Color — semantic aliases */
  --hf-color-bg:           var(--wp--preset--color--bg);
  --hf-color-bg-elev:      var(--wp--preset--color--bg-elev);
  --hf-color-fg:           var(--wp--preset--color--fg);
  --hf-color-fg-muted:     var(--wp--preset--color--fg-muted);
  --hf-color-fg-subtle:    var(--wp--preset--color--fg-subtle);
  --hf-color-border:       var(--wp--preset--color--border);
  --hf-color-border-strong:var(--wp--preset--color--border-strong);
  --hf-color-accent:       var(--wp--preset--color--accent);
  --hf-color-accent-fg:    var(--wp--preset--color--accent-fg);
  --hf-color-accent-soft:  var(--wp--preset--color--accent-soft);
  --hf-color-danger:       var(--wp--preset--color--danger);
  --hf-color-success:      var(--wp--preset--color--success);

  /* Spacing */
  --hf-space-1: var(--wp--preset--spacing--1);
  --hf-space-2: var(--wp--preset--spacing--2);
  --hf-space-3: var(--wp--preset--spacing--3);
  --hf-space-4: var(--wp--preset--spacing--4);
  --hf-space-5: var(--wp--preset--spacing--5);
  --hf-space-6: var(--wp--preset--spacing--6);
  --hf-space-7: var(--wp--preset--spacing--7);

  /* Typography */
  --hf-font-family: var(--wp--preset--font-family--system);
  --hf-font-size-xs:  var(--wp--preset--font-size--xs);
  --hf-font-size-sm:  var(--wp--preset--font-size--sm);
  --hf-font-size-md:  var(--wp--preset--font-size--md);
  --hf-font-size-lg:  var(--wp--preset--font-size--lg);
  --hf-font-size-xl:  var(--wp--preset--font-size--xl);
  --hf-font-size-xxl: var(--wp--preset--font-size--xxl);
  --hf-line-height-tight:  var(--wp--custom--line-height--tight);
  --hf-line-height-normal: var(--wp--custom--line-height--normal);
  --hf-line-height-loose:  var(--wp--custom--line-height--loose);
  --hf-font-weight-regular:  var(--wp--custom--font-weight--regular);
  --hf-font-weight-medium:   var(--wp--custom--font-weight--medium);
  --hf-font-weight-semibold: var(--wp--custom--font-weight--semibold);
  --hf-font-weight-bold:     var(--wp--custom--font-weight--bold);

  /* Radii */
  --hf-radius-sm:   var(--wp--custom--radius--sm);
  --hf-radius-md:   var(--wp--custom--radius--md);
  --hf-radius-lg:   var(--wp--custom--radius--lg);
  --hf-radius-pill: var(--wp--custom--radius--pill);

  /* Shadows */
  --hf-shadow-sm: var(--wp--preset--shadow--sm);
  --hf-shadow-md: var(--wp--preset--shadow--md);
  --hf-shadow-lg: var(--wp--preset--shadow--lg);

  /* Motion */
  --hf-motion-fast:   var(--wp--custom--motion--duration--fast);
  --hf-motion-normal: var(--wp--custom--motion--duration--normal);
  --hf-motion-slow:   var(--wp--custom--motion--duration--slow);
  --hf-ease-standard: var(--wp--custom--motion--easing--standard);
  --hf-ease-exit:     var(--wp--custom--motion--easing--exit);

  /* z-index */
  --hf-z-base:     var(--wp--custom--z--base);
  --hf-z-elevated: var(--wp--custom--z--elevated);
  --hf-z-menu:     var(--wp--custom--z--menu);
  --hf-z-modal:    var(--wp--custom--z--modal);
  --hf-z-toast:    var(--wp--custom--z--toast);

  /* Focus ring */
  --hf-focus-color:  var(--wp--custom--focus-ring--color);
  --hf-focus-width:  var(--wp--custom--focus-ring--width);
  --hf-focus-offset: var(--wp--custom--focus-ring--offset);

  /* Avatar */
  --hf-avatar-size:    var(--wp--custom--avatar--size);
  --hf-avatar-size-lg: var(--wp--custom--avatar--size-lg);
}

/*
 * Dark mode. We only rebind the semantic tokens — palette tokens (which
 * are user-facing in the Site Editor) stay as their light values.
 */
@media (prefers-color-scheme: dark) {
  :root {
    --hf-color-bg:           #181410;
    --hf-color-bg-elev:      #221c16;
    --hf-color-fg:           #faf6ee;
    --hf-color-fg-muted:     #b8ad9f;
    --hf-color-fg-subtle:    #7a716a;
    --hf-color-border:       #322a22;
    --hf-color-border-strong:#3f352b;
    --hf-color-accent:       #f59e0b;
    --hf-color-accent-fg:    #181410;
    --hf-color-accent-soft:  #2a1f12;
    --hf-color-danger:       #d57676;
    --hf-color-success:      #6fae82;
    --hf-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --hf-shadow-md: 0 6px 16px rgba(0, 0, 0, 0.35);
    --hf-shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
  }
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --hf-motion-fast:   0ms;
    --hf-motion-normal: 0ms;
    --hf-motion-slow:   0ms;
  }
}
```

- [ ] **Step 3: Verify in the browser**

Hard-refresh any HeyFam page. In DevTools, inspect `<html>` and check the Computed Styles tab — the `--hf-*` variables and `--wp--custom--*` variables should all be present with the right values.

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/theme.json themes/heyfam-theme/src/styles/tokens.css
git commit -m "design: introduce token layer (theme.json presets + custom + tokens.css)"
```

---

## Task 2: Base & layout — base.css

**Files:**
- Create: `themes/heyfam-theme/src/styles/base.css`
- Modify: `themes/heyfam-theme/functions.php` (enqueue all three CSS files)

- [ ] **Step 1: Create `base.css`**

Create `themes/heyfam-theme/src/styles/base.css`:

```css
/*
 * Micro-reset + global baselines.
 *
 * WP core ships a reset already; we only fill the gaps:
 *  - Predictable box-sizing
 *  - Zero margins on text blocks (re-applied via component classes)
 *  - Touch tap-highlight tint
 *  - Consistent focus-visible ring
 *  - Smooth scroll within the page
 */
*, *::before, *::after { box-sizing: border-box; }

html {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--hf-font-family);
  font-size: var(--hf-font-size-md);
  line-height: var(--hf-line-height-normal);
  color: var(--hf-color-fg);
  background: var(--hf-color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, p, ul, ol, figure, pre { margin: 0; }

h1 { font-size: var(--hf-font-size-xxl); line-height: var(--hf-line-height-tight); font-weight: var(--hf-font-weight-bold); }
h2 { font-size: var(--hf-font-size-xl);  line-height: var(--hf-line-height-tight); font-weight: var(--hf-font-weight-semibold); }
h3 { font-size: var(--hf-font-size-lg);  line-height: var(--hf-line-height-tight); font-weight: var(--hf-font-weight-semibold); }

a {
  color: var(--hf-color-accent);
  text-decoration: none;
  transition: color var(--hf-motion-fast) var(--hf-ease-standard);
}
a:hover { color: var(--hf-color-fg); }

img, svg { display: block; max-width: 100%; }

:focus-visible {
  outline: var(--hf-focus-width) solid var(--hf-focus-color);
  outline-offset: var(--hf-focus-offset);
  border-radius: var(--hf-radius-sm);
}

::selection { background: var(--hf-color-accent-soft); color: var(--hf-color-fg); }

/* Generic utility helpers used across screens. */
.is-hidden { display: none !important; }
.is-sr-only {
  position: absolute; width: 1px; height: 1px;
  margin: -1px; padding: 0; overflow: hidden;
  clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}

/* Layout helpers. Compose these rather than writing one-off grids. */
.heyfam-container {
  max-width: 640px;
  margin-inline: auto;
  padding-inline: var(--hf-space-4);
}
.heyfam-stack { display: grid; gap: var(--hf-space-4); }
.heyfam-stack--tight { gap: var(--hf-space-2); }
.heyfam-stack--loose { gap: var(--hf-space-5); }
.heyfam-row {
  display: flex; gap: var(--hf-space-3); align-items: center;
}
.heyfam-row--baseline { align-items: baseline; }
.heyfam-row--between  { justify-content: space-between; }
.heyfam-row--wrap     { flex-wrap: wrap; }
```

- [ ] **Step 2: Update `functions.php` to enqueue all three CSS files in order**

In `themes/heyfam-theme/functions.php`, replace the existing `wp_enqueue_style` call (line 36-41) with:

```php
wp_enqueue_style(
    'heyfam-tokens',
    get_theme_file_uri( 'src/styles/tokens.css' ),
    [],
    '0.2.0'
);
wp_enqueue_style(
    'heyfam-base',
    get_theme_file_uri( 'src/styles/base.css' ),
    [ 'heyfam-tokens' ],
    '0.2.0'
);
wp_enqueue_style(
    'heyfam-components',
    get_theme_file_uri( 'src/styles/components.css' ),
    [ 'heyfam-base' ],
    '0.2.0'
);
```

This gives us guaranteed cascade order (tokens → base → components) via WP's stylesheet dependency graph, no concatenation step needed.

- [ ] **Step 3: Smoke test**

Hard-refresh. Even with no components.css yet, body should now use the new font sizes and headings should look distinctly different (no margins, weights and sizes from tokens). The page will look unfinished — that's expected; components.css lands in Task 3.

If the page is broken because `components.css` doesn't exist yet, you can either (a) create an empty placeholder file or (b) gate the enqueue on file existence. Prefer (a): `touch themes/heyfam-theme/src/styles/components.css` so the enqueue resolves to a real (empty) file.

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/src/styles/base.css themes/heyfam-theme/src/styles/components.css themes/heyfam-theme/functions.php
git commit -m "design: base.css with micro-reset + layout helpers; enqueue tokens/base/components"
```

---

## Task 3: components.css — the base component library

**Files:**
- Modify: `themes/heyfam-theme/src/styles/components.css` (rewrite from empty placeholder)
- Delete: `themes/heyfam-theme/src/styles/main.css`

- [ ] **Step 1: Write `components.css`**

Replace the contents of `themes/heyfam-theme/src/styles/components.css` with the full block below. It (a) defines the new base components and (b) preserves the existing app-specific classes (`heyfam-feed`, `heyfam-comment*`, `heyfam-fam-picker*`, `heyfam-auth*`, `heyfam-account*`, `heyfam-emoji-picker`) so screens keep working — but every property goes through tokens.

```css
/*
 * HeyFam component library — vanilla CSS, no preprocessor, no JS.
 *
 * Sections:
 *   - Button
 *   - Input / Textarea / Label
 *   - Card
 *   - Pill / Tag
 *   - Avatar
 *   - Spinner
 *   - EmptyState
 *   - Toast
 *   - Modal
 *   - App-specific re-homes (post-card, comment, composer, fam-picker,
 *     auth screens, account screen, emoji picker)
 */

/* --- Button -------------------------------------------------------- */
.heyfam-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--hf-space-2);
  border: 1px solid transparent;
  border-radius: var(--hf-radius-pill);
  padding: var(--hf-space-2) var(--hf-space-4);
  font: inherit;
  font-weight: var(--hf-font-weight-medium);
  line-height: var(--hf-line-height-tight);
  cursor: pointer;
  background: transparent;
  color: var(--hf-color-fg);
  transition:
    background-color var(--hf-motion-fast) var(--hf-ease-standard),
    color            var(--hf-motion-fast) var(--hf-ease-standard),
    border-color     var(--hf-motion-fast) var(--hf-ease-standard),
    transform        var(--hf-motion-fast) var(--hf-ease-standard);
  user-select: none;
  -webkit-appearance: none;
}
.heyfam-button:active { transform: scale(0.97); }
.heyfam-button:disabled { opacity: 0.5; cursor: not-allowed; }

.heyfam-button--primary {
  background: var(--hf-color-accent);
  color: var(--hf-color-accent-fg);
}
.heyfam-button--primary:hover { filter: brightness(0.95); }

.heyfam-button--secondary {
  background: var(--hf-color-bg-elev);
  border-color: var(--hf-color-border-strong);
  color: var(--hf-color-fg);
}
.heyfam-button--secondary:hover { border-color: var(--hf-color-fg-muted); }

.heyfam-button--ghost {
  background: transparent;
  color: var(--hf-color-fg-muted);
  padding: var(--hf-space-2) var(--hf-space-3);
}
.heyfam-button--ghost:hover { color: var(--hf-color-fg); background: var(--hf-color-accent-soft); }

.heyfam-button--icon {
  width: 2.25rem; height: 2.25rem; padding: 0;
  border-radius: var(--hf-radius-pill);
  background: transparent;
  color: var(--hf-color-fg-muted);
}
.heyfam-button--icon:hover { background: var(--hf-color-accent-soft); color: var(--hf-color-fg); }

.heyfam-button--danger { background: var(--hf-color-danger); color: white; }
.heyfam-button--block  { width: 100%; }

/* --- Input / Textarea --------------------------------------------- */
.heyfam-input,
.heyfam-textarea {
  font: inherit;
  width: 100%;
  padding: var(--hf-space-2) var(--hf-space-3);
  border: 1px solid var(--hf-color-border-strong);
  border-radius: var(--hf-radius-md);
  background: var(--hf-color-bg-elev);
  color: var(--hf-color-fg);
  transition: border-color var(--hf-motion-fast) var(--hf-ease-standard);
  -webkit-appearance: none;
}
.heyfam-input:focus-visible,
.heyfam-textarea:focus-visible {
  outline: none;
  border-color: var(--hf-color-accent);
  box-shadow: 0 0 0 var(--hf-focus-width) var(--hf-color-accent-soft);
}
.heyfam-textarea { resize: vertical; min-height: 2.5rem; line-height: var(--hf-line-height-normal); }
.heyfam-input::placeholder,
.heyfam-textarea::placeholder { color: var(--hf-color-fg-subtle); }

.heyfam-field { display: grid; gap: var(--hf-space-1); }
.heyfam-field__label {
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-fg-muted);
}
.heyfam-field__hint {
  font-size: var(--hf-font-size-xs);
  color: var(--hf-color-fg-subtle);
}
.heyfam-field__error {
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-danger);
  margin: 0;
}

/* --- Card --------------------------------------------------------- */
.heyfam-card {
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-4);
  display: grid;
  gap: var(--hf-space-3);
}
.heyfam-card--tight   { padding: var(--hf-space-3); }
.heyfam-card--elevated{ box-shadow: var(--hf-shadow-md); border-color: transparent; }

/* --- Pill / Tag --------------------------------------------------- */
.heyfam-pill {
  display: inline-flex; align-items: center; gap: var(--hf-space-1);
  padding: 0.15rem var(--hf-space-3);
  border-radius: var(--hf-radius-pill);
  border: 1px solid var(--hf-color-border);
  background: var(--hf-color-bg-elev);
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-fg);
}
.heyfam-pill--accent {
  background: var(--hf-color-accent-soft);
  border-color: transparent;
  color: var(--hf-color-fg);
}

/* --- Avatar ------------------------------------------------------- */
.heyfam-avatar {
  width: var(--hf-avatar-size);
  height: var(--hf-avatar-size);
  border-radius: 50%;
  background: var(--hf-color-bg-elev);
  object-fit: cover;
  flex-shrink: 0;
  display: block;
  /* Outline that survives a transparent SVG background */
  box-shadow: inset 0 0 0 1px var(--hf-color-border);
}
.heyfam-avatar--lg { width: var(--hf-avatar-size-lg); height: var(--hf-avatar-size-lg); }
.heyfam-avatar--square { border-radius: var(--hf-radius-md); }

/* --- Spinner ------------------------------------------------------ */
.heyfam-spinner {
  width: 1.25rem; height: 1.25rem;
  border: 2px solid var(--hf-color-border);
  border-top-color: var(--hf-color-accent);
  border-radius: 50%;
  animation: heyfam-spin 600ms linear infinite;
}
@keyframes heyfam-spin { to { transform: rotate(360deg); } }

/* --- EmptyState --------------------------------------------------- */
.heyfam-empty-state {
  text-align: center;
  padding: var(--hf-space-6) var(--hf-space-4);
  color: var(--hf-color-fg-muted);
  display: grid; gap: var(--hf-space-2);
}
.heyfam-empty-state__title {
  font-size: var(--hf-font-size-lg);
  color: var(--hf-color-fg);
  font-weight: var(--hf-font-weight-semibold);
}

/* --- Toast -------------------------------------------------------- */
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
  animation: heyfam-toast-in var(--hf-motion-normal) var(--hf-ease-standard) both;
}
@keyframes heyfam-toast-in {
  from { transform: translate(-50%, 12px); opacity: 0; }
  to   { transform: translate(-50%, 0);    opacity: 1; }
}

/* --- Modal -------------------------------------------------------- */
.heyfam-modal {
  position: fixed; inset: 0;
  display: grid; place-items: center;
  padding: var(--hf-space-4);
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--hf-z-modal);
}
.heyfam-modal__dialog {
  background: var(--hf-color-bg-elev);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-5);
  max-width: 480px; width: 100%;
  box-shadow: var(--hf-shadow-lg);
  display: grid; gap: var(--hf-space-4);
}

/* ==================================================================
 * App-specific layouts — refactored onto tokens. Behavior identical.
 * ================================================================== */

.heyfam-header {
  padding: var(--hf-space-3) var(--hf-space-4);
  border-bottom: 1px solid var(--hf-color-border);
  background: var(--hf-color-bg-elev);
}

.heyfam-landing { text-align: center; padding-block: var(--hf-space-7); display: grid; gap: var(--hf-space-4); }

.heyfam-feed { display: grid; gap: var(--hf-space-4); padding-block: var(--hf-space-4); }

.heyfam-post-card {
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-4);
  display: grid; gap: var(--hf-space-3);
}
.heyfam-post-card__header {
  display: flex; gap: var(--hf-space-2);
  align-items: center;
  color: var(--hf-color-fg-muted);
  font-size: var(--hf-font-size-sm);
}
.heyfam-post-card__header strong {
  color: var(--hf-color-fg);
  font-weight: var(--hf-font-weight-semibold);
}
.heyfam-post-card__photo { max-width: 100%; border-radius: var(--hf-radius-md); }
.heyfam-post-card__permalink {
  margin-left: auto;
  color: var(--hf-color-fg-subtle);
  font-size: var(--hf-font-size-sm);
}
.heyfam-post-card__reactions {
  display: flex; gap: var(--hf-space-3); align-items: center; flex-wrap: wrap;
}
.heyfam-post-card .heyfam-comments {
  border-top: 1px solid var(--hf-color-border);
  margin-top: var(--hf-space-2); padding-top: var(--hf-space-3);
}

.heyfam-feed__empty { color: var(--hf-color-fg-muted); }

.heyfam-reactions {
  display: flex; gap: var(--hf-space-2);
  padding: 0; margin: 0; list-style: none; flex-wrap: wrap;
}
.heyfam-reactions button {
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-pill);
  padding: 0.15rem var(--hf-space-3);
  background: var(--hf-color-bg-elev);
  cursor: pointer;
  font: inherit;
  transition: background var(--hf-motion-fast) var(--hf-ease-standard);
}
.heyfam-reactions button:hover { background: var(--hf-color-accent-soft); }

.heyfam-composer {
  display: grid; gap: var(--hf-space-2);
  padding: var(--hf-space-3);
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
}
.heyfam-composer textarea {
  resize: vertical; padding: var(--hf-space-2);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-md);
  font: inherit;
  background: var(--hf-color-bg);
}
.heyfam-composer__photo {
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-fg-muted);
  cursor: pointer;
}
.heyfam-composer button {
  align-self: end;
  padding: var(--hf-space-2) var(--hf-space-4);
  border: 0;
  background: var(--hf-color-accent);
  color: var(--hf-color-accent-fg);
  border-radius: var(--hf-radius-pill);
  cursor: pointer;
}

.heyfam-fam-picker { position: relative; }
.heyfam-fam-picker__toggle {
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border-strong);
  border-radius: var(--hf-radius-md);
  padding: var(--hf-space-2) var(--hf-space-3);
  cursor: pointer;
  font: inherit;
  color: var(--hf-color-fg);
}
.heyfam-fam-picker__menu {
  position: absolute; right: 0; top: calc(100% + var(--hf-space-1));
  min-width: 200px;
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border-strong);
  border-radius: var(--hf-radius-md);
  padding: var(--hf-space-2);
  list-style: none;
  box-shadow: var(--hf-shadow-md);
  z-index: var(--hf-z-menu);
}
.heyfam-fam-picker__menu a {
  display: block;
  padding: var(--hf-space-2) var(--hf-space-2);
  border-radius: var(--hf-radius-sm);
  text-decoration: none;
  color: var(--hf-color-fg);
}
.heyfam-fam-picker__menu a:hover { background: var(--hf-color-accent-soft); }

.heyfam-single { display: grid; gap: var(--hf-space-4); padding-block: var(--hf-space-4); }

.heyfam-comments {
  display: grid; gap: var(--hf-space-3);
  padding-top: var(--hf-space-2);
}

.heyfam-comment {
  display: grid;
  grid-template-columns: var(--hf-avatar-size) 1fr;
  gap: var(--hf-space-3);
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-md);
  padding: var(--hf-space-3);
}
.heyfam-comment[data-depth="1"] { margin-left: var(--hf-space-5); }
.heyfam-comment[data-depth="2"] { margin-left: calc(var(--hf-space-5) * 2); }
.heyfam-comment[data-depth="3"] { margin-left: calc(var(--hf-space-5) * 3); }

.heyfam-comment__main { display: grid; gap: var(--hf-space-1); min-width: 0; }
.heyfam-comment__header {
  display: flex; gap: var(--hf-space-2);
  align-items: baseline;
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-fg-muted);
}
.heyfam-comment__header strong {
  color: var(--hf-color-fg);
  font-size: var(--hf-font-size-md);
  font-weight: var(--hf-font-weight-semibold);
}
.heyfam-comment__sep { opacity: 0.5; }
.heyfam-comment__attribution {
  margin: 0;
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-fg-muted);
}
.heyfam-comment__body { margin: 0; word-wrap: break-word; }

.heyfam-comment__footer {
  display: flex; gap: var(--hf-space-3); align-items: center; flex-wrap: wrap;
}
.heyfam-comment__reply {
  background: none; border: 0;
  padding: 0.15rem var(--hf-space-2);
  color: var(--hf-color-fg-muted);
  font: inherit; cursor: pointer;
}
.heyfam-comment__reply:hover { color: var(--hf-color-fg); }
.heyfam-comment__react { font-weight: var(--hf-font-weight-semibold); }

.heyfam-comment-form { display: grid; gap: var(--hf-space-2); }
.heyfam-comment-form textarea {
  padding: var(--hf-space-2);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-md);
  font: inherit; width: 100%;
  background: var(--hf-color-bg);
}
.heyfam-comment-form__actions { display: flex; gap: var(--hf-space-2); justify-content: end; }
.heyfam-comment-form button {
  padding: var(--hf-space-2) var(--hf-space-4); border: 0;
  background: var(--hf-color-accent); color: var(--hf-color-accent-fg);
  border-radius: var(--hf-radius-pill); cursor: pointer; font: inherit;
}
.heyfam-comment-form button[type="button"] {
  background: transparent; color: var(--hf-color-fg-muted);
}
.heyfam-comment-form--inline { display: none; margin-top: var(--hf-space-2); }
.heyfam-comment-form--inline.is-open { display: grid; }
.heyfam-comment-form--root { margin-top: var(--hf-space-3); }

/* --- Auth screens ------------------------------------------------- */
.heyfam-auth { max-width: 420px; padding-block: var(--hf-space-6); display: grid; gap: var(--hf-space-4); }
.heyfam-auth h1 { margin-bottom: var(--hf-space-2); }
.heyfam-auth form { display: grid; gap: var(--hf-space-3); }
.heyfam-auth label {
  display: grid; gap: var(--hf-space-1);
  font-size: var(--hf-font-size-sm);
  color: var(--hf-color-fg-muted);
}
.heyfam-auth input[type=tel],
.heyfam-auth input[type=text] {
  font: inherit;
  padding: var(--hf-space-2) var(--hf-space-3);
  border: 1px solid var(--hf-color-border-strong);
  border-radius: var(--hf-radius-md);
  background: var(--hf-color-bg-elev);
  color: var(--hf-color-fg);
}
.heyfam-auth input:focus-visible {
  outline: var(--hf-focus-width) solid var(--hf-focus-color);
  outline-offset: var(--hf-focus-offset);
}
.heyfam-auth button {
  font: inherit;
  padding: var(--hf-space-2) var(--hf-space-4);
  border: 0;
  border-radius: var(--hf-radius-pill);
  background: var(--hf-color-accent);
  color: var(--hf-color-accent-fg);
  cursor: pointer;
  font-weight: var(--hf-font-weight-medium);
}
.heyfam-auth button[type=button] {
  background: transparent;
  color: var(--hf-color-fg-muted);
}
.heyfam-auth .error { color: var(--hf-color-danger); font-size: var(--hf-font-size-sm); margin: 0; }
.heyfam-auth .prefix { font-size: var(--hf-font-size-sm); color: var(--hf-color-fg-muted); padding-right: var(--hf-space-1); }
.heyfam-auth .dev-hint { font-size: var(--hf-font-size-sm); color: var(--hf-color-fg-subtle); }

/* --- Account screen ---------------------------------------------- */
.heyfam-account { display: grid; gap: var(--hf-space-5); padding-block: var(--hf-space-4); }
.heyfam-account__fam {
  background: var(--hf-color-bg-elev);
  border: 1px solid var(--hf-color-border);
  border-radius: var(--hf-radius-lg);
  padding: var(--hf-space-4);
}
.heyfam-account__fam h2 { margin-top: 0; margin-bottom: var(--hf-space-3); }
.heyfam-account__prefs {
  display: grid; grid-template-columns: 1fr repeat(3, auto);
  gap: var(--hf-space-1) var(--hf-space-4); align-items: center;
}
.heyfam-account__prefs label { font-size: var(--hf-font-size-sm); }

.heyfam-account__avatar {
  display: flex; gap: var(--hf-space-3); align-items: center;
}
.heyfam-account__avatar-actions { display: flex; gap: var(--hf-space-2); }

/* --- Emoji picker (third party) ---------------------------------- */
.heyfam-emoji-picker {
  --background:                var(--hf-color-bg-elev);
  --border-color:              var(--hf-color-border);
  --border-radius:             var(--hf-radius-lg);
  --button-active-background:  var(--hf-color-accent-soft);
  --button-hover-background:   var(--hf-color-accent-soft);
  --indicator-color:           var(--hf-color-accent);
  --num-columns:               8;
  width:                       min(360px, calc(100vw - var(--hf-space-4)));
  height:                      400px;
  box-shadow:                  var(--hf-shadow-lg);
  border-radius:               var(--hf-radius-lg);
}
```

- [ ] **Step 2: Delete the old `main.css`**

```bash
git rm themes/heyfam-theme/src/styles/main.css
```

Verify the page still loads with the new three-file enqueue.

- [ ] **Step 3: Manual smoke**

Open the feed page on Studio. Expected:
- Header has a subtle bottom border + slight background lift.
- Post cards have rounded corners (`--hf-radius-lg`) and tokenized spacing.
- Reaction pills are pill-shaped with subtle borders.
- Buttons in the composer are pill-shaped + accent-color.
- Inputs have a focus ring that matches the accent color.
- No raw hex codes appear in computed styles for any HeyFam element (Search via DevTools: select an element, look at computed styles, only `var(--hf-...)` should appear in declarations from `components.css`).

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/src/styles/components.css
git rm themes/heyfam-theme/src/styles/main.css
git commit -m "design: components.css with base components + app-class token migration; drop main.css"
```

---

## Task 4: Avatar — Composer dep, PHP helper, REST swap

**Files:**
- Modify: `plugins/heyfam-core/composer.json` (add `wi-wissen/boring-avatars`)
- Create: `plugins/heyfam-core/src/Avatars/Avatar.php`
- Create: `plugins/heyfam-core/tests/AvatarTest.php`
- Modify: `plugins/heyfam-core/src/REST/Routes.php` (`serialize_post`, `serialize_comment`)

- [ ] **Step 1: Add the Composer dep**

In `plugins/heyfam-core/composer.json`, add `"wi-wissen/boring-avatars": "^1.0"` to the `require` block. Then:

```bash
cd plugins/heyfam-core && composer require wi-wissen/boring-avatars:^1.0
```

(If `composer require` resolves to a different major, pin to whatever's released. The library is small and stable.)

- [ ] **Step 2: Create the `Avatar` helper**

Create `plugins/heyfam-core/src/Avatars/Avatar.php`:

```php
<?php
namespace HeyFam\Core\Avatars;

use BoringAvatars\AvatarBeam;

/**
 * Server-side avatar generation + storage.
 *
 * Identity model:
 *   - If user_meta `heyfam_avatar_attachment_id` is set, return that
 *     attachment's URL (preferring the `thumbnail` size).
 *   - Otherwise generate a deterministic SVG via boring-avatars seeded
 *     on the user id, return a `data:image/svg+xml;base64,...` URI.
 *
 * `data_uri()` is cheap (no DB writes), but we still memoize per request
 * to keep `serialize_comment()` fast when a single user authors many
 * comments in one payload.
 */
final class Avatar {

    /** Cached SVG-data-URI strings per user, per process. */
    private static array $memo = [];

    /** Palette used by the procedural avatars. Tuned to the HeyFam palette. */
    private const PALETTE = [
        '#d97706', // accent
        '#fef3e2', // accent-soft
        '#f59e0b', // warm
        '#1f1d1a', // fg
        '#fffaf3', // bg
    ];

    public static function url_for_user( int $user_id, int $size = 64 ): string {
        if ( $user_id <= 0 ) {
            return self::generated( 'anon', $size );
        }
        $attachment_id = (int) get_user_meta( $user_id, 'heyfam_avatar_attachment_id', true );
        if ( $attachment_id > 0 ) {
            $url = wp_get_attachment_image_url( $attachment_id, [ $size, $size ] );
            if ( $url ) return $url;
        }
        $seed = (string) $user_id;
        return self::generated( $seed, $size );
    }

    /** Set/replace the uploaded avatar for a user. Returns the attachment id. */
    public static function set_for_user( int $user_id, array $upload ): int|\WP_Error {
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';

        $attach_id = media_handle_sideload( $upload, 0 );
        if ( is_wp_error( $attach_id ) ) return $attach_id;

        // Replace any previous one to keep the media library tidy.
        $previous = (int) get_user_meta( $user_id, 'heyfam_avatar_attachment_id', true );
        if ( $previous > 0 && $previous !== (int) $attach_id ) {
            wp_delete_attachment( $previous, true );
        }
        update_user_meta( $user_id, 'heyfam_avatar_attachment_id', (int) $attach_id );

        unset( self::$memo[ $user_id ] );
        return (int) $attach_id;
    }

    /** Returns a `data:image/svg+xml;base64,...` URI for the given seed. */
    private static function generated( string $seed, int $size ): string {
        $key = $seed . ':' . $size;
        if ( isset( self::$memo[ $key ] ) ) return self::$memo[ $key ];

        $svg = AvatarBeam::make( [
            'name'   => $seed,
            'size'   => (string) $size,
            'colors' => self::PALETTE,
            'title'  => false,
            'square' => false,
        ] );

        $uri = 'data:image/svg+xml;base64,' . base64_encode( $svg );
        self::$memo[ $key ] = $uri;
        return $uri;
    }
}
```

- [ ] **Step 3: Create the integration test**

Create `plugins/heyfam-core/tests/AvatarTest.php`:

```php
<?php
use PHPUnit\Framework\TestCase;

/**
 * @group integration
 */
final class AvatarTest extends TestCase {

    public function test_generated_avatar_is_deterministic(): void {
        $a = \HeyFam\Core\Avatars\Avatar::url_for_user( 42 );
        $b = \HeyFam\Core\Avatars\Avatar::url_for_user( 42 );
        $this->assertSame( $a, $b );
        $this->assertStringStartsWith( 'data:image/svg+xml;base64,', $a );
    }

    public function test_different_users_get_different_avatars(): void {
        $a = \HeyFam\Core\Avatars\Avatar::url_for_user( 42 );
        $b = \HeyFam\Core\Avatars\Avatar::url_for_user( 43 );
        $this->assertNotSame( $a, $b );
    }

    public function test_uploaded_attachment_overrides_generated(): void {
        $user_id  = wp_insert_user( [
            'user_login' => 'avatar-test-' . uniqid(),
            'user_pass'  => 'x',
            'role'       => 'subscriber',
        ] );
        $attach_id = wp_insert_attachment( [
            'post_title'     => 'avatar.png',
            'post_status'    => 'inherit',
            'post_mime_type' => 'image/png',
        ] );
        update_user_meta( $user_id, 'heyfam_avatar_attachment_id', $attach_id );

        $url = \HeyFam\Core\Avatars\Avatar::url_for_user( $user_id );
        $this->assertStringNotContainsString( 'data:image/svg+xml', $url );
        $this->assertStringContainsString( 'wp-content', $url );
    }
}
```

Run:

```bash
cd plugins/heyfam-core && ./vendor/bin/phpunit --filter AvatarTest
```

Expected: 3 tests pass when run inside a WP test env. Skip if no WP test env — manual smoke covers this in Task 5.

- [ ] **Step 4: Wire the helper into `serialize_post` and `serialize_comment`**

In `plugins/heyfam-core/src/REST/Routes.php`:

Replace `serialize_post()` (around line 632):

```php
public static function serialize_post( \WP_Post $p ): array {
    $author    = get_userdata( $p->post_author );
    $thumb     = get_the_post_thumbnail_url( $p, 'large' );
    $reactions = \HeyFam\Core\Reactions\Manager::counts_for( 'post', $p->ID );
    return [
        'id'              => $p->ID,
        'body'            => self::plain_text( $p->post_content ),
        'created_at'      => mysql2date( 'c', $p->post_date_gmt, false ),
        'relative_time'   => self::relative_time( $p->post_date_gmt ),
        'author'          => [
            'id'         => (int) $p->post_author,
            'name'       => $author ? $author->display_name : 'Unknown',
            'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( (int) $p->post_author ),
        ],
        'photo_url'       => $thumb ?: null,
        'reactions'       => $reactions,
        'reactionEntries' => self::entries( $reactions ),
        'comment_count'   => (int) $p->comment_count,
        'permalink'       => get_permalink( $p ),
        'comments'        => self::decorated_comments_for_post( (int) $p->ID ),
    ];
}
```

Replace `serialize_comment()` (around line 675):

```php
public static function serialize_comment( \WP_Comment $c, int $depth = 0, string $parent_name = '' ): array {
    $reactions    = \HeyFam\Core\Reactions\Manager::counts_for( 'comment', (int) $c->comment_ID );
    $visual_depth = min( $depth, self::MAX_VISUAL_DEPTH );
    $is_deep      = $depth > self::MAX_VISUAL_DEPTH;
    $user_id      = (int) $c->user_id;
    $name         = (string) $c->comment_author;
    return [
        'id'              => (int) $c->comment_ID,
        'parent_id'       => (int) $c->comment_parent,
        'body'            => self::plain_text( $c->comment_content ),
        'created_at'      => mysql2date( 'c', $c->comment_date_gmt, false ),
        'author'          => [
            'id'         => $user_id,
            'name'       => $name,
            'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( $user_id ),
        ],
        'reactions'       => $reactions,
        'reactionEntries' => self::entries( $reactions ),
        'depth'           => $visual_depth,
        'is_deep'         => $is_deep,
        'parent_name'     => $is_deep ? $parent_name : '',
        'relative_time'   => self::relative_time( $c->comment_date_gmt ),
    ];
}
```

Notes:
- `avatar_color`, `avatar_style`, and `avatar_initial` are removed. The template will switch to a plain `<img class="heyfam-avatar" src="...">`.
- `avatar_color()` helper in `Routes.php` becomes dead code; delete it (the static method around line 709 + its block-comment line above).

- [ ] **Step 5: Smoke**

In the browser DevTools network panel on a feed page, inspect the `/feed` response. Each comment + post should have `author.avatar_url` set to a `data:image/svg+xml;base64,...` URI. Paste the data URI into a new browser tab — a colorful blob avatar renders.

- [ ] **Step 6: Commit**

```bash
git add plugins/heyfam-core/composer.json plugins/heyfam-core/composer.lock plugins/heyfam-core/src/Avatars/Avatar.php plugins/heyfam-core/tests/AvatarTest.php plugins/heyfam-core/src/REST/Routes.php
git commit -m "avatars: server-rendered boring-avatars SVG via Avatar helper, plus upload path"
```

---

## Task 5: Template refactor — header, fam-picker, composer, post-card, single, feed

**Files:**
- Modify: `themes/heyfam-theme/parts/header.html`
- Modify: `themes/heyfam-theme/parts/fam-picker.html`
- Modify: `themes/heyfam-theme/parts/composer.html`
- Modify: `themes/heyfam-theme/parts/post-card.html`
- Modify: `themes/heyfam-theme/templates/single.html`
- Modify: `themes/heyfam-theme/templates/page-feed.html`
- Modify: `themes/heyfam-theme/templates/index.html`

- [ ] **Step 1: Update `parts/post-card.html` to use `<img class="heyfam-avatar">` for both post header and comments**

Replace `themes/heyfam-theme/parts/post-card.html` with:

```html
<!-- wp:html -->
<template data-wp-each="state.posts" data-wp-each-key="context.item.id">
  <article class="heyfam-post-card"
           data-wp-bind--data-id="context.item.id"
           data-target-type="post">

    <header class="heyfam-post-card__header">
      <img class="heyfam-avatar"
           data-wp-bind--src="context.item.author.avatar_url"
           data-wp-bind--alt="context.item.author.name" />
      <strong data-wp-text="context.item.author.name"></strong>
      <time class="heyfam-post-card__time"
            data-wp-bind--datetime="context.item.created_at"
            data-wp-text="context.item.relative_time"></time>
      <a class="heyfam-post-card__permalink"
         data-wp-bind--href="context.item.permalink"
         title="Link to this post">#</a>
    </header>

    <div class="heyfam-post-card__body" data-wp-text="context.item.body"></div>

    <img class="heyfam-post-card__photo"
         data-wp-bind--src="context.item.photo_url"
         data-wp-class--is-hidden="!context.item.photo_url" alt="" />

    <footer class="heyfam-post-card__reactions">
      <ul class="heyfam-reactions">
        <template data-wp-each--entry="context.item.reactionEntries">
          <li>
            <button data-wp-on--click="heyfam/reactions::actions.toggle">
              <span data-wp-text="context.entry.0"></span>
              <span data-wp-text="context.entry.1"></span>
            </button>
          </li>
        </template>
        <li><button class="heyfam-button heyfam-button--icon" data-wp-on--click="heyfam/reactions::actions.openPicker">+</button></li>
      </ul>
    </footer>

    <section class="heyfam-comments">
      <template data-wp-each--comment="heyfam/feed::context.item.comments"
                data-wp-each-key="context.comment.id">
        <article class="heyfam-comment"
                 data-wp-class--heyfam-comment--deep="context.comment.is_deep"
                 data-wp-bind--data-depth="context.comment.depth"
                 data-wp-bind--data-id="context.comment.id"
                 data-target-type="comment">
          <img class="heyfam-avatar"
               data-wp-bind--src="context.comment.author.avatar_url"
               data-wp-bind--alt="context.comment.author.name" />
          <div class="heyfam-comment__main">
            <header class="heyfam-comment__header">
              <strong data-wp-text="context.comment.author.name"></strong>
              <span class="heyfam-comment__sep">·</span>
              <time class="heyfam-comment__time"
                    data-wp-bind--datetime="context.comment.created_at"
                    data-wp-text="context.comment.relative_time"></time>
            </header>
            <p class="heyfam-comment__attribution"
               data-wp-class--is-hidden="!context.comment.parent_name">
              ↳ @<span data-wp-text="context.comment.parent_name"></span>
            </p>
            <div class="heyfam-comment__body" data-wp-text="context.comment.body"></div>
            <footer class="heyfam-comment__footer">
              <ul class="heyfam-reactions">
                <template data-wp-each--entry="context.comment.reactionEntries">
                  <li>
                    <button data-wp-on--click="heyfam/reactions::actions.toggle">
                      <span data-wp-text="context.entry.0"></span>
                      <span data-wp-text="context.entry.1"></span>
                    </button>
                  </li>
                </template>
                <li><button class="heyfam-button heyfam-button--icon heyfam-comment__react" data-wp-on--click="heyfam/reactions::actions.openPicker">+</button></li>
              </ul>
              <button class="heyfam-comment__reply"
                      data-wp-on--click="heyfam/comments::actions.reply">Reply</button>
            </footer>

            <form class="heyfam-comment-form heyfam-comment-form--inline"
                  data-wp-interactive="heyfam/comments"
                  data-wp-on--submit="actions.submit">
              <textarea data-wp-on--input="actions.updateBody"
                        data-wp-bind--value="state.body"
                        placeholder="Reply…" rows="2"></textarea>
              <div class="heyfam-comment-form__actions">
                <button type="button" class="heyfam-button heyfam-button--ghost" data-wp-on--click="actions.cancelReply">Cancel</button>
                <button type="submit" class="heyfam-button heyfam-button--primary" data-wp-bind--disabled="state.submitting">Send</button>
              </div>
            </form>
          </div>
        </article>
      </template>

      <form class="heyfam-comment-form heyfam-comment-form--root"
            data-wp-interactive="heyfam/comments"
            data-wp-on--submit="actions.submit">
        <textarea class="heyfam-textarea" placeholder="Add a comment…" rows="2"></textarea>
        <button type="submit" class="heyfam-button heyfam-button--primary" data-wp-bind--disabled="state.submitting">Send</button>
      </form>
    </section>
  </article>
</template>
<!-- /wp:html -->
```

Key changes:
- Replaced `<div class="heyfam-comment__avatar">` with `<img class="heyfam-avatar">`.
- Added avatar `<img>` on the post header too.
- Send/Cancel buttons get `heyfam-button` classes; the root textarea gets `heyfam-textarea`.
- React-pickers get the `heyfam-button--icon` class.

- [ ] **Step 2: Update `parts/composer.html` to show the current user's avatar slot**

Replace `themes/heyfam-theme/parts/composer.html` with:

```html
<!-- wp:html -->
<form class="heyfam-composer"
      data-wp-interactive="heyfam/composer"
      data-wp-on--submit="actions.submit">
  <textarea class="heyfam-textarea" name="body" rows="2" placeholder="Hey fam…"
            data-wp-bind--value="state.body"
            data-wp-on--input="actions.updateBody" required></textarea>
  <div class="heyfam-row heyfam-row--between">
    <label class="heyfam-composer__photo">
      <input type="file" accept="image/*" data-wp-on--change="actions.pickPhoto" hidden />
      <span class="heyfam-pill" data-wp-text="state.photoLabel">Add photo</span>
    </label>
    <button type="submit" class="heyfam-button heyfam-button--primary" data-wp-bind--disabled="state.submitting">
      <span data-wp-class--is-hidden="state.submitting">Post</span>
      <span data-wp-class--is-hidden="!state.submitting">
        <span class="heyfam-spinner"></span>
        Posting…
      </span>
    </button>
  </div>
</form>
<!-- /wp:html -->
```

- [ ] **Step 3: Update `parts/fam-picker.html`**

Replace `themes/heyfam-theme/parts/fam-picker.html` with:

```html
<!-- wp:html -->
<div class="heyfam-fam-picker"
     data-wp-interactive="heyfam/famPicker"
     data-wp-init="callbacks.load">
  <button class="heyfam-button heyfam-button--ghost heyfam-fam-picker__toggle"
          data-wp-on--click="actions.toggle"
          data-wp-bind--aria-expanded="state.open">
    <span data-wp-text="state.currentName">Pick a fam</span>
    <span aria-hidden="true">▾</span>
  </button>
  <ul class="heyfam-fam-picker__menu" data-wp-class--is-hidden="!state.open">
    <template data-wp-each="state.fams">
      <li>
        <a data-wp-bind--href="context.item.url" data-wp-text="context.item.name"></a>
      </li>
    </template>
    <li><a href="/signup">+ New fam</a></li>
  </ul>
</div>
<!-- /wp:html -->
```

- [ ] **Step 4: Update `templates/index.html` (landing)**

Replace `themes/heyfam-theme/templates/index.html` with:

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->

<!-- wp:group {"layout":{"type":"constrained"},"className":"heyfam-landing heyfam-stack heyfam-stack--loose"} -->
<div class="wp-block-group heyfam-landing heyfam-stack heyfam-stack--loose">
  <!-- wp:heading {"level":1} --><h1>HeyFam</h1><!-- /wp:heading -->
  <!-- wp:paragraph --><p>Family conversations, organized.</p><!-- /wp:paragraph -->
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button --><div class="wp-block-button"><a class="wp-block-button__link heyfam-button heyfam-button--primary" href="/signup">Start a fam</a></div><!-- /wp:button -->
    <!-- wp:button {"className":"is-style-outline"} --><div class="wp-block-button is-style-outline"><a class="wp-block-button__link heyfam-button heyfam-button--secondary" href="/login">Log in</a></div><!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->
```

- [ ] **Step 5: Update `templates/single.html` and `templates/page-feed.html`**

These two are largely fine; they just need to render with the new token-driven CSS, which happens automatically. No content change needed unless we want to tighten the markup (we don't).

- [ ] **Step 6: Hard-refresh and smoke**

On the feed page:
- Composer card looks tokenized, post button is pill-shaped, photo-label is a pill.
- Each comment shows a small `beam` SVG avatar on the left. Each post shows its author's avatar at the top.
- Reactions look like before; the "+" button is now a circular icon button.

If the avatar data URI is not appearing in the IAPI-rendered DOM, check that `process_directives` is still running for `heyfam/feed` (the existing render_block filter in `functions.php` handles this). It should — we didn't change that pathway.

- [ ] **Step 7: Commit**

```bash
git add themes/heyfam-theme/parts/post-card.html themes/heyfam-theme/parts/composer.html themes/heyfam-theme/parts/fam-picker.html themes/heyfam-theme/templates/index.html
git commit -m "design: refactor templates to use heyfam-button/input/avatar; add post-author avatar"
```

---

## Task 6: Auth screens refactor — login, signup, invite, account

**Files:**
- Modify: `themes/heyfam-theme/templates/page-login.html`
- Modify: `themes/heyfam-theme/templates/page-signup.html`
- Modify: `themes/heyfam-theme/templates/page-invite.html`
- Modify: `themes/heyfam-theme/templates/page-account.html`

The existing `.heyfam-auth` styles already work (they were tokenized in Task 3). This task is about adding component classes to the form elements so the system is internally consistent.

- [ ] **Step 1: page-login, page-signup, page-invite**

For each of these three templates, find every `<input type="tel">` / `<input type="text">` and add `class="heyfam-input"`. Add `class="heyfam-button heyfam-button--primary"` to `<button type="submit">` and `class="heyfam-button heyfam-button--ghost"` to `<button type="button">`. Wrap each form-control + label pair in `<div class="heyfam-field">…</div>` where it's not already done. (The `.heyfam-auth label` rules in components.css already do the field-stacking via `display: grid`, so it's optional — only add `heyfam-field` if you actually wrap a hint or error inside.)

Example transformation for the phone form in `page-signup.html` (around line 9):

```html
<form data-wp-class--is-hidden="state.phoneFormHidden" data-wp-on--submit="actions.submitPhone">
  <label>Your phone
    <input class="heyfam-input" type="tel" inputmode="tel" autocomplete="tel"
           data-wp-on--input="actions.updatePhone" data-wp-bind--value="state.phone"
           placeholder="+15555550100" required />
  </label>
  <p class="error" data-wp-class--is-hidden="!state.error" data-wp-text="state.error"></p>
  <button type="submit" class="heyfam-button heyfam-button--primary heyfam-button--block"
          data-wp-bind--disabled="state.busy">Send code</button>
</form>
```

Notes:
- `heyfam-button--block` makes the button full-width on small screens — appropriate on phone auth forms.
- `inputmode="tel"` + `autocomplete="tel"` are correctness niceties, not cosmetic — they save users tapping a number pad.

Apply the same pattern to the code form, profile form, and invite/login equivalents.

- [ ] **Step 2: page-account.html — add the avatar block**

Add an account avatar section after the page header. Replace the current `<h1>Account settings</h1>` block (line 7) with:

```html
<h1>Account settings</h1>

<section class="heyfam-account__avatar heyfam-card heyfam-card--tight"
         data-wp-init="callbacks.loadMe">
  <img class="heyfam-avatar heyfam-avatar--lg"
       data-wp-bind--src="state.me.avatar_url" alt="Your avatar" />
  <div class="heyfam-stack heyfam-stack--tight">
    <strong data-wp-text="state.me.name">Your name</strong>
    <div class="heyfam-account__avatar-actions">
      <label class="heyfam-button heyfam-button--secondary">
        <input type="file" accept="image/*" hidden
               data-wp-on--change="actions.pickAvatar" />
        Change photo
      </label>
      <button type="button" class="heyfam-button heyfam-button--ghost"
              data-wp-class--is-hidden="!state.me.has_uploaded_avatar"
              data-wp-on--click="actions.clearAvatar">Reset</button>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Wire the account-avatar actions**

Modify `themes/heyfam-theme/src/interactivity/account.js` (existing file). Inside the `state` block, add an `me` object:

```js
me: { name: '', avatar_url: '', has_uploaded_avatar: false },
```

Add two new actions inside the `actions` block:

```js
*pickAvatar( e ) {
  const file = e?.target?.files?.[0];
  if ( ! file ) return;
  const heyfam = store( 'heyfam' ).state;
  const fd = new FormData();
  fd.append( 'photo', file );
  try {
    const r = yield fetch( `${heyfam.apiBase}/me/avatar`, {
      method: 'POST', credentials: 'include',
      headers: { 'X-WP-Nonce': heyfam.nonce }, body: fd,
    } );
    if ( ! r.ok ) throw new Error( 'avatar-failed' );
    const body = yield r.json();
    state.me.avatar_url          = body.avatar_url;
    state.me.has_uploaded_avatar = true;
  } catch ( err ) {
    alert( 'Could not update photo. Try again.' );
  }
},
*clearAvatar() {
  const heyfam = store( 'heyfam' ).state;
  try {
    const r = yield fetch( `${heyfam.apiBase}/me/avatar`, {
      method: 'DELETE', credentials: 'include',
      headers: { 'X-WP-Nonce': heyfam.nonce },
    } );
    if ( ! r.ok ) throw new Error( 'reset-failed' );
    const body = yield r.json();
    state.me.avatar_url          = body.avatar_url;
    state.me.has_uploaded_avatar = false;
  } catch ( err ) {
    alert( 'Could not reset. Try again.' );
  }
},
```

Add a new callback `loadMe` inside `callbacks`:

```js
*loadMe() {
  const heyfam = store( 'heyfam' ).state;
  if ( ! heyfam.userId ) return;
  try {
    const r = yield fetch( `${heyfam.apiBase}/me`, {
      credentials: 'include',
      headers: { 'X-WP-Nonce': heyfam.nonce },
    } );
    if ( ! r.ok ) return;
    const body = yield r.json();
    state.me.name                = body.name || '';
    state.me.avatar_url          = body.avatar_url || '';
    state.me.has_uploaded_avatar = !! body.has_uploaded_avatar;
  } catch ( err ) {
    // ignore; the page still works without the avatar block
  }
},
```

- [ ] **Step 4: Build the bundle**

```bash
npm run build:theme
```

- [ ] **Step 5: Commit**

```bash
git add themes/heyfam-theme/templates/page-login.html themes/heyfam-theme/templates/page-signup.html themes/heyfam-theme/templates/page-invite.html themes/heyfam-theme/templates/page-account.html themes/heyfam-theme/src/interactivity/account.js themes/heyfam-theme/build/
git commit -m "design: refactor auth/account screens to heyfam-* components; account avatar block"
```

---

## Task 7: Avatar upload — REST routes + handler

**Files:**
- Modify: `plugins/heyfam-core/src/REST/Routes.php` (`register` + new methods)

- [ ] **Step 1: Add the three new REST routes**

In `plugins/heyfam-core/src/REST/Routes.php`, inside `register()`, add (next to the existing `/me/fams` registration around line 190):

```php
register_rest_route( 'heyfam/v1', '/me', [
    'methods'             => 'GET',
    'permission_callback' => static fn() => is_user_logged_in(),
    'callback'            => [ $this, 'me_get' ],
] );

register_rest_route( 'heyfam/v1', '/me/avatar', [
    'methods'             => 'POST',
    'permission_callback' => static fn() => is_user_logged_in(),
    'callback'            => [ $this, 'me_avatar_set' ],
] );

register_rest_route( 'heyfam/v1', '/me/avatar', [
    'methods'             => 'DELETE',
    'permission_callback' => static fn() => is_user_logged_in(),
    'callback'            => [ $this, 'me_avatar_clear' ],
] );
```

Then add the three handler methods near the other route callbacks (e.g., right after `get_prefs`/`set_prefs`):

```php
public function me_get(): \WP_REST_Response {
    $uid    = get_current_user_id();
    $user   = get_userdata( $uid );
    $uploaded = (int) get_user_meta( $uid, 'heyfam_avatar_attachment_id', true ) > 0;
    return new \WP_REST_Response( [
        'id'                  => $uid,
        'name'                => $user ? $user->display_name : '',
        'avatar_url'          => \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 96 ),
        'has_uploaded_avatar' => $uploaded,
    ], 200 );
}

public function me_avatar_set( \WP_REST_Request $request ): \WP_REST_Response {
    $files = $request->get_file_params();
    $photo = $files['photo'] ?? null;
    if ( ! $photo || empty( $photo['tmp_name'] ) ) {
        return new \WP_REST_Response( [ 'error' => 'no_file' ], 400 );
    }
    $allowed = [ 'image/jpeg', 'image/png', 'image/webp', 'image/gif' ];
    $type    = wp_check_filetype( $photo['name'] )['type'] ?? '';
    if ( ! in_array( $type, $allowed, true ) ) {
        return new \WP_REST_Response( [ 'error' => 'bad_type' ], 400 );
    }
    $uid    = get_current_user_id();
    $result = \HeyFam\Core\Avatars\Avatar::set_for_user( $uid, $photo );
    if ( is_wp_error( $result ) ) {
        return new \WP_REST_Response( [ 'error' => $result->get_error_code() ], 400 );
    }
    return new \WP_REST_Response( [
        'ok'         => true,
        'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 96 ),
    ], 200 );
}

public function me_avatar_clear(): \WP_REST_Response {
    $uid     = get_current_user_id();
    $existing = (int) get_user_meta( $uid, 'heyfam_avatar_attachment_id', true );
    if ( $existing ) {
        wp_delete_attachment( $existing, true );
        delete_user_meta( $uid, 'heyfam_avatar_attachment_id' );
    }
    return new \WP_REST_Response( [
        'ok'         => true,
        'avatar_url' => \HeyFam\Core\Avatars\Avatar::url_for_user( $uid, 96 ),
    ], 200 );
}
```

Notes:
- The upload uses the same `media_handle_sideload` flow that's already in `Posts/Composer.php`, but via the `Avatar::set_for_user` helper from Task 4.
- The clear endpoint is for the Reset button.
- `me_avatar_set` is intentionally lenient about file type (image/* only); the WP attachment pipeline handles the rest, and `wp_check_filetype` does the basic gate.

- [ ] **Step 2: Manual smoke**

1. Log in as a user; visit `/account`.
2. The avatar block shows the procedural beam SVG (deterministic per user id) and the "Change photo" button.
3. Click "Change photo", pick a local image. The avatar should swap to the new image within a second.
4. Visit the feed page. Your post and comment avatars should now use the uploaded image.
5. Back on `/account`, click "Reset". The avatar reverts to the procedural beam.

- [ ] **Step 3: Commit**

```bash
git add plugins/heyfam-core/src/REST/Routes.php
git commit -m "avatars: /me + /me/avatar (POST/DELETE) routes for upload + reset"
```

---

## Task 8: Documentation — `docs/design-system.md`

**Files:**
- Create: `docs/design-system.md`

- [ ] **Step 1: Write the one-page doc**

Create `docs/design-system.md`:

```markdown
# HeyFam design system

A small, opinionated token + component layer. Used by every theme template.

## Token sources

- `themes/heyfam-theme/theme.json` is the source of truth for:
  - Color palette (`--wp--preset--color--*`).
  - Font sizes (`--wp--preset--font-size--*`).
  - Spacing scale (`--wp--preset--spacing--*`).
  - Shadow presets (`--wp--preset--shadow--*`).
  - Plus a `settings.custom` tree that generates `--wp--custom--*` (radii, motion durations/easing, focus ring, z-index scale, line-height + font-weight scales, avatar sizes).

- `themes/heyfam-theme/src/styles/tokens.css` aliases everything onto a short `--hf-*` namespace and rebinds the semantic color tokens for `prefers-color-scheme: dark`.

## Token usage

Components should reference `--hf-*` tokens only. Don't drop a raw hex into `components.css`. If a value is missing, add it to `tokens.css` (and ideally to `theme.json` if it should also exist in the Site Editor surface).

## Component vocabulary

Defined in `themes/heyfam-theme/src/styles/components.css`:

- `heyfam-button` — modifiers: `--primary` `--secondary` `--ghost` `--icon` `--danger` `--block`.
- `heyfam-input`, `heyfam-textarea`, `heyfam-field` (label/hint/error stack).
- `heyfam-card` — modifiers: `--tight` `--elevated`.
- `heyfam-pill` — modifier: `--accent`.
- `heyfam-avatar` — modifiers: `--lg` `--square`.
- `heyfam-spinner` — small spinning ring.
- `heyfam-empty-state` — centered empty-screen card.
- `heyfam-toast` — fixed-bottom transient notification.
- `heyfam-modal` — backdrop + dialog.

Layout helpers (in `base.css`): `heyfam-stack`, `heyfam-stack--tight/--loose`, `heyfam-row`, `heyfam-row--between/--baseline/--wrap`, `heyfam-container`.

Utilities (in `base.css`): `is-hidden`, `is-sr-only`.

## Avatars

- Source of truth: `plugins/heyfam-core/src/Avatars/Avatar.php`.
- `Avatar::url_for_user( $user_id, $size )` returns either a WP media URL (when the user has uploaded an image) or a `data:image/svg+xml;base64,...` URI generated by `wi-wissen/boring-avatars` (beam variant, deterministic per user id).
- Used inside `serialize_post()` and `serialize_comment()`; surfaced as `author.avatar_url`.
- Front-end consumes via `<img class="heyfam-avatar" data-wp-bind--src="...author.avatar_url">`.
- Upload via `/wp-json/heyfam/v1/me/avatar` (POST multipart with `photo`).
- Reset via `/wp-json/heyfam/v1/me/avatar` (DELETE).
- Storage: WP media library, referenced by user_meta key `heyfam_avatar_attachment_id`.
- No Gravatar dependency.

## Adding a new component

1. Define the rule in `components.css`, using `--hf-*` tokens only.
2. If a needed token doesn't exist, add it to `tokens.css` (and to `theme.json` `settings.custom` if it should be a real preset).
3. Add markup to the relevant template part with the new class name.
4. Document the modifier set here.
```

- [ ] **Step 2: Commit**

```bash
git add docs/design-system.md
git commit -m "docs: design-system.md cataloguing tokens, components, and avatar contract"
```

---

## Post-implementation smoke checklist

Run through these in the Studio site after all tasks land:

1. Landing page (`/`) renders with new hero styling — buttons pill-shaped, accent color matches `--hf-color-accent`.
2. Auth screens (`/signup`, `/login`, `/invite/...`) — inputs have rounded borders, focus rings appear on tab, buttons are pill-shaped.
3. Feed page — composer card is tokenized, each post has an avatar in its header.
4. Single-post page — same as feed, comments have avatars on the left, reply form uses `heyfam-button`/`heyfam-textarea`.
5. Account screen — avatar block at the top shows the beam SVG; upload works; reset works.
6. Inspect any element with DevTools — computed styles for HeyFam classes should be made of `var(--hf-*)` references, no raw hex.
7. Toggle macOS / system dark mode — the page rebinds to dark surface colors via the media query.
8. `prefers-reduced-motion` toggled on — transitions disappear.
9. Push notification toggle on `/account` (Notif Dev workstream) keeps working — Task 6 didn't touch that store's plumbing.
10. Reactions still work on both posts and comments (Task 5 didn't change the reactions store).

---

## Not in this plan (deferred)

- **Future plans (invite-onboarding, media, polls) append component classes to `components.css`.** This plan creates that file (Task 3) and writes all the foundational rules; later plans add only their feature-specific classes (`.heyfam-stepper`, `.heyfam-gallery`, `.heyfam-poll`, etc.) below the existing block. None of those plans should re-write or delete what landed here.
- Toast/Modal/EmptyState are defined in CSS but no JS-driven Toast manager is built — first user is the next workstream that needs one (e.g. Onboarding's "skip and invite later" nudge).
- Real cropping UI for uploaded avatars — v1 uploads use whatever aspect ratio the user picks. `media_handle_sideload` resizes for storage, and `wp_get_attachment_image_url( [ 64, 64 ] )` gives us a thumbnail at render time.
- Site Editor exposure of the dark-mode palette as a separate style variation — outside scope.
- Refactoring the third-party `emoji-picker-element` to be token-driven beyond CSS variables we already pass (it uses its own internal CSS).
- Animation tokens beyond duration + easing (no spring physics, no keyframe library).
- Per-component PHP partials — explicitly rejected; we're using HTML+CSS classes.