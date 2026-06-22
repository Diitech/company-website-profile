import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { VideoInView } from "./VideoInView";
import {
  ArrowRight,
  Globe,
  Code2,
  Sparkles,
  Package,
  Bot,
  GraduationCap,
  Building2,
} from "lucide-react";

/* ───────────────────────────────
   JSON-LD SCHEMA (SEO Structured Data)
   ─────────────────────────────── */
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DMULTICHOICE",
    "alternateName": "DMULTICHOICE Digital Studio",
    "url": "https://dmultichoice.com",
    "logo": "https://dmultichoice.com/logo.png",
    "description": "Full-service digital studio and procurement partner specializing in website development, mobile apps, custom software, AI automation, online training, property management, and insured import/export services.",
    "foundingDate": "2020",
    "sameAs": ["https://wa.me/2348158484621"],
    "areaServed": { "@type": "Place", "name": "Global" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DMULTICHOICE Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Custom enterprise websites, e-commerce platforms, and web applications built for performance and scale."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native iOS, Android, and cross-platform applications with seamless user experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Bespoke software solutions, SaaS platforms, and enterprise systems tailored to your workflow."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation",
            "description": "Intelligent workflow automation, chatbots, and machine learning integrations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Import & Export Services",
            "description": "Insured global procurement, logistics, and trade solutions with full compliance coverage."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Training",
            "description": "Professional tech courses and digital skills training for individuals and teams."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Management",
            "description": "Real estate management, tenant services, and property technology solutions."
          }
        }
      ]
    }
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
function useCountUp(end: number, duration: number = 2000, startDelay: number = 500) {
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
   ANIMATED SERVICE PILL (with bounce)
   ─────────────────────────────── */
const services = [
  { icon: Globe, label: "Website Development", color: "#38BDF8" },
  { icon: Code2, label: "Mobile Apps", color: "#818CF8" },
  { icon: Sparkles, label: "Custom Software", color: "#A78BFA" },
  { icon: Bot, label: "AI Automation", color: "#34D399" },
  { icon: Package, label: "Import & Export", color: "#FBBF24" },
  { icon: GraduationCap, label: "Online Training", color: "#F472B6" },
  { icon: Building2, label: "Property Management", color: "#60A5FA" },
];

function ServicePill({
  icon: Icon,
  label,
  color,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // bounce easing
      }}
      whileHover={{
        scale: 1.12,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
      className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm cursor-default transition-colors hover:bg-white/[0.10] hover:border-white/[0.15]"
    >
      <Icon
        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      />
      <span className="text-[11px] font-semibold text-white/70 tracking-wide group-hover:text-white/90 transition-colors">
        {label}
      </span>
      <span
        className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: color, boxShadow: `0 0 8px ${color}66` }}
      />
    </motion.div>
  );
}

/* ───────────────────────────────
   FLOATING ORBITING SERVICE BADGES
   (subtle, around the headline area)
   ─────────────────────────────── */
function OrbitingServices() {
  const orbitItems = [
    { icon: Globe, label: "Web", angle: 0, distance: 220, speed: 20 },
    { icon: Code2, label: "Apps", angle: 51, distance: 240, speed: 24 },
    { icon: Bot, label: "AI", angle: 103, distance: 200, speed: 18 },
    { icon: Package, label: "Trade", angle: 154, distance: 260, speed: 22 },
    { icon: GraduationCap, label: "Train", angle: 206, distance: 210, speed: 19 },
    { icon: Building2, label: "Property", angle: 257, distance: 250, speed: 21 },
    { icon: Sparkles, label: "Software", angle: 309, distance: 230, speed: 23 },
  ];

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-visible">
      {orbitItems.map((item, i) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = Math.cos(rad) * item.distance;
        const y = Math.sin(rad) * item.distance;

        return (
          <motion.div
            key={item.label}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.9, 1.1, 0.9],
              x: [x, x + 15, x],
              y: [y, y - 12, y],
            }}
            transition={{
              duration: item.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
              <item.icon className="w-3 h-3 text-white/40" />
              <span className="text-[9px] font-medium text-white/40 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

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
      <meta property="og:image" content="https://dmultichoice.com/og-image.jpg" />
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
      <meta name="twitter:image" content="https://dmultichoice.com/og-image.jpg" />

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
            {/* Orbiting service badges (desktop only) */}
            <OrbitingServices />

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

            {/* Service Pills — 7 core services with bounce animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap justify-center gap-3 mb-14"
            >
              {services.map((s, i) => (
                <ServicePill
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                  color={s.color}
                  delay={0.9 + i * 0.1}
                />
              ))}
            </motion.div>

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