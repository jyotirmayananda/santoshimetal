import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { companyData } from '@/data/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://santoshimetal.com'),
  title: {
    default: `${companyData.legalName} | Engineering Aluminium. Shaping the Future.`,
    template: `%s | ${companyData.legalName}`,
  },
  description:
    'Santoshi Metal Industries Private Limited (CIN: U24202OD2026PTC055660) specializes in aluminium powder coating, aluminium anodising, aluminium remelt ingot manufacturing, and industrial aluminium supply in Odisha, India.',
  keywords: [
    'Santoshi Metal Industries',
    'Aluminium Powder Coating',
    'Aluminium Anodising',
    'Aluminium Ingots',
    'Aluminium Supply',
    'Odisha Aluminium Manufacturing',
    'Ganjam Metal Processing',
    'Bikrant Kumar Sahu',
    'Sri Kumuda Chandra Sahu',
    'Kumud Chandra Sahu',
    'Architectural Aluminium Profiles',
  ],
  authors: [{ name: companyData.legalName }],
  creator: companyData.legalName,
  publisher: companyData.legalName,
  robots: {
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
    type: 'website',
    locale: 'en_IN',
    url: 'https://santoshimetal.com',
    siteName: companyData.legalName,
    title: `${companyData.legalName} | Aluminium Engineering & Manufacturing`,
    description: companyData.tagline + ' — ' + companyData.secondaryTagline,
    images: [
      {
        url: '/images/silver-wave.jpg',
        width: 1200,
        height: 630,
        alt: 'Santoshi Metal Industries Polished Silver Aluminium Wave',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: companyData.legalName,
    description: companyData.tagline,
    images: ['/images/silver-wave.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: companyData.legalName,
    legalName: companyData.legalName,
    alternateName: companyData.brandName,
    identifier: companyData.cin,
    logo: 'https://santoshimetal.com/images/logo-full.jpg',
    image: 'https://santoshimetal.com/images/logo-full.jpg',
    foundingDate: '2026-09-28',
    founders: companyData.directors.map((d) => ({
      '@type': 'Person',
      name: d.name,
      jobTitle: d.designation,
    })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyData.registeredOffice.careOf}, ${companyData.registeredOffice.street}`,
      addressLocality: companyData.registeredOffice.locality,
      addressRegion: companyData.registeredOffice.state,
      postalCode: companyData.registeredOffice.pincode,
      addressCountry: 'IN',
    },
    slogan: companyData.tagline,
    knowsAbout: companyData.coreActivities,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-brand-text antialiased selection:bg-brand-blue selection:text-white">
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
