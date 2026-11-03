import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/services';

export function RelatedCapabilities({ currentSlug }: { currentSlug: string }) {
  const related = servicesData.filter((s) => s.slug !== currentSlug).slice(0, 4);
  if (!related.length) return null;

  return (
    <section className="py-16 border-t border-brand-border/60 bg-brand-ice/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight">
          Related Aluminium Capabilities
        </h2>
        <p className="mt-2 text-sm text-brand-text-secondary max-w-2xl">
          Explore related offerings from Santoshi Metal Industries across metal supply and surface
          finishing.
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((service) => (
            <li key={service.id}>
              <Link
                href={`/capabilities/${service.slug}`}
                className="group flex items-start justify-between gap-3 h-full p-4 rounded-2xl bg-white border border-brand-border hover:border-brand-blue/40 hover:shadow-subtle transition-all"
              >
                <div>
                  <div className="font-heading font-bold text-sm text-brand-navy group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </div>
                  <p className="mt-1 text-xs text-brand-text-secondary line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue shrink-0 mt-0.5 transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
