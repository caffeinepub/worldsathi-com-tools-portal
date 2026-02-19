import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import CategoryPage from './pages/CategoryPage';

// Essential tool pages (5-10 tools)
import Calculator1 from './pages/tools/Calculator1';
import Calculator3 from './pages/tools/Calculator3';
import Converter1 from './pages/tools/Converter1';
import Converter2 from './pages/tools/Converter2';
import Generator1 from './pages/tools/Generator1';
import Generator2 from './pages/tools/Generator2';
import Analyzer1 from './pages/tools/Analyzer1';
import Productivity1 from './pages/tools/Productivity1';

import { Toaster } from '@/components/ui/sonner';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

// Category route
const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/category/$categoryId',
  component: CategoryPage,
});

// Tool routes - 8 essential tools
const percentageCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/percentage-calculator',
  component: Calculator1,
});

const bmiCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/bmi-calculator',
  component: Calculator3,
});

const unitConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/unit-converter',
  component: Converter1,
});

const currencyConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/currency-converter',
  component: Converter2,
});

const passwordGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/password-generator',
  component: Generator1,
});

const qrCodeGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/qr-code-generator',
  component: Generator2,
});

const textAnalyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-analyzer',
  component: Analyzer1,
});

const pomodoroTimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/pomodoro-timer',
  component: Productivity1,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  categoryRoute,
  percentageCalculatorRoute,
  bmiCalculatorRoute,
  unitConverterRoute,
  currencyConverterRoute,
  passwordGeneratorRoute,
  qrCodeGeneratorRoute,
  textAnalyzerRoute,
  pomodoroTimerRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
