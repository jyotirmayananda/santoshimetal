import { Metadata } from 'next';
import { CapabilitiesContent } from '@/components/sections/CapabilitiesContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { servicesData } from '@/data/services';
import { breadcrumbJsonLd, buildPageMetadata, offerCatalogJsonLd } from '@/lib/seo';

import { pageSeoCopy } from '@/data/seo-pages';

export const metadata: Metadata = buildPageMetadata({
  title: pageSeoCopy.capabilities.title,
  description: pageSeoCopy.capabilities.description,
  path: '/capabilities',
  keywords: [
    'aluminium capabilities Odisha',
    'aluminium processing India',
    'powder coating and anodising',
    'aluminium ingot and profile supplier',
  ],
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
