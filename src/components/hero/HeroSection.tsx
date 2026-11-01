'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { LiquidAluminiumWave } from '../three/LiquidAluminiumWave';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] bg-white flex flex-col justify-between overflow-hidden pt-28 pb-10">
      {/* 3D Liquid Aluminium Ribbon Canvas spanning entire screen */}
      <div className="absolute inset-0 z-0">
        <LiquidAluminiumWave />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#123b6805_1px,transparent_1px),linear-gradient(to_bottom,#123b6805_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      {/* Hero Content Overlay (Upper Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 md:pt-12 pointer-events-none">
        <div className="max-w-3xl">
          {/* Hero Headline (Manrope 64-96px on desktop) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-brand-navy leading-[1.04]"
          >
            <span>ENGINEERING</span>{' '}
            <span className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy bg-clip-text text-transparent">
              ALUMINIUM.
            </span>
            <br />
            <span>SHAPING THE</span>{' '}
            <span className="underline decoration-brand-blue/30 underline-offset-8">
              FUTURE.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-brand-text-secondary font-medium leading-relaxed max-w-2xl"
          >
            Premium aluminium powder coating, anodising, ingot solutions, and industrial aluminium supply.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 pointer-events-auto"
          >
            {/* Primary Button */}
            <Link
              href="/capabilities"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base shadow-metallic hover:bg-brand-blue-hover transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-brand-navy font-semibold text-base border-2 border-brand-navy hover:bg-brand-ice transition-all duration-300 transform hover:-translate-y-0.5 shadow-subtle"
            >
              <span>Request a Quote</span>
              <span className="text-brand-blue group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Corporate Details & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-8 pointer-events-none">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-brand-border/60 pt-6 gap-4">
          {/* Core Activities Quick List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-brand-navy"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Powder Coating
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Aluminium Anodising
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Ingot Manufacturing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Sales & Supply
            </span>
          </motion.div>

          {/* Interactive Scroll Down Indicator */}
          <motion.a
            href="#who-we-are"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="pointer-events-auto flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-blue transition-colors group"
          >
            <span>Discover Santoshi</span>
            <div className="w-6 h-6 rounded-full border border-brand-border flex items-center justify-center group-hover:border-brand-blue group-hover:translate-y-0.5 transition-all">
              <ChevronDown className="w-3.5 h-3.5 text-brand-blue animate-bounce" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

