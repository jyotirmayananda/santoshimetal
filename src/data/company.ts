export interface Director {
  name: string;
  role: string;
  image?: string;
  description?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  cin: string;
  incorporationDate: string;
  companyType: string;
  industry: string;
  tagline: string;
  secondaryTagline: string;
  shortDescription: string;
  brandPhilosophy: string;
  registeredOffice: {
    careOf: string;
    street: string;
    locality: string;
    subDistrict: string;
    city: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
  };
  directors: Director[];
  activities: string[];
}

export const companyInfo: CompanyInfo = {
  name: "Santoshi Metal Industries Private Limited",
  shortName: "Santoshi Metal Industries",
  cin: "U24202OD2026PTC055660",
  incorporationDate: "28 September 2026",
  companyType: "Private Limited",
  industry: "Aluminium Manufacturing and Processing",
  tagline: "Engineering Aluminium. Elevating Possibilities.",
  secondaryTagline: "Where Metal Meets Mastery.",
  shortDescription:
    "Santoshi Metal Industries Private Limited is a modern industrial enterprise delivering precision-engineered aluminium solutions across powder coating, anodising, ingot manufacturing, and metal sales.",
  brandPhilosophy:
    "Built upon precision, technical integrity, and uncompromising modern standards, Santoshi Metal Industries approaches aluminium as both an engineered material and a catalyst for industrial advancement.",
  registeredOffice: {
    careOf: "Sri Kumuda Chandra Sahu",
    street: "Annapurna Bazar",
    locality: "Kabisuryanagar",
    subDistrict: "Kodala",
    city: "Ganjam",
    district: "Ganjam",
    state: "Odisha",
    country: "India",
    pincode: "761104",
    fullAddress:
      "C/O Kumud Chandra Sahu, Annapurna Bazar, Kabisuryanagar, Kodala, Ganjam, Odisha, India – 761104",
  },
  directors: [
    {
      name: "Sri Kumuda Chandra Sahu",
      role: "Director",
      image: "/images/leadership/kumuda-chandra-sahu.jpg",
      description:
        "Steering corporate stewardship, registered governance, and foundational industrial vision for Santoshi Metal Industries Private Limited.",
    },
    {
      name: "Bikranta Sahu",
      role: "Director",
      image: "/images/leadership/bikranta-sahu.jpg",
      description:
        "Spearheading modern manufacturing operations, precision technology adoption, and commercial partnerships across India.",
    },
  ],
  activities: [
    "Aluminium Powder Coating",
    "Aluminium Anodising",
    "Aluminium Ingot Manufacturing and Supply",
    "Aluminium Sales and Supply",
  ],
};
