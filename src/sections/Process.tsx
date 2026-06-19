import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  CheckCircle,
  Handshake,
  Ship,
  Package,
  ArrowRight,
  MessageCircle,
  Shield,
  TrendingDown,
  Users,
  ChevronRight,
  Truck,
  FileCheck,
  Anchor,
  BadgeCheck,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   PROCESS STEPS DATA
   ─────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Verify Suppliers",
    description:
      "We conduct thorough background checks, factory audits, and business license verification on every supplier before engagement.",
    icon: Search,
    color: "#3B82F6",
    details: ["Business license verification", "Factory audit reports", "Reference checks", "Financial stability review"],
  },
  {
    number: "02",
    title: "Confirm Quality",
    description:
      "Product authenticity checks, specification verification, and sample testing before bulk purchase commitment.",
    icon: CheckCircle,
    color: "#10B981",
    details: ["Product sample testing", "Specification matching", "Quality certification review", "Photo/video documentation"],
  },
  {
    number: "03",
    title: "Negotiate Prices",
    description:
      "Leverage our bulk buying power and local expertise to negotiate the best prices directly with manufacturers.",
    icon: Handshake,
    color: "#F59E0B",
    details: ["Direct manufacturer pricing", "Bulk order discounts", "Payment term negotiation", "Price match guarantee"],
  },
  {
    number: "04",
    title: "Handle Shipping",
    description:
      "End-to-end logistics coordination — from factory floor to your doorstep. Customs, documentation, and tracking included.",
    icon: Ship,
    color: "#8B5CF6",
    details: ["Customs clearance", "Shipping insurance", "Real-time tracking", "Documentation handling"],
  },
  {
    number: "05",
    title: "Deliver to You",
    description:
      "Safe, insured delivery to your location in Nigeria. Full cargo coverage with door-to-door service.",
    icon: Package,
    color: "#EC4899",
    details: ["Door-to-door delivery", "Full cargo insurance", "Delivery confirmation", "After-sales support"],
  },
];

const valueAdvantages = [
  { icon: Globe, text: "Access to global markets", color: "#3B82F6" },
  { icon: TrendingDown, text: "Lower product costs", color: "#10B981" },
  { icon: Shield, text: "Supplier verification", color: "#F59E0B" },
  { icon: FileCheck, text: "Transparent procurement", color: "#8B5CF6" },
  { icon: Users, text: "Professional representation", color: "#EC4899" },
  { icon: BadgeCheck, text: "Local support in Nigeria", color: "#06B6D4" },
];

const trustStats = [
  { value: "99.8%", label: "Delivery Success", icon: Truck },
  { value: "30%", label: "Average Savings", icon: TrendingDown },
  { value: "200+", label: "Verified Suppliers", icon: BadgeCheck },
  { value: "5", label: "Countries Active", icon: Globe },
];

/* ───────────────────────────────
   SCROLL REVEAL
   ─────────────────────────────── */
function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────
   PROCESS STEP CARD
   ─────────────────────────────── */
function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-2xl p-6 h-full transition-all duration-500 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.012)",
          border: `1px solid ${isHovered ? `${step.color}25` : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 50px ${step.color}08` : "none",
        }}
      >
        {/* Hover gradient orb */}
        <motion.div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `${step.color}12` }}
        />

        {/* Step number badge */}
        <div className="flex items-center justify-between mb-5 relative">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold"
            style={{
              background: `${step.color}12`,
              color: step.color,
              border: `1px solid ${step.color}20`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: step.color, boxShadow: `0 0 8px ${step.color}66` }}
            />
            Step {step.number}
          </div>
          <span
            className="text-[2rem] font-black leading-none opacity-[0.04]"
            style={{ color: step.color }}
          >
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
          style={{ background: `${step.color}10` }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <step.icon className="w-6 h-6" style={{ color: step.color }} />
        </motion.div>

        {/* Content */}
        <h3 className="text-base font-bold text-white mb-2 relative">{step.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4 relative">{step.description}</p>

        {/* Expandable details */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-2 pt-3 border-t border-white/[0.04]">
            {step.details.map((detail) => (
              <div key={detail} className="flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5 shrink-0" style={{ color: `${step.color}99` }} />
                <span className="text-[11px] text-white/40">{detail}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-[11px] font-semibold mt-3 transition-all hover:gap-2 relative"
          style={{ color: step.color }}
        >
          {isExpanded ? "Show Less" : "View Details"}
          <ChevronRight
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────
   VALUE ADVANTAGE CARD
   ─────────────────────────────── */
function ValueCard({ item, index }: { item: typeof valueAdvantages[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -2 }}
      className="flex items-center gap-3 rounded-xl bg-white/[0.015] border border-white/[0.05] p-4 hover:border-white/[0.10] transition-all"
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${item.color}10` }}
      >
        <item.icon className="w-4 h-4" style={{ color: item.color }} />
      </div>
      <span className="text-sm text-white/70 font-medium">{item.text}</span>
    </motion.div>
  );
}

/* ───────────────────────────────
   STAT CARD
   ─────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof trustStats[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="text-center p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05]"
    >
      <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
      <div className="text-xl font-black text-white">{stat.value}</div>
      <div className="text-[10px] text-white/35 mt-0.5 font-medium">{stat.label}</div>
    </motion.div>
  );
}

/* ───────────────────────────────
   CONNECTING LINE (desktop)
   ─────────────────────────────── */
function ConnectingLine() {
  return (
    <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-px">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full origin-left"
        style={{
          background: "linear-gradient(90deg, #3B82F640, #10B98140, #F59E0B40, #8B5CF640, #EC489940)",
        }}
      />
      {/* Animated dot traveling the line */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ boxShadow: "0 0 10px rgba(255,255,255,0.3)" }}
      />
    </div>
  );
}

/* ════════════════════════════════
   MAIN PROCESS COMPONENT
   ════════════════════════════════ */
export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]">
      {/* Background glows */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ═══════ SECTION HEADER ═══════ */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6"
          >
            <Anchor className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            From Inquiry to{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Delivery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed"
          >
            Our streamlined 5-step process ensures safe, transparent, and efficient procurement 
            from international markets directly to your doorstep in Nigeria.
          </motion.p>
        </div>

        {/* ═══════ TRUST STATS ═══════ */}
        <ScrollReveal delay={0.1} className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustStats.map((stat, idx) => (
              <StatCard key={stat.label} stat={stat} index={idx} />
            ))}
          </div>
        </ScrollReveal>

        {/* ═══════ PROCESS STEPS ═══════ */}
        <div ref={ref} className="relative mb-20">
          <ConnectingLine />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step, idx) => (
              <StepCard key={step.number} step={step} index={idx} />
            ))}
          </div>
        </div>

        {/* ═══════ VALUE ADVANTAGE ═══════ */}
        <ScrollReveal>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(16,185,129,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative px-8 py-10 sm:px-12 sm:py-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left */}
                <div>
                  <ScrollReveal>
                    <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">
                      Why Choose Us
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                      Our Value Advantage
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                      We reduce risk, eliminate fraud exposure, and ensure you receive exactly 
                      what you paid for — every single time. No surprises, no hidden fees.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1}>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20start%20the%20procurement%20process.`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          size="lg"
                          className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Start Your Order
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I%20have%20questions%20about%20your%20process.`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          size="lg"
                          variant="outline"
                          className="rounded-full px-8 py-6 text-sm font-semibold border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all hover:scale-105"
                        >
                          Ask a Question
                        </Button>
                      </a>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right: Value grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {valueAdvantages.map((item, idx) => (
                    <ValueCard key={item.text} item={item} index={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}