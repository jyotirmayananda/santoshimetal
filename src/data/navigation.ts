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
        label: 'Aluminium Powder Coating',
        href: '/capabilities/powder-coating',
        description: 'Durable, vibrant architectural and industrial powder coating finishes.',
      },
      {
        label: 'Aluminium Anodising',
        href: '/capabilities/anodising',
        description: 'Hardcoat and decorative electrochemical surface conversion.',
      },
      {
        label: 'Aluminium Ingots',
        href: '/capabilities/aluminium-ingots',
        description: 'Primary and foundry grade remelt ingot manufacturing and supply.',
      },
      {
        label: 'Aluminium Sales & Supply',
        href: '/capabilities/aluminium-supply',
        description: 'Extrusions, sheets, profiles, and industrial stock distribution.',
      },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

