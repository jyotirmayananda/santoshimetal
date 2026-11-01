'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Eye } from 'lucide-react';

export function PowderCoatingFeature() {
  const showcaseFinishes = [
    {
      title: 'Architectural Pure White Glaze',
      tag: 'Polyester High Durability',
      image: '/images/architectural-facade.jpg',
      specs: 'UV Resistant • 60-80 Micron Film',
    },
    {
      title: 'Matte Industrial Graphite',
      tag: 'Thermoset Powder',
      image: '/images/powder-coating.jpg',
      specs: 'Impact Shield • Anti-Corrosive',
    },
    {
      title: 'Polished Metallic Silver Sheen',
      tag: 'Bonded Metallic Powder',
      image: '/images/silver-wave.jpg',
      specs: 'Aerodynamic Sheen • Zero Flaking',
    },
    {
      title: 'Textured Bronze Façade Coating',
      tag: 'Superdurable Exterior Grade',
      image: '/images/aluminium-supply.jpg',
      specs: 'Weatherproof • Architectural AAMA Class',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-brand-ice relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Photographic Hero Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-white mb-16">
          <div className="relative h-[420px] sm:h-[500px] w-full">
            <Image
              src="/images/powder-coating.jpg"
              alt="Industrial electrostatic powder coating facility"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            {/* Soft gradient light-mode wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-transparent" />

            {/* Overlaid Headline & Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 max-w-2xl text-white">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                FINISHES THAT <br />
                <span className="text-brand-silver">INSPIRE.</span>
              </h2>

              <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
                Electrostatic application of architectural polyester and fluoropolymer powder systems,
                creating resilient, flawless surface protection for building envelopes and industrial
                profiles.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/capabilities/powder-coating"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-sm hover:bg-brand-ice transition-colors shadow-subtle"
                >
                  <span>Explore Powder Coating Technicals</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Finish Showcase Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy">
                Architectural Powder Coating Gallery
              </h3>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-bold uppercase tracking-wider text-brand-navy hover:text-brand-blue flex items-center gap-1.5"
            >
              <span>View Full Surface Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseFinishes.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-border/80 shadow-subtle hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-brand-navy shadow-subtle">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="font-heading font-bold text-base text-brand-navy group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-text-secondary font-mono">{item.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

