# Cross-plan review — 2026-05-11

Six plans, lots of shared surface. Real conflicts, missing deps, suggested order, per-plan status.

---

## Conflicts to resolve

**1. CLI directory casing.** notif-dev creates `src/CLI/Bootstrap.php` (all-caps); test-infra creates `src/Cli/Commands.php`, `Cli/ResetMe.php`, `Cli/SeedDemo.php` (Pascal). Case-insensitive macOS hides it; PSR-4 autoload + Linux CI will break. **Fix:** standardize on `CLI/` (notif-dev's casing, since it explicitly calls itself the coordination point). Rename test-infra's namespaces to `HeyFam\Core\CLI\…`.

**2. Two CLI bootstrap designs.** notif-dev's `CLI\Bootstrap` (constructor, called from `Plugin::boot()`) registers `send-test-notification`. test-infra's `Cli\Commands::register()` (static, called from `heyfam-core.php`) registers `reset-me` + `seed-demo`. **Fix:** one bootstrap. Move test-infra's two commands into notif-dev's `CLI\Bootstrap` class — three alphabetized `WP_CLI::add_command()` calls in one place.

**3. `Routes.php::serialize_post()` rewritten by three plans.** design-system adds `author.avatar_url` and drops the `avatar_color`/`avatar_initial`/`avatar_style` triplet. media adds `images[]` + `image_count` (keeps `photo_url`). polls adds a `poll` field. Each plan's "Replace serialize_post() with:" block omits the others' fields. **Fix:** strictly additive. Sequence design-system → media → polls; each implementer diffs against the previously-landed version, not against today's main.

**4. `parts/composer.html` rewritten by three plans.** design-system (heyfam-card wrapper, avatar slot, new component classes), media (multi-file input, drop-zone, preview strip), polls (poll-mode toggle, options list, close-date, anon). Each rewrites the whole file. Same problem with `themes/heyfam-theme/src/interactivity/composer.js` (media and polls both replace its entire contents). **Fix:** sequence the same way (design-system → media → polls); each rebases on the prior baseline.

**5. `parts/post-card.html` rewritten by three plans.** design-system swaps the avatar div for `<img class="heyfam-avatar">`; media replaces the bare `<img>` with a gallery template-part; polls adds a `.heyfam-poll` widget branch. **Fix:** same sequence and rebase rule.

**6. `themes/heyfam-theme/src/styles/main.css` — deleted vs. appended.** design-system *deletes* `main.css` (replaces with `tokens.css` + `base.css` + `components.css`). invite-onboarding, media, polls, and test-infra all *append* rules to `main.css`. **Fix:** if design-system lands first (recommended), retarget every "append to main.css" step to `components.css` and use the tokenized classes (`heyfam-button`, `heyfam-card`, `heyfam-input`). invite-onboarding's stepper styles are already self-described as temporary; keep that, retarget the file.

**7. `parts/header.html`.** media appends a lightbox mount; test-infra inserts a dev-banner template-part. Both clean appends, but the lightbox is better at `</body>` than inside `<header>` — recommend moving it to `templates/index.html` or its own part.

**8. `Plugin.php::boot()` touched by four plans.** notif-dev (`DevMailer` + `CLI\Bootstrap`), media (image-size registration), polls (`wp_initialize_site` poll-votes table), test-infra (`DevRoutes`). All additive. **Fix:** sequence; each plan reads current file before pasting.

**9. `functions.php`'s `wp_interactivity_state('heyfam', …)`.** invite-onboarding adds three user-meta keys, media adds `heicSupport`, test-infra adds `devBanner`. Non-conflicting; merge keys rather than replace the literal.

---

## Missing dependencies

- **invite-onboarding** Task 3 uses raw `<button>` elements. If design-system has shipped first (it should — see ordering), reuse `heyfam-button heyfam-button--primary` etc. instead of temporary classes. Add a single note.
- **invite-onboarding**'s manual smoke for invites assumes SMS sends throw silently. After notif-dev lands, dev-mode SMS instead writes `[heyfam dev SMS]` to `debug.log`. Update smoke step to `tail` the log.
- **polls** declares "Comments v1 has landed" as a precondition — accurate. No other code dependency.
- **test-infra**'s e2e spec uses `/_dev/last-invite` and `/_dev/reset-me`, both created in test-infra Task 7. Self-contained.
- **notif-dev**'s `send-test-notification` will need `--kind=media` / `--kind=poll` added once those workstreams ship new FanOut events — additive, no conflict.
- No plan blocks another semantically; all conflicts are mechanical file-merge issues.

---

## Suggested implementation order

**Phase A — foundation (parallel).** test-infra Tasks 1–4 (phpunit env, REST happy-path test, vitest, playwright) **+** notif-dev Tasks 1–5 (Mailpit, VAPID, `send-test-notification`, SMS dev log, docs). Both create the CLI bootstrap and dev-loop tooling; minimal overlap if test-infra waits for notif-dev's `CLI/Bootstrap.php` before its CLI tasks (5–6).

**Phase B — design system (serial).** design-system Tasks 1–8. Blocks all visual work that follows. Deletes `main.css`, splits CSS, rewrites composer/post-card/header markup, rewires `serialize_post` for avatars.

**Phase C — CLI completion + dev banner (parallel, both inside `src/CLI/`).** test-infra Tasks 5–7 (`reset-me`, `seed-demo`, dev banner). Lands inside the same `CLI/` directory created in Phase A.

**Phase D — features.** Run **invite-onboarding** first (its `signup/verify` + `invite_accept` Routes.php edits don't overlap with media/polls). Then **media** and **polls** — both touch `composer.html`, `composer.js`, and `post-card.html`. Safer to run media first then polls; if you want parallel, the second-lander rebases. Recommend serial: media → polls.

**Phase E — docs (anytime).** test-infra Task 8 (testing.md), notif-dev Task 5 (notifications.md), design-system Task 8 (design-system.md).

---

## Approval status

| Plan | Status | Reason |
|---|---|---|
| design-system | **approved** | Self-contained foundation; sequence first to avoid rebases. |
| invite-onboarding | **approved (minor note)** | Use design-system's component classes if landed; mention notif-dev's SMS-log path in smoke. |
| test-infra | **needs minor changes** | Rename `Cli/` → `CLI/`; merge command registration into notif-dev's `CLI\Bootstrap`. |
| notif-dev | **approved** | Owns `CLI/Bootstrap.php`; test-infra plugs in. |
| media | **approved (sequence note)** | Land after design-system so `serialize_post`/`composer.html`/`post-card.html` rebase cleanly. |
| polls | **approved (sequence note)** | Land after media for the same composer/post-card rebase. |

No plan is blocked. Conflicts are mechanical: sequence the rewrites of `serialize_post`, `composer.html`/`composer.js`, and `post-card.html` so each diffs against the prior landed version, and standardize CLI casing on `CLI/`.
