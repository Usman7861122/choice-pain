// Builds full ConditionPage objects from compact specs (condition-specs-*.ts).
// MEDICAL TEXT is general patient education written in our own words. The practice's doctors must review before launch.
// Photos: every photo is marked unsplash / repeated / new by photo-status.ts until it is replaced with fresh Shutterstock.
import type { ConditionPage } from './condition-pages';
import { featuredServices } from './services';
export const photoAlt: Record<string, string> = {
  '2853998381': 'Woman holding her lower back on a sofa', '2756848845': 'Doctor showing a patient a spine model', '2756848849': 'Doctor explaining a spine model to a patient', '2756627323': 'Woman on a sofa holding her leg in discomfort',
  '2695226147': 'Woman sitting on a chair holding her knee', '2351908447': 'Clinician examining a patient shoulder', '2732782727': 'Doctor holding a knee model and a syringe',
  '2162748209': 'Clinician pointing at a model of the spine and pelvis', '4215702463': 'Doctors reviewing an X-ray with an older patient', '4211227349': 'Doctor greeting an older patient in a clinic room',
  '2847908205': 'Doctor and patient shaking hands in an office', '2764352399': 'Older couple riding bicycles outdoors', '2218293907': 'Active older couple walking on a beach',
  '1124268074': 'Woman standing in nature with open arms', '179113073': 'Woman with open arms at sunrise', '1394904065': 'Clinician preparing a patient for a back procedure',
  '1615997380705': 'Woman holding the back of her neck', '1767972463825': 'Close-up of neck pain highlighted in red', '1772122028898': 'Model of the lower spine and discs',
  '1743767587874': 'Four views of a model spine', '1649751361457': 'Therapist examining a patient knee', '1746842419697': 'Clinician examining a patient knee',
  '1733685372553': 'Clinician examining a patient forearm', '1768507423533': 'Clinician treating a patient back on a treatment table', '1638980314369': 'IV line taped to a patient leg',
  '1666214276389': 'Doctor starting an MRI scan for a patient', '1758691462071': 'Doctor examining a patient hands', '1758573467051': 'Woman holding a spine model in black and white',
  '1523294928042': 'Older man walking with a cane on a city street', '1625690987114': 'Older couple walking arm in arm', '1772790969968': 'Older adults walking outdoors with walkers',
  '1762955911769': 'Caregiver with older adults doing a craft activity', '1606206591513': 'Rows of laboratory blood sample tubes', '1758691462863': 'Doctor talking with a patient at a desk',
  '1758691462878': 'Doctor reviewing notes with a patient', '1758691462321': 'Doctor talking with an older man on a sofa', '1765896387387': 'Nurse smiling with an older woman',
  '1765896387398': 'Nurse chatting with an older patient', '1686771416282': 'Doctor shaking hands with a patient', '1631217868264': 'Doctor talking with a patient',
  '1659353888906': 'Smiling doctor with a stethoscope', '1637059824899': 'Doctor with a stethoscope and crossed arms', '1758691461990': 'Doctor filling in a form with a patient',
  '1758798464263': 'Man on a mobility scooter in a park',
};
export interface Spec {
  slug: string; title: string; nm?: string; short: string; lede: string; ov: [string, string];
  ct?: string; cause: [string, string][]; st?: string; sym: string[]; red: string[]; dx: string;
  svc: string[]; other: string[]; tips: string[]; faqs: [string, string][]; rel: string[]; ph: string[];
}
export function build(x: Spec): ConditionPage {
  const nm = x.nm || x.title.toLowerCase();
  const services = x.svc.map((sl) => { const f = featuredServices.find((s) => s.slug === sl)!; return { slug: sl, title: f.title, text: f.text }; });
  return {
    slug: x.slug, title: x.title, short: x.short,
    metaTitle: `${x.title} Treatment in Maryland & Delaware | Choice Pain & Rehabilitation Center`,
    metaDescription: `${x.short} Find the cause and get the least invasive care that works. 10 offices in Maryland and Delaware.`.slice(0, 200),
    lede: x.lede,
    photos: x.ph.map((id) => ({ img: `/images/stock/${id}.webp`, alt: photoAlt[id] })),
    overview: { title: `Understanding ${nm}`, text: x.ov },
    causes: { title: x.ct || `What can cause ${nm}?`, text: 'Finding the true source matters, because each cause responds to a different treatment.', items: x.cause.map(([title, text]) => ({ title, text })) },
    symptoms: { title: x.st || 'Common symptoms and when to get help fast', text: 'Symptoms feel different for each person. These are signs we hear about often.', items: x.sym, redFlags: x.red },
    diagnosis: { title: `How we find the cause of your ${nm}`, text: 'A clear diagnosis comes before any treatment. Every first visit follows three simple steps.', steps: [
      { title: 'We listen', text: 'We ask when it started, what makes it better or worse, what you have already tried, and how it affects your sleep, work and daily life.' },
      { title: 'We examine', text: x.dx },
      { title: 'We review your tests', text: 'We look at any scans, X-rays or lab results you have and match them with your symptoms, so the plan treats the real cause.' } ] },
    treatment: { title: 'Treatment: the least invasive option that works', text: services.length ? 'Choice Pain focuses on non-surgical care. We begin with the gentlest treatment likely to help and only step up if needed. Depending on your diagnosis, options may include:' : 'Choice Pain focuses on non-surgical, personal care. We begin with the gentlest approach likely to help and only step up if needed. Your plan may include:', services, other: x.other },
    livingWell: { title: 'Everyday habits that help', tips: x.tips },
    faqs: [...x.faqs.map(([q, a]) => ({ q, a })), { q: 'Is this covered by insurance?', a: 'Many plans cover diagnosis and treatment. Call our office and the team will help check your coverage before your visit.' }],
    related: x.rel.map((r) => ({ slug: r, title: '' })),
  };
}
