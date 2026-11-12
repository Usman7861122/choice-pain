import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Loc { slug: string; name: string; address: string; zip: string }
interface Props { locations: Loc[]; phone: string; phoneHref: string; email: string }

export default function LocationsTabs({ locations, phone, phoneHref, email }: Props) {
  const [active, setActive] = useState(locations[0].slug);
  const loc = locations.find((l) => l.slug === active)!;
  const full = `${loc.address}, ${loc.zip}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(full)}&z=15&output=embed`;
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(full)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <div role="tablist" aria-label="Office locations" aria-orientation="vertical" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {locations.map((l) => {
          const on = l.slug === active;
          return (
            <button key={l.slug} role="tab" aria-selected={on} onClick={() => setActive(l.slug)}
              className={`flex min-h-11 items-center justify-between rounded-md border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${on ? 'border-accent bg-navy text-white shadow-lg' : 'border-accent/30 bg-white text-navy hover:border-accent hover:bg-cream'}`}>
              <span>{l.name}</span>
              <span aria-hidden="true" className={`hidden transition lg:inline ${on ? 'text-accent-light' : 'text-accent'}`}>{on ? '●' : '→'}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-md border border-accent/30 bg-white shadow-xl shadow-navy/10">
        <AnimatePresence mode="wait">
          <motion.div key={loc.slug} role="tabpanel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col justify-between p-8">
              <div>
                <p className="eyebrow">Our office</p>
                <h3 className="mt-3 text-3xl font-semibold text-navy">{loc.name}</h3>
                <div className="accent-rule mt-4" />
                <address className="mt-6 not-italic leading-relaxed text-ink">{loc.address}<br />{loc.zip}</address>
                <dl className="mt-6 space-y-3 text-sm">
                  <div><dt className="font-semibold text-navy">Phone</dt><dd><a className="text-muted hover:text-accent" href={phoneHref}>{phone}</a></dd></div>
                  <div><dt className="font-semibold text-navy">Email</dt><dd><a className="text-muted hover:text-accent" href={`mailto:${email}`}>{email}</a></dd></div>
                  <div><dt className="font-semibold text-navy">Hours</dt><dd className="text-muted">Call the office to confirm hours</dd></div>
                </dl>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={dir} target="_blank" rel="noopener" className="btn btn-outline">Get Directions</a>
                <a href={phoneHref} className="btn btn-accent">Call Now</a>
              </div>
            </div>
            <iframe title={`Map of ${loc.name} office`} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 md:h-full md:min-h-[26rem]" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
