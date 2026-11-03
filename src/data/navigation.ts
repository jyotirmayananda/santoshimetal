export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
}

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Capabilities',
    href: '/capabilities',
    children: [
      {
        label: 'Aluminium Ingot',
        href: '/capabilities/aluminium-ingots',
        description: 'Foundry-grade remelt ingot manufacturing and supply.',
      },
      {
        label: 'Aluminium Profile',
        href: '/capabilities/aluminium-profile',
        description: 'Precision extruded architectural and industrial profiles.',
      },
      {
        label: 'Aluminium Scrap & Supply',
        href: '/capabilities/aluminium-scrap-supply',
        description: 'Graded scrap recovery and industrial aluminium feedstock supply.',
      },
      {
        label: 'Aluminium Powder Coating',
        href: '/capabilities/powder-coating',
        description: 'Durable, vibrant architectural and industrial powder coating finishes.',
      },
      {
        label: 'Aluminium Anodising',
        href: '/capabilities/anodising',
        description: 'Hardcoat and decorative electrochemical surface conversion.',
      },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
