import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Monitor,
  Share2,
  Bot,
  Package,
  CheckCircle,
  Hotel,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   SERVICE DATA
   ─────────────────────────────── */
const services = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Modern, secure, and professional websites for schools, businesses, hotels, and e-commerce brands. Built with Next.js, React, and cutting-edge tech stacks.",
    shortDesc: "Modern websites for businesses, schools & hotels",
    tags: ["Digital Solutions"],
    icon: Monitor,
    color: "#3B82F6",
    stats: { projects: "120+", satisfaction: "98%" },
    features: [
      "Responsive & mobile-first design",
      "SEO-optimized architecture",
      "CMS integration (WordPress, Sanity)",
      "E-commerce with Stripe/Paystack",
      "2-week delivery guarantee",
    ],
  },
  {
    id: "website-management",
    title: "Website Management",
    description:
      "Security monitoring, regular updates, backup protection, and performance optimization. We keep your site fast, secure, and always online.",
    shortDesc: "Security, updates & performance optimization",
    tags: ["Digital Solutions"],
    icon: Globe,
    color: "#06B6D4",
    stats: { projects: "80+", satisfaction: "99%" },
    features: [
      "24/7 uptime monitoring",
      "Daily automated backups",
      "Security patch management",
      "Monthly performance reports",
      "Content update support",
    ],
  },
  {
    id: "ota-management",
    title: "OTA Management",
    description:
      "Professional management of Booking.com, Airbnb, Expedia, Agoda, and Hotels.com listings. Maximize your occupancy and revenue.",
    shortDesc: "Booking.com, Airbnb, Expedia & more",
    tags: ["Hospitality"],
    icon: Hotel,
    color: "#8B5CF6",
    stats: { projects: "45+", satisfaction: "97%" },
    features: [
      "Multi-platform sync",
      "Dynamic pricing strategy",
      "Review management",
      "Listing optimization",
      "Revenue analytics",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "Content planning, graphic design, post scheduling, and audience engagement. Build a brand that people remember and trust.",
    shortDesc: "Content, design & audience growth",
    tags: ["Digital Solutions"],
    icon: Share2,
    color: "#EC4899",
    stats: { projects: "200+", satisfaction: "96%" },
    features: [
      "Custom content calendar",
      "Professional graphic design",
      "Post scheduling & automation",
      "Community management",
      "Monthly analytics report",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "AI chatbots, automated customer support, and business workflow automation. Cut manual work by 70% with smart automation.",
    shortDesc: "Chatbots, support & workflow automation",
    tags: ["AI Solutions"],
    icon: Bot,
    color: "#F59E0B",
    stats: { projects: "60+", satisfaction: "99%" },
    features: [
      "Custom AI chatbots",
      "Email automation sequences",
      "CRM workflow integration",
      "Lead scoring & nurturing",
      "Analytics dashboard",
    ],
  },
  {
    id: "digital-growth",
    title: "Digital Growth Strategy",
    description:
      "Data-driven growth planning, SEO optimization, and conversion rate improvement. Turn visitors into loyal customers.",
    shortDesc: "SEO, CRO & data-driven growth",
    tags: ["Strategy"],
    icon: TrendingUp,
    color: "#10B981",
    stats: { projects: "90+", satisfaction: "95%" },
    features: [
      "SEO audit & optimization",
      "Conversion rate analysis",
      "A/B testing framework",
      "Competitor research",
      "Growth roadmap planning",
    ],
  },
  {
    id: "international-sourcing",
    title: "International Sourcing",
    description:
      "Source and import quality products directly from verified foreign suppliers. China, UK, Turkey, Italy, USA, and UAE.",
    shortDesc: "Import from China, UK, Turkey & more",
    tags: ["Procurement"],
    icon: Package,
    color: "#14B8A6",
    stats: { projects: "150+", satisfaction: "98%" },
    features: [
      "Verified supplier network",
      "Price negotiation",
      "Quality inspection",
      "Customs clearance",
      "Door-to-door delivery",
    ],
  },
  {
    id: "supplier-verification",
    title: "Supplier Verification",
    description:
      "Comprehensive verification of manufacturers and product authenticity checks. Never get scammed again.",
    shortDesc: "Background checks & authenticity",
    tags: ["Procurement"],
    icon: CheckCircle,
    color: "#6366F1",
    stats: { projects: "300+", satisfaction: "99.8%" },
    features: [
      "Factory audit reports",
      "Business license verification",
      "Product sample testing",
      "Reference checks",
      "Insurance-backed guarantee",
    ],
  },
  {
    id: "online-training",
    title: "Online Training & Classes",
    description:
      "Digital skills training, import/export mastery, and professional development courses. Learn from industry experts.",
    shortDesc: "Digital skills & import/export mastery",
    tags: ["Education"],
    icon: GraduationCap,
    color: "#F97316",
    stats: { projects: "500+", satisfaction: "97%" },
    features: [
      "Live Zoom sessions",
      "Recorded video library",
      "Certification upon completion",
      "1-on-1 mentorship",
      "Lifetime community access",
    ],
  },
];

/* ───────────────────────────────
   SCROLL REVEAL
   ─────────────────────────────── */
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────
   SERVICE CARD
   ─────────────────────────────── */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link to={`/services/${service.id}`}>
        <div
          className="relative rounded-2xl p-6 h-full transition-all duration-500 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.015)",
            border: `1px solid ${isHovered ? `${service.color}25` : "rgba(255,255,255,0.06)"}`,
            boxShadow: isHovered ? `0 0 60px ${service.color}08` : "none",
          }}
        >
          {/* Gradient orb on hover */}
          <motion.div
            className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `${service.color}15` }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 relative">
            {service.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] font-semibold tracking-wide uppercase border-0"
                style={{
                  background: `${service.color}12`,
                  color: service.color,
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
            style={{ background: `${service.color}10` }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <service.icon className="w-6 h-6" style={{ color: service.color }} />
          </motion.div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors relative">
            {service.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-5 relative">
            {service.shortDesc}
          </p>

          {/* Stats mini */}
          <div className="flex gap-4 mb-4 pt-4 border-t border-white/[0.04] relative">
            <div>
              <div className="text-sm font-bold" style={{ color: service.color }}>
                {service.stats.projects}
              </div>
              <div className="text-[10px] text-white/35">Projects</div>
            </div>
            <div>
              <div className="text-sm font-bold" style={{ color: service.color }}>
                {service.stats.satisfaction}
              </div>
              <div className="text-[10px] text-white/35">Satisfaction</div>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex items-center justify-between relative">
            <span
              className="text-xs font-semibold flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
              style={{ color: service.color }}
            >
              Learn More
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all hover:scale-105"
              style={{
                background: `${service.color}12`,
                color: service.color,
                border: `1px solid ${service.color}20`,
              }}
            >
              <MessageCircle className="w-3 h-3" />
              Chat
            </a>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ───────────────────────────────
   TRUST BAR
   ─────────────────────────────── */
const trustItems = [
  { icon: Shield, text: "Insured Imports" },
  { icon: Clock, text: "2-Week Delivery" },
  { icon: Users, text: "Dedicated Team" },
  { icon: Star, text: "4.9/5 Rating" },
  { icon: Zap, text: "24/7 Support" },
];

function TrustBar() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {trustItems.map((item, i) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06]"
        >
          <item.icon className="w-3 h-3 text-white/40" />
          <span className="text-[10px] text-white/45 font-medium">{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ───────────────────────────────
   CTA BANNER
   ─────────────────────────────── */
function CTABanner() {
  return (
    <ScrollReveal delay={0.2}>
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative rounded-3xl overflow-hidden mt-16"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(16,185,129,0.03) 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative px-8 py-12 sm:px-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              Book a free 15-minute discovery call. We will analyze your business and recommend the perfect solution — no strings attached.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20book%20a%20free%20discovery%20call.`}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-sm font-semibold border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all hover:scale-105"
              >
                View All Services
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

/* ════════════════════════════════
   MAIN SERVICES COMPONENT
   ════════════════════════════════ */
export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ═══════ SECTION HEADER ═══════ */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">
              9 Core Services · One Trusted Partner
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Digital & Procurement
            </span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed"
          >
            From website development to international sourcing and professional training — 
            we provide end-to-end solutions to help your business thrive in the digital economy.
          </motion.p>
        </div>

        {/* ═══════ TRUST BAR ═══════ */}
        <ScrollReveal delay={0.1} className="mb-12">
          <TrustBar />
        </ScrollReveal>

        {/* ═══════ SERVICES GRID ═══════ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* ═══════ CTA BANNER ═══════ */}
        <CTABanner />
      </div>
    </section>
  );
}