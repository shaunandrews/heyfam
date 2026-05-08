# HeyFam v1 — Design Spec

**Date:** 2026-05-08
**Status:** Approved for implementation

## Summary

HeyFam is a public SaaS web app where families connect through an open wall — posts, reactions, and nested comments. The first concrete use case is the daily "what's for dinner?" announcement, but v1 is generic: any post in a family-scoped feed. Built on WordPress multisite, delivered as a mobile-first PWA, with phone-first auth and push/email/SMS notifications.

A "fam" is a generic group — the creator decides what it means (household, extended family, friend group, roommates). A single user, identified by their phone number, can be a member of multiple fams; the UI includes a fam picker.

## Goals

- Ship a usable v1 today.
- Keep the data model and architecture generic enough that future use cases (chores, vacation planning, car scheduling) drop in without rework.
- Stay in the WP stack (PHP/HTML/CSS/JS) using the Interactivity API for islands of reactivity — no SPA build pipeline.

## Non-goals (v1)

- Kid accounts / parent-managed accounts
- Per-fam theming
- Voice notes; multiple photos per post
- Post editing/deleting (use WP admin if needed)
- Polished marketing site; billing
- Moderation tools beyond the WP admin role
- Email digests; notification quiet hours
- Real-time WS/SSE (polling is fine for v1)

## Architecture

### Stack

- WordPress multisite at `heyfam.blog`, **subdirectory mode**. Staging at `heyfam.mystagingwebsite.com`.
- One custom plugin: `heyfam-core` (auth, fam membership, reactions, push, SMS, REST endpoints, notification fan-out).
- One custom block theme: `heyfam-theme` (PHP-rendered pages + Interactivity API islands).
- PWA: web app manifest + service worker, both **served from the root path** (`heyfam.blog/sw.js`, `heyfam.blog/manifest.webmanifest`) so the SW scope covers every fam under `/{fam}/`. The `heyfam-core` plugin registers rewrites that serve these files from the plugin (with `Service-Worker-Allowed: /` for the SW). One PWA install covers all the user's fams.
- SMS: Twilio Verify (auth codes) + Programmable Messaging (notifications).
- Email: `wp_mail` via a transactional provider (Postmark or SES — pick at deploy).
- Web push: VAPID, native browser API; PHP `web-push` library for sending.
- Background jobs: Action Scheduler.

### Why multisite

WP multisite already gives us users-belong-to-many-sites — the `wp_blogs` + capability-meta mapping is exactly the multi-fam membership model. Each fam gets free per-site data isolation: its own `wp_{N}_posts`, `wp_{N}_comments`, etc. We `switch_to_blog()` at the REST and render layers.

### URL map

```
heyfam.blog/                    landing (logged out) / fam picker (logged in)
heyfam.blog/signup              phone-first signup
heyfam.blog/login               phone-first login (same SMS code flow)
heyfam.blog/i/{code}            invite acceptance
heyfam.blog/{fam}/              fam feed
heyfam.blog/{fam}/p/{id}        single post + comment thread
heyfam.blog/{fam}/invite        invite a member (admins only)
heyfam.blog/account             account settings (cross-fam)
heyfam.blog/sw.js               service worker (plugin-served, root-scoped)
heyfam.blog/manifest.webmanifest PWA manifest (plugin-served)
```

Reserved top-level slugs (cannot be used as `{fam}`): `signup`, `login`, `logout`, `account`, `i`, `wp-admin`, `wp-login.php`, `wp-content`, `wp-includes`, `wp-json`, `xmlrpc.php`, `feed`, `comments`, `assets`, `sw.js`, `manifest.webmanifest`, `robots.txt`, `favicon.ico`, plus any slug starting with `wp-`. Enforced at slug validation time.

## Data model

