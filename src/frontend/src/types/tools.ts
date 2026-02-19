/**
 * TypeScript type definitions for tools
 */

export interface ToolMetadata {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  path: string;
  tags?: string[];
  favoriteCount?: number;
  subcategory?: string;
  introduction?: string;
  usabilitySteps?: string[];
}

export type ToolCategory =
  | 'calculators'
  | 'converters'
  | 'generators'
  | 'analyzers'
  | 'productivity'
  | 'text-tools'
  | 'image-tools'
  | 'data-tools'
  | 'seo-tools'
  | 'dev-tools'
  | 'finance-tools'
  | 'health-tools'
  | 'misc-tools';

export interface ToolFilter {
  search?: string;
  categories?: ToolCategory[];
  sortBy?: ToolSortOption;
}

export type ToolSortOption = 'name-asc' | 'name-desc' | 'popular' | 'recent';

export interface RelatedTool {
  name: string;
  path: string;
}

export interface ToolFAQ {
  question: string;
  answer: string;
}
