import type { LegalDoc } from './legal-1';
const updated = 'November 12, 2026';

export const cookiePolicy: LegalDoc = {
  slug: 'cookie-policy', title: 'Cookie Policy', eyebrow: 'Legal', updated,
  lede: 'What cookies are, which ones we use, and how you can choose.',
  sections: [
    { h: 'What are cookies?', p: ['Cookies are small files that a website saves on your device. They help a site work, remember your choices and show how it is used. Similar tools, such as local storage, work the same way, so we call them all cookies here.'] },
    { h: 'The types we use', p: ['Optional cookies are off until you say yes.'], list: [
      'Strictly necessary: keep the site safe and working, and remember your cookie choice. These are always on.',
      'Preferences: remember choices you make, such as your chosen office. Optional.',
      'Analytics: show us which pages are used so we can improve the site. Optional.',
      'Marketing: help us show and measure ads on other sites. Optional.'] },
    { h: 'How to change your choice', p: ['Use "Cookie Settings" in the footer of any page. You can switch each type on or off and save. You can also delete cookies in your browser settings, but some parts of the site may stop working.'] },
    { h: 'Third parties', p: ['Some cookies come from services we use, such as Google (maps and fonts) or analytics tools. Those companies have their own privacy policies.'] },
    { h: 'Questions', p: ['Call (240) 786-1001 or email info@choicepain.com. See also our Privacy Policy.'] },
  ],
};

export const medicalDisclaimer: LegalDoc = {
  slug: 'medical-disclaimer', title: 'Medical Disclaimer', eyebrow: 'Legal', updated,
  lede: 'Our website teaches. It does not replace your doctor.',
  sections: [
    { h: 'For information only', p: ['Pages about conditions, services and treatments are written to help you learn. They are general, they are not medical advice, and they do not diagnose or treat any condition.'] },
    { h: 'Talk to a provider', p: ['Always ask a qualified provider about your own situation. Do not ignore or delay medical advice because of something you read here.'] },
    { h: 'Results differ', p: ['Every person is different. Treatments help many people, but we cannot promise a result. Every procedure has risks, and your provider will explain them to you.'] },
    { h: 'Emergencies', p: ['This site is not for emergencies. If you think you have a medical emergency, call 911 or go to the nearest emergency room. Warning signs include sudden weakness, loss of bladder or bowel control, severe chest pain, trouble breathing, or fever with severe back pain.'] },
    { h: 'No patient relationship', p: ['Using this site, or sending an appointment request, does not make you a patient. That starts only after our team confirms your visit.'] },
  ],
};

export const accessibility: LegalDoc = {
  slug: 'accessibility', title: 'Accessibility Statement', eyebrow: 'Legal', updated,
  lede: 'We want everyone to be able to use our website.',
  sections: [
    { h: 'Our goal', p: ['We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, so people who use screen readers, keyboards or other tools can use this site.'] },
    { h: 'What we do', p: [], list: ['Clear headings and page structure.', 'Text descriptions for meaningful images.', 'Keyboard-friendly menus, forms and buttons with a visible focus ring.', 'Good color contrast and resizable text.', 'Motion that respects the "reduce motion" setting on your device.'] },
    { h: 'Need help?', p: ['If you find a problem, or need information in another way, please tell us. We will do our best to help right away.', 'Call (240) 786-1001 or email info@choicepain.com.'] },
    { h: 'Ongoing work', p: ['Accessibility is ongoing work. We check our pages and fix problems as we find them.'] },
  ],
};
