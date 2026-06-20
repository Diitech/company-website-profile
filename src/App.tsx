import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./sections/Navbar";
import { Footer } from "./sections/Footer";
import { AIChatbot } from "./components/AIChatbot";
import { ScrollToTop } from "./components/ScrollToTop";

import { SEOHead } from "./components/SEO/SEOHead";

// Home (eager — it's the landing page / LCP route)

// Blog Pages (lazy)
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex"));
const BlogPost1 = lazy(() => import("./pages/blog/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/blog/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/blog/BlogPost3"));
const BlogPost4 = lazy(() => import("./pages/blog/BlogPost4"));
const BlogPost5 = lazy(() => import("./pages/blog/BlogPost5"));
const BlogPost6 = lazy(() => import("./pages/blog/BlogPost6"));

// Video Pages (lazy)
const VideoGalleryPage = lazy(() => import("./pages/videos/VideoGalleryPage"));

// Services Pages (lazy)
const ServiceWebDev = lazy(() => import("./pages/services/ServiceWebDev"));
const ServiceWebManagement = lazy(
  () => import("./pages/services/ServiceWebManagement"),
);
const ServiceOTA = lazy(() => import("./pages/services/ServiceOTA"));
const ServiceSocialMedia = lazy(
  () => import("./pages/services/ServiceSocialMedia"),
);
const ServiceSourcing = lazy(() => import("./pages/services/ServiceSourcing"));
const ServiceTraining = lazy(() => import("./pages/services/ServiceTraining"));
const ServiceAI = lazy(() => import("./pages/services/ServiceAI"));
const ServiceDigitalGrowth = lazy(
  () => import("./pages/services/ServiceDigitalGrowth"),
);
const ServiceSupplierVerification = lazy(
  () => import("./pages/services/ServiceSupplierVerification"),
);

