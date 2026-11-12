#!/usr/bin/env python3
"""Replaces Unsplash photo IDs with their Shutterstock IDs in the source code (run AFTER scripts/import-shutterstock.sh)."""
import json, os, re, sys
m = json.load(open("scripts/photo-swap-map.json"))
done = skipped = 0
files = ["src/data/service-pages.ts", "src/components/astro/ServicePageView.astro"]
for f in files:
    s = open(f).read()
    for un, sh in m.items():
        if not os.path.exists(f"public/images/stock/{sh}.webp"):
            skipped += 1; print("skip (file missing):", sh); continue
        if un in s: s = s.replace(un, sh); done += 1
    open(f, "w").write(s)
print(f"Swapped {done}, skipped {skipped}")
