import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Home } from 'lucide-react';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Page Not Found',
  description: 'The page you requested could not be found on Santoshi Metal Industries.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="pt-28 pb-24 bg-white min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
          Error 404
        </p>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight">
          PAGE NOT FOUND
        </h1>
        <p className="mt-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
          The page you are looking for may have moved or no longer exists. Explore our aluminium
          capabilities or return home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-ice text-brand-navy text-sm font-semibold border border-brand-border hover:bg-slate-100 transition-colors"
          >
            <span>View Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
