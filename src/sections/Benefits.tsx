import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  TrendingDown,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Package,
  Clock,
  Star,
  Users,
  Truck,
  BadgeCheck,
} from "lucide-react";

/* ───────────────────────────────
   BENEFIT DATA
   ─────────────────────────────── */
const benefits = [
  {
    number: "01",
    title: "Access to Global Markets",
    description:
      "Source quality products directly from verified suppliers in China, UK, Turkey, Italy, and more. We handle supplier vetting, negotiations, and logistics so you focus on selling.",
    icon: Globe,
    color: "#3B82F6",
    stats: [
      { label: "Countries", value: "15+" },
      { label: "Suppliers", value: "200+" },
    ],
    features: ["Verified suppliers only", "Direct manufacturer pricing", "Multi-currency support"],
  },
  {
    number: "02",
    title: "Lower Product Costs",
    description:
      "Save up to 30-40% by buying directly from manufacturers without middlemen. Our bulk negotiation power and local sourcing expertise cut your procurement costs significantly.",
    icon: TrendingDown,
    color: "#10B981",
    stats: [
      { label: "Average Savings", value: "35%" },
      { label: "Clients", value: "80+" },
    ],
    features: ["No middleman markup", "Bulk order discounts", "Price match guarantee"],
  },
  {
    number: "03",
    title: "Risk Reduction & Verification",
    description:
      "We verify suppliers, confirm product authenticity, and ensure you receive exactly what you paid for. Full insurance coverage on every shipment for complete peace of mind.",
    icon: ShieldCheck,
    color: "#8B5CF6",
    stats: [
      { label: "Success Rate", value: "99.8%" },
      { label: "Insured", value: "100%" },
    ],
    features: ["Supplier background checks", "Quality inspection pre-ship", "Full cargo insurance"],
  },
];

const countryFlags = [
  { name: "China", flag: "🇨🇳" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "USA", flag: "🇺🇸" },
  { name: "UAE", flag: "🇦🇪" },
];

/* ───────────────────────────────
   SCROLL REVEAL WRAPPER
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
   BENEFIT CARD
   ─────────────────────────────── */
function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.015)",
          border: `1px solid ${isHovered ? `${benefit.color}30` : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 60px ${benefit.color}10` : "none",
        }}
      >
        {/* Animated gradient orb on hover */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `${benefit.color}20` }}
        />

        {/* Number badge */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: `${benefit.color}15`,
              color: benefit.color,
              border: `1px solid ${benefit.color}25`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: benefit.color, boxShadow: `0 0 8px ${benefit.color}66` }}
            />
            Step {benefit.number}
          </div>
          <span
            className="text-[2.5rem] font-black leading-none opacity-[0.04]"
            style={{ color: benefit.color }}
          >
            {benefit.number}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${benefit.color}12` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
          {benefit.title}
        </h3>
        <p className="text-white/50 leading-relaxed text-sm mb-6">
          {benefit.description}
        </p>

        {/* Feature list */}
        <div className="space-y-2.5 mb-6">
          {benefit.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" />
              <span className="text-xs text-white/50">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats mini bar */}
        <div className="flex gap-4 pt-4 border-t border-white/[0.04]">
          {benefit.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm font-bold" style={{ color: benefit.color }}>
                {stat.value}
              </div>
              <div className="text-[10px] text-white/35 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────
   COUNTRY MARQUEE
   ─────────────────────────────── */
function CountryMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#030305] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#030305] to-transparent z-10" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...countryFlags, ...countryFlags, ...countryFlags, ...countryFlags].map((c, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <span className="text-lg">{c.flag}</span>
            <span className="text-xs text-white/40 font-medium">{c.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────
   TRUST BADGE ROW
   ─────────────────────────────── */
const trustBadges = [
  { icon: BadgeCheck, text: "Verified Suppliers" },
  { icon: Truck, text: "Door-to-Door Delivery" },
  { icon: Clock, text: "2-4 Week Shipping" },
  { icon: Package, text: "Customs Cleared" },
  { icon: Users, text: "Dedicated Agent" },
];

function TrustBadgeRow() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {trustBadges.map((badge, i) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06]"
        >
          <badge.icon className="w-3 h-3 text-white/40" />
          <span className="text-[10px] text-white/50 font-medium">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ════════════════════════════════
   MAIN BENEFITS COMPONENT
   ════════════════════════════════ */
export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">
              Global Procurement Partner
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Why Import With{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              DMULTICHOICE
            </span>
          </h2>
          <p className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed">
            We eliminate the complexity of international sourcing. From supplier discovery 
            to your doorstep — verified, insured, and hassle-free.
          </p>
        </ScrollReveal>

        {/* Country marquee */}
        <ScrollReveal delay={0.1} className="mb-12">
          <CountryMarquee />
        </ScrollReveal>

        {/* Benefits Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.number} benefit={benefit} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <ScrollReveal delay={0.2}>
          <TrustBadgeRow />
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal delay={0.3} className="mt-16">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(16,185,129,0.04) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Ready to Source Smarter?
                </h3>
                <p className="text-white/40 text-sm max-w-md">
                  Get a free sourcing quote in 24 hours. No commitment required.
                </p>
              </div>
              <a
                href="https://wa.me/2348158484621"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#030305] font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}