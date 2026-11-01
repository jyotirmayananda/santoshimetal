"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Train, Cpu, Car, Zap, Wrench } from "lucide-react";
import { industriesData } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  "architecture-construction": Building2,
  infrastructure: Train,
  "industrial-manufacturing": Cpu,
  "automotive-components": Car,
  "electrical-engineering": Zap,
  fabrication: Wrench,
};

export default function IndustriesGrid() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0B0F17] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#FF5B00]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
                Application Sectors &amp; Supply Scope
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              Industries
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
                We Empower.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed font-normal">
              High-precision aluminium profiles, protective Qualicoat surface finishes, and virgin foundry ingots tailored for demanding Indian &amp; global manufacturing sectors.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FF8A3D] hover:text-[#FF5B00] transition-colors self-start md:self-end group"
          >
            <span>Inquire for Your Sector</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesData.map((item, idx) => {
            const Icon = iconMap[item.id] || Building2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx, duration: 0.5 }}
                className="group relative p-8 rounded-2xl bg-[#0E1420] border border-white/[0.08] hover:border-[#FF5B00]/40 transition-all duration-400 flex flex-col justify-between shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Glowing corner on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5B00]/[0.04] rounded-bl-full pointer-events-none group-hover:bg-[#FF5B00]/[0.1] transition-colors duration-500" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FF5B00]/10 text-[#FF8A3D] border border-[#FF5B00]/25 flex items-center justify-center group-hover:bg-[#FF5B00] group-hover:text-white transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#FF8A3D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Typical Applications preview */}
                  <div className="pt-3 border-t border-white/[0.08] space-y-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                      Target Applications:
                    </span>
                    <ul className="space-y-1.5">
                      {item.applications.slice(0, 2).map((app, appIdx) => (
                        <li
                          key={appIdx}
                          className="text-[11px] text-slate-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00]" />
                          <span className="truncate">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    SECTOR // 0{idx + 1}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-slate-300 group-hover:text-[#FF8A3D] font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[11px] font-mono text-slate-400">
            *Target industrial applications represent potential metalworking use cases based on alloy performance characteristics and Qualicoat specifications.
          </p>
        </div>
      </div>
    </section>
  );
}