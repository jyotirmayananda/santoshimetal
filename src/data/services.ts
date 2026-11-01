export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  accentColor: string;
  features: string[];
  applications: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  processSteps: { title: string; description: string }[];
  galleryImages: { url: string; caption: string; alt: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'powder-coating',
    slug: 'powder-coating',
    title: 'Aluminium Powder Coating',
    headline: 'COLOUR. PROTECTION. PRECISION.',
    shortDescription:
      'Discover aluminium powder coating solutions designed to combine refined appearance with durable surface protection.',
    fullDescription:
      'Our aluminium powder coating operations focus on delivering uniform, durable, and aesthetically superior polymer electrostatic finishes. Engineered to protect aluminium extrusions and profiles against environmental corrosion, UV degradation, and mechanical abrasion while offering an expansive palette of architectural and industrial finishes.',
    heroImage: '/images/powder-coating.jpg',
    accentColor: '#2878C8',
    features: [
      'Advanced electrostatic powder deposition technology',
      'Architectural grade polyester and fluoropolymer finishes',
      'Superior resistance to UV exposure, humidity, and atmospheric weathering',
      'Consistent film thickness control across complex extrusion profiles',
      'Eco-conscious solvent-free application with minimal VOC emissions',
    ],
    applications: [
      {
        title: 'Architectural Facades & Curtain Walls',
        description: 'Durable exterior coatings designed for long-term weather resistance on high-rise building facades.',
      },
      {
        title: 'Door & Window Extrusions',
        description: 'Silky smooth finishes and tailored textures for modern residential and commercial fenestration systems.',
      },
      {
        title: 'Industrial Enclosures & Casings',
        description: 'Tough, resilient protective finishes designed for mechanical shielding and electrical cabinets.',
      },
      {
        title: 'Transportation & Louver Systems',
        description: 'Aerodynamic ventilation louvers, automotive body elements, and mass transit structural panels.',
      },
    ],
    benefits: [
      {
        title: 'Uniform Surface Chemistry',
        description: 'Provides seamless coverage without runs, drips, or sag marks across complex profile geometries.',
      },
      {
        title: 'Enhanced Longevity',
        description: 'Defends structural aluminium alloys against premature oxidation and harsh climatic conditions.',
      },
      {
        title: 'Custom Color Spectrum',
        description: 'Wide variety of gloss levels, matte finishes, metallic effects, and fine architectural textures.',
      },
    ],
    processSteps: [
      {
        title: 'Substrate Pretreatment & Degreasing',
        description: 'Chemical cleaning and surface passivation ensure maximum adhesion between aluminium and powder.',
      },
      {
        title: 'Electrostatic Powder Application',
        description: 'Electrostatically charged thermoset powder particles are uniformly sprayed onto grounded profiles.',
      },
      {
        title: 'Thermal Curing Oven',
        description: 'Profiles pass through a strictly controlled curing oven where the powder melts, flows, and cross-links into a continuous resilient film.',
      },
      {
        title: 'Quality & Film Thickness Verification',
        description: 'Surface integrity, adhesion strength, and coating thickness are measured before dispatch.',
      },
    ],
    galleryImages: [
      {
        url: '/images/powder-coating.jpg',
        caption: 'Electrostatic powder coating application booth',
        alt: 'Industrial powder coating process on aluminium profiles',
      },
      {
        url: '/images/architectural-facade.jpg',
        caption: 'Precision coated architectural aluminium profiles',
        alt: 'Finished coated aluminium profile stock',
      },
      {
        url: '/images/silver-wave.jpg',
        caption: 'Oven curing and polymer cross-linking',
        alt: 'High temperature curing line for aluminium profiles',
      },
    ],
  },
  {
    id: 'anodising',
    slug: 'anodising',
    title: 'Aluminium Anodising',
    headline: 'BEYOND THE SURFACE.',
    shortDescription:
      'Explore aluminium anodising solutions for sophisticated finishes and enhanced surface performance.',
    fullDescription:
      'Aluminium anodising is an electrochemical passivation process that transforms the natural metal surface into an integral, decorative, durable, and corrosion-resistant anodic oxide layer. Unlike surface coatings, anodised finishes are fully bonded to the underlying aluminium structure, preserving the authentic metallic character while hardening the surface.',
    heroImage: '/images/anodising.jpg',
    accentColor: '#123B68',
    features: [
      'Electrochemical conversion layer integrated into the aluminium matrix',
      'Exceptional surface hardness and abrasion resistance',
      'True metallic lustre preserving the original grain of high-purity aluminium',
      'Superior dielectric isolation and non-conductive oxide matrix',
      'Non-hazardous, non-peeling finish ideal for prestige architectural environments',
    ],
    applications: [
      {
        title: 'Prestige Architectural Fenestration',
        description: 'Refined metallic framing for luxury commercial buildings and contemporary curtain walling.',
      },
      {
        title: 'Consumer Electronics & Enclosures',
        description: 'Tactile, satin-smooth casing finishes for precision technology devices and audio equipment.',
      },
      {
        title: 'Aerospace & Precision Machinery',
        description: 'Hardcoat anodic coatings for components requiring elevated wear resistance and tight tolerances.',
      },
      {
        title: 'Interior Design & Lighting Trim',
        description: 'Sleek specular, matte, and electrolytic champagne anodised profiles for upscale interiors.',
      },
    ],
    benefits: [
      {
        title: 'No Risk of Flaking or Peeling',
        description: 'Because the oxide layer is formed from the base aluminium itself, it cannot chip or delaminate.',
      },
      {
        title: 'Natural Metallic Elegance',
        description: 'Enhances the depth, brilliance, and tactile texture of high-grade architectural aluminium.',
      },
      {
        title: 'Enhanced Hardness & Wear Resistance',
        description: 'Anodised alumina approaches the hardness of corundum, protecting against scratches and handling marks.',
      },
    ],
    processSteps: [
      {
        title: 'Mechanical Finishing & Chemical Etch',
        description: 'Surface is etched or polished to establish the desired matte satin or bright specular finish.',
      },
      {
        title: 'Electrolytic Oxidation Bath',
        description: 'Profiles are immersed in an acid electrolyte bath where controlled direct current generates a microscopic porous oxide layer.',
      },
      {
        title: 'Electrolytic Coloration (Optional)',
        description: 'Metallic salts are deposited deep within the microscopic pores to yield natural bronze, champagne, or black tones.',
      },
      {
        title: 'Hydrated Micro-Pore Sealing',
        description: 'The porous structure is permanently closed in deionised water baths to lock in colour and prevent staining.',
      },
    ],
    galleryImages: [
      {
        url: '/images/anodising.jpg',
        caption: 'Refined metallic finish on anodised aluminium component',
        alt: 'High-precision anodised aluminium finish',
      },
      {
        url: '/images/silver-wave.jpg',
        caption: 'Microscopic oxide pore formation under controlled current',
        alt: 'Electrochemical anodising tank',
      },
      {
        url: '/images/architectural-facade.jpg',
        caption: 'Inspected satin-finished extruded profiles',
        alt: 'Inspection of anodised architectural profiles',
      },
    ],
  },
  {
    id: 'aluminium-ingots',
    slug: 'aluminium-ingots',
    title: 'Aluminium Ingot Manufacturing & Supply',
    headline: 'THE FOUNDATION OF INDUSTRY.',
    shortDescription:
      'Explore aluminium ingot solutions for industrial and manufacturing applications.',
    fullDescription:
      'Aluminium ingots represent the pure metallurgical cornerstone of modern industrial production. Santoshi Metal Industries focuses on manufacturing and supplying high-quality foundry and remelt ingots engineered to serve casting units, extrusion presses, die-casters, and automotive alloy compounders across India.',
    heroImage: '/images/aluminium-ingots.jpg',
    accentColor: '#2878C8',
    features: [
      'Pure primary and secondary foundry ingot supply for diversified casting sectors',
      'Consistent chemical composition with controlled trace elements',
      'Optimised ingot geometry for rapid, energy-efficient remelt operations',
      'Reliable batch consistency supporting tight foundry casting tolerances',
      'Stackable and securely bundled for convenient logistical transit and handling',
    ],
    applications: [
      {
        title: 'High-Pressure Die Casting (HPDC)',
        description: 'Automotive powertrain components, gear cases, transmission housings, and structural brackets.',
      },
      {
        title: 'Gravity & Sand Castings',
        description: 'Heavy machinery housings, pumps, valves, and agricultural engineering equipment.',
      },
      {
        title: 'Extrusion Billet & Slab Formulation',
        description: 'Feedstock preparation for downstream profile extrusion and rolling mills.',
      },
      {
        title: 'Electrical Conductor & Busbar Alloys',
        description: 'High-conductivity grade aluminium for power transmission, motor windings, and switchgear.',
      },
    ],
    benefits: [
      {
        title: 'Metallurgical Integrity',
        description: 'Clean melt chemistry minimising dross formation, inclusion defects, and trapped porosity.',
      },
      {
        title: 'Consistent Solidification Profile',
        description: 'Reliable fluidity and predictable shrinkage behavior in client foundry moulds.',
      },
      {
        title: 'Direct Supply Chain Reliability',
        description: 'Consistent delivery scheduling coordinating directly from manufacturing point to client facilities.',
      },
    ],
    processSteps: [
      {
        title: 'Raw Material Selection & Charging',
        description: 'High-grade aluminium inputs are vetted, sorted, and charged into reverberatory melting furnaces.',
      },
      {
        title: 'Melt Refining, Degassing & Fluxing',
        description: 'Inert gas bubbling and proprietary fluxing agents extract dissolved hydrogen and oxide inclusions.',
      },
      {
        title: 'Continuous Ingot Casting & Cooling',
        description: 'Refined liquid aluminium is poured into water-cooled mould lines with continuous surface skimmers.',
      },
      {
        title: 'Bundle Stacking, Strapping & Labelling',
        description: 'Solidified ingots are mechanically stacked, secured with high-tensile steel straps, and tagged for traceability.',
      },
    ],
    galleryImages: [
      {
        url: '/images/aluminium-ingots.jpg',
        caption: 'Cast aluminium ingots stacked for industrial supply',
        alt: 'High purity aluminium ingots ready for foundry distribution',
      },
      {
        url: '/images/silver-wave.jpg',
        caption: 'Precision molten metal pouring into casting line',
        alt: 'Furnace pouring liquid aluminium into ingot moulds',
      },
      {
        url: '/images/aluminium-supply.jpg',
        caption: 'Solidified metal ingots inspection',
        alt: 'Foundry quality inspection of finished aluminium ingots',
      },
    ],
  },
  {
    id: 'aluminium-supply',
    slug: 'aluminium-supply',
    title: 'Aluminium Sales & Supply',
    headline: 'MATERIALS THAT MOVE INDUSTRY.',
    shortDescription:
      'Discover aluminium sourcing and supply solutions for diverse industrial requirements.',
    fullDescription:
      'Santoshi Metal Industries bridges primary metal refining with custom downstream manufacturing demands. We supply a broad portfolio of industrial aluminium forms—ranging from standard and custom extrusions, sheets, coils, and structural sections to billet feedstock—delivering reliability, transparency, and timely distribution across industrial hubs.',
    heroImage: '/images/aluminium-supply.jpg',
    accentColor: '#123B68',
    features: [
      'Comprehensive inventory of aluminium sheets, plates, and architectural sections',
      'Custom extrusion sourcing tailored to client profile drawings and die designs',
      'Strict dimension tolerance controls and surface protection wrapping',
      'Flexible supply agreements supporting both just-in-time and bulk deliveries',
      'Complete documentation, test cert coordination, and material traceability',
    ],
    applications: [
      {
        title: 'Industrial Fabrication & Enclosures',
        description: 'Machine guards, linear motion frames, cleanroom modular partitions, and workbenches.',
      },
      {
        title: 'Building & Construction Systems',
        description: 'Structural glazing channels, curtain wall mullions, solar mounting brackets, and roofing sheets.',
      },
      {
        title: 'Transportation & Commercial Vehicles',
        description: 'Truck body flooring, bus framework sections, tanker plating, and container extrusions.',
      },
      {
        title: 'General Engineering & Machining Stock',
        description: 'Solid rounds, square bars, flat bars, and thick plates for CNC milling and turning.',
      },
    ],
    benefits: [
      {
        title: 'Diverse Alloy Portfolio',
        description: 'Access to popular commercial and structural alloy series (1xxx, 3xxx, 5xxx, 6xxx).',
      },
      {
        title: 'Transparent Logistics',
        description: 'Clear dispatch tracking and dependable scheduling directly to your factory doorstep.',
      },
      {
        title: 'Surface Integrity Guaranteed',
        description: 'Interleaved paper wrapping and protective poly films preserve surface quality during transit.',
      },
    ],
    processSteps: [
      {
        title: 'Requirement & Drawing Review',
        description: 'Our technical team assesses your engineering drawing, alloy requirement, and temper specification.',
      },
      {
        title: 'Inventory Allocation & Sourcing',
        description: 'Stock is pulled from production inventory or coordinated with specialized casting lines.',
      },
      {
        title: 'Cut-to-Length & Packaging',
        description: 'Profiles and sheets are precision cut, bundled, and wrapped with heavy-duty protective coverings.',
      },
      {
        title: 'Logistics & Dispatch Coordination',
        description: 'Secure freight carriers deliver directly to client warehouses or construction job sites.',
      },
    ],
    galleryImages: [
      {
        url: '/images/aluminium-supply.jpg',
        caption: 'Stacked industrial aluminium extrusions and profiles',
        alt: 'Industrial aluminium profile warehouse',
      },
      {
        url: '/images/powder-coating.jpg',
        caption: 'Precision cut-to-length aluminium sections',
        alt: 'Aluminium sheets and plates ready for delivery',
      },
      {
        url: '/images/architectural-facade.jpg',
        caption: 'Quality control check on extruded profiles',
        alt: 'Measurement of aluminium extrusion dimensions',
      },
    ],
  },
];

