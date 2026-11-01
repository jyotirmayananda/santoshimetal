export interface IndustryItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  applications: string[];
  aluminiumRole: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "architecture-construction",
    title: "Architecture & Construction",
    category: "Structural & Facades",
    headline: "Enduring facades and structural elegance.",
    description:
      "Modern architecture relies on aluminium for its high strength-to-weight ratio, non-corrosive longevity, and striking visual expression in building envelopes.",
    applications: [
      "Curtain wall mullions and unitized exterior panels",
      "Thermal-break window and door profile systems",
      "Perforated solar shading louvers and architectural brise-soleil",
      "Glass railing base shoes and balcony balustrades",
    ],
    aluminiumRole:
      "Precision powder-coated and anodised surfaces provide up to decades of resistance to solar degradation and atmospheric exposure while satisfying strict design palettes.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Transportation",
    category: "Heavy Civil & Transit",
    headline: "Lightweight strength for modern public networks.",
    description:
      "Large-scale transportation corridors, rail infrastructure, and civil projects demand lightweight metals to reduce dead load and lower life-cycle maintenance costs.",
    applications: [
      "Highway signage gantries and acoustic barrier frames",
      "Railway coach interior profiles and structural fittings",
      "Airport terminal walkways and canopy support framework",
      "Substation structural support channels and cable tray systems",
    ],
    aluminiumRole:
      "Corrosion-resistant aluminium extrusions eliminate the periodic repainting demanded by mild steel in aggressive highway and maritime environments.",
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial Manufacturing",
    category: "Equipment & Machinery",
    headline: "Precision metal stock for automated production.",
    description:
      "Industrial machinery, robotics, and pneumatic equipment rely on dimensionally stable aluminium alloys for rapid machining and reduced operational inertia.",
    applications: [
      "Modular automation framing systems and linear guide rails",
      "Pneumatic cylinder barrels and manifold blocks",
      "Heat dissipation enclosures for drives and motors",
      "Precision tooling jigs, fixtures, and mounting plates",
    ],
    aluminiumRole:
      "High thermal conductivity, uniform hardness, and non-magnetic properties make aluminium the benchmark substrate for sensitive automation systems.",
  },
  {
    id: "automotive-components",
    title: "Automotive Components",
    category: "Mobility & EV Systems",
    headline: "Thermal efficiency and weight reduction.",
    description:
      "The rapid evolution of light commercial vehicles and electric mobility makes aluminium casting and extrusion indispensable for range extension and thermal management.",
    applications: [
      "Die-cast powertrain components and transmission housings",
      "EV battery pack tray extrusions and crash-management beams",
      "Radiator headers and automotive heat exchanger tubes",
      "Chassis subframe members and suspension bracketry",
    ],
    aluminiumRole:
      "Aluminium ingots with tight metallurgical tolerances guarantee dependable mechanical impact resistance and low porosity in high-pressure casting operations.",
  },
  {
    id: "electrical-engineering",
    title: "Electrical & Engineering",
    category: "Power & Conduction",
    headline: "Optimal conductivity and thermal dissipation.",
    description:
      "The global expansion of renewable energy generation, smart power grids, and high-voltage transmission demands high-purity aluminium conductor products.",
    applications: [
      "Electrical busbars and switchgear connection channels",
      "Solar inverter and high-power LED heat sink extrusions",
      "Cable armouring wires and overhead transmission conductors",
      "Transformer winding strips and shielding plates",
    ],
    aluminiumRole:
      "Aluminium delivers over 60% of copper's electrical conductivity at only 30% of its weight, slashing transport and support-structure investments in transmission systems.",
  },
  {
    id: "fabrication",
    title: "Metal Fabrication & Enclosures",
    category: "Custom Engineering",
    headline: "Formability and surface integrity for custom fabrication.",
    description:
      "Specialist metal fabricators require sheets, profiles, and tubes that weld cleanly, bend without micro-cracking, and accept uniform decorative coatings.",
    applications: [
      "Electrical control panels, junction boxes, and server racks",
      "Commercial retail fixtures, display showcases, and kiosk frames",
      "HVAC acoustic plenums, volume control dampers, and grilles",
      "Custom laser-cut decorative screens and architectural gates",
    ],
    aluminiumRole:
      "Predictable grain structure and controlled alloy temper ensure crisp laser cuts, tight bending radii, and smooth post-weld surface finishing.",
  },
];

