"use client";

import { motion } from "framer-motion";
import { ClipboardList, Layers, Sliders, ShieldCheck, Truck } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Requirement Assessment",
    desc: "Technical consultation examining alloy composition, surface finish standards, micron tolerances, and project schedules.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Material Preparation",
    desc: "Rigorous surface degreasing, chemical alkaline etching, and deoxidation to prepare an optimal metallurgical substrate.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Processing & Finishing",
    desc: "Precision electrostatic powder deposition or electrolytic anodic oxidation under controlled temperature and current.",
    icon: Sliders,
  },
  {
    step: "04",
    title: "Quality Review",
    desc: "Dimensional cross-checking, coating thickness micron verification, visual gloss assessment, and adhesion benchmarking.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Dispatch Coordination",
    desc: "Multi-layer protective film wrapping, edge guarding, secure palletized bundling, and scheduled logistics transport.",
    icon: Truck,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#07090E] text-white overflow-hidden border-t border-b border-white/[0.08]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A00]">
              Sequential Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
            From Raw Metallurgy To
            <br />
            <span className="text-gradient-orange">Architectural Perfection.</span>
          </h2>

          <p className="text-base text-slate-400 mt-4 leading-relaxed max-w-2xl font-normal">
            Our sequential manufacturing philosophy emphasizes precision control, calibrated chemical baths, and rigorous verification at each phase.
          </p>
        </div>

        {/* Process Timeline - Horizontal on Desktop */}
        <div className="hidden lg:block relative pt-10 pb-6">
          {/* Connecting Line */}
          <div className="absolute top-18 left-8 right-8 h-[2px] bg-gradient-to-r from-orange-500/20 via-[#FF5B00]/40 to-orange-500/20 pointer-events-none" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="space-y-4 group cursor-default"
                >
                  {/* Step Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0E1420]/80 border border-white/[0.08] group-hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-[#FF5B00] shadow-xl group-hover:shadow-orange-500/25">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Info */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#FF8A00] block">
                      PHASE // {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline - Vertical on Mobile */}
        <div className="lg:hidden space-y-8 relative pl-6 border-l-2 border-orange-500/30 ml-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.step} className="relative space-y-2">
                {/* Node on line */}
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#07090E] border-2 border-[#FF5B00]" />

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#FF8A00] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#FF8A00] font-bold block">
                      STAGE {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pl-12 font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
