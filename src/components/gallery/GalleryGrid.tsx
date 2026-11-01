'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  galleryItems,
  galleryCategories,
  GalleryCategory,
  GalleryItem,
} from '@/data/gallery';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from 'lucide-react';

interface GalleryGridProps {
  initialLimit?: number;
  showFilters?: boolean;
}

export function GalleryGrid({ initialLimit, showFilters = true }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedItems = initialLimit ? filteredItems.slice(0, initialLimit) : filteredItems;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % displayedItems.length);
    }
  }, [lightboxIndex, displayedItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + displayedItems.length) % displayedItems.length);
    }
  }, [lightboxIndex, displayedItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <div>
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-subtle'
                    : 'bg-white text-brand-text-secondary hover:text-brand-navy hover:bg-slate-100 border border-brand-border'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Masonry / Responsive Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {displayedItems.map((item, idx) => {
            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-brand-border shadow-subtle hover:shadow-elevated transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-100 ${
                    item.aspectRatio === 'portrait'
                      ? 'h-80 sm:h-96'
                      : item.aspectRatio === 'square'
                      ? 'h-72'
                      : 'h-64 sm:h-72'
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Lightbox Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-subtle">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption revealed on hover */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-heading font-bold text-sm text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-200 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Sub-bar below image */}
                <div className="p-4 border-t border-slate-100">
                  <h4 className="font-heading font-bold text-sm text-brand-navy line-clamp-1 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-text-secondary mt-0.5 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && displayedItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Box */}
            <div
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
                <Image
                  src={displayedItems[lightboxIndex].imageUrl}
                  alt={displayedItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 text-center text-white max-w-2xl px-4">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                  {displayedItems[lightboxIndex].category} • {lightboxIndex + 1} of{' '}
                  {displayedItems.length}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mt-1">
                  {displayedItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {displayedItems[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

