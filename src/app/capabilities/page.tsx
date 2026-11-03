import { Metadata } from 'next';
import { CapabilitiesContent } from '@/components/sections/CapabilitiesContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { servicesData } from '@/data/services';
import { breadcrumbJsonLd, buildPageMetadata, offerCatalogJsonLd } from '@/lib/seo';

import { pageSeoCopy } from '@/data/seo-pages';

export const metadata: Metadata = buildPageMetadata({
  title: pageSeoCopy.capabilities.title,
  absoluteTitle: pageSeoCopy.capabilities.absoluteTitle,
  description: pageSeoCopy.capabilities.description,
  path: '/capabilities',
  keywords: pageSeoCopy.capabilities.keywords,
  image: '/images/powder-coating.jpg',
});

export default function CapabilitiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Capabilities', path: '/capabilities' },
          ]),
          offerCatalogJsonLd(
            servicesData.map((s) => ({
              title: s.title,
              slug: s.slug,
              shortDescription: s.shortDescription,
            }))
          ),
        ]}
      />
      <CapabilitiesContent />
    </>
  );
}
