import { Link } from '@tanstack/react-router';
import { TOOL_CATEGORIES } from '../../constants/categories';
import DynamicIcon from '../DynamicIcon';

export default function QuickCategoryShortcuts() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Quick Category Access</h3>
      <ul className="space-y-2">
        {TOOL_CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link
              to="/category/$categoryId"
              params={{ categoryId: category.id }}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <DynamicIcon name={category.icon} size={18} className="flex-shrink-0" />
              <span>{category.displayName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
