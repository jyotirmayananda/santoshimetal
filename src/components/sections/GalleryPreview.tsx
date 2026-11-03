'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GalleryGrid } from '../gallery/GalleryGrid';
import { ArrowRight } from 'lucide-react';
import { Reveal, MagneticButton } from '@/components/motion/Reveal';

export function GalleryPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <Reveal className="max-w-2xl" direction="blur">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
              PRECISION IN <br />
              <span className="text-brand-blue">EVERY SURFACE.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-text-secondary">
              Explore our photographic showcase of architectural powder coating, electrolytic
              anodised profiles, cast aluminium ingots, and industrial extrusions.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <MagneticButton>
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-ice text-brand-navy border border-brand-border hover:bg-brand-navy hover:text-white transition-all text-sm font-semibold shadow-subtle"
              >
                <span>View Complete Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal soft>
          <GalleryGrid initialLimit={6} showFilters={false} />
        </Reveal>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors"
            >
              <span>Browse all categories & technical inspection images (14+)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
