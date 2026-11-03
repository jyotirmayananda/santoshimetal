'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Factory, Car, Zap, Wrench, Landmark } from 'lucide-react';
import { industriesData } from '@/data/industries';
import { Reveal, HoverLift } from '@/components/motion/Reveal';
import { easeOutExpo, viewportOnce } from '@/lib/motion';

export function IndustriesGrid() {
  const industryIcons: Record<string, React.ReactNode> = {
    'architecture-construction': <Building className="w-5 h-5 text-brand-blue" />,
    'infrastructure': <Landmark className="w-5 h-5 text-brand-blue" />,
    'industrial-manufacturing': <Factory className="w-5 h-5 text-brand-blue" />,
    'automotive-components': <Car className="w-5 h-5 text-brand-blue" />,
    'electrical-engineering': <Zap className="w-5 h-5 text-brand-blue" />,
    'fabrication': <Wrench className="w-5 h-5 text-brand-blue" />,
  };

  return (
    <section id="industries" className="py-24 sm:py-32 bg-brand-ice relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-brand-navy/5 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16" direction="blur">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
            ALUMINIUM FOR <br />
            <span className="text-brand-blue">EVERY AMBITION.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Our aluminium coating, remelt foundry ingots, and profile supply solutions are engineered
            to power diverse structural, mechanical, and architectural sectors across India.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: easeOutExpo }}
            >
              <HoverLift className="h-full">
                <div className="group relative bg-white rounded-3xl overflow-hidden border border-brand-border shadow-subtle hover:shadow-elevated transition-shadow duration-500 flex flex-col h-[420px]">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />

                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md shadow-subtle flex items-center gap-2">
                      {industryIcons[item.id]}
                      <span className="text-[11px] font-bold text-brand-navy font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-silver">
                        {item.tagline}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-navy group-hover:text-brand-blue transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-brand-text-secondary leading-relaxed mt-2 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                      <span>Explore Sector Scope</span>
                      <div className="w-8 h-8 rounded-full bg-brand-ice flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </HoverLift>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12 text-center text-xs text-brand-text-secondary" delay={0.15}>
          Target applications representing metallurgical engineering capability. Specific alloy
          tempers and profile dies engineered to order.
        </Reveal>
      </div>
    </section>
  );
}
