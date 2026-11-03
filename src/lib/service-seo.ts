import type { Metadata } from 'next';
import { serviceSeoCopy } from '@/data/seo-pages';
import { servicesData } from '@/data/services';
import { breadcrumbJsonLd, buildPageMetadata, serviceJsonLd } from '@/lib/seo';

export function getServiceBySlug(slug: string) {
  return servicesData.find((s) => s.slug === slug);
}

export function buildServiceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  const copy = serviceSeoCopy[slug];

  if (!service) {
    return buildPageMetadata({
      title: 'Capability',
      description: 'Santoshi Metal Industries aluminium capability in Odisha, India.',
      path: `/capabilities/${slug}`,
    });
  }

  return buildPageMetadata({
    title: copy?.title || service.title,
    absoluteTitle: copy?.absoluteTitle,
    description:
      copy?.description ||
      `${service.shortDescription} Contact Santoshi Metal Industries in Odisha for enquiries.`,
    path: `/capabilities/${service.slug}`,
    keywords: copy?.keywords || [service.title, 'Santoshi Metal Industries', 'Odisha'],
    image: service.heroImage,
    imageAlt: `${service.title} — Santoshi Metal Industries`,
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
    serviceJsonLd({
      title: service.title,
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      slug: service.slug,
      heroImage: service.heroImage,
    }),
  ];
}

export function serviceBreadcrumbItems(slug: string) {
  const service = getServiceBySlug(slug);
  return [
    { name: 'Home', path: '/' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: service?.title || 'Capability' },
  ];
}
