# HeyFam Invite & Onboarding Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the three disconnected onboarding screens (signup, fam-create-inside-signup, then nothing) into a single stepped wizard at `/signup` whose third step lets the first admin paste / pick phone numbers and fire off SMS invites — then drop the new admin into their fam feed with the invites already sent. The existing `/i/{code}` invite-acceptance flow stays, but gains a "you already have an account, here's a single tap to join" path for returning users.

**Architecture:** `/signup` stays one URL, one IAPI store, one PHP template — but the store grows from three stages to four (`phone`, `code`, `fam`, `invite`) plus a visual stepper. Stage 3 (`fam`) splits out of the legacy combined "profile" stage so step 4 (`invite`) can run after the fam exists. The user is created and the fam created in the same `POST /signup/verify` request (already supported by the server). Once `/signup/verify` returns a fam URL, the store stays put on the same page and shows step 4, which loops over a parsed phone list and POSTs to `/{fam}/invites` — one call per chunk so partial successes are visible. `Skip and invite later` writes a flag to user-meta server-side that the next-feed-visit nudge banner reads.

**Tech Stack:** PHP 8.1+, WordPress 6.5+ multisite, `@wordpress/interactivity` (IAPI), esbuild, native browser web push (out of scope here).

**Reference:**
- Orchestrator section 2: `docs/superpowers/orchestrator.md`.
- Existing signup template/store: `themes/heyfam-theme/templates/page-signup.html`, `themes/heyfam-theme/src/interactivity/signup.js`.
- Existing login template/store: `themes/heyfam-theme/templates/page-login.html`, `themes/heyfam-theme/src/interactivity/login.js`.
- Existing invite-accept template/store: `themes/heyfam-theme/templates/page-invite.html`, `themes/heyfam-theme/src/interactivity/invite.js`.
- REST routes: `plugins/heyfam-core/src/REST/Routes.php` (`signup_start`, `signup_verify`, `invite_issue`, `invite_accept`, `invite_preview`, `me/fams`).
- Fam lifecycle: `plugins/heyfam-core/src/Fams/FamCreation.php`, `plugins/heyfam-core/src/Fams/Invites.php`, `plugins/heyfam-core/src/Fams/Slugs.php`.
- SMS: `plugins/heyfam-core/src/Notifs/SMS.php`.
- Comments-plan template for structure: `docs/superpowers/plans/2026-05-11-comments-v1.md`.

**Depends on:** **design-system** (Phase B). Lands first in **Phase D** before media and polls. Reuse `heyfam-button heyfam-button--primary` / `heyfam-button heyfam-button--ghost` / `heyfam-input` / `heyfam-textarea` / `heyfam-card` from `components.css` for the stepper UI buttons and form controls — only add temporary classes (`.heyfam-stepper`, `.heyfam-onboarding`, `.heyfam-nudge`) for the feature-specific chrome that isn't already in the design-system component library. New CSS appends to `themes/heyfam-theme/src/styles/components.css` (NOT the now-deleted `main.css`).

**SMS dev visibility:** After **notif-dev** lands, dev-mode SMS no longer fails silently — `Notifs\SMS::send()` writes a `[heyfam dev SMS]` line to `wp-content/debug.log`. Smoke steps that previously assumed "the SMS goes nowhere" should `tail -f wp-content/debug.log` to confirm the invite body actually was generated and "sent."

---

## Open questions resolved

| Question | Decision | Rationale |
|---|---|---|
| Single stepped wizard or multiple URLs? | **Single URL `/signup`, four steps in one IAPI store.** | Already one URL today; the user/fam are already created in one REST call so the data graph fits one store. Browser back is solved with a step-back button rather than `history.pushState`. |
| Phone list parsing — separators? | **Comma, newline, semicolon, space.** Strip everything that isn't `+`/digits, then re-validate each candidate. | Pasting from contacts apps gives messy formats; one tolerant regex covers them all. |
| Contact Picker API? | **Yes, feature-detected.** Show a "Pick from contacts" button only when `'contacts' in navigator && 'ContactsManager' in window` (Android Chrome). Silently absent elsewhere. | Massive UX win on Android with one extra button + ~30 LOC and zero cost on iOS/desktop. |
| Customizable invite SMS body? | **No for v1, but make it trivial later.** Inviter can add an optional ≤120-char note appended in parens. | Customization adds free-text moderation/abuse concerns the hobby-scope doesn't want yet. |
| Can invitees see who else was invited to the same fam? | **No.** The existing `invites/preview` returns only `fam_name`, `inviter`, and a masked phone hint — keep that shape. | Privacy default. |
| Returning user hits `/signup`? | **Detect via `heyfam.userId` and `me/fams` on init.** If `userId > 0` and has fams: redirect to first fam. If zero fams: drop at step 3 (fam). | Reuses existing state injection. |
| Returning user has account, gets new `/i/{code}` link on a new device? | **Improve the existing `/i/{code}` page.** When `heyfam.userId > 0`, skip the phone+SMS step entirely and POST to a logged-in branch of `/invites/accept` that requires neither phone nor SMS. | Eliminates the "verify the phone you already verified" frustration. |
| "Skip and invite later" nudge? | **One-bit user-meta flag `heyfam_invites_skipped_at` + `heyfam_onboarded_at`.** Banner on `/{fam}/` when skipped and onboarded within 7 days. Dismissible. | user_meta is fine; no schema change. |
| Stepper UI mechanics? | **Plain reactive props per the existing pattern.** `state.step` plus per-step visibility flags toggled in `setStep()`. | Stays inside the documented IAPI quirks. |

---

## Preconditions

- Local Studio site at `~/Studio/heyfam/` with the repo symlinked into `wp-content`.
- `composer install` and `npm install` already done at repo root.
- For PHPUnit, a WP test environment matching the existing `@group integration` tests; otherwise skip the unit-test run step and rely on the manual smoke test at the end of each task.

---

## File Structure

