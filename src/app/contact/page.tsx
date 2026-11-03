import { Metadata } from 'next';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { BrandLogo } from '@/components/layout/BrandLogo';
import { companyData } from '@/data/company';
import {
  MapPin,
  Building2,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact & Request a Quote',
  description:
    'Request a quotation for aluminium ingot, profile, scrap & supply, powder coating, or anodising. Contact Santoshi Metal Industries in Kabisuryanagar, Ganjam, Odisha.',
  path: '/contact',
  keywords: [
    'aluminium quote Odisha',
    'contact Santoshi Metal Industries',
    'powder coating enquiry',
    'aluminium ingot quotation',
  ],
  image: '/images/logo-full.jpg',
});

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Santoshi Metal Industries',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: companyData.legalName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${companyData.registeredOffice.careOf}, ${companyData.registeredOffice.street}`,
        addressLocality: companyData.registeredOffice.locality,
        addressRegion: companyData.registeredOffice.state,
        postalCode: companyData.registeredOffice.pincode,
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
          contactSchema,
        ]}
      />
      {/* Header */}
      <section className="bg-brand-ice py-16 sm:py-24 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.08]">
              LET&apos;S START <br />
              <span className="text-brand-blue">SOMETHING GREAT.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-secondary leading-relaxed">
              Connect directly with our engineering and supply desk to discuss your architectural
              powder coating, electrolytic anodising, foundry ingot, or profile supply requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form + Registered Office Details */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Right: Statutory Registered Office & Governance (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Registered Office Card */}
              <div className="p-8 rounded-3xl bg-brand-ice border border-brand-border shadow-subtle space-y-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-xl bg-white border border-brand-border/80 p-1 flex items-center justify-center shadow-subtle shrink-0">
                    <BrandLogo variant="mark-only" size="sm" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue block">
                      Statutory Registered Office
                    </span>
                    <h3 className="font-heading font-bold text-lg text-brand-navy">
                      Santoshi Metal Industries Pvt. Ltd.
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-brand-text border-t border-slate-200 pt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                    <address className="not-italic leading-relaxed text-brand-text">
                      {companyData.registeredOffice.fullAddress}
                    </address>
                  </div>
                </div>

                {/* Directors */}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-brand-blue" />
                    Board of Directors
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-text">
                    {companyData.directors.map((d) => (
                      <li key={d.name} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                        <span className="font-semibold text-brand-navy">{d.name}</span>
                        <span className="text-brand-text-secondary">({d.designation})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corporate Identifiers */}
                <div className="pt-4 border-t border-slate-200 text-xs font-mono text-brand-text-secondary space-y-1.5">
                  <div>
                    <span className="font-semibold text-brand-navy">CIN:</span> {companyData.cin}
                  </div>
                  <div>
                    <span className="font-semibold text-brand-navy">Incorporation:</span>{' '}
                    {companyData.incorporationDate}
                  </div>
                  <div>
                    <span className="font-semibold text-brand-navy">Status:</span>{' '}
                    {companyData.companyType}
                  </div>
                </div>
              </div>

              {/* Response Commitment Box */}
              <div className="p-6 rounded-3xl bg-white border border-brand-border/80 shadow-subtle space-y-3">
                <div className="font-heading font-bold text-base text-brand-navy flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  <span>Our Response Standard</span>
                </div>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  All technical inquiries undergo direct evaluation by our metallurgy and coating
                  advisors. Commercial quotes and dimensional feasibility feedback are provided
                  within standard industrial turnaround times.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-navy">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                  <span>Direct Technical Review • No Automated Estimations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

