import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Generate UTM tracking params
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'worldsathi';
  const caffeineLink = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Worldsathi</h3>
            <p className="text-sm text-muted-foreground">
              Your complete toolkit for productivity. Free online tools for everyone.
            </p>
          </div>

          {/* Quick Tools Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Popular Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tools/calculators/percentage-calculator" className="text-muted-foreground hover:text-foreground">
                  Percentage Calculator
                </Link>
              </li>
              <li>
                <Link to="/tools/converters/unit-converter" className="text-muted-foreground hover:text-foreground">
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link to="/tools/generators/password-generator" className="text-muted-foreground hover:text-foreground">
                  Password Generator
                </Link>
              </li>
              <li>
                <Link to="/tools/analyzers/text-analyzer" className="text-muted-foreground hover:text-foreground">
                  Text Analyzer
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/$categoryId" params={{ categoryId: 'calculators' }} className="text-muted-foreground hover:text-foreground">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/category/$categoryId" params={{ categoryId: 'converters' }} className="text-muted-foreground hover:text-foreground">
                  Converters
                </Link>
              </li>
              <li>
                <Link to="/category/$categoryId" params={{ categoryId: 'generators' }} className="text-muted-foreground hover:text-foreground">
                  Generators
                </Link>
              </li>
              <li>
                <Link to="/category/$categoryId" params={{ categoryId: 'analyzers' }} className="text-muted-foreground hover:text-foreground">
                  Analyzers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {currentYear} Worldsathi. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 fill-destructive text-destructive" /> using{' '}
              <a 
                href={caffeineLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
