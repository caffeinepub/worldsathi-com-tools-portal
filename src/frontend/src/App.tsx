import { lazy, Suspense } from 'react';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import Layout from './components/layout/Layout';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { AdminAuthGuard } from './components/AdminAuthGuard';

const queryClient = new QueryClient();

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// Admin pages
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const BlogManagement = lazy(() => import('./pages/admin/BlogManagement'));
const UserManagement = lazy(() => import('./pages/admin/UserManagement'));
const ForumModeration = lazy(() => import('./pages/admin/ForumModeration'));
const UserStatistics = lazy(() => import('./pages/admin/UserStatistics'));
const ToolsDiagnostic = lazy(() => import('./pages/admin/ToolsDiagnostic'));
const ToolManagement = lazy(() => import('./pages/admin/ToolManagement'));

// Tool pages
const Calculator1 = lazy(() => import('./pages/tools/Calculator1'));
const Calculator3 = lazy(() => import('./pages/tools/Calculator3'));
const Calculator4 = lazy(() => import('./pages/tools/Calculator4'));
const Calculator5 = lazy(() => import('./pages/tools/Calculator5'));
const Calculator6 = lazy(() => import('./pages/tools/Calculator6'));
const Calculator7 = lazy(() => import('./pages/tools/Calculator7'));
const PercentageChangeCalculator = lazy(() => import('./pages/tools/calculators/PercentageChangeCalculator'));
const StandardDeviationCalculator = lazy(() => import('./pages/tools/calculators/StandardDeviationCalculator'));

const Converter1 = lazy(() => import('./pages/tools/Converter1'));
const Converter2 = lazy(() => import('./pages/tools/Converter2'));
const Converter3 = lazy(() => import('./pages/tools/Converter3'));
const Converter4 = lazy(() => import('./pages/tools/Converter4'));
const Converter5 = lazy(() => import('./pages/tools/Converter5'));
const NumberBaseConverter = lazy(() => import('./pages/tools/converters/NumberBaseConverter'));

const Analyzer1 = lazy(() => import('./pages/tools/Analyzer1'));

const Data1 = lazy(() => import('./pages/tools/Data1'));
const Data2 = lazy(() => import('./pages/tools/Data2'));
const Data3 = lazy(() => import('./pages/tools/Data3'));
const JsonToXmlConverter = lazy(() => import('./pages/tools/data-tools/JsonToXmlConverter'));
const SqlFormatter = lazy(() => import('./pages/tools/data-tools/SqlFormatter'));

const Developer1 = lazy(() => import('./pages/tools/Developer1'));
const Developer2 = lazy(() => import('./pages/tools/Developer2'));
const Developer3 = lazy(() => import('./pages/tools/Developer3'));
const BcryptGenerator = lazy(() => import('./pages/tools/developer-tools/BcryptGenerator'));
const ColorCodeConverter = lazy(() => import('./pages/tools/developer-tools/ColorCodeConverter'));
const JsonToTypescript = lazy(() => import('./pages/tools/developer-tools/JsonToTypescript'));
const JwtDecoder = lazy(() => import('./pages/tools/developer-tools/JwtDecoder'));
const LoremIpsumCode = lazy(() => import('./pages/tools/developer-tools/LoremIpsumCode'));
const SecureRandomString = lazy(() => import('./pages/tools/developer-tools/SecureRandomString'));
const UuidValidator = lazy(() => import('./pages/tools/developer-tools/UuidValidator'));

const MortgageCalculator = lazy(() => import('./pages/tools/finance-tools/MortgageCalculator'));

const Generator1 = lazy(() => import('./pages/tools/Generator1'));
const Generator2 = lazy(() => import('./pages/tools/Generator2'));
const Generator3 = lazy(() => import('./pages/tools/Generator3'));
const Generator4 = lazy(() => import('./pages/tools/Generator4'));
const Generator5 = lazy(() => import('./pages/tools/Generator5'));

const Image1 = lazy(() => import('./pages/tools/Image1'));
const Image2 = lazy(() => import('./pages/tools/Image2'));
const Image3 = lazy(() => import('./pages/tools/Image3'));
const ImageCropper = lazy(() => import('./pages/tools/ImageCropper'));
const ImageFilter = lazy(() => import('./pages/tools/ImageFilter'));
const ImageRotator = lazy(() => import('./pages/tools/ImageRotator'));
const ImageToBase64 = lazy(() => import('./pages/tools/ImageToBase64'));
const ImageWatermark = lazy(() => import('./pages/tools/ImageWatermark'));

