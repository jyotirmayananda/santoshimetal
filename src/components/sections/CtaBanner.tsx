'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { Reveal, MagneticButton } from '@/components/motion/Reveal';
import { easeOutExpo, viewportOnce } from '@/lib/motion';

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-brand-ice to-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl bg-white border border-brand-border p-8 sm:p-14 lg:p-16 shadow-elevated overflow-hidden"
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          <motion.div
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-brand-silver/30 blur-3xl pointer-events-none"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 max-w-3xl">
            <Reveal direction="blur">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.08]">
                ENGINEERING ALUMINIUM. <br />
                <span className="text-brand-blue">SHAPING THE FUTURE.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-base sm:text-xl text-brand-text-secondary leading-relaxed">
                Whether you require precision architectural powder coating, electrolytic anodised
                finishes, high-purity foundry remelt ingots, or dependable profile stock supply, our
                team is prepared to review your requirements.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-navy text-white text-base font-semibold shadow-subtle hover:bg-brand-blue transition-all duration-300"
                >
                  <span>Request a Technical Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand-ice text-brand-navy text-base font-semibold border border-brand-border hover:bg-slate-100 transition-colors"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </MagneticButton>
            </Reveal>

            <Reveal
              delay={0.28}
              className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-brand-text-secondary font-mono"
            >
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
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
