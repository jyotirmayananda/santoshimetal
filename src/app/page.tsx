import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import CapabilitiesShowcase from "@/components/sections/CapabilitiesShowcase";
import PowderCoatingFeature from "@/components/sections/PowderCoatingFeature";
import AnodisingSection from "@/components/sections/AnodisingSection";
import IngotShowcase from "@/components/sections/IngotShowcase";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import QualitySection from "@/components/sections/QualitySection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CapabilitiesShowcase />
      <PowderCoatingFeature />
      <AnodisingSection />
      <IngotShowcase />
      <ProcessTimeline />
      <IndustriesGrid />
      <QualitySection />
      <GalleryPreview />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
