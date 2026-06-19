import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP = "2348158484621";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030305]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="grid lg:grid-cols-5 gap-10 items-center"
        >
          {/* Image 40% */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]">
              <img
                src="/about/team.jpg"
                alt="DMULTICHOICE team"
                className="w-full h-[320px] lg:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute" />
            </div>
          </div>

          {/* Text 60% */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs text-white/70 font-medium">
                CAC-Registered Digital Agency
              </p>
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-tight">
              DMULTICHOICE SERVICES LTD
            </h2>

            <p className="mt-3 text-white/60 leading-relaxed max-w-xl">
              DMULTICHOICE SERVICES LTD is a CAC-registered digital agency (RC
              9580371).
            </p>
            <p className="text-white/60 leading-relaxed max-w-xl">
              We build websites, mobile apps, browser extensions, plugins, and
              AI systems.
            </p>
            <p className="text-white/60 leading-relaxed max-w-xl">
              Every import shipment is insured for client protection.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { v: "100+", l: "Projects" },
                { v: "9", l: "Active Modules" },
                { v: "5", l: "Countries" },
                { v: "Insured", l: "Import Protection" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4"
                >
                  <p className="text-lg font-black text-white">{s.v}</p>
                  <p className="text-[11px] text-white/40 mt-1">{s.l}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%20Dmultichoice,%20I%20want%20to%20start%20a%20project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/20 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/30 transition border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
