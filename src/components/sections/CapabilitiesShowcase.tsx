"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Layers, ShieldCheck, Box, Truck } from "lucide-react";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  ShieldCheck,
  Box,
  Truck,
};

export default function CapabilitiesShowcase() {
  return (
    <section id="capabilities-grid" className="relative w-full py-28 sm:py-36 bg-[#07090E] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (ReFactory & Apricode Style) */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A00] font-bold">
                Integrated Capabilities
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
              Four Core Pillars.
              <br />
              <span className="text-gradient-orange">One Standard Of Excellence.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            From precision architectural surface treatments to 99.7% virgin foundry ingots, discover the industrial capabilities of Santoshi Metal Industries.
          </p>
        </div>

        {/* 4 Cards Bento Grid with Actual Commercial Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers;
            const isFeatured = idx === 0 || idx === 2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx, duration: 0.6 }}
                className={cn(
                  "p-6 sm:p-7 rounded-3xl bg-[#0E1420]/80 border backdrop-blur-xl transition-all duration-400 flex flex-col justify-between group",
                  isFeatured
                    ? "border-orange-500/30 shadow-2xl shadow-orange-500/10 hover:border-orange-500/60"
                    : "border-white/[0.08] shadow-2xl hover:border-white/[0.2]"
                )}
              >
                <div className="space-y-5">
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#FF8A00]">
                      VERTICAL // 0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF5B00] group-hover:bg-[#FF5B00] group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#FF8A00] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#FF8A00] mt-1 font-mono">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Actual High-Resolution Photograph */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900 shadow-inner group/img">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-mono tracking-wider uppercase text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                      {service.index} • Verified Production
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specification Checkpoints */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                    {service.technicalHighlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-white/[0.08]">
                  <Link
                    href={`/capabilities/${service.slug}`}
                    className={cn(
                      "w-full py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 text-center cursor-pointer",
                      isFeatured
                        ? "bg-[#FF5B00] hover:bg-[#FF731A] text-white shadow-md shadow-orange-500/20"
                        : "bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.08]"
                    )}
                  >
                    <span>Technical Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
