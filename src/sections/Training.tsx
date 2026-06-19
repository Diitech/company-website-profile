import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Monitor,
  Globe,
  TrendingUp,
  Clock,
  Users,
  ArrowRight,
  MessageCircle,
  BookOpen,
  CheckCircle2,
  Star,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
  Play,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   TRAINING PROGRAMS DATA
   ─────────────────────────────── */
const trainingPrograms = [
  {
    id: "digital-skills",
    title: "Digital Skills Mastery",
    description:
      "Master web development, UI/UX design, digital marketing, and social media management. Build a portfolio that gets you hired.",
    icon: Monitor,
    color: "#3B82F6",
    duration: "12 Weeks",
    students: "500+ Graduates",
    mode: "Online & In-Person",
    price: "₦150,000",
    features: [
      "Live Zoom sessions + recordings",
      "Real-world project portfolio",
      "Industry mentor assignment",
      "Job placement assistance",
      "Lifetime community access",
    ],
  },
  {
    id: "import-export",
    title: "Import/Export Business Training",
    description:
      "Learn supplier verification, shipping logistics, customs clearance, and payment methods. Start your own import business with confidence.",
    icon: Globe,
    color: "#10B981",
    duration: "8 Weeks",
    students: "300+ Graduates",
    mode: "Online Classes",
    price: "₦120,000",
    features: [
      "Verified supplier directory access",
      "Shipping documentation templates",
      "Customs clearance walkthroughs",
      "Payment method mastery",
      "1-on-1 business coaching",
    ],
  },
  {
    id: "hotel-management",
    title: "Hotel Digital Management",
    description:
      "Specialized training for hospitality professionals. Master OTA management, revenue optimization, and guest engagement strategies.",
    icon: TrendingUp,
    color: "#F59E0B",
    duration: "6 Weeks",
    students: "150+ Graduates",
    mode: "In-Person",
    price: "₦100,000",
    features: [
      "OTA platform mastery (Booking.com, Airbnb)",
      "Revenue management strategies",
      "Guest experience optimization",
      "Marketing for hotels",
      "Certification upon completion",
    ],
  },
];

const announcements = [
  {
    title: "New Batch Starting Soon!",
    message: "Enroll now for our next Digital Skills Bootcamp. Limited seats — only 20 spots per cohort!",
    icon: Users,
    urgent: true,
    date: "July 2026",
  },
  {
    title: "Free Import Webinar",
    message: '"How to Start Import Business from China" — Live Q&A with our procurement team.',
    icon: Globe,
    urgent: false,
    date: "This Saturday",
  },
  {
    title: "Certification & Placement",
    message: "All graduates receive internationally recognized certificates + guaranteed job placement assistance.",
    icon: Award,
    urgent: false,
    date: "Ongoing",
  },
];

