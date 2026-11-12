import { motion } from 'framer-motion';

interface Feature { title: string; text: string }

export default function FeatureCards({ items }: { items: Feature[] }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
      {items.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -6 }}
          className="rounded-2xl border border-neutral-200 p-8 shadow-sm"
        >
          <h3 className="text-xl font-semibold">{f.title}</h3>
          <p className="mt-3 text-neutral-600">{f.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