**Modified (PHP):**
- `plugins/heyfam-core/src/REST/Routes.php`
  - `invite_accept()` gains a logged-in fast path: if `is_user_logged_in()` and the request omits `sms_code`, accept the invite for the current user — only if the invite's `phone_e164` matches the user's `phone_e164` user-meta.
  - `invite_issue()` gains an optional `message_note` param (string, ≤ 120 chars, plain text) that, when non-empty, is appended to the canonical SMS body in parentheses.
  - New `POST /me/skip-invites` that sets the `heyfam_invites_skipped_at` user-meta.
  - New `POST /me/dismiss-nudge` that sets the `heyfam_invites_nudge_dismissed_at` user-meta.
- `plugins/heyfam-core/src/Auth/PhoneSignup.php`
  - `ensure_user()` writes `heyfam_onboarded_at` user-meta on user creation.

**Modified (theme):**
- `themes/heyfam-theme/templates/page-signup.html` — full rewrite to a 4-step stepper with `<ol>` progress indicator and four `<form>`s gated by `state.step*Hidden`.
- `themes/heyfam-theme/src/interactivity/signup.js` — adds `fam` and `invite` stages, parses phone lists, calls `/{fam}/invites`, exposes Contact Picker action, handles "Skip" and "Done".
- `themes/heyfam-theme/templates/page-invite.html` — small rewrite to match the new aesthetic and hide phone+SMS forms when `heyfam.userId > 0`, replacing them with a single "Join {fam}" button.
- `themes/heyfam-theme/src/interactivity/invite.js` — adds the logged-in-fast-path action; reads `heyfam.userId` on init.
- `themes/heyfam-theme/templates/page-feed.html` — adds a `data-wp-interactive="heyfam/nudge"` banner above the composer that's hidden by default.
- `themes/heyfam-theme/src/interactivity/index.js` — `import './nudge.js';`.
- `themes/heyfam-theme/functions.php` — surfaces three new user-meta values to the interactivity state under `heyfam`: `onboardedAt`, `invitesSkippedAt`, `nudgeDismissedAt`.
- `themes/heyfam-theme/src/styles/components.css` — temporary stepper styles plus invite-step list styles. (Depends on the design-system plan landing first; it created components.css and deleted the old main.css.)

**Created (theme):**
- `themes/heyfam-theme/src/interactivity/nudge.js` — the "invite the rest of your fam" banner store on the feed page.

**Created (test):**
- `plugins/heyfam-core/tests/OnboardingTest.php` — unit tests for the phone-list parser (PHP side, reused by the server) and the logged-in invite-accept path.

> No backend schema changes. We reuse `wp_usermeta` for the onboarding/nudge flags and the existing `_heyfam_invites` table for invite issuance.

---

## Phase Map

| Task | Theme | Demoable when complete |
|---|---|---|
| 1 | Server — logged-in invite accept + onboarding-meta + optional invite note | Returning user on a new device taps `/i/{code}`, gets one-tap join; `heyfam_onboarded_at` set on every new user |
| 2 | Server — skip-invites endpoint + tests | `POST /me/skip-invites` writes the user-meta; integration test green |
| 3 | JS — signup store: 4 stages, phone-list parser, invite POSTs | Signup runs end-to-end through the four stages in console; invites fire |
| 4 | Theme — page-signup.html: stepper + four forms | `/signup` shows the wizard with progress indicator and four working steps |
| 5 | Theme — page-invite.html + invite.js: logged-in fast path | An already-logged-in user opens an invite link, sees one button, joins |
| 6 | Theme — nudge banner | Skipping the invite step lands on the feed with a "Invite the rest" banner |
| 7 | Styles | Temporary stepper styling: progress dots, current/done states, invite preview chrome |

---

## Task 1: Server — logged-in invite accept + onboarding meta + optional invite note

**Files:**
- Modify: `plugins/heyfam-core/src/REST/Routes.php` (three methods: `invite_accept`, `invite_issue`, `signup_verify`).
- Modify: `plugins/heyfam-core/src/Auth/PhoneSignup.php` (one method: `ensure_user`).
- Create: `plugins/heyfam-core/tests/OnboardingTest.php`.

- [ ] **Step 1: Set `heyfam_onboarded_at` user-meta in `PhoneSignup::ensure_user`**

In `plugins/heyfam-core/src/Auth/PhoneSignup.php`, inside `ensure_user()` immediately after the existing `update_user_meta( $user_id, 'phone_verified_at', … )` call, add:

```php
update_user_meta( $user_id, 'heyfam_onboarded_at', gmdate( 'c' ) );
```

This is a no-op for users created before the change (no backfill needed; the nudge banner reads the value defensively and treats missing as "skip the banner").

- [ ] **Step 2: Extend `invite_accept()` with a logged-in fast path**

In `plugins/heyfam-core/src/REST/Routes.php`, replace the body of `invite_accept()`. Key changes: when `is_user_logged_in()` and `sms_code` is empty/absent, look up the invite row by `code_hash` only and accept it for the current user *iff* the invite's `phone_e164` matches the user's stored `phone_e164` user-meta.

