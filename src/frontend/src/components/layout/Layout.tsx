import { ReactNode } from 'react';
import { useLocation } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from '../Breadcrumbs';
import { generateBreadcrumbs } from '../../utils/breadcrumbHelpers';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {breadcrumbs.length > 0 && (
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
