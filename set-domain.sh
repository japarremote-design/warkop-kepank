#!/usr/bin/env bash
# Ganti URL placeholder dengan domain Vercel asli.
# Pakai:  bash set-domain.sh https://warkop-kepank.vercel.app
set -e
[ -z "$1" ] && { echo "Pakai: bash set-domain.sh https://domain-kamu.vercel.app"; exit 1; }
NEW="${1%/}"
sed -i.bak "s|https://warkop-kepank.vercel.app|$NEW|g" index.html sitemap.xml robots.txt
rm -f index.html.bak sitemap.xml.bak robots.txt.bak
echo "✅ Semua URL diganti jadi: $NEW"
echo "   Jangan lupa deploy ulang, lalu scrape ulang di:"
echo "   - Facebook/WhatsApp: https://developers.facebook.com/tools/debug/"
echo "   - X: https://cards-dev.twitter.com/validator"
