export interface GalleryItem {
  id: string;
  title: string;
  category: "powder-coating" | "anodising" | "ingots" | "profiles" | "processing";
  categoryLabel: string;
  description: string;
  aspect: "landscape" | "portrait" | "square";
  demonstrationNotice: string;
  colorHex?: string;
  gradient: string;
  image?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Automated Electrostatic Powder Coating Deposition",
    category: "powder-coating",
    categoryLabel: "Powder Coating",
    description: "Multi-axis electrostatic polymer deposition showing uniform edge coverage and micro-textured architectural finish.",
    aspect: "landscape",
    demonstrationNotice: "Illustrative material visual pending custom client production photographs.",
    colorHex: "#1E242B",
    gradient: "from-[#101820] via-[#1E293B] to-[#0A0E13]",
    image: "/images/products/powder-coating-process.webp",
  },
  {
    id: "gal-2",
    title: "Electrolytic Sulphuric Acid Anodising Bath",
    category: "anodising",
    categoryLabel: "Anodising",
    description: "Macrophotography showing natural aluminium crystalline oxide layer with fine brushed satin grain and zero flaking.",
    aspect: "portrait",
    demonstrationNotice: "Demonstration render of electrochemical surface oxide structure.",
    colorHex: "#94A3B8",
    gradient: "from-[#64748B] via-[#475569] to-[#1E293B]",
    image: "/images/products/anodising-surface.webp",
  },
  {
    id: "gal-3",
    title: "Stacked Primary Aluminium Foundry Ingots (99.7%)",
    category: "ingots",
    categoryLabel: "Ingots",
    description: "Precision-cast standardized aluminium ingots with smooth mold surfaces stacked and strapped for industrial dispatch.",
    aspect: "square",
    demonstrationNotice: "Illustrative foundry ingot geometry representation.",
    colorHex: "#CBD5E1",
    gradient: "from-[#334155] via-[#1E293B] to-[#0F172A]",
    image: "/images/products/stacked-ingots.webp",
  },
  {
    id: "gal-4",
    title: "Precision Sliced Extrusion Monolith & Chamber",
    category: "anodising",
    categoryLabel: "Precision Billet",
    description: "SMI 6063-T6 sliced extrusion cylinder with radial cooling fins and thermal core.",
    aspect: "portrait",
    demonstrationNotice: "Simulated architectural anodising color tone standard.",
    colorHex: "#C6924D",
    gradient: "from-[#9B6C2F] via-[#785323] to-[#19344B]",
    image: "/images/products/anodising-surface.webp",
  },
  {
    id: "gal-5",
    title: "High-Temperature Crucible Molten Aluminium Pour",
    category: "processing",
    categoryLabel: "Foundry Pour",
    description: "700°C molten aluminium pouring into precision ingot casting moulds with incandescent thermal radiance.",
    aspect: "landscape",
    demonstrationNotice: "Conceptual manufacturing workflow illustration.",
    colorHex: "#1E3A8A",
    gradient: "from-[#1E3A8A] via-[#172554] to-[#101820]",
    image: "/images/products/furnace-casting-pour.webp",
  },
  {
    id: "gal-6",
    title: "Architectural T-Slot, Heat-Sink & Hollow Extrusions",
    category: "profiles",
    categoryLabel: "Profiles",
    description: "High-precision geometric hollow and solid profiles engineered for curtain wall mullions and modular framing.",
    aspect: "square",
    demonstrationNotice: "Demonstration profile geometry portfolio.",
    colorHex: "#64748B",
    gradient: "from-[#475569] via-[#334155] to-[#1E293B]",
    image: "/images/products/aluminium-warehouse-supply.webp",
  },
  {
    id: "gal-7",
    title: "Aluminium Logistics & Warehouse Stock Racking",
    category: "profiles",
    categoryLabel: "Supply & Logistics",
    description: "Cantilever high-bay racking storing protective-wrapped aluminium bundles ready for national transit.",
    aspect: "landscape",
    demonstrationNotice: "Strategic warehouse logistics demonstration.",
    colorHex: "#0F172A",
    gradient: "from-[#0F172A] via-[#1E293B] to-[#0A0E14]",
    image: "/images/products/aluminium-warehouse-supply.webp",
  },
  {
    id: "gal-8",
    title: "Structural Aluminium Curtain Wall Facade Grid",
    category: "profiles",
    categoryLabel: "Architectural",
    description: "Modern architectural high-rise glazing grid engineered with powder-coated and anodised aluminium mullions.",
    aspect: "landscape",
    demonstrationNotice: "Architectural engineering visualization.",
    colorHex: "#0284C7",
    gradient: "from-[#0284C7] via-[#0369A1] to-[#0C4A6E]",
    image: "/images/products/architectural-facade.webp",
  },
];
