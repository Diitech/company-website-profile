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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services/website-development' },
  { name: 'Partners', href: '/partners' },
  { name: 'Team', href: '/team' },
  { name: 'Warehouse', href: '/warehouse' },
  { name: 'Videos', href: '/videos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Awards', href: '/awards' },
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

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={link.name === 'Home' ? handleHomeClick : handleNavClick}
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
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={link.name === 'Home' ? handleHomeClick : handleNavClick}
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