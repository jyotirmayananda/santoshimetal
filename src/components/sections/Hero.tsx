"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import FramerMotionHeroBackground from "@/components/animations/FramerMotionHeroBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 sm:pt-40 pb-24 sm:pb-32 select-none bg-white">
      {/* 1. Dynamic Framer Motion Background Animation (Radiant Orange Arcs & Soft Floating Orbs) */}
      <FramerMotionHeroBackground />

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Headline with Signature Orange Word Highlights */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-4xl font-sans"
        >
          Aluminium Solutions That{" "}
          <span className="text-[#FF5B00]">Empowers</span>
          <br className="hidden sm:inline" /> Everything For{" "}
          <span className="text-[#FF5B00]">Industry</span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 mt-6 max-w-2xl font-normal leading-relaxed"
        >
          Santoshi Metal Industries delivers advanced powder coating, architectural anodising, 99.7% casting ingots, and nationwide industrial metal sourcing.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            href="/capabilities"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Capabilities</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 px-7 py-4 rounded-full text-sm font-semibold text-[#FF5B00] bg-white hover:bg-orange-50/60 border border-[#FF5B00] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
          >
            <span>Request a Quote</span>
            <ChevronRight className="w-4 h-4 text-[#FF5B00]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
