import HeroSection from '../components/HeroSection';
import FeaturedToolsGrid from '../components/FeaturedToolsGrid';
import CategoryCards from '../components/CategoryCards';
import PopularToolsByCategory from '../components/PopularToolsByCategory';
import NewToolsSection from '../components/NewToolsSection';
import TrustSignals from '../components/TrustSignals';
import Sidebar from '../components/Sidebar';
import { ALL_TOOLS } from '../constants/tools';

export default function HomePage() {
  // Get new tools for the New Tools section
  const newTools = ALL_TOOLS.filter((tool) => tool.isNew);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content with Sidebar */}
      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {/* Featured Tools Grid */}
            <FeaturedToolsGrid />

            {/* New Tools Section */}
            {newTools.length > 0 && <NewToolsSection tools={newTools} />}

            {/* Category Cards - Browse by Category */}
            <CategoryCards />

            {/* Popular Tools by Category */}
            <PopularToolsByCategory />

            {/* Trust Signals */}
            <TrustSignals />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
