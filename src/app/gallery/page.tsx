import { Metadata } from 'next';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { Sparkles, Info } from 'lucide-react';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Surface Gallery | Santoshi Metal Industries Private Limited',
  description:
    'Visual library of architectural powder coating finishes, electrolytic anodised profiles, cast aluminium ingots, and extrusion processes.',
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Header */}
      <section className="bg-brand-ice py-16 sm:py-24 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-brand-navy tracking-tight leading-[1.08]">
              METALLIC EXCELLENCE <br />
              <span className="text-brand-blue">IN FOCUS.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-secondary leading-relaxed">
              Explore our comprehensive visual library showcasing electrostatic powder coatings,
              electrochemical anodised finishes, pure remelt ingots, and industrial extruded
              profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Filterable Gallery */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Information banner regarding demonstration photography */}
          <div className="mb-10 flex items-start gap-3 p-4 rounded-2xl bg-brand-ice border border-brand-border text-xs text-brand-text-secondary">
            <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>
              Demonstration library depicting visual standards for architectural powder coating,
              anodic oxide conversions, and foundry ingot geometries. Click any image to view
              full-screen high-resolution details with keyboard navigation.
            </span>
          </div>

          <GalleryGrid showFilters={true} />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

