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
    <section id="capabilities-grid" className="relative w-full py-24 sm:py-32 bg-white text-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Four Core Capabilities.
            <br />
            <span className="text-[#FF5B00]">One Benchmark Of Quality.</span>
          </h2>

          <p className="text-base text-slate-600 mt-4 leading-relaxed font-normal">
            From precision architectural surface finishes to high-purity foundry ingots, discover how Santoshi Metal Industries drives industrial reliability.
          </p>
        </div>

        {/* 4 Cards Grid (Matching the 3 Pricing Cards in Screenshot, but 4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers;
            const isFeatured = idx === 0 || idx === 2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className={cn(
                  "p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between group",
                  isFeatured
                    ? "border-orange-200 shadow-lg shadow-orange-500/5 ring-1 ring-[#FF5B00]/20"
                    : "border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
                )}
              >
                <div className="space-y-5">
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#FF5B00] group-hover:bg-[#FF5B00] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#FF5B00] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Product Image */}
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specification Checkpoints */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.technicalHighlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#FF5B00] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button (Matching Screenshot Pill Buttons) */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={`/capabilities/${service.slug}`}
                    className={cn(
                      "w-full py-2.5 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-center",
                      isFeatured
                        ? "bg-[#FF5B00] hover:bg-[#E04F00] text-white shadow-sm"
                        : "bg-slate-50 hover:bg-orange-50 text-slate-800 hover:text-[#FF5B00] border border-slate-200"
                    )}
                  >
                    <span>View Specifications</span>
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
