import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageCircle,
  Bot,
  TrendingUp,
  Share2,
  Smartphone,
  ChevronRight,
  Sparkles,
  Globe,
  Code2,
  Paintbrush,
  Package,
  Building2,
  Zap,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Users,
  Award,
} from "lucide-react";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   UTILITIES
   ─────────────────────────────── */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ───────────────────────────────
   SEEDED RANDOM (deterministic)
   ─────────────────────────────── */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ───────────────────────────────
   AMBIENT GRADIENT ORBS
   ─────────────────────────────── */
function Orbs() {
  const orbs = [
    { cls: "bg-blue-500/20", left: "8%", top: "15%", w: "w-72 h-72", dur: 20 },
    { cls: "bg-cyan-500/15", left: "70%", top: "20%", w: "w-64 h-64", dur: 24 },
    { cls: "bg-violet-500/15", left: "25%", top: "65%", w: "w-80 h-80", dur: 28 },
    { cls: "bg-emerald-500/12", left: "75%", top: "60%", w: "w-56 h-56", dur: 18 },
    { cls: "bg-rose-500/10", left: "50%", top: "40%", w: "w-96 h-96", dur: 32 },
  ];

  return (
    <>
      {orbs.map((o, idx) => (
        <motion.div
          key={idx}
          className={cx("absolute rounded-full blur-[140px]", o.cls, o.w)}
          style={{ left: o.left, top: o.top }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            x: [0, idx % 2 === 0 ? 32 : -28, 0],
            y: [0, idx % 2 === 0 ? -26 : 30, 0],
            scale: [0.9, 1.15, 0.9],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: o.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

/* ───────────────────────────────
   FLOATING PARTICLES
   ─────────────────────────────── */
function ParticleField() {
  const particles = useMemo(() => {
    const rng = seededRandom(42);
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: rng() * 100,
      y: rng() * 100,
      size: rng() * 2 + 1,
      duration: rng() * 20 + 15,
      delay: rng() * 5,
      opacity: rng() * 0.3 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────
   ORBITING SERVICE BADGES
   ─────────────────────────────── */
type OrbitBadge = {
  label: string;
  Icon: React.ElementType;
  speed: number;
  color: string;
};

function OrbitingBadges({ badges }: { badges: OrbitBadge[] }) {
  const orbitR = 130;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {badges.map((b, i) => {
        const angle = (i / badges.length) * Math.PI * 2 - Math.PI / 4;
        const baseX = Math.cos(angle) * orbitR;
        const baseY = Math.sin(angle) * orbitR;
        const dir = i % 2 === 0 ? 1 : -1;

        return (
          <motion.div
            key={b.label}
            className="absolute left-1/2 top-1/2"
            initial={{ x: baseX, y: baseY, opacity: 0, scale: 0.5 }}
            animate={{
              x: [baseX, baseX + dir * 14, baseX],
              y: [baseY, baseY - dir * 16, baseY],
              opacity: [0, 1, 1],
              scale: [0.6, 1, 1],
            }}
            transition={{
              duration: b.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md whitespace-nowrap shadow-lg shadow-black/20">
              <b.Icon className="w-3.5 h-3.5" style={{ color: b.color }} />
              <span className="text-[11px] font-semibold text-white/85">
                {b.label}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: b.color,
                  boxShadow: `0 0 12px ${b.color}66`,
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ───────────────────────────────
   MARQUEE TICKER
   ─────────────────────────────── */
function Marquee({ items }: { items: string[] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030305] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030305] to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ animationPlayState: isHovered ? "paused" : "running" }}
        className="flex gap-12 whitespace-nowrap py-5 px-8"
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="text-xs text-white/40 font-medium tracking-widest uppercase">
              {t}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────
   SERVICE BENTO GRID
   ─────────────────────────────── */
const services = [
  { label: "Web Development", icon: Globe, color: "#3B82F6", desc: "Custom sites" },
  { label: "App Development", icon: Code2, color: "#06B6D4", desc: "Native & cross-platform" },
  { label: "AI Automation", icon: Bot, color: "#8B5CF6", desc: "Smart workflows" },
  { label: "Digital Marketing", icon: TrendingUp, color: "#10B981", desc: "Growth engine" },
  { label: "Social Media", icon: Share2, color: "#EC4899", desc: "Brand presence" },
  { label: "Graphic Design", icon: Paintbrush, color: "#F59E0B", desc: "Visual identity" },
  { label: "Import & Export", icon: Package, color: "#14B8A6", desc: "Global trade" },
  { label: "Property Mgmt", icon: Building2, color: "#6366F1", desc: "Real estate" },
];

function ServiceBento() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {services.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 cursor-default transition-colors hover:bg-white/[0.04] hover:border-white/[0.12]"
        >
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: `${s.color}15` }}
            >
              <s.icon className="w-4 h-4" style={{ color: s.color }} />
            </div>
            <div>
              <div className="text-[12px] font-semibold text-white/90">{s.label}</div>
              <div className="text-[10px] text-white/40">{s.desc}</div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ───────────────────────────────
   TYPEWRITER HOOK (no setState in effect body)
   ─────────────────────────────── */
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
   TESTIMONIAL CARD
   ─────────────────────────────── */
const testimonials = [
  { name: "Sarah O.", role: "E-commerce Owner", text: "Built our store in 10 days. Sales up 300%.", rating: 5 },
  { name: "James K.", role: "Tech Startup CEO", text: "AI automation saved us 40 hours/week.", rating: 5 },
  { name: "Amina B.", role: "Import Business", text: "Insured shipping to UK was seamless.", rating: 5 },
];

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5 backdrop-blur-sm hover:border-white/[0.12] transition-colors"
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-[10px] font-bold text-white/80">
          {t.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="text-xs font-semibold text-white/80">{t.name}</div>
          <div className="text-[10px] text-white/40">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────
   PROCESS STEPS
   ─────────────────────────────── */
const processSteps = [
  { step: "01", title: "Discovery Call", desc: "Free 30-min strategy session to map your goals.", icon: MessageCircle },
  { step: "02", title: "Custom Proposal", desc: "Detailed scope, timeline & pricing within 24hrs.", icon: Shield },
  { step: "03", title: "Build & Deploy", desc: "Agile delivery with weekly demos & feedback loops.", icon: Zap },
  { step: "04", title: "Scale & Support", desc: "Ongoing optimization, 24/7 support & growth.", icon: TrendingUp },
];

function ProcessSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {processSteps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="group relative rounded-2xl bg-white/[0.015] border border-white/[0.05] p-6 hover:border-white/[0.12] transition-all"
        >
          <div className="absolute top-4 right-4 text-[2rem] font-black text-white/[0.03] leading-none">
            {s.step}
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.08] transition-colors">
            <s.icon className="w-4 h-4 text-white/60" />
          </div>
          <h3 className="text-sm font-bold text-white/90 mb-2">{s.title}</h3>
          <p className="text-xs text-white/40 leading-relaxed">{s.desc}</p>
          {i < processSteps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-white/10 to-transparent" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ───────────────────────────────
   FEATURE HIGHLIGHTS
   ─────────────────────────────── */
const features = [
  { icon: Clock, title: "2-Week Delivery", desc: "Rapid prototyping to live deployment" },
  { icon: Shield, title: "Insured Imports", desc: "Full coverage on all global shipments" },
  { icon: Users, title: "Dedicated Team", desc: "Your own project manager & dev squad" },
  { icon: Award, title: "CAC Registered", desc: "RC 9580371 · Fully compliant & trusted" },
];

function FeatureHighlights() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-start gap-3 rounded-2xl bg-white/[0.015] border border-white/[0.05] p-4 hover:border-white/[0.10] transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
            <f.icon className="w-4 h-4 text-cyan-400/80" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white/80">{f.title}</div>
            <div className="text-[10px] text-white/40 mt-0.5">{f.desc}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ════════════════════════════════
   MAIN HERO COMPONENT
   ════════════════════════════════ */
export function Hero() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const sectionRef = useRef<HTMLElement>(null);

  const bgShiftX = useTransform(cursorX, [-1, 1], [20, -20]);
  const bgShiftY = useTransform(cursorY, [-1, 1], [14, -14]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const nx = (e.clientX / w) * 2 - 1;
      const ny = (e.clientY / h) * 2 - 1;
      cursorX.set(nx);
      cursorY.set(ny);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  const orbitBadges = useMemo<OrbitBadge[]>(
    () => [
      { label: "AI Automation", Icon: Bot, speed: 18, color: "#A78BFA" },
      { label: "Social Media", Icon: Share2, speed: 22, color: "#F472B6" },
      { label: "Digital Growth", Icon: TrendingUp, speed: 25, color: "#34D399" },
      { label: "Smart Solutions", Icon: Smartphone, speed: 20, color: "#60A5FA" },
    ],
    [],
  );

  const tickerItems = [
    "Website Development",
    "App Development",
    "Plugins & Extensions",
    "AI Automation",
    "Digital Marketing",
    "Social Media Management",
    "Graphic Design",
    "Import & Export",
    "Property Management",
  ];

  const headlineWords = ["We", "Build", "Digital", "Empires"];
  const heroServices = [
    { label: "Website Development", color: "#3B82F6" },
    { label: "Mobile Apps", color: "#06B6D4" },
    { label: "Custom Plugins", color: "#8B5CF6" },
    { label: "AI Solutions", color: "#F59E0B" },
    { label: "Digital Marketing", color: "#10B981" },
    { label: "Graphic Design", color: "#EC4899" },
    { label: "Import & Export Services", color: "#14B8A6" },
    { label: "Property Management", color: "#6366F1" },
  ];

  const projectCount = useCountUp(100, 2500, 800);
  const countryCount = useCountUp(5, 2000, 1000);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#030305]">
      {/* ── Video background with parallax ── */}
      <motion.div
        className="absolute inset-0"
        style={{ x: bgShiftX, y: bgShiftY }}
      >
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12]"
        />
      </motion.div>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ── Ambient orbs ── */}
      <Orbs />

      {/* ── Floating particles ── */}
      <ParticleField />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ═══════ LEFT COLUMN ═══════ */}
          <div className="space-y-8 lg:pt-8">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-[11px] text-white/60 font-medium tracking-wide">
                CAC Registered · RC 9580371 · SMEDAN Certified
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ y: 40, opacity: 0, rotateX: -20 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-3"
                  style={{ perspective: "1000px" }}
                >
                  {w === "Digital" ? (
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent animate-shimmer">
                        {w}
                      </span>
                      <Sparkles className="absolute -top-3 -right-5 w-4 h-4 text-amber-400/60 animate-pulse" />
                    </span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline — animated service chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                  What We Do
                </span>
              </div>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {heroServices.map((s, i) => (
                  <motion.span
                    key={s.label}
                    initial={{ opacity: 0, y: 14, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm text-[12px] font-semibold cursor-default transition-shadow duration-300"
                    style={{
                      color: s.color,
                      borderColor: `${s.color}33`,
                      background: `${s.color}14`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                    />
                    {s.label}
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"
                      style={{ background: `${s.color}40` }}
                    />
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-white/40 text-sm leading-relaxed max-w-lg"
            >
              DMULTICHOICE is a full-service digital studio and procurement partner. 
              From enterprise web platforms to AI-powered automation and insured global imports — 
              we engineer solutions that scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a href="#contact" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/20"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Quick trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-wrap items-center gap-5 pt-4"
            >
              {[
                { icon: CheckCircle2, text: "Free Consultation" },
                { icon: Zap, text: "2-Week Delivery" },
                { icon: CheckCircle2, text: "Money-Back Guarantee" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <item.icon className="w-3.5 h-3.5 text-emerald-400/70" />
                  <span className="text-[11px] text-white/40 font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ═══════ RIGHT COLUMN ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glass card container */}
            <div className="relative rounded-3xl backdrop-blur-2xl bg-white/[0.015] border border-white/[0.06] p-6 lg:p-8 shadow-[0_0_100px_rgba(59,130,246,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/[0.08] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/90">DMULTICHOICE</div>
                    <div className="text-[10px] text-white/35 tracking-wide uppercase">Digital Studio + Procurement</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-semibold text-emerald-400/80">Available Now</span>
                </div>
              </div>

              {/* Service Bento Grid */}
              <ServiceBento />

              {/* Orbiting badges */}
              <div className="relative h-32 mt-4">
                <OrbitingBadges badges={orbitBadges} />
              </div>

              {/* Bottom info bar */}
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-2">
                  {["#3B82F6", "#06B6D4", "#8B5CF6", "#10B981"].map((c, idx) => (
                    <span
                      key={idx}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: c,
                        boxShadow: `0 0 14px ${c}44`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-white/30 font-medium">
                  4 Active Service Orbits
                </span>
              </div>
            </div>

            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 blur-2xl" />
          </motion.div>
        </div>

        {/* ═══════ BOTTOM SECTION ═══════ */}
        <div className="mt-16 lg:mt-20 space-y-6">
          {/* Trust stats bar with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/[0.015] border border-white/[0.05] backdrop-blur-xl px-6 py-5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { value: `${projectCount}+`, label: "Projects Delivered" },
                { value: "9", label: "Core Services" },
                { value: `${countryCount}`, label: "Countries Served" },
                { value: "24/7", label: "Live Support" },
                { value: "100%", label: "Insured Imports" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-white/90">{stat.value}</div>
                  <div className="text-[10px] text-white/35 font-medium tracking-wide uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Marquee ticker */}
          <Marquee items={tickerItems} />
        </div>
      </div>

      {/* ═══════ FEATURE HIGHLIGHTS (scroll reveal) ═══════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Built for Speed, Scale & Trust</h2>
          </div>
        </ScrollReveal>
        <FeatureHighlights />
      </div>

      {/* ═══════ PROCESS STEPS (scroll reveal) ═══════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">How It Works</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">From Idea to Launch in 4 Steps</h2>
          </div>
        </ScrollReveal>
        <ProcessSteps />
      </div>

      {/* ═══════ TESTIMONIALS (scroll reveal) ═══════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">Client Stories</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Trusted by Founders & Business Owners</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>

      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
