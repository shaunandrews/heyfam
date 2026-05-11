# HeyFam — Local Notification Setup

Three channels: email, web push, SMS. Each has a local-only path that doesn't
spend Twilio/Postmark credit.

## TL;DR

```bash
brew install mailpit && brew services start mailpit
npx web-push generate-vapid-keys --json  # paste into wp-config.php
echo 'HEYFAM_DEV_MAIL=mailpit' >> .env.local
# restart Studio
wp heyfam send-test-notification --user=YOUR_ID --kind=post
```

If push doesn't fire, see "Push troubleshooting" below.

---

## 1. Email — Mailpit

Mailpit is a single-binary SMTP catcher. Studio's PHP can reach
`127.0.0.1:1025` directly because Studio runs on the host network.

### Install

```bash
brew install mailpit
brew services start mailpit
```

If you prefer not to use Homebrew, grab a static binary from the
[releases page](https://github.com/axllent/mailpit/releases/latest) and run
`./mailpit &`. Default ports: SMTP `1025`, HTTP `8025`.

Verify Mailpit is up:

```bash
curl -fsS http://localhost:8025/api/v1/info | jq .Version
# expect something like: "v1.20.x"
```

### Point WP at Mailpit

Copy `.env.local.example` to `.env.local` (or edit `wp-config.php` directly)
and ensure:

```
HEYFAM_DEV_MAIL=mailpit
```

`HEYFAM_DEV_MAIL` modes:

- `mailpit` — send via 127.0.0.1:1025, view at http://localhost:8025
- `log` — write the body to `error_log` (works without Mailpit)
- *unset* — default WP mailer (likely `/dev/null` on Studio)

Restart Studio so the env var reaches PHP.

### Verify

In a Studio shell:

```bash
wp eval 'wp_mail( "tester@heyfam.test", "test from CLI", "<p>hello</p>" );'
```

Open `http://localhost:8025` — the message should appear with the subject
`test from CLI`.

Also tail the debug log:

```bash
tail -f wp-content/debug.log
# expect: [heyfam dev mail mailpit] To=tester@heyfam.test Subject=test from CLI
```

---

## 2. Web Push — VAPID + Chrome

### Generate VAPID keys (one-time, per local site)

```bash
npx web-push generate-vapid-keys --json
```

Sample output:

```json
{
  "publicKey":  "BGtkbcjr...4ZFEI9Snk1VEAj2qTYI1I1YxBXE",
  "privateKey": "I0_d0vnesxbBSUmlDdOKibGo6vEXRO-Vu88QlSlm5j0"
}
```

Paste into `wp-config.php` (or your env file the site reads):

```php
putenv( 'VAPID_PUBLIC_KEY=BGtkbcjr...4ZFEI9Snk1VEAj2qTYI1I1YxBXE' );
putenv( 'VAPID_PRIVATE_KEY=I0_d0vnesxbBSUmlDdOKibGo6vEXRO-Vu88QlSlm5j0' );
putenv( 'VAPID_SUBJECT=mailto:dev@heyfam.test' );
```

Restart Studio (or any PHP process) so `getenv()` picks them up.

Sanity check:

```bash
wp eval 'echo getenv("VAPID_PUBLIC_KEY") . "\n";'
```

### Confirm the public key reaches the browser

Load `http://heyfam.test/` (or whatever your Studio URL is), check the head:

```bash
curl -sb cookie http://heyfam.test/ | grep -o 'vapidKey[^"]\{20,\}'
```

The IAPI `heyfam` state surfaces `vapidKey` (see
`themes/heyfam-theme/functions.php`). If it's the empty string, the env var
didn't reach PHP — fix that before continuing.

### Subscribe in Chrome

1. Open Chrome at `http://heyfam.test/`.
2. Log in (use the dev OTP `000000` documented in
   `PhoneSignup::is_dev_mode`).
3. Chrome will *not* prompt for notification permission automatically —
   `push-subscribe.js` deliberately bails when `permission === 'default'`.
   Manually trigger it from the devtools console:
   ```js
   await Notification.requestPermission();
   ```
   Reload. Now `push-subscribe.js` should hit
   `/wp-json/heyfam/v1/push/subscribe`.
4. Verify the subscription landed in the DB:
   ```bash
   wp db query 'SELECT user_id, LEFT(endpoint, 60) AS endpoint, user_agent, created_at FROM wp_heyfam_push_subscriptions;'
   ```

### Manually send a push to confirm wiring

In a Studio shell, with `$user_id` being your test user:

```bash
wp eval '\HeyFam\Core\Notifs\Push::send( 2, [
    "title" => "HeyFam test",
    "body"  => "If you see this, push works.",
    "url"   => "/",
    "tag"   => "manual-test",
] );'
```

Expected: a system notification appears on macOS within 1–3 seconds. Click
it; Chrome focuses to `/`.

If nothing happens:

- Open `chrome://serviceworker-internals/?devtools` → find the worker for
  `heyfam.test` → click **Inspect** → look at Console for push errors.
- DevTools → Application → Service Workers → Push (tab) lets you fire a
  synthetic push for that registration.
- DevTools → Application → Push Messaging shows recent push deliveries and
  any error.
- Check `wp-content/debug.log` for `[heyfam] push send failed` lines (logged
  by `Push::send` when the push service returns ≠ 2xx/410).

### Subtleties

- Chrome treats `http://localhost` (and `*.localhost`) as a "secure context"
  for the push/Notification APIs. Other hostnames like `heyfam.test` require
  HTTPS. **If your Studio URL is `heyfam.test`** (the default), either:
  - (a) add `http://heyfam.test` to
    `chrome://flags/#unsafely-treat-insecure-origin-as-secure`, restart
    Chrome; or
  - (b) point your hosts file or Studio config so the site is served from
    `http://localhost:NNNN`. Studio supports this — check Studio settings →
    "Custom port".
- Safari desktop does not implement Web Push API the same way. For Safari
  push testing, use the iOS PWA path (16.4+, "Add to Home Screen").
- If you change VAPID keys, every existing subscription becomes invalid
  (server gets `403` from push service). Delete the rows from
  `wp_heyfam_push_subscriptions` and re-subscribe.

### Push troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| No notification permission prompt | Browser blocks default prompt on first load | DevTools console: `await Notification.requestPermission()` |
| Permission granted but no subscription row | `heyfam.vapidKey` is empty | `getenv('VAPID_PUBLIC_KEY')` returned ""; check `wp-config.php` and restart Studio |
| `push-subscribe.js` 401s on /push/subscribe | Nonce expired | Reload the page; the IAPI store gets a fresh nonce on render |
| Subscription registered, push fires nothing | Push service rejected JWT | `chrome://serviceworker-internals` → Inspect → Console; check `debug.log` for `[heyfam] push send failed` |
| `403` from push service | VAPID public key in DB doesn't match private key | You rotated keys without clearing subs. `DELETE FROM wp_heyfam_push_subscriptions;` and re-subscribe |
| Notification API not defined | Studio URL is non-localhost over HTTP | Either use `localhost:NNNN` Studio URL or add hostname to `chrome://flags/#unsafely-treat-insecure-origin-as-secure` |

---

## 3. SMS — `debug.log`

When `TWILIO_ACCOUNT_SID` is unset, `SMS::send()` writes a one-line
`[heyfam dev SMS] To=… Body=…` to `error_log` and returns `true` instead of
calling Twilio. Studio routes `error_log` into `wp-content/debug.log` when
`WP_DEBUG_LOG=true` (Studio's default).

Tail it:

```bash
tail -f wp-content/debug.log | grep 'heyfam dev SMS'
```

`FanOut::dispatch()` only attempts SMS when the recipient has a
`phone_e164` user meta value. If you don't see the line, check the user has
a phone:

```bash
wp user meta get USER_ID phone_e164
```

To exit dev mode, paste real Twilio creds into `wp-config.php`:

```php
putenv( 'TWILIO_ACCOUNT_SID=AC…' );
putenv( 'TWILIO_AUTH_TOKEN=…' );
putenv( 'TWILIO_VERIFY_SID=VA…' );
putenv( 'TWILIO_MESSAGING_SID=MG…' );
```

---

## 4. CLI dispatch — `wp heyfam send-test-notification`

Fire a one-off through the real `FanOut::dispatch()` pipeline so you can
verify push/email rendering without staging a content event.

```bash
# Most-recent post on the current fam → user 2
wp heyfam send-test-notification --user=2 --kind=post

# Specific comment
wp heyfam send-test-notification --user=2 --kind=comment --target=14

# Reaction (target optional; tag will be unique per call)
wp heyfam send-test-notification --user=2 --kind=reaction

# Print the payload but don't actually send
wp heyfam send-test-notification --user=2 --kind=post --dry-run

# Different fam (multisite blog id)
wp heyfam send-test-notification --user=2 --kind=post --blog=3
```

Expected output for a real send:

- Chrome shows a system notification (if user 2 has a push subscription)
- Mailpit at `localhost:8025` receives an email (if `Prefs` allow email for
  posts — default: yes)
- `debug.log` shows `[heyfam dev SMS]` line (if user 2 has `phone_e164` set
  and `Prefs` allow SMS for that event — default: posts only)

The command respects per-fam `Prefs` exactly as production does. To bypass
prefs for a quick test, temporarily reset prefs for that user / fam:

```bash
wp user meta delete USER_ID heyfam_notif_prefs_BLOG_ID
```

---

## 5. Reset everything

```bash
# Forget all push subscriptions (re-subscribe on next visit)
wp db query 'TRUNCATE wp_heyfam_push_subscriptions;'

# Forget the SMS opt-out state for a phone
wp eval '\HeyFam\Core\Notifs\SMS::set_opted_out( "+15555550100", false );'

# Forget email unsubscribe
wp eval '\HeyFam\Core\Notifs\Email::set_unsubscribed( USER_ID, false );'
```

## When to graduate to staging

This doc covers everything for local development. SMS body and Twilio
compliance flows (STOP/HELP, A2P 10DLC) require real Twilio creds and a
public URL; that's in the staging deploy runbook, not here.