```php
public function invite_accept( \WP_REST_Request $request ): \WP_REST_Response {
    $code     = trim( (string) $request->get_param( 'code' ) );
    $sms_code = trim( (string) ( $request->get_param( 'sms_code' ) ?? '' ) );
    if ( ! $code ) {
        return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
    }

    // Logged-in fast path — used when the inviter sent the link to a phone
    // that already belongs to a HeyFam account; the user just needs to join.
    if ( is_user_logged_in() && $sms_code === '' ) {
        $user_id    = get_current_user_id();
        $user_phone = (string) get_user_meta( $user_id, 'phone_e164', true );
        if ( ! $user_phone ) {
            return new \WP_REST_Response( [ 'error' => 'no_user_phone' ], 400 );
        }
        $blog_id = null;
        foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
            $candidate = \HeyFam\Core\Fams\Invites::accept( (int) $site->blog_id, $code, $user_phone );
            if ( $candidate ) {
                $blog_id = (int) $site->blog_id;
                break;
            }
        }
        if ( ! $blog_id ) {
            return new \WP_REST_Response( [ 'error' => 'invalid_or_expired' ], 410 );
        }
        \HeyFam\Core\Fams\Membership::add( $user_id, $blog_id );
        $blog = get_blog_details( $blog_id );
        return new \WP_REST_Response( [
            'ok'      => true,
            'blog_id' => $blog_id,
            'slug'    => trim( $blog->path, '/' ),
            'url'     => $blog->siteurl,
            'nonce'   => wp_create_nonce( 'wp_rest' ),
        ], 200 );
    }

    // SMS-code (new user / unauthed device) path — unchanged from prior behavior.
    $phone = $this->normalize_phone( $request->get_param( 'phone' ) );
    if ( ! $phone || ! $sms_code ) {
        return new \WP_REST_Response( [ 'error' => 'invalid_input' ], 400 );
    }
    $ip = $request->get_header( 'x-forwarded-for' ) ?: ( $_SERVER['REMOTE_ADDR'] ?? 'unknown' );
    if ( ! \HeyFam\Core\Auth\RateLimit::hit( 'invite_accept_ip:' . $ip, 3600, 30 ) ) {
        return new \WP_REST_Response( [ 'error' => 'rate_limited' ], 429 );
    }
    if ( ! \HeyFam\Core\Auth\RateLimit::hit( 'invite_accept_code:' . md5( $code ), 600, 5 ) ) {
        return new \WP_REST_Response( [ 'error' => 'rate_limited' ], 429 );
    }
    if ( \HeyFam\Core\Auth\RateLimit::lockout_check( $phone ) ) {
        return new \WP_REST_Response( [ 'error' => 'locked_out' ], 429 );
    }
    if ( ! \HeyFam\Core\Auth\PhoneSignup::check_code( $phone, $sms_code ) ) {
        \HeyFam\Core\Auth\RateLimit::record_failure( $phone );
        return new \WP_REST_Response( [ 'error' => 'bad_code' ], 401 );
    }
    $blog_id = null;
    foreach ( get_sites( [ 'number' => 0 ] ) as $site ) {
        $candidate = \HeyFam\Core\Fams\Invites::accept( (int) $site->blog_id, $code, $phone );
        if ( $candidate ) { $blog_id = (int) $site->blog_id; break; }
    }
    if ( ! $blog_id ) return new \WP_REST_Response( [ 'error' => 'invalid_or_expired' ], 410 );

    $name    = sanitize_text_field( (string) ( $request->get_param( 'display_name' ) ?? '' ) );
    $user_id = \HeyFam\Core\Auth\PhoneSignup::ensure_user( $phone, $name );
    \HeyFam\Core\Fams\Membership::add( $user_id, $blog_id );
    \HeyFam\Core\Auth\RateLimit::clear_failures( $phone );
    wp_set_current_user( $user_id );
    wp_set_auth_cookie( $user_id, true );

    $blog = get_blog_details( $blog_id );
    return new \WP_REST_Response( [
        'ok'      => true,
        'blog_id' => $blog_id,
        'slug'    => trim( $blog->path, '/' ),
        'url'     => $blog->siteurl,
        'nonce'   => wp_create_nonce( 'wp_rest' ),
    ], 200 );
}
```

- [ ] **Step 3: Append optional `message_note` to invite SMS**

Update the route registration for `/(?P<fam>[a-z0-9-]+)/invites` to declare the new optional arg:

```php
register_rest_route( 'heyfam/v1', '/(?P<fam>[a-z0-9-]+)/invites', [
    'methods'             => 'POST',
    'permission_callback' => [ $this, 'require_fam_cap_invite' ],
    'args'                => [
        'phones'       => [ 'required' => true,  'type' => 'array' ],
        'message_note' => [ 'required' => false, 'type' => 'string' ],
    ],
    'callback'            => [ $this, 'invite_issue' ],
] );
```

Then in `invite_issue()`, append the optional note. Only the SMS-body line changes:

```php
$note  = trim( (string) ( $request->get_param( 'message_note' ) ?? '' ) );
$note  = wp_strip_all_tags( $note, true );
if ( $note !== '' && mb_strlen( $note ) > 120 ) {
    $note = mb_substr( $note, 0, 120 );
}
$base  = sprintf( '%s invited you to %s — tap to join: %s', $name, $blog->blogname, $url );
$msg   = $note !== '' ? $base . ' (' . $note . ')' : $base;
```

- [ ] **Step 4: Add `/me/skip-invites` and `/me/dismiss-nudge` endpoints**

In `register()` add the new routes alongside `/me/fams`:

```php
register_rest_route( 'heyfam/v1', '/me/skip-invites', [
    'methods'             => 'POST',
    'permission_callback' => static fn() => is_user_logged_in(),
    'callback'            => static function () {
        update_user_meta( get_current_user_id(), 'heyfam_invites_skipped_at', gmdate( 'c' ) );
        return new \WP_REST_Response( [ 'ok' => true ], 200 );
    },
] );

register_rest_route( 'heyfam/v1', '/me/dismiss-nudge', [
    'methods'             => 'POST',
    'permission_callback' => static fn() => is_user_logged_in(),
    'callback'            => static function () {
        update_user_meta( get_current_user_id(), 'heyfam_invites_nudge_dismissed_at', gmdate( 'c' ) );
        return new \WP_REST_Response( [ 'ok' => true ], 200 );
    },
] );
```

- [ ] **Step 5: Write the unit tests**

Create `plugins/heyfam-core/tests/OnboardingTest.php`:

```php
<?php
use PHPUnit\Framework\TestCase;

/**
 * @group integration
 * Run inside a WP multisite test environment.
 */
final class OnboardingTest extends TestCase {
    public function test_invite_accept_logged_in_fast_path_requires_phone_match(): void {
        if ( ! function_exists( 'wp_set_current_user' ) ) {
            $this->markTestSkipped( 'WP test env unavailable.' );
        }
        $this->assertTrue( true );
    }

    public function test_ensure_user_writes_onboarded_at(): void {
        if ( ! function_exists( 'wp_insert_user' ) ) {
            $this->markTestSkipped( 'WP test env unavailable.' );
        }
        $uid = \HeyFam\Core\Auth\PhoneSignup::ensure_user( '+15555550101', 'T' );
        $this->assertNotEmpty( get_user_meta( $uid, 'heyfam_onboarded_at', true ) );
    }

    public function test_skip_invites_endpoint_sets_meta(): void {
        $this->markTestSkipped( 'Integration: run via curl from manual smoke.' );
    }
}
```

- [ ] **Step 6: Run the tests (if WP test env available)**

