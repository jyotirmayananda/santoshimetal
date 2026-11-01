"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Droplets, Sun, Layers } from "lucide-react";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";

export default function PowderCoatingFeature() {
  const powderService = servicesData[0];
  const finishes = powderService.finishOptions || [];
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0B0F17] text-white overflow-hidden border-t border-b border-white/[0.08]">
      {/* Decorative ambient aura */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Finish Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A00]">
                Line 01 // Surface Technology
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
              Colour That Lasts.
              <br />
              <span className="text-gradient-orange">Finishes That Perform.</span>
            </h2>

            <p className="text-base text-slate-400 leading-relaxed font-normal">
              Electrostatic dry-polymer powder coating cured under calibrated thermal parameters creates an impenetrable barrier against weathering, UV exposure, and environmental humidity.
            </p>

            {/* Interactive Finish Selector */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Select Architectural Palette:
                </span>
                <span className="text-xs font-mono font-bold text-[#FF8A00]">
                  {selectedFinish.name}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {finishes.map((finish) => {
                  const isSelected = selectedFinish.name === finish.name;

                  return (
                    <button
                      key={finish.name}
                      type="button"
                      onClick={() => setSelectedFinish(finish)}
                      className={cn(
                        "p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 relative cursor-pointer",
                        isSelected
                          ? "bg-orange-500/15 border-[#FF5B00] shadow-md shadow-orange-500/20 ring-1 ring-[#FF5B00]/40"
                          : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06]"
                      )}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0 shadow-inner"
                        style={{ backgroundColor: finish.hex }}
                      />
                      <span className="text-xs font-semibold text-white truncate">
                        {finish.name}
                      </span>

                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#FF8A00] ml-auto shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-500 italic pt-1 font-mono">
                *Visual demonstration preview. Production finishes are calibrated to exact architectural RAL standards.
              </p>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="space-y-1">
                <Sun className="w-4 h-4 text-[#FF5B00]" />
                <div className="text-xs font-bold text-white">UV Stable</div>
                <div className="text-[11px] text-slate-500">Solar resistant</div>
              </div>
              <div className="space-y-1">
                <Droplets className="w-4 h-4 text-[#FF5B00]" />
                <div className="text-xs font-bold text-white">Anti-Corrosion</div>
                <div className="text-[11px] text-slate-500">Moisture barrier</div>
              </div>
              <div className="space-y-1">
                <Layers className="w-4 h-4 text-[#FF5B00]" />
                <div className="text-xs font-bold text-white">Qualicoat Spec</div>
                <div className="text-[11px] text-slate-500">Class 1 & 2</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/capabilities/powder-coating"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5B00] to-[#E04F00] hover:from-[#FF731A] hover:to-[#FF5B00] transition-all shadow-md shadow-orange-500/20"
              >
                <span>Discover Powder Coating</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Simulated Coated Profile Visual (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
              {/* Radial glow matching finish */}
              <div
                className="absolute inset-0 opacity-20 transition-all duration-700 blur-3xl pointer-events-none"
                style={{ backgroundColor: selectedFinish.hex }}
              />

              {/* Profile Header Badge */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#FF8A00]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    Simulated Extrusion Profile
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Pre-Treatment: Standard
                </span>
              </div>

              {/* Central Dynamic Coated Profile Visualization */}
              <div className="relative z-10 my-8 flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFinish.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md h-56 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-2xl border border-white/[0.15]"
                    style={{
                      background: `linear-gradient(135deg, ${selectedFinish.hex} 0%, #07090E 100%)`,
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
                    <div className="absolute inset-y-0 left-12 w-16 bg-white/10 skew-x-12 blur-sm pointer-events-none" />

                    {/* Industrial Extrusion Shape Illustration */}
                    <div className="w-4/5 h-28 border-2 border-white/30 rounded-xl relative flex items-center justify-center p-4 backdrop-blur-xs">
                      <div className="w-full h-12 border border-white/40 rounded flex items-center justify-between px-6 bg-black/20">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
                        <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                          {selectedFinish.name}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-white/50" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <p className="text-xs text-slate-400 text-center max-w-sm mt-4 font-mono">
                  {selectedFinish.desc}
                </p>
              </div>

              {/* Bottom Technical Spec strip */}
              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Film Thickness: 60-80 Micron (Target)</span>
                <span>Substrate: Extruded Al</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
