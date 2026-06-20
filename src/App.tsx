import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { AIChatbot } from './components/AIChatbot';
import { ScrollToTop } from './components/ScrollToTop';

// Home (eager — it's the landing page / LCP route)
import HomePage from './pages/HomePage';

// Blog Pages (lazy)
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const BlogPost1 = lazy(() => import('./pages/blog/BlogPost1'));
const BlogPost2 = lazy(() => import('./pages/blog/BlogPost2'));
const BlogPost3 = lazy(() => import('./pages/blog/BlogPost3'));
const BlogPost4 = lazy(() => import('./pages/blog/BlogPost4'));
const BlogPost5 = lazy(() => import('./pages/blog/BlogPost5'));
const BlogPost6 = lazy(() => import('./pages/blog/BlogPost6'));

// Video Pages (lazy)
const VideoGalleryPage = lazy(() => import('./pages/videos/VideoGalleryPage'));

// Services Pages (lazy)
const ServiceWebDev = lazy(() => import('./pages/services/ServiceWebDev'));
const ServiceWebManagement = lazy(() => import('./pages/services/ServiceWebManagement'));
const ServiceOTA = lazy(() => import('./pages/services/ServiceOTA'));
const ServiceSocialMedia = lazy(() => import('./pages/services/ServiceSocialMedia'));
const ServiceSourcing = lazy(() => import('./pages/services/ServiceSourcing'));
const ServiceTraining = lazy(() => import('./pages/services/ServiceTraining'));
const ServiceAI = lazy(() => import('./pages/services/ServiceAI'));
const ServiceDigitalGrowth = lazy(() => import('./pages/services/ServiceDigitalGrowth'));
const ServiceSupplierVerification = lazy(() => import('./pages/services/ServiceSupplierVerification'));

// Other Pages (lazy)
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const WarehousePage = lazy(() => import('./pages/WarehousePage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const AboutPage = lazy(() => import('./pages/AboutUs'));

/* Full-screen fallback shown while a lazy route chunk loads */
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-10 h-10 rounded-full border-2 border-blue-400/30 border-t-blue-400 animate-spin" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-foreground overflow-x-hidden bg-background transition-colors duration-500">
        <Navbar />
        <main>
          <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/how-to-source-products-from-china" element={<BlogPost1 />} />
            <Route path="/blog/top-digital-skills-2025" element={<BlogPost2 />} />
            <Route path="/blog/hotel-ota-management-guide" element={<BlogPost3 />} />
            <Route path="/blog/shipping-methods-comparison" element={<BlogPost4 />} />
            <Route path="/blog/school-enrollment-case-study" element={<BlogPost5 />} />
            <Route path="/blog/ai-automation-small-business" element={<BlogPost6 />} />

            {/* Video Gallery */}
            <Route path="/videos" element={<VideoGalleryPage />} />

            {/* Services */}
            <Route path="/services/website-development" element={<ServiceWebDev />} />
            <Route path="/services/website-management" element={<ServiceWebManagement />} />
            <Route path="/services/ota-management" element={<ServiceOTA />} />
            <Route path="/services/social-media" element={<ServiceSocialMedia />} />
            <Route path="/services/ai-automation" element={<ServiceAI />} />
            <Route path="/services/digital-growth" element={<ServiceDigitalGrowth />} />
            <Route path="/services/international-sourcing" element={<ServiceSourcing />} />
            <Route path="/services/supplier-verification" element={<ServiceSupplierVerification />} />
            <Route path="/services/training" element={<ServiceTraining />} />

            {/* Other Pages */}
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/warehouse" element={<WarehousePage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />

        {/* Floating widgets — available on every page */}
        <ScrollToTop />
        <AIChatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
