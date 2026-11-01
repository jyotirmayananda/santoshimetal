'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export function AnodisingFeature() {
  const anodisedSlides = [
    {
      title: 'Architectural Satin Natural Anodising',
      description: 'Preserving the raw beauty of structural aluminium with uniform microscopic oxide pores that resist environmental pitting.',
      image: '/images/anodising.jpg',
      tag: 'Class 1 Architectural (20+ µm)',
    },
    {
      title: 'Electrolytic Bronze Anodised Facets',
      description: 'Deep metallic bronze formed by inorganic metallic salts locked into the honeycomb cell matrix, immune to UV fading.',
      image: '/images/silver-wave.jpg',
      tag: 'Electrolytic Coloration',
    },
    {
      title: 'Hardcoat Industrial Anodised Elements',
      description: 'Low-temperature chilled acid oxidation yielding sapphire-grade surface hardness for high-wear sliding machinery.',
      image: '/images/powder-coating.jpg',
      tag: 'Type III Hardcoat (50+ µm)',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % anodisedSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + anodisedSlides.length) % anodisedSlides.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
            PRECISION IN <br />
            <span className="text-brand-blue">EVERY FINISH.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Unlike superficial coatings that merely sit on the surface, aluminium anodising is an
            electrochemical conversion that transforms the metal itself into an ultra-hard,
            decorative, and non-peeling oxide shield.
          </p>
        </div>

        {/* Split Screen + Interactive Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive Carousel Display (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={anodisedSlides[activeSlide].image}
                    alt={anodisedSlides[activeSlide].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                  {/* Caption on Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="font-heading font-bold text-xl sm:text-2xl mb-1">
                      {anodisedSlides[activeSlide].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                      {anodisedSlides[activeSlide].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Navigation Arrows */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white transition-colors shadow-subtle"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white transition-colors shadow-subtle"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {anodisedSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === idx ? 'w-8 bg-brand-blue' : 'w-2 bg-white/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Highlights & Finish Preview Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-brand-ice border border-brand-border/70 shadow-subtle">
                <div className="font-heading font-bold text-brand-navy flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Integrated Metal Oxide Matrix</span>
                </div>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  Grown electrochemically from the substrate itself. Zero flaking, zero chipping, and
                  permanent adherence that survives harsh coastal and urban atmospheres.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-ice border border-brand-border/70 shadow-subtle">
                <div className="font-heading font-bold text-brand-navy flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  <span>Natural Specular Metallic Character</span>
                </div>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  Reflects the authentic grain and shimmer of aluminium. Perfect for luxury architectural
                  mullions, curtain wall framing, and premium interior trims.
                </p>
              </div>
            </div>

            {/* Finish Tone Selector Indicators */}
            <div className="p-5 rounded-2xl bg-white border border-brand-border space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                Illustrative Anodic Spectrum:
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="w-4 h-4 rounded-full bg-[#DCE4EC] mx-auto mb-1 border border-slate-300" />
                  <span className="font-semibold text-brand-navy block">Natural Silver</span>
                  <span className="text-[10px] text-brand-text-secondary">Clear Anodised</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="w-4 h-4 rounded-full bg-[#C5B69E] mx-auto mb-1 border border-slate-300" />
                  <span className="font-semibold text-brand-navy block">Champagne</span>
                  <span className="text-[10px] text-brand-text-secondary">Electrolytic Gold</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                  <div className="w-4 h-4 rounded-full bg-[#5A4638] mx-auto mb-1 border border-slate-300" />
                  <span className="font-semibold text-brand-navy block">Bronze</span>
                  <span className="text-[10px] text-brand-text-secondary">Deep Architectural</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/capabilities/anodising"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle"
              >
                <span>Explore Anodising Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

