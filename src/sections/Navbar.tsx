import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Phone,
  ArrowUpRight,
  Globe,
  Home,
  MessageCircle,
  Monitor,
  Hotel,
  Share2,
  Bot,
  TrendingUp,
  Package,
  CheckCircle,
  GraduationCap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_NUMBER = "2348158484621";

interface ServiceItem {
  name: string;
  href: string;
  icon: React.ElementType;
  color: string;
  waText: string;
}

const servicesMenu: ServiceItem[] = [
  { name: 'Website Development', href: '/services/website-development', icon: Monitor, color: '#3B82F6', waText: 'Website%20Development' },
  { name: 'Website Management', href: '/services/website-management', icon: Globe, color: '#06B6D4', waText: 'Website%20Management' },
  { name: 'OTA Management', href: '/services/ota-management', icon: Hotel, color: '#8B5CF6', waText: 'OTA%20Management' },
  { name: 'Social Media Mgmt', href: '/services/social-media', icon: Share2, color: '#EC4899', waText: 'Social%20Media%20Management' },
  { name: 'AI & Automation', href: '/services/ai-automation', icon: Bot, color: '#F59E0B', waText: 'AI%20and%20Automation' },
  { name: 'Digital Growth', href: '/services/digital-growth', icon: TrendingUp, color: '#10B981', waText: 'Digital%20Growth' },
  { name: 'International Sourcing', href: '/services/international-sourcing', icon: Package, color: '#14B8A6', waText: 'International%20Sourcing' },
  { name: 'Supplier Verification', href: '/services/supplier-verification', icon: CheckCircle, color: '#6366F1', waText: 'Supplier%20Verification' },
  { name: 'Online Training', href: '/services/training', icon: GraduationCap, color: '#F97316', waText: 'Online%20Training' },
];

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Partners', href: '/partners' },
  { name: 'Team', href: '/team' },
  { name: 'Warehouse', href: '/warehouse' },
  { name: 'Videos', href: '/videos' },
  { name: 'Blog', href: '/blog' },
];

/* ───────────────────────────────
   ACTIVE LINK INDICATOR
   ─────────────────────────────── */
function ActiveIndicator() {
  return (
    <motion.span
      layoutId="activeNav"
      className="absolute -bottom-0.5 left-1 right-1 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 rounded-full"
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    />
  );
}

/* ════════════════════════════════
   SERVICES DROPDOWN (Desktop)
   ════════════════════════════════ */
