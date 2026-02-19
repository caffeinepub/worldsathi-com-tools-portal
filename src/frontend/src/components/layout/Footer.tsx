import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'worldsathi-tools');

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <img
              src="/assets/generated/logo-primary.dim_200x60.png"
              alt="Worldsathi Tools"
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Your central hub for online tools. Privacy-first, user-friendly, and always free.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tools/percentage-calculator" className="text-muted-foreground hover:text-foreground">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/tools/unit-converter" className="text-muted-foreground hover:text-foreground">
                  Converters
                </Link>
              </li>
              <li>
                <Link to="/tools/password-generator" className="text-muted-foreground hover:text-foreground">
                  Generators
                </Link>
              </li>
              <li>
                <Link to="/tools/text-analyzer" className="text-muted-foreground hover:text-foreground">
                  Analyzers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-2">© {currentYear} Worldsathi Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
