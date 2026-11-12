import { motion } from 'framer-motion';
import { photoStatus } from '../../data/photo-status';

interface Item { slug: string; title: string; text: string; img: string }

export default function ServicesGrid({ items, base = '/services' }: { items: Item[]; base?: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => (
        <motion.a key={s.slug} href={`${base}/${s.slug}`}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="group relative block overflow-hidden rounded-md border border-accent/25 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-navy/20">
          <div className="relative aspect-square overflow-hidden">
            <img src={s.img} data-photo-status={photoStatus(s.img)} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-opacity duration-500 group-hover:from-navy/95" />
            <span className="absolute left-5 top-5 font-display text-sm font-semibold tracking-widest text-accent-light">0{i + 1}</span>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{s.title}</h3>
              <div className="mt-2 grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                <p className="overflow-hidden text-sm leading-relaxed text-white/85">{s.text}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
                Learn more <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
              </span>
            </div>
            <span className="pointer-events-none absolute inset-3 rounded-sm border border-accent-light/0 transition-colors duration-500 group-hover:border-accent-light/60" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
