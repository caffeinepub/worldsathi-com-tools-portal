import React from 'react';
import HeroSection from '@/components/HeroSection';
import NewToolsSection from '@/components/NewToolsSection';
import CategoryCards from '@/components/CategoryCards';
import FeaturedToolsSection from '@/components/FeaturedToolsSection';
import PopularToolsByCategory from '@/components/PopularToolsByCategory';
import TrustSignals from '@/components/TrustSignals';
import Sidebar from '@/components/Sidebar';
import QuickCategoryShortcuts from '@/components/sidebar/QuickCategoryShortcuts';
import { ALL_TOOLS } from '@/constants/tools';

export default function HomePage() {
  // Get featured tools (first 6 tools for the homepage)
  const featuredTools = ALL_TOOLS.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* New/Recently Added Tools Section */}
      <NewToolsSection tools={ALL_TOOLS} />

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Quick Category Access - Moved before Browse By Category */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Quick Category Access
              </h2>
              <QuickCategoryShortcuts />
            </section>

            {/* Top Tools Categories */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Browse By Category
              </h2>
              <CategoryCards />
            </section>

            {/* Best Tools / Social Proof */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Best Tools
              </h2>
              <FeaturedToolsSection tools={featuredTools} />
            </section>

            {/* Popular Tools by Category */}
            <PopularToolsByCategory />
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4">
            <Sidebar />
          </aside>
        </div>
      </div>

      {/* Trust Signals & Content */}
      <TrustSignals />
    </div>
  );
}
