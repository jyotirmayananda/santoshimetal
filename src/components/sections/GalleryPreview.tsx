"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Maximize2, X, Sparkles } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#07090E] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FF5B00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
                <Sparkles className="w-3 h-3" />
                Visual Portfolio &amp; Macro Detail
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              Aluminium In
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
                High Definition.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed font-normal">
              Macro textures, electrochemically bonded oxide layers, Qualicoat powder films, and precision-cast ingot geometries.
            </p>
          </div>

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all shadow-[0_0_25px_rgba(255,91,0,0.3)] hover:shadow-[0_0_35px_rgba(255,91,0,0.5)] self-start md:self-end"
          >
            <span>Explore All Capabilities</span>
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
                "group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/50 transition-all duration-500 shadow-xl",
                idx === 0 || idx === 3 ? "sm:col-span-2 lg:col-span-1 min-h-[340px]" : "min-h-[300px]"
              )}
            >
              {/* Product Image */}
              {item.image ? (
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/40 to-transparent" />
                </div>
              ) : (
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-108",
                    item.gradient
                  )}
                />
              )}

              {/* Shimmer Light Bar */}
              <div className="absolute inset-y-0 -left-1/2 w-1/3 bg-white/10 skew-x-12 blur-md opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-all duration-1000 pointer-events-none" />

              {/* Hover Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#0E1420]/80 backdrop-blur-md border border-white/[0.12] text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-white group-hover:text-[#FF8A3D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 font-normal">
                    {item.description}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400 italic pt-1">
                    *Material Showcase // Certified Metallurgy
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-[#0E1420] border border-white/[0.15] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 backdrop-blur-md cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Material Presentation Area */}
              <div className="w-full h-80 sm:h-96 relative bg-[#07090E]">
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
                    <div className="w-48 h-32 rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center text-center p-4 shadow-2xl">
                      <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                        {selectedItem.title}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-transparent to-transparent opacity-80" />
              </div>

              {/* Modal Metadata Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#FF5B00]/15 border border-[#FF5B00]/30 text-xs font-mono uppercase tracking-wider text-[#FF8A3D] font-bold">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    SMI Catalog Ref: {selectedItem.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-white tracking-tight">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {selectedItem.description}
                </p>

                <p className="text-xs font-mono text-slate-400 italic pt-2 border-t border-white/[0.08]">
                  Metallurgical Note: {selectedItem.demonstrationNotice}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}