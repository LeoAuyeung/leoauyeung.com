#!/usr/bin/env bash
# Pull the latest résumé PDF from Google Docs into public/resume.pdf.
#
# Runs in CI before every build (push, daily schedule, manual "Run workflow").
# If anything looks wrong, it keeps the committed public/resume.pdf and exits 0,
# so a bad download can never take the site down or publish a phone number.
set -uo pipefail

# The Google Doc ID comes from the RESUME_DOC_ID repo secret. Never commit it.
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/resume.pdf"
TMP="$(mktemp -t resume.XXXXXX)"
trap 'rm -f "$TMP" "$TMP.txt"' EXIT

keep() {
  echo "::warning title=Résumé not updated::$1 Keeping the committed public/resume.pdf."
  exit 0
}

DOC_ID="${RESUME_DOC_ID:-}"
[ -n "$DOC_ID" ] || keep "RESUME_DOC_ID is not set."
URL="https://docs.google.com/document/d/${DOC_ID}/export?format=pdf"

curl -fsSL --retry 3 --max-time 60 -o "$TMP" "$URL" || keep "Could not download the Google Doc export."

[ "$(head -c 4 "$TMP")" = "%PDF" ] || keep "Download is not a PDF (is the doc still shared by link?)."

size=$(wc -c < "$TMP")
[ "$size" -gt 10000 ] || keep "Downloaded PDF is suspiciously small (${size} bytes)."

if ! command -v pdftotext >/dev/null 2>&1; then
  if command -v apt-get >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
    sudo apt-get install -y -qq poppler-utils >/dev/null 2>&1
  fi
fi
command -v pdftotext >/dev/null 2>&1 || keep "pdftotext is not available, so the PDF could not be checked."

pdftotext "$TMP" "$TMP.txt" || keep "Could not read text from the PDF."

if grep -Eq '\(?[0-9]{3}\)?[-. ][0-9]{3}[-. ][0-9]{4}' "$TMP.txt"; then
  keep "The Google Doc contains a phone number. Remove it from the doc to publish updates."
fi

pages=$(pdfinfo "$TMP" 2>/dev/null | awk '/^Pages:/ {print $2}')
mv "$TMP" "$DEST"
echo "Updated public/resume.pdf from Google Docs (${pages:-?} page(s), ${size} bytes)."
