"use client";

import { motion } from "framer-motion";

export default function FramerMotionHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Clean Canvas Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F5] via-[#FFFFFF] to-[#FFFFFF]" />

      {/* 2. Floating Warm Orange & Peach Ambient Gradient Orbs */}
      <div className="absolute inset-0">
        {/* Main Radiant Orange Glow Behind Hero */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] bg-gradient-to-r from-[#FF5B00]/25 via-[#FFA066]/30 to-[#FFD4BD]/40"
        />

        {/* Top-Right Soft Sunlight Peach Float */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-[550px] h-[550px] rounded-full blur-[130px] bg-gradient-to-bl from-[#FF8A00]/20 via-[#FFD4BD]/30 to-transparent"
        />

        {/* Top-Left Soft Amber Float */}
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[130px] bg-gradient-to-br from-[#FFE5D3]/50 via-[#FF8A00]/15 to-transparent"
        />
      </div>

      {/* 3. Radiant Concentric Orange Arcs / Rings (Signature WorkBolt Graphic) */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
        {/* Outer Ring */}
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-orange-200/60"
        />

        {/* Second Ring */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-[90px] rounded-full border border-orange-200/80"
        />

        {/* Third Ring */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute inset-[180px] rounded-full border border-[#FF5B00]/25"
        />

        {/* Fourth Inner Glow Ring */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
          className="absolute inset-[270px] rounded-full border-2 border-[#FF5B00]/30 shadow-[0_0_40px_rgba(255,91,0,0.15)]"
        />

        {/* Orbiting Golden Satellite Marker */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute inset-[180px] rounded-full pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#FF5B00] shadow-[0_0_12px_#FF5B00]" />
        </motion.div>
      </div>

      {/* 4. Subtle Micro Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(#FF5B00 1.2px, transparent 1.2px)`,
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}
