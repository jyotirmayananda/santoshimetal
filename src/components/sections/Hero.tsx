"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import FramerMotionHeroBackground from "@/components/animations/FramerMotionHeroBackground";

const industrialMetrics = [
  { value: "99.7%", label: "Virgin Ingot Purity", detail: "ASTM B179 / IS 2590 Standard" },
  { value: "60–80μm", label: "Coating Film Build", detail: "Qualicoat Class 2 Standard" },
  { value: "20+ Yrs", label: "Surface Longevity", detail: "Salt Spray & UV Certified" },
  { value: "100%", label: "Infinite Circularity", detail: "Zero-Loss Recyclability" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-36 sm:pt-44 pb-20 sm:pb-28 select-none bg-[#07090E]">
      {/* 1. Dynamic Framer Motion Background Animation (Concentric Glowing Rings & Radial Grid) */}
      <FramerMotionHeroBackground />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Verified MCA Entity Status Tag (Inspired by Zeggo & Apricode) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-8 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse shadow-[0_0_10px_#FF5B00]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300 font-semibold">
            CIN: U24202OD2026PTC055660 • REGD. HEADQUARTERS ODISHA, INDIA
          </span>
        </motion.div>

        {/* Main Kinetic Headline with Signature Gradient Highlights */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] max-w-5xl font-sans"
        >
          Aluminium Engineered For{" "}
          <span className="text-gradient-orange">Monumental</span>
          <br className="hidden sm:inline" /> Industrial{" "}
          <span className="text-gradient-silver">Performance.</span>
        </motion.h1>

        {/* Technical Value Proposition Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-400 mt-6 max-w-2xl font-normal leading-relaxed"
        >
          Santoshi Metal Industries provides an integrated manufacturing pipeline across Qualicoat powder coating, architectural anodising, 99.7% virgin casting ingots, and nationwide material supply.
        </motion.p>

        {/* Dual High-Impact Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            href="/capabilities"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5B00] to-[#E04F00] hover:from-[#FF731A] hover:to-[#FF5B00] transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
          </Link>
        </motion.div>

        {/* 3. Live Metallurgy Metrics Strip (Inspired by Zeggo & ReFactory) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full mt-16 max-w-4xl"
        >
          {industrialMetrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-orange-500/40 transition-all duration-400 text-left group"
            >
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-[#FF8A00] transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 font-medium line-clamp-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
