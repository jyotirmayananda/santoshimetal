import Link from "next/link";
import { Home, Layers, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101820] text-[#F8FAFC] flex items-center justify-center px-4 pt-24 pb-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#19344B]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl text-center space-y-8">
        <div className="flex justify-center">
          <Logo layout="horizontal" height={38} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-[#C6924D]">
          404 Error • Page Uncharted
        </div>

        <h1 className="text-7xl sm:text-9xl font-black uppercase tracking-tighter text-white font-sans leading-none">
          4<span className="text-[#C6924D]">0</span>4
        </h1>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
            SPECIFICATION NOT LOCATED
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md mx-auto">
            The page or aluminium specification you requested does not exist or may have been repositioned within our manufacturing catalog.
          </p>
        </div>

        {/* Quick Link Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase font-mono tracking-wider text-white transition-colors"
          >
            <Home className="w-4 h-4 text-[#C6924D]" />
            <span>Homepage</span>
          </Link>

          <Link
            href="/capabilities"
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase font-mono tracking-wider text-white transition-colors"
          >
            <Layers className="w-4 h-4 text-[#C6924D]" />
            <span>Capabilities</span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-[#DFAC6C] via-[#C6924D] to-[#B37E38] text-xs uppercase font-mono tracking-wider text-[#101820] font-bold transition-all shadow-lg shadow-[#C6924D]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
