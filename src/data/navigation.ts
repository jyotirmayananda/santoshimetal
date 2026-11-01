export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    index: string;
  }[];
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      {
        label: "Aluminium Powder Coating",
        href: "/capabilities/powder-coating",
        description: "Electrostatic polymer architectural finishes with superior UV and weathering resistance.",
        index: "01",
      },
      {
        label: "Aluminium Anodising",
        href: "/capabilities/anodising",
        description: "Integral crystalline oxide barrier engineered for molecular hardness and metallic beauty.",
        index: "02",
      },
      {
        label: "Aluminium Ingots",
        href: "/capabilities/aluminium-ingots",
        description: "Primary and foundry alloy ingots manufactured for die-casting, extrusion, and metallurgy.",
        index: "03",
      },
      {
        label: "Aluminium Sales & Supply",
        href: "/capabilities/aluminium-supply",
        description: "Strategic metal sourcing and logistics for plates, coils, extrusions, and bulk raw stock.",
        index: "04",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

