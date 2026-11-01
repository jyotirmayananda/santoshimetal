"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What are the core business activities of Santoshi Metal Industries?",
    answer:
      "Santoshi Metal Industries Private Limited specializes in four core business activities: Aluminium Powder Coating, Aluminium Anodising, Aluminium Ingot Manufacturing and Supply, and Aluminium Sales & Raw Material Supply.",
  },
  {
    question: "What standards are targeted for your powder coating and anodising finishes?",
    answer:
      "Our operations target international Qualicoat Class 1 & 2 standards for powder coating with 60–80 micron dry-film thickness, and architectural anodising with 15–25 micron oxide layer thickness to ensure maximum UV and corrosion resistance.",
  },
  {
    question: "What purity specifications do your foundry aluminium ingots satisfy?",
    answer:
      "Our aluminium ingots are cast to 99.7% virgin aluminium purity standards complying with ASTM B179 specifications, subjected to degassing to ensure low porosity for downstream die-casting and extrusion.",
  },
  {
    question: "Where is the company incorporated and where is the registered office located?",
    answer:
      "Santoshi Metal Industries Private Limited was incorporated on 28 September 2026 (CIN: U24202OD2026PTC055660) with its registered office at C/O Kumud Chandra Sahu, Annapurna Bazar, Kabisuryanagar, Kodala, Ganjam, Odisha, India – 761104.",
  },
  {
    question: "How can procurement managers and industrial fabricators request a quotation?",
    answer:
      "Commercial buyers can request quotations directly through our online enquiry form, by visiting our office in Ganjam, Odisha, or by emailing our sales desk for customized specifications and volume delivery schedules.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-24 sm:py-32 bg-[#F9FAFB] text-slate-900 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matching Screenshot: "Everything You Need To Know Before Getting Started") */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Everything You Need To Know
            <br />
            <span className="text-[#FF5B00]">Before Partnering With Us</span>
          </h2>

          <p className="text-base text-slate-600 mt-4 leading-relaxed font-normal max-w-xl mx-auto">
            Answers to common questions asked by industrial fabricators, architects, and procurement managers.
          </p>
        </div>

        {/* Clean Accordion Pills (Matching Screenshot FAQ Pills) */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl transition-all duration-200 border bg-white overflow-hidden shadow-xs",
                  isOpen ? "border-orange-200 shadow-sm" : "border-slate-200/80 hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center transition-all shrink-0",
                      isOpen ? "bg-[#FF5B00] text-white rotate-90" : "bg-slate-100 text-slate-500"
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
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
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
