export type GalleryCategory =
  | 'All'
  | 'Powder Coating'
  | 'Anodising'
  | 'Aluminium Ingots'
  | 'Aluminium Products'
  | 'Industrial Processes';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Powder Coating' | 'Anodising' | 'Aluminium Ingots' | 'Aluminium Products' | 'Industrial Processes';
  imageUrl: string;
  caption: string;
  dimensions?: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Powder Coating',
  'Anodising',
  'Aluminium Ingots',
  'Aluminium Products',
  'Industrial Processes',
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-powder-booth',
    title: 'Automated Electrostatic Powder Coating Line',
    category: 'Powder Coating',
    imageUrl: '/images/powder-coating.jpg',
    caption: 'Modern electrostatic powder spray line applying uniform architectural polymer finish to suspended aluminium extrusions.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-powder-profiles',
    title: 'Architectural Powder-Coated Profile Systems',
    category: 'Powder Coating',
    imageUrl: '/images/gallery-powder-profiles.jpg',
    caption: 'Freshly finished architectural profiles showcasing pristine white and rich navy powder coating in a factory curing bay.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-facade',
    title: 'Curved White Architectural Powder-Coated Facade',
    category: 'Powder Coating',
    imageUrl: '/images/architectural-facade.jpg',
    caption: 'High-durability white powder-coated exterior cladding and continuous fenestration on premier commercial building.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-anodised-line',
    title: 'Electrochemical Anodising Passivation Tanks',
    category: 'Anodising',
    imageUrl: '/images/anodising.jpg',
    caption: 'Heavy gantry crane lifting racks of satin natural silver aluminium extrusions out of precision electrolyte passivation tanks.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-anodised-profiles',
    title: 'Precision Architectural Anodised Extrusions',
    category: 'Anodising',
    imageUrl: '/images/gallery-extrusion-sections.jpg',
    caption: 'Macro studio photography of precision architectural aluminium extrusions with intricate cross-sectional profiles and satin anodised surfaces.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-silver-wave',
    title: 'Polished Specular Metallic Flow',
    category: 'Anodising',
    imageUrl: '/images/silver-wave.jpg',
    caption: 'Polished specular metallic surface curvature demonstrating high-reflectivity surface finishing.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-ingot-stacks',
    title: 'High-Purity Remelt Aluminium Foundry Ingots',
    category: 'Aluminium Ingots',
    imageUrl: '/images/aluminium-ingots.jpg',
    caption: 'Stacked foundry-grade cast aluminium ingots neatly banded with high-tensile steel straps for industrial distribution.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-molten-casting',
    title: 'Molten Ingot Casting & Mould Pouring',
    category: 'Aluminium Ingots',
    imageUrl: '/images/gallery-molten-casting.jpg',
    caption: 'Controlled metallurgical pouring of liquid molten aluminium with radiant heat glow into chilled continuous ingot moulds.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-supply-warehouse',
    title: 'Industrial Extrusion & Sheet Distribution Center',
    category: 'Aluminium Products',
    imageUrl: '/images/aluminium-supply.jpg',
    caption: 'Modern metal distribution center with tall cantilever racks stocked with architectural aluminium profiles, sheets, and tubes.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-extrusion-cross',
    title: 'Engineered T-Slot & Thermal-Break Extrusions',
    category: 'Aluminium Products',
    imageUrl: '/images/gallery-extrusion-sections.jpg',
    caption: 'Precision saw-cut aluminium profile cross sections displaying thermal break chambers and tight mechanical tolerances.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-smi-logo',
    title: 'Santoshi 3D Metallic Monogram & Corporate Identity',
    category: 'Aluminium Products',
    imageUrl: '/images/logo-full.jpg',
    caption: 'Official 3D brushed aluminium sculpt with molten copper chamber illumination representing metallurgical precision.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-quality-inspection',
    title: 'Micron Film Thickness Metrology & Quality Inspection',
    category: 'Industrial Processes',
    imageUrl: '/images/gallery-quality-inspection.jpg',
    caption: 'Quality control metrology technician using a precision digital micrometer gauge to verify coating thickness uniformity.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-process-casting',
    title: 'Continuous Molten Ingot Pouring Operation',
    category: 'Industrial Processes',
    imageUrl: '/images/gallery-molten-casting.jpg',
    caption: 'High-temperature foundry furnace pouring pure molten aluminium into continuous water-cooled ingot casting lines.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-mark-emblem',
    title: 'Precision Machined SMI Corporate Emblem',
    category: 'Industrial Processes',
    imageUrl: '/images/logo-mark.jpg',
    caption: 'Macro view of the 3D brushed metallic SMI monogram emblem with precision chamfered edges and warm metallurgical core.',
    aspectRatio: 'landscape',
  },
];
