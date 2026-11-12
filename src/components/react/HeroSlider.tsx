import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Slide { img: string; alt: string; eyebrow: string; title: string; lead: string; words: string[]; text: string }
interface Props { slides: Slide[]; ctaHref: string; phone: string; phoneHref: string }

export default function HeroSlider({ slides, ctaHref, phone, phoneHref }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [w, setW] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setW((p) => p + 1), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section aria-roledescription="carousel" aria-label="Featured care" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Images */}
      {slides.map((s, idx) => (
        <motion.img key={s.img} src={s.img} alt={idx === i ? s.alt : ''} aria-hidden={idx !== i}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          initial={false} animate={{ opacity: idx === i ? 1 : 0, scale: idx === i ? 1.06 : 1 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: 'linear' } }}
          loading={idx === 0 ? 'eager' : 'lazy'} fetchPriority={idx === 0 ? 'high' : 'auto'} />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-navy/70 to-transparent" />

      {/* Text layer: SEO-friendly. One static h1, all slide copy stays in the DOM, only the active one is visible. */}
      <div className="container-x pb-28 pt-44">
        <div className="max-w-2xl">
          <h1 className="eyebrow !text-accent-light !tracking-[0.22em]">CHOICE Pain &amp; Rehabilitation Center · Pain Management in Maryland &amp; Delaware</h1>
          <div className="relative mt-6 min-h-[20rem] sm:min-h-[19rem]" aria-live={paused ? 'polite' : 'off'}>
            {slides.map((s, idx) => (
              <motion.div key={s.title} aria-hidden={idx !== i} className="absolute inset-0"
                initial={false} animate={{ opacity: idx === i ? 1 : 0, y: idx === i ? 0 : 24 }} transition={{ duration: 0.8, delay: idx === i ? 0.35 : 0 }}
                style={{ pointerEvents: idx === i ? 'auto' : 'none' }}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{s.eyebrow}</p>
                <h2 className="mt-3 font-display text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <span className="sr-only">{s.title}</span>
                  <span aria-hidden="true">{s.lead}{' '}
                    <span className="relative inline-block align-bottom">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span key={idx === i ? w % s.words.length : 0} className="hero-word inline-block"
                          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -28, filter: 'blur(6px)' }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                          {s.words[(idx === i ? w : 0) % s.words.length]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{s.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href={ctaHref} className="btn btn-appointment">Request Appointment</a>
            <a href={phoneHref} className="btn btn-light">Call {phone}</a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3" role="tablist" aria-label="Choose slide">
        {slides.map((s, idx) => (
          <button key={s.title} role="tab" aria-selected={idx === i} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
            className="flex h-11 w-8 items-center justify-center">
            <span className={`block h-[3px] rounded-full transition-all duration-500 ${idx === i ? 'w-8 bg-accent-light' : 'w-4 bg-white/50'}`} />
          </button>
        ))}
      </div>
      <p className="absolute bottom-10 right-8 hidden font-display text-sm tracking-widest text-white/70 md:block">0{i + 1} / 0{slides.length}</p>
    </section>
  );
}