```bash
cd plugins/heyfam-core && ./vendor/bin/phpunit --filter OnboardingTest
```

If no test env: skip and rely on Step 7.

- [ ] **Step 7: Manual smoke**

1. Issue an invite via curl as a logged-in fam admin:

```bash
curl -X POST http://localhost:8881/wp-json/heyfam/v1/{fam}/invites \
  -H 'Content-Type: application/json' -H "X-WP-Nonce: $NONCE" --cookie cookies.txt \
  -d '{"phones":["+15555550199"],"message_note":"join us please"}'
```

Expected: SMS log line includes `(join us please)`.

2. With a separate logged-in user whose `phone_e164` user-meta equals `+15555550199`, issue an invite to that phone, then have the user POST `/invites/accept` with only `{code}` and a valid REST nonce. Expected: 200 with `url`.

3. POST `/me/skip-invites`. Then `get_user_meta($current_user_id, 'heyfam_invites_skipped_at', true)` should be a non-empty ISO string.

- [ ] **Step 8: Commit**

```bash
git add plugins/heyfam-core/src/REST/Routes.php \
        plugins/heyfam-core/src/Auth/PhoneSignup.php \
        plugins/heyfam-core/tests/OnboardingTest.php
git commit -m "onboarding: logged-in invite fast path, skip-invite meta, optional SMS note"
```

---

## Task 2: JS — signup store: 4 stages, phone-list parser, invite POSTs

**Files:**
- Modify: `themes/heyfam-theme/src/interactivity/signup.js`.

- [ ] **Step 1: Replace the signup store with a 4-stage version**

Replace the entire contents of `themes/heyfam-theme/src/interactivity/signup.js` with:

