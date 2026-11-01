"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("smi_preloader_viewed");
    if (hasLoaded) {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("smi_preloader_viewed", "true");
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-slate-900 select-none"
        >
          {/* Animated subtle ambient rays */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5B00] to-transparent"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Official 3D Metallic Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 mb-5 relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[#FF5B00]/20 rounded-full blur-xl animate-pulse" />
              <Image
                src="/images/logo/logo-emblem.png"
                alt="Santoshi Metal Industries"
                width={80}
                height={80}
                className="w-20 h-20 object-contain relative z-10 drop-shadow-md"
                priority
              />
            </motion.div>

            {/* Wordmark */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-sm font-bold tracking-tight text-slate-900 mb-1"
            >
              Santoshi Metal Industries
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-xs text-[#FF5B00] font-semibold mb-6"
            >
              Engineering Aluminium
            </motion.p>

            {/* Progress Bar & Percentage */}
            <div className="w-48 h-1.5 bg-slate-100 relative overflow-hidden rounded-full mb-2 border border-slate-200">
              <motion.div
                className="h-full bg-[#FF5B00]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between w-48 text-[11px] font-semibold text-slate-400">
              <span>Loading System</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
