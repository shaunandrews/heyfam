# HeyFam — Polish & UX Orchestrator

Coordinates the in-flight polish workstreams. Each one gets its own research-driven plan in `docs/superpowers/plans/`, reviewed for cross-plan conflicts, then implemented (parallel where possible, serial where files overlap).

## Workstreams

### 1. Design System & Avatars

**Goal:** Replace the ad-hoc CSS with consistent design tokens and a small base-component layer. Bring back avatars without leaking on Gravatar.

**Why now:** Shaun's read of the current UI is "all over the place, super ugly." Every other visible feature (invite flow, polls, media) is downstream of this. Cheapest way to make the whole product feel coherent.

**Requirements:**
- Token files for color, typography (size + weight + line-height), spacing scale, radii, elevation/shadow, motion (duration + easing). Light + dark. Surfaced as CSS custom properties through `theme.json` where possible.
- Base component library, used everywhere: Button (primary/secondary/ghost/icon), Input, Textarea, Card, Modal, Toast/Snackbar, EmptyState, Avatar, Pill/Tag, Spinner.
- Avatar component: colored-initial fallback as today, plus a path for uploaded image (no Gravatar). Color hash deterministic per user id.
- Audit and refactor existing templates/CSS to use tokens.
- Document tokens + components inside the repo (`docs/design-system.md`).

**Open questions for the research agent:**
- Pure CSS custom properties vs. piping through `theme.json` (which dictates Site Editor exposure too).
- Should base components be PHP partials, Interactivity API components, or just CSS classes?
- Avatar storage: WP media library? Plugin-managed table? Lazy decision but the plan should commit.

---

### 2. Invite & Onboarding Flow

**Goal:** A clear path from signup → fam creation → inviting first members, in one flow rather than three disconnected screens.

**Why now:** Right now signup, fam-create, and invite live on separate pages. A new user has to figure out the next step themselves. Inviting family is the activation moment.

**Requirements:**
- Stepped onboarding (1/3 phone, 2/3 fam, 3/3 invite). Visual progress indicator.
- Step 3 lets the user paste a list of phone numbers (one per line, comma-separated, however they paste) — and offers the device contact picker where supported.
- "Skip and invite later" link with a follow-up nudge on next visit.
- Existing user signing into a new device: skip onboarding wizard entirely.
- Invite-link landing page already exists — keep it, but improve its design to match the new system.

**Open questions:**
- Should the invite step pre-fill a friendly SMS template the inviter can edit? Or is the template fixed?
- Do we let invitees see who else has been invited to the same fam?

---

### 3. Test Infrastructure & Dev Helpers

**Goal:** Make development repeatable. We want to test onboarding without having to manually reset state every time, and we want regressions to fail loudly.

**Why now:** Twice in the past hour we needed to re-test onboarding and had to delete users by hand. With more flows landing, the lack of test infrastructure compounds.

**Requirements:**
- PHPUnit `@group integration` tests against a real WP test env — at minimum: REST routes happy path, FanOut scheduling, slug validation, comment parent validation.
- Lightweight JS unit tests for pure helpers (`flatten`, `relativeTime`, `decorateComment`) — Vitest or Bun, run on CI.
- Playwright e2e for the golden path: signup → fam creation → post → invite → second user joins → comments → reactions. Headless mode against local Studio.
- `wp heyfam reset-me` CLI command that purges the current user's verification state and removes empty fams they created, for fast repeat onboarding.
- `wp heyfam seed-demo` CLI command that creates a demo fam with sample users, posts, and comments — useful for design work.
- Dev banner (controlled by `WP_DEBUG` or an env var) with shortcuts to reset / seed / log out.

**Open questions:**
- Vitest vs. Jest vs. Bun test for JS — pick whichever has the smallest installer footprint.
- Where do we host the WP test env on local — bundled with Studio? Separate `wp-env`? Document the setup the user needs.

---

### 4. Notification Dev & Test Setup

**Goal:** Test email and push end-to-end on the local Studio site, without consuming real Twilio/Postmark credit.

**Why now:** Notifications are wired but unverified. We need a feedback loop to iterate on notification copy, timing, and behavior.

