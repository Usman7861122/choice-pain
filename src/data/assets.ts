// Files are downloaded by scripts/download-images.sh
export const doctors = [
  { name: 'Tristan Shockley, MD', role: 'Pain Management Physician', img: '/images/doctors/tristan-shockley.png', slug: 'tristan-shockley' },
  { name: 'Obi Onyewu, MD, FAAPMR', role: 'Physical Medicine & Rehabilitation', img: '/images/doctors/obi-onyewu.png', slug: 'obi-onyewu' },
  { name: 'Jasmine Barksdale-Cobb, NP', role: 'Nurse Practitioner', img: '/images/doctors/jasmine-barksdale-cobb.png', slug: 'jasmine-barksdale-cobb' },
];
export const gaeImage = '/images/gae.webp';
export const aboutVideo = '/videos/about.m4v';
export const insurers = ['aetna','bluecross','amerihealth','amerigroup','better-health','united','tericare','priority','medicare','medicaid','humana','ehp','cigna']
  .map((n) => ({ name: n, src: `/images/insurance/${n}.png` }));
export const testimonials = [
  { name: 'Dean R.', text: 'UNBELIEVABLE. Extremely friendly personnel.' },
  { name: 'Crystal Z.', text: 'They are kind, thoughtful, and just wonderful.' },
  { name: 'John H.', text: 'People are very professional and polite.' },
  { name: 'Mike D.', text: 'Everyone from the front desk on were great.' },
];
