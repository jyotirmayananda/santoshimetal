"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { companyInfo } from "@/data/company";
import { servicesData } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#111827] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Left Column: Brand & Corporate Details (6 cols) */}
          <div className="md:col-span-6 space-y-5">
            <Logo layout="horizontal" height={36} variant="light" />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              {companyInfo.name} — Modern industrial aluminium manufacturing, powder coating, anodising, foundry ingots, and supply.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/capabilities"
                className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors"
              >
                Explore &rarr;
              </Link>
            </div>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>CIN: {companyInfo.cin} (Govt. of India MCA)</p>
              <p>Incorporated: {companyInfo.incorporationDate}</p>
            </div>
          </div>

          {/* Middle Column: Capabilities (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
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

          {/* Right Column: Office & Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Registered Office
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              C/O Kumud Chandra Sahu, Annapurna Bazar, Kabisuryanagar, Kodala, Ganjam, Odisha, India – 761104
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="text-slate-400">
                <strong className="text-slate-300">Directors:</strong> Sri Kumuda Chandra Sahu, Bikranta Sahu
              </div>
              <div className="text-slate-400">
                <strong className="text-slate-300">Enquiries:</strong> info@santoshimetal.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              About
            </Link>
            <Link href="/capabilities" className="hover:text-slate-400 transition-colors">
              Capabilities
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
