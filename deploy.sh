#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-a3f549867f040e13df33e5bd18f785f4}"
PROJECT="${CLOUDFLARE_PAGES_PROJECT:-hottublaunch}"

if ! npx wrangler whoami >/dev/null 2>&1; then
  echo "Cloudflare login required. Complete the browser prompt, then run ./deploy.sh again."
  npx wrangler login
fi

echo "Deploying to Cloudflare Pages ($PROJECT)..."
npx wrangler pages deploy . --project-name="$PROJECT" --commit-dirty=true

echo ""
echo "Next: Cloudflare Dashboard → Workers & Pages → $PROJECT → Custom domains"
echo "Add hottublaunch.com and www.hottublaunch.com if not already connected."
