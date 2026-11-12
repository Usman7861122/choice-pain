import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function AnimatedHero({ title, subtitle, ctaLabel = 'Get started', ctaHref = '#' }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold tracking-tight md:text-6xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 text-lg text-neutral-600"
      >
        {subtitle}
      </motion.p>
      <motion.a
        href={ctaHref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 inline-block rounded-full bg-brand px-8 py-3 font-medium text-white"
      >
        {ctaLabel}
      </motion.a>
    </section>
  );
}
