import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ShieldCheck, Box, Truck, Sparkles } from "lucide-react";
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
    <div className="w-full pt-28 bg-[#07090E] text-white">
      {/* Hero Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#FF5B00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
              <Sparkles className="w-3 h-3" />
              Four Integrated Metallurgical Verticals
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl mb-6 text-white font-sans">
            FOUR CORE CAPABILITIES.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              ENGINEERED FOR EXCELLENCE.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            Santoshi Metal Industries integrates primary casting supply, precision surface treatments, and nationwide metal distribution into a cohesive industrial manufacturing ecosystem.
          </p>
        </div>
      </section>

      {/* Vertical Capability Showcase Cards */}
      <section className="py-24 sm:py-32 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/30 transition-all duration-400 shadow-2xl overflow-hidden relative group"
              >
                {/* Content (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest font-bold text-amber-400">
                      VERTICAL // 0{service.index}
                    </span>
                    <span className="w-4 h-[1px] bg-white/20" />
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                    {service.title}
                  </h2>

                  <p className="text-sm font-mono font-bold text-[#FF8A3D]">
                    {service.heroHeadline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {service.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block">
                      Engineering Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {service.technicalHighlights.slice(0, 4).map((tech, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] mt-1 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/capabilities/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all shadow-[0_0_20px_rgba(255,91,0,0.3)] hover:-translate-y-0.5"
                    >
                      <span>Detailed Specifications</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <span>Enquire for Orders</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Representation (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] min-h-[380px] h-full shadow-2xl group/card bg-[#07090E]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0E1420]/80 backdrop-blur-md border border-white/10 text-[#FF8A3D] flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#0E1420]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-amber-400 font-bold shadow-md">
                        SPEC 0{idx + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0E1420]/90 backdrop-blur-md border border-white/10 shadow-lg">
                      <div className="text-sm font-bold font-sans uppercase tracking-tight text-white mb-1">
                        {service.shortTitle}
                      </div>
                      <p className="text-xs font-mono text-slate-300 line-clamp-1">
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