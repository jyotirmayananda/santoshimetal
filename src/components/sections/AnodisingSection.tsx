"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight, Shield, Zap, Layers } from "lucide-react";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";

// Dynamic import with SSR false for Three.js WebGL Canvas
const AnodisedProfileViewer = dynamic(
  () => import("@/components/three/AnodisedProfileViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/[0.08]">
        <div className="w-8 h-8 border-2 border-[#FF5B00] border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-xs font-mono tracking-widest uppercase text-slate-400">
          Initializing WebGL 3D Engine...
        </span>
      </div>
    ),
  }
);

export default function AnodisingSection() {
  const anodisingService = servicesData[1];
  const finishes = anodisingService.finishOptions || [];
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);

  // Adjust material properties based on finish
  const getMaterialParams = (finishName: string) => {
    switch (finishName) {
      case "Satin Black":
        return { metalness: 0.88, roughness: 0.32 };
      case "Champagne":
        return { metalness: 0.92, roughness: 0.26 };
      case "Bronze":
        return { metalness: 0.9, roughness: 0.3 };
      case "Natural Silver":
      default:
        return { metalness: 0.94, roughness: 0.28 };
    }
  };

  const matParams = getMaterialParams(selectedFinish.name);

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#07090E] text-white border-t border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Interactive Canvas (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full h-[460px] sm:h-[530px] rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF8A00]">
                    WebGL 3D Surface Inspection
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Finish: {selectedFinish.name}
                </span>
              </div>

              {/* 3D Canvas Viewport */}
              <div className="w-full flex-1 my-2 relative">
                <AnodisedProfileViewer
                  finishColor={selectedFinish.hex}
                  metalness={matParams.metalness}
                  roughness={matParams.roughness}
                />
              </div>

              {/* Finish Switcher Buttons */}
              <div className="pt-3 border-t border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Select Electrochemical Tone:
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Architectural Spec
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {finishes.map((finish) => {
                    const isSelected = selectedFinish.name === finish.name;

                    return (
                      <button
                        key={finish.name}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={cn(
                          "py-2 px-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer",
                          isSelected
                            ? "bg-orange-500/15 border-[#FF5B00] shadow-md shadow-orange-500/20 ring-1 ring-[#FF5B00]/40"
                            : "bg-white/[0.03] border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.06]"
                        )}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white/20 shadow-inner"
                          style={{ backgroundColor: finish.hex }}
                        />
                        <span className="text-[10px] font-mono font-semibold text-white truncate max-w-full">
                          {finish.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Editorial (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A00]">
                Line 02 // Surface Chemistry
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
              Beyond The Surface.
              <br />
              <span className="text-gradient-orange">Molecular Strength.</span>
            </h2>

            <p className="text-base text-slate-400 leading-relaxed font-normal">
              Unlike topical paint coatings, anodising electrochemically converts the surface aluminium into a sapphire-hard aluminium oxide crystalline structure that becomes inseparable from the core metal. It will never peel, flake, or blister.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#FF8A00] shrink-0 mt-0.5 border border-orange-500/20">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-white">
                    Sapphire-Grade Surface Hardness
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Resists abrasion, mechanical scratching, and harsh coastal atmospheric exposure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#FF8A00] shrink-0 mt-0.5 border border-orange-500/20">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-white">
                    Authentic Metallic Tactile Depth
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Preserves the natural metallic sheen and optical refraction unique to raw architectural aluminium.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#FF8A00] shrink-0 mt-0.5 border border-orange-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-white">
                    Electrolytic Sealing Technology
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Demineralized high-temperature sealing locks the microscopic anodic pore network against staining.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/capabilities/anodising"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF5B00] to-[#E04F00] hover:from-[#FF731A] hover:to-[#FF5B00] transition-all shadow-md shadow-orange-500/20"
              >
                <span>Explore Anodising Solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
