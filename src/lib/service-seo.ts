import type { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { breadcrumbJsonLd, buildPageMetadata, serviceJsonLd } from '@/lib/seo';

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}

export function buildServiceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildPageMetadata({
      title: 'Capability',
      description: 'Santoshi Metal Industries aluminium capability.',
      path: `/capabilities/${slug}`,
    });
  }

  return buildPageMetadata({
    title: service.title,
    description: `${service.shortDescription} ${service.fullDescription.slice(0, 120)}… Based in Ganjam, Odisha. Serving industrial clients across India.`,
    path: `/capabilities/${service.slug}`,
    keywords: [
      service.title,
      `${service.title} Odisha`,
      `${service.title} India`,
      'Santoshi Metal Industries',
    ],
    image: service.heroImage,
    imageAlt: service.title,
  });
}

export function buildServiceSchemas(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) return [];

  return [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Capabilities', path: '/capabilities' },
      { name: service.title, path: `/capabilities/${service.slug}` },
    ]),
    serviceJsonLd(service),
  ];
}
