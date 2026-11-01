export interface FinishOption {
  id: string;
  name: string;
  colorHex: string;
  roughness: number;
  metalness: number;
  clearcoat?: number;
  description: string;
  category: 'Architectural Anodised' | 'Thermoset Powder' | 'Metallic Luster';
  hexCode: string;
  highlightColor: string;
}

export const finishesData: FinishOption[] = [
  {
    id: 'natural-silver',
    name: 'Natural Silver',
    colorHex: '#D8DEE4',
    roughness: 0.18,
    metalness: 0.95,
    clearcoat: 0.3,
    description:
      'Refined classic specular metallic sheen that highlights the pure metallurgical grain of high-purity architectural aluminium.',
    category: 'Architectural Anodised',
    hexCode: '#D8DEE4',
    highlightColor: '#FFFFFF',
  },
  {
    id: 'matte-black',
    name: 'Matte Black',
    colorHex: '#1C1F24',
    roughness: 0.45,
    metalness: 0.3,
    clearcoat: 0.1,
    description:
      'Deep architectural black with soft light absorption, offering a commanding presence for minimalist fenestration and facades.',
    category: 'Thermoset Powder',
    hexCode: '#1C1F24',
    highlightColor: '#6B7280',
  },
  {
    id: 'champagne',
    name: 'Champagne',
    colorHex: '#C5B69E',
    roughness: 0.22,
    metalness: 0.88,
    clearcoat: 0.4,
    description:
      'Subtle warm golden-silver tone produced by electrolytic coloration, synonymous with international luxury hospitality projects.',
    category: 'Architectural Anodised',
    hexCode: '#C5B69E',
    highlightColor: '#FFF3DD',
  },
  {
    id: 'bronze',
    name: 'Architectural Bronze',
    colorHex: '#5A4638',
    roughness: 0.32,
    metalness: 0.78,
    clearcoat: 0.2,
    description:
      'Earthy, rich metallic bronze designed for timeless architectural elegance with deep light absorption and warm specular highlights.',
    category: 'Architectural Anodised',
    hexCode: '#5A4638',
    highlightColor: '#B08E73',
  },
  {
    id: 'pure-white',
    name: 'Architectural White',
    colorHex: '#F6F8FA',
    roughness: 0.28,
    metalness: 0.15,
    clearcoat: 0.5,
    description:
      'High-reflectance pure white coating with superior gloss retention and UV degradation resistance for modern commercial facades.',
    category: 'Thermoset Powder',
    hexCode: '#F6F8FA',
    highlightColor: '#FFFFFF',
  },
];

