import { useParams } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CategoryHero from '../components/CategoryHero';
import CategoryFilters, { SortOption } from '../components/CategoryFilters';
import FeaturedToolsSection from '../components/FeaturedToolsSection';
import Breadcrumbs from '../components/Breadcrumbs';
import { getCategoryById } from '../constants/categories';
import { ALL_TOOLS } from '../constants/tools';
import { sortTools } from '../utils/toolHelpers';

export default function CategoryPage() {
  const { categoryId } = useParams({ strict: false });
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  const category = useMemo(() => {
    return getCategoryById(categoryId || '');
  }, [categoryId]);

  const categoryTools = useMemo(() => {
    const tools = ALL_TOOLS.filter((tool) => tool.category === categoryId);
    return sortTools(tools, sortBy);
  }, [categoryId, sortBy]);

  const featuredTools = useMemo(() => {
    // Get top 3-5 tools as featured (for now, first 3)
    return categoryTools.slice(0, 3);
  }, [categoryTools]);

  const regularTools = useMemo(() => {
    // Remaining tools after featured
    return categoryTools.slice(3);
  }, [categoryTools]);

  if (!category) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The category you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <CategoryHero categoryId={categoryId || ''} />
      
      <div className="container py-8">
        <Breadcrumbs
          items={[
            { label: category.displayName },
          ]}
        />

        <div className="mt-8 space-y-8">
          {/* Featured Tools */}
          {featuredTools.length > 0 && (
            <FeaturedToolsSection
              tools={featuredTools}
              title={`Featured ${category.displayName}`}
            />
          )}

          {/* Filters - Positioned at top */}
          <CategoryFilters
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {categoryTools.length} {categoryTools.length === 1 ? 'tool' : 'tools'}
          </div>

          {/* All Tools Grid */}
          {regularTools.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {regularTools.map((tool) => (
                <Link key={tool.id} to={tool.path}>
                  <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform group-hover:scale-110">
                        <img src={tool.icon} alt={tool.name} className="h-10 w-10" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Optional: Duplicate filters at bottom for convenience */}
          {regularTools.length > 8 && (
            <div className="pt-4">
              <CategoryFilters
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
          )}

          {categoryTools.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No tools available in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
