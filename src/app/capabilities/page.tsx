import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ShieldCheck, Box, Truck } from "lucide-react";
import { servicesData } from "@/data/services";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Our Capabilities | Industrial Aluminium Solutions",
  description:
    "Comprehensive aluminium manufacturing and processing verticals: Powder Coating, Anodising, Ingot Supply, and Metal Sales & Sourcing.",
};

const iconMap: Record<string, React.ElementType> = {
  Layers,
  ShieldCheck,
  Box,
  Truck,
};

export default function CapabilitiesPage() {
  return (
    <div className="w-full pt-28">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-[#0F172A] border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#C6924D]" />
            <span className="text-xs uppercase font-mono tracking-[0.3em] font-bold text-[#C6924D]">
              Comprehensive Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-4xl font-sans mb-8 text-slate-900">
            FOUR CORE CAPABILITIES.
            <br />
            <span className="metallic-gradient-text">ENGINEERED FOR EXCELLENCE.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Santoshi Metal Industries integrates primary casting supply, precision surface treatments, and nationwide metal distribution into a cohesive industrial manufacturing ecosystem.
          </p>
        </div>
      </section>

      {/* Vertical Capability Showcase Cards */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative group"
              >
                {/* Left/Content (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#C6924D]">
                      CAPABILITY {service.index}
                    </span>
                    <span className="w-4 h-[1px] bg-slate-300" />
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 font-sans">
                    {service.title}
                  </h2>

                  <p className="text-sm font-mono font-bold text-[#C6924D]">
                    {service.heroHeadline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold block">
                      Engineering Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {service.technicalHighlights.slice(0, 4).map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6924D] mt-1 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/capabilities/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-white bg-gradient-to-r from-[#DFAC6C] via-[#C6924D] to-[#B37E38] hover:from-[#E8BD82] hover:to-[#C6924D] transition-all duration-300 shadow-md shadow-amber-500/20 hover:-translate-y-0.5"
                    >
                      <span>Detailed Specifications</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-sm"
                    >
                      <span>Enquire for Orders</span>
                    </Link>
                  </div>
                </div>

                {/* Right/Visual Representation (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 min-h-[380px] h-full shadow-lg group/card bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-[#C6924D] flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono tracking-widest text-slate-900 font-bold shadow-sm">
                        SPEC 0{idx + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                      <div className="text-base font-bold font-sans uppercase tracking-tight text-slate-900 mb-1">
                        {service.shortTitle}
                      </div>
                      <p className="text-xs font-mono text-slate-600 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
