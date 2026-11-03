import type { Metadata } from 'next';
import { companyData } from '@/data/company';

export const SITE_URL = 'https://santoshimetal.com';
export const SITE_NAME = companyData.brandName;
export const LEGAL_NAME = companyData.legalName;

export const DEFAULT_OG_IMAGE = {
  url: '/images/silver-wave.jpg',
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — polished aluminium surface`,
} as const;

/** Report-aligned primary keywords (proposed; not volume-validated). */
export const PRIMARY_KEYWORDS = [
  'Santoshi Metal Industries',
  'aluminium supplier in Odisha',
  'aluminium products Odisha',
  'aluminium ingot supplier Odisha',
  'aluminium profile supplier India',
  'aluminium scrap supplier Odisha',
  'aluminium powder coating services',
  'aluminium anodising services',
  'Ganjam Odisha aluminium',
] as const;

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function absoluteImageUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return absoluteUrl(path);
}

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  /** When set, bypasses the root title template. */
  absoluteTitle?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE.url,
  imageAlt,
  type = 'website',
  noIndex = false,
  absoluteTitle,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const displayTitle = absoluteTitle || `${title} | ${SITE_NAME}`;
  const ogImage = {
    url: image,
    width: 1200,
    height: 630,
    alt: imageAlt || displayTitle,
  };

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: [...PRIMARY_KEYWORDS, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type,
      locale: 'en_IN',
      url,
      siteName: SITE_NAME,
      title: displayTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description,
      images: [image],
    },
    category: companyData.industry,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Organization schema limited to verified company registry facts. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: LEGAL_NAME,
    legalName: LEGAL_NAME,
    alternateName: [SITE_NAME, 'Santoshi Metal'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: absoluteImageUrl('/images/logo-full.jpg'),
    },
    image: absoluteImageUrl('/images/logo-full.jpg'),
    identifier: {
      '@type': 'PropertyValue',
      name: 'CIN',
      value: companyData.cin,
    },
    foundingDate: '2026-09-28',
    founders: companyData.directors.map((d) => ({
      '@type': 'Person',
      name: d.name,
      jobTitle: d.designation,
      ...(d.image ? { image: absoluteImageUrl(d.image) } : {}),
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyData.registeredOffice.careOf}, ${companyData.registeredOffice.street}`,
      addressLocality: companyData.registeredOffice.locality,
      addressRegion: companyData.registeredOffice.state,
      postalCode: companyData.registeredOffice.pincode,
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    slogan: companyData.tagline,
    knowsAbout: companyData.coreActivities,
    description:
      'Santoshi Metal Industries Private Limited — aluminium supplier in Odisha offering ingots, profiles, scrap & supply, powder coating and anodising solutions.',
  };
}

/**
 * LocalBusiness without invented phone, hours, price, or geo coordinates.
 * Add those fields only after company verification.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    image: absoluteImageUrl('/images/logo-full.jpg'),
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyData.registeredOffice.careOf}, ${companyData.registeredOffice.street}`,
      addressLocality: 'Kabisuryanagar',
      addressRegion: 'Odisha',
      postalCode: companyData.registeredOffice.pincode,
      addressCountry: 'IN',
    },
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Aluminium supplier in Odisha — ingots, profiles, scrap supply, powder coating and anodising from Santoshi Metal Industries.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

export function serviceJsonLd(service: {
  title: string;
  shortDescription: string;
  fullDescription: string;
  slug: string;
  heroImage: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.shortDescription,
    url: absoluteUrl(`/capabilities/${service.slug}`),
    image: absoluteImageUrl(service.heroImage),
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

export function offerCatalogJsonLd(
  services: { title: string; slug: string; shortDescription: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${SITE_NAME} Capabilities`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        url: absoluteUrl(`/capabilities/${service.slug}`),
      },
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function siteNavigationJsonLd(links: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} Primary Navigation`,
    itemListElement: links.map((link, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: link.name,
      url: absoluteUrl(link.path),
    })),
  };
}
