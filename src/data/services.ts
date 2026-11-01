export interface ServiceCapability {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline: string;
  subheadline: string;
  description: string;
  index: string;
  tagline: string;
  iconName: string;
  image: string;
  overview: string;
  technicalHighlights: string[];
  applications: string[];
  finishOptions?: { name: string; hex: string; desc: string }[];
  processSummary: string;
}

export const servicesData: ServiceCapability[] = [
  {
    id: "powder-coating",
    slug: "powder-coating",
    title: "Aluminium Powder Coating",
    shortTitle: "Powder Coating",
    heroHeadline: "PROTECTION. COLOUR. PRECISION.",
    subheadline: "Electrostatic polymer finishes engineered for endurance, weather resistance, and architectural elegance.",
    description: "Durable and visually refined powder-coated aluminium finishes engineered to protect structural profiles against corrosion and environmental wear.",
    index: "01",
    tagline: "Colour that lasts. Finishes that perform.",
    iconName: "Layers",
    image: "/images/products/powder-coating-process.webp",
    overview:
      "Aluminium powder coating involves the electrostatic application of dry thermo-polymer pigment powders onto chemically pre-treated aluminium substrates. Once cured at controlled thermal thresholds, the coating forms an impermeable, highly resilient exterior barrier that resists chipping, ultraviolet degradation, and atmospheric corrosion while delivering exceptional aesthetic richness.",
    technicalHighlights: [
      "Rigorous multi-stage chemical pretreatment and de-greasing surface conditioning",
      "Uniform micron-controlled film thickness across intricate profiles and extrusions",
      "Enhanced UV stability, salt-spray resistance, and weathering durability",
      "Environmentally responsible zero-VOC dry formulation process",
      "Vast spectrum of RAL architectural palettes, gloss levels, and fine-grain textures",
    ],
    applications: [
      "Architectural facade panels, curtain walls, and window extrusions",
      "Industrial enclosures, louvers, and perforated screening systems",
      "Commercial framing, structural railings, and balustrades",
      "Interior partition profiles and decorative aluminium extrusions",
      "Solar structural mounting sections and outdoor industrial equipment",
    ],
    finishOptions: [
      { name: "Graphite Black", hex: "#1A1D20", desc: "Matte deep industrial black with subtle textured grain" },
      { name: "Architectural White", hex: "#F1F5F9", desc: "High-reflectivity clean architectural pure white finish" },
      { name: "Champagne Bronze", hex: "#A38051", desc: "Rich metallic warm bronze with fine mica luster" },
      { name: "Metallic Silver", hex: "#9AA4AF", desc: "Refined aluminium sheen with sparkling metallic flakes" },
      { name: "Deep Charcoal", hex: "#2B3542", desc: "Contemporary slate dark grey engineered for modern exteriors" },
    ],
    processSummary:
      "Precision pretreatment ensures optimum mechanical adhesion before electrostatic spray deposition and thermal curing in calibrated ovens.",
  },
  {
    id: "anodising",
    slug: "anodising",
    title: "Aluminium Anodising",
    shortTitle: "Anodising",
    heroHeadline: "ENGINEERED TO ENDURE.",
    subheadline: "Electrochemical conversion creating an integral crystalline oxide layer that becomes one with the metal.",
    description: "Refined aluminium surface treatments designed for enduring surface hardness, scratch resistance, and authentic metallic visual quality.",
    index: "02",
    tagline: "Beyond the surface. Molecular-level perfection.",
    iconName: "ShieldCheck",
    image: "/images/products/anodising-surface.webp",
    overview:
      "Anodising is an electrochemical oxidation process that transforms the natural microscopic aluminium surface into an integral, exceptionally hard aluminium oxide barrier. Because this ceramic-like oxide layer is grown from the substrate itself rather than applied externally, it will never flake, peel, or blister, preserving the authentic metallic sheen and tactile elegance of aluminium.",
    technicalHighlights: [
      "Substrate-integrated aluminium oxide layer with sapphire-level hardness",
      "Superior resistance to abrasion, scratching, and atmospheric oxidation",
      "High dielectric strength with electrically insulated surface characteristics",
      "Authentic metallic tactile feel with natural light-refracting depth",
      "Precision controlled etching and electrolytic sealing baths",
    ],
    applications: [
      "High-end architectural facades, storefronts, and mullion frameworks",
      "Precision engineering components and instrumentation housings",
      "Automotive trim elements, heat exchangers, and structural fittings",
      "Consumer technology enclosures, handles, and premium hardware",
      "Marine and coastal architectural profiles requiring non-peeling durability",
    ],
    finishOptions: [
      { name: "Natural Silver", hex: "#C8D1D9", desc: "Classic satin silver highlighting natural metallic aluminium grain" },
      { name: "Satin Black", hex: "#121417", desc: "Deep integral electro-deposited jet black with silky reflection" },
      { name: "Champagne", hex: "#D4B282", desc: "Subtle luminous golden champagne with warm metallic refraction" },
      { name: "Bronze", hex: "#6E553F", desc: "Sophisticated deep architectural bronze tone for enduring heritage designs" },
    ],
    processSummary:
      "Aluminium profiles undergo alkaline etching, deoxidizing acid activation, controlled sulphuric acid electrolytic bath oxidation, and hot demineralized water sealing.",
  },
  {
    id: "aluminium-ingots",
    slug: "aluminium-ingots",
    title: "Aluminium Ingot Manufacturing & Supply",
    shortTitle: "Aluminium Ingots",
    heroHeadline: "THE FOUNDATION OF POSSIBILITY.",
    subheadline: "Primary and foundry alloy aluminium ingots manufactured to precise chemical specifications for downstream metalworking.",
    description: "Aluminium ingot solutions engineered for foundries, die-casters, extrusion facilities, and industrial material requirements.",
    index: "03",
    tagline: "The strength behind industry.",
    iconName: "Box",
    image: "/images/products/stacked-ingots.webp",
    overview:
      "Aluminium ingots form the elemental starting material for modern industrial engineering. Sourced and manufactured with meticulous temperature control, fluxing, and degassing methodologies, our aluminium ingots provide uniform microstructure, low porosity, and verified chemical compositions tailored for die casting, rolling mills, and profile extrusion lines.",
    technicalHighlights: [
      "Controlled smelting and thermal homogenisation processes",
      "Low dross and gas content achieved through systematic molten metal refining",
      "Uniform cast dimensions, smooth stacking geometry, and secure strapping for logistics",
      "Meticulous chemical analysis of constituent elements (Si, Fe, Cu, Mn, Mg, Zn)",
      "Engineered for high fluidity, excellent mold filling, and consistent mechanical properties",
    ],
    applications: [
      "High-pressure and gravity die-casting foundries",
      "Automotive engine components, structural castings, and wheel hubs",
      "Extrusion billet casting and hot-rolling slab preparation",
      "Electrical conductor and transmission hardware fabrication",
      "Industrial machinery components, pump casings, and motor bodies",
    ],
    processSummary:
      "Molten aluminium is refined via rotary degassing and skimming before being poured into precision cast-iron molds to solidify into standardized industrial ingots.",
  },
  {
    id: "aluminium-supply",
    slug: "aluminium-supply",
    title: "Aluminium Sales & Supply",
    shortTitle: "Sales & Supply",
    heroHeadline: "MATERIALS THAT MOVE INDUSTRY.",
    subheadline: "Comprehensive procurement, material sourcing, and commercial supply of industrial-grade aluminium products across India.",
    description: "Strategic aluminium sourcing and supply solutions connecting industrial consumers with certified metal forms for diverse manufacturing requirements.",
    index: "04",
    tagline: "Strategic metal sourcing. Uncompromised reliability.",
    iconName: "Truck",
    image: "/images/products/aluminium-warehouse-supply.webp",
    overview:
      "Navigating raw material supply chains requires reliability, dimensional accuracy, and prompt logistics coordination. Santoshi Metal Industries provides end-to-end aluminium sourcing and distribution, catering to infrastructure builders, fabricators, and manufacturing units with dependable bulk delivery schedules and documented material integrity.",
    technicalHighlights: [
      "Direct material supply channels covering commercial and industrial grades",
      "Supply of standard extrusions, sheets, coils, plates, and customized sections",
      "Comprehensive lot traceability and dimensional verification",
      "Protective surface wrapping and weather-resistant transit packaging",
      "Scalable delivery planning tailored to contractor project milestones",
    ],
    applications: [
      "Commercial real estate contractors, curtain wall installers, and glazing systems",
      "Bus and commercial transport bodybuilders and railway components",
      "Solar module mounting frame fabricators and racking contractors",
      "Electrical switchgear enclosures and busbar fabricators",
      "General sheet metal fabrication, ducting, and industrial insulation",
    ],
    processSummary:
      "Rigorous material verification upon intake, precision lot storage, customized protective packaging, and coordinated nationwide freight dispatch.",
  },
];

