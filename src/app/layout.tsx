import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: {
    template: "%s | Santoshi Metal Industries",
    default: "Santoshi Metal Industries Private Limited | Engineering Aluminium. Elevating Possibilities.",
  },
  description:
    "Santoshi Metal Industries Private Limited is a modern industrial enterprise specializing in Aluminium Powder Coating, Aluminium Anodising, Ingot Manufacturing & Supply, and Aluminium Sales across India.",
  keywords: [
    "Aluminium Powder Coating",
    "Aluminium Anodising",
    "Aluminium Ingot Supplier",
    "Aluminium Products",
    "Aluminium Manufacturing Odisha",
    "Aluminium Processing India",
    "Aluminium Sales and Supply",
    "Santoshi Metal Industries",
  ],
  authors: [{ name: "Santoshi Metal Industries Private Limited" }],
  creator: "Santoshi Metal Industries Private Limited",
  publisher: "Santoshi Metal Industries Private Limited",
  metadataBase: new URL("https://santoshimetal.com"),
  openGraph: {
    title: "Santoshi Metal Industries Private Limited",
    description:
      "Engineering Aluminium. Elevating Possibilities. Premium industrial aluminium powder coating, anodising, ingots, and metal supply.",
    url: "https://santoshimetal.com",
    siteName: "Santoshi Metal Industries",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santoshi Metal Industries Private Limited",
    description:
      "Precision-driven aluminium solutions across powder coating, anodising, ingots, and industrial metal supply.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    legalName: companyInfo.name,
    url: "https://santoshimetal.com",
    description: companyInfo.shortDescription,
    identifier: companyInfo.cin,
    foundingDate: "2026-09-28",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.registeredOffice.street,
      addressLocality: companyInfo.registeredOffice.city,
      addressRegion: companyInfo.registeredOffice.state,
      postalCode: companyInfo.registeredOffice.pincode,
      addressCountry: "IN",
    },
    founders: companyInfo.directors.map((d) => ({
      "@type": "Person",
      name: d.name,
      jobTitle: d.role,
      image: d.image ? `https://santoshimetal.com${d.image}` : undefined,
    })),
    knowsAbout: companyInfo.activities,
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#101820] text-[#F8FAFC] antialiased selection:bg-[#C6924D] selection:text-[#101820]">
        <Preloader />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
