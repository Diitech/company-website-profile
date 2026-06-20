import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Send,
  Heart,
  Globe,
  Clock,
  Shield,
  ExternalLink,
} from "lucide-react";

/* ─── UTILITIES ─── */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ─── FLOATING ORBS ─── */
function FloatingOrbs() {
  return (
    <>
      <motion.div
        className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[150px] pointer-events-none"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* ─── ANIMATED LINK ─── */
function AnimatedLink({
  to,
  href,
  children,
  external = false,
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <span
      className="group relative inline-flex items-center gap-1.5 text-white/50 text-sm transition-colors duration-300 hover:text-blue-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute -bottom-0.5 left-0 h-px bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        />
      </span>
      {external && (
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return <Link to={to || "/"}>{content}</Link>;
}

/* ─── SOCIAL ICON ─── */
function SocialIcon({
  icon: Icon,
  href,
  label,
  delay,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
    </motion.a>
  );
}

/* ─── NEWSLETTER ─── */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-xl p-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px]" />
      <div className="relative">
        <h4 className="text-white font-bold text-sm mb-2">Stay Updated</h4>
        <p className="text-white/40 text-xs mb-4">
          Get the latest news and updates delivered to your inbox.
        </p>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-emerald-400 text-sm"
          >
            <Shield className="w-4 h-4" />
            <span>Subscribed successfully!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div
              className={cx(
                "flex-1 relative rounded-lg border bg-white/[0.03] transition-all duration-300",
                isFocused
                  ? "border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.08)]"
                  : "border-white/[0.08]",
              )}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="your@email.com"
                className="w-full bg-transparent border-0 text-white text-sm placeholder:text-white/20 px-3 py-2.5 focus:outline-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 rounded-lg bg-white text-[#030305] hover:bg-white/90 transition-colors"
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

/* ─── COLUMN HEADER ─── */
function ColumnHeader({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-white font-bold text-sm mb-5 tracking-wide uppercase"
    >
      {children}
    </motion.h4>
  );
}

/* ─── CONTACT ITEM ─── */
function ContactItem({
  icon: Icon,
  text,
  href,
  delay,
}: {
  icon: React.ElementType;
  text: string;
  href?: string;
  delay: number;
}) {
  const content = (
    <span className="flex items-center gap-2.5 text-white/50 text-sm group-hover:text-blue-400 transition-colors duration-300">
      <span className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-all duration-300">
        <Icon className="w-3.5 h-3.5" />
      </span>
      {text}
    </span>
  );

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        <span className="block">{content}</span>
      )}
    </motion.li>
  );
}

/* ─── MAIN FOOTER ─── */
export function Footer() {
  const ref = useRef(null);

  const serviceLinks = [
    { name: "Website Development", href: "/services/website-development" },
    { name: "OTA Management", href: "/services/ota-management" },
    {
      name: "Social Media Management",
      href: "/services/social-media",
    },
    { name: "AI Solutions", href: "/services/ai-automation" },
    {
      name: "International Sourcing",
      href: "/services/international-sourcing",
    },
    { name: "Online Training", href: "/services/training" },
  ];

  const productLinks = [
    { name: "Technology", href: "/products" },
    { name: "Appliances", href: "/products" },
    { name: "Furniture", href: "/products" },
    { name: "Automobiles", href: "/products" },
    { name: "Building Materials", href: "/products" },
  ];

  const resourceLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden bg-[#030305] border-t border-white/[0.06]">
      <FloatingOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/[0.08] flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-colors">
                <img
                  src="/logo.png"
                  alt="DMULTICHOICE"
                  className="w-9 h-9 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const fallback = (e.target as HTMLImageElement)
                      .nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "block";
                  }}
                />
                <Shield
                  className="w-6 h-6 text-blue-400"
                  style={{ display: "none" }}
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                DMULTICHOICE
              </span>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Digital Solutions & Global Procurement Company. We build, manage,
              automate, source, and train — empowering businesses across Africa
              and beyond.
            </p>

            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  {...social}
                  delay={0.1 + index * 0.1}
                />
              ))}
            </div>

            <Newsletter />
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <ColumnHeader delay={0.1}>Services</ColumnHeader>
              <ul className="space-y-3">
                {serviceLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                  >
                    <AnimatedLink to={link.href}>{link.name}</AnimatedLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnHeader delay={0.2}>Products</ColumnHeader>
              <ul className="space-y-3">
                {productLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  >
                    <AnimatedLink to={link.href}>{link.name}</AnimatedLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnHeader delay={0.3}>Resources</ColumnHeader>
              <ul className="space-y-3">
                {resourceLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                  >
                    <AnimatedLink to={link.href}>{link.name}</AnimatedLink>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ColumnHeader delay={0.3}>Contact</ColumnHeader>
            <ul className="space-y-4">
              <ContactItem
                icon={Mail}
                text="support@dmultichoice.com"
                href="mailto:support@dmultichoice.com"
                delay={0.35}
              />
              <ContactItem
                icon={Mail}
                text="Deliamutiempire@gmail.com (backup)"
                href="mailto:Deliamutiempire@gmail.com"
                delay={0.38}
              />
              <ContactItem
                icon={Phone}
                text="🇳🇬 +234 815 848 4621"
                href="tel:+2348158484621"
                delay={0.4}
              />
              <ContactItem
                icon={Phone}
                text="🇺🇸 +1 (906) 430-2144"
                href="tel:+19064302144"
                delay={0.45}
              />
              <ContactItem
                icon={MapPin}
                text="18 Awoniyi Elemo St, Victoria Island, Lagos"
                delay={0.5}
              />
            </ul>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <Globe className="w-3.5 h-3.5" />
                <span>Serving 5+ countries</span>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon - Fri: 9AM - 6PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <Shield className="w-3.5 h-3.5" />
                <span>CAC Registered · RC 9580371</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-white/60">DMULTICHOICE</span>.
              Built with{" "}
              <Heart className="w-3 h-3 inline text-rose-400 fill-rose-400" />{" "}
              in Lagos, Nigeria.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <AnimatedLink to="/terms">Terms</AnimatedLink>
            <span className="text-white/10">|</span>
            <AnimatedLink to="/privacy-policy">Privacy</AnimatedLink>
            <span className="text-white/10">|</span>
            <AnimatedLink to="/contact">Contact</AnimatedLink>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 text-xs hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            Back to top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