| Thing | Where it lives |
|---|---|
| User | `wp_users` (network) + `wp_usermeta`: `phone_e164`, `phone_verified_at` |
| Fam | A multisite subsite; name/slug in core fields |
| Membership | WP user→blog mapping (`wp_{N}_capabilities` user meta) |
| Role | WP roles: `fam_admin` (creator/managers), `fam_member` (default joined role) |
| Post | `wp_{N}_posts`, `post_type='post'`; body in `post_content`; photo as featured image |
| Comment | `wp_{N}_comments` native; `comment_parent` for nesting |
| Reaction | `wp_{N}_heyfam_reactions`: `id`, `target_type` (post\|comment), `target_id`, `user_id`, `emoji`, `created_at`. Unique on `(target_type, target_id, user_id, emoji)`. |
| Push subs | `wp_heyfam_push_subscriptions` (network): `id`, `user_id`, `endpoint` (unique), `p256dh_key`, `auth_key`, `user_agent`, `created_at`, `last_used_at`, `expiration_time` (nullable). Account-scoped, not fam-scoped — one device serves all the user's fams. |
| Invite | `wp_{N}_heyfam_invites`: `id`, `phone_e164`, `invited_by_user_id`, `code`, `expires_at`, `used_at` |
| Notif prefs | `wp_usermeta` key `heyfam_notif_prefs_{blog_id}` (JSON: `{posts: {push, email, sms}, comments: {push}, reactions: {push}}`) |

