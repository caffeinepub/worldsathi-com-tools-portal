import { lazy, Suspense } from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import { AdminAuthProvider } from './contexts/AdminAuthContext';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

// Legal pages
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const DataRights = lazy(() => import('./pages/legal/DataRights'));

// Admin pages
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminBlogManagement = lazy(() => import('./pages/admin/BlogManagement'));
const AdminUserManagement = lazy(() => import('./pages/admin/UserManagement'));
const AdminForumModeration = lazy(() => import('./pages/admin/ForumModeration'));
const AdminUserStatistics = lazy(() => import('./pages/admin/UserStatistics'));
const AdminToolManagement = lazy(() => import('./pages/admin/ToolManagement'));
const AdminToolsDiagnostic = lazy(() => import('./pages/admin/ToolsDiagnostic'));
const AdminUsageAnalytics = lazy(() => import('./pages/admin/UsageAnalytics'));
const AdminQuotaManagement = lazy(() => import('./pages/admin/QuotaManagement'));
const AdminResetUserStats = lazy(() => import('./pages/admin/ResetUserStats'));

// Tool pages - Calculators
const Calculator1 = lazy(() => import('./pages/tools/Calculator1'));
const Calculator3 = lazy(() => import('./pages/tools/Calculator3'));
const Calculator4 = lazy(() => import('./pages/tools/Calculator4'));
const Calculator5 = lazy(() => import('./pages/tools/Calculator5'));
const Calculator6 = lazy(() => import('./pages/tools/Calculator6'));
const Calculator7 = lazy(() => import('./pages/tools/Calculator7'));
const AgeCalculator = lazy(() => import('./pages/tools/calculators/AgeCalculator'));
const DateCalculator = lazy(() => import('./pages/tools/calculators/DateCalculator'));
const DiscountCalculator = lazy(() => import('./pages/tools/calculators/DiscountCalculator'));
const PercentageChangeCalculator = lazy(() => import('./pages/tools/calculators/PercentageChangeCalculator'));
const StandardDeviationCalculator = lazy(() => import('./pages/tools/calculators/StandardDeviationCalculator'));

// Tool pages - Converters
const Converter1 = lazy(() => import('./pages/tools/Converter1'));
const Converter2 = lazy(() => import('./pages/tools/Converter2'));
const Converter3 = lazy(() => import('./pages/tools/Converter3'));
const Converter4 = lazy(() => import('./pages/tools/Converter4'));
const Converter5 = lazy(() => import('./pages/tools/Converter5'));
const NumberBaseConverter = lazy(() => import('./pages/tools/converters/NumberBaseConverter'));
const AreaConverter = lazy(() => import('./pages/tools/converters/AreaConverter'));
const SpeedConverter = lazy(() => import('./pages/tools/converters/SpeedConverter'));
const CurrencyConverter = lazy(() => import('./pages/tools/converters/CurrencyConverter'));
const TemperatureConverter = lazy(() => import('./pages/tools/converters/TemperatureConverter'));

// Tool pages - Generators
const Generator1 = lazy(() => import('./pages/tools/Generator1'));
const Generator2 = lazy(() => import('./pages/tools/Generator2'));
const Generator3 = lazy(() => import('./pages/tools/Generator3'));
const Generator4 = lazy(() => import('./pages/tools/Generator4'));
const Generator5 = lazy(() => import('./pages/tools/Generator5'));
const BarcodeGenerator = lazy(() => import('./pages/tools/generators/BarcodeGenerator'));
const UsernameGenerator = lazy(() => import('./pages/tools/generators/UsernameGenerator'));
const GradientPatternGenerator = lazy(() => import('./pages/tools/generators/GradientPatternGenerator'));
const GradientArtStudio = lazy(() => import('./pages/tools/generators/GradientArtStudio'));
const SvgPatternDesigner = lazy(() => import('./pages/tools/generators/SvgPatternDesigner'));
const MeshGradientCreator = lazy(() => import('./pages/tools/generators/MeshGradientCreator'));

// Tool pages - Analyzers
const Analyzer1 = lazy(() => import('./pages/tools/Analyzer1'));
const ReadabilityAnalyzer = lazy(() => import('./pages/tools/analyzers/ReadabilityAnalyzer'));
const ColorPaletteExtractor = lazy(() => import('./pages/tools/analyzers/ColorPaletteExtractor'));
const TextAnalyzer = lazy(() => import('./pages/tools/analyzers/TextAnalyzer'));

