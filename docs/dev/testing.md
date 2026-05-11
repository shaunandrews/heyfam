# HeyFam Testing

HeyFam has four test surfaces. All of them run locally against the same Studio
site you use for development — no separate Docker.

## One-time setup

1. Install Studio and bring up the heyfam site once. See `~/Studio/heyfam/STUDIO.md`.
2. From the repo root:

   ```bash
   composer install
   npm install
   npx playwright install chromium
   ```

3. Generate `tests/.env.test` from the running Studio site:

   ```bash
   studio site start --skip-browser --path ~/Studio/heyfam
   npm run studio:url
   ```

4. (Optional) Set `WP_DEBUG` so the dev banner appears in-browser:

   ```bash
   studio wp config set WP_DEBUG true --raw
   ```

## Running tests

| Surface           | Command              | What it covers                              |
|-------------------|----------------------|---------------------------------------------|
| PHP unit          | `composer test`       | Pure logic (Invites, FanOut prefs)          |
| PHP integration   | `composer test`       | Comments parent validation, Reactions table |
| PHP multisite     | `composer test:ms`    | REST routes happy path, FanOut scheduling   |
| JS unit           | `npm run test:js`     | `lib/{phone,slug,time,dom}.js` helpers      |
| E2E (chromium)    | `npm run test:e2e`    | Signup → fam → post → invite → join → comment → react |

`composer test` runs the WordPress test framework in-process against an
SQLite database (`plugins/heyfam-core/tests/heyfam_test.sqlite`), which is
deleted and recreated on every run.

## CLI helpers

```bash
# Reset your local user back to pre-onboarding (keeps the user record).
studio wp heyfam reset-me --phone=+15555550100 --yes

# Hard reset — delete the network user too.
studio wp heyfam reset-me --phone=+15555550100 --delete-user --yes

# Create a demo fam.
studio wp heyfam seed-demo --name="The Demos" --slug=demos --members=4 --posts=6

# Re-create an existing demo fam from scratch.
studio wp heyfam seed-demo --reset --name="The Demos" --slug=demos
```

## Dev banner

With `WP_DEBUG=true` and signed in, a small "dev" pill appears in the bottom-right
on every page. Clicking it exposes:

- **Reset me** — same as `wp heyfam reset-me` against your own user.
- **Seed demo fam** — creates `/demo-fam/`, redirects you there.
- **Log out** — standard WordPress logout.
- **Open wp-admin** — `/wp-admin/`.

The banner posts to `/wp-json/heyfam/v1/_dev/*` routes that are only registered
when `WP_DEBUG` is true. They never ship to production.

## CI notes

Tasks 1-3 (PHPUnit, JS unit) run cleanly in CI without Studio. Tasks 4 (e2e)
requires a running WordPress; on CI we recommend `wp-env` or wp-cli `core
multisite-install` to a temp directory. Until CI is wired, the e2e suite is
expected to be run by a developer pre-merge.
