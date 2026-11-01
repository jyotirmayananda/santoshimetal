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
    <section className="relative w-full py-28 sm:py-36 bg-[#F8FAFC] text-[#0F172A] border-t border-b border-slate-200 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF5B00] border border-orange-200/60">
                Application Sectors
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Industries
              <br />
              <span className="text-[#FF5B00]">We Serve.</span>
            </h2>

            <p className="text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Target industrial verticals and engineering domains engineered to leverage high-precision aluminium profiles, protective surface finishes, and foundry ingots.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5B00] hover:text-[#E04F00] transition-colors self-start md:self-end"
          >
            <span>Inquire for Your Sector</span>
            <ArrowUpRight className="w-4 h-4" />
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
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#C6924D] transition-all duration-400 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C6924D] border border-amber-200/50 flex items-center justify-center group-hover:bg-[#C6924D] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 group-hover:text-[#C6924D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Typical Applications preview */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                      Target Applications:
                    </span>
                    <ul className="space-y-1">
                      {item.applications.slice(0, 2).map((app, appIdx) => (
                        <li
                          key={appIdx}
                          className="text-[11px] text-slate-500 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C6924D]" />
                          <span className="truncate">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    Industrial Sector {idx + 1}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-slate-700 group-hover:text-[#C6924D] font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono text-slate-400">
            *Target industrial applications represent potential metalworking use cases based on alloy performance characteristics.
          </p>
        </div>
      </div>
    </section>
  );
}
