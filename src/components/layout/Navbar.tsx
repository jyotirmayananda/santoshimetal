"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo layout="horizontal" height={38} variant="dark" />

          {/* Center Floating Pill Navigation (Matching Screenshot) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-white/95 border border-slate-200/80 shadow-sm backdrop-blur-md">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-full",
                        isActive
                          ? "bg-[#FF5B00] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {/* Capabilities Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 w-80 p-2 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-900/5 overflow-hidden"
                        >
                          <div className="p-2.5 border-b border-slate-100 mb-1 flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#FF5B00] uppercase tracking-wider">
                              Our Capabilities
                            </span>
                            <Link
                              href="/capabilities"
                              className="text-xs text-slate-500 hover:text-[#FF5B00] flex items-center gap-1 font-medium"
                            >
                              <span>Overview</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="space-y-1">
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={cn(
                                  "group/sub flex items-start gap-3 p-2.5 rounded-xl transition-all",
                                  pathname === subItem.href
                                    ? "bg-orange-50 text-[#FF5B00]"
                                    : "hover:bg-slate-50 text-slate-700"
                                )}
                              >
                                <span className="font-semibold text-xs text-[#FF5B00] mt-0.5">
                                  {subItem.index}
                                </span>
                                <div>
                                  <div className="text-sm font-semibold flex items-center gap-1 group-hover/sub:text-[#FF5B00] transition-colors">
                                    <span>{subItem.label}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                  </div>
                                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all rounded-full",
                    isActive
                      ? "bg-[#FF5B00] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons (Matching Screenshot) */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-block text-sm font-medium text-slate-600 hover:text-[#FF5B00] px-3 py-2 transition-colors"
            >
              Enquiry
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 active:scale-95"
            >
              <span>Get a Quote</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FF5B00]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 overflow-y-auto px-6 pt-24 pb-12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <Logo layout="horizontal" height={36} />
              </div>

              <div className="space-y-3">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-xl font-bold block py-2 transition-colors",
                        pathname === item.href
                          ? "text-[#FF5B00]"
                          : "text-slate-900 hover:text-[#FF5B00]"
                      )}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <div className="pl-4 mt-2 space-y-2 border-l border-slate-200">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-slate-600 hover:text-[#FF5B00] py-1 font-medium"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full text-center text-sm font-semibold text-white bg-[#FF5B00] block shadow-lg shadow-orange-500/20"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
