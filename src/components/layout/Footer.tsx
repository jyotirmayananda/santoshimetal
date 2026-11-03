'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { companyData } from '@/data/company';
import { MapPin, Building2, UserCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-ice border-t border-brand-border/80 pt-16 pb-12 text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-border">
          <Reveal className="lg:col-span-4 space-y-4" direction="up">
            <BrandLogo size="lg" />
            <p className="text-sm text-brand-text-secondary leading-relaxed pt-1">
              Santoshi Metal Industries Private Limited is a specialized aluminium manufacturing,
              surface processing, and industrial supply enterprise delivering precision, structural
              strength, and architectural elegance.
            </p>
            <div className="space-y-1.5 pt-2 text-xs text-brand-text-secondary font-mono">
              <div>
                <span className="font-semibold text-brand-text">CIN:</span> {companyData.cin}
              </div>
              <div>
                <span className="font-semibold text-brand-text">Incorporation:</span>{' '}
                {companyData.incorporationDate}
              </div>
              <div>
                <span className="font-semibold text-brand-text">Category:</span>{' '}
                {companyData.companyType}
              </div>
            </div>
          </Reveal>

          <Stagger className="lg:col-span-3 space-y-3" fast>
            <StaggerItem>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-navy">
                Core Capabilities
              </h3>
            </StaggerItem>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/capabilities/aluminium-ingots', label: 'Aluminium Ingot' },
                { href: '/capabilities/aluminium-profile', label: 'Aluminium Profile' },
                { href: '/capabilities/aluminium-scrap-supply', label: 'Aluminium Scrap & Supply' },
                { href: '/capabilities/powder-coating', label: 'Aluminium Powder Coating' },
                { href: '/capabilities/anodising', label: 'Aluminium Anodising' },
              ].map((item) => (
                <StaggerItem key={item.href}>
                  <li>
                    <Link
                      href={item.href}
                      className="text-brand-text-secondary hover:text-brand-blue transition-colors flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </StaggerItem>
              ))}
              <StaggerItem>
                <li className="pt-2">
                  <Link
                    href="/industries"
                    className="text-xs font-semibold text-brand-blue hover:underline"
                  >
                    View Industries We Serve →
                  </Link>
                </li>
              </StaggerItem>
            </ul>
          </Stagger>

          {/* Col 3: Company Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-navy">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-brand-text-secondary hover:text-brand-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-brand-text-secondary hover:text-brand-blue transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-brand-text-secondary hover:text-brand-blue transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-brand-text-secondary hover:text-brand-blue transition-colors"
                >
                  Surface Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-text-secondary hover:text-brand-blue transition-colors"
                >
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Registered Office & Governance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-navy flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-blue" />
              <span>Registered Office</span>
            </h3>
            <div className="p-4 rounded-xl bg-white border border-brand-border/70 text-xs text-brand-text-secondary space-y-2 shadow-subtle">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-brand-text">
                  {companyData.registeredOffice.fullAddress}
                </address>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-brand-navy block mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-brand-blue" />
                  Board of Directors:
                </span>
                <ul className="space-y-1.5 text-brand-text">
                  {companyData.directors.map((director) => (
                    <li key={director.name} className="flex items-center gap-2">
                      {director.image ? (
                        <div className="relative w-5 h-5 rounded-full overflow-hidden border border-slate-300 shrink-0">
                          <Image
                            src={director.image}
                            alt={director.name}
                            fill
                            sizes="20px"
                            className="object-cover object-top"
                          />
                        </div>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      )}
                      <span className="font-medium">{director.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-text-secondary gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>
              © {currentYear} {companyData.legalName}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>Industry: {companyData.industry}</span>
            <span>•</span>
            <span className="text-brand-navy font-semibold">{companyData.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

