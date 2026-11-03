import type { Metadata } from 'next';
import { HeroSection } from '@/components/hero/HeroSection';
import { CompanyIntro } from '@/components/sections/CompanyIntro';
import { CoreCapabilities } from '@/components/sections/CoreCapabilities';
import { FinishStudio } from '@/components/sections/FinishStudio';
import { PowderCoatingFeature } from '@/components/sections/PowderCoatingFeature';
import { AnodisingFeature } from '@/components/sections/AnodisingFeature';
import { IngotShowcase } from '@/components/sections/IngotShowcase';
import { ManufacturingStory } from '@/components/sections/ManufacturingStory';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { servicesData } from '@/data/services';
import {
  SITE_NAME,
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  offerCatalogJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Aluminium Ingot, Profile, Scrap Supply, Powder Coating & Anodising',
    description:
      'Santoshi Metal Industries Private Limited (CIN: U24202OD2026PTC055660) is an aluminium manufacturing and processing company in Ganjam, Odisha. Specializing in Aluminium Ingot, Aluminium Profile, Scrap & Supply, Powder Coating, and Anodising across India.',
    path: '/',
    keywords: [
      'aluminium manufacturer Odisha',
      'aluminium company Ganjam',
      'remelt ingot supplier India',
      'powder coating plant Odisha',
    ],
    image: '/images/silver-wave.jpg',
  }),
  title: {
    absolute: `${SITE_NAME} | Aluminium Ingot, Profile, Coating & Anodising in Odisha`,
  },
};

export default function HomePage() {
  const homeSchemas = [
    breadcrumbJsonLd([{ name: 'Home', path: '/' }]),
    offerCatalogJsonLd(
      servicesData.map((s) => ({
        title: s.title,
        slug: s.slug,
        shortDescription: s.shortDescription,
      }))
    ),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${absoluteUrl('/')}/#webpage`,
      url: absoluteUrl('/'),
      name: `${SITE_NAME} | Engineering Aluminium. Shaping the Future.`,
      isPartOf: { '@id': `${absoluteUrl('/')}/#website` },
      about: { '@id': `${absoluteUrl('/')}/#organization` },
      description:
        'Aluminium ingot, profile, scrap & supply, powder coating, and anodising from Santoshi Metal Industries, Odisha.',
      inLanguage: 'en-IN',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <JsonLd data={homeSchemas} />
      <HeroSection />
      <CompanyIntro />
      <CoreCapabilities />
      <FinishStudio />
      <PowderCoatingFeature />
      <AnodisingFeature />
      <IngotShowcase />
      <ManufacturingStory />
      <IndustriesGrid />
      <GalleryPreview />
      <CtaBanner />
    </div>
  );
}