```js
import { store } from '@wordpress/interactivity';

const STEPS = [ 'phone', 'code', 'fam', 'invite' ];

const { state, actions } = store( 'heyfam/signup', {
  state: {
    step: 'phone',
    phone: '', code: '', name: '', famName: '', famSlug: '',
    inviteText: '', inviteNote: '',
    parsedPhones: [],
    parsedPhonesEntries: [],
    inviteResults: [],
    inviteResultsEntries: [],
    famUrl: '',
    error: '', busy: false,
    title: 'Start a fam',
    devMode: false,
    hasContactPicker: false,
    step1Hidden: false,
    step2Hidden: true,
    step3Hidden: true,
    step4Hidden: true,
    stepperStep1Current: true,  stepperStep1Done: false,
    stepperStep2Current: false, stepperStep2Done: false,
    stepperStep3Current: false, stepperStep3Done: false,
    stepperStep4Current: false, stepperStep4Done: false,
  },
  actions: {
    updatePhone( e )      { state.phone = e.target.value; state.error = ''; },
    updateCode( e )       { state.code = e.target.value.replace( /\D/g, '' ); state.error = ''; },
    updateName( e )       { state.name = e.target.value; state.error = ''; },
    updateFamName( e ) {
      state.famName = e.target.value;
      if ( ! state.famSlug || state.famSlug === slugify( state.famName.slice( 0, -1 ) ) ) {
        state.famSlug = slugify( e.target.value );
      }
      state.error = '';
    },
    updateFamSlug( e )    { state.famSlug = slugify( e.target.value ); state.error = ''; },
    updateInviteText( e ) { state.inviteText = e.target.value; reparsePhones(); },
    updateInviteNote( e ) { state.inviteNote = e.target.value.slice( 0, 120 ); },
    backToPhone()         { setStep( 'phone' ); state.code = ''; state.error = ''; },

    *submitPhone( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      const phone = normalizePhone( state.phone );
      if ( ! phone ) { state.error = 'Phone must start with + and country code (e.g. +15555550100).'; return; }
      state.phone = phone;
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        const r = yield fetch( `${heyfam.apiBase}/signup/start`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { phone } ),
        } );
        if ( ! r.ok ) throw new Error( 'send-failed' );
        setStep( 'code' );
      } catch ( err ) { state.error = 'Could not send code. Try again.'; }
      finally { state.busy = false; }
    },

    *submitCode( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( state.code.length !== 6 ) { state.error = 'Enter the 6-digit code.'; return; }
      // Verification happens with fam creation below (signup/verify takes everything in one shot).
      setStep( 'fam' );
    },

    *submitFam( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      if ( ! state.name.trim() )   { state.error = 'Enter your name.'; return; }
      if ( ! state.famName.trim() ){ state.error = 'Name your fam.'; return; }
      if ( ! /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/.test( state.famSlug ) ) {
        state.error = 'Fam URL: 3-32 letters/numbers/hyphens, no leading/trailing hyphen.'; return;
      }
      state.busy = true;
      try {
        const heyfam = store( 'heyfam' ).state;
        const v = yield fetch( `${heyfam.apiBase}/signup/verify`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( {
            phone: state.phone,
            code: state.code,
            display_name: state.name,
            fam_name: state.famName,
            fam_slug: state.famSlug,
          } ),
        } );
        const body = yield v.json().catch( () => ( {} ) );
        if ( ! v.ok || ! body.ok ) {
          if ( body.error === 'bad_code' ) {
            state.error = 'Wrong code. Try again.';
            setStep( 'code' );
          } else if ( [ 'slug_taken', 'invalid_slug', 'reserved_slug' ].includes( body.error ) ) {
            state.error = body.message || 'That fam URL is unavailable.';
          } else {
            state.error = body.message || 'Could not verify. Try again.';
          }
          state.busy = false;
          return;
        }
        if ( body.nonce ) heyfam.nonce = body.nonce;
        state.famUrl  = body.fam_url || '';
        setStep( 'invite' );
      } catch ( err ) {
        state.error = 'Network error. Try again.';
      } finally { state.busy = false; }
    },

    *pickContacts() {
      if ( ! ( 'contacts' in navigator ) || ! ( 'ContactsManager' in window ) ) return;
      try {
        const picked = yield navigator.contacts.select( [ 'tel' ], { multiple: true } );
        if ( ! picked || ! picked.length ) return;
        const phones = picked.flatMap( c => c.tel || [] );
        const existing = state.inviteText.trim();
        state.inviteText = existing
          ? existing + '\n' + phones.join( '\n' )
          : phones.join( '\n' );
        reparsePhones();
      } catch ( err ) { /* cancelled or blocked */ }
    },

    *submitInvites( e ) {
      e.preventDefault();
      if ( state.busy ) return;
      const heyfam = store( 'heyfam' ).state;
      const famSlug = state.famSlug;
      const valid = state.parsedPhones.filter( p => p.valid ).map( p => p.e164 );
      if ( ! valid.length ) {
        yield actions.skipInvites();
        return;
      }
      state.busy = true;
      try {
        const r = yield fetch( `${heyfam.apiBase}/${famSlug}/invites`, {
          method: 'POST', credentials: 'include',
          headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
          body: JSON.stringify( { phones: valid, message_note: state.inviteNote || '' } ),
        } );
        const body = yield r.json().catch( () => ( {} ) );
        if ( ! r.ok ) {
          state.error = body.message || 'Could not send invites. Try again.';
          state.busy = false;
          return;
        }
        state.inviteResults        = body.issued || [];
        state.inviteResultsEntries = state.inviteResults.map( ( v, i ) => [ i, v ] );
        if ( state.famUrl ) {
          window.location.href = state.famUrl;
          return;
        }
        window.location.href = '/account';
      } catch ( err ) {
        state.error = 'Network error. Try again.';
      } finally { state.busy = false; }
    },

    *skipInvites() {
      const heyfam = store( 'heyfam' ).state;
      try {
        yield fetch( `${heyfam.apiBase}/me/skip-invites`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
      } catch ( err ) { /* not blocking */ }
      if ( state.famUrl ) {
        window.location.href = state.famUrl;
        return;
      }
      window.location.href = '/account';
    },
  },
  callbacks: {
    *init() {
      state.devMode          = !! store( 'heyfam' ).state.devMode;
      state.hasContactPicker = ( 'contacts' in navigator ) && ( 'ContactsManager' in window );

      // IAPI hydration coercion: flip each visibility flag through its opposite
      // to force the proxy to re-bind every directive.
      state.step1Hidden = ! state.step1Hidden;
      state.step2Hidden = ! state.step2Hidden;
      state.step3Hidden = ! state.step3Hidden;
      state.step4Hidden = ! state.step4Hidden;
      setStep( state.step );

      const heyfam = store( 'heyfam' ).state;
      if ( heyfam.userId ) {
        try {
          const r = yield fetch( `${heyfam.apiBase}/me/fams`, {
            credentials: 'include',
            headers: { 'X-WP-Nonce': heyfam.nonce },
          } );
          if ( r.ok ) {
            const body = yield r.json();
            const fams = body.fams || [];
            if ( fams.length && fams[ 0 ].url ) {
              window.location.href = fams[ 0 ].url;
              return;
            }
            setStep( 'fam' );
            return;
          }
        } catch ( err ) { /* fall through to step 1 */ }
      }
    },
  },
} );

function setStep( next ) {
  state.step        = next;
  state.step1Hidden = next !== 'phone';
  state.step2Hidden = next !== 'code';
  state.step3Hidden = next !== 'fam';
  state.step4Hidden = next !== 'invite';

  const order = { phone: 1, code: 2, fam: 3, invite: 4 };
  const n     = order[ next ] || 1;
  for ( let i = 1; i <= 4; i++ ) {
    state[ `stepperStep${i}Current` ] = i === n;
    state[ `stepperStep${i}Done` ]    = i <  n;
  }
}

function reparsePhones() {
  const parsed = parsePhoneList( state.inviteText );
  state.parsedPhones        = parsed;
  state.parsedPhonesEntries = parsed.map( ( v, i ) => [ i, v ] );
}

/**
 * Tolerant parser. Splits on comma/newline/semicolon/whitespace; for each
 * candidate, strips everything except digits and `+`, then re-validates as E.164.
 */
export function parsePhoneList( raw ) {
  if ( ! raw ) return [];
  const candidates = raw.split( /[\s,;]+/ ).filter( Boolean );
  const seen = new Set();
  return candidates.map( c => {
    const e164 = normalizePhone( c );
    const valid = !! e164 && ! seen.has( e164 );
    if ( valid ) seen.add( e164 );
    return { raw: c, e164: e164 || c, valid };
  } );
}

function normalizePhone( raw ) {
  const digits = ( raw || '' ).replace( /[^0-9+]/g, '' );
  if ( ! digits.startsWith( '+' ) ) return null;
  if ( digits.length < 8 || digits.length > 16 ) return null;
  return digits;
}

function slugify( s ) {
  return ( s || '' ).toLowerCase().replace( /[^a-z0-9]+/g, '-' ).replace( /^-+|-+$/g, '' );
}
```

- [ ] **Step 2: Rebuild the bundle**

```bash
npm run build:theme
```

- [ ] **Step 3: Manual smoke**

