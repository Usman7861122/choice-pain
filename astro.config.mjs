import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  redirects: {
    '/contact-us': '/locations',
    '/contact-us/hyattsville': '/locations/hyattsville',
    '/contact-us/gaithersburg': '/locations/gaithersburg',
    '/contact-us/dundalk': '/locations/dundalk',
    '/contact-us/lanham': '/locations/lanham',
    '/contact-us/pikesville': '/locations/pikesville',
    '/contact-us/olney': '/locations/olney',
    '/contact-us/rosedale': '/locations/rosedale',
    '/contact-us/baltimore': '/locations/baltimore',
    '/contact-us/newark': '/locations/newark',
    '/contact-us/milford': '/locations/milford',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
