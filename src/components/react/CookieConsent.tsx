import { useEffect, useRef, useState } from 'react';

type Prefs = { analytics: boolean; marketing: boolean; preferences: boolean };
const KEY = 'cp-consent-v1';
const cats: { id: keyof Prefs; title: string; text: string }[] = [
  { id: 'preferences', title: 'Preferences', text: 'Remember choices you make, such as your chosen office.' },
  { id: 'analytics', title: 'Analytics', text: 'Help us see which pages people use, so we can make the site better. Data is combined, not personal.' },
  { id: 'marketing', title: 'Marketing', text: 'Used to show you our ads on other sites and to measure those ads.' },
];

function read(): Prefs | null { try { const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch { return null; } }
function save(p: Prefs) {
  try { localStorage.setItem(KEY, JSON.stringify({ ...p, necessary: true, time: new Date().toISOString() })); } catch { /* storage blocked */ }
  window.dispatchEvent(new CustomEvent('consent-change', { detail: { necessary: true, ...p } }));
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [banner, setBanner] = useState(false);
  const [modal, setModal] = useState(false);
  const [p, setP] = useState<Prefs>({ analytics: false, marketing: false, preferences: false });
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = read();
    if (saved) setP({ analytics: !!saved.analytics, marketing: !!saved.marketing, preferences: !!saved.preferences });
    else setBanner(true);
    setReady(true);
    const open = () => { setBanner(false); setModal(true); };
    window.addEventListener('open-cookie-settings', open);
    return () => window.removeEventListener('open-cookie-settings', open);
  }, []);

  useEffect(() => {
    if (!modal) return;
    first.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setModal(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [modal]);

  const choose = (v: Prefs) => { setP(v); save(v); setBanner(false); setModal(false); };
  if (!ready) return null;

  return (
    <>
      {banner && (
        <div role="region" aria-label="Cookie notice" className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-4xl rounded-md border border-accent/30 bg-white p-6 shadow-2xl shadow-navy/30 md:p-7">
          <h2 className="font-display text-2xl text-navy">We value your privacy</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">We use cookies that the site needs to work. With your OK, we also use cookies for preferences, analytics and marketing. You choose. Read our <a className="text-accent underline" href="/cookie-policy">Cookie Policy</a>.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="btn btn-appointment" onClick={() => choose({ analytics: true, marketing: true, preferences: true })}>Accept all</button>
            <button className="btn btn-outline" onClick={() => choose({ analytics: false, marketing: false, preferences: false })}>Reject non-essential</button>
            <button className="btn btn-outline" onClick={() => { setBanner(false); setModal(true); }}>Customize</button>
          </div>
        </div>
      )}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/70 p-3 sm:items-center" onClick={(e) => e.target === e.currentTarget && setModal(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="ck-title" className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-md bg-white p-7 shadow-2xl">
            <h2 id="ck-title" className="font-display text-3xl text-navy">Cookie settings</h2>
            <div className="accent-rule mt-3" />
            <p className="mt-4 text-sm text-muted">Choose which cookies you allow. You can change this at any time from the footer.</p>
            <ul className="mt-5 divide-y divide-accent/15 border-y border-accent/15">
              <li className="flex items-start justify-between gap-4 py-4">
                <div><h3 className="font-semibold text-navy">Strictly necessary</h3><p className="text-sm text-muted">Keep the site safe and working. Always on.</p></div>
                <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">Always on</span>
              </li>
              {cats.map((c) => (
                <li key={c.id} className="flex items-start justify-between gap-4 py-4">
                  <div><h3 className="font-semibold text-navy" id={`ck-${c.id}`}>{c.title}</h3><p className="text-sm text-muted">{c.text}</p></div>
                  <button role="switch" aria-checked={p[c.id]} aria-labelledby={`ck-${c.id}`} ref={c.id === 'preferences' ? first : undefined}
                    onClick={() => setP({ ...p, [c.id]: !p[c.id] })}
                    className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition ${p[c.id] ? 'bg-accent' : 'bg-navy/25'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}>
                    <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${p[c.id] ? 'left-[22px]' : 'left-0.5'}`} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn btn-appointment" onClick={() => choose(p)}>Save my choices</button>
              <button className="btn btn-outline" onClick={() => choose({ analytics: true, marketing: true, preferences: true })}>Accept all</button>
              <button className="btn btn-outline" onClick={() => choose({ analytics: false, marketing: false, preferences: false })}>Reject non-essential</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
