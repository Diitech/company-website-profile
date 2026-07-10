import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ManifestQuoteWidget } from "@/components/ManifestQuoteWidget";
import { VideoInView } from "./VideoInView";

/* ───────────────────────────────
   JSON-LD SCHEMA (SEO Structured Data)
   ─────────────────────────────── */
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DMULTICHOICE",
    alternateName: "DMULTICHOICE Digital Studio",
    url: "https://dmultichoice.com",
    logo: "https://dmultichoice.com/logo.png",
    description:
      "Full-service digital studio and procurement partner specializing in website development, mobile apps, custom software, AI automation, online training, property management, and insured import/export services.",
    foundingDate: "2020",
    sameAs: ["https://wa.me/2348158484621"],
    areaServed: { "@type": "Place", name: "Global" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DMULTICHOICE Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Custom enterprise websites, e-commerce platforms, and web applications built for performance and scale.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Native iOS, Android, and cross-platform applications with seamless user experiences.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description:
              "Bespoke software solutions, SaaS platforms, and enterprise systems tailored to your workflow.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description:
              "Intelligent workflow automation, chatbots, and machine learning integrations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Import & Export Services",
            description:
              "Insured global procurement, logistics, and trade solutions with full compliance coverage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Training",
            description:
              "Professional tech courses and digital skills training for individuals and teams.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Management",
            description:
              "Real estate management, tenant services, and property technology solutions.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ───────────────────────────────
   LIVE COUNTER HOOK
   ─────────────────────────────── */
function useCountUp(
  end: number,
  duration: number = 2000,
  startDelay: number = 500,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [end, duration, startDelay]);

  return count;
}

/* ───────────────────────────────
   Legacy service pill data (from previous hero version)
   Kept so we can minimize diffs; no longer rendered in the upgraded crossroads hero.
   */
// Legacy data placeholder (previous hero used it for animated service pills).
// Not used in the crossroads hero.
void 0;







/* ════════════════════════════════
   MAIN HERO COMPONENT
   ════════════════════════════════ */
export function Hero() {
  const projectCount = useCountUp(100, 2500, 800);
  const countryCount = useCountUp(5, 2000, 1000);

  return (
    <>
      {/* SEO: Organization Schema */}
      <OrganizationSchema />

      {/* SEO Meta Tags */}
      <meta
        name="description"
        content="DMULTICHOICE — Full-service digital studio & procurement partner. Website development, mobile apps, custom software, AI automation, online training, property management & insured import/export services. CAC Registered RC 9580371."
      />
      <meta
        name="keywords"
        content="website development, mobile app development, custom software, AI automation, online training, property management, import export services, digital agency Nigeria, web design, software development company"
      />
      <meta name="author" content="DMULTICHOICE" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://dmultichoice.com" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="DMULTICHOICE | Website Development, Apps, Software, AI, Training & Property Management"
      />
      <meta
        property="og:description"
        content="Full-service digital studio & procurement partner. Enterprise websites, mobile apps, custom software, AI automation, online training, property management & insured global trade."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dmultichoice.com" />
      <meta
        property="og:image"
        content="https://dmultichoice.com/og-image.jpg"
      />
      <meta property="og:site_name" content="DMULTICHOICE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="DMULTICHOICE | Digital Studio & Procurement Partner"
      />
      <meta
        name="twitter:description"
        content="Website development, mobile apps, custom software, AI automation, online training, property management & insured import/export services."
      />
      <meta
        name="twitter:image"
        content="https://dmultichoice.com/og-image.jpg"
      />

      <section
        className="relative min-h-screen flex flex-col overflow-hidden bg-black"
        aria-label="Hero section - DMULTICHOICE digital studio and procurement services"
      >
        {/* ── Video background ── */}
        <div className="absolute inset-0">
          <VideoInView>
            {({ isInView }) => (
              <video
                src="/hero-video.mp4"
                preload="metadata"
                autoPlay={isInView}
                muted
                loop
                playsInline
                poster="/hero-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
              />
            )}
          </VideoInView>

          {/* Strong dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Bottom gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6">
          <div className="relative max-w-[900px] w-full text-center py-24 lg:py-32">
            {/* Crossroads pattern (mobile-first). Goal: help procurement leaders self-identify in <5 seconds. */}
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="w-full">
                <h2 className="sr-only">Choose your entry point</h2>

                <div className="flex flex-col gap-3">
                  <a
                    href="#services"
                    className="block rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 text-left transition-transform hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                          I need to source & purchase globally
                        </div>
                        <div className="mt-1 text-lg font-bold text-white">
                          Global Procurement
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#C9A227] mt-1" />
                    </div>
                    <div className="mt-2 text-sm text-white/55">
                      Supplier vetting, cross-border compliance, and
                      door-to-door delivery.
                    </div>
                  </a>

                  <a
                    href="#process"
                    className="block rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 text-left transition-transform hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                          I need internal systems & automation
                        </div>
                        <div className="mt-1 text-lg font-bold text-white">
                          Digital Solutions
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#C9A227] mt-1" />
                    </div>
                    <div className="mt-2 text-sm text-white/55">
                      Dashboards, workflow automation, audit-ready reporting.
                    </div>
                  </a>

                  <a
                    href="#proof"
                    className="block rounded-3xl border border-white/10 bg-white/[0.06] px-5 py-4 text-left transition-transform hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                          I want to see results
                        </div>
                        <div className="mt-1 text-lg font-bold text-white">
                          Proof & Outcomes
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#C9A227] mt-1" />
                    </div>
                    <div className="mt-2 text-sm text-white/55">
                      Real artifacts: sourcing trips, payments, inspections,
                      delivered goods.
                    </div>
                  </a>
                </div>
              </div>

              {/* Signature interactive element (net-new): Manifest Quote Widget */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-xl">
                  <ManifestQuoteWidget />
                </div>
              </div>
            </div>

            {/* Trust badge */}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-md mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-white/80 font-medium tracking-wide">
                CAC Registered · RC 9580371 · SMEDAN Certified
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block drop-shadow-2xl"
              >
                We Build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-white bg-clip-text text-transparent drop-shadow-2xl"
              >
                Digital Empires
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-white/80 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 font-light drop-shadow-lg"
            >
              Full-service digital studio and procurement partner. Enterprise
              websites, mobile apps, custom software, and insured global trade —
              built to scale.
            </motion.p>



            {/* Single Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <a
                href="#contact"
                className="inline-flex"
                aria-label="Start your project with DMULTICHOICE"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-7 text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom trust stats bar ── */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-md px-8 py-6"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                {[
                  { value: `${projectCount}+`, label: "Projects Delivered" },
                  { value: "7", label: "Core Services" },
                  { value: `${countryCount}`, label: "Countries Served" },
                  { value: "24/7", label: "Live Support" },
                  { value: "100%", label: "Insured Imports" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/50 font-medium tracking-wide uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
