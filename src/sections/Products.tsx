import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Smartphone,
  Home,
  Shirt,
  Sofa,
  Car,
  Building2,
  Factory,
  ArrowRight,
  MessageCircle,
  Globe,
  Package,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

/* ───────────────────────────────
   PRODUCT DATA
   ─────────────────────────────── */
const productCategories = [
  {
    title: "Technology & Gadgets",
    items: [
      "Smartphones",
      "Laptops",
      "Electronics",
      "Smart devices",
      "Accessories",
    ],
    icon: Smartphone,
    color: "#3B82F6",
    image: "/products/tech.jpg",
    origin: ["China", "USA", "UAE"],
  },
  {
    title: "Home & Kitchen Appliances",
    items: [
      "Refrigerators",
      "Gas cookers",
      "Washing machines",
      "Kitchen equipment",
      "Small appliances",
    ],
    icon: Home,
    color: "#06B6D4",
    image: "/products/home.jpg",
    origin: ["China", "Turkey", "Italy"],
  },
  {
    title: "Fashion & Wears",
    items: ["Clothing", "Shoes", "Bags", "Accessories", "Jewelry"],
    icon: Shirt,
    color: "#EC4899",
    image: "/products/fashion.jpg",
    origin: ["Turkey", "Italy", "China"],
  },
  {
    title: "Furniture",
    items: [
      "Office furniture",
      "School furniture",
      "Home furniture",
      "Outdoor",
      "Custom designs",
    ],
    icon: Sofa,
    color: "#8B5CF6",
    image: "/products/furniture.jpg",
    origin: ["China", "Turkey", "Malaysia"],
  },
  {
    title: "Automobiles",
    items: ["Cars", "Auto parts", "Vehicle accessories", "Tires", "Batteries"],
    icon: Car,
    color: "#F59E0B",
    image: "/products/auto.jpg",
    origin: ["Japan", "China", "UAE"],
  },
  {
    title: "Building Materials",
    items: [
      "Tiles",
      "Doors",
      "Roofing materials",
      "Construction supplies",
      "Plumbing",
    ],
    icon: Building2,
    color: "#10B981",
    image: "/products/building.jpg",
    origin: ["China", "Turkey", "Italy"],
  },
  {
    title: "Industrial Equipment",
    items: [
      "Factory machines",
      "Processing equipment",
      "Production tools",
      "Generators",
      "Compressors",
    ],
    icon: Factory,
    color: "#F97316",
    image: "/products/industrial.jpg",
    origin: ["China", "Germany", "India"],
  },
];

const countries = [
  { name: "China", flag: "🇨🇳", color: "#EF4444" },
  { name: "United Kingdom", flag: "🇬🇧", color: "#3B82F6" },
  { name: "Turkey", flag: "🇹🇷", color: "#F97316" },
  { name: "Italy", flag: "🇮🇹", color: "#10B981" },
  { name: "USA", flag: "🇺🇸", color: "#6366F1" },
  { name: "UAE", flag: "🇦🇪", color: "#06B6D4" },
  { name: "Japan", flag: "🇯🇵", color: "#EC4899" },
  { name: "Germany", flag: "🇩🇪", color: "#F59E0B" },
];

/* ───────────────────────────────
   SCROLL REVEAL
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
   PRODUCT CARD
   ─────────────────────────────── */
function ProductCard({
  category,
  index,
}: {
  category: (typeof productCategories)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-2xl p-5 h-full transition-all duration-500 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.012)",
          border: `1px solid ${isHovered ? `${category.color}25` : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 50px ${category.color}08` : "none",
        }}
      >
        {/* Hover gradient orb */}
        <motion.div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `${category.color}12` }}
        />

        {/* Top row: Icon + Origin flags */}
        <div className="flex items-start justify-between mb-4 relative">
          <motion.div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${category.color}10` }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <category.icon
              className="w-5 h-5"
              style={{ color: category.color }}
            />
          </motion.div>

          <div className="flex -space-x-1.5">
            {category.origin.slice(0, 3).map((c, i) => {
              const country = countries.find((cn) => cn.name === c);
              return (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="w-6 h-6 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-xs"
                  title={c}
                >
                  {country?.flag}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-1 relative group-hover:text-white transition-colors">
          {category.title}
        </h3>

        {/* Item count */}
        <p className="text-[11px] text-white/30 mb-4 relative">
          {category.items.length} product types available
        </p>

        {/* Items list */}
        <ul className="space-y-2 mb-5 relative">
          {category.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex items-center gap-2.5"
            >
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: `${category.color}80` }}
              />
              <span className="text-white/50 text-[13px]">{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] relative">
          <span
            className="text-[11px] font-semibold flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
            style={{ color: category.color }}
          >
            Request Quote
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20interested%20in%20importing%20${encodeURIComponent(category.title)}.`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all hover:scale-105"
            style={{
              background: `${category.color}10`,
              color: category.color,
              border: `1px solid ${category.color}20`,
            }}
          >
            <MessageCircle className="w-3 h-3" />
            Chat
          </a>
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
    <div className="relative overflow-hidden py-3">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#030305] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#030305] to-transparent z-10" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...countries, ...countries, ...countries, ...countries].map(
          (c, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0">
              <span className="text-lg">{c.flag}</span>
              <span className="text-xs text-white/40 font-medium">
                {c.name}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: c.color,
                  boxShadow: `0 0 8px ${c.color}44`,
                }}
              />
            </div>
          ),
        )}
      </motion.div>
    </div>
  );
}

/* ───────────────────────────────
   TRUST BAR
   ─────────────────────────────── */
const trustItems = [
  { icon: Shield, text: "Insured Shipments" },
  { icon: Clock, text: "2-4 Week Delivery" },
  { icon: CheckCircle2, text: "Verified Suppliers" },
  { icon: Zap, text: "Customs Cleared" },
  { icon: Package, text: "Door-to-Door" },
];

function TrustBar() {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
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
          <span className="text-[10px] text-white/45 font-medium">
            {item.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ════════════════════════════════
   MAIN PRODUCTS COMPONENT
   ════════════════════════════════ */
export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#030305]"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/4 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ═══════ SECTION HEADER ═══════ */}
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] mb-6"
          >
            <Package className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">
              Global Procurement
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 max-w-4xl mx-auto"
          >
            Quality Products from{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Global Markets
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed mb-8"
          >
            We facilitate the importation of a wide range of products from
            verified suppliers across China, UK, Turkey, Italy, and more — all
            insured and customs-cleared.
          </motion.p>

          <ScrollReveal delay={0.1}>
            <TrustBar />
          </ScrollReveal>
        </div>

        {/* ═══════ COUNTRY MARQUEE ═══════ */}
        <ScrollReveal delay={0.15} className="mb-12">
          <CountryMarquee />
        </ScrollReveal>

        {/* ═══════ PRODUCTS GRID ═══════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productCategories.map((category, i) => (
            <ProductCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* ═══════ BOTTOM CTA ═══════ */}
        <ScrollReveal delay={0.2} className="mt-16">
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(16,185,129,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative px-8 py-12 sm:px-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Looking for Something Specific?
                </h3>
                <p className="text-white/40 text-sm max-w-md leading-relaxed">
                  We source products beyond this list. Tell us what you need and
                  we will find verified suppliers, negotiate prices, and deliver
                  to your doorstep — fully insured.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20request%20a%20custom%20product%20sourcing%20quote.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8 py-6 text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'd%20like%20to%20see%20your%20product%20catalog.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-sm font-semibold border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all hover:scale-105"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    View Full Catalog
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
