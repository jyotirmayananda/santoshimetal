import type { Metadata } from 'next';
import { serviceSeoCopy } from '@/data/seo-pages';
import { servicesData } from '@/data/services';
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from '@/lib/seo';

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
    description:
      copy?.description ||
      `${service.shortDescription} Based in Ganjam, Odisha. Serving industrial clients across India.`,
    path: `/capabilities/${service.slug}`,
    keywords: [
      service.title,
      ...(copy?.keywords || [
        `${service.title} Odisha`,
        `${service.title} India`,
        'Santoshi Metal Industries',
      ]),
    ],
    image: service.heroImage,
    imageAlt: `${service.title} — Santoshi Metal Industries Odisha`,
  });
}

export function buildServiceSchemas(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) return [];

  const serviceFaqs = [
    {
      question: `What is included in ${service.title} at Santoshi Metal Industries?`,
      answer: service.shortDescription,
    },
    {
      question: `Where can I get ${service.title} in Odisha?`,
      answer: `${service.title} is offered by Santoshi Metal Industries Private Limited from Kabisuryanagar, Ganjam, Odisha, with supply coordination across India.`,
    },
    {
      question: `How do I enquire about ${service.title}?`,
      answer:
        'Use the Contact page to request a quotation with project details, alloy or finish requirements, and estimated quantity.',
    },
  ];

  return [
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Capabilities', path: '/capabilities' },
      { name: service.title, path: `/capabilities/${service.slug}` },
    ]),
    serviceJsonLd(service),
    faqJsonLd(serviceFaqs),
  ];
}
