import { Link } from '@tanstack/react-router';
import { Button } from './Button';
import { Search, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x800.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Lighter overlay for better gradient visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/20 to-black/30"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
            <Zap className="h-4 w-4" />
            <span>125+ Professional Tools</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
            Your Complete{' '}
            <span className="text-accent font-extrabold">Toolkit</span>
            {' '}for Productivity
          </h1>

          {/* Subheading */}
          <p className="mb-10 text-lg text-white/90 md:text-xl lg:text-2xl drop-shadow-md">
            Free online tools for calculations, conversions, generation, and analysis. 
            Everything you need, all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/tools/calculators/percentage-calculator">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Explore Tools
              </Button>
            </Link>
            <Link to="/category/$categoryId" params={{ categoryId: 'calculators' }}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/30">
                Browse Categories
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>No Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success"></div>
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
