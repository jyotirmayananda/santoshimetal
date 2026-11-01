import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Package, FileCheck } from "lucide-react";
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
    <div className="w-full pt-28">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-[#0F172A] border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C6924D]" />
            <span className="text-xs uppercase font-mono tracking-[0.3em] font-bold text-[#C6924D]">
              Capability Vertical 04
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-4xl font-sans mb-8 text-slate-900">
            ALUMINIUM SALES
            <br />
            <span className="metallic-gradient-text">&amp; STRATEGIC SUPPLY.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            {service.heroHeadline} — {service.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-[#DFAC6C] via-[#C6924D] to-[#B37E38] hover:from-[#E8BD82] hover:to-[#C6924D] transition-all duration-300 shadow-xl shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <span>Submit Supply RFP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Framework Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Supply Chain Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                DEPENDABLE METAL LOGISTICS FOR CRITICAL DEADLINES
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Industrial fabrication requires uninterrupted material flow. Santoshi Metal Industries coordinates sourcing networks, lot traceability, and regional distribution to ensure raw stock arrives on schedule and to specification.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
                >
                  <span>Request Product Catalog Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold uppercase text-slate-900 mb-2">
                  Extrusion Profiles &amp; Hollows
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supply of architectural curtain wall channels, thermal break window frameworks, solar racking sections, and custom extruded geometries.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold uppercase text-slate-900 mb-2">
                  Industrial Sheets &amp; Plates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flat-rolled aluminium sheets and tooling plates for laser cutting, vehicle body building, enclosure fabrication, and electrical panels.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold uppercase text-slate-900 mb-2">
                  Foundry Billets &amp; Primary Stock
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bulk aluminium billets and standard ingot allotments supplied to domestic manufacturing operations and specialized jobbing foundries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights & Typical Applications */}
      <section className="py-20 sm:py-28 bg-white text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Technical Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Quality Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
                MATERIAL INTEGRITY &amp; LOT MANAGEMENT
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Standardized verification protocols ensure incoming and outgoing metal meets stated dimensional and mechanical thresholds.
              </p>

              <div className="space-y-3 pt-2">
                {service.technicalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C6924D] mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Applications (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Target Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
                SUPPLY RECIPIENTS &amp; USE CASES
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Serving diverse manufacturing and contracting operations requiring prompt and traceable raw metal.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {service.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-between group hover:border-[#C6924D] transition-colors"
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

      {/* Relevant Strengths Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
              Supply Assurance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 mt-2">
              WHY CONTRACTORS PARTNER WITH SANTOSHI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supplyStrengths.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
