import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Target, Eye, Compass, MapPin } from "lucide-react";
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
      desc: "Every micron in coating thickness, every chemical fraction in an ingot, and every millimeter in profile extrusion is treated as non-negotiable.",
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
      desc: "Championing zero-VOC dry powder formulations, energy-conscious heating cycles, and the infinite recyclability inherent to aluminium.",
      icon: Eye,
    },
  ];

  return (
    <div className="w-full pt-28">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-[#0F172A] border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">
              Corporate Profile
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mb-6 text-slate-900">
            Where Metal Meets
            <br />
            <span className="text-[#FF5B00]">Modern Mastery.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            {companyInfo.name} is a newly incorporated, forward-looking enterprise established to elevate standards in Indian aluminium processing, surface engineering, and material supply.
          </p>
        </div>
      </section>

      {/* Corporate Identity & Registration Facts */}
      <section className="py-20 sm:py-28 bg-white text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
                Company Information
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                Verified Corporate Profile
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Incorporated under the Companies Act, 2013, in Odisha, India, Santoshi Metal Industries represents a focused commitment to industrial precision and ethical corporate governance.
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Corporate ID (CIN)</span>
                  <span className="font-bold text-slate-900">{companyInfo.cin}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Incorporation Date</span>
                  <span className="font-bold text-slate-900">{companyInfo.incorporationDate}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Company Category</span>
                  <span className="font-bold text-slate-900">{companyInfo.companyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Industry Classification</span>
                  <span className="font-bold text-slate-900">Aluminium Manufacturing</span>
                </div>
              </div>

              {/* Official Brand Identity Showcase */}
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
                <Image
                  src="/images/logo/logo-full.png"
                  alt="Santoshi Metal Industries Official 3D Identity"
                  width={340}
                  height={220}
                  className="w-56 h-auto object-contain drop-shadow-[0_4px_16px_rgba(198,146,77,0.25)]"
                />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C6924D] font-bold block pt-2 border-t border-slate-200 w-full">
                  Official Trademark Identity
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold uppercase text-slate-900">
                    Our Mission
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver precision-engineered aluminium surface finishes, reliable ingot metallurgy, and trusted commercial supply that empower infrastructure developers, automotive casters, and fabricators across India.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold uppercase text-slate-900">
                    Our Vision
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To build a recognized benchmark of quality and dependability in the aluminium sector, known for technical precision, progressive production standards, and enduring customer relationships.
                  </p>
                </div>
              </div>

              {/* Registered Office Details */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 to-slate-100 border border-amber-200/60 text-slate-900 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C6924D]" />
                  <h3 className="text-base font-bold uppercase tracking-wide text-slate-900">
                    Registered Office Location
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {companyInfo.registeredOffice.fullAddress}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-500 font-semibold">
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
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 mt-2">
              CORE PRINCIPLES THAT GUIDE OUR WORK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/50 text-[#C6924D] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Board of Directors */}
      <section className="py-20 sm:py-28 bg-white text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#C6924D] font-bold">
              Corporate Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 mt-2">
              BOARD OF DIRECTORS
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Directorial oversight and verified leadership registered with the Ministry of Corporate Affairs (MCA), Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {companyInfo.directors.map((director) => (
              <div
                key={director.name}
                className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#C6924D] transition-all duration-400 overflow-hidden shadow-md flex flex-col group"
              >
                {/* Director Portrait */}
                <div className="relative w-full aspect-[4/5] sm:h-96 overflow-hidden bg-slate-200">
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
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                  {/* Floating role badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-widest text-[#C6924D] font-bold shadow-sm">
                    {director.role}
                  </div>
                </div>

                {/* Director Details */}
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-slate-900 font-sans tracking-tight group-hover:text-[#C6924D] transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#C6924D] font-bold mt-1">
                      Director • Board Member
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-3">
                      {director.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <div className="flex items-center gap-1.5 text-[#C6924D] font-bold">
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
