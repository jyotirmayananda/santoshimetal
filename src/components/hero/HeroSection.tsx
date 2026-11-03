'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { LiquidAluminiumWave } from '../three/LiquidAluminiumWave';
import { easeOutExpo, staggerFast, staggerItem } from '@/lib/motion';

const activityLabels = [
  'Aluminium Ingot',
  'Aluminium Profile',
  'Scrap & Supply',
  'Powder Coating',
  'Anodising',
];

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] bg-white flex flex-col justify-between overflow-hidden pt-28 pb-10">
      <div className="absolute inset-0 z-0">
        <LiquidAluminiumWave />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#123b6805_1px,transparent_1px),linear-gradient(to_bottom,#123b6805_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-24 right-[12%] h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl z-[1]"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 md:pt-12 pointer-events-none">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: easeOutExpo }}
            className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-brand-navy leading-[1.04]"
          >
            <span>ENGINEERING</span>{' '}
            <span className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              ALUMINIUM.
            </span>
            <br />
            <span>SHAPING THE</span>{' '}
            <span className="underline decoration-brand-blue/30 underline-offset-8">
              FUTURE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: easeOutExpo }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-brand-text-secondary font-medium leading-relaxed max-w-2xl"
          >
            Aluminium Ingot, Profile, Scrap &amp; Supply, Powder Coating, and Anodising—engineered for industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.55, ease: easeOutExpo }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 pointer-events-auto"
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/capabilities"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base shadow-metallic hover:bg-brand-blue-hover transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Capabilities</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-brand-navy to-brand-blue transition-transform duration-500" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-brand-navy font-semibold text-base border-2 border-brand-navy hover:bg-brand-ice transition-all duration-300 shadow-subtle"
              >
                <span>Request a Quote</span>
                <span className="text-brand-blue group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-8 pointer-events-none">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-brand-border/60 pt-6 gap-4">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 2.1 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-brand-navy"
          >
            {activityLabels.map((label) => (
              <motion.span
                key={label}
                variants={staggerItem}
                className="flex items-center gap-2"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-brand-blue"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.a
            href="#who-we-are"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
            className="pointer-events-auto flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-blue transition-colors group"
          >
            <span>Discover Santoshi</span>
            <motion.div
              className="w-6 h-6 rounded-full border border-brand-border flex items-center justify-center group-hover:border-brand-blue transition-all"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-3.5 h-3.5 text-brand-blue" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