// Tool pages - Image Tools
const Image1 = lazy(() => import('./pages/tools/Image1'));
const Image2 = lazy(() => import('./pages/tools/Image2'));
const Image3 = lazy(() => import('./pages/tools/Image3'));
const DuotoneImageFilter = lazy(() => import('./pages/tools/image-tools/DuotoneImageFilter'));

// Tool pages - Data Tools
const Data1 = lazy(() => import('./pages/tools/Data1'));
const Data2 = lazy(() => import('./pages/tools/Data2'));
const Data3 = lazy(() => import('./pages/tools/Data3'));
const XmlToJsonConverter = lazy(() => import('./pages/tools/XmlToJsonConverter'));

// Tool pages - SEO Tools
const Seo1 = lazy(() => import('./pages/tools/Seo1'));
const Seo2 = lazy(() => import('./pages/tools/Seo2'));
const Seo3 = lazy(() => import('./pages/tools/Seo3'));

// Tool pages - Developer Tools
const Developer1 = lazy(() => import('./pages/tools/Developer1'));
const Developer2 = lazy(() => import('./pages/tools/Developer2'));
const Developer3 = lazy(() => import('./pages/tools/Developer3'));
const JsonToTypescript = lazy(() => import('./pages/tools/developer-tools/JsonToTypescript'));
const ColorCodeConverter = lazy(() => import('./pages/tools/developer-tools/ColorCodeConverter'));
const LoremIpsumCode = lazy(() => import('./pages/tools/developer-tools/LoremIpsumCode'));
const UuidValidator = lazy(() => import('./pages/tools/developer-tools/UuidValidator'));
const BcryptGenerator = lazy(() => import('./pages/tools/developer-tools/BcryptGenerator'));
const SecureRandomString = lazy(() => import('./pages/tools/developer-tools/SecureRandomString'));
const FaviconGenerator = lazy(() => import('./pages/tools/developer-tools/FaviconGenerator'));
const HashGenerator = lazy(() => import('./pages/tools/developer-tools/HashGenerator'));

// Tool pages - Text Tools
const CharacterCounter = lazy(() => import('./pages/tools/text-tools/CharacterCounter'));
const CaseConverter = lazy(() => import('./pages/tools/text-tools/CaseConverter'));
const TextReverser = lazy(() => import('./pages/tools/text-tools/TextReverser'));
const RemoveDuplicateLines = lazy(() => import('./pages/tools/text-tools/RemoveDuplicateLines'));
const TextDiffChecker = lazy(() => import('./pages/tools/text-tools/TextDiffChecker'));

// Tool pages - Productivity
const Productivity1 = lazy(() => import('./pages/tools/Productivity1'));

// Tool pages - Finance
const MortgageCalculator = lazy(() => import('./pages/tools/finance-tools/MortgageCalculator'));

// Create query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Create root route with Layout
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

// Create routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <HomePage />
    </Suspense>
  ),
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/category/$categorySlug',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CategoryPage />
    </Suspense>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Dashboard />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AboutUs />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ContactUs />
    </Suspense>
  ),
});

// Legal routes
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal/privacy',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <PrivacyPolicy />
    </Suspense>
  ),
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal/terms',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TermsOfService />
    </Suspense>
  ),
});

const cookieRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal/cookies',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CookiePolicy />
    </Suspense>
  ),
});

const dataRightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal/data-rights',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <DataRights />
    </Suspense>
  ),
});

// Admin routes
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/login',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminLogin />
    </Suspense>
  ),
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminDashboard />
    </Suspense>
  ),
});

const adminBlogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/blog',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminBlogManagement />
    </Suspense>
  ),
});

const adminUsersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/users',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminUserManagement />
    </Suspense>
  ),
});

const adminForumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/forum',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminForumModeration />
    </Suspense>
  ),
});

const adminStatisticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/statistics',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminUserStatistics />
    </Suspense>
  ),
});

const adminToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/tools',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminToolManagement />
    </Suspense>
  ),
});

const adminToolsDiagnosticRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/tools-diagnostic',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminToolsDiagnostic />
    </Suspense>
  ),
});

const adminUsageAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/usage-analytics',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminUsageAnalytics />
    </Suspense>
  ),
});

const adminQuotaManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/quota-management',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminQuotaManagement />
    </Suspense>
  ),
});

const adminResetUserStatsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/reset-user-stats',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AdminResetUserStats />
    </Suspense>
  ),
});

// Tool routes - Calculators
const calculator1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/percentage-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Calculator1 />
    </Suspense>
  ),
});

