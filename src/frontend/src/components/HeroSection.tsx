import { Link } from '@tanstack/react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32"
      style={{
        backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x800.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <img
              src="/assets/generated/logo-primary.dim_200x60.png"
              alt="Worldsathi Tools"
              className="h-12 w-auto md:h-16"
            />
          </div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Essential Tools & Growing
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Your Central Hub for Online Tools
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Privacy-first, user-friendly tools for calculations, conversions, generation, analysis, and productivity.
            All free, no signup required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link to="/tools/percentage-calculator">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
