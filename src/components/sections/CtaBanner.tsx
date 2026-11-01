"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-white overflow-hidden text-center">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Concentric Orange Radiant Container (Matching WorkBolt Screenshot Card) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#FFF5EE] via-[#FFEADB] to-[#FED7AA]/40 border border-orange-200/60 p-12 sm:p-20 overflow-hidden shadow-sm">
          {/* Concentric Radiant Semi-Circle Rings Graphic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-[#FF5B00]/15" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full border border-[#FF5B00]/25" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border-2 border-[#FF5B00]/35 shadow-[0_0_30px_rgba(255,91,0,0.2)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#FF5B00]/30 to-transparent blur-md" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">Start Your Procurement</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Ready To Get That
              <br />
              <span className="text-[#FF5B00]">Project Done?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base text-slate-600 mt-4 max-w-lg leading-relaxed font-normal">
              Partner with Santoshi Metal Industries for precision powder coating, high-durability anodising, casting ingots, and nationwide supply.
            </p>

            {/* Action Button */}
            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request a Quotation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-slate-400 font-medium mt-6">
              Ganjam, Odisha • CIN: U24202OD2026PTC055660
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
