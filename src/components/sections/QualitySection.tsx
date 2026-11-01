"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Eye, Gauge, Compass } from "lucide-react";

export default function QualitySection() {
  const qualityPillars = [
    {
      title: "Substrate Pre-Conditioning",
      desc: "Systematic multi-stage chemical degreasing and surface deoxidation before coating or anodising to establish optimal mechanical and electrochemical adhesion.",
      icon: Shield,
    },
    {
      title: "Dimensional & Film Consistency",
      desc: "Targeting rigorous micron-tolerance film thickness monitoring and uniform bath agitation across complex hollow and solid profile geometries.",
      icon: Gauge,
    },
    {
      title: "Surface Integrity Inspection",
      desc: "Visual and structural surface inspection targeting defect-free finishes, consistent gloss parameters, and zero blistering or flaking.",
      icon: Eye,
    },
    {
      title: "Material Sourcing Traceability",
      desc: "Disciplined batch verification of aluminium ingot inputs, ensuring known elemental compositions for predictable casting and extrusion results.",
      icon: Compass,
    },
  ];

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0B0F17] text-white overflow-hidden border-t border-b border-white/[0.08]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8A00]">
              Quality Assurance Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
            Quality Is Built Into
            <br />
            <span className="text-gradient-orange">Every Single Detail.</span>
          </h2>

          <p className="text-base text-slate-400 mt-4 leading-relaxed max-w-2xl font-normal">
            As an ambitious newly incorporated manufacturing enterprise, our approach is defined by uncompromising procedural rigor, calibrated thermal controls, and disciplined metallurgical handling.
          </p>
        </div>

        {/* Animated Horizontal Laser Scanner Line */}
        <div className="relative my-10 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5B00] to-transparent shadow-[0_0_15px_#FF5B00]"
          />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {qualityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="p-7 rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 space-y-4 relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-[#FF8A00] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#FF8A00] font-semibold font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5B00]" />
                  <span>Procedural Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            *Quality commitments represent our core manufacturing operational design. Formal laboratory accreditations and specific industrial certifications will be published following standard audit schedules.
          </p>
        </div>
      </div>
    </section>
  );
}
