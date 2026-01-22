
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialties?: string[];
  experience?: string;
  motto?: string;
  whatsapp?: string;
  linkedin?: string;
  twitter?: string;
}

export interface PriceTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
