import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { TOOL_CATEGORIES } from '../constants/categories';
import { ALL_TOOLS } from '../constants/tools';

export default function PopularToolsByCategory() {
  // Get categories that have tools
  const categoriesWithTools = TOOL_CATEGORIES.filter((category) =>
    ALL_TOOLS.some((tool) => tool.category === category.id)
  );

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground text-lg">
            Explore our tools organized by category
          </p>
        </div>

        <div className="space-y-12">
          {categoriesWithTools.map((category) => {
            const categoryTools = ALL_TOOLS.filter((tool) => tool.category === category.id).slice(0, 4);
            
            if (categoryTools.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img src={category.icon} alt={category.displayName} className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.displayName}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <Button variant="secondary" asChild>
                    <Link to="/category/$categoryId" params={{ categoryId: category.id }}>
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryTools.map((tool) => (
                    <Link key={tool.id} to={tool.path}>
                      <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 border border-border">
                        <CardHeader>
                          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform group-hover:scale-110">
                            <img src={tool.icon} alt={tool.name} className="h-8 w-8" />
                          </div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <CardDescription className="line-clamp-2 text-sm">
                            {tool.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
