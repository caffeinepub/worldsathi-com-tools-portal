import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { TOOL_CATEGORIES } from '../constants/categories';
import { ALL_TOOLS } from '../constants/tools';

export default function CategoryCards() {
  // Only show categories that have tools
  const categoriesWithTools = TOOL_CATEGORIES.filter((category) =>
    ALL_TOOLS.some((tool) => tool.category === category.id)
  );

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quick Category Access</h2>
          <p className="text-muted-foreground text-lg">
            Jump directly to the tools you need
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoriesWithTools.map((category) => {
            const toolCount = ALL_TOOLS.filter((tool) => tool.category === category.id).length;
            
            return (
              <Link key={category.id} to="/category/$categoryId" params={{ categoryId: category.id }}>
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.05] hover:-translate-y-1 border-2 border-border hover:border-primary/50 cursor-pointer">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <img src={category.icon} alt={category.displayName} className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-xl flex items-center justify-between">
                      {category.displayName}
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.description}
                    </CardDescription>
                    <div className="pt-2">
                      <span className="text-xs text-muted-foreground font-medium">
                        {toolCount} {toolCount === 1 ? 'tool' : 'tools'} available
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
