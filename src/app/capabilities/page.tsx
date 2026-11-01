import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { Sparkles, Layers, Boxes, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Capabilities | Santoshi Metal Industries Private Limited',
  description:
    'Comprehensive aluminium processing capabilities: Powder Coating, Anodising, Ingot Manufacturing, and Industrial Sales & Supply in Odisha, India.',
};

export default function CapabilitiesPage() {
  const capabilityIcons: Record<string, React.ReactNode> = {
    'powder-coating': <Sparkles className="w-6 h-6 text-brand-blue" />,
    'anodising': <Layers className="w-6 h-6 text-brand-navy" />,
    'aluminium-ingots': <Boxes className="w-6 h-6 text-brand-blue" />,
    'aluminium-supply': <Truck className="w-6 h-6 text-brand-navy" />,
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Hero Header */}
      <section className="bg-brand-ice py-16 sm:py-24 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.08]">
              ENGINEERED CAPABILITY. <br />
              <span className="text-brand-blue">EXCEPTIONAL SURFACES.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-secondary leading-relaxed">
              Explore our four specialized industrial activities covering the complete spectrum of
              aluminium finishing, remelt ingot manufacturing, and profile distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Four Core Capabilities List */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-brand-navy shadow-subtle flex items-center gap-2">
                      {capabilityIcons[service.id]}
                      <span>Capability 0{index + 1}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                        {service.headline}
                      </div>
                      <div className="font-heading font-bold text-2xl text-white">
                        {service.title}
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
                    {service.headline}
                  </span>

                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-brand-text leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                      Key Highlights:
                    </div>
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-brand-text">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/capabilities/${service.slug}`}
                      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle"
                    >
                      <span>Explore Technical Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-ice text-brand-navy text-sm font-semibold border border-brand-border hover:bg-slate-100 transition-colors"
                    >
                      <span>Request Quote</span>
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