const Productivity1 = lazy(() => import('./pages/tools/Productivity1'));

const RobotsTxtGenerator = lazy(() => import('./pages/tools/seo-tools/RobotsTxtGenerator'));
const Seo1 = lazy(() => import('./pages/tools/Seo1'));
const Seo2 = lazy(() => import('./pages/tools/Seo2'));
const Seo3 = lazy(() => import('./pages/tools/Seo3'));

const CharacterCounter = lazy(() => import('./pages/tools/text-tools/CharacterCounter'));
const CaseConverter = lazy(() => import('./pages/tools/text-tools/CaseConverter'));
const TextReverser = lazy(() => import('./pages/tools/text-tools/TextReverser'));
const RemoveDuplicateLines = lazy(() => import('./pages/tools/text-tools/RemoveDuplicateLines'));

const XmlToJsonConverter = lazy(() => import('./pages/tools/XmlToJsonConverter'));

// Root route with Layout
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/category/$categoryId',
  component: CategoryPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

// Admin routes
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/login',
  component: AdminLogin,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/dashboard',
  component: () => (
    <AdminAuthGuard>
      <AdminDashboard />
    </AdminAuthGuard>
  ),
});

const blogManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/blog-management',
  component: () => (
    <AdminAuthGuard>
      <BlogManagement />
    </AdminAuthGuard>
  ),
});

const userManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/user-management',
  component: () => (
    <AdminAuthGuard>
      <UserManagement />
    </AdminAuthGuard>
  ),
});

const forumModerationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/forum-moderation',
  component: () => (
    <AdminAuthGuard>
      <ForumModeration />
    </AdminAuthGuard>
  ),
});

const userStatisticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/user-statistics',
  component: () => (
    <AdminAuthGuard>
      <UserStatistics />
    </AdminAuthGuard>
  ),
});

const toolsDiagnosticRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/tools-diagnostic',
  component: () => (
    <AdminAuthGuard>
      <ToolsDiagnostic />
    </AdminAuthGuard>
  ),
});

const toolManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/tool-management',
  component: () => (
    <AdminAuthGuard>
      <ToolManagement />
    </AdminAuthGuard>
  ),
});

// Tool routes
const percentageCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/percentage-calculator',
  component: Calculator1,
});

const bmiCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/bmi-calculator',
  component: Calculator3,
});

const tipCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/tip-calculator',
  component: Calculator4,
});

const loanCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/loan-calculator',
  component: Calculator5,
});

const compoundInterestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/compound-interest',
  component: Calculator6,
});

const calorieCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/calorie-calculator',
  component: Calculator7,
});

const percentageChangeCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/percentage-change-calculator',
  component: PercentageChangeCalculator,
});

const standardDeviationCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/calculators/standard-deviation-calculator',
  component: StandardDeviationCalculator,
});

const unitConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/unit-converter',
  component: Converter1,
});

const currencyConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/currency-converter',
  component: Converter2,
});

const temperatureConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/temperature-converter',
  component: Converter3,
});

const timezoneConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/timezone-converter',
  component: Converter4,
});

const weightConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/weight-converter',
  component: Converter5,
});

const numberBaseConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/converters/number-base-converter',
  component: NumberBaseConverter,
});

const textAnalyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/analyzers/text-analyzer',
  component: Analyzer1,
});

const jsonFormatterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/json-formatter',
  component: Data1,
});

const csvToJsonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/csv-to-json',
  component: Data2,
});

const base64ToolRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/base64-tool',
  component: Data3,
});

const jsonToXmlRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/json-to-xml',
  component: JsonToXmlConverter,
});

const sqlFormatterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/data-tools/sql-formatter',
  component: SqlFormatter,
});

const regexTesterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/regex-tester',
  component: Developer1,
});

const hashGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/hash-generator',
  component: Developer2,
});

const urlEncoderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/url-encoder',
  component: Developer3,
});

const bcryptGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/bcrypt-generator',
  component: BcryptGenerator,
});

const colorCodeConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/color-code-converter',
  component: ColorCodeConverter,
});

const jsonToTypescriptRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/json-to-typescript',
  component: JsonToTypescript,
});

const jwtDecoderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/jwt-decoder',
  component: JwtDecoder,
});

const loremIpsumCodeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/lorem-ipsum-code',
  component: LoremIpsumCode,
});

const secureRandomStringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/secure-random-string',
  component: SecureRandomString,
});

const uuidValidatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/developer-tools/uuid-validator',
  component: UuidValidator,
});

const mortgageCalculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/finance-tools/mortgage-calculator',
  component: MortgageCalculator,
});

const passwordGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/password-generator',
  component: Generator1,
});

const qrCodeGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/qr-code-generator',
  component: Generator2,
});

const loremIpsumRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/lorem-ipsum',
  component: Generator3,
});

const uuidGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/uuid-generator',
  component: Generator4,
});

const colorPaletteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/generators/color-palette',
  component: Generator5,
});

const imageResizerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-resizer',
  component: Image1,
});

const imageCompressorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-compressor',
  component: Image2,
});

const imageFormatConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-format-converter',
  component: Image3,
});

const imageCropperRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-cropper',
  component: ImageCropper,
});

const imageFilterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-filter',
  component: ImageFilter,
});

const imageRotatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-rotator',
  component: ImageRotator,
});

const imageToBase64Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-to-base64',
  component: ImageToBase64,
});

const imageWatermarkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/image-tools/image-watermark',
  component: ImageWatermark,
});

const pomodoroTimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/productivity/pomodoro-timer',
  component: Productivity1,
});

const robotsTxtGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/robots-txt-generator',
  component: RobotsTxtGenerator,
});

const metaTagsGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/meta-tags-generator',
  component: Seo1,
});

const keywordDensityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/keyword-density',
  component: Seo2,
});

const ogPreviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/seo-tools/og-preview',
  component: Seo3,
});

const characterCounterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/character-counter',
  component: CharacterCounter,
});

const caseConverterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/case-converter',
  component: CaseConverter,
});

const textReverserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/text-reverser',
  component: TextReverser,
});

const removeDuplicateLinesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/text-tools/remove-duplicate-lines',
  component: RemoveDuplicateLines,
});

const xmlToJsonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools/xml-to-json',
  component: XmlToJsonConverter,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  categoryRoute,
  dashboardRoute,
  adminLoginRoute,
  adminDashboardRoute,
  blogManagementRoute,
  userManagementRoute,
  forumModerationRoute,
  userStatisticsRoute,
  toolsDiagnosticRoute,
  toolManagementRoute,
  percentageCalculatorRoute,
  bmiCalculatorRoute,
  tipCalculatorRoute,
  loanCalculatorRoute,
  compoundInterestRoute,
  calorieCalculatorRoute,
  percentageChangeCalculatorRoute,
  standardDeviationCalculatorRoute,
  unitConverterRoute,
  currencyConverterRoute,
  temperatureConverterRoute,
  timezoneConverterRoute,
  weightConverterRoute,
  numberBaseConverterRoute,
  textAnalyzerRoute,
  jsonFormatterRoute,
  csvToJsonRoute,
  base64ToolRoute,
  jsonToXmlRoute,
  sqlFormatterRoute,
  regexTesterRoute,
  hashGeneratorRoute,
  urlEncoderRoute,
  bcryptGeneratorRoute,
  colorCodeConverterRoute,
  jsonToTypescriptRoute,
  jwtDecoderRoute,
  loremIpsumCodeRoute,
  secureRandomStringRoute,
  uuidValidatorRoute,
  mortgageCalculatorRoute,
  passwordGeneratorRoute,
  qrCodeGeneratorRoute,
  loremIpsumRoute,
  uuidGeneratorRoute,
  colorPaletteRoute,
  imageResizerRoute,
  imageCompressorRoute,
  imageFormatConverterRoute,
  imageCropperRoute,
  imageFilterRoute,
  imageRotatorRoute,
  imageToBase64Route,
  imageWatermarkRoute,
  pomodoroTimerRoute,
  robotsTxtGeneratorRoute,
  metaTagsGeneratorRoute,
  keywordDensityRoute,
  ogPreviewRoute,
  characterCounterRoute,
  caseConverterRoute,
  textReverserRoute,
  removeDuplicateLinesRoute,
  xmlToJsonRoute,
]);

// Create router
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <AdminAuthProvider>
          <RouterProvider router={router} />
        </AdminAuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
