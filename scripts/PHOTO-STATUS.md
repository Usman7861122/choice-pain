# Photo status (standing rule: mark every photo until it is new or replaced with Shutterstock)
Every <img> has `data-photo-status`: `unsplash` (temporary), `repeated` (Shutterstock used more than once), `new` (keep).
Rules live in `src/data/photo-status.ts` (add an ID to `repeatedIds` when it is reused).

## /conditions/back-pain  (src/data/condition-pages.ts)
| Slot | File | Status | Plan |
|---|---|---|---|
| Hero | 2853998381 | repeated (homepage MILD card) | fresh Shutterstock: man/woman holding lower back |
| Overview | 2756848845 | repeated | fresh: doctor + patient with spine model |
| Causes | 1772122028898 | UNSPLASH | fresh: lumbar spine / disc model |
| Symptoms | 2756627323 | new | keep |
| Diagnosis | 1758691462863 | UNSPLASH | fresh: doctor reviewing MRI with patient |
| Living well | 2218293907 | repeated | fresh: older adult walking / stretching |

## All condition pages (src/data/condition-specs-*.ts, condition-groups.ts)
Each condition has 6 photo slots (`ph` list of IDs) and each category page has 3 (`photos`). Every <img> carries `data-photo-status`.
Most are `unsplash` (13-digit IDs) or `repeated` (licensed Shutterstock already used elsewhere); only 2756627323 is `new`.
To list what needs replacing on any page, run in the browser console:
`[...document.querySelectorAll('[data-photo-status]')].filter(i=>i.dataset.photoStatus!=='new').map(i=>i.dataset.photoStatus+' '+i.getAttribute('src'))`
Tomorrow: download fresh Shutterstock photos per condition, then change the IDs in the `ph` / `photos` lists (alt text in `photoAlt` in condition-builder.ts).

## /treatment pages (src/data/treatment-specs-*.ts, treatments.ts)
24 treatment pages + /treatment index. Each page has 3 photo slots (`ph`). All use licensed Shutterstock photos that are reused many times, so every one is marked `repeated` and must be replaced with a fresh photo.
Index page hero: 2756848845 (repeated).
