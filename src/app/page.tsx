import { HeroSection } from '@/components/hero/HeroSection';
import { CompanyIntro } from '@/components/sections/CompanyIntro';
import { CoreCapabilities } from '@/components/sections/CoreCapabilities';
import { FinishStudio } from '@/components/sections/FinishStudio';
import { PowderCoatingFeature } from '@/components/sections/PowderCoatingFeature';
import { AnodisingFeature } from '@/components/sections/AnodisingFeature';
import { IngotShowcase } from '@/components/sections/IngotShowcase';
import { ManufacturingStory } from '@/components/sections/ManufacturingStory';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata = {
  title: 'Santoshi Metal Industries | Engineering Aluminium. Shaping the Future.',
  description:
    'Santoshi Metal Industries Private Limited (CIN: U24202OD2026PTC055660) is an aluminium manufacturing, surface processing, and industrial supply enterprise in Odisha, India. Specializing in Aluminium Ingot, Aluminium Profile, Scrap & Supply, Powder Coating, and Anodising.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Signature Liquid Aluminium Hero Section */}
      <HeroSection />

      {/* 2. Company Introduction (Asymmetric Editorial) */}
      <CompanyIntro />

      {/* 3. Five Core Capabilities (Large Photo Showcase) */}
      <CoreCapabilities />

      {/* 4. Interactive Aluminium Finish Studio (3D Profile) */}
      <FinishStudio />

      {/* 5. Powder Coating Feature Section */}
      <PowderCoatingFeature />

      {/* 6. Anodising Feature Section (Split Screen + Carousel) */}
      <AnodisingFeature />

      {/* 7. Aluminium Ingot Showcase (3D Ingot Model + Metallurgy) */}
      <IngotShowcase />

      {/* 8. Manufacturing Story (5 Illustrative Workflow Stages) */}
      <ManufacturingStory />

      {/* 9. Industries We Serve (6 Application Sectors) */}
      <IndustriesGrid />

      {/* 10. Surface Gallery Preview */}
      <GalleryPreview />

      {/* 11. Final Conversion CTA Banner */}
      <CtaBanner />
    </div>
  );
}

