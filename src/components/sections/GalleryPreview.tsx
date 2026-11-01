"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#F8FAFC] text-[#0F172A] border-t border-b border-slate-200 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF5B00] border border-orange-200/60">
                Visual Portfolio
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Aluminium In
              <br />
              <span className="text-[#FF5B00]">High Definition.</span>
            </h2>

            <p className="text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Explore macro textures, surface finishes, ingot geometries, and industrial manufacturing aesthetics.
            </p>
          </div>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-colors self-start md:self-end shadow-sm"
          >
            <span>Explore Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx, duration: 0.5 }}
              onClick={() => setSelectedItem(item)}
              className={cn(
                "group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#C6924D] transition-all duration-500 shadow-md hover:shadow-xl",
                idx === 0 || idx === 3 ? "sm:col-span-2 lg:col-span-1 min-h-[340px]" : "min-h-[300px]"
              )}
            >
              {/* Product Image when available */}
              {item.image ? (
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-transparent" />
                </div>
              ) : (
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105",
                    item.gradient
                  )}
                />
              )}

              {/* Shimmer Light Bar */}
              <div className="absolute inset-y-0 -left-1/2 w-1/3 bg-white/20 skew-x-12 blur-md opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-all duration-1000 pointer-events-none" />

              {/* Hover Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200 shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold uppercase tracking-wide text-white group-hover:text-[#FEF08A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-[9px] font-mono text-slate-300 italic pt-1">
                    *Material Showcase
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-colors border border-slate-200 shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Material Presentation Area */}
              <div className="w-full h-80 sm:h-96 relative bg-slate-900">
                {selectedItem.image ? (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={cn(
                      "w-full h-full bg-gradient-to-br flex items-center justify-center p-8",
                      selectedItem.gradient
                    )}
                  >
                    <div className="w-48 h-32 rounded-xl border border-white/30 backdrop-blur-md flex items-center justify-center text-center p-4 shadow-2xl">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/90 font-bold">
                        {selectedItem.title}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30" />
              </div>

              {/* Modal Metadata Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono uppercase tracking-wider text-[#C6924D] font-bold">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Portfolio Catalog ID: {selectedItem.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-slate-900">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedItem.description}
                </p>

                <p className="text-xs font-mono text-slate-400 italic pt-2 border-t border-slate-100">
                  Notice: {selectedItem.demonstrationNotice}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