Phone (E.164) is the primary identity. WP `user_login` = the phone string, so login uses standard WP auth under the hood. Because `user_login` is sensitive PII, the plugin hardens the WP defaults that would otherwise expose it (see [Auth & security](#auth--security)).

## Key flows

### Creator signup

1. `/signup` → enter phone → SMS code (Twilio Verify) → set display name → name fam → fam slug auto-suggested, editable → Create → redirect to `/{fam}/`.

### Invite

1. At `/{fam}/invite`, admin enters one or more phone numbers → server creates invite rows → SMS each: `"Shaun invited you to Smith Fam — tap to join: heyfam.blog/i/{code}"`.

### Invitee onboarding

1. Tap link → `/i/{code}` → enter phone (must match invite) → SMS code → set display name → membership added to fam → redirect to `/{fam}/`.
2. **If the phone already belongs to an existing user** (they're a member of other fams): same SMS code flow, no display-name prompt. Their existing account gains membership in the new fam.

### Post

1. At `/{fam}/`, composer at top: textarea + photo button → submit → server creates post → returns to feed → notification fan-out queued.

### React

1. Tap "+" pill on a post or comment → emoji picker → tap → reaction stored → live update via polling.
2. Any emoji is allowed. A user can apply multiple distinct emoji to the same target, but each emoji at most once per (user, target) pair.

### Comment

1. "Reply" on a post or comment → composer slides in → submit → nested under parent (`comment_parent` set) → notif fan-out (post author, parent comment author, all thread participants).

## Realtime / freshness

Server-renders pages on load. On feed and post pages, a small Interactivity API island polls every 10s:

- Feed: `GET /wp-json/heyfam/v1/{fam_slug}/feed?since={iso}` → returns new posts and counts.
- Single post: `GET /wp-json/heyfam/v1/{fam_slug}/post/{id}?since={iso}` → returns new comments + reactions.

`{fam_slug}` resolves to a `blog_id` server-side via `get_blog_details()`. Polling patches the DOM. No SSE/WS in v1.

## Auth & security

### REST authorization

Every `/wp-json/heyfam/v1/*` endpoint enforces three checks via `permission_callback`:

1. **Request authenticity**: standard WP `wp_rest` nonce sent via the `X-WP-Nonce` header. Browser-initiated requests get the nonce from a server-rendered global; the Interactivity API stores it in a shared store.
2. **Fam resolution**: the `{fam_slug}` path param resolves to a `blog_id` (404 if no match).
3. **Membership + capability**: after `switch_to_blog($blog_id)`, the current user must hold the relevant capability on that blog (see role bootstrap below). 403 otherwise. `restore_current_blog()` runs in a `try/finally` so it always fires.

Service worker push subscription registration uses a short-lived signed token (HMAC of `user_id|expires|nonce`) instead of a live WP nonce, since the SW lives outside the document context.

### Phone PII hardening

Phone numbers are sensitive PII. WP exposes `user_login` in several places by default; the plugin closes each:

- **`/wp-json/wp/v2/users/`** and `/wp-json/wp/v2/users/{id}` — disabled for non-admins via `rest_endpoints` filter.
- **Author archives** (`/author/{login}/`) — return 404 via `template_redirect`.
- **Comment author URLs and feed authorship** — render `display_name` only; never `user_login`.
- **`display_name`** — never defaults to `user_login`; signup always sets it to the chosen name.
- **Members UI** — surfaces `display_name` only; phone visibility limited to fam admins (and only for users who have agreed to it).

### Reserved slugs

Enforced at fam slug validation (see URL map above). The reserved list ships with the plugin and is filterable.

### SMS abuse controls

- **Per-phone rate limits**: max 3 codes per 10 min, 10 per day; min 30 sec between resends.
- **Per-IP rate limits**: max 10 signup attempts per hour.
- **Account lockout**: 5 wrong codes in a row → 15 min lockout.
- **Invite-code entropy**: 128-bit URL-safe random; stored as `hash_hmac('sha256', code, $secret)`. The plain code lives only in the SMS link.
- **Atomic invite acceptance**: `UPDATE wp_{N}_heyfam_invites SET used_at=NOW() WHERE code_hash=? AND used_at IS NULL` — single-row check, no double-use.
- **Phone enumeration prevention**: signup and login flows return identical "we sent a code" response regardless of whether the phone exists.

### SMS compliance (Twilio)

- **STOP / STOPALL / UNSUBSCRIBE / CANCEL / END / QUIT** — Twilio handles automatically; on next outbound attempt we honor the opt-out by setting `sms=off` for that phone across all fams.
- **HELP / INFO** — auto-reply: `"HeyFam: family group messages. Reply STOP to unsubscribe. Support: support@heyfam.blog"`.
- **A2P 10DLC** brand + campaign registration before US launch (deployment runbook).

### Email compliance

- One-click unsubscribe header (RFC 8058 `List-Unsubscribe-Post`) on every notification email plus a visible footer link that toggles `email=off`.

### Role and capability bootstrap

On `wp_initialize_site` (every new fam, switched-blog context):

1. `add_role('fam_admin', 'Fam Admin', […caps])` and `add_role('fam_member', 'Fam Member', […caps])`.
2. Capabilities:
   - `fam_admin`: `heyfam_post_to_fam`, `heyfam_react`, `heyfam_comment`, `heyfam_invite`, `heyfam_manage_fam`, `heyfam_remove_member`, `heyfam_view_member_phone`.
   - `fam_member`: `heyfam_post_to_fam`, `heyfam_react`, `heyfam_comment`.
3. Plugin activation iterates existing sites via `get_sites()` and seeds roles for each (idempotent — safe to re-run).

## Notifications

### Channels

- **Push**: VAPID. Sent via PHP `web-push` library using stored subscription endpoints.
- **Email**: `wp_mail` to user's verified email if any. Threaded by post (Message-ID + In-Reply-To).
- **SMS**: Twilio Programmable Messaging. Format: `"Shaun (Smith Fam): broccoli quiche tonight 🥦 — heyfam.blog/smiths/p/123"`.

### Fan-out triggers

- **New post** → push + email + SMS, per recipient prefs.
- **New comment** → push only (default), to: post author, parent comment author, all thread participants.
- **New reaction** → push only, debounced 30s per target (so a flurry doesn't rattle phones).

### Defaults

- Posts: push=on, email=on, sms=on
- Comments: push=on
- Reactions: push=on (debounced)

### Job queue

Notification fan-out runs via Action Scheduler. The post/comment/reaction insert hooks enqueue a job; the job evaluates each recipient's prefs and dispatches per channel.

## Error handling

- **SMS send failure (auth code or notif)**: log + show a retry button. No auto-retry (cost).
- **Photo upload failure**: client retries once; otherwise the post saves text-only with a "photo failed to attach" toast.
- **Push 410 Gone**: mark the subscription stale; user re-subscribes on next visit.
- **Invite expired (7 days)**: link shows "ask {inviter} for a fresh link."
- **Phone collision** during signup: if the phone already exists as a user, treat as login (same SMS code flow).

## Testing

For v1 (today's ship):

- One end-to-end smoke run on staging: creator signs up → creates fam → invites a second number → invitee joins → both post → both react → comment thread → confirm push/email/SMS arrive.
- Unit tests for: reactions table uniqueness constraint, invite code generation + expiry, notification fan-out routing logic.

No full test suite. Tests get added when something breaks.

## Components

### `heyfam-core` plugin

PHP modules under `HeyFam\Core\`:

- `Auth\PhoneSignup` — Twilio Verify integration; signup/login flows.
- `Auth\Authorization` — shared `permission_callback` helpers (nonce + slug→blog + cap), atomic switch-blog wrapper.
- `Auth\RateLimit` — per-phone and per-IP throttles; account lockout state.
- `Privacy\PIIShield` — disables user enumeration endpoints, blocks author archives, normalizes display name handling.
- `Fams\FamCreation` — creates a new subsite; calls into `Fams\Roles` to bootstrap roles/caps; sets creator.
- `Fams\Roles` — registers `fam_admin` / `fam_member` and their caps; idempotent; runs on `wp_initialize_site` and on plugin activation across `get_sites()`.
- `Fams\Membership` — invite issuance, atomic invite acceptance, role assignment.
- `Fams\Slugs` — reserved-slug enforcement and slug validation.
- `Posts\Composer` — REST endpoint for creating posts (text + photo).
- `Reactions\Manager` — table create on activation; CRUD endpoints.
- `Comments\Threading` — enables nested comments per fam.
- `Notifs\Push` — VAPID setup, subscription endpoints, web-push send, `410 Gone` cleanup.
- `Notifs\Email` — mailer wrapping `wp_mail`; List-Unsubscribe headers; footer link.
- `Notifs\SMS` — Twilio messaging wrapper; STOP/HELP webhook handler.
- `Notifs\FanOut` — Action Scheduler job that routes per recipient.
- `PWA\Serve` — owns `assets/sw.js` and `assets/manifest.webmanifest` (in the plugin); registers rewrites so they're served from `/sw.js` and `/manifest.webmanifest` with `Service-Worker-Allowed: /` and the right MIME types.
- `REST\Routes` — registers all `/wp-json/heyfam/v1/*` endpoints with per-route `permission_callback`s composed from `Auth\Authorization`.
- `Admin\Settings` — Twilio + VAPID + email provider settings page.

### `heyfam-theme` block theme

- `templates/index.html` — root: landing (logged out) or fam picker (logged in).
- `templates/single-post.html` — fam post view + comment thread.
- `templates/page-feed.html` — fam feed.
- `templates/page-account.html` — account settings.
- `parts/composer.html` — Interactivity API island.
- `parts/post-card.html` — reusable post card with reactions/comments preview.
- `parts/comment-thread.html` — nested comment renderer.
- `parts/fam-picker.html` — top-level fam switcher.

(The service worker and PWA manifest live in the **plugin**, not the theme — they need plugin-controlled rewrites to be served from the root path with the right scope and headers. See `PWA\Serve` in the plugin module list.)

### Database migrations

Plugin activation hooks:

- Network-level: create `wp_heyfam_push_subscriptions`.
- Per-blog (on subsite creation via `wp_initialize_site`): create `wp_{N}_heyfam_reactions` and `wp_{N}_heyfam_invites`.

## Implementation notes

- Action Scheduler ships with WooCommerce and many other plugins; if not present, install via Composer (`woocommerce/action-scheduler`) and load from the plugin.
- iOS PWA push requires iOS 16.4+ and the user adding the app to the Home Screen. If unavailable, gracefully degrade to email/SMS.
- Twilio sub-account per environment (staging vs production) to keep test traffic separate.
- Phone number entry at signup: country selector defaulting to user's locale (or US `+1` if unknown), with input normalized to E.164 for storage and Twilio.
- Build pipeline for the theme/plugin: PHP files ship as-is; any JS for Interactivity API stores get bundled with `wp-scripts` (no separate front-end build for v1).