**Requirements:**
- Email: catch local `wp_mail` calls in a viewer (Mailpit, Mailhog, or a WP plugin like Mail Logger). Document setup. Default to noisy logging if no viewer is set up.
- Push: dev-mode VAPID key generator and registration; test using a real browser. Document the chrome://serviceworker-internals workflow.
- Optional CLI: `wp heyfam send-test-notification --user=X --kind=post|comment|reaction` to dispatch a one-off so we can verify the visual without staging a full content event.
- SMS: leave a TODO to point Twilio at the staging URL when the time comes. The existing inbound webhook + stop/help logic should be exercised once that's set up.

**Open questions:**
- Studio container access — can we run Mailpit inside the Studio process, or alongside it via Docker?
- Are we OK with a one-time `npx web-push generate-vapid-keys` step documented in the dev README?

---

### 5. Media Sharing

**Goal:** Posts can include more than one image, and (eventually) short video.

**Why now:** Family chat is heavy on media. Single-photo posts feel limiting once people use it for real.

**Requirements:**
- Multi-image attach on compose (paste / drag / file picker, up to N).
- Server-side: resize/compress to multiple sizes via WP's image-size hooks.
- Client: render a small gallery (1 image full, 2 side-by-side, 3 split-grid, 4+ grid+overflow indicator). Lightbox on tap.
- Storage decision: WP media library (recommended; gives us the existing thumbnails infra) vs. separate table.

**Open questions:**
- Video: v1 with image-only, or stretch to include short videos right away? The plan should pick.
- HEIC / iOS photo conversion — server-side?
- Cap on per-post images and per-fam total storage?

---

### 6. Polls

**Goal:** Family polls — "where for dinner?" "movie night Saturday?"

**Why now:** The original product brief opened with the "what's for dinner" use case. Polls are the obvious specialization.

**Requirements:**
- Compose: question + 2–N options (start with 2–6).
- Vote: one per fam member, single-choice for v1.
- Live result reveal — show counts immediately after voting, with a "show who voted" toggle.
- Close-by date (optional) or stay-open-forever.
- Surfaced in the feed alongside regular posts.

**Open questions:**
- Post type: separate `heyfam_poll` post type? Or a `poll` meta on a regular post?
- Multi-choice variant? Re-open vote? Anonymous vs. revealed votes?

---

## Process

1. **Plan agents** (research + write) run in parallel, one per workstream above.
2. **Review agent** ingests all 6 plans, looks for shared files / contradicting decisions / missing dependencies, and either approves or returns issues for the original plan agents to fix.
3. **Implementation agents** execute plans. Run in parallel when their target files don't overlap; serialize otherwise. Foundation first (design system + dev helpers), then features that build on it.

## Rollout order

- **Phase A (parallel):** test-infra foundation + notif-dev. Both lay shared scaffolding; no UI files touched. notif-dev creates `plugins/heyfam-core/src/Cli/Bootstrap.php`; test-infra modifies it to add `reset-me` and `seed-demo`.
- **Phase B (solo):** design-system. Lands tokens + components + avatars, splits `main.css` into `tokens.css` + `base.css` + `components.css`, and refactors `serialize_post`, `parts/composer.html`, `parts/post-card.html`. Blocks subsequent visual work.
- **Phase C (parallel):** test-infra CLI + dev banner. Builds on design-system tokens; dev-banner styles append to `components.css`.
- **Phase D (sequential):** invite-onboarding → media → polls. Each one's `composer.html` / `post-card.html` / `composer.js` / `serialize_post` edits build additively on the previous. media converts the legacy `<img>` into a gallery template-part; polls adds the poll widget block + `poll` REST key without touching media's gallery contract.

## Plans index

- [Design System & Avatars](plans/2026-05-11-design-system.md)
- [Invite & Onboarding Flow](plans/2026-05-11-invite-onboarding.md)
- [Test Infrastructure & Dev Helpers](plans/2026-05-11-test-infra.md)
- [Notification Dev & Test Setup](plans/2026-05-11-notif-dev.md)
- [Media Sharing](plans/2026-05-11-media.md)
- [Polls](plans/2026-05-11-polls.md)
