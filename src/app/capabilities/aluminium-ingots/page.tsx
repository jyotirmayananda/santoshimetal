import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Box, ShieldCheck, Factory, Flame } from "lucide-react";
import { servicesData } from "@/data/services";
import IngotShowcase from "@/components/sections/IngotShowcase";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Aluminium Ingot Manufacturing & Supply | Foundry & Alloy Ingots",
  description:
    "Primary and foundry alloy aluminium ingots engineered for pressure die-casting, extrusion billets, and general metallurgy across Indian manufacturing.",
};

export default function AluminiumIngotsPage() {
  const service = servicesData[2];

  const ingotAdvantages = [
    {
      title: "Controlled Melt Degassing",
      desc: "Systematic rotary degassing and molten metal skimming reduce dissolved hydrogen, minimizing pinhole porosity in finished castings.",
      icon: Flame,
    },
    {
      title: "Predictable Alloy Chemistry",
      desc: "Spectrometrically verified elemental bounds ensure stable fluid flow, excellent mold filling, and repeatable mechanical tensile properties.",
      icon: ShieldCheck,
    },
    {
      title: "Clean Stacking Geometry",
      desc: "Engineered trapezoidal ingot shapes facilitate automated mechanical loading, space-efficient warehousing, and safe strapping during haulage.",
      icon: Box,
    },
    {
      title: "Foundry Cost Efficiency",
      desc: "Low dross formation and rapid melting characteristics cut energy consumption and furnace holding times for downstream casters.",
      icon: Factory,
    },
  ];

  return (
    <div className="w-full pt-28">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-[#0F172A] border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C6924D]" />
            <span className="text-xs uppercase font-mono tracking-[0.3em] font-bold text-[#C6924D]">
              Capability Vertical 03
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-4xl font-sans mb-8 text-slate-900">
            ALUMINIUM INGOT
            <br />
            <span className="metallic-gradient-text">MANUFACTURING & SUPPLY.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            {service.heroHeadline} — {service.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-[#DFAC6C] via-[#C6924D] to-[#B37E38] hover:from-[#E8BD82] hover:to-[#C6924D] transition-all duration-300 shadow-xl shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <span>Enquire for Ingot Batches</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Ingot Showcase Section */}
      <IngotShowcase />

      {/* Technical Highlights & Typical Applications */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Technical Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Metallurgical Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
                METALLURGICAL RIGOR & QUALITY CONTROLS
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our ingot handling emphasizes molten metal cleanliness, uniform alloy homogenization, and strict verification before batch dispatch.
              </p>

              <div className="space-y-3 pt-2">
                {service.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C6924D] mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Industrial Applications (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Application Domains
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
                PRIMARY FOUNDRY SECTORS
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for downstream high-pressure die casting, gravity casting, profile extrusion billets, and general industrial engineering casting requirements.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {service.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between group hover:border-[#C6924D] transition-colors"
                  >
                    <span className="text-xs text-slate-800 font-semibold">
                      {app}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#C6924D]">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Benefits Section */}
      <section className="py-20 sm:py-28 bg-white text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
              Engineering Advantages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 mt-2">
              WHY RELY ON SANTOSHI INGOT SUPPLY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingotAdvantages.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    {a.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