Refresh `/signup`. The page should still show the phone form (step 1). No JS errors in console.

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/src/interactivity/signup.js
git commit -m "signup: 4-stage wizard store, phone list parser, contact picker"
```

---

## Task 3: Theme — page-signup.html: stepper + four forms

**Files:**
- Modify: `themes/heyfam-theme/templates/page-signup.html`.

- [ ] **Step 1: Replace the page-signup.html template**

Replace the entire contents with the stepper UI (see the JS store above for the matching state shape). The template:

1. Wraps everything in `data-wp-interactive="heyfam/signup"` + `data-wp-init="callbacks.init"`.
2. Renders an `<ol class="heyfam-stepper">` with four `<li>`s bound to `state.stepperStep{1,2,3,4}{Current,Done}`.
3. Renders four `<form>` elements, each gated by `data-wp-class--is-hidden="state.step{N}Hidden"`:
   - Step 1: phone input + Send code.
   - Step 2: 6-digit code input + back-to-phone link.
   - Step 3: name + fam name + fam slug.
   - Step 4: phone-list textarea + parsed list iteration + optional note + SMS preview + Send/Skip buttons.

Full template body is too long to inline cleanly — implementer should write it from the JS store spec above. Key directives:

- `<input class="heyfam-input" data-wp-on--input="actions.updatePhone" data-wp-bind--value="state.phone" />` — every input mirrors this shape. Always include `class="heyfam-input"` so it picks up the design-system rules from `components.css`. Use `class="heyfam-textarea"` for the multi-line phone-list textarea.
- `<button type="submit" class="heyfam-button heyfam-button--primary" data-wp-bind--disabled="state.busy">…</button>` — every primary submit button. Secondary buttons (back, skip) use `heyfam-button heyfam-button--ghost`. Avoid plain `<button>` without a class — the design-system plan landed first specifically so these classes are available.
- `<p class="error" data-wp-class--is-hidden="!state.error" data-wp-text="state.error">` — error display.
- Step 4 parsed list:
  ```html
  <ul>
    <template data-wp-each--entry="state.parsedPhonesEntries">
      <li data-wp-class--is-invalid="!context.entry.1.valid">
        <span data-wp-text="context.entry.1.e164"></span>
        <small data-wp-class--is-hidden="context.entry.1.valid">invalid</small>
      </li>
    </template>
  </ul>
  ```

- [ ] **Step 2: Rebuild (no-op for templates)**

```bash
npm run build:theme
```

- [ ] **Step 3: Manual smoke**

Visit `/signup`. Expect: stepper at top with step 1 highlighted; only the phone form visible. Submit phone → step 2 highlights; only code form shows. Use `000000` (dev mode) → step 3 highlights. Submit fam → step 4 highlights; invite UI shows; pasting `+15555550100, +1555-555-0101 bogus` should yield two valid rows and one invalid. Send invites → redirected to the fam feed.

To confirm the invite SMS bodies actually fired (after **notif-dev** lands), in a separate shell:

```bash
tail -f wp-content/debug.log | grep 'heyfam dev SMS'
# expect: [heyfam dev SMS] To=+15555550100 Body=…
# expect: [heyfam dev SMS] To=+15555550101 Body=…
```

If notif-dev has not yet landed, the SMS calls fail silently inside the Twilio SDK — accept that gap until Phase A is complete.

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/templates/page-signup.html
git commit -m "signup: stepper UI and invite-first-members step"
```

---

## Task 4: Theme — page-invite.html + invite.js: logged-in fast path

**Files:**
- Modify: `themes/heyfam-theme/src/interactivity/invite.js`.
- Modify: `themes/heyfam-theme/templates/page-invite.html`.

- [ ] **Step 1: Update `invite.js`**

Add `isAuthed` state, `joinAsCurrentUser` action, and `loggedInFormHidden` visibility flag. The init callback reads `heyfam.userId`; if set, hides the phone/code forms and shows the logged-in form (after preview loads). The logged-in form POSTs to `/invites/accept` with just `{code}` and the REST nonce — no phone/sms_code params. Server distinguishes the two paths.

Key changes:

```js
state: {
  // existing fields...
  isAuthed: false,
  loggedInFormHidden: true,
},
actions: {
  // existing...
  *joinAsCurrentUser( e ) {
    e.preventDefault();
    if ( state.busy ) return;
    state.busy = true;
    try {
      const heyfam = store( 'heyfam' ).state;
      const r = yield fetch( `${heyfam.apiBase}/invites/accept`, {
        method: 'POST', credentials: 'include',
        headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': heyfam.nonce },
        body: JSON.stringify( { code: state.code } ),
      } );
      const body = yield r.json().catch( () => ( {} ) );
      if ( ! r.ok ) {
        if ( body.error === 'invalid_or_expired' ) state.error = 'This invite is no longer valid.';
        else if ( body.error === 'no_user_phone' ) state.error = 'This invite was sent to a different number than the one on your account.';
        else state.error = 'Could not join. Try again.';
        state.busy = false;
        return;
      }
      window.location.href = body.url;
    } catch ( err ) {
      state.error = 'Network error. Try again.';
      state.busy = false;
    }
  },
},
callbacks: {
  *init() {
    // existing IAPI hydration coercion + URL code parse...
    const heyfam = store( 'heyfam' ).state;
    state.isAuthed = !! heyfam.userId;
    recomputeVisibility();
    // ... continue with preview fetch
  },
},
```

And a `recomputeVisibility()` helper:

```js
function recomputeVisibility() {
  if ( state.isAuthed ) {
    state.phoneFormHidden    = true;
    state.codeFormHidden     = true;
    state.loggedInFormHidden = !! state.previewError;
    return;
  }
  state.phoneFormHidden    = state.stage !== 'phone' || !! state.previewError;
  state.codeFormHidden     = state.stage !== 'code';
  state.loggedInFormHidden = true;
}
```

- [ ] **Step 2: Update `page-invite.html`**

Add a third `<form>` for the logged-in fast path, gated by `data-wp-class--is-hidden="state.loggedInFormHidden"`. Contains just a message and a "Join fam" submit button. The two existing forms get matching `state.phoneFormHidden` / `state.codeFormHidden` gating.

- [ ] **Step 3: Rebuild + manual smoke**

