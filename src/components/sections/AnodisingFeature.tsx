'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { easeOutExpo, viewportOnce } from '@/lib/motion';

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
        <Reveal className="max-w-3xl mb-16" direction="blur">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
            PRECISION IN <br />
            <span className="text-brand-blue">EVERY FINISH.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Unlike superficial coatings that merely sit on the surface, aluminium anodising is an
            electrochemical conversion that transforms the metal itself into an ultra-hard,
            decorative, and non-peeling oxide shield.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: easeOutExpo }}
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

              <div className="absolute top-6 right-6 flex items-center gap-2">
                <motion.button
                  onClick={prevSlide}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white transition-colors shadow-subtle"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white transition-colors shadow-subtle"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {anodisedSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? 'w-8 bg-brand-blue' : 'w-2 bg-white/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
          >
            <Stagger className="space-y-4" fast>
              <StaggerItem>
                <motion.div
                  className="p-4 rounded-2xl bg-brand-ice border border-brand-border/70 shadow-subtle"
                  whileHover={{ y: -3, borderColor: 'rgba(40,120,200,0.35)' }}
                >
                  <div className="font-heading font-bold text-brand-navy flex items-center gap-2 mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    <span>Integrated Metal Oxide Matrix</span>
                  </div>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">
                    Grown electrochemically from the substrate itself. Zero flaking, zero chipping, and
                    permanent adherence that survives harsh coastal and urban atmospheres.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="p-4 rounded-2xl bg-brand-ice border border-brand-border/70 shadow-subtle"
                  whileHover={{ y: -3, borderColor: 'rgba(40,120,200,0.35)' }}
                >
                  <div className="font-heading font-bold text-brand-navy flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-brand-blue" />
                    <span>Natural Specular Metallic Character</span>
                  </div>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">
                    Reflects the authentic grain and shimmer of aluminium. Perfect for luxury architectural
                    mullions, curtain wall framing, and premium interior trims.
                  </p>
                </motion.div>
              </StaggerItem>
            </Stagger>

            <motion.div
              className="p-5 rounded-2xl bg-white border border-brand-border space-y-3"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block">
                Illustrative Anodic Spectrum:
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {[
                  { color: '#DCE4EC', name: 'Natural Silver', sub: 'Clear Anodised' },
                  { color: '#C5B69E', name: 'Champagne', sub: 'Electrolytic Gold' },
                  { color: '#5A4638', name: 'Bronze', sub: 'Deep Architectural' },
                ].map((tone) => (
                  <motion.div
                    key={tone.name}
                    className="p-2.5 rounded-xl bg-slate-100 border border-slate-200"
                    whileHover={{ y: -4, backgroundColor: '#ffffff' }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full mx-auto mb-1 border border-slate-300"
                      style={{ backgroundColor: tone.color }}
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span className="font-semibold text-brand-navy block">{tone.name}</span>
                    <span className="text-[10px] text-brand-text-secondary">{tone.sub}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 4 }}>
              <Link
                href="/capabilities/anodising"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle"
              >
                <span>Explore Anodising Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

