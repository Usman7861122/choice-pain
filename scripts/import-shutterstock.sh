#!/usr/bin/env bash
# Converts Shutterstock downloads (~/Downloads/shutterstock_<id>.jpg) to public/images/stock/<id>.webp (2400px wide).
# Usage: bash scripts/import-shutterstock.sh   (run from the project folder)
set -u
SRC="${1:-$HOME/Downloads}"; DEST="public/images/stock"; mkdir -p "$DEST"
IDS="2851594755 2641626713 2798870653 1179549604 2812611301 2510864919 2544226475 1889188492 262386221 2546633941 2290453343 787065742 2194705701 2432540063 269727140 2249076203 2487776147 626250332 2843265359 4203042489 4228768331 4211360911 2842222769 2840002537 2501727823 2736260707 2637922903 2839836651"
ok=0; miss=0
for id in $IDS; do
  f=$(ls "$SRC"/shutterstock_"$id".* 2>/dev/null | head -1)
  if [ -z "$f" ]; then echo "MISSING $id"; miss=$((miss+1)); continue; fi
  if command -v magick >/dev/null; then magick "$f" -auto-orient -resize 2400x\> -quality 82 "$DEST/$id.webp"; else convert "$f" -auto-orient -resize 2400x\> -quality 82 "$DEST/$id.webp"; fi
  echo "OK $id"; ok=$((ok+1))
done
echo "Done: $ok converted, $miss still missing."
