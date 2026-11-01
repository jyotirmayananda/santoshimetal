"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What are the core business activities of Santoshi Metal Industries?",
    answer:
      "Santoshi Metal Industries Private Limited operates four primary industrial verticals: Architectural Aluminium Powder Coating (Qualicoat standard), Architectural & Industrial Anodising, High-Purity Aluminium Ingot Manufacturing (ASTM B179 standard), and Strategic Aluminium Billet / Profile Supply.",
  },
  {
    question: "What standards are targeted for your powder coating and anodising finishes?",
    answer:
      "Our operations target international Qualicoat Class 1 & 2 standards for powder coating with 60–80 micron dry-film thickness, and architectural anodising with 15–25 micron oxide layer thickness to ensure maximum UV, abrasion, and marine corrosion resistance.",
  },
  {
    question: "What purity specifications do your foundry aluminium ingots satisfy?",
    answer:
      "Our foundry aluminium ingots are cast to 99.7% virgin aluminium purity complying with ASTM B179 specifications. All melts undergo rotary impeller degassing to maintain minimal hydrogen and porosity for downstream high-pressure die-casting and precision extrusion.",
  },
  {
    question: "Where is the company incorporated and where is the registered office located?",
    answer:
      "Santoshi Metal Industries Private Limited was incorporated on 28 September 2026 (CIN: U24202OD2026PTC055660) under the Ministry of Corporate Affairs (MCA), Government of India. The registered office is located at C/O Kumud Chandra Sahu, Annapurna Bazar, Kabisuryanagar, Kodala, Ganjam, Odisha, India – 761104.",
  },
  {
    question: "How can procurement managers and industrial fabricators request a quotation?",
    answer:
      "Commercial buyers can submit technical specifications, CAD drawings, or estimated tonnages directly via our online enquiry portal, contact our registered office in Ganjam, Odisha, or email our sales desk at info@santoshimetal.com for formal quotes within 24 business hours.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-28 sm:py-36 bg-[#07090E] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF5B00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
              <HelpCircle className="w-3 h-3" />
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Everything You Need To Know
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              Before Partnering With Us
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed font-normal max-w-xl mx-auto">
            Technical clarity for industrial fabricators, architects, procurement officers, and automotive casters.
          </p>
        </div>

        {/* Clean Dark Glass Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl transition-all duration-300 border bg-[#0E1420] overflow-hidden shadow-lg",
                  isOpen
                    ? "border-[#FF5B00]/40 shadow-[0_0_30px_rgba(255,91,0,0.1)]"
                    : "border-white/[0.08] hover:border-white/[0.16]"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base cursor-pointer tracking-wide"
                >
                  <span className={cn(isOpen ? "text-[#FF8A3D]" : "text-white")}>
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 border",
                      isOpen
                        ? "bg-[#FF5B00] text-white border-[#FF5B00] rotate-90 shadow-[0_0_15px_rgba(255,91,0,0.5)]"
                        : "bg-white/[0.05] text-slate-400 border-white/10"
                    )}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-normal border-t border-white/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}