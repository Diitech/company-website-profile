import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  TrendingUp,
  Users,
  Shield,
  Award,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle2,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   SCROLL REVEAL WRAPPER
   ─────────────────────────────── */
function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
   STAT CARD
   ─────────────────────────────── */
const stats = [
  { value: "5+", label: "Countries Served", icon: Globe, color: "#3B82F6" },
  { value: "100+", label: "Clients Served", icon: Users, color: "#10B981" },
  {
    value: "30%",
    label: "Average Savings",
    icon: TrendingUp,
    color: "#F59E0B",
  },
  { value: "99%", label: "Satisfaction Rate", icon: Star, color: "#EC4899" },
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl p-5 transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.015)",
        border: `1px solid ${isHovered ? `${stat.color}25` : "rgba(255,255,255,0.06)"}`,
        boxShadow: isHovered ? `0 0 40px ${stat.color}08` : "none",
      }}
    >
      <motion.div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `${stat.color}12` }}
      />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: `${stat.color}12` }}
      >
        <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
      </div>
      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
      <div className="text-[11px] text-white/40 font-medium">{stat.label}</div>
    </motion.div>
  );
}

/* ───────────────────────────────
   VALUE PILLAR
   ─────────────────────────────── */
const pillars = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "Empowering Nigerian businesses with world-class digital tools and global market access.",
    color: "#3B82F6",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "Leveraging AI, automation, and modern tech stacks to deliver cutting-edge solutions.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    desc: "Every transaction is insured, every supplier verified, every delivery guaranteed.",
    color: "#10B981",
  },
  {
    icon: Rocket,
    title: "Rapid Execution",
    desc: "2-week delivery on web projects. 24-hour quotes on sourcing requests.",
    color: "#EC4899",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative rounded-2xl p-6 transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.012)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${pillar.color}08 0%, transparent 60%)`,
        }}
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative"
        style={{ background: `${pillar.color}10` }}
      >
        <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} />
      </div>
      <h3 className="text-sm font-bold text-white mb-2 relative">
        {pillar.title}
      </h3>
      <p className="text-xs text-white/40 leading-relaxed relative">
        {pillar.desc}
      </p>
    </motion.div>
  );
}

/* ───────────────────────────────
   TIMELINE ITEM
   ─────────────────────────────── */
const milestones = [
  {
    year: "2020",
    title: "Founded in Lagos",
    desc: "Started as a small web development agency with a vision to digitize Nigerian businesses.",
  },
  {
    year: "2021",
    title: "First 50 Clients",
    desc: "Delivered websites and digital solutions to schools, hotels, and SMEs across Nigeria.",
  },
  {
    year: "2022",
    title: "Global Sourcing Launch",
    desc: "Expanded into international procurement, connecting clients to suppliers in China and UK.",
  },
  {
    year: "2023",
    title: "AI & Automation",
    desc: "Introduced AI chatbots and workflow automation, reducing client operational costs by 40%.",
  },
  {
    year: "2024",
    title: "CAC Registration",
    desc: "Officially registered as DMULTICHOICE SERVICES LTD (RC 9580371) under CAMA 2020.",
  },
  {
    year: "2025",
    title: "5 Countries & Growing",
    desc: "Active operations across Nigeria, UK, China, Turkey, and UAE with 100+ satisfied clients.",
  },
];

function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-cyan-500/20 to-transparent" />

      {milestones.map((m, i) => (
        <motion.div
          key={m.year}
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
        >
          {/* Dot */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-[#030305] z-10 shadow-[0_0_12px_rgba(96,165,250,0.4)]" />

          {/* Content */}
          <div
            className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}
          >
            <span className="text-[11px] font-bold text-blue-400 tracking-wide">
              {m.year}
            </span>
            <h4 className="text-sm font-bold text-white mt-1 mb-1">
              {m.title}
            </h4>
            <p className="text-xs text-white/40 leading-relaxed">{m.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ───────────────────────────────
   TRUST BADGES
   ─────────────────────────────── */
const trustBadges = [
  { icon: Shield, text: "CAC Registered" },
  { icon: MapPin, text: "Lagos, Nigeria" },
  { icon: Clock, text: "5+ Years Experience" },
  { icon: Award, text: "SMEDAN Certified" },
  { icon: CheckCircle2, text: "Insured Imports" },
];

/* ════════════════════════════════
   MAIN OURSTORY COMPONENT
   ════════════════════════════════ */
export function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/4 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-violet-500/4 rounded-full blur-3xl" />

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
              Our Story · Since 2020
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-4xl mx-auto"
          >
            Revolutionizing{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Digital Transformation
            </span>{" "}
            & Global Sourcing in Nigeria
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed"
          >
            From a small Lagos web agency to a full-service digital studio and
            global procurement partner. We bridge the gap between Nigerian
            businesses and the world.
          </motion.p>
        </div>

        {/* ═══════ STATS GRID ═══════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* ═══════ MAIN CONTENT GRID ═══════ */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* LEFT: Text Content */}
          <div className="space-y-6">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                More Than a Service Provider —{" "}
                <span className="text-white/60">Your Strategic Partner</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-white/50 text-sm leading-relaxed">
                Imagine a world where technology empowers your institution to
                grow, and global markets are just a click away. DMULTICHOICE
                bridges the gap between Nigerian businesses and international
                suppliers, ensuring safe transactions, quality assurance, and
                cost efficiency.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-white/50 text-sm leading-relaxed">
                We are not just service providers — we are long-term strategic
                partners committed to helping schools, businesses, and
                institutions grow through technology and global access. Every
                project is backed by our commitment to excellence, transparency,
                and measurable results.
              </p>
            </ScrollReveal>

            {/* Feature list */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-3 pt-4">
                {[
                  "CAC Registered Company (RC 9580371)",
                  "Insured imports with full cargo coverage",
                  "Dedicated project managers for every client",
                  "2-week delivery guarantee on web projects",
                  "24/7 WhatsApp support & real-time updates",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-white/60">{item}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.3} className="pt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20learn%20more%20about%20your%20services.`}
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
                <a href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-sm font-semibold border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all hover:scale-105"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Image with effects */}
          <ScrollReveal delay={0.2} className="relative">
            <div className="relative rounded-3xl overflow-hidden group">
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src="/our-story.jpg"
                  alt="DMULTICHOICE Digital Transformation Team"
                  className="w-full h-auto object-cover rounded-3xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/80 via-transparent to-transparent rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        CAC Registered
                      </div>
                      <div className="text-[10px] text-white/40">
                        RC 9580371 · SMEDAN Certified
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-28 h-28 border border-blue-500/15 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-20 h-20 border border-cyan-500/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-20 h-20 border border-emerald-500/10 rounded-full"
            />
          </ScrollReveal>
        </div>

        {/* ═══════ VALUE PILLARS ═══════ */}
        <ScrollReveal className="mb-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">
              What Drives Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Built on Four Core Pillars
            </h3>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* ═══════ TIMELINE ═══════ */}
        <ScrollReveal className="mb-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">
              Our Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              From Startup to Industry Leader
            </h3>
          </div>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto mb-20">
          <Timeline />
        </div>

        {/* ═══════ TRUST BADGES + FINAL CTA ═══════ */}
        <ScrollReveal>
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(16,185,129,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative px-8 py-12 sm:px-12 sm:py-14 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
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
                    <span className="text-[10px] text-white/45 font-medium">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/40 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                Join 100+ businesses that trust DMULTICHOICE for digital
                solutions and global procurement. Your success story starts with
                a single message.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20ready%20to%20transform%20my%20business.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
