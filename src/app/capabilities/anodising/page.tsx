import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Shield, Zap, Activity, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import AnodisingSection from "@/components/sections/AnodisingSection";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Aluminium Anodising Services | Electrochemical Surface Treatments",
  description:
    "Integral aluminium anodising producing sapphire-hard anodic oxide layers. Exceptional scratch resistance, natural metallic grain, and architectural color tones.",
};

export default function AnodisingPage() {
  const service = servicesData[1];

  const benefits = [
    {
      title: "Molecular Substrate Bond",
      desc: "Because the anodic layer is created from the substrate aluminium, it is structurally integral and cannot peel, bubble, or detach over time.",
      icon: Shield,
    },
    {
      title: "Superior Hardness & Wear",
      desc: "The crystalline aluminium oxide layer approaches sapphire in hardness, delivering remarkable resistance to daily abrasive wear and impact.",
      icon: Activity,
    },
    {
      title: "Metallic Luster Preservation",
      desc: "Anodising highlights the authentic microscopic crystalline grain of aluminium rather than concealing it beneath an opaque organic plastic skin.",
      icon: Shield,
    },
    {
      title: "Electrically Insulating",
      desc: "The anodic oxide layer exhibits high dielectric insulation, making it valuable in electronic hardware housings and specialized instruments.",
      icon: Zap,
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
              Capability Vertical 02 // Electrochemical Crystalline Oxide
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl mb-6 text-white font-sans">
            ALUMINIUM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              ANODISING.
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
              <span>Request Anodising Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Interactive Anodising Experience */}
      <AnodisingSection />

      {/* Technical Overview & Applications */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Technical Highlights (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Electrochemical Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-sans">
                PROCESS &amp; TECHNICAL BENCHMARKS
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Controlled electrolytic sulphuric acid baths paired with strict demineralized hot water sealing create a dense, corrosion-impervious surface barrier.
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
                PROVEN ARCHITECTURAL USES
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Anodised aluminium delivers authentic metallic beauty and tactile distinction across structural glazing, automotive trims, and precision equipment housings.
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
              Surface Integrity
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 font-sans">
              KEY ADVANTAGES OF ANODISED ALUMINIUM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/40 transition-colors space-y-4 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/25 text-[#FF8A3D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-white font-sans">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
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