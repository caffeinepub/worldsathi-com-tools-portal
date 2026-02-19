/**
 * Tool category definitions with metadata
 * Each category includes display information and icon references
 */

export interface CategoryMetadata {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  description: string;
}

export const TOOL_CATEGORIES: CategoryMetadata[] = [
  {
    id: 'calculators',
    name: 'calculators',
    displayName: 'Calculators',
    icon: '/assets/generated/icon-calculator.dim_64x64.png',
    description: 'Mathematical and financial calculation tools',
  },
  {
    id: 'converters',
    name: 'converters',
    displayName: 'Converters',
    icon: '/assets/generated/icon-converter.dim_64x64.png',
    description: 'Unit and format conversion utilities',
  },
  {
    id: 'generators',
    name: 'generators',
    displayName: 'Generators',
    icon: '/assets/generated/icon-generator.dim_64x64.png',
    description: 'Generate passwords, codes, and content',
  },
  {
    id: 'analyzers',
    name: 'analyzers',
    displayName: 'Analyzers',
    icon: '/assets/generated/icon-analyzer.dim_64x64.png',
    description: 'Analyze text, images, and data',
  },
  {
    id: 'productivity',
    name: 'productivity',
    displayName: 'Productivity',
    icon: '/assets/generated/icon-productivity.dim_64x64.png',
    description: 'Boost your productivity and efficiency',
  },
  {
    id: 'text-tools',
    name: 'text-tools',
    displayName: 'Text Tools',
    icon: '/assets/generated/icon-text-tools.dim_64x64.png',
    description: 'Text manipulation and formatting tools',
  },
  {
    id: 'image-tools',
    name: 'image-tools',
    displayName: 'Image Tools',
    icon: '/assets/generated/icon-image-tools.dim_64x64.png',
    description: 'Image editing and processing utilities',
  },
  {
    id: 'data-tools',
    name: 'data-tools',
    displayName: 'Data Tools',
    icon: '/assets/generated/icon-data-tools.dim_64x64.png',
    description: 'Data conversion and validation tools',
  },
  {
    id: 'seo-tools',
    name: 'seo-tools',
    displayName: 'SEO Tools',
    icon: '/assets/generated/icon-seo-tools.dim_64x64.png',
    description: 'Search engine optimization utilities',
  },
  {
    id: 'dev-tools',
    name: 'dev-tools',
    displayName: 'Developer Tools',
    icon: '/assets/generated/icon-dev-tools.dim_64x64.png',
    description: 'Tools for developers and programmers',
  },
  {
    id: 'finance-tools',
    name: 'finance-tools',
    displayName: 'Finance Tools',
    icon: '/assets/generated/icon-calculator.dim_64x64.png',
    description: 'Financial planning and calculation tools',
  },
  {
    id: 'health-tools',
    name: 'health-tools',
    displayName: 'Health Tools',
    icon: '/assets/generated/icon-calculator.dim_64x64.png',
    description: 'Health and fitness calculators',
  },
  {
    id: 'misc-tools',
    name: 'misc-tools',
    displayName: 'Miscellaneous',
    icon: '/assets/generated/icon-generator.dim_64x64.png',
    description: 'Various utility tools',
  },
];

export function getCategoryById(id: string): CategoryMetadata | undefined {
  return TOOL_CATEGORIES.find((cat) => cat.id === id);
}

export function getCategoryDisplayName(id: string): string {
  return getCategoryById(id)?.displayName || id;
}
