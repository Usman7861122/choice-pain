import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menu, conditionColumns, commonConditions, treatmentColumns, type MenuItem } from '../../data/menu';
import { featuredServices } from '../../data/services';
import { site } from '../../data/content';

const Chevron = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
    <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const Arrow = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" className="shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100">
    <path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };
const list = { hidden: {}, show: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } } };

const ext = (h?: string) => !!h && (/^https?:/.test(h) || /\.pdf($|\?)/i.test(h));
const extProps = (h?: string) => (ext(h) ? { target: '_blank', rel: 'noopener noreferrer' } : {});
const eyebrowCls = 'text-[12.5px] font-semibold uppercase tracking-[0.22em] text-accent';
const linkCls = 'group/link flex items-center gap-2 rounded py-2 text-[15.5px] leading-snug text-ink transition-all duration-300 hover:translate-x-1 hover:text-accent';

function WidePanel({ it }: { it: MenuItem }) {
  const services = it.mega === 'services';
  const treat = it.mega === 'treatments';
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full z-50">
      <div className="border-t-2 border-accent bg-white shadow-2xl shadow-navy/25">
        <div className="container-x grid gap-x-10 py-10 lg:grid-cols-[250px_1fr]">
          <div className="lg:border-r lg:border-accent/15 lg:pr-8">
            <p className={eyebrowCls}>{treat ? 'Treatments' : services ? 'Services' : 'Conditions we treat'}</p>
            <p className="mt-4 font-display text-[28px] font-medium leading-[1.15] text-navy">
              {treat ? 'Nerve blocks, epidurals and more, chosen to fit you.' : services ? 'Minimally invasive care for the spine, joints and nerves.' : 'From back pain and arthritis to migraines and neuropathy.'}
            </p>
            <a href={it.href} className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-accent">
              View all {treat ? 'treatments' : services ? 'services' : 'conditions'} <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </a>
          </div>

          {treat ? (
            <motion.div variants={list} initial="hidden" animate="show" className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-3">
              {treatmentColumns.map((col, ci) => (
                <motion.div key={ci} variants={item} className="space-y-7">
                  {col.map((cat) => (
                    <div key={cat.title}>
                      <p className={eyebrowCls}>{cat.title}</p>
                      <ul className="mt-3 divide-y divide-accent/15">{cat.items.map((c) => <li key={c.href}><a href={c.href} className={linkCls}>{c.label}</a></li>)}</ul>
                    </div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          ) : services ? (
            <motion.div variants={list} initial="hidden" animate="show" className="grid gap-x-10 lg:grid-cols-[1fr_210px]">
              <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                {featuredServices.map((s) => (
                  <motion.a key={s.slug} variants={item} href={`/services/${s.slug}`} className="group/card block border-b border-accent/15 pb-5">
                    <p className="flex items-center gap-2 font-display text-[22px] font-semibold leading-tight text-navy transition group-hover/card:text-accent">
                      {s.title}<span aria-hidden="true" className="-translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100">→</span>
                    </p>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{s.text}</p>
                  </motion.a>
                ))}
              </div>
              <motion.div variants={item} className="border-l border-accent/15 pl-8">
                <p className={eyebrowCls}>Common conditions</p>
                <ul className="mt-4 divide-y divide-accent/15">{commonConditions.map((c) => <li key={c.href}><a href={c.href} className={linkCls}>{c.label}</a></li>)}</ul>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div variants={list} initial="hidden" animate="show" className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
              {conditionColumns.map((col, ci) => (
                <motion.div key={ci} variants={item} className="space-y-7">
                  {col.map((cat) => (
                    <div key={cat.title}>
                      <a href={`/conditions/${cat.title.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`} className={eyebrowCls + ' block transition-colors hover:text-navy'}>{cat.title}</a>
                      <ul className="mt-3 divide-y divide-accent/15">{cat.items.map((c) => <li key={c.href}><a href={c.href} className={linkCls}>{c.label}</a></li>)}</ul>
                    </div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SimplePanel({ it }: { it: MenuItem }) {
  const links = it.children ?? [];
  const two = links.length > 6;
  const isContact = it.label === 'Contact';
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute top-full z-50 ${isContact ? 'right-0' : 'left-0'}`}>
      <div className={`relative overflow-hidden rounded-b-md border-t-2 border-accent bg-white shadow-2xl shadow-navy/25 ${two ? 'w-[min(34rem,92vw)]' : 'w-80'}`}>
        <motion.ul variants={list} initial="hidden" animate="show" className={`p-3 ${two ? 'grid grid-cols-2 gap-x-2' : '[&>li:last-child]:border-b-0'}`}>
          {links.map((c) => (
            <motion.li key={c.href} variants={item} className="border-b border-accent/15">
              <a href={c.href} {...extProps(c.href)} className="group/link flex items-center justify-between gap-3 rounded px-4 py-3 text-[16px] font-medium text-ink transition-all duration-300 hover:bg-cream hover:pl-5 hover:text-accent">
                <span>{c.label}</span><Arrow />
              </a>
            </motion.li>
          ))}
        </motion.ul>
        {isContact && (
          <div className="flex items-center justify-between gap-3 border-t border-accent/15 bg-navy px-6 py-4 text-sm text-white">
            <span className="text-white/70">Call any office</span>
            <a href={site.phoneHref} className="font-display font-semibold text-accent-light hover:text-white">{site.phone}</a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const clear = overlay && !scrolled && !open;
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const enter = (label: string) => { clearTimeout(timer.current); setOpen(label); };
  const leave = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(null), 140); };

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('keydown', esc); };
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : ''; }, [mobile]);

  const topClear = overlay && !scrolled;

  return (
    <header className={`${overlay ? 'fixed inset-x-0 top-0' : 'sticky top-0'} z-50`}>
      <div className={`hidden overflow-hidden text-xs text-white/85 transition-all duration-300 lg:block ${topClear ? 'max-h-9 border-b border-white/15 bg-transparent' : 'max-h-9 bg-navy'} ${overlay && scrolled ? '!max-h-0' : ''}`}>
        <div className="container-x flex h-9 items-center justify-between">
          <p className="tracking-wide">Serving patients across Maryland &amp; Delaware</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="transition hover:text-accent-light">{site.email}</a>
            <a href={site.phoneHref} className="font-semibold text-accent-light">{site.phone}</a>
          </div>
        </div>
      </div>

      <div className={`relative border-b transition-all duration-300 ${clear ? 'border-white/15 bg-transparent' : 'border-accent/20 bg-white shadow-lg shadow-navy/10'}`}>
        <div className="container-x flex items-center justify-between gap-6" style={{ height: scrolled ? 76 : 92, transition: 'height .3s' }}>
          <a href="/" aria-label={`${site.name} home`} className="shrink-0">
            <span className="logo" style={{ height: scrolled ? 52 : 64, transition: 'height .3s' }}>
              <img src={clear ? '/images/logo/base-light.png' : '/images/logo/base.png'} alt={site.name} className="logo-base" width={455} height={149} />
              <img src={clear ? '/images/logo/icon-light.png' : '/images/logo/icon.png'} alt="" aria-hidden="true" className="logo-icon" />
              <span className="logo-ring" aria-hidden="true" />
            </span>
          </a>

          <nav aria-label="Primary" className="hidden h-full items-stretch gap-1 lg:flex">
            {menu.map((m) => {
              const wide = !!m.mega;
              const hasPanel = wide || !!m.children;
              const active = open === m.label;
              return (
                <div key={m.label} className={`${wide ? '' : 'relative'} flex items-center`} onMouseEnter={() => hasPanel && enter(m.label)} onMouseLeave={leave}>
                  <a href={m.href ?? '#'} aria-expanded={hasPanel ? active : undefined} onFocus={() => hasPanel && enter(m.label)}
                    className={`relative flex items-center gap-1.5 rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-accent ${clear ? 'text-white hover:text-accent-light' : active ? 'text-accent' : 'text-navy hover:text-accent'}`}>
                    {m.label}{hasPanel && <Chevron open={active} />}
                    <span className={`absolute inset-x-3 -bottom-px h-[2px] origin-left bg-accent transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                  </a>
                  <AnimatePresence>{active && hasPanel && (wide ? <WidePanel it={m} /> : <SimplePanel it={m} />)}</AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={site.appointmentHref} className="btn btn-appointment hidden sm:inline-flex">Request Appointment</a>
            <button className={`flex h-11 w-11 items-center justify-center rounded-md border lg:hidden ${clear ? 'border-white/50 text-white' : 'border-accent/50 text-navy'}`} aria-label="Open menu" aria-expanded={mobile} onClick={() => setMobile(true)}>
              <svg width="20" height="14" viewBox="0 0 20 14"><path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.6" /></svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-navy text-white lg:hidden">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30" onClick={() => setMobile(false)}>
                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.6" /></svg>
              </button>
            </div>
            <ul className="p-5">
              {menu.map((m) => {
                const subs = m.children;
                return (
                  <li key={m.label} className="border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <a href={m.href ?? '#'} className="block flex-1 py-4 font-display text-lg">{m.label}</a>
                      {subs && <button aria-label={`Toggle ${m.label}`} className="flex h-11 w-11 items-center justify-center" onClick={() => setMobileSub(mobileSub === m.label ? null : m.label)}><Chevron open={mobileSub === m.label} /></button>}
                    </div>
                    {subs && mobileSub === m.label && (
                      <ul className="pb-4 pl-3">{subs.map((s) => <li key={s.href}><a href={s.href} {...extProps(s.href)} className="block py-2.5 text-base text-white/75">{s.label}</a></li>)}</ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="space-y-3 p-5">
              <a href={site.appointmentHref} className="btn btn-accent w-full">Request Appointment</a>
              <a href={site.phoneHref} className="btn btn-light w-full">{site.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
