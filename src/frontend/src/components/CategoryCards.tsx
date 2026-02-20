import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TOOL_CATEGORIES } from '../constants/categories';
import { ALL_TOOLS } from '../constants/tools';
import DynamicIcon from './DynamicIcon';

export default function CategoryCards() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Browse by <span className="text-primary">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive collection of tools organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TOOL_CATEGORIES.map((category) => {
            const toolCount = ALL_TOOLS.filter((tool) => tool.category === category.id).length;
            
            return (
              <Link key={category.id} to="/category/$categoryId" params={{ categoryId: category.id }}>
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 border border-border">
                  <CardHeader>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform group-hover:scale-110">
                      <DynamicIcon name={category.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.displayName}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {toolCount} {toolCount === 1 ? 'tool' : 'tools'} available
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
