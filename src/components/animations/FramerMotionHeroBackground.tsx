"use client";

import { motion } from "framer-motion";

export default function FramerMotionHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#07090E]">
      {/* 1. Technical Grid Overlay with Vignette Mask */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 91, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* 2. Floating Radiant Ambient Auras */}
      <div className="absolute inset-0">
        {/* Center Primary Radiant Molten Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full blur-[140px] bg-gradient-to-r from-[#FF5B00]/30 via-[#FF8A00]/20 to-[#E04F00]/25"
        />

        {/* Top-Right Ambient Cyan-Silver Cold Light for Contrast */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] bg-sky-500/10"
        />

        {/* Top-Left Ambient Amber Warmth */}
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[160px] bg-orange-600/15"
        />
      </div>

      {/* 3. Concentric Engineering Energy Rings (Zeggo / Apricode Aesthetic) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] pointer-events-none">
        {/* Outer Ring */}
        <motion.div
          animate={{ scale: [1, 1.03, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-white/[0.08]"
        />

        {/* Second Ring */}
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.6 }}
          className="absolute inset-[100px] rounded-full border border-[#FF5B00]/20"
        />

        {/* Third Ring */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.2 }}
          className="absolute inset-[200px] rounded-full border border-[#FF5B00]/35 shadow-[0_0_30px_rgba(255,91,0,0.1)]"
        />

        {/* Fourth Core Ring */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.95, 0.5] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.8 }}
          className="absolute inset-[300px] rounded-full border-2 border-[#FF5B00]/50 shadow-[0_0_50px_rgba(255,91,0,0.25)]"
        />

        {/* Orbiting Laser Point */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute inset-[200px] rounded-full pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5B00] shadow-[0_0_16px_#FF5B00]" />
        </motion.div>
      </div>

      {/* 4. Bottom Fade to Content */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#07090E] to-transparent pointer-events-none" />
    </div>
  );
}
