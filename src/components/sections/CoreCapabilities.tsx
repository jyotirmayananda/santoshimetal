'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesData } from '@/data/services';

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-brand-ice relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
            OUR EXPERTISE. <br />
            <span className="text-brand-blue">YOUR POSSIBILITIES.</span>
          </h2>
          <p className="mt-4 text-lg text-brand-text-secondary leading-relaxed">
            Delivering high-performance surface treatments, pure foundry alloys, and comprehensive
            aluminium stock distribution designed for modern industrial manufacturing.
          </p>
        </div>

        {/* Four Large Alternating Service Showcases */}
        <div className="space-y-20 sm:space-y-28">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Image Half */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-white group">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-80" />

                    {/* Caption at bottom of image */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-silver mb-1">
                        Industrial Surface Engineering
                      </div>
                      <div className="font-heading font-bold text-xl sm:text-2xl text-white">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Half */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2">
                    <span>{service.headline}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-navy tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 pt-2">
                    {service.features.slice(0, 3).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-brand-text">
                        <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href={`/capabilities/${service.slug}`}
                      className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-sm border-2 border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-subtle"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

