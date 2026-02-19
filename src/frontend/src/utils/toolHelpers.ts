/**
 * Utility functions for tool-related operations
 */

import type { ToolMetadata, ToolFilter, ToolSortOption } from '../types/tools';

/**
 * Filters tools based on search query and category
 * @param tools - Array of tool metadata
 * @param filter - Filter criteria
 * @returns Filtered array of tools
 */
export function filterTools(tools: ToolMetadata[], filter: ToolFilter): ToolMetadata[] {
  let filtered = [...tools];

  // Apply search filter
  if (filter.search) {
    const searchLower = filter.search.toLowerCase();
    filtered = filtered.filter(
      (tool) =>
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }

  // Apply category filter
  if (filter.categories && filter.categories.length > 0) {
    filtered = filtered.filter((tool) => filter.categories!.includes(tool.category as any));
  }

  // Apply sorting
  if (filter.sortBy) {
    filtered = sortTools(filtered, filter.sortBy);
  }

  return filtered;
}

/**
 * Sorts tools based on the specified option
 * @param tools - Array of tool metadata
 * @param sortBy - Sort option
 * @returns Sorted array of tools
 */
export function sortTools(tools: ToolMetadata[], sortBy: ToolSortOption): ToolMetadata[] {
  const sorted = [...tools];

  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'popular':
      return sorted.sort((a, b) => (b.favoriteCount || 0) - (a.favoriteCount || 0));
    case 'recent':
      // For now, maintain original order (could be enhanced with creation date)
      return sorted;
    default:
      return sorted;
  }
}

/**
 * Generates related tool suggestions based on category
 * @param currentToolId - ID of the current tool
 * @param allTools - Array of all available tools
 * @param maxSuggestions - Maximum number of suggestions to return
 * @returns Array of related tools
 */
export function getRelatedTools(
  currentToolId: string,
  allTools: ToolMetadata[],
  maxSuggestions: number = 6
): ToolMetadata[] {
  const currentTool = allTools.find((t) => t.id === currentToolId);
  if (!currentTool) return [];

  // Find tools in the same category, excluding the current tool
  const related = allTools
    .filter((tool) => tool.category === currentTool.category && tool.id !== currentToolId)
    .slice(0, maxSuggestions);

  return related;
}

/**
 * Maps tool ID to its route path
 * @param toolId - Tool identifier
 * @returns Route path for the tool
 */
export function getToolRoute(toolId: string): string {
  return `/tools/${toolId}`;
}
