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
      <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-2xl border border-slate-200 min-h-[420px]">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500 animate-pulse">
          Loading 3D Anodised Substrate...
        </div>
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
    <section className="relative w-full py-28 sm:py-36 bg-[#F8FAFC] text-[#0F172A] border-t border-b border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Interactive Canvas (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-semibold text-[#FF5B00]">
                  3D Surface Inspection
                </span>
                <span className="text-xs text-slate-500 font-medium">
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
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Select Anodised Tone:
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Illustrative Tone Standard
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
                            ? "bg-orange-50 border-[#FF5B00] shadow-sm ring-1 ring-[#FF5B00]/30"
                            : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white"
                        )}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: finish.hex }}
                        />
                        <span className="text-[10px] font-mono font-medium text-slate-800 truncate max-w-full">
                          {finish.name.split(" ")[0]}
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
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">02 / Surface Chemistry</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Beyond The Surface.
              <br />
              <span className="text-[#FF5B00]">Molecular Strength.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Unlike topical paint coatings, anodising electrochemically converts the surface aluminium into a sapphire-hard aluminium oxide crystalline structure that becomes inseparable from the core metal. It will never peel, flake, or blister.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#C6924D] shrink-0 mt-0.5 border border-amber-200/50">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                    Sapphire-Grade Surface Hardness
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Resists abrasion, mechanical scratching, and harsh coastal atmospheric exposure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#C6924D] shrink-0 mt-0.5 border border-amber-200/50">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                    Authentic Metallic Tactile Depth
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Preserves the natural metallic sheen and optical refraction unique to raw architectural aluminium.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#C6924D] shrink-0 mt-0.5 border border-amber-200/50">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                    Electrolytic Sealing Technology
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Demineralized high-temperature sealing locks the microscopic anodic pore network against staining.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/capabilities/anodising"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-colors shadow-sm"
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
