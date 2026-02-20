import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { TOOL_CATEGORIES } from '../constants/categories';
import { ALL_TOOLS } from '../constants/tools';
import { getToolPath } from '../utils/toolHelpers';
import DynamicIcon from './DynamicIcon';

export default function PopularToolsByCategory() {
  // Get all 16 categories
  const allCategories = TOOL_CATEGORIES;

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our tools organized by category
          </p>
        </div>

        <div className="space-y-12">
          {allCategories.map((category) => {
            const allCategoryTools = ALL_TOOLS.filter((tool) => tool.category === category.id);
            const categoryTools = allCategoryTools.slice(0, 4);
            const hasMoreTools = allCategoryTools.length > 4;
            
            return (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <DynamicIcon name={category.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        <span className="text-accent">{category.displayName.split(' ')[0]}</span>
                        {category.displayName.includes(' ') && ' ' + category.displayName.split(' ').slice(1).join(' ')}
                      </h3>
                      <p className="text-muted-foreground">{category.description}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {allCategoryTools.length} {allCategoryTools.length === 1 ? 'tool' : 'tools'} available
                      </p>
                    </div>
                  </div>
                  {hasMoreTools && (
                    <Button variant="secondary" asChild>
                      <Link to="/category/$categoryId" params={{ categoryId: category.id }}>
                        View All
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>

                {categoryTools.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categoryTools.map((tool) => {
                      const toolPath = getToolPath(tool.id, ALL_TOOLS);
                      
                      return (
                        <Link key={tool.id} to={toolPath}>
                          <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 border border-border">
                            <CardHeader>
                              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform group-hover:scale-110">
                                <DynamicIcon name={tool.icon} size={32} className="text-primary" />
                              </div>
                              <CardTitle className="text-lg">{tool.name}</CardTitle>
                              <CardDescription className="line-clamp-2 text-sm">
                                {tool.description}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No tools available in this category yet
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
