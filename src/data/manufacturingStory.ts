export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export const manufacturingStoryStages: WorkflowStage[] = [
  {
    step: '01',
    title: 'Requirement Understanding',
    subtitle: 'Technical Assessment & Planning',
    description:
      'Every project begins with in-depth analysis of engineering drawings, alloy specifications, mechanical tolerances, and desired surface finishes. Our team collaborates to align metallurgical chemistry and coating systems with specific environmental demands.',
    image: '/images/silver-wave.jpg',
    highlights: [
      'Alloy & temper suitability analysis',
      'Extrusion profile geometry assessment',
      'Custom color & gloss level matching',
      'Batch quantity & delivery schedule alignment',
    ],
  },
  {
    step: '02',
    title: 'Material Preparation',
    subtitle: 'Substrate Cleaning & Pretreatment',
    description:
      'Precision begins beneath the surface. Aluminium extrusions and cast alloys undergo systematic chemical degreasing, multi-stage rinsing, and specialized passivation to create an optimal, contaminant-free foundation for coating or anodising.',
    image: '/images/architectural-facade.jpg',
    highlights: [
      'Multi-stage alkaline degreasing',
      'Demineralised water cascade washing',
      'Chrome-free passivation pre-treatment',
      'Air-dry drying tunnels ensuring zero moisture',
    ],
  },
  {
    step: '03',
    title: 'Processing & Finishing',
    subtitle: 'Electrostatic Coating & Conversion',
    description:
      'Applying advanced electrostatic powder application or controlled electrochemical anodising baths. State-of-the-art curing lines ensure cross-polymerization and uniform film deposition across complex structural geometries.',
    image: '/images/powder-coating.jpg',
    highlights: [
      'Automated reciprocator spray guns',
      'Thermal curing with continuous temperature profiling',
      'Electrolytic oxide layer generation',
      'Uniform micron-level thickness adherence',
    ],
  },
  {
    step: '04',
    title: 'Quality Review',
    subtitle: 'Inspection & Metrology Testing',
    description:
      'Comprehensive verification protocols scrutinize surface uniformity, adhesion integrity (cross-hatch testing), color consistency, and resistance properties. Every batch is measured against rigorous industrial criteria before approval.',
    image: '/images/anodising.jpg',
    highlights: [
      'Digital eddy-current film thickness gauging',
      'Cross-cut adhesion and impact testing',
      'Specular gloss and spectrophotometric color verification',
      'Visual inspection under standard daylight D65 illuminants',
    ],
  },
  {
    step: '05',
    title: 'Delivery Coordination',
    subtitle: 'Protective Packaging & Dispatch',
    description:
      'Preserving surface perfection until final installation. Finished profiles and ingots are interleaved with protective films, strapped into rigid bundles, and coordinated for secure transport directly to client facilities.',
    image: '/images/aluminium-supply.jpg',
    highlights: [
      'Custom surface protection films & paper interleaving',
      'High-tensile strapping & wooden crating for extrusions',
      'QR code batch tracking & material test documentation',
      'Coordinated logistics to regional industrial destinations',
    ],
  },
];

