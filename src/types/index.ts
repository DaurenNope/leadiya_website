// Leadiya TypeScript Types

export interface NavProps {
  scrolled: boolean;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Lead {
  id: string;
  company: string;
  city: string;
  director: string;
  phone: string;
  icpScore: number;
  tenderAmount: string | null;
  updatedAgo: string;
  isHot: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  featured: boolean;
  buttonText: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DataSource {
  name: string;
  url?: string;
}

export interface Integration {
  name: string;
  url?: string;
}

// Section component props
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Animation props
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// 3D Scene props
export interface Scene3DProps {
  className?: string;
  enableInteraction?: boolean;
}

// Dashboard mockup props
export interface DashboardProps {
  leads: Lead[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  city: string;
  industry: string;
  icpScore: number;
  hotOnly: boolean;
}