const calculator3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/bmi-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Calculator3 />
    </Suspense>
  ),
});

const calculator4Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/tip-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Calculator4 />
    </Suspense>
  ),
});

const calculator5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/loan-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Calculator5 />
    </Suspense>
  ),
});

const calculator6Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/compound-interest-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Calculator6 />
    </Suspense>
  ),
});

const calculator7Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/calorie-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Calculator7 />
    </Suspense>
  ),
});

const ageCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/age-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AgeCalculator />
    </Suspense>
  ),
});

const dateCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/date-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <DateCalculator />
    </Suspense>
  ),
});

const discountCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/discount-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <DiscountCalculator />
    </Suspense>
  ),
});

const percentageChangeCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/percentage-change-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <PercentageChangeCalculator />
    </Suspense>
  ),
});

const standardDeviationCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/standard-deviation-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <StandardDeviationCalculator />
    </Suspense>
  ),
});

// Tool routes - Converters
const converter1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/unit-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Converter1 />
    </Suspense>
  ),
});

const converter2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/currency-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CurrencyConverter />
    </Suspense>
  ),
});

const converter3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/temperature-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TemperatureConverter />
    </Suspense>
  ),
});

const converter4Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/timezone-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Converter4 />
    </Suspense>
  ),
});

const converter5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/weight-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Converter5 />
    </Suspense>
  ),
});

const numberBaseConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/number-base-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <NumberBaseConverter />
    </Suspense>
  ),
});

const areaConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/area-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AreaConverter />
    </Suspense>
  ),
});

const speedConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/speed-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <SpeedConverter />
    </Suspense>
  ),
});

const currencyConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/currency-converter-v2',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CurrencyConverter />
    </Suspense>
  ),
});

const temperatureConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/temperature-converter-v2',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TemperatureConverter />
    </Suspense>
  ),
});

// Tool routes - Generators
const generator1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/password-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Generator1 />
    </Suspense>
  ),
});

const generator2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/qr-code-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Generator2 />
    </Suspense>
  ),
});

const generator3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/lorem-ipsum-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Generator3 />
    </Suspense>
  ),
});

const generator4Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/uuid-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Generator4 />
    </Suspense>
  ),
});

const generator5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/color-palette-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Generator5 />
    </Suspense>
  ),
});

const barcodeGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/barcode-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <BarcodeGenerator />
    </Suspense>
  ),
});

const usernameGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/username-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <UsernameGenerator />
    </Suspense>
  ),
});

const gradientPatternGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/gradient-pattern-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <GradientPatternGenerator />
    </Suspense>
  ),
});

const gradientArtStudioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/gradient-art-studio',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <GradientArtStudio />
    </Suspense>
  ),
});

const svgPatternDesignerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/svg-pattern-designer',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <SvgPatternDesigner />
    </Suspense>
  ),
});

const meshGradientCreatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/mesh-gradient-creator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <MeshGradientCreator />
    </Suspense>
  ),
});

// Tool routes - Analyzers
const analyzer1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/analyzers/text-analyzer',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TextAnalyzer />
    </Suspense>
  ),
});

const readabilityAnalyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/analyzers/readability-analyzer',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ReadabilityAnalyzer />
    </Suspense>
  ),
});

const colorPaletteExtractorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/analyzers/color-palette-extractor',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ColorPaletteExtractor />
    </Suspense>
  ),
});

const textAnalyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/analyzers/text-analyzer-v2',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TextAnalyzer />
    </Suspense>
  ),
});

// Tool routes - Image Tools
const image1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-resizer',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Image1 />
    </Suspense>
  ),
});

const image2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-compressor',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Image2 />
    </Suspense>
  ),
});

const image3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-format-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Image3 />
    </Suspense>
  ),
});

const duotoneImageFilterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/duotone-filter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <DuotoneImageFilter />
    </Suspense>
  ),
});

// Tool routes - Data Tools
const data1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/json-formatter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Data1 />
    </Suspense>
  ),
});

const data2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/csv-to-json',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Data2 />
    </Suspense>
  ),
});

const data3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/base64-tool',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Data3 />
    </Suspense>
  ),
});

const xmlToJsonConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/xml-to-json',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <XmlToJsonConverter />
    </Suspense>
  ),
});

// Tool routes - SEO Tools
const seo1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/meta-tags-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Seo1 />
    </Suspense>
  ),
});

const seo2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/keyword-density',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Seo2 />
    </Suspense>
  ),
});

const seo3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/og-preview',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Seo3 />
    </Suspense>
  ),
});

