import { featuredServices } from './services';
import { conditions } from './conditions';
import { locations } from './locations';
import { treatmentList, treatmentGroups } from './treatments';
import { brochureUrl } from './thirdparty';

export type Link = { label: string; href: string };
export type MenuItem = { label: string; href?: string; children?: Link[]; mega?: 'services' | 'conditions' | 'treatments' };

const cond = (slug: string, label?: string): Link => {
  const c = conditions.find((x) => x.slug === slug)!;
  return { label: label ?? c.title, href: `/conditions/${slug}` };
};

// Conditions grouped into short categories for the mega menu
export const conditionColumns: { title: string; items: Link[] }[][] = [
  [
    { title: 'Spine & Back', items: [cond('back-pain'), cond('neck-pain'), cond('whiplash'), cond('facet-syndrome'), cond('sacroiliac-joint-injection', 'Sacroiliac Joint Pain'), cond('osteoporosis')] },
    { title: 'Head & Face', items: [cond('headache'), cond('tmj')] },
  ],
  [
    { title: 'Joint Pain', items: [cond('arthritis'), cond('knee-pain'), cond('shoulder-pain'), cond('hip-pain'), cond('foot-and-ankle-pain'), cond('tennis-elbow'), cond('arm-and-hand-pain')] },
  ],
  [
    { title: 'Nerve Pain', items: [cond('diabetic-neuropathy'), cond('carpal-tunnel-syndrome', 'Carpal Tunnel'), cond('complex-regional-pain-syndrome', 'CRPS'), cond('postherpetic-neuralgia')] },
    { title: 'Chronic & Other Pain', items: [cond('fibromyalgia'), cond('cancer-pain'), cond('interstitial-cystitis')] },
  ],
  [
    { title: 'Injury & Care', items: [cond('personal-injuries'), cond('workers-compensation', "Workers' Comp"), cond('sports-medicine'), cond('suboxone')] },
  ],
];

export const commonConditions: Link[] = [
  cond('back-pain'), cond('neck-pain'), cond('shoulder-pain'), cond('knee-pain'), cond('arthritis'), cond('headache'),
];

// Short labels for the mega menu so every name fits on one line
const tLabel = (t: string) => (/Plexus|Ganglion|Branch/.test(t) ? t.replace(' Nerve Block', ' Block') : t);
const tLink = (g: string) => treatmentList.filter((t) => t.group === g).map((t) => ({ label: tLabel(t.title), href: `/treatment/${t.slug}` }));
export const treatmentColumns: { title: string; items: Link[] }[][] = [
  [{ title: 'Spine & Epidural', items: tLink('Spine & Epidural') }],
  [{ title: 'Plexus & Sympathetic', items: tLink('Sympathetic & Plexus Blocks') }, { title: 'Head, Neck & Face', items: tLink('Head, Neck & Face') }],
  [{ title: 'Nerves & Joints', items: tLink('Peripheral Nerves & Joints') }],
];

export const menu: MenuItem[] = [
  { label: 'About Us', href: '/about-us', children: [
    { label: 'Providers', href: '/providers' }, { label: 'FAQs', href: '/faqs' },
    { label: 'Patient Privacy', href: '/patient-privacy' }, { label: 'Billing & Insurance', href: '/billing-insurance' },
    { label: 'Our Brochure (PDF)', href: brochureUrl }, { label: 'Careers', href: '/careers' },
    { label: 'For Physicians', href: '/for-physicians' }, { label: 'Blog', href: '/blog' }, { label: 'Testimonials', href: '/testimonials' },
  ] },
  { label: 'Services', href: '/services', mega: 'services',
    children: featuredServices.map((s) => ({ label: s.title, href: `/services/${s.slug}` })) },
  { label: 'Conditions', href: '/conditions', mega: 'conditions',
    children: conditions.map((c) => ({ label: c.title, href: `/conditions/${c.slug}` })) },
  { label: 'Treatment', href: '/treatment', mega: 'treatments', children: treatmentList.map((t) => ({ label: t.title, href: `/treatment/${t.slug}` })) },
  { label: 'GAE', href: '/genicular-artery-embolization' },
  { label: 'Patients', children: [
    { label: 'New Patient Forms (English)', href: 'https://sa1s3.patientpop.com/assets/docs/291011.pdf' },
    { label: 'New Patient Forms (Spanish)', href: 'https://sa1s3.patientpop.com/assets/docs/93194.pdf' },
  ] },
  { label: 'Locations', href: '/locations', children: locations.map((l) => ({ label: l.name, href: `/locations/${l.slug}` })) },
];