function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isServiceActive = location.pathname.startsWith('/services/');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link
        to="#"
        className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${
          isServiceActive
            ? 'text-white bg-white/[0.06]'
            : 'text-white/50 hover:text-white/90 hover:bg-white/[0.03]'
        }`}
        onClick={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
      >
        Services
        <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
        {isServiceActive && <ActiveIndicator />}
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] rounded-2xl bg-[#0a0a0f]/98 backdrop-blur-2xl border border-white/[0.08] shadow-2xl overflow-hidden"
          >
            <div className="p-3 grid grid-cols-2 gap-1">
              {servicesMenu.map((service) => {
                const isActive = location.pathname === service.href;
                return (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? 'bg-white/[0.06] text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${service.color}15` }}
                    >
                      <service.icon className="w-4 h-4" style={{ color: service.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-medium truncate">{service.name}</div>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20interested%20in%20${service.waText}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-emerald-500/20"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════
   SERVICES SECTION (Mobile)
   ════════════════════════════════ */
function MobileServicesSection({ onNavClick }: { onNavClick: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isServiceActive = location.pathname.startsWith('/services/');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
            isServiceActive
              ? 'bg-white/[0.06] text-white border border-white/[0.08]'
              : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
          }`}
        >
          <div className="flex items-center gap-3">
            <Monitor className="w-4 h-4 text-white/30" />
            <span>Services</span>
          </div>
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-90' : ''} ${isServiceActive ? 'text-blue-400' : 'text-white/15'}`} />
        </button>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-4 pr-2 py-2 space-y-0.5">
              {servicesMenu.map((service, idx) => {
                const isActive = location.pathname === service.href;
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.3 }}
                  >
                    <Link
                      to={service.href}
                      onClick={onNavClick}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-xs font-medium transition-all ${
                        isActive ? 'bg-white/[0.04] text-white' : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-6 h-6 rounded-md flex items-center justify-center"
                          style={{ background: `${service.color}15` }}
                        >
                          <service.icon className="w-3 h-3" style={{ color: service.color }} />
                        </div>
                        <span>{service.name}</span>
                      </div>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20interested%20in%20${service.waText}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-400/60" />
                      </a>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ════════════════════════════════
   NAVBAR COMPONENT
   ════════════════════════════════ */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  /* Scroll direction detection */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    lastScrollY.current = latest;

    if (latest < 60) {
      setHidden(false);
      setIsScrolled(false);
      return;
    }

    setIsScrolled(true);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  /* Close mobile menu handler */
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  /* Home click = reload page */
  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
    setIsMobileMenuOpen(false);
  };

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hidden ? -120 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0f]/85 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-[#030305]/60 backdrop-blur-md'
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* ═══════ LOGO ═══════ */}
            <Link
              to="/"
              onClick={handleHomeClick}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative"
              >
                {/* Logo image */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/[0.08] flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="DMULTICHOICE"
                    className="w-7 h-7 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <Sparkles className="w-5 h-5 text-blue-400 absolute" style={{ display: 'none' }} id="logo-fallback" />
                </div>
                {/* Live dot */}
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0a0f] animate-pulse" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg font-black text-white tracking-tight leading-none">
                  DMULTICHOICE
                </span>
                <span className="text-[9px] text-white/30 tracking-[0.18em] uppercase font-medium hidden sm:block">
                  Digital Studio + Procurement
                </span>
              </div>
            </Link>

            {/* ═══════ DESKTOP NAVIGATION ═══════ */}
            <div className="hidden xl:flex items-center gap-0.5 bg-white/[0.02] rounded-full px-2 py-1.5 border border-white/[0.05]">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.href) || location.pathname === link.href;

                if (link.name === 'Home') {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={handleHomeClick}
                      className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                        isActive
                          ? 'text-white bg-white/[0.06]'
                          : 'text-white/50 hover:text-white/90 hover:bg-white/[0.03]'
                      }`}
                    >
                      {link.name}
                      {isActive && <ActiveIndicator />}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleNavClick}
                    className={`relative px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-white/[0.06]'
                        : 'text-white/50 hover:text-white/90 hover:bg-white/[0.03]'
                    }`}
                  >
                    {link.name}
                    {isActive && <ActiveIndicator />}
                  </Link>
                );
              })}
              {/* Services Dropdown - always after the regular links */}
              <ServicesDropdown />
            </div>

            {/* ═══════ DESKTOP CTA ═══════ */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/2348158484621"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[12px] text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+234 815 848 4621</span>
              </a>

              <div className="h-4 w-px bg-white/10" />

              <Link to="/register" onClick={handleNavClick}>
                <Button
                  variant="ghost"
                  className="text-white/60 hover:text-white hover:bg-white/[0.05] rounded-full px-5 text-[13px] font-medium h-9"
                >
                  Register
                </Button>
              </Link>

              <Link to="/contact" onClick={handleNavClick}>
                <Button
                  className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-5 text-[13px] font-semibold h-9 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] group"
                >
                  Contact Us
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>

            {/* ═══════ MOBILE MENU BUTTON ═══════ */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden relative w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ═══════ MOBILE MENU OVERLAY ═══════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0a0a0f]/98 backdrop-blur-2xl border-l border-white/[0.06] lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06] shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                    <img
                      src="/logo.png"
                      alt=""
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <Sparkles className="w-4 h-4 text-blue-400 absolute" style={{ display: 'none' }} />
                  </div>
                  <span className="text-sm font-bold text-white">Menu</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
                {navLinks.slice(0, 1).map((link) => {
                  const isActive = link.href === '/' ? location.pathname === '/' : location.pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={handleHomeClick}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-white/[0.06] text-white border border-white/[0.08]'
                            : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {link.icon && <link.icon className="w-4 h-4 text-white/30" />}
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-white/15'}`} />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Services Section */}
                <MobileServicesSection onNavClick={handleNavClick} />

                {/* Remaining links (skip Home since shown above) */}
                {navLinks.slice(1).map((link, index) => {
                  const isActive = link.href === '/' ? location.pathname === '/' : location.pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={handleNavClick}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-white/[0.06] text-white border border-white/[0.08]'
                            : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {link.icon && <link.icon className="w-4 h-4 text-white/30" />}
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-white/15'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="shrink-0 px-6 py-6 border-t border-white/[0.06] bg-gradient-to-t from-[#0a0a0f] to-transparent">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <a
                    href="https://wa.me/2348158484621"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/15 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    WhatsApp Support
                  </a>

                  <Link to="/contact" onClick={handleNavClick}>
                    <Button className="w-full bg-white text-[#030305] hover:bg-white/90 rounded-full py-5 text-sm font-semibold">
                      Contact Us
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>

                  <p className="text-center text-[10px] text-white/25 pt-1">
                    CAC Registered · RC 9580371
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
