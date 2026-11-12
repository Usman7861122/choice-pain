// PHOTO MARKING SYSTEM. Every photo on the site carries data-photo-status:
//   unsplash  = temporary Unsplash photo (13-digit file name) -> replace with Shutterstock
//   repeated  = licensed Shutterstock photo that is already used somewhere else -> replace with a fresh one
//   new       = licensed Shutterstock photo used only once -> keep
// Find them in the browser:  document.querySelectorAll('[data-photo-status="unsplash"],[data-photo-status="repeated"]')
// Master list: scripts/PHOTO-STATUS.md
export const repeatedIds = ['1124268074','1394904065','179113073','2162748209','2218293907','2351908447','2695226147','2732782727','2756848845','2764352399','2847908205','2853998381','4211227349','4215702463','2756627323','2756848849'];
export function photoStatus(src: string): 'unsplash' | 'repeated' | 'new' {
  const id = (src.match(/\/(\d+)\.webp/) || [])[1] || '';
  if (id.length === 13) return 'unsplash';
  return repeatedIds.includes(id) ? 'repeated' : 'new';
}
