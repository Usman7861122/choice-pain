// Licensed Shutterstock images (resized to 2400px WebP) in /public/images/stock
const s = (id: number | string) => `/images/stock/${id}.webp`;

export const heroSlides = [
  { img: s(2847908205), alt: 'Smiling doctor shaking hands with a patient at a pain clinic' },
  { img: s(2218293907), alt: 'Active senior couple walking pain-free on the beach' },
  { img: s(2764352399), alt: 'Happy active senior couple enjoying a bike ride' },
];
export const aboutImage = s(2756848845);
export const parallaxImage = s(1124268074);
export const gaeSectionImage = s(2695226147);

// Service card images. TODO replace the two marked "weak" with better photos.
export const serviceImages: Record<string, string> = {
  'epidural-steroid-injections': s(1394904065), // weak: very clinical close-up
  'radiofrequency-ablation': s(2351908447),     // weak: blank left side, needs recrop/replace
  'spinal-cord-stimulation': s(4215702463),
  'mild-procedure': s(2853998381),
  'kyphoplasty': s(2162748209),
  'regenerative-medicine': s(2732782727),
};
// Spare: 2695226147 (knee pain on sofa), 179113073 (sunrise, wide)

export const blogImages = [s(1394904065), s(179113073), s(2732782727)];
