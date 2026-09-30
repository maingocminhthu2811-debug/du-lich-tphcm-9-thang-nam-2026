/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Data structures and types for HCMC Tourism 2026 Interactive Infographic
 */

export interface FlipCardData {
  id: string;
  boxNumber: number;
  title: string;
  frontBullets: string[];
  backBullets?: string[];
  mainValue: string;
  growth: string;
  growthPositive: boolean;
  targetPercent: string;
  targetAbsolute: string;
  accentColor: string;
  iconType: 'currency' | 'global' | 'domestic';
  additionalNote?: string;
}

export interface EventHighlight {
  id: string;
  indexNumber: number;
  title: string;
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  tag: string;
  colorScheme: 'emerald' | 'amber' | 'cyan';
}

export interface TourismProduct {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  icon: string;
}
