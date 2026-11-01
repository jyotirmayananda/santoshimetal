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
    <section className="relative w-full py-28 sm:py-36 bg-white text-[#0F172A] overflow-hidden border-t border-b border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">Workflow Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            From Material To
            <br />
            <span className="text-[#FF5B00]">Finished Masterpiece.</span>
          </h2>

          <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-2xl font-normal">
            Our sequential manufacturing philosophy emphasizes precision control at each transformation phase.
          </p>

          <p className="text-xs text-slate-400 mt-2 italic font-normal">
            *Illustrative conceptual workflow framework. Individual processing stages vary depending on specific service requirements.
          </p>
        </div>

        {/* Process Timeline - Horizontal on Desktop */}
        <div className="hidden lg:block relative pt-10 pb-6">
          {/* Connecting Line */}
          <div className="absolute top-18 left-8 right-8 h-[2px] bg-gradient-to-r from-slate-200 via-amber-400 to-slate-200 pointer-events-none" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 * idx, duration: 0.5 }}
                  className="space-y-4 group"
                >
                  {/* Step Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 group-hover:border-orange-200 transition-colors flex items-center justify-center text-slate-700 group-hover:text-[#FF5B00] group-hover:bg-orange-50 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Info */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#FF5B00]">
                      STAGE {step.step}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#FF5B00] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline - Vertical on Mobile */}
        <div className="lg:hidden space-y-8 relative pl-6 border-l-2 border-orange-400/40 ml-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.step} className="relative space-y-2">
                {/* Node on line */}
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#FF5B00]" />

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#C6924D] font-bold block">
                      STAGE {step.step}
                    </span>
                    <h3 className="text-base font-bold uppercase text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
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
