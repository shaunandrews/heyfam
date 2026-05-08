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
- PWA: web app manifest + service worker on root domain. One PWA install covers all the user's fams.
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
```

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
| Push subs | `wp_heyfam_push_subscriptions` (network): `user_id`, `endpoint`, `p256dh_key`, `auth_key`, `user_agent`, `created_at` |
| Invite | `wp_{N}_heyfam_invites`: `id`, `phone_e164`, `invited_by_user_id`, `code`, `expires_at`, `used_at` |
| Notif prefs | `wp_usermeta` key `heyfam_notif_prefs_{blog_id}` (JSON: `{posts: {push, email, sms}, comments: {push}, reactions: {push}}`) |

Phone (E.164) is the primary identity. WP `user_login` = the phone string, so login uses standard WP auth under the hood.

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
- `Fams\FamCreation` — creates a new subsite, sets up roles, sets creator.
- `Fams\Membership` — invite, accept-invite, role management.
- `Posts\Composer` — REST endpoint for creating posts (text + photo).
- `Reactions\Manager` — table create on activation; CRUD endpoints.
- `Comments\Threading` — enables nested comments per fam.
- `Notifs\Push` — VAPID setup, subscription endpoints, web-push send.
- `Notifs\Email` — mailer wrapping `wp_mail`.
- `Notifs\SMS` — Twilio messaging wrapper.
- `Notifs\FanOut` — Action Scheduler job that routes per recipient.
- `REST\Routes` — registers all `/wp-json/heyfam/v1/*` endpoints.
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
- `assets/sw.js` — service worker (shell cache; push handler).
- `assets/manifest.webmanifest` — PWA manifest.

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
