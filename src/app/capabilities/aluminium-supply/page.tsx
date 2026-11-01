import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Package, FileCheck, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Aluminium Sales & Sourcing | Industrial Metal Distribution",
  description:
    "Comprehensive aluminium procurement and supply solutions. Industrial sheets, architectural extrusions, plates, billets, and coordinated nationwide delivery.",
};

export default function AluminiumSupplyPage() {
  const service = servicesData[3];

  const supplyStrengths = [
    {
      title: "Comprehensive Stock Profiles",
      desc: "Supplying wide-ranging standard geometric extrusions, architectural hollows, flat sheets, and specialized sections for fabricators.",
      icon: Package,
    },
    {
      title: "Batch Verification",
      desc: "Every dispatched batch is checked against dimensional drawings, wall thickness parameters, and documented alloy temper designations.",
      icon: FileCheck,
    },
    {
      title: "Protective Logistics Packaging",
      desc: "Specialized surface masking, corrugated interleaf protection, and reinforced timber crating safeguard against transit scuffing.",
      icon: ShieldCheck,
    },
    {
      title: "Scheduled Milestone Dispatch",
      desc: "Coordinated freight schedules tailored to large-scale infrastructure project phases, reducing on-site inventory clutter.",
      icon: Clock,
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
              Capability Vertical 04 // Sourcing &amp; Distribution
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl mb-6 text-white font-sans">
            ALUMINIUM SALES
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              &amp; STRATEGIC SUPPLY.
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
              <span>Submit Supply RFP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Framework Section */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Supply Chain Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight font-sans">
                DEPENDABLE METAL LOGISTICS FOR CRITICAL DEADLINES
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Industrial fabrication requires uninterrupted material flow. Santoshi Metal Industries coordinates sourcing networks, lot traceability, and regional distribution to ensure raw stock arrives on schedule and to specification.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 transition-colors shadow-lg"
                >
                  <span>Request Product Catalog Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-lg">
                <h3 className="text-base font-bold uppercase text-white mb-2 font-sans">
                  Extrusion Profiles &amp; Hollows
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Supply of architectural curtain wall channels, thermal break window frameworks, solar racking sections, and custom extruded geometries.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-lg">
                <h3 className="text-base font-bold uppercase text-white mb-2 font-sans">
                  Industrial Sheets &amp; Plates
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Flat-rolled aluminium sheets and tooling plates for laser cutting, vehicle body building, enclosure fabrication, and electrical panels.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-lg">
                <h3 className="text-base font-bold uppercase text-white mb-2 font-sans">
                  Foundry Billets &amp; Primary Stock
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Bulk aluminium billets and standard ingot allotments supplied to domestic manufacturing operations and specialized jobbing foundries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights & Typical Applications */}
      <section className="py-24 sm:py-32 bg-[#07090E] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Technical Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                MATERIAL INTEGRITY &amp; LOT MANAGEMENT
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Standardized verification protocols ensure incoming and outgoing metal meets stated dimensional and mechanical thresholds.
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

            {/* Typical Applications (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Target Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                SUPPLY RECIPIENTS &amp; USE CASES
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Serving diverse manufacturing and contracting operations requiring prompt and traceable raw metal.
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

      {/* Relevant Strengths Section */}
      <section className="py-24 sm:py-32 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
              Supply Assurance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 font-sans">
              WHY CONTRACTORS PARTNER WITH SANTOSHI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplyStrengths.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/40 transition-colors space-y-4 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/25 text-[#FF8A3D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-white font-sans">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {s.desc}
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