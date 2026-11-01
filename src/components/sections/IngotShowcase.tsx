"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Box } from "lucide-react";

export default function IngotShowcase() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0B0F17] text-white overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A00]">
              Line 03 // Foundry & Metallurgy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
            The Strength Behind
            <br />
            <span className="text-gradient-orange">Modern Industry.</span>
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed max-w-2xl font-normal">
            Aluminium ingots provide the foundational metallurgical medium for downstream die-casters, extrusion facilities, and industrial rolling operations across Indian manufacturing.
          </p>
        </div>

        {/* Ingot Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Stacked Aluminium Ingot Visual Card (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-orange-500/40 transition-all duration-400"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#FF8A00]">
                    <Box className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    Foundry Ingot Stacking Geometry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-500/30">
                  99.7% Virgin Purity Spec
                </span>
              </div>

              {/* Visual Stacked Ingot Product Image */}
              <div className="relative w-full h-64 sm:h-84 rounded-2xl overflow-hidden border border-white/[0.08] shadow-inner group/img bg-slate-950">
                <Image
                  src="/images/products/actual-stacked-ingots.webp"
                  alt="Standardized Industrial Aluminium Foundry Ingots"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    SMI Primary Foundry Ingot Stock
                  </span>
                  <span className="text-[10px] font-mono bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    ASTM B179 / IS 2590
                  </span>
                </div>
              </div>

              {/* Bottom Specs Strip */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-[11px] font-mono text-slate-400">
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">Chemical Dispersion</span>
                  <span className="font-bold text-white">Spectro-Calibrated</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase">Gas Degassing</span>
                  <span className="font-bold text-white">Ultra-Low Porosity</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] text-slate-500 uppercase">Supply Mode</span>
                  <span className="font-bold text-white">Contract & Spot</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Three Modern Bento Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-2 group hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#FF8A00] flex items-center justify-center text-xs font-mono font-bold">
                  01
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-[#FF8A00] transition-colors">
                  Precision Metallurgy & Consistency
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-10">
                Formulated to deliver balanced mechanical toughness, uniform chemical dispersion, and minimal dissolved hydrogen content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-2 group hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center text-xs font-mono font-bold">
                  02
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-[#FF8A00] transition-colors">
                  Downstream Industrial Die-Casting
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-10">
                Engineered for pressure die-casting, automotive engine components, transmission covers, and specialized profile extrusion billets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-2 group hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
                  03
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-[#FF8A00] transition-colors">
                  Supply Enquiries & Scheduling
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-10">
                Transparent consultation for procurement managers seeking reliable material dispatch and clear commercial coordination.
              </p>
            </motion.div>

            <div className="pt-3">
              <Link
                href="/capabilities/aluminium-ingots"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5B00] to-[#E04F00] hover:from-[#FF731A] hover:to-[#FF5B00] transition-all shadow-md shadow-orange-500/20"
              >
                <span>Explore Aluminium Ingots</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
