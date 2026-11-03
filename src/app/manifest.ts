import type { MetadataRoute } from 'next';
import { companyData } from '@/data/company';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyData.legalName,
    short_name: companyData.brandName,
    description:
      'Aluminium Ingot, Profile, Scrap & Supply, Powder Coating, and Anodising from Odisha, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#123b68',
    lang: 'en-IN',
    categories: ['business', 'manufacturing', 'industrial'],
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
