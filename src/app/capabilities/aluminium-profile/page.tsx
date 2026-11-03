import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { RelatedCapabilities } from '@/components/seo/RelatedCapabilities';
import {
  buildServiceMetadata,
  buildServiceSchemas,
  serviceBreadcrumbItems,
} from '@/lib/service-seo';

export const metadata: Metadata = buildServiceMetadata('aluminium-profile');

export default function AluminiumProfilePage() {
  const service = servicesData.find((s) => s.id === 'aluminium-profile')!;

  return (
    <div className="pt-28 pb-20 bg-white">
      <JsonLd data={buildServiceSchemas('aluminium-profile')} />
      <section className="relative overflow-hidden bg-brand-ice py-16 sm:py-24 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={serviceBreadcrumbItems('aluminium-profile')} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.08]">
                ALUMINIUM <br />
                <span className="text-brand-blue">PROFILE.</span>
              </h1>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                Precision extruded architectural and industrial profiles—standard or custom—cut,
                bundled, and delivered ready for fabrication or surface finish.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle"
                >
                  <span>Request Profile Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-elevated border border-white">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
                Extruded Sections Built for Fabrication
              </h2>
              <p className="text-base text-brand-text leading-relaxed">
                {service.fullDescription}
              </p>
              <div className="space-y-3 pt-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-brand-text">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border">
                <Image
                  src="/images/aluminium-supply.jpg"
                  alt="Stacked aluminium extrusions and profiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                    Extruded Stock
                  </div>
                  <div className="font-heading font-bold text-xl">
                    Architectural &amp; Industrial Profile Supply
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-ice border-t border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight mt-1">
              WHERE OUR PROFILES ARE EMPLOYED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.applications.map((app, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue-light text-brand-navy flex items-center justify-center font-heading font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-base text-brand-navy">
                  {app.title}
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight mt-1">
              ORDER &amp; FULFILLMENT CYCLE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-ice border border-brand-border/70 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-brand-blue">
                  STEP 0{idx + 1}
                </span>
                <h3 className="font-heading font-bold text-base text-brand-navy">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedCapabilities currentSlug="aluminium-profile" />
      <CtaBanner />
    </div>
  );
}
