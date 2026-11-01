import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Box, ShieldCheck, Factory, Flame, Sparkles } from "lucide-react";
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
    <div className="w-full pt-28 bg-[#07090E] text-white">
      {/* Hero Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#FF5B00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
              <Sparkles className="w-3 h-3" />
              Capability Vertical 03 // ASTM B179 Spec Standard
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl mb-6 text-white font-sans">
            ALUMINIUM INGOT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              FOUNDRY SUPPLY.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            {service.heroHeadline} — {service.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all shadow-[0_0_25px_rgba(255,91,0,0.35)] hover:-translate-y-0.5"
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
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Technical Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Metallurgical Protocol
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                METALLURGICAL RIGOR &amp; QUALITY CONTROLS
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Our ingot handling emphasizes molten metal cleanliness, uniform alloy homogenization, and strict verification before batch dispatch.
              </p>

              <div className="space-y-3 pt-2">
                {service.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0E1420] border border-white/[0.08] shadow-lg flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF5B00] mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Industrial Applications (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Application Domains
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                PRIMARY FOUNDRY SECTORS
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Engineered for downstream high-pressure die casting, gravity casting, profile extrusion billets, and general industrial engineering casting requirements.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {service.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0E1420] border border-white/[0.08] shadow-lg flex items-center justify-between group hover:border-[#FF5B00]/40 transition-colors"
                  >
                    <span className="text-xs text-slate-200 font-semibold">
                      {app}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-amber-400">
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
      <section className="py-24 sm:py-32 bg-[#07090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
              Engineering Advantages
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 font-sans">
              WHY RELY ON SANTOSHI INGOT SUPPLY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingotAdvantages.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/40 transition-colors space-y-4 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/25 text-[#FF8A3D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-white font-sans">
                    {a.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
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