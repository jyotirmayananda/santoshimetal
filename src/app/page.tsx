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
import { HomeFaq } from '@/components/seo/HomeFaq';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageSeoCopy, siteFaqs } from '@/data/seo-pages';
import { servicesData } from '@/data/services';
import {
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  offerCatalogJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: pageSeoCopy.home.title,
  absoluteTitle: pageSeoCopy.home.absoluteTitle,
  description: pageSeoCopy.home.description,
  path: '/',
  keywords: pageSeoCopy.home.keywords,
  image: '/images/silver-wave.jpg',
});

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
    faqJsonLd(siteFaqs),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: absoluteUrl('/'),
      name: pageSeoCopy.home.absoluteTitle,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      description: pageSeoCopy.home.description,
      inLanguage: 'en-IN',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/silver-wave.jpg'),
      },
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
      <HomeFaq />
      <CtaBanner />
    </div>
  );
}
