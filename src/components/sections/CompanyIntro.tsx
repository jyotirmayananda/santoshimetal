'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export function CompanyIntro() {
  return (
    <section id="who-we-are" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background architectural lines */}
      <div className="absolute right-0 top-1/4 w-1/3 h-96 bg-brand-ice -z-10 rounded-l-[80px] opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
              CRAFTING EXCELLENCE <br />
              <span className="text-brand-blue">THROUGH ALUMINIUM.</span>
            </h2>

            <p className="text-lg sm:text-xl text-brand-text leading-relaxed font-normal">
              Incorporated with a forward-looking vision,{' '}
              <strong className="font-semibold text-brand-navy">
                Santoshi Metal Industries Private Limited
              </strong>{' '}
              is establishing modern standards in aluminium surface enhancement, remelt ingot
              manufacturing, and high-performance industrial supply.
            </p>

            <p className="text-brand-text-secondary leading-relaxed">
              From our registered headquarters in Ganjam, Odisha, we are engineered to serve the
              evolving demands of contemporary architecture, high-precision manufacturing,
              die-casting foundries, and structural engineering. Guided by directors Bikrant Kumar
              Sahu and Kumud Chandra Sahu, our commitment is anchored in uncompromising dimensional
              precision, durable finishes, and transparent industrial collaboration.
            </p>

            {/* Strategic Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-brand-ice border border-brand-border/60">
                <div className="font-heading font-bold text-base text-brand-navy flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Precision Finishes</span>
                </div>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  Specialized electrostatic powder coating and electrochemical anodising with micron-level consistency.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-ice border border-brand-border/60">
                <div className="font-heading font-bold text-base text-brand-navy flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Metallurgical Foundation</span>
                </div>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  Pure remelt aluminium ingots formulated for consistent fluidity and clean foundry castings.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold shadow-subtle hover:bg-brand-blue transition-all duration-300"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Two Overlapping Large Industrial Images (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Main Image: Architectural Facade */}
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-elevated border border-brand-border group">
                <Image
                  src="/images/architectural-facade.jpg"
                  alt="Architectural aluminium facade engineering"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                    Architectural Application
                  </div>
                  <div className="text-sm font-semibold">Curved Exterior Aluminium Cladding</div>
                </div>
              </div>

              {/* Overlapping Secondary Image: Liquid Silver Aluminium Curve */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-64 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-metallic border-2 border-white bg-white group">
                <Image
                  src="/images/silver-wave.jpg"
                  alt="Polished silver aluminium flowing surface"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-white text-[11px] font-bold">
                  Precision Metal Surface
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-blue/40 rounded-tr-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

