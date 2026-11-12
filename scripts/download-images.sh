#!/usr/bin/env bash
# Downloads old-site (choicepain.com) assets into /public.
# Run from the project root:  bash scripts/download-images.sh
set -u
B="https://choicepain.com/wp-content/uploads"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
get() { # url dest
  mkdir -p "$(dirname "$2")"
  if curl -fsSL -A "$UA" -e "https://choicepain.com/" -o "$2" "$1"; then echo "OK   $2"; else echo "FAIL $2  <- $1"; rm -f "$2"; fi
}

# Doctors
get "$B/2025/09/doctor-e1758894451688.png" public/images/doctors/tristan-shockley.png
get "$B/2025/09/Obi-Onyewu-MD-FAAPMR-e1758892829463.png" public/images/doctors/obi-onyewu.png
get "$B/2025/09/Jasmine-Barksdale-Cobb-NP-1.png" public/images/doctors/jasmine-barksdale-cobb.png

# GAE
get "$B/2025/11/Genicular-artery-embolization-GAE-2-e1764060670112.webp" public/images/gae.webp

# Insurance logos
for n in aetna bluecross amerihealth amerigroup better-health united tericare priority medicare medicaid humana ehp cigna; do
  get "$B/2025/09/$n.png" "public/images/insurance/$n.png"
done
get "$B/2025/09/dc.jpg" public/images/insurance/dc.jpg

# About video
get "$B/2025/11/Shockley.m4v" public/videos/about.m4v

# Blog featured images
for f in 31789-1.jpg 2254464.jpg 2240170.jpg 2229196.jpeg 2215784.jpg 2198505.jpeg 2172197.jpeg 2151915.jpg 2128880-1.jpg 2099587.jpg 2071480.jpg 2060265-1.jpg 2039129.jpg 2020635.jpg 2011571.jpg 1988590.jpg 1973607.jpg 1948279.jpg 1945173.jpg; do
  get "$B/2025/09/$f" "public/images/blog/$f"
done

echo "Done. Any FAIL lines: open the URL in your browser and save the file manually."
