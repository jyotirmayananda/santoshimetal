import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Shield, Sun, Layers } from "lucide-react";
import { servicesData } from "@/data/services";
import PowderCoatingFeature from "@/components/sections/PowderCoatingFeature";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Aluminium Powder Coating Services | High Durability Finishes",
  description:
    "Electrostatic architectural powder coating on aluminium profiles, sheets, and components. High UV resistance, multi-stage chemical pretreatment, and vibrant RAL colors.",
};

export default function PowderCoatingPage() {
  const service = servicesData[0];

  const benefits = [
    {
      title: "Atmospheric Weatherability",
      desc: "Thermo-cured polymer resins shield underlying aluminium from extreme moisture, thermal shifts, and high ultraviolet sunlight exposure.",
      icon: Sun,
    },
    {
      title: "Chipping & Scratch Resistance",
      desc: "High mechanical impact resilience prevents hairline flaking and chipping during fabrication, transit, and architectural site installation.",
      icon: Shield,
    },
    {
      title: "Zero-VOC Eco Chemistry",
      desc: "Dry powder application eliminates volatile organic compounds, solvent waste, and atmospheric pollutants common to wet spray operations.",
      icon: CheckCircle2,
    },
    {
      title: "Uniform Micron Film Build",
      desc: "Automated electrostatic repulsion ensures controlled thickness even across recessed corners, deep channels, and complex extrusion geometries.",
      icon: Layers,
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
              Capability Vertical 01
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-4xl font-sans mb-8 text-slate-900">
            ALUMINIUM
            <br />
            <span className="metallic-gradient-text">POWDER COATING.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            {service.heroHeadline} — {service.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-[#DFAC6C] via-[#C6924D] to-[#B37E38] hover:from-[#E8BD82] hover:to-[#C6924D] transition-all duration-300 shadow-xl shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <span>Request Coating Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Feature & Color Simulation Section */}
      <PowderCoatingFeature />

      {/* Technical Overview & Applications */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Technical Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Engineering Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
                PROCESS & TECHNICAL BENCHMARKS
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our powder coating architecture follows systematic multi-stage surface preparation, ensuring chemical bonding between the substrate and polymer layers.
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
                PROVEN ARCHITECTURAL USES
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Powder coating is optimal for external building envelopes, curtain walls, solar framing, and commercial fabrications requiring long-term weather resistance.
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
              Product Integrity
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 mt-2">
              WHY SPECIFY POWDER COATED ALUMINIUM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.desc}
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
