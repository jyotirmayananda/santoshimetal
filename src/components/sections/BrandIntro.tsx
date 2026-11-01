"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Building2, UserCheck, Check } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function BrandIntro() {
  return (
    <section id="about-intro" className="relative w-full py-24 sm:py-32 bg-[#0B0F17] text-white overflow-hidden border-t border-b border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A00] font-bold">
              Corporate Overview & Standards
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-sans">
            Engineered For Precision.
            <br />
            <span className="text-gradient-orange">Built On Metallurgical Integrity.</span>
          </h2>
        </div>

        {/* 3 Large Cinematic Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Official Corporate Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl hover:border-orange-500/40 transition-all duration-400 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF8A00] group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                  Government Registered
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">
                  Incorporated on 28 September 2026 under the Ministry of Corporate Affairs (MCA), Government of India.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08] text-xs font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">CIN:</span>
                  <span className="font-mono font-bold text-white tracking-wider">{companyInfo.cin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Active & Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">HQ Office:</span>
                  <span className="text-slate-300">Ganjam, Odisha – 761104</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A00] hover:text-[#FF5B00] transition-colors"
              >
                <span>Corporate Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Executive Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl hover:border-orange-500/40 transition-all duration-400 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF8A00] group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                  Executive Leadership
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">
                  Governed by directors with direct operational oversight and commercial industrial roots across Odisha.
                </p>
              </div>

              {/* Directors Photos & Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <div className="relative w-14 h-14 mx-auto rounded-full overflow-hidden mb-2 border-2 border-orange-500/30">
                    <Image
                      src="/images/leadership/kumuda-chandra-sahu.webp"
                      alt="Sri Kumuda Chandra Sahu"
                      fill
                      sizes="56px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-bold text-white block leading-tight">
                    Sri Kumuda C. Sahu
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    Director
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <div className="relative w-14 h-14 mx-auto rounded-full overflow-hidden mb-2 border-2 border-orange-500/30">
                    <Image
                      src="/images/leadership/bikranta-sahu.webp"
                      alt="Bikranta Sahu"
                      fill
                      sizes="56px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-bold text-white block leading-tight">
                    Bikranta Sahu
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    Director
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A00] hover:text-[#FF5B00] transition-colors"
              >
                <span>Meet Leadership</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: 4 Core Activities & Quality Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#0E1420]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl hover:border-orange-500/40 transition-all duration-400 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#FF8A00] group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                  Precision Standards
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-2">
                  Four synchronized manufacturing lines engineered to international architectural and automotive standards.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00] shrink-0" />
                  <span>Aluminium Powder Coating (Qualicoat Standard)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00] shrink-0" />
                  <span>Aluminium Anodising (Class 1 Architectural)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00] shrink-0" />
                  <span>99.7% Virgin Ingot Manufacturing (ASTM B179)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00] shrink-0" />
                  <span>Aluminium Sales & Raw Metal Distribution</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <Link
                href="/capabilities"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A00] hover:text-[#FF5B00] transition-colors"
              >
                <span>View Capabilities</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
