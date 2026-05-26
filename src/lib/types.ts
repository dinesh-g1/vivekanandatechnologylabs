// ── Core Types for Vivekananda Technology Labs ──────────────────────────────

export interface Industry {
  slug: string;
  name: string;
  nameSanskrit?: string;
  description: string;
  icon: string;
  color: string;
  businesses: Business[];
  order: number;
  status: "active" | "upcoming";
}

export interface Business {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  industry: string;
  website: string;
  logo?: string;
  status: "live" | "in-progress" | "planned";
  founded?: string;
  features: string[];
  technologies: string[];
  links: {
    website?: string;
    github?: string;
    docs?: string;
    linkedin?: string;
  };
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin: string;
  github?: string;
}

export interface CoreValue {
  title: string;
  sanskrit: string;
  description: string;
  icon: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  organization?: string;
}
