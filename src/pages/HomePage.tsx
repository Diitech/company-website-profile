import { Suspense, lazy } from 'react';
import { Hero } from '../sections/Hero';

// Lazy load below-the-fold sections for smooth initial load
const OurStory = lazy(() => import('../sections/OurStory').then(m => ({ default: m.OurStory })));
const Benefits = lazy(() => import('../sections/Benefits').then(m => ({ default: m.Benefits })));
const Services = lazy(() => import('../sections/Services').then(m => ({ default: m.Services })));
const Products = lazy(() => import('../sections/Products').then(m => ({ default: m.Products })));
const Process = lazy(() => import('../sections/Process').then(m => ({ default: m.Process })));
const Training = lazy(() => import('../sections/Training').then(m => ({ default: m.Training })));
const Partnerships = lazy(() => import('../sections/Partnerships').then(m => ({ default: m.Partnerships })));
const Proof = lazy(() => import('../sections/Proof').then(m => ({ default: m.Proof })));
const Testimonials = lazy(() => import('../sections/Testimonials').then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import('../sections/CTA').then(m => ({ default: m.CTA })));

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-blue-400/30 border-t-blue-400 animate-spin" />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <section id="about">
          <OurStory />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section id="services">
          <Services />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section id="products">
          <Products />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section id="training">
          <Training />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section id="partners">
          <Partnerships />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Proof />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section id="contact">
          <CTA />
        </section>
      </Suspense>
    </>
  );
}

export default HomePage;
