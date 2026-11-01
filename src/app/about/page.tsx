import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Target, Eye, Compass, MapPin, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/company";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile & Heritage",
  description:
    "Learn about Santoshi Metal Industries Private Limited, an ambitious Indian aluminium manufacturing enterprise dedicated to precision powder coating, anodising, ingots, and metal supply.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Dimensional & Surface Precision",
      desc: "Every micron in coating film build, every chemical fraction in an ingot, and every millimeter in profile extrusion is treated as non-negotiable.",
      icon: Target,
    },
    {
      title: "Modern Metallurgical Rigor",
      desc: "We approach aluminium as a high-performance technological alloy requiring calibrated thermal handling, disciplined degassing, and verified chemistry.",
      icon: Compass,
    },
    {
      title: "Commercial Integrity",
      desc: "Transparent business partnerships, dependable delivery schedules, documented traceability, and clear B2B technical consultations.",
      icon: ShieldCheck,
    },
    {
      title: "Environmental Responsibility",
      desc: "Championing zero-VOC dry powder formulations, energy-conscious heating cycles, and the infinite circularity inherent to aluminium.",
      icon: Eye,
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
              Corporate Profile &amp; Governance
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl mb-6 text-white font-sans">
            Where Metal Meets
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              Industrial Mastery.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            {companyInfo.name} is a newly incorporated, forward-looking enterprise established to elevate standards in Indian aluminium processing, surface engineering, and material supply.
          </p>
        </div>
      </section>

      {/* Corporate Identity & Registration Facts */}
      <section className="py-24 sm:py-32 bg-[#0B0F17] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
                Company Information
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight font-sans">
                Verified Corporate Profile
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Incorporated under the Companies Act, 2013, in Odisha, India, Santoshi Metal Industries represents a focused commitment to industrial precision and ethical corporate governance.
              </p>

              <div className="p-6 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-xl space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-slate-400">Corporate ID (CIN)</span>
                  <span className="font-bold text-amber-400">{companyInfo.cin}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-slate-400">Incorporation Date</span>
                  <span className="font-bold text-white">{companyInfo.incorporationDate}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-slate-400">Company Category</span>
                  <span className="font-bold text-white">{companyInfo.companyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Industry Classification</span>
                  <span className="font-bold text-white">Aluminium Manufacturing &amp; Processing</span>
                </div>
              </div>

              {/* Official Brand Identity Showcase */}
              <div className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-xl flex flex-col items-center justify-center text-center space-y-4">
                <Image
                  src="/images/logo/logo-full.png"
                  alt="Santoshi Metal Industries Official 3D Identity"
                  width={340}
                  height={220}
                  className="w-56 h-auto object-contain drop-shadow-[0_4px_20px_rgba(255,91,0,0.3)]"
                />
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block pt-3 border-t border-white/[0.08] w-full">
                  Official Trademark Identity
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/25 text-[#FF8A3D] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold uppercase text-white font-sans">
                    Our Mission
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    To deliver precision-engineered aluminium surface finishes, reliable ingot metallurgy, and trusted commercial supply that empower infrastructure developers, automotive casters, and fabricators across India.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] shadow-xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/25 text-[#FF8A3D] flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold uppercase text-white font-sans">
                    Our Vision
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    To build a recognized benchmark of quality and dependability in the aluminium sector, known for technical precision, progressive production standards, and enduring customer relationships.
                  </p>
                </div>
              </div>

              {/* Registered Office Details */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#161F30] via-[#0E1420] to-[#0E1420] border border-white/[0.12] text-white shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FF5B00]" />
                  <h3 className="text-base font-bold uppercase tracking-wide text-white">
                    Registered Office Location
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {companyInfo.registeredOffice.fullAddress}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400 font-semibold border-t border-white/[0.08]">
                  <span>District: Ganjam</span>
                  <span>•</span>
                  <span>State: Odisha (761104)</span>
                  <span>•</span>
                  <span>Country: India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 sm:py-32 bg-[#07090E] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 font-sans">
              CORE PRINCIPLES THAT GUIDE OUR WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/40 transition-colors space-y-4 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/25 text-[#FF8A3D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-white font-sans">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Board of Directors */}
      <section className="py-24 sm:py-32 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FF8A3D] font-bold">
              Corporate Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2 font-sans">
              BOARD OF DIRECTORS
            </h2>
            <p className="text-sm text-slate-300 mt-3 font-normal">
              Directorial oversight and verified leadership registered with the Ministry of Corporate Affairs (MCA), Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {companyInfo.directors.map((director) => (
              <div
                key={director.name}
                className="rounded-3xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/40 transition-all duration-400 overflow-hidden shadow-2xl flex flex-col group"
              >
                {/* Director Portrait */}
                <div className="relative w-full aspect-[4/5] sm:h-96 overflow-hidden bg-[#07090E]">
                  {director.image && (
                    <Image
                      src={director.image}
                      alt={director.name}
                      width={600}
                      height={720}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                      unoptimized
                    />
                  )}
                  {/* Gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1420] via-transparent to-transparent opacity-80" />

                  {/* Floating role badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0E1420]/80 backdrop-blur-md border border-white/[0.12] text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold shadow-md">
                    {director.role}
                  </div>
                </div>

                {/* Director Details */}
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-white font-sans tracking-tight group-hover:text-[#FF8A3D] transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mt-1">
                      Director • Board Member
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mt-3 font-normal">
                      {director.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Director</span>
                    </div>
                    <span>MCA Registered</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}