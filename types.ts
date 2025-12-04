import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string; // Can be an anchor (#id) or a route (/path)
  isExternal?: boolean;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  subPrice?: string; // e.g. "per maand"
  description: string;
  features: PricingFeature[];
  highlight?: boolean;
  ctaText: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface LayoutProps {
  children: ReactNode;
}