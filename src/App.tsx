import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import HomePage from './pages/HomePage';

// Blog Pages
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost1 from './pages/blog/BlogPost1';
import BlogPost2 from './pages/blog/BlogPost2';
import BlogPost3 from './pages/blog/BlogPost3';
import BlogPost4 from './pages/blog/BlogPost4';
import BlogPost5 from './pages/blog/BlogPost5';
import BlogPost6 from './pages/blog/BlogPost6';

// Video Pages
import VideoGalleryPage from './pages/videos/VideoGalleryPage';

// Services Pages
import ServiceWebDev from './pages/services/ServiceWebDev';
import ServiceWebManagement from './pages/services/ServiceWebManagement';
import ServiceOTA from './pages/services/ServiceOTA';
import ServiceSocialMedia from './pages/services/ServiceSocialMedia';
import ServiceSourcing from './pages/services/ServiceSourcing';
import ServiceTraining from './pages/services/ServiceTraining';
import ServiceAI from './pages/services/ServiceAI';
import ServiceDigitalGrowth from './pages/services/ServiceDigitalGrowth';
import ServiceSupplierVerification from './pages/services/ServiceSupplierVerification';

// Other Pages
import RegistrationPage from './pages/RegistrationPage';
import TeamPage from './pages/TeamPage';
import WarehousePage from './pages/WarehousePage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AboutPage from './pages/AboutUs';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-foreground overflow-x-hidden bg-background transition-colors duration-500">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
