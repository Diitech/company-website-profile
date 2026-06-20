import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="group fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full flex items-center justify-center"
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg group-hover:bg-blue-500/50 transition-colors" />
          {/* Core */}
          <span className="relative w-12 h-12 rounded-full bg-[#0a0a0f]/90 backdrop-blur-md border border-white/10 group-hover:border-blue-500/40 flex items-center justify-center shadow-lg transition-colors">
            <ArrowUp className="w-5 h-5 text-white/80 group-hover:text-blue-400 transition-colors" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
