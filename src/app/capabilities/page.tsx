import { Metadata } from 'next';
import { CapabilitiesContent } from '@/components/sections/CapabilitiesContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { servicesData } from '@/data/services';
import { breadcrumbJsonLd, buildPageMetadata, offerCatalogJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Aluminium Capabilities',
  description:
    'Explore Santoshi Metal Industries capabilities: Aluminium Ingot, Aluminium Profile, Aluminium Scrap & Supply, Powder Coating, and Anodising in Odisha, India.',
  path: '/capabilities',
  keywords: [
    'aluminium capabilities Odisha',
    'aluminium processing India',
    'powder coating and anodising',
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