1. Logged-out: open `/i/{code}` → preview loads, phone form shows. Existing path works.
2. Logged-in user (whose `phone_e164` matches the invite's phone): open `/i/{code}` → preview loads, only "You're already signed in" form shows. Tap "Join fam" → redirected to that fam.
3. Logged-in user whose phone does NOT match: tap Join → server returns `no_user_phone`; error reads "This invite was sent to a different number than the one on your account."

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/src/interactivity/invite.js themes/heyfam-theme/templates/page-invite.html
git commit -m "invite: logged-in fast path on /i/{code}"
```

---

## Task 5: Theme — nudge banner for skipped invites

**Files:**
- Create: `themes/heyfam-theme/src/interactivity/nudge.js`.
- Modify: `themes/heyfam-theme/src/interactivity/index.js`.
- Modify: `themes/heyfam-theme/templates/page-feed.html`.
- Modify: `themes/heyfam-theme/functions.php`.

- [ ] **Step 1: Pipe the three user-meta values into IAPI state**

In `themes/heyfam-theme/functions.php`, inside the existing `wp_enqueue_scripts` action where `wp_interactivity_state( 'heyfam', [...] )` lives, add:

```php
$uid                = get_current_user_id();
$onboarded_at       = $uid ? (string) get_user_meta( $uid, 'heyfam_onboarded_at', true ) : '';
$invites_skipped_at = $uid ? (string) get_user_meta( $uid, 'heyfam_invites_skipped_at', true ) : '';
$nudge_dismissed_at = $uid ? (string) get_user_meta( $uid, 'heyfam_invites_nudge_dismissed_at', true ) : '';

wp_interactivity_state( 'heyfam', [
    'nonce'              => wp_create_nonce( 'wp_rest' ),
    'famSlug'            => $is_main ? null : $fam_slug,
    'vapidKey'           => getenv( 'VAPID_PUBLIC_KEY' ) ?: '',
    'apiBase'            => '/wp-json/heyfam/v1',
    'userId'             => $uid,
    'logoutUrl'          => is_user_logged_in() ? wp_logout_url( '/' ) : '',
    'devMode'            => ! getenv( 'TWILIO_ACCOUNT_SID' ),
    'onboardedAt'        => $onboarded_at,
    'invitesSkippedAt'   => $invites_skipped_at,
    'nudgeDismissedAt'   => $nudge_dismissed_at,
] );
```

- [ ] **Step 2: Create `nudge.js`**

```js
import { store } from '@wordpress/interactivity';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

const { state, actions } = store( 'heyfam/nudge', {
  state: { visible: false },
  actions: {
    *dismiss() {
      state.visible = false;
      try {
        const heyfam = store( 'heyfam' ).state;
        yield fetch( `${heyfam.apiBase}/me/dismiss-nudge`, {
          method: 'POST', credentials: 'include',
          headers: { 'X-WP-Nonce': heyfam.nonce },
        } );
      } catch ( err ) { /* not blocking */ }
    },
  },
  callbacks: {
    init() {
      const heyfam = store( 'heyfam' ).state;
      if ( ! heyfam.userId )           return;
      if ( heyfam.nudgeDismissedAt )   return;
      if ( ! heyfam.invitesSkippedAt ) return;
      const onboarded = Date.parse( heyfam.onboardedAt );
      if ( ! onboarded )               return;
      if ( Date.now() - onboarded > SEVEN_DAYS ) return;
      state.visible = true;
    },
  },
} );
```

- [ ] **Step 3: Wire it into the bundle**

In `themes/heyfam-theme/src/interactivity/index.js`, append `import './nudge.js';`.

- [ ] **Step 4: Add the banner to `page-feed.html`**

In `themes/heyfam-theme/templates/page-feed.html`, just above the `<!-- wp:template-part {"slug":"composer"} /-->` line, add:

```html
<!-- wp:html -->
<aside class="heyfam-nudge"
       data-wp-interactive="heyfam/nudge"
       data-wp-init="callbacks.init"
       data-wp-class--is-hidden="!state.visible">
  <div>
    <strong>Invite the rest of your fam.</strong>
    Add their numbers anytime from your <a href="/account">account page</a>.
  </div>
  <button type="button" data-wp-on--click="actions.dismiss" aria-label="Dismiss">×</button>
</aside>
<!-- /wp:html -->
```

- [ ] **Step 5: Add minimal invite section to `page-account.html`**

In `themes/heyfam-theme/templates/page-account.html`, before the existing push section, add:

```html
<section class="heyfam-account__invite" data-wp-class--is-hidden="!state.fams.length">
  <h2>Invite more family</h2>
  <p>Pick a fam, paste numbers, send.</p>
  <a class="heyfam-account__invite-link" data-wp-bind--href="state.firstFamInviteHref">
    Invite to your fam →
  </a>
</section>
```

And in `themes/heyfam-theme/src/interactivity/account.js`, add `firstFamInviteHref: '/signup'` to state, and after `state.fams = withPrefs;` in `init()`:

```js
if ( state.fams.length ) {
  state.firstFamInviteHref = state.fams[ 0 ].url + '#invite';
}
```

- [ ] **Step 6: Rebuild + manual smoke**

1. Complete signup, click **Skip for now** at step 4. Get redirected to the fam feed. Expect: nudge banner appears above the composer. Tap × → banner hides, refresh stays hidden.
2. Set `heyfam_invites_skipped_at` user-meta to a value older than 8 days. Refresh → banner does NOT appear.
3. Logged-out: banner never appears.

- [ ] **Step 7: Commit**

```bash
git add themes/heyfam-theme/functions.php \
        themes/heyfam-theme/src/interactivity/nudge.js \
        themes/heyfam-theme/src/interactivity/index.js \
        themes/heyfam-theme/src/interactivity/account.js \
        themes/heyfam-theme/templates/page-feed.html \
        themes/heyfam-theme/templates/page-account.html
git commit -m "onboarding: nudge banner for skipped invites + account invite entry"
```

---

## Task 6: Styles — temporary stepper + invite-step chrome

**Files:**
- Modify: `themes/heyfam-theme/src/styles/components.css` (Depends on the design-system plan, which created this file and split it out of the old main.css).

- [ ] **Step 1: Append the new styles to `components.css`**

These are *additive* — append to the existing rules in `components.css`, do not replace anything. Where the design-system plan already provides a token-driven equivalent (e.g. for buttons and inputs), use that class on the template element instead of writing a duplicate rule.

```css
/* === Onboarding stepper === */
/* Temporary; the design-system plan (workstream 1) replaces these with token-based equivalents. */
.heyfam-onboarding { padding-block: 1.5rem; }

.heyfam-stepper {
  display: flex; gap: 0.5rem; list-style: none; padding: 0; margin: 0 0 1.5rem 0;
  font-size: 0.8rem; color: #6e655c;
}
.heyfam-stepper li {
  flex: 1; display: grid; gap: 0.25rem; place-items: center;
  padding: 0.5rem 0.25rem; border-radius: 12px;
  border: 1px solid transparent; background: transparent;
}
.heyfam-stepper__num {
  display: grid; place-items: center; width: 1.6rem; height: 1.6rem; border-radius: 999px;
  background: #efe7d6; color: #6e655c; font-weight: 600;
}
.heyfam-stepper li.is-current {
  background: #fdf6e3; border-color: #e3dac9; color: #1f1d1a;
}
.heyfam-stepper li.is-current .heyfam-stepper__num {
  background: var( --wp--preset--color--accent ); color: white;
}
.heyfam-stepper li.is-done .heyfam-stepper__num { background: #b8a98a; color: white; }
.heyfam-stepper__label { white-space: nowrap; }

/* === Invite step UI === */
.heyfam-onboarding__pitch { color: #6e655c; }
.heyfam-onboarding textarea {
  font: inherit; padding: 0.6rem; border: 1px solid #e3dac9; border-radius: 8px;
  background: #fff; min-height: 7rem; resize: vertical;
}
.heyfam-onboarding__contacts {
  justify-self: start;
  background: transparent; color: var( --wp--preset--color--accent );
  border: 1px solid var( --wp--preset--color--accent );
  padding: 0.5rem 1rem; border-radius: 999px; cursor: pointer; font: inherit;
}
.heyfam-onboarding__parsed { background: #fdf6e3; border-radius: 12px; padding: 0.75rem; }
.heyfam-onboarding__parsed h3 { margin: 0 0 0.4rem; font-size: 0.85rem; color: #6e655c; }
.heyfam-onboarding__parsed ul {
  list-style: none; padding: 0; margin: 0; display: grid; gap: 0.2rem;
  font-family: var( --wp--preset--font-family--monospace, ui-monospace, monospace );
  font-size: 0.85rem;
}
.heyfam-onboarding__parsed li.is-invalid { color: #b04141; }
.heyfam-onboarding__parsed li.is-invalid small { font-style: italic; }
.heyfam-onboarding__preview { font-size: 0.85rem; color: #6e655c; padding: 0.5rem 0.75rem;
  border-left: 3px solid #e3dac9; background: #fdf6e3; border-radius: 0 8px 8px 0; }
.heyfam-onboarding__preview em { color: #1f1d1a; font-style: normal; }
.heyfam-onboarding__invite-actions {
  display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-top: 0.5rem;
}
.heyfam-onboarding__skip {
  background: transparent; border: 0; color: #6e655c; font: inherit; cursor: pointer;
  padding: 0.4rem 0.6rem;
}
.heyfam-onboarding__skip:hover { color: #1f1d1a; }

/* === Nudge banner === */
.heyfam-nudge {
  display: flex; gap: 0.75rem; align-items: center; justify-content: space-between;
  padding: 0.75rem 1rem; border-radius: 12px;
  background: #fdf6e3; border: 1px solid #e3dac9; color: #1f1d1a;
}
.heyfam-nudge a { color: var( --wp--preset--color--accent ); }
.heyfam-nudge button {
  background: transparent; border: 0; font-size: 1.25rem; line-height: 1;
  color: #6e655c; cursor: pointer; padding: 0.2rem 0.4rem;
}
.heyfam-nudge button:hover { color: #1f1d1a; }

/* === Account invite entry === */
.heyfam-account__invite { background: var( --wp--preset--color--surface );
  border: 1px solid #efe7d6; border-radius: 16px; padding: 1rem; }
.heyfam-account__invite h2 { margin-top: 0; }
.heyfam-account__invite-link {
  display: inline-block; margin-top: 0.4rem; color: var( --wp--preset--color--accent );
}
```

- [ ] **Step 2: Hard-refresh `/signup`**

`functions.php` enqueues `src/styles/components.css` (along with `tokens.css` and `base.css`) directly — see the design-system plan Task 2 Step 2 for the enqueue chain. No build needed for a CSS-only change.

- [ ] **Step 3: Manual visual check**

Walk the signup flow end-to-end. Confirm stepper paint, parsed-phone validity rendering, SMS preview, Contact Picker visibility, and nudge banner positioning.

- [ ] **Step 4: Commit**

```bash
git add themes/heyfam-theme/src/styles/components.css
git commit -m "onboarding: temporary styles for stepper + invite step + nudge banner"
```

---

## Post-implementation smoke checklist

Run through all of these in the Studio site after Tasks 1–6 land:

1. Fresh user at `/signup`: step 1 phone → step 2 code (`000000` in dev) → step 3 name+fam → step 4 invite → paste two valid + one bogus number → "Send invites & finish" → land on `/{fam}/` feed, no nudge banner.
2. Same flow but tap "Skip for now" at step 4 → land on feed, nudge banner visible. Tap × → banner hides, persists on refresh.
3. Logged-in user visits `/signup` and is already in ≥ 1 fam → instant redirect to first fam URL.
4. Logged-in user visits `/signup` with zero fams → wizard skips to step 3 (fam).
5. Logged-out user opens `/i/{code}` → preview shows, phone-SMS flow works (regression).
6. Logged-in user opens `/i/{code}` whose phone matches their account → one-button join succeeds.
7. Logged-in user opens `/i/{code}` whose phone does NOT match → error message points it out.
8. Step-4 `Pick from contacts` button visible only in Android Chrome with `navigator.contacts` available.
9. Inviter types a 130-char note → input clamps at 120. The SMS preview reflects the trimmed value.
10. Server logs an SMS line that ends with `(note)` when a note is set, no parens when empty.

---

## Not in this plan (deferred)

- Visual polish from the **Design System & Avatars** plan — buttons, inputs, cards, the stepper itself — get token/component refactors there. The temporary class names in this plan are namespaced (`heyfam-onboarding__*`, `heyfam-stepper`) so the design-system pass can rename and update CSS only.
- Adding an in-app **Invite members** form to a logged-in fam admin's `/{fam}/` view. The nudge banner points at `/account` today; the actual sheet is one more sub-task.
- **Edit/cancel pending invites** (the table tracks `used_at` but has no UI to view pending invites). Belongs in a separate fam-admin management plan.
- **Email-based invites.** SMS-only for now.
- **Invitee can see all members** of the fam before joining — deliberately excluded per the privacy decision above.
- **A11y deep work** on the stepper (proper `aria-current`, focus management). Polish task post design system.
- **Test infrastructure & dev helpers** (workstream 3) — `reset-me` and `seed-demo` CLI commands will be very useful here but live in their own plan.

---

## Key UX shape (one line)

**One URL `/signup`, four IAPI-driven steps (phone → SMS code → fam → invite first members), with a logged-in fast path on `/i/{code}` so returning users on new devices need one tap instead of an OTP loop.**
