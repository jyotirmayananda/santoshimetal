export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  applications: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'architecture-construction',
    name: 'Architecture & Construction',
    tagline: 'Modern facades, curtain walling & fenestration',
    description:
      'Engineered aluminium profiles and premium powder-coated elements designed for high-performance building envelopes, structural glazing systems, and prestige residential projects.',
    image: '/images/architectural-facade.jpg',
    applications: [
      'Curtain wall mullions & transoms',
      'Architectural louvers & shading fins',
      'Structural glazing frames',
      'High-durability exterior wall cladding panels',
    ],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Public Works',
    tagline: 'Lightweight durability for transport corridors',
    description:
      'High-tensile corrosion-resistant aluminium solutions designed to withstand harsh outdoor weathering in transit hubs, airport terminals, bridge structures, and metro rail systems.',
    image: '/images/aluminium-supply.jpg',
    applications: [
      'Transit terminal architectural canopies',
      'Highway acoustic sound barrier framing',
      'Pedestrian bridge railings & safety barriers',
      'Signage gantries and lighting masts',
    ],
  },
  {
    id: 'industrial-manufacturing',
    name: 'Industrial Manufacturing',
    tagline: 'Structural precision for heavy machinery',
    description:
      'Precision extrusions, modular framing systems, and machined structural sections that streamline assembly lines, robotic enclosures, and process machinery.',
    image: '/images/powder-coating.jpg',
    applications: [
      'Modular T-slot automation framing',
      'Conveyor system side-guides and rails',
      'Pneumatic manifold housings',
      'Assembly line workstation structures',
    ],
  },
  {
    id: 'automotive-components',
    name: 'Automotive Components',
    tagline: 'High-fluidity alloys for lightweighting',
    description:
      'Quality foundry ingots and precise extruded profiles supporting automotive casting foundries, electric vehicle battery casings, and chassis structural members.',
    image: '/images/aluminium-ingots.jpg',
    applications: [
      'Die-cast engine brackets & transmission housings',
      'EV battery tray structural extrusions',
      'Crash management bumper beams',
      'Heat exchanger and radiator tubing',
    ],
  },
  {
    id: 'electrical-engineering',
    name: 'Electrical & Engineering',
    tagline: 'Thermal dissipation and conductive solutions',
    description:
      'High electrical conductivity alloys and thermally optimised heat-sink profiles providing dependable performance for power grids, transformers, and electronic enclosures.',
    image: '/images/silver-wave.jpg',
    applications: [
      'High-fin density thermal heat sinks',
      'Electrical busbar conductor systems',
      'Switchgear and transformer housing boxes',
      'Cable trunking and conduit sections',
    ],
  },
  {
    id: 'fabrication',
    name: 'Custom Fabrication',
    tagline: 'Versatile stock for precision workshops',
    description:
      'Supplying reliable alloy stock, standard angle profiles, tubes, and flat bars with predictable welding and machining properties for bespoke sheet metal workshops.',
    image: '/images/anodising.jpg',
    applications: [
      'Precision CNC milled fixtures & prototypes',
      'Welded aluminium marine & transport tanks',
      'Display booths, signage, and retail kiosks',
      'Custom architectural interior metalwork',
    ],
  },
];

