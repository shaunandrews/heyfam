#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

echo "Installing PHP deps…"
composer install --no-interaction

echo "Installing Node deps…"
npm install

echo "Installing Playwright Chromium…"
npx playwright install chromium

if [ ! -f tests/.env.test ] && command -v studio >/dev/null 2>&1; then
  echo "Detecting Studio site URL…"
  npm run studio:url || true
fi

echo
echo "Done. Try:"
echo "  composer test            # PHP"
echo "  npm run test:js          # JS"
echo "  npm run test:e2e         # E2E (Studio must be running)"
