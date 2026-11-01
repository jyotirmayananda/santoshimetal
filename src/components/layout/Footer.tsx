"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { companyInfo } from "@/data/company";
import { servicesData } from "@/data/services";
import { ArrowUpRight, ShieldCheck, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#05070B] text-slate-300 pt-20 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#FF5B00]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Left Column: Brand & Corporate Details (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Logo layout="horizontal" height={38} variant="light" />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              {companyInfo.name} — Modern industrial aluminium manufacturing, automated Qualicoat powder coating, architectural anodising, 99.7% virgin foundry ingots, and nationwide supply.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all shadow-[0_0_20px_rgba(255,91,0,0.3)]"
              >
                Request Quote
              </Link>
              <Link
                href="/capabilities"
                className="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors"
              >
                Capabilities &rarr;
              </Link>
            </div>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1.5 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>MCA Verified: {companyInfo.cin}</span>
              </div>
              <p>Incorporated: {companyInfo.incorporationDate} • Odisha, India</p>
            </div>
          </div>

          {/* Middle Column: Capabilities (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/capabilities/${service.slug}`}
                    className="text-slate-400 hover:text-[#FF5B00] transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title.replace("Aluminium ", "")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Office & Leadership (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Registered Office
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#FF5B00] shrink-0 mt-0.5" />
              <span>
                C/O Kumud Chandra Sahu, Annapurna Bazar, Kabisuryanagar, Kodala, Ganjam, Odisha, India – 761104
              </span>
            </div>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="text-slate-300">
                <span className="text-slate-400">Board Directors:</span> Sri Kumuda Chandra Sahu, Bikranta Sahu
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span className="text-slate-400">Enquiries:</span> info@santoshimetal.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Profile
            </Link>
            <Link href="/capabilities" className="hover:text-white transition-colors">
              Capabilities
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Technical Sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}