import { Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import HomePage from './pages/HomePage';

// Blog Pages
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost1 from './pages/blog/BlogPost1';
import BlogPost2 from './pages/blog/BlogPost2';
import BlogPost3 from './pages/blog/BlogPost3';
// Placeholders for missing blog posts
import BlogPost4 from './pages/blog/BlogPost4';
import BlogPost5 from './pages/blog/BlogPost5';
import BlogPost6 from './pages/blog/BlogPost6';

// Awards Pages
import AwardsIndex from './pages/awards/AwardsIndex';
import AwardDetail1 from './pages/awards/AwardDetail1';
import AwardDetail2 from './pages/awards/AwardDetail2';
import AwardDetail3 from './pages/awards/AwardDetail3';
import CertificatePage from './pages/awards/CertificatePage';
import RecognitionPage from './pages/awards/RecognitionPage';

// Video Pages
import VideoGalleryPage from './pages/videos/VideoGalleryPage';

// Services Pages
import ServiceWebDev from './pages/services/ServiceWebDev';
import ServiceOTA from './pages/services/ServiceOTA';
import ServiceSourcing from './pages/services/ServiceSourcing';
import ServiceTraining from './pages/services/ServiceTraining';
import ServiceAI from './pages/services/ServiceAI';

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
    <div className="min-h-screen text-white overflow-x-hidden bg-gradient-to-b from-[#0a0f1c] to-black">
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

          {/* Awards & Recognition */}
          <Route path="/awards" element={<AwardsIndex />} />
          <Route path="/awards/fastest-growing-companies-2024" element={<AwardDetail1 />} />
          <Route path="/awards/best-digital-solutions-provider-2024" element={<AwardDetail2 />} />
          <Route path="/awards/excellence-import-export-2023" element={<AwardDetail3 />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/recognition" element={<RecognitionPage />} />

          {/* Video Gallery */}
          <Route path="/videos" element={<VideoGalleryPage />} />

          {/* Services */}
          <Route path="/services/website-development" element={<ServiceWebDev />} />
          <Route path="/services/ota-management" element={<ServiceOTA />} />
          <Route path="/services/international-sourcing" element={<ServiceSourcing />} />
          <Route path="/services/training" element={<ServiceTraining />} />
          <Route path="/services/ai-automation" element={<ServiceAI />} />

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
  );
}

export default App;