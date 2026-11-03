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
    id: 'aluminium-ingots',
    slug: 'aluminium-ingots',
    title: 'Aluminium Ingot',
    headline: 'THE FOUNDATION OF INDUSTRY.',
    shortDescription:
      'Foundry-grade remelt aluminium ingots engineered for clean melt chemistry and consistent casting performance.',
    fullDescription:
      'Aluminium ingots are the metallurgical cornerstone of modern industrial production. Santoshi Metal Industries manufactures and supplies high-quality foundry and remelt ingots engineered for casting units, extrusion presses, die-casters, and automotive alloy compounders across India—with controlled composition, clean melt behaviour, and reliable batch consistency.',
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
        url: '/images/gallery-molten-casting.jpg',
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
    id: 'aluminium-profile',
    slug: 'aluminium-profile',
    title: 'Aluminium Profile',
    headline: 'PRECISION EXTRUDED SECTIONS.',
    shortDescription:
      'Architectural and industrial aluminium profiles supplied to drawing—tight tolerances, clean surfaces, ready for fabrication or finish.',
    fullDescription:
      'Santoshi Metal Industries supplies precision aluminium profiles for architecture, fenestration, structural framing, and industrial fabrication. From standard extrusions to custom sections matched to client die drawings, our profile supply emphasises dimensional accuracy, surface integrity, and dependable cut-to-length fulfilment for fabricators and OEMs.',
    heroImage: '/images/gallery-extrusion-sections.jpg',
    accentColor: '#123B68',
    features: [
      'Standard and custom extruded architectural and industrial profiles',
      'Tight dimensional tolerance control across complex cross-sections',
      'Surface-ready stock suitable for powder coating or anodising',
      'Cut-to-length, bundling, and protective packaging for transit',
      'Alloy and temper options aligned to structural and decorative use',
    ],
    applications: [
      {
        title: 'Windows, Doors & Curtain Walls',
        description: 'Mullions, transoms, framing channels, and thermal-break compatible extrusions for building envelopes.',
      },
      {
        title: 'Structural & Modular Framing',
        description: 'Linear machine frames, cleanroom partitions, solar mounting rails, and industrial workstations.',
      },
      {
        title: 'Transportation Bodywork',
        description: 'Truck body sections, bus framework profiles, and lightweight commercial vehicle extrusions.',
      },
      {
        title: 'General Engineering Stock',
        description: 'Tubes, angles, channels, and specialty sections for CNC fabrication and assembly.',
      },
    ],
    benefits: [
      {
        title: 'Drawing-Matched Accuracy',
        description: 'Profiles supplied to agreed die drawings and temper specifications for seamless fabrication.',
      },
      {
        title: 'Finish-Ready Surfaces',
        description: 'Clean extrusions prepared for downstream powder coating or electrochemical anodising.',
      },
      {
        title: 'Reliable Fulfilment',
        description: 'Cut-to-length coordination and protective packing that preserve edges and face quality.',
      },
    ],
    processSteps: [
      {
        title: 'Requirement & Drawing Review',
        description: 'Technical review of alloy, temper, die drawing, and cut lengths against project specifications.',
      },
      {
        title: 'Profile Allocation & Sourcing',
        description: 'Stock is allocated from inventory or coordinated against specialised extrusion runs.',
      },
      {
        title: 'Cut-to-Length & Bundling',
        description: 'Sections are precision cut, interleaved, and strapped into rigid protective bundles.',
      },
      {
        title: 'Dispatch Coordination',
        description: 'Secure freight delivers profiles directly to fabrication shops or project sites.',
      },
    ],
    galleryImages: [
      {
        url: '/images/gallery-extrusion-sections.jpg',
        caption: 'Precision saw-cut aluminium profile cross sections',
        alt: 'Aluminium extrusion profile cross sections',
      },
      {
        url: '/images/aluminium-supply.jpg',
        caption: 'Stacked industrial aluminium extrusions',
        alt: 'Industrial aluminium profile warehouse stock',
      },
      {
        url: '/images/architectural-facade.jpg',
        caption: 'Architectural aluminium facade profiles in application',
        alt: 'Architectural aluminium profiles on building facade',
      },
    ],
  },
  {
    id: 'aluminium-scrap-supply',
    slug: 'aluminium-scrap-supply',
    title: 'Aluminium Scrap & Supply',
    headline: 'RECOVER. REFINE. RESUPPLY.',
    shortDescription:
      'Responsible aluminium scrap recovery and industrial metal supply—sorting, grading, and dependable feedstock for remelt operations.',
    fullDescription:
      'Santoshi Metal Industries supports circular aluminium value chains through scrap sourcing, grading, and industrial supply. We handle sorted aluminium scrap streams suitable for remelt foundries and coordinate reliable metal supply—bridging recovery, quality segregation, and timely delivery so casting and processing partners maintain consistent furnace feedstock.',
    heroImage: '/images/aluminium-supply.jpg',
    accentColor: '#2878C8',
    features: [
      'Sorted and graded aluminium scrap streams for remelt foundries',
      'Transparent material classification and contamination control',
      'Flexible supply volumes for both scheduled and bulk furnace charges',
      'Coordination of scrap intake with ingot and profile supply programmes',
      'Documentation support for industrial procurement and logistics',
    ],
    applications: [
      {
        title: 'Remelt Foundry Feedstock',
        description: 'Clean graded scrap charges supporting secondary remelt and foundry alloy production.',
      },
      {
        title: 'Extrusion & Casting Units',
        description: 'Supplementary scrap supply aligned with plant melt schedules and alloy targets.',
      },
      {
        title: 'Industrial Buy-Back & Recovery',
        description: 'Structured recovery of process offcuts, rejects, and end-of-life aluminium forms.',
      },
      {
        title: 'Integrated Metal Supply',
        description: 'Combined scrap and primary metal programmes for fabricators managing dual feedstock needs.',
      },
    ],
    benefits: [
      {
        title: 'Quality Segregation',
        description: 'Careful sorting reduces furnace losses and improves melt predictability for remelt partners.',
      },
      {
        title: 'Circular Supply Reliability',
        description: 'Steady scrap and metal flows that support continuous foundry and processing operations.',
      },
      {
        title: 'Transparent Handling',
        description: 'Clear grading, weighing, and dispatch practices that simplify industrial procurement.',
      },
    ],
    processSteps: [
      {
        title: 'Collection & Intake Assessment',
        description: 'Incoming scrap is inspected for alloy family, contamination, and suitability for remelt.',
      },
      {
        title: 'Sorting, Grading & Preparation',
        description: 'Material is segregated by grade, prepared for furnace charge, and documented for supply.',
      },
      {
        title: 'Quality Verification',
        description: 'Batches are checked against agreed contamination limits and supply specifications.',
      },
      {
        title: 'Logistics & Delivery',
        description: 'Graded scrap and supply lots are weighed, packed, and dispatched to client facilities.',
      },
    ],
    galleryImages: [
      {
        url: '/images/aluminium-supply.jpg',
        caption: 'Industrial aluminium stock prepared for supply',
        alt: 'Aluminium scrap and supply warehouse stock',
      },
      {
        url: '/images/aluminium-ingots.jpg',
        caption: 'Remelt pathway from recovered metal to foundry ingot',
        alt: 'Aluminium ingots linked to scrap remelt supply',
      },
      {
        url: '/images/gallery-molten-casting.jpg',
        caption: 'Molten remelt operations fed by graded aluminium scrap',
        alt: 'Molten aluminium casting from remelt feedstock',
      },
    ],
  },
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
        url: '/images/gallery-powder-profiles.jpg',
        caption: 'Precision coated architectural aluminium profiles',
        alt: 'Finished coated aluminium profile stock',
      },
      {
        url: '/images/architectural-facade.jpg',
        caption: 'Powder-coated profiles in architectural application',
        alt: 'Architectural facade with powder-coated aluminium',
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
];
