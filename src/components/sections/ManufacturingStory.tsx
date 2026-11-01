'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { manufacturingStoryStages } from '@/data/manufacturingStory';
import { ArrowRight, CheckCircle2, ChevronRight, Info, Compass } from 'lucide-react';
import Link from 'next/link';

export function ManufacturingStory() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = manufacturingStoryStages[activeStageIndex];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
            FROM MATERIAL <br />
            <span className="text-brand-blue">TO POSSIBILITY.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Our step-by-step approach ensures that every aluminium profile, ingot, and coated element
            meets strict metallurgical, aesthetic, and dimensional standards.
          </p>
        </div>

        {/* Desktop Stepped Navigation Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10 pb-4 border-b border-brand-border">
          {manufacturingStoryStages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-3.5 rounded-xl transition-all relative ${
                  isActive
                    ? 'bg-brand-ice border-brand-blue shadow-subtle'
                    : 'hover:bg-slate-50 border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-brand-blue' : 'text-slate-400'
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-blue" />}
                </div>
                <div
                  className={`font-heading text-sm font-bold leading-tight ${
                    isActive ? 'text-brand-navy' : 'text-slate-600'
                  }`}
                >
                  {stage.title}
                </div>

                {/* Animated active underline */}
                {isActive && (
                  <motion.div
                    layoutId="storyActiveIndicator"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-brand-blue"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Display (Desktop & Tablet) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Dynamic Large Image Display (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-elevated border border-brand-border bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.step}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentStage.image}
                    alt={currentStage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

                  {/* Caption on Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                      {currentStage.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
                      {currentStage.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Stage Details & Milestones (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-blue block mb-1">
                    Process Phase {currentStage.step}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
                    {currentStage.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-blue-hover uppercase tracking-wider mt-0.5">
                    {currentStage.subtitle}
                  </p>
                </div>

                <p className="text-base text-brand-text-secondary leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Key Deliverables:
                  </div>
                  {currentStage.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 text-xs text-brand-text p-2.5 rounded-lg bg-brand-ice border border-brand-border/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Illustrative Note */}
            <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <span>
                Illustrative workflow outline representing standard operating quality protocols.
                Actual client batch workflows are tailored according to engineering drawings and
                alloys.
              </span>
            </div>

            {/* Stage Navigation on Mobile */}
            <div className="flex lg:hidden items-center justify-between pt-4 border-t border-slate-200">
              <button
                onClick={() =>
                  setActiveStageIndex(
                    (prev) => (prev - 1 + manufacturingStoryStages.length) % manufacturingStoryStages.length
                  )
                }
                className="px-4 py-2 rounded-lg bg-slate-100 text-xs font-bold text-brand-navy"
              >
                ← Previous Stage
              </button>
              <span className="text-xs font-mono font-semibold text-brand-text-secondary">
                {activeStageIndex + 1} / {manufacturingStoryStages.length}
              </span>
              <button
                onClick={() =>
                  setActiveStageIndex((prev) => (prev + 1) % manufacturingStoryStages.length)
                }
                className="px-4 py-2 rounded-lg bg-brand-navy text-white text-xs font-bold"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

