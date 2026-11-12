// DRAFT legal text in plain English. It must be reviewed by the practice's lawyer / privacy officer before launch.
export interface LegalDoc { slug: string; title: string; eyebrow: string; lede: string; updated: string; sections: { h: string; p: string[]; list?: string[] }[] }
const updated = 'November 12, 2026';
const org = 'CHOICE Pain & Rehabilitation Center';

export const privacyPolicy: LegalDoc = {
  slug: 'privacy-policy', title: 'Privacy Policy', eyebrow: 'Legal', updated,
  lede: `How ${org} collects, uses and protects information when you use choicepain.com.`,
  sections: [
    { h: 'About this policy', p: [`This policy covers information we collect through this website. It does not replace our Notice of Privacy Practices, which explains how we protect your health records under HIPAA. Ask any office for a copy.`] },
    { h: 'What we collect', p: ['We collect only what we need.'], list: [
      'Details you send us, such as your name, phone number, email, preferred office and the message in an appointment request.',
      'Technical data, such as your browser type, device, pages visited and approximate location. We collect this with cookies, only if you allow it.',
      'Messages you send by email or phone.'] },
    { h: 'Please do not send private health details online', p: ['Our forms and email are not a safe place for detailed medical information. Please share it at your visit or by phone with our team.'] },
    { h: 'How we use information', p: [], list: [
      'To answer your questions and book appointments.',
      'To run, protect and improve our website.',
      'To send reminders or news you asked for. You can opt out at any time.',
      'To follow the law.'] },
    { h: 'Who we share it with', p: ['We do not sell your personal information. We share it only with service providers who help us run the site or book visits (for example hosting, forms and analytics), and when the law requires it. These providers must protect your data.'] },
    { h: 'Cookies', p: ['You choose which optional cookies we use. See our Cookie Policy, and use "Cookie Settings" in the footer to change your choice at any time.'] },
    { h: 'How long we keep it', p: ['We keep website messages only as long as we need them for the reasons above or as the law requires.'] },
    { h: 'Your choices and rights', p: ['You can ask us to see, fix or delete the personal information we hold from this website, and you can opt out of marketing messages. Some rights depend on where you live. Contact us using the details below.'] },
    { h: 'Security', p: ['We use reasonable safeguards to protect information. No website can be 100 percent secure, so please take care when sending information online.'] },
    { h: 'Children', p: ['This website is for adults. We do not knowingly collect information from children under 13 through the website.'] },
    { h: 'Changes and contact', p: ['We may update this policy and will change the date above when we do. Questions? Call (240) 786-1001 or email info@choicepain.com.'] },
  ],
};

export const termsConditions: LegalDoc = {
  slug: 'terms-condition', title: 'Terms & Conditions', eyebrow: 'Legal', updated,
  lede: `The rules for using choicepain.com, the website of ${org}.`,
  sections: [
    { h: 'Using this website', p: ['By using this website, you agree to these terms. If you do not agree, please do not use the site.'] },
    { h: 'No medical advice, no patient relationship', p: ['The site gives general information only. It is not medical advice and does not create a doctor-patient relationship. Read our Medical Disclaimer. Always talk to a qualified provider about your health. In an emergency, call 911.'] },
    { h: 'Appointment requests', p: ['Sending a request does not book a visit. A visit is booked only when our team confirms it with you.'] },
    { h: 'Acceptable use', p: ['You agree not to:'], list: ['Break the law or use the site to harm others.', 'Try to damage, copy or break into the site or its systems.', 'Send false information or pretend to be someone else.', 'Use automated tools to collect data from the site.'] },
    { h: 'Our content', p: ['The text, images, logos and design on this site belong to us or our licensors and are protected by law. You may view and print pages for your own personal use. Please do not copy or reuse them for other purposes without our written permission.'] },
    { h: 'Links to other sites', p: ['We may link to other websites, such as PDF forms hosted by partners. We do not control them and are not responsible for their content or privacy practices.'] },
    { h: 'Accuracy', p: ['We work to keep information correct and current, but we do not promise that it is complete or error-free. Details such as office hours or insurance may change.'] },
    { h: 'Limit of liability', p: ['To the fullest extent the law allows, we are not liable for losses that come from using this website or relying on its content. Nothing here limits rights you have by law.'] },
    { h: 'Changes', p: ['We may change these terms. The date above shows the latest version. Using the site after a change means you accept it.'] },
    { h: 'Governing law and contact', p: ['These terms follow the laws of the State of Maryland. Questions? Call (240) 786-1001 or email info@choicepain.com.'] },
  ],
};