// Other Pages (lazy)
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const WarehousePage = lazy(() => import("./pages/WarehousePage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const AboutPage = lazy(() => import("./pages/AboutUs"));

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
              <Route
                path="/"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/"
                      title="Dmultichoice - Digital Solutions & Global Procurement"
                      description="Dmultichoice provides digital solutions, global procurement, and training to help businesses grow, scale, and compete globally through technology, automation, and smart purchasing."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: "Dmultichoice",
                        url: "https://www.dmultichoice.com/",
                        potentialAction: {
                          "@type": "SearchAction",
                          target:
                            "https://www.dmultichoice.com/?q={search_term_string}",
                          "query-input": "required name=search_term_string",
                        },
                      }}
                    />
                    <HomePage />
                  </>
                }
              />

              {/* Blog Routes */}
              <Route
                path="/blog"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog"
                      title="DMULTICHOICE Blog | Digital Solutions & Global Procurement"
                      description="Latest insights on digital solutions, global sourcing, procurement, and AI-driven automation from DMULTICHOICE."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "DMULTICHOICE Blog",
                        url: "https://www.dmultichoice.com/blog",
                      }}
                    />
                    <BlogIndex />
                  </>
                }
              />
              <Route
                path="/blog/how-to-source-products-from-china"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog/how-to-source-products-from-china"
                      title="How to Source Products from China | DMULTICHOICE"
                      description="A practical guide to sourcing quality products from China with smart procurement and reliable processes."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: "How to Source Products from China",
                        url: "https://www.dmultichoice.com/blog/how-to-source-products-from-china",
                      }}
                    />
                    <BlogPost1 />
                  </>
                }
              />
              <Route
                path="/blog/top-digital-skills-2025"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog/top-digital-skills-2025"
                      title="Top Digital Skills (2025) | DMULTICHOICE"
                      description="Discover the most in-demand digital skills for 2025 and how they can help businesses grow."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: "Top Digital Skills 2025",
                        url: "https://www.dmultichoice.com/blog/top-digital-skills-2025",
                      }}
                    />
                    <BlogPost2 />
                  </>
                }
              />
              <Route
                path="/blog/hotel-ota-management-guide"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog/hotel-ota-management-guide"
                      title="Hotel OTA Management Guide | DMULTICHOICE"
                      description="Learn how to manage OTA channels effectively to improve bookings, visibility, and revenue."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: "Hotel OTA Management Guide",
                        url: "https://www.dmultichoice.com/blog/hotel-ota-management-guide",
                      }}
                    />
                    <BlogPost3 />
                  </>
                }
              />
              <Route
                path="/blog/shipping-methods-comparison"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog/shipping-methods-comparison"
                      title="Shipping Methods Comparison | DMULTICHOICE"
                      description="Compare shipping methods to choose the best option for timing, cost, and reliability."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: "Shipping Methods Comparison",
                        url: "https://www.dmultichoice.com/blog/shipping-methods-comparison",
                      }}
                    />
                    <BlogPost4 />
                  </>
                }
              />
              <Route
                path="/blog/school-enrollment-case-study"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog/school-enrollment-case-study"
                      title="School Enrollment Case Study | DMULTICHOICE"
                      description="Explore a real-world case study on enrollment growth through technology and digital execution."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: "School Enrollment Case Study",
                        url: "https://www.dmultichoice.com/blog/school-enrollment-case-study",
                      }}
                    />
                    <BlogPost5 />
                  </>
                }
              />
              <Route
                path="/blog/ai-automation-small-business"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/blog/ai-automation-small-business"
                      title="AI Automation for Small Business | DMULTICHOICE"
                      description="Learn how AI automation can help small businesses reduce costs, improve workflows, and scale."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: "AI Automation for Small Business",
                        url: "https://www.dmultichoice.com/blog/ai-automation-small-business",
                      }}
                    />
                    <BlogPost6 />
                  </>
                }
              />

              {/* Video Gallery */}
              <Route
                path="/videos"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/videos"
                      title="Videos | DMULTICHOICE"
                      description="Explore videos from DMULTICHOICE covering digital solutions, procurement, and training."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Videos",
                        url: "https://www.dmultichoice.com/videos",
                      }}
                    />
                    <VideoGalleryPage />
                  </>
                }
              />

              {/* Services */}
              <Route
                path="/services/website-development"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/website-development"
                      title="Website Development | DMULTICHOICE"
                      description="Professional website development services to help your business grow with modern digital solutions."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Development",
                        url: "https://www.dmultichoice.com/services/website-development",
                      }}
                    />
                    <ServiceWebDev />
                  </>
                }
              />
              <Route
                path="/services/website-management"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/website-management"
                      title="Website Management | DMULTICHOICE"
                      description="Ongoing website management services to keep your digital presence fast, secure, and effective."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Website Management",
                        url: "https://www.dmultichoice.com/services/website-management",
                      }}
                    />
                    <ServiceWebManagement />
                  </>
                }
              />
              <Route
                path="/services/ota-management"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/ota-management"
                      title="OTA Management | DMULTICHOICE"
                      description="Manage your OTA channels to improve visibility, bookings, and revenue performance."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "OTA Management",
                        url: "https://www.dmultichoice.com/services/ota-management",
                      }}
                    />
                    <ServiceOTA />
                  </>
                }
              />
              <Route
                path="/services/social-media"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/social-media"
                      title="Social Media | DMULTICHOICE"
                      description="Social media services that help brands connect, grow engagement, and build trusted visibility."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Social Media",
                        url: "https://www.dmultichoice.com/services/social-media",
                      }}
                    />
                    <ServiceSocialMedia />
                  </>
                }
              />
              <Route
                path="/services/ai-automation"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/ai-automation"
                      title="AI Automation | DMULTICHOICE"
                      description="AI automation services to streamline operations, reduce costs, and improve business workflows."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "AI Automation",
                        url: "https://www.dmultichoice.com/services/ai-automation",
                      }}
                    />
                    <ServiceAI />
                  </>
                }
              />
              <Route
                path="/services/digital-growth"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/digital-growth"
                      title="Digital Growth | DMULTICHOICE"
                      description="Digital growth services designed to help businesses expand using strategy and performance execution."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Digital Growth",
                        url: "https://www.dmultichoice.com/services/digital-growth",
                      }}
                    />
                    <ServiceDigitalGrowth />
                  </>
                }
              />
              <Route
                path="/services/international-sourcing"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/international-sourcing"
                      title="International Sourcing | DMULTICHOICE"
                      description="International sourcing services that help you procure quality products with reliable processes."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "International Sourcing",
                        url: "https://www.dmultichoice.com/services/international-sourcing",
                      }}
                    />
                    <ServiceSourcing />
                  </>
                }
              />
              <Route
                path="/services/supplier-verification"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/supplier-verification"
                      title="Supplier Verification | DMULTICHOICE"
                      description="Supplier verification services to help you validate vendors, reduce risk, and source confidently."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Supplier Verification",
                        url: "https://www.dmultichoice.com/services/supplier-verification",
                      }}
                    />
                    <ServiceSupplierVerification />
                  </>
                }
              />
              <Route
                path="/services/training"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/services/training"
                      title="Training | DMULTICHOICE"
                      description="Training and consulting services to build digital skills and support global trade capability."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Training",
                        url: "https://www.dmultichoice.com/services/training",
                      }}
                    />
                    <ServiceTraining />
                  </>
                }
              />

              {/* Other Pages */}
              <Route
                path="/register"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/register"
                      title="Register | DMULTICHOICE"
                      description="Register with DMULTICHOICE to access digital solutions, procurement services, and training."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Register",
                        url: "https://www.dmultichoice.com/register",
                      }}
                    />
                    <RegistrationPage />
                  </>
                }
              />
              <Route
                path="/team"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/team"
                      title="Team | DMULTICHOICE"
                      description="Meet the team behind DMULTICHOICE and learn how we deliver digital solutions and global procurement."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Team",
                        url: "https://www.dmultichoice.com/team",
                      }}
                    />
                    <TeamPage />
                  </>
                }
              />
              <Route
                path="/warehouse"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/warehouse"
                      title="Warehouse | DMULTICHOICE"
                      description="Explore our warehouse capabilities supporting global procurement, logistics, and fulfillment."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Warehouse",
                        url: "https://www.dmultichoice.com/warehouse",
                      }}
                    />
                    <WarehousePage />
                  </>
                }
              />
              <Route
                path="/partners"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/partners"
                      title="Partners | DMULTICHOICE"
                      description="View DMULTICHOICE partners and explore how collaboration helps deliver better procurement outcomes."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Partners",
                        url: "https://www.dmultichoice.com/partners",
                      }}
                    />
                    <PartnersPage />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/contact"
                      title="Contact | DMULTICHOICE"
                      description="Contact DMULTICHOICE for digital solutions, global procurement, and training."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Contact",
                        url: "https://www.dmultichoice.com/contact",
                      }}
                    />
                    <ContactPage />
                  </>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/privacy-policy"
                      title="Privacy Policy | DMULTICHOICE"
                      description="Read the privacy policy of DMULTICHOICE."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Privacy Policy",
                        url: "https://www.dmultichoice.com/privacy-policy",
                      }}
                    />
                    <PrivacyPolicy />
                  </>
                }
              />
              <Route
                path="/terms"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/terms"
                      title="Terms & Conditions | DMULTICHOICE"
                      description="Read the terms and conditions for DMULTICHOICE."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Terms & Conditions",
                        url: "https://www.dmultichoice.com/terms",
                      }}
                    />
                    <TermsConditions />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <SEOHead
                      canonicalUrl="https://www.dmultichoice.com/about"
                      title="About DMULTICHOICE | Digital Solutions & Global Procurement"
                      description="Learn about DMULTICHOICE—our mission, vision, and how we help businesses grow through technology and global sourcing."
                      jsonLd={{
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        name: "About DMULTICHOICE",
                        url: "https://www.dmultichoice.com/about",
                      }}
                    />
                    <AboutPage />
                  </>
                }
              />
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