const testimonials = [
  { name: "Chioma A.", course: "Digital Skills", text: "Got hired as a frontend developer 2 weeks after graduation.", rating: 5 },
  { name: "Emeka O.", course: "Import/Export", text: "Now running my own import business from China. Life changed.", rating: 5 },
  { name: "Amina K.", course: "Hotel Management", text: "Increased my hotel occupancy by 40% using the OTA strategies.", rating: 5 },
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
   ANNOUNCEMENT CARD
   ─────────────────────────────── */
function AnnouncementCard({ item, index }: { item: typeof announcements[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -3 }}
      className={`rounded-xl p-4 transition-all duration-300 ${
        item.urgent
          ? "bg-cyan-500/[0.04] border border-cyan-500/20"
          : "bg-white/[0.015] border border-white/[0.06]"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
            item.urgent ? "bg-cyan-500/15" : "bg-white/[0.04]"
          }`}
        >
          <item.icon className={`w-4 h-4 ${item.urgent ? "text-cyan-400" : "text-white/50"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-white font-medium text-sm">{item.title}</h4>
            {item.urgent && (
              <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-[9px] font-bold uppercase tracking-wide">
                Urgent
              </span>
            )}
          </div>
          <p className="text-white/45 text-xs leading-relaxed mb-2">{item.message}</p>
          <div className="flex items-center gap-1 text-[10px] text-white/30">
            <Calendar className="w-3 h-3" />
            {item.date}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────
   PROGRAM CARD
   ─────────────────────────────── */
function ProgramCard({ program, index }: { program: typeof trainingPrograms[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-2xl p-6 h-full transition-all duration-500 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.012)",
          border: `1px solid ${isHovered ? `${program.color}25` : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 50px ${program.color}08` : "none",
        }}
      >
        {/* Hover orb */}
        <motion.div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `${program.color}12` }}
        />

        {/* Mode badge */}
        <div className="flex items-center justify-between mb-5 relative">
          <Badge
            variant="secondary"
            className="text-[10px] font-semibold tracking-wide uppercase border-0"
            style={{
              background: `${program.color}12`,
              color: program.color,
            }}
          >
            {program.mode}
          </Badge>
          <span
            className="text-lg font-black text-white/5"
            style={{ color: `${program.color}15` }}
          >
            {program.price}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative"
          style={{ background: `${program.color}10` }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <program.icon className="w-7 h-7" style={{ color: program.color }} />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-2 relative">{program.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4 relative">{program.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-5 relative">
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <Clock className="w-3.5 h-3.5" />
            {program.duration}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <Users className="w-3.5 h-3.5" />
            {program.students}
          </div>
        </div>

        {/* Expandable features */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="space-y-2 pt-4 border-t border-white/[0.04] mb-4">
            {program.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: `${program.color}99` }} />
                <span className="text-[11px] text-white/40">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] relative">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-[11px] font-semibold transition-all hover:gap-2"
            style={{ color: program.color }}
          >
            {isExpanded ? "Show Less" : "What's Included"}
            <ChevronRight
              className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
            />
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20interested%20in%20the%20${encodeURIComponent(program.title)}%20program.`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all hover:scale-105"
            style={{
              background: `${program.color}12`,
              color: program.color,
              border: `1px solid ${program.color}20`,
            }}
          >
            <MessageCircle className="w-3 h-3" />
            Enquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────
   TESTIMONIAL CARD
   ─────────────────────────────── */
function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-5 backdrop-blur-sm hover:border-white/[0.12] transition-colors"
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-[10px] font-bold text-white/80">
            {t.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div className="text-xs font-semibold text-white/80">{t.name}</div>
            <div className="text-[10px] text-white/40">{t.course}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════
   MAIN TRAINING COMPONENT
   ════════════════════════════════ */
export function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ═══════ SECTION HEADER ═══════ */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6"
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">
              Training & Education
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Learn.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Grow.
            </span>{" "}
            Succeed.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed"
          >
            Professional training programs designed to equip you with in-demand skills 
            for the digital economy and international trade. Taught by industry experts.
          </motion.p>
        </div>

        {/* ═══════ HERO IMAGE ═══════ */}
        <ScrollReveal delay={0.1} className="mb-16">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img
              src="/student-training.jpg"
              alt="DMULTICHOICE Training Session"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/90 via-[#030305]/30 to-transparent rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl" />

            {/* Floating stats */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              {[
                { icon: Users, label: "950+ Graduates", color: "#3B82F6" },
                { icon: Award, label: "Certified Programs", color: "#10B981" },
                { icon: Shield, label: "Job Placement", color: "#F59E0B" },
                { icon: CheckCircle2, label: "Money-Back Guarantee", color: "#EC4899" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/[0.08]"
                >
                  <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                  <span className="text-[11px] text-white/80 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Play button overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </motion.div>
          </motion.div>
        </ScrollReveal>

        {/* ═══════ ANNOUNCEMENTS ═══════ */}
        <ScrollReveal className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <h3 className="text-sm font-bold text-white tracking-wide">Announcements</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {announcements.map((item, idx) => (
              <AnnouncementCard key={item.title} item={item} index={idx} />
            ))}
          </div>
        </ScrollReveal>

        {/* ═══════ TRAINING PROGRAMS ═══════ */}
        <ScrollReveal className="mb-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">
                Programs
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Choose Your Path
              </h3>
            </div>
            <span className="text-[11px] text-white/30 hidden sm:block">
              3 programs · All levels
            </span>
          </div>
        </ScrollReveal>

        <div ref={ref} className="grid md:grid-cols-3 gap-5 mb-16">
          {trainingPrograms.map((program, idx) => (
            <ProgramCard key={program.id} program={program} index={idx} />
          ))}
        </div>

        {/* ═══════ TESTIMONIALS ═══════ */}
        <ScrollReveal className="mb-6">
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold text-cyan-400/70 tracking-widest uppercase">
              Success Stories
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              What Our Graduates Say
            </h3>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.name} t={t} index={idx} />
          ))}
        </div>

        {/* ═══════ CTA BANNER ═══════ */}
        <ScrollReveal delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(59,130,246,0.04) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative px-8 py-12 sm:px-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                  Join 950+ successful graduates. Enroll today and get certified in weeks, 
                  not years. Flexible payment plans available.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20enroll%20in%20a%20training%20program.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20please%20send%20me%20the%20training%20brochure.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-sm font-semibold border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all hover:scale-105"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}