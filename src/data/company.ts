export interface Director {
  name: string;
  designation: string;
  image?: string;
}

export interface CompanyData {
  legalName: string;
  brandName: string;
  cin: string;
  incorporationDate: string;
  companyType: string;
  industry: string;
  registeredOffice: {
    careOf: string;
    street: string;
    locality: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  directors: Director[];
  tagline: string;
  secondaryTagline: string;
  coreActivities: string[];
}

export const companyData: CompanyData = {
  legalName: 'SANTOSHI METAL INDUSTRIES PRIVATE LIMITED',
  brandName: 'Santoshi Metal Industries',
  cin: 'U24202OD2026PTC055660',
  incorporationDate: '28 September 2026',
  companyType: 'Private Limited Company',
  industry: 'Aluminium Manufacturing, Processing and Supply',
  registeredOffice: {
    careOf: 'C/O Kumud Chandra Sahu',
    street: 'Annapurna Bazar',
    locality: 'Kabisuryanagar, Kodala',
    district: 'Ganjam',
    state: 'Odisha',
    pincode: '761104',
    country: 'India',
    fullAddress:
      'C/O Kumud Chandra Sahu, Annapurna Bazar, Kabisuryanagar, Kodala, Ganjam, Odisha – 761104, India',
  },
  directors: [
    {
      name: 'Bikrant Kumar Sahu',
      designation: 'Director',
      image: '/images/leadership/bikrant-kumar-sahu.jpg',
    },
    {
      name: 'Sri Kumuda Chandra Sahu',
      designation: 'Director',
      image: '/images/leadership/kumuda-chandra-sahu.jpg',
    },
  ],
  tagline: 'ENGINEERING ALUMINIUM. SHAPING THE FUTURE.',
  secondaryTagline: 'Precision in Every Surface.',
  coreActivities: [
    'Aluminium Powder Coating',
    'Aluminium Anodising',
    'Aluminium Ingot Manufacturing and Supply',
    'Aluminium Sales and Supply',
  ],
};

