'use client';

import Link from 'next/link';
import { GalleryGrid } from '../gallery/GalleryGrid';
import { ArrowRight, Sparkles } from 'lucide-react';

export function GalleryPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
              PRECISION IN <br />
              <span className="text-brand-blue">EVERY SURFACE.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-brand-text-secondary">
              Explore our photographic showcase of architectural powder coating, electrolytic
              anodised profiles, cast aluminium ingots, and industrial extrusions.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-ice text-brand-navy border border-brand-border hover:bg-brand-navy hover:text-white transition-all text-sm font-semibold shadow-subtle"
          >
            <span>View Complete Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid with 6 curated items on homepage */}
        <GalleryGrid initialLimit={6} showFilters={false} />

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors"
          >
            <span>Browse all categories & technical inspection images (14+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

