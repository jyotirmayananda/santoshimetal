"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Building2, UserCheck, Check } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function BrandIntro() {
  return (
    <section id="about-intro" className="relative w-full py-24 sm:py-32 bg-[#F9FAFB] text-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Think Less About Tolerances.
            <br />
            <span className="text-[#FF5B00]">Focus More On The Project.</span>
          </h2>
        </div>

        {/* 3 Large WorkBolt Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Official Corporate Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF5B00]">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Government Registered
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Incorporated on 28 September 2026 under the Ministry of Corporate Affairs, Government of India.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">CIN:</span>
                  <span className="font-bold text-slate-900">{companyInfo.cin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Active & Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span>Ganjam, Odisha</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF5B00] hover:text-[#E04F00] transition-colors"
              >
                <span>Read Company Overview</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Governing Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF5B00]">
                <UserCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Executive Leadership
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Governed by directors with direct operational oversight and deep commercial roots across Ganjam and Odisha.
              </p>

              {/* Directors Photos & Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="relative w-14 h-14 mx-auto rounded-full overflow-hidden mb-2 border border-slate-200">
                    <Image
                      src="/images/leadership/kumuda-chandra-sahu.webp"
                      alt="Sri Kumuda Chandra Sahu"
                      fill
                      sizes="56px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Sri Kumuda C. Sahu
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                    Director
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                  <div className="relative w-14 h-14 mx-auto rounded-full overflow-hidden mb-2 border border-slate-200">
                    <Image
                      src="/images/leadership/bikranta-sahu.webp"
                      alt="Bikranta Sahu"
                      fill
                      sizes="56px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Bikranta Sahu
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                    Director
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF5B00] hover:text-[#E04F00] transition-colors"
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
            className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF5B00]">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Precision Capabilities
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Integrated manufacturing capabilities engineered for commercial and architectural clients nationwide.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                  <span>Aluminium Powder Coating (Qualicoat standard)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                  <span>Aluminium Anodising (Natural & Bronze tones)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                  <span>Aluminium Ingot Manufacturing (99.7% virgin)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                  <span>Aluminium Sales & Raw Material Supply</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href="/capabilities"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF5B00] hover:text-[#E04F00] transition-colors"
              >
                <span>View Full Technical Specs</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
