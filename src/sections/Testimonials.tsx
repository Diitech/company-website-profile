import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Quote,
  Star,
  ArrowRight,
  MessageCircle,
  Award,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   TESTIMONIAL DATA (6 REALISTIC)
   ─────────────────────────────── */
const testimonials = [
  {
    quote: "Built our school website and now manages our social media. Enrollment jumped 40% in one term. Professional from day one.",
    author: "Mrs. Adebayo",
    role: "Principal, Lagos",
    initials: "MA",
    color: "#3B82F6",
    rating: 5,
    service: "Web + Social Media",
  },
  {
    quote: "Imported furniture from Turkey. They verified the supplier, inspected quality, and handled customs. Zero stress on my end.",
    author: "Mr. Okafor",
    role: "Business Owner, Abuja",
    initials: "MO",
    color: "#10B981",
    rating: 5,
    service: "Import & Sourcing",
  },
  {
    quote: "The AI chatbot cut our support tickets by 60%. DMULTICHOICE integrated it in 3 days and trained our team. Game changer.",
    author: "Sarah J.",
    role: "E-commerce Founder",
    initials: "SJ",
    color: "#F59E0B",
    rating: 5,
    service: "AI Automation",
  },
  {
    quote: "OTA management doubled our weekend bookings. Direct reservations are up too. Best investment we made this year.",
    author: "Chief Emmanuel",
    role: "Hotel Owner, Lagos",
    initials: "CE",
    color: "#8B5CF6",
    rating: 5,
    service: "OTA Management",
  },
  {
    quote: "Completed the digital marketing course and got a remote job 2 weeks later. The curriculum matched exactly what employers want.",
    author: "Chioma N.",
    role: "Digital Marketer",
    initials: "CN",
    color: "#EC4899",
    rating: 5,
    service: "Training Program",
  },
  {
    quote: "Sourced factory machines from China. They handled verification, shipping, and clearance. Delivered to my warehouse in Lagos.",
    author: "Engr. Ibrahim",
    role: "Manufacturing Director",
    initials: "EI",
    color: "#14B8A6",
    rating: 5,
    service: "Industrial Sourcing",
  },
];

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients", color: "#3B82F6" },
  { icon: TrendingUp, value: "40%", label: "Avg. Growth", color: "#10B981" },
  { icon: Award, value: "4.9/5", label: "Rating", color: "#F59E0B" },
  { icon: Shield, value: "99%", label: "Success Rate", color: "#8B5CF6" },
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
   TESTIMONIAL CARD
   ─────────────────────────────── */
function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div
        className="relative rounded-2xl p-6 h-full transition-all duration-500"
        style={{
          background: "rgba(255,255,255,0.012)",
          border: `1px solid ${isHovered ? `${t.color}20` : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 40px ${t.color}06` : "none",
        }}
      >
        {/* Hover orb */}
        <div
          className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `${t.color}10` }}
        />

        {/* Service tag */}
        <div className="flex items-center justify-between mb-4 relative">
          <span
            className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full"
            style={{ background: `${t.color}10`, color: t.color }}
          >
            {t.service}
          </span>
          <Quote className="w-5 h-5 text-white/10" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4 relative">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-white/60 text-sm leading-relaxed mb-6 relative">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04] relative">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white/90"
            style={{ background: `${t.color}15` }}
          >
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">{t.author}</p>
            <p className="text-[11px] text-white/40">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────
   STAT CARD
   ─────────────────────────────── */
function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="text-center p-5 rounded-2xl bg-white/[0.015] border border-white/[0.05]"
    >
      <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
      <div className="text-xl font-black text-white">{stat.value}</div>
      <div className="text-[10px] text-white/35 mt-0.5 font-medium">{stat.label}</div>
    </motion.div>
  );
}

/* ════════════════════════════════
   MAIN TESTIMONIALS COMPONENT
   ════════════════════════════════ */
export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ═══════ SECTION HEADER ═══════ */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6"
          >
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Real Results from{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Real Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed"
          >
            No fluff. Just honest feedback from business owners and professionals 
            who trust DMULTICHOICE with their growth.
          </motion.p>
        </div>

        {/* ═══════ STATS BAR ═══════ */}
        <ScrollReveal delay={0.1} className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, idx) => (
              <StatCard key={stat.label} stat={stat} index={idx} />
            ))}
          </div>
        </ScrollReveal>

        {/* ═══════ TESTIMONIALS GRID ═══════ */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.author} t={t} index={idx} />
          ))}
        </div>

        {/* ═══════ CTA BANNER ═══════ */}
        <ScrollReveal delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(16,185,129,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Join Our Satisfied Clients
                </h3>
                <p className="text-white/40 text-sm max-w-md">
                  Your success story could be next. Start with a free consultation.
                </p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20discuss%20my%20project.`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}