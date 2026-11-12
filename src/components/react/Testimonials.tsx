import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface T { name: string; text: string }

export default function Testimonials({ items }: { items: T[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused, items.length]);
  const go = (d: number) => setI((p) => (p + d + items.length) % items.length);

  return (
    <div className="relative mx-auto max-w-4xl text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <svg aria-hidden="true" width="56" height="44" viewBox="0 0 56 44" className="mx-auto text-accent"><path fill="currentColor" d="M0 44V26C0 11 8 2 22 0l2 7C15 9 12 14 12 20h12v24H0zm32 0V26C32 11 40 2 54 0l2 7c-9 2-12 7-12 13h12v24H32z" opacity=".9" /></svg>
      <div className="relative mt-8 min-h-[13rem] sm:min-h-[11rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <div className="mb-5 flex justify-center gap-1 text-accent" aria-label="5 out of 5 stars">{'★★★★★'.split('').map((s, k) => <span key={k}>{s}</span>)}</div>
            <blockquote className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl">“{items[i].text}”</blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent-light">{items[i].name}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white transition hover:border-accent-light hover:bg-accent">←</button>
        <div className="flex gap-2">{items.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className="flex h-11 w-5 items-center justify-center"><span className={`h-1.5 rounded-full transition-all ${k === i ? 'w-6 bg-accent-light' : 'w-1.5 bg-white/40'}`} /></button>)}</div>
        <button onClick={() => go(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white transition hover:border-accent-light hover:bg-accent">→</button>
      </div>
    </div>
  );
}