// Tool routes - Developer Tools
const developer1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/regex-tester',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Developer1 />
    </Suspense>
  ),
});

const developer2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/hash-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <HashGenerator />
    </Suspense>
  ),
});

const developer3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/url-encoder',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Developer3 />
    </Suspense>
  ),
});

const jsonToTypescriptRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/json-to-typescript',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <JsonToTypescript />
    </Suspense>
  ),
});

const colorCodeConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/color-code-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ColorCodeConverter />
    </Suspense>
  ),
});

const loremIpsumCodeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/lorem-ipsum-code',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <LoremIpsumCode />
    </Suspense>
  ),
});

const uuidValidatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/uuid-validator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <UuidValidator />
    </Suspense>
  ),
});

const bcryptGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/bcrypt-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <BcryptGenerator />
    </Suspense>
  ),
});

const secureRandomStringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/secure-random-string',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <SecureRandomString />
    </Suspense>
  ),
});

const faviconGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/favicon-generator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <FaviconGenerator />
    </Suspense>
  ),
});

const hashGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/hash-generator-v2',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <HashGenerator />
    </Suspense>
  ),
});

// Tool routes - Text Tools
const characterCounterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/character-counter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CharacterCounter />
    </Suspense>
  ),
});

const caseConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/case-converter',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <CaseConverter />
    </Suspense>
  ),
});

const textReverserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/text-reverser',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TextReverser />
    </Suspense>
  ),
});

const removeDuplicateLinesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/remove-duplicate-lines',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <RemoveDuplicateLines />
    </Suspense>
  ),
});

const textDiffCheckerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/text-diff-checker',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <TextDiffChecker />
    </Suspense>
  ),
});

// Tool routes - Productivity
const productivity1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/productivity/pomodoro-timer',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Productivity1 />
    </Suspense>
  ),
});

// Tool routes - Finance
const mortgageCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/finance-tools/mortgage-calculator',
  component: () => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <MortgageCalculator />
    </Suspense>
  ),
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  categoryRoute,
  dashboardRoute,
  aboutRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
  cookieRoute,
  dataRightsRoute,
  adminLoginRoute,
  adminDashboardRoute,
  adminBlogRoute,
  adminUsersRoute,
  adminForumRoute,
  adminStatisticsRoute,
  adminToolsRoute,
  adminToolsDiagnosticRoute,
  adminUsageAnalyticsRoute,
  adminQuotaManagementRoute,
  adminResetUserStatsRoute,
  calculator1Route,
  calculator3Route,
  calculator4Route,
  calculator5Route,
  calculator6Route,
  calculator7Route,
  ageCalculatorRoute,
  dateCalculatorRoute,
  discountCalculatorRoute,
  percentageChangeCalculatorRoute,
  standardDeviationCalculatorRoute,
  converter1Route,
  converter2Route,
  converter3Route,
  converter4Route,
  converter5Route,
  numberBaseConverterRoute,
  areaConverterRoute,
  speedConverterRoute,
  currencyConverterRoute,
  temperatureConverterRoute,
  generator1Route,
  generator2Route,
  generator3Route,
  generator4Route,
  generator5Route,
  barcodeGeneratorRoute,
  usernameGeneratorRoute,
  gradientPatternGeneratorRoute,
  gradientArtStudioRoute,
  svgPatternDesignerRoute,
  meshGradientCreatorRoute,
  analyzer1Route,
  readabilityAnalyzerRoute,
  colorPaletteExtractorRoute,
  textAnalyzerRoute,
  image1Route,
  image2Route,
  image3Route,
  duotoneImageFilterRoute,
  data1Route,
  data2Route,
  data3Route,
  xmlToJsonConverterRoute,
  seo1Route,
  seo2Route,
  seo3Route,
  developer1Route,
  developer2Route,
  developer3Route,
  jsonToTypescriptRoute,
  colorCodeConverterRoute,
  loremIpsumCodeRoute,
  uuidValidatorRoute,
  bcryptGeneratorRoute,
  secureRandomStringRoute,
  faviconGeneratorRoute,
  hashGeneratorRoute,
  characterCounterRoute,
  caseConverterRoute,
  textReverserRoute,
  removeDuplicateLinesRoute,
  textDiffCheckerRoute,
  productivity1Route,
  mortgageCalculatorRoute,
]);

// Create router
const router = createRouter({ routeTree });

// App component
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>
        <RouterProvider router={router} />
      </AdminAuthProvider>
    </QueryClientProvider>
  );
}
