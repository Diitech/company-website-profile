import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Warehouse, MapPin, Package, Truck, Shield, Clock, ArrowUpRight, BarChart3, Globe, ChevronRight, Play, CheckCircle2, TrendingUp, Box, Lock, Eye } from 'lucide-react';

/* ─── UTILITIES ─── */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ─── DETERMINISTIC RANDOM (seed-based, render-safe) ─── */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

/* ─── ANIMATED COUNTER ─── */
function AnimatedCounter({ target, suffix = "", duration = 2.5 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}{suffix}</span>;
}

/* ─── FLOATING ORBS ─── */
function FloatingOrbs() {
  const orbs = useMemo(() => [
    { cls: "bg-blue-600/10", left: "5%", top: "5%", w: "w-[500px] h-[500px]", dur: 30, delay: 0 },
    { cls: "bg-cyan-500/8", left: "70%", top: "10%", w: "w-[400px] h-[400px]", dur: 35, delay: 5 },
    { cls: "bg-violet-600/10", left: "15%", top: "55%", w: "w-[600px] h-[600px]", dur: 40, delay: 10 },
    { cls: "bg-emerald-500/8", left: "75%", top: "60%", w: "w-[450px] h-[450px]", dur: 32, delay: 3 },
    { cls: "bg-amber-500/6", left: "40%", top: "30%", w: "w-[700px] h-[700px]", dur: 45, delay: 8 },
  ], []);

  return (
    <>
      {orbs.map((o, idx) => (
        <motion.div
          key={idx}
          className={cx("absolute rounded-full blur-[140px] pointer-events-none", o.cls, o.w)}
          style={{ left: o.left, top: o.top }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            x: [0, idx % 2 === 0 ? 50 : -40, 0],
            y: [0, idx % 2 === 0 ? -35 : 40, 0],
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

/* ─── PARTICLE FIELD (deterministic) ─── */
function ParticleField() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => {
      const r1 = seededRandom(i * 7 + 1);
      const r2 = seededRandom(i * 13 + 2);
      const r3 = seededRandom(i * 19 + 3);
      const r4 = seededRandom(i * 31 + 4);
      const r5 = seededRandom(i * 47 + 5);
      return {
        id: i,
        x: r1 * 100,
        y: r2 * 100,
        size: r3 * 2 + 0.5,
        duration: r4 * 30 + 20,
        delay: r5 * 20,
        opacity: r3 * 0.3 + 0.05,
      };
    }),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: `radial-gradient(circle, rgba(59,130,246,${p.opacity}) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
            scale: [1, 2, 1],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ─── FLOATING CARD ─── */
function FloatingCard({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── FEATURE CARD ─── */
function FeatureCard({ icon: Icon, title, description, color, delay }: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden cursor-default transition-colors duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
    >
      {/* Hover glow */}
      <motion.div
        className={cx("absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700", color)}
        style={{ filter: "blur(30px)" }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
      />

      <div className="relative">
        <div className={cx("w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/[0.08] transition-all duration-500 group-hover:scale-110", color.replace("/20", "/10"))}>
          <Icon className={cx("w-7 h-7 transition-colors duration-300", color.includes("blue") ? "text-blue-400" : color.includes("emerald") ? "text-emerald-400" : color.includes("amber") ? "text-amber-400" : "text-violet-400")} />
        </div>
        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">{title}</h4>
        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">{description}</p>
      </div>

      {/* Corner arrow */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ x: isHovered ? 0 : -5, opacity: isHovered ? 1 : 0 }}
      >
        <ArrowUpRight className="w-4 h-4 text-white/30" />
      </motion.div>
    </motion.div>
  );
}

/* ─── STAT CARD ─── */
function StatCard({ value, label, suffix, icon: Icon, delay }: {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative group"
    >
      <div className="rounded-2xl p-5 border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:border-white/[0.12] transition-all duration-500">
        <Icon className="w-5 h-5 text-white/20 mb-3 group-hover:text-white/40 transition-colors duration-300" />
        <p className="text-3xl font-bold text-white mb-1">
          <AnimatedCounter target={value} suffix={suffix} />
        </p>
        <p className="text-white/35 text-xs font-medium uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );
}

/* ─── IMAGE SHOWCASE ─── */
function ImageShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    { src: "/warehouse.jpg", label: "Warehouse Floor", desc: "10,000+ sq ft of climate-controlled storage" },
    { src: "/office-interior.jpg", label: "Operations Center", desc: "Real-time monitoring & dispatch" },
    { src: "/logistics.jpg", label: "Loading Bay", desc: "Same-day dispatch capability" },
  ];

  return (
    <div className="relative">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative rounded-3xl overflow-hidden group"
      >
        <div className="aspect-[4/3] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={images[activeImage].src}
              alt={images[activeImage].label}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <h4 className="text-white font-bold text-2xl mb-1">{images[activeImage].label}</h4>
              <p className="text-white/50 text-sm">{images[activeImage].desc}</p>
            </motion.div>
          </div>

          {/* Play button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
          >
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </motion.button>
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={cx(
                "w-12 h-1.5 rounded-full transition-all duration-300",
                i === activeImage ? "bg-white" : "bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating badge */}
      <FloatingCard delay={0.5} className="absolute -top-4 -right-4 sm:top-6 sm:-right-8 z-10">
        <div className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-emerald-400 text-xs font-bold">Operational</p>
            <p className="text-white/40 text-[10px]">24/7 Live Monitoring</p>
          </div>
        </div>
      </FloatingCard>

      {/* Floating stat */}
      <FloatingCard delay={0.8} className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 z-10">
        <div className="bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 text-xs font-bold">99.8% Uptime</span>
          </div>
          <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "99.8%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

/* ─── LOCATION CARD ─── */
function LocationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-3xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Image side */}
        <div className="lg:col-span-3 relative">
          <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative overflow-hidden">
            <img
              src="/office-interior.jpg"
              alt="DMULTICHOICE Headquarters"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030305]/90 lg:to-[#030305]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/60 via-transparent to-transparent lg:bg-gradient-to-t" />

            {/* Floating elements on image */}
            <FloatingCard delay={0.3} className="absolute top-6 left-6">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/80 text-xs font-medium">Currently Open</span>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>

        {/* Info side */}
        <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Warehouse className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 text-xs font-semibold">Headquarters</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">DMULTICHOICE HQ</h3>
            <p className="text-white/40 text-sm mb-8">Victoria Island, Lagos</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">18 Awoniyi Elemo Street</p>
                  <p className="text-white/30 text-xs">Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/30 text-xs">Weekend visits by appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-white/[0.15] transition-colors">
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Global Operations</p>
                  <p className="text-white/30 text-xs">Serving 5+ countries worldwide</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=18+Awoniyi+Elemo+Street+Victoria+Island+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />
              <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">View on Google Maps</span>
              <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN SECTION ─── */
export function WarehouseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Package, title: "Secure Storage", description: "24/7 monitored facility with CCTV surveillance, access control, and climate regulation for sensitive goods.", color: "bg-blue-500/20", delay: 0.1 },
    { icon: Truck, title: "Fast Dispatch", description: "Same-day dispatch for orders received before 2 PM. Express delivery available for urgent shipments.", color: "bg-emerald-500/20", delay: 0.2 },
    { icon: Shield, title: "Insurance Coverage", description: "Full comprehensive insurance coverage for all stored and in-transit goods. Zero-risk logistics.", color: "bg-amber-500/20", delay: 0.3 },
    { icon: Eye, title: "Real-time Tracking", description: "Live inventory management with barcode scanning, automated alerts, and detailed analytics dashboard.", color: "bg-violet-500/20", delay: 0.4 },
  ];

  const stats = [
    { value: 10000, label: "Sq Ft Space", suffix: "+", icon: Box, delay: 0.1 },
    { value: 500, label: "Pallet Positions", suffix: "+", icon: Package, delay: 0.2 },
    { value: 99, label: "Uptime", suffix: "%", icon: BarChart3, delay: 0.3 },
    { value: 24, label: "Hour Operations", suffix: "/7", icon: Clock, delay: 0.4 },
  ];

  return (
    <section id="warehouse" className="py-24 lg:py-40 relative overflow-hidden bg-[#030305]">
      {/* Background layers */}
      <FloatingOrbs />
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.02)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6"
          >
            <Warehouse className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">Our Facilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            State-of-the-Art{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Warehouse
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our modern warehousing facility in Lagos ensures safe storage, efficient distribution,
            and real-time visibility for all your imported goods across Nigeria.
          </motion.p>
        </div>

        {/* ── MAIN GRID ── */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">
          {/* Left: Image Showcase */}
          <ImageShowcase />

          {/* Right: Features */}
          <div className="space-y-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        {/* ── LOCATION SECTION ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 mb-6"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">Find Us</span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Our Office Location
            </motion.h3>
          </div>

          <LocationCard />
        </motion.div>

        {/* ── BOTTOM TRUST BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 rounded-3xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "Fully Insured", desc: "All goods covered" },
              { icon: Lock, label: "Access Control", desc: "Biometric entry" },
              { icon: BarChart3, label: "Analytics", desc: "Live dashboards" },
              { icon: Box, label: "Fast Setup", desc: "24hr onboarding" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white/30" />
                </div>
                <div>
                  <p className="text-white/70 text-sm font-semibold">{item.label}</p>
                  <p className="text-white/25 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}