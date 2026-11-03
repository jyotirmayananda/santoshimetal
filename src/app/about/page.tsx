import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { companyData } from '@/data/company';
import {
  ShieldCheck,
  Building2,
  Users,
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  Layers,
} from 'lucide-react';
import { CtaBanner } from '@/components/sections/CtaBanner';

import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { pageSeoCopy } from '@/data/seo-pages';
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: pageSeoCopy.about.title,
  absoluteTitle: pageSeoCopy.about.absoluteTitle,
  description: pageSeoCopy.about.description,
  path: '/about',
  keywords: pageSeoCopy.about.keywords,
  image: '/images/architectural-facade.jpg',
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      {/* 1. Hero Photographic Header */}
      <section className="relative overflow-hidden bg-brand-ice py-16 sm:py-24 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'About' },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.08]">
              ENGINEERING ALUMINIUM. <br />
              <span className="text-brand-blue">BUILT ON PRECISION.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-secondary leading-relaxed">
              Santoshi Metal Industries Private Limited is a modern industrial enterprise dedicated
              to precision surface engineering, remelt ingot manufacturing, and dependable
              aluminium supply solutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Editorial Story & Vision */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Industrial Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[440px] sm:h-[520px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border group">
                <Image
                  src="/images/architectural-facade.jpg"
                  alt="Modern architectural aluminium facade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                    Architectural Excellence
                  </div>
                  <div className="font-heading font-bold text-xl">
                    Precision Coated Façade Profiles
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                Meeting Modern Industrial Demands with Uncompromising Quality
              </h2>
              <p className="text-base sm:text-lg text-brand-text leading-relaxed">
                Incorporated on <strong>28 September 2026</strong> under the Companies Act as a
                Private Limited Company, Santoshi Metal Industries was founded to bring modern
                manufacturing consistency, electrostatic powder coating precision, and pure foundry
                feedstock to the eastern industrial corridor of India.
              </p>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                Operating from Kabisuryanagar in the Ganjam district of Odisha, our focus is geared
                toward bridging the gap between raw metallurgical refining and tight-tolerance
                architectural fenestration. By aligning chemical surface passivation, electrolytic
                anodising, and clean melt casting under one forward-looking brand, we empower fabricators,
                builders, and foundries with reliable materials.
              </p>

              {/* Core Corporate Information Box */}
              <div className="p-5 rounded-2xl bg-brand-ice border border-brand-border space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="text-brand-text-secondary">Corporate Identification (CIN):</span>
                  <span className="font-bold text-brand-navy">{companyData.cin}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200">
                  <span className="text-brand-text-secondary">Incorporation Date:</span>
                  <span className="font-bold text-brand-navy">{companyData.incorporationDate}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-brand-text-secondary">Industry Classification:</span>
                  <span className="font-bold text-brand-navy">{companyData.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Brand Identity & Monogram Section */}
      <section className="py-16 sm:py-20 bg-brand-ice/60 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Full 3D Corporate Logo */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 w-full flex items-center justify-center p-4 bg-brand-ice/40 rounded-2xl border border-brand-border/60">
              <div className="relative w-full h-full max-h-72">
                <Image
                  src="/images/logo-full.jpg"
                  alt="Official Santoshi Metal Industries 3D Corporate Logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </div>

            {/* Right: Brand Mark Symbolism */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
                The Santoshi 3D Metallic Emblem
              </h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                The Santoshi Metal Industries monogram unites brushed aluminium fluidity with
                high-precision metallurgical strength. The dynamic sweeping <strong>&apos;S&apos;</strong>{' '}
                represents smooth continuous profile extrusion, while the angular architectural{' '}
                <strong>&apos;M&apos;</strong> and <strong>&apos;I&apos;</strong> facets symbolize dimensional accuracy and
                electrolytic surface hardening.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-brand-ice border border-brand-border/60">
                  <span className="font-bold text-brand-navy block mb-0.5">Brushed Aluminium Curve</span>
                  <span className="text-brand-text-secondary">Signature aerodynamic flowing metal finish</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-ice border border-brand-border/60">
                  <span className="font-bold text-brand-copper block mb-0.5">Molten Core Illumination</span>
                  <span className="text-brand-text-secondary">Foundry furnace heat and ingot casting energy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Core Values */}
      <section className="py-20 sm:py-28 bg-brand-ice border-t border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight mt-1">
              MISSION, VISION & VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-brand-border shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy">Our Mission</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                To deliver superior aluminium surface finishes, high-purity foundry ingots, and
                dependable metal products that elevate architectural aesthetics, structural
                durability, and manufacturing productivity.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-brand-border shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-light flex items-center justify-center text-brand-navy">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy">Our Vision</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                To establish Santoshi Metal Industries as an esteemed industrial reference in the
                aluminium sector—known for precision surface chemistry, transparent supply chains,
                and metallurgical integrity.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-8 rounded-3xl bg-white border border-brand-border shadow-subtle space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy">Core Values</h3>
              <ul className="text-sm text-brand-text-secondary space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Precision in Every Surface</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Metallurgical Integrity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Customer Transparency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Sustainable Processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Corporate Governance */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight mt-1">
              BOARD OF DIRECTORS
            </h2>
            <p className="mt-3 text-base text-brand-text-secondary">
              The executive governance and strategic leadership of Santoshi Metal Industries Private
              Limited is led by its incorporating directors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-4xl">
            {companyData.directors.map((director) => (
              <div
                key={director.name}
                className="group rounded-3xl bg-white border border-brand-border shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Director Portrait — 3:4 frame so faces are not cropped/softened */}
                <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden">
                  {director.image ? (
                    <Image
                      src={director.image}
                      alt={`${director.name} - ${director.designation}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 450px"
                      quality={90}
                      className="object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brand-ice text-brand-navy font-heading font-bold text-3xl">
                      {director.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Director Information */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy tracking-tight">
                      {director.name}
                    </h3>
                    <div className="text-xs font-semibold text-brand-blue uppercase tracking-widest mt-1">
                      {director.designation}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mt-3">
                      Executive Director of Santoshi Metal Industries Private Limited, guiding
                      corporate governance, manufacturing operations, and industrial quality standards.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-brand-text-secondary">
                    <span className="font-medium text-brand-navy">Santoshi Metal Industries</span>
                    <span className="text-[11px] font-mono text-slate-400">Incorporating Board</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Statutory Registered Office Information */}
      <section className="py-16 bg-white border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-ice border border-brand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
                <MapPin className="w-4 h-4" />
                <span>Statutory Registered Office</span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy">
                {companyData.legalName}
              </h3>
              <address className="not-italic text-sm text-brand-text-secondary max-w-xl">
                {companyData.registeredOffice.fullAddress}
              </address>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle shrink-0"
            >
              <span>Contact Headquarters</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

