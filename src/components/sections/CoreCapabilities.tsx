'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesData } from '@/data/services';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import { easeOutExpo, viewportOnce } from '@/lib/motion';

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-brand-ice relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16 sm:mb-24" direction="blur">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
            OUR EXPERTISE. <br />
            <span className="text-brand-blue">YOUR POSSIBILITIES.</span>
          </h2>
          <p className="mt-4 text-lg text-brand-text-secondary leading-relaxed">
            Focused on Aluminium Ingot, Aluminium Profile, Scrap &amp; Supply, Powder Coating, and
            Anodising—metal, feedstock, and finish for modern industrial manufacturing.
          </p>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                <motion.div
                  className={`lg:col-span-6 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  initial={{ opacity: 0, x: isEven ? -56 : 56, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8, ease: easeOutExpo }}
                >
                  <motion.div
                    className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-white group"
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                  >
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-80" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-silver mb-1">
                        Capability 0{index + 1}
                      </div>
                      <div className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {service.title}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, x: isEven ? 48 : -48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.75, delay: 0.12, ease: easeOutExpo }}
                >
                  <motion.div
                    className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-brand-blue"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>{service.headline}</span>
                  </motion.div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <Stagger className="space-y-3 pt-2" fast>
                    {service.features.slice(0, 3).map((feature, fIndex) => (
                      <StaggerItem key={fIndex}>
                        <li className="flex items-start gap-3 text-sm text-brand-text list-none">
                          <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  <div className="pt-4">
                    <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <Link
                        href={`/capabilities/${service.slug}`}
                        className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-sm border-2 border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-subtle"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
