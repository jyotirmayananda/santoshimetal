'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { easeOutExpo, viewportOnce } from '@/lib/motion';

export function CompanyIntro() {
  return (
    <section id="who-we-are" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-1/3 h-96 bg-brand-ice -z-10 rounded-l-[80px] opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="blur">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
                CRAFTING EXCELLENCE <br />
                <span className="text-brand-blue">THROUGH ALUMINIUM.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg sm:text-xl text-brand-text leading-relaxed font-normal">
                Incorporated with a forward-looking vision,{' '}
                <strong className="font-semibold text-brand-navy">
                  Santoshi Metal Industries Private Limited
                </strong>{' '}
                is establishing modern standards across Aluminium Ingot, Aluminium Profile, Scrap
                &amp; Supply, Powder Coating, and Anodising.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-brand-text-secondary leading-relaxed">
                From our registered headquarters in Ganjam, Odisha, we are engineered to serve the
                evolving demands of contemporary architecture, high-precision manufacturing,
                die-casting foundries, and structural engineering. Guided by directors Sri Kumuda
                Chandra Sahu and Bikrant Kumar Sahu, our commitment is anchored in uncompromising dimensional
                precision, durable finishes, and transparent industrial collaboration.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <StaggerItem>
                <motion.div
                  className="p-4 rounded-xl bg-brand-ice border border-brand-border/60 h-full"
                  whileHover={{ y: -4, borderColor: 'rgba(40,120,200,0.35)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-heading font-bold text-base text-brand-navy flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Metal &amp; Feedstock</span>
                  </div>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">
                    Aluminium ingot, precision profiles, and graded scrap &amp; supply for foundries and fabricators.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="p-4 rounded-xl bg-brand-ice border border-brand-border/60 h-full"
                  whileHover={{ y: -4, borderColor: 'rgba(40,120,200,0.35)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-heading font-bold text-base text-brand-navy flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Precision Finishes</span>
                  </div>
                  <p className="text-xs text-brand-text-secondary leading-relaxed">
                    Specialized electrostatic powder coating and electrochemical anodising with micron-level consistency.
                  </p>
                </motion.div>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.25} className="pt-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold shadow-subtle hover:bg-brand-blue transition-all duration-300"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <motion.div
                className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-elevated border border-brand-border group"
                initial={{ opacity: 0, y: 40, rotate: -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, ease: easeOutExpo }}
                whileHover={{ scale: 1.01 }}
              >
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
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-64 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-metallic border-2 border-white bg-white group animate-float"
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: 0.25, ease: easeOutExpo }}
                whileHover={{ scale: 1.04, rotate: -1 }}
              >
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
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-blue/40 rounded-tr-3xl pointer-events-none"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
