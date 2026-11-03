import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { industriesData } from '@/data/industries';
import {
  Building,
  Landmark,
  Factory,
  Car,
  Zap,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { CtaBanner } from '@/components/sections/CtaBanner';

import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Industries We Serve',
  description:
    'Aluminium solutions for architecture, infrastructure, automotive, electrical engineering, and industrial fabrication from Santoshi Metal Industries, Odisha.',
  path: '/industries',
  keywords: [
    'architectural aluminium India',
    'automotive aluminium castings',
    'infrastructure aluminium profiles',
  ],
  image: '/images/architectural-facade.jpg',
});

export default function IndustriesPage() {
  const icons: Record<string, React.ReactNode> = {
    'architecture-construction': <Building className="w-6 h-6 text-brand-blue" />,
    'infrastructure': <Landmark className="w-6 h-6 text-brand-blue" />,
    'industrial-manufacturing': <Factory className="w-6 h-6 text-brand-blue" />,
    'automotive-components': <Car className="w-6 h-6 text-brand-blue" />,
    'electrical-engineering': <Zap className="w-6 h-6 text-brand-blue" />,
    'fabrication': <Wrench className="w-6 h-6 text-brand-blue" />,
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ])}
      />
      {/* Hero Header */}
      <section className="bg-brand-ice py-16 sm:py-24 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.08]">
              ALUMINIUM FOR <br />
              <span className="text-brand-blue">EVERY AMBITION.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-secondary leading-relaxed">
              From contemporary architectural envelopes to precision foundry alloys, discover how
              Santoshi Metal Industries supports vital manufacturing sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Industry Cards */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industriesData.map((industry, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={industry.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border group">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-brand-navy shadow-subtle flex items-center gap-2">
                      {icons[industry.id]}
                      <span>Sector 0{idx + 1}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                        {industry.tagline}
                      </div>
                      <div className="font-heading font-bold text-2xl text-white">
                        {industry.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                    {industry.tagline}
                  </span>

                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                    {industry.name}
                  </h2>

                  <p className="text-base text-brand-text leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                      Target Component Applications:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {industry.applications.map((app, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2 text-xs text-brand-text p-2.5 rounded-lg bg-brand-ice border border-brand-border/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle"
                    >
                      <span>Inquire for {industry.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

