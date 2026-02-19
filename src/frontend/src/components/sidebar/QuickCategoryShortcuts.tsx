import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers } from 'lucide-react';
import { TOOL_CATEGORIES } from '../../constants/categories';
import { ALL_TOOLS } from '../../constants/tools';

export default function QuickCategoryShortcuts() {
  // Only show categories that have tools
  const categoriesWithTools = TOOL_CATEGORIES.filter((category) =>
    ALL_TOOLS.some((tool) => tool.category === category.id)
  );

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Layers className="h-5 w-5 text-secondary" />
          Quick Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categoriesWithTools.map((category) => (
          <Link key={category.id} to="/category/$categoryId" params={{ categoryId: category.id }}>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 transition-colors group cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                <img src={category.icon} alt={category.displayName} className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {category.displayName}
              </span>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
