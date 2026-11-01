'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Phone,
  Sparkles,
  Layers,
  CircleDot,
  Boxes,
  Truck,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { navigationLinks } from '@/data/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setCapabilitiesOpen(false);
  }, [pathname]);

  const capabilityIcons: Record<string, React.ReactNode> = {
    'Aluminium Powder Coating': <Sparkles className="w-4 h-4 text-brand-blue" />,
    'Aluminium Anodising': <Layers className="w-4 h-4 text-brand-navy" />,
    'Aluminium Ingots': <Boxes className="w-4 h-4 text-brand-blue" />,
    'Aluminium Sales & Supply': <Truck className="w-4 h-4 text-brand-navy" />,
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-3.5 shadow-subtle border-b border-brand-border/60'
            : 'bg-white/70 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <BrandLogo />

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigationLinks.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setCapabilitiesOpen(true)}
                      onMouseLeave={() => setCapabilitiesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                          isActive
                            ? 'text-brand-blue bg-brand-blue-light/50'
                            : 'text-brand-text hover:text-brand-navy hover:bg-slate-100/70'
                        }`}
                        aria-expanded={capabilitiesOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            capabilitiesOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                          }`}
                        />
                      </button>

                      {/* Capabilities Mega-Dropdown */}
                      <AnimatePresence>
                        {capabilitiesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 mt-2 w-[440px] bg-white rounded-2xl shadow-elevated border border-brand-border p-3 grid gap-1.5 z-50"
                          >
                            <div className="px-3 py-2 border-b border-slate-100 mb-1">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                                Manufacturing & Processing Capabilities
                              </span>
                            </div>
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-brand-ice transition-colors"
                              >
                                <div className="mt-0.5 p-2 rounded-lg bg-white shadow-subtle border border-slate-100 group-hover:border-brand-blue/30 group-hover:scale-105 transition-all">
                                  {capabilityIcons[child.label] || (
                                    <CircleDot className="w-4 h-4 text-brand-blue" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-brand-text group-hover:text-brand-navy transition-colors">
                                      {child.label}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-xs text-brand-text-secondary mt-0.5 line-clamp-1">
                                    {child.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? 'text-brand-navy'
                        : 'text-brand-text hover:text-brand-navy hover:bg-slate-100/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-sm font-semibold shadow-subtle overflow-hidden hover:bg-brand-blue transition-all duration-300"
              >
                <span className="relative z-10">Request a Quote</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-brand-blue to-brand-navy transition-transform duration-500 ease-out" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-navy text-white hover:bg-brand-blue transition-colors"
              >
                Quote
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-brand-text hover:text-brand-navy hover:bg-slate-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Animated Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-slate-200"
          >
            <div className="space-y-6">
              {/* Brand Logo in Mobile Drawer */}
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <BrandLogo size="sm" />
              </div>

              <div className="space-y-2">
                {navigationLinks.map((link, index) => {
                  const isActive =
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                  if (link.children) {
                    return (
                      <div key={link.label} className="py-2 border-b border-slate-100">
                        <div className="font-heading font-bold text-lg text-brand-navy mb-2 flex items-center justify-between">
                          <span>{link.label}</span>
                          <span className="text-xs uppercase tracking-wider text-brand-blue font-semibold">
                            Core Services
                          </span>
                        </div>
                        <div className="pl-3 space-y-2.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-between py-1.5 text-brand-text hover:text-brand-blue transition-colors"
                            >
                              <span className="text-sm font-semibold">{child.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-lg font-heading font-bold border-b border-slate-100 transition-colors ${
                          isActive ? 'text-brand-blue' : 'text-brand-navy'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-6 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-navy text-white font-semibold shadow-subtle hover:bg-brand-blue transition-colors"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-brand-text-secondary">
                CIN: U24202OD2026PTC055660 • Kabisuryanagar, Ganjam, Odisha
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

