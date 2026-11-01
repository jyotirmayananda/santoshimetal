"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Box } from "lucide-react";

export default function IngotShowcase() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#F8FAFC] text-[#0F172A] border-t border-b border-slate-200 overflow-hidden">
      {/* Decorative architectural grid lines */}
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">03 / Foundry & Metallurgy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            The Strength Behind
            <br />
            <span className="text-[#FF5B00]">Modern Industry.</span>
          </h2>
          <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-2xl font-normal">
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
              className="relative p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden group"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#C6924D]">
                    <Box className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
                    Foundry Ingot Stacking Geometry
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">
                  99.7% Pure Spec
                </span>
              </div>

              {/* Visual Stacked Ingot Product Image */}
              <div className="relative w-full h-64 sm:h-84 rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
                <Image
                  src="/images/products/stacked-ingots.webp"
                  alt="Standardized Industrial Aluminium Foundry Ingots"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    SMI Primary Foundry Ingot Stock
                  </span>
                  <span className="text-[10px] font-mono bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    ASTM B179
                  </span>
                </div>
              </div>

              {/* Bottom Specs Strip */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-[11px] font-mono text-slate-500">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Chemical Dispersion</span>
                  <span className="font-bold text-slate-800">Spectro-Calibrated</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Gas Degassing</span>
                  <span className="font-bold text-slate-800">Ultra-Low Porosity</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] text-slate-400 uppercase">Supply Mode</span>
                  <span className="font-bold text-slate-800">Contract & Spot</span>
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
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 space-y-2 group hover:border-[#C6924D] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-[#C6924D] flex items-center justify-center text-xs font-mono font-bold">
                  01
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  Precision Metallurgy & Consistency
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-10">
                Formulated to deliver balanced mechanical toughness, uniform chemical dispersion, and minimal dissolved hydrogen content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 space-y-2 group hover:border-[#C6924D] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center text-xs font-mono font-bold">
                  02
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  Downstream Industrial Die-Casting
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-10">
                Engineered for pressure die-casting, automotive engine components, transmission covers, and specialized profile extrusion billets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 space-y-2 group hover:border-[#C6924D] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-xs font-mono font-bold">
                  03
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                  Supply Enquiries & Scheduling
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-10">
                Transparent consultation for procurement managers seeking reliable material dispatch and clear commercial coordination.
              </p>
            </motion.div>

            <div className="pt-3">
              <Link
                href="/capabilities/aluminium-ingots"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-colors shadow-sm"
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
