// Posts pulled from the live choicepain.com blog (WordPress REST API). Text is the practice's own.
// Featured images are downloaded by scripts/download-images.sh into /public/images/blog/.
import p1 from './blog/part1.json';
import p2 from './blog/part2.json';
import p3 from './blog/part3.json';

export type Block = [string, string];
export interface Post {
  slug: string; title: string; date: string; dateLabel: string; category: string; readTime: number;
  image: string; fallback: string; excerpt: string; blocks: Block[];
}
const raw = [...p1, ...p2, ...p3] as { s: string; d: string; t: string; i: string; b: Block[] }[];
export const categories = ['Treatments', 'Conditions', 'Wellness', 'Sports & Joints'] as const;
const catOf: Record<string, (typeof categories)[number]> = {
  'how-nerve-root-injection-therapy-blocks-pain': 'Treatments',
  'myths-and-facts-about-suboxone-as-a-treatment-for-opioid-addiction': 'Treatments',
  'all-about-facet-block-injections': 'Treatments',
  'using-biofeedback-to-treat-cancer-pain': 'Treatments',
  'alleviate-your-arthritis-pain-with-physical-therapy': 'Treatments',
  'lifestyle-steps-that-lower-cancer-risk': 'Wellness',
  'the-dangers-of-tech-neck': 'Wellness',
  'is-running-bad-for-my-knees': 'Sports & Joints',
  'whats-different-about-sports-medicine': 'Sports & Joints',
  'how-to-keep-a-sprained-ankle-from-becoming-a-chronic-instability': 'Sports & Joints',
  'torn-meniscus-the-most-effective-treatment-options-to-consider': 'Sports & Joints',
};
const fallbacks = ['/images/stock/1394904065.webp', '/images/stock/179113073.webp', '/images/stock/2732782727.webp'];
const fmt = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
const words = (b: Block[]) => b.map((x) => x[1]).join(' ').split(/\s+/).length;
const clip = (t: string, n = 170) => (t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n)).replace(/[,.;:—-]+$/, '') + '…');

export const posts: Post[] = raw
  .map((r, i) => {
    const hasH2 = r.b.some((x) => x[0] === 'h2');
    const blocks = (hasH2 ? r.b : r.b.map(([t, x]) => (t === 'h3' ? ['h2', x] : t === 'h4' ? ['h3', x] : [t, x]))) as Block[];
    return {
      slug: r.s, title: r.t, date: r.d, dateLabel: fmt(r.d), category: catOf[r.s] ?? 'Conditions',
      readTime: Math.max(2, Math.round(words(blocks) / 210)), image: `/images/blog/${r.i}`, fallback: fallbacks[i % 3],
      excerpt: clip(blocks.find((x) => x[0] === 'p')![1]), blocks,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));
