export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedPoints: string[];
  commonProblems: string[];
  image: string;
  badge?: string;
  isSpecialty?: boolean;
}

export interface ApplianceType {
  id: string;
  name: string;
  image: string;
  description: string;
  badge?: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'refrigeration' | 'laundry' | 'cooking' | 'specialty' | 'diagnostics';
  categoryLabel: string;
  image: string;
  alt: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Refrigeration' | 'Laundry' | 'Cooking' | 'Pricing & Service';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  applianceType: string;
  applianceBrand: string;
  issueDescription: string;
  preferredDate: string;
  preferredTimeSlot: string;
  isEmergency: boolean;
}
