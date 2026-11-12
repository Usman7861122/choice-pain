// Back pain page. Structure follows advspine.org/conditions/back-pain (a short page), text written in our own words.
// MEDICAL TEXT: general patient education. The practice's doctors must review before launch.
// Photos are marked: unsplash / repeated / new (see photo-status.ts and scripts/PHOTO-STATUS.md).
const s = (id: string) => `/images/stock/${id}.webp`;
export interface ConditionPage {
  slug: string; title: string; short?: string; metaTitle: string; metaDescription: string; lede: string;
  photos: { img: string; alt: string }[];
  overview: { title: string; text: string[] };
  causes: { title: string; text: string; items: { title: string; text: string }[] };
  symptoms: { title: string; text: string; items: string[]; redFlags: string[] };
  diagnosis: { title: string; text: string; steps: { title: string; text: string }[] };
  treatment: { title: string; text: string; services: { slug: string; title: string; text: string }[]; other: string[] };
  livingWell: { title: string; tips: string[] };
  faqs: { q: string; a: string }[];
  related: { slug: string; title: string }[];
}
const base: Record<string, ConditionPage> = {
  'back-pain': {
    slug: 'back-pain', title: 'Back Pain',
    metaTitle: 'Back Pain Treatment in Maryland & Delaware | Choice Pain & Rehabilitation Center',
    metaDescription: 'Find the true source of low and mid back pain and get the least invasive care that works: injections, radiofrequency ablation and more. 10 offices in Maryland and Delaware.',
    lede: 'Back pain can come from discs, joints, muscles or nerves. We find the true source first, then suggest the gentlest treatment that is likely to work for you.',
    photos: [
      { img: s('2853998381'), alt: 'Woman holding her lower back while sitting on a sofa' },       // REPEATED (homepage MILD card)
      { img: s('2756848845'), alt: 'Doctor showing a patient a model of the spine' },             // REPEATED
      { img: s('1772122028898'), alt: 'Close-up model of the lower spine and discs' },            // UNSPLASH
      { img: s('2756627323'), alt: 'Woman resting on a sofa holding her leg in discomfort' },      // NEW
      { img: s('1758691462863'), alt: 'Doctor talking with a patient at a desk' },                 // UNSPLASH
      { img: s('2218293907'), alt: 'Active older couple walking together on a beach' },            // REPEATED
    ],
    overview: {
      title: 'Back pain, explained simply',
      text: [
        'Back pain is one of the most common reasons people visit a doctor. It can sit in the lower back, the middle back, or spread into the hips and legs. Some pain comes on fast after a lift or a fall. Other pain builds slowly over months or years.',
        'At Choice Pain & Rehabilitation Center we treat low and mid back pain. At each visit we listen to your story, examine you and review your scans. Then we explain what is causing the pain and what your choices are, from simple steps to modern minimally invasive procedures.',
      ],
    },
    causes: {
      title: 'What can cause back pain?',
      text: 'The pain usually starts in one of four places. Finding which one matters, because each responds to a different treatment.',
      items: [
        { title: 'Discs', text: 'The soft cushions between the bones can wear down, bulge or tear. A disc that presses on a nerve can cause pain that travels into the leg.' },
        { title: 'Joints', text: 'Small joints at the back of the spine (facet joints) and the joints at the base of the spine can become stiff and sore with age, injury or arthritis.' },
        { title: 'Muscles', text: 'Strained muscles and ligaments from lifting, twisting, long hours of sitting or weak core muscles often cause aching and tight spasms.' },
        { title: 'Nerves', text: 'Irritated or squeezed nerves, as in sciatica or spinal stenosis, can cause sharp, burning or electric pain, and sometimes numbness or weakness.' },
      ],
    },
    symptoms: {
      title: 'Common symptoms and when to get help fast',
      text: 'Back pain feels different for each person. These are signs we hear about often.',
      items: ['Dull, aching pain in the lower or middle back', 'Sharp or stabbing pain when you bend, twist or lift', 'Pain that spreads to the buttock, hip or leg', 'Stiffness in the morning or after sitting a long time', 'Numbness, tingling or a feeling of weakness in the legs', 'Pain that wakes you at night or does not ease with rest'],
      redFlags: ['New loss of control of the bladder or bowels', 'Numbness in the groin or inner thighs', 'Fast-growing weakness in a leg or foot', 'Back pain with fever, or after a serious fall or accident', 'Unexplained weight loss together with back pain'],
    },
    diagnosis: {
      title: 'How we find the source of your pain',
      text: 'A clear diagnosis comes before any treatment. Every first visit follows three simple steps.',
      steps: [
        { title: 'We listen', text: 'We ask when the pain started, what makes it better or worse, and how it affects your sleep, work and daily life.' },
        { title: 'We examine', text: 'A physical exam checks your movement, strength, reflexes and the exact spots that hurt.' },
        { title: 'We review your imaging', text: 'We look at your X-rays, MRI or CT scans, and match them with your symptoms so we treat the real cause.' },
      ],
    },
    treatment: {
      title: 'Treatment: the least invasive option that works',
      text: 'Choice Pain focuses on non-surgical care. We begin with the gentlest treatment likely to help and only step up if needed. Depending on your diagnosis, options may include:',
      services: [
        { slug: 'epidural-steroid-injections', title: 'Epidural Steroid Injections', text: 'Calm inflamed spinal nerves that cause back and leg pain.' },
        { slug: 'radiofrequency-ablation', title: 'Radiofrequency Ablation', text: 'Uses gentle heat to quiet the small nerves that send pain from sore joints.' },
        { slug: 'spinal-cord-stimulation', title: 'Spinal Cord Stimulation', text: 'A small device that changes pain signals. You try it for about a week first.' },
        { slug: 'mild-procedure', title: 'MILD® Procedure', text: 'For lumbar spinal stenosis, with no implants and no stitches.' },
        { slug: 'kyphoplasty', title: 'Kyphoplasty', text: 'For painful spine compression fractures.' },
        { slug: 'regenerative-medicine', title: 'Regenerative Medicine & Joints', text: 'PRP, Regenexx® and joint injections to help tissue heal.' },
      ],
      other: ['Physical therapy and guided exercise', 'Short-term anti-inflammatory medicine when appropriate', 'Heat, ice and activity changes', 'A referral to a spine surgeon in the rare cases where surgery is the right answer'],
    },
    livingWell: {
      title: 'Everyday habits that protect your back',
      tips: ['Keep moving. Short walks every day help more than long rest.', 'Stand up and stretch every 30 to 45 minutes if you sit for work.', 'Lift with your legs, keep the load close and avoid twisting.', 'Build core and hip strength with gentle exercise, as your care team advises.', 'Sleep on a mattress and pillow that keep your spine in a neutral line.', 'Keep a healthy weight and stop smoking, both help discs and joints.'],
    },
    faqs: [
      { q: 'When should I see a pain specialist for back pain?', a: 'See a specialist if pain lasts more than a few weeks, keeps coming back, spreads into your leg, or stops you from doing normal things. Get urgent care at once for any red flag sign listed above.' },
      { q: 'Will I need surgery?', a: 'Most back pain does not need surgery. We start with non-surgical options such as injections, nerve treatments and exercise. If surgery would truly help you, we will say so and guide you to the right surgeon.' },
      { q: 'Do I need an MRI before my visit?', a: 'No. Bring any scans or reports you already have. We will tell you if more imaging is needed after we examine you.' },
      { q: 'Are the procedures painful?', a: 'Most are done with numbing medicine, and many patients feel only pressure. Your doctor will explain what to expect before you decide.' },
      { q: 'How soon can I feel better?', a: 'It depends on the cause and the treatment. Some patients feel relief within days, others over a few weeks. We will give you a realistic plan at your visit.' },
      { q: 'Is back pain covered by insurance?', a: 'Many plans cover diagnosis and treatment. Call us at the office and our team will help check your coverage before your visit.' },
    ],
    related: [{ slug: 'neck-pain', title: 'Neck Pain' }, { slug: 'sacroiliac-joint-injection', title: 'Sacroiliac Joint Pain' }, { slug: 'facet-syndrome', title: 'Facet Syndrome' }, { slug: 'osteoporosis', title: 'Osteoporosis' }],
  },
};
import { build } from './condition-builder';
import { specs } from './condition-specs';
import { conditions } from './conditions';
base['back-pain'].short = 'Low and mid back pain from discs, joints, muscles or nerves.';
export const conditionPages: Record<string, ConditionPage> = { ...base, ...Object.fromEntries(specs.map((x) => [x.slug, build(x)])) };
// Fill related-condition titles from the conditions list
for (const pg of Object.values(conditionPages)) pg.related = pg.related.map((r) => ({ slug: r.slug, title: conditions.find((c) => c.slug === r.slug)?.title || r.slug }));
