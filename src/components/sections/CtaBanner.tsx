'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Mail, Phone, Building2 } from 'lucide-react';
import { companyData } from '@/data/company';

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-brand-ice to-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-brand-border p-8 sm:p-14 lg:p-16 shadow-elevated overflow-hidden">
          {/* Subtle background metallic ambient light */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-brand-silver/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.08]">
              ENGINEERING ALUMINIUM. <br />
              <span className="text-brand-blue">SHAPING THE FUTURE.</span>
            </h2>

            <p className="mt-5 text-base sm:text-xl text-brand-text-secondary leading-relaxed">
              Whether you require precision architectural powder coating, electrolytic anodised
              finishes, high-purity foundry remelt ingots, or dependable profile stock supply, our
              team is prepared to review your requirements.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-navy text-white text-base font-semibold shadow-subtle hover:bg-brand-blue transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Request a Technical Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/capabilities"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-ice text-brand-navy text-base font-semibold border border-brand-border hover:bg-slate-100 transition-colors"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

            {/* Company Registration Trust Details */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-brand-text-secondary font-mono">
              <div>
                <span className="font-bold text-brand-navy">CIN:</span> {companyData.cin}
              </div>
              <div>•</div>
              <div>
                <span className="font-bold text-brand-navy">Incorporated:</span>{' '}
                {companyData.incorporationDate}
              </div>
              <div>•</div>
              <div>
                <span className="font-bold text-brand-navy">Location:</span> Ganjam, Odisha, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

