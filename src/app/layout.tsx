import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { JsonLd } from '@/components/seo/JsonLd';
import { companyData } from '@/data/company';
import {
  DEFAULT_OG_IMAGE,
  LEGAL_NAME,
  PRIMARY_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Aluminium Ingot, Profile, Coating & Anodising`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Santoshi Metal Industries Private Limited (CIN: U24202OD2026PTC055660) specializes in aluminium ingot, aluminium profile, aluminium scrap & supply, powder coating, and anodising in Ganjam, Odisha, India.',
  keywords: [...PRIMARY_KEYWORDS],
  applicationName: SITE_NAME,
  authors: [{ name: LEGAL_NAME, url: SITE_URL }],
  creator: LEGAL_NAME,
  publisher: LEGAL_NAME,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      en: SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Engineering Aluminium. Shaping the Future.`,
    description:
      'Aluminium ingot, profile, scrap & supply, powder coating, and anodising from Kabisuryanagar, Ganjam, Odisha.',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Engineering Aluminium`,
    description: companyData.tagline,
    images: [DEFAULT_OG_IMAGE.url],
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  category: companyData.industry,
  classification: 'Aluminium Manufacturing & Surface Processing',
  other: {
    'geo.region': 'IN-OD',
    'geo.placename': 'Kabisuryanagar, Ganjam, Odisha',
    'geo.position': '19.6012;84.7966',
    ICBM: '19.6012, 84.7966',
    'business:contact_data:locality': 'Kabisuryanagar',
    'business:contact_data:region': 'Odisha',
    'business:contact_data:postal_code': companyData.registeredOffice.pincode,
    'business:contact_data:country_name': 'India',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#123b68' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className="bg-white text-brand-text antialiased selection:bg-brand-blue selection:text-white">
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()]} />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-navy focus:text-white focus:rounded-lg"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
