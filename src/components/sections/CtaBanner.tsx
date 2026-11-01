"use client";

import Link from "next/link";
import { ChevronRight, ArrowUpRight, Flame } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#07090E] overflow-hidden text-center border-t border-white/[0.08]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Concentric Orange Radiant Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161F30] via-[#0E1420] to-[#07090E] border border-white/[0.12] p-12 sm:p-20 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          {/* Radiant Semi-Circle Rings Graphic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-[#FF5B00]/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full border border-[#FF5B00]/20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full border-2 border-[#FF5B00]/30 shadow-[0_0_30px_rgba(255,91,0,0.2)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full bg-gradient-to-b from-[#FF5B00]/25 to-transparent blur-md" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
                <Flame className="w-3.5 h-3.5" />
                Precision Aluminium Procurement
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              Ready To Engineer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
                Your Next Milestone?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 mt-5 max-w-lg leading-relaxed font-normal">
              Partner with Santoshi Metal Industries for precision architectural powder coating, high-durability anodising, 99.7% virgin ingots, and nationwide supply.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all duration-200 shadow-[0_0_30px_rgba(255,91,0,0.35)] hover:shadow-[0_0_45px_rgba(255,91,0,0.55)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request Commercial Quotation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/capabilities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
              >
                <span>View Full Specifications</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-[11px] font-mono text-slate-400 mt-8">
              Ganjam, Odisha • MCA CIN: U24202OD2026PTC055660 • Qualicoat &amp; ASTM B179
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}