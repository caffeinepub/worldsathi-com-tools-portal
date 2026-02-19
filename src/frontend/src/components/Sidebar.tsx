import TrendingTools from './sidebar/TrendingTools';
import QuickCategoryShortcuts from './sidebar/QuickCategoryShortcuts';
import RecentBlogPosts from './sidebar/RecentBlogPosts';

export default function Sidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-20">
      <TrendingTools />
      <QuickCategoryShortcuts />
      <RecentBlogPosts />
    </aside>
  );
}
