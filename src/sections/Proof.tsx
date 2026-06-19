import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import {
  MessageSquare,
  Package,
  GraduationCap,
  Monitor,
  Handshake,
  Building,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Share2,
  MapPin,
  Calendar,
  CheckCircle2,
  Star,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";

/* â”€â”€â”€ UTILITIES â”€â”€â”€ */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* â”€â”€â”€ MAGNETIC CARD â”€â”€â”€ */
function MagneticCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / rect.width) * 16;
    const rotateX = -((e.clientY - centerY) / rect.height) * 16;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
}

/* â”€â”€â”€ GALLERY CARD â”€â”€â”€ */
function GalleryCard({
  item,
  index,
  onClick,
  categoryColor,
}: {
  item: { title: string; description: string; image: string };
  index: number;
  onClick: () => void;
  categoryColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <MagneticCard>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
          className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.06] bg-white/[0.02]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            />

            {/* Overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${categoryColor}15, transparent 70%)`,
              }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Top actions */}
            <motion.div
              className="absolute top-3 right-3 flex gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <Heart
                  className={cx(
                    "w-4 h-4 transition-colors",
                    isLiked ? "fill-rose-400 text-rose-400" : "text-white/60",
                  )}
                />
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <Share2 className="w-4 h-4 text-white/60" />
              </button>
            </motion.div>

            {/* View indicator */}
            <motion.div
              className="absolute top-3 left-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-white/50" />
                <span className="text-[10px] text-white/50 font-medium">
                  Click to expand
                </span>
              </div>
            </motion.div>

            {/* Center zoom icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white/80" />
              </div>
            </motion.div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <motion.div
                animate={{ y: isHovered ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white font-bold text-base mb-1.5 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </motion.div>

              {/* Action bar */}
              <motion.div
                className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-[10px] text-white/30 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2024
                </span>
                <span className="text-[10px] text-white/30 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Lagos, NG
                </span>
                <span className="text-[10px] text-emerald-400/80 flex items-center gap-1 ml-auto">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </MagneticCard>
    </motion.div>
  );
}

/* â”€â”€â”€ LIGHTBOX â”€â”€â”€ */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: {
  images: { title: string; description: string; image: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}) {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        onNavigate(-1);
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        onNavigate(1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNavigate]);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors z-10"
      >
        <X className="w-6 h-6 text-white" />
      </motion.button>

      {/* Navigation */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={(e) => {
          e.stopPropagation();
          setDirection(-1);
          onNavigate(-1);
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={(e) => {
          e.stopPropagation();
          setDirection(1);
          onNavigate(1);
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Image container */}
      <div
        className="relative max-w-5xl max-h-[80vh] mx-20"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -direction * 100, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <img
              src={current.image}
              alt={current.title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl"
            />

            {/* Info overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl"
            >
              <h3 className="text-white font-bold text-xl mb-2">
                {current.title}
              </h3>
              <p className="text-white/60 text-sm">{current.description}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs text-white/30">
                  {currentIndex + 1} / {images.length}
                </span>
                <span className="text-xs text-emerald-400/80 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Proof
                </span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setDirection(i > currentIndex ? 1 : -1);
              onNavigate(i - currentIndex);
            }}
            className={cx(
              "w-2 h-2 rounded-full transition-all duration-300",
              i === currentIndex
                ? "bg-white w-6"
                : "bg-white/20 hover:bg-white/40",
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* â”€â”€â”€ CATEGORY HEADER â”€â”€â”€ */
function CategoryHeader({
  icon: Icon,
  title,
  color,
  count,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  color: string;
  count: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className="flex items-center gap-4 mb-8"
    >
      <div
        className={cx(
          "w-12 h-12 rounded-2xl flex items-center justify-center border border-white/[0.08]",
          color.replace("text-", "bg-").replace("400", "500/10"),
        )}
      >
        <Icon className={cx("w-6 h-6", color)} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span
            className={cx(
              "px-2.5 py-0.5 rounded-full text-[10px] font-bold",
              color.replace("text-", "bg-").replace("400", "500/10"),
              color,
            )}
          >
            {count}
          </span>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-3" />
      </div>
    </motion.div>
  );
}

/* â”€â”€â”€ TRUST BADGE â”€â”€â”€ */
function TrustBadge({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl"
    >
      <div className="flex -space-x-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full border-2 border-[#030305] flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, hsl(${200 + i * 25}, 70%, 55%), hsl(${240 + i * 15}, 60%, 45%))`,
            }}
          >
            <Star className="w-3 h-3 text-white/80 fill-white/80" />
          </div>
        ))}
      </div>
      <div className="h-6 w-px bg-white/10" />
      <span className="text-sm text-white/50 font-medium">
        <span className="text-white/80 font-bold">4.9/5</span> from 100+
        verified clients
      </span>
    </motion.div>
  );
}

/* â”€â”€â”€ MAIN PROOF SECTION â”€â”€â”€ */
export function Proof() {
  const ref = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Wrap categories in useMemo to prevent re-creation on every render
  const categories = useMemo(
    () => [
      {
        id: "sourcing",
        icon: Package,
        title: "Sourcing & Procurement",
        color: "text-blue-400",
        items: [
          {
            title: "Factory Sourcing in China",
            description:
              "Our team meeting with manufacturers to inspect product quality and negotiate pricing.",
            image: "/sourcing-1.jpg",
          },
          {
            title: "Quality Control Inspection",
            description:
              "On-site verification of product specifications before shipment.",
            image: "/sourcing-2.jpg",
          },
          {
            title: "International Shipping",
            description: "Coordinating logistics from global ports to Nigeria.",
            image: "/shipping.jpg",
          },
          {
            title: "Goods Unboxing & Inspection",
            description:
              "Verifying imported electronics and gadgets upon arrival.",
            image: "/goods-unboxing.jpg",
          },
          {
            title: "Factory Machine Delivered",
            description:
              "Industrial machinery successfully delivered to Nigerian factory.",
            image: "/factory-machine.jpg",
          },
          {
            title: "Client Meeting in Nigeria",
            description:
              "Our sourcing agent discussing requirements with local client.",
            image: "/agent-meeting.jpg",
          },
        ],
      },
      {
        id: "feedback",
        icon: MessageSquare,
        title: "Client Feedback",
        color: "text-green-400",
        items: [
          {
            title: "Website Project Approval",
            description:
              "Client expressing satisfaction with website development work.",
            image: "/whatsapp-1.jpg",
          },
          {
            title: "Shipping Fee Payment",
            description:
              "Payment confirmation for international shipping services.",
            image: "/whatsapp-2.jpg",
          },
          {
            title: "Proposal Accepted",
            description: "Client agreeing to project terms and pricing.",
            image: "/whatsapp-3.jpg",
          },
          {
            title: "Factory Machine Order",
            description:
              "Client confirming industrial equipment purchase and delivery timeline.",
            image: "/whatsapp-machine.jpg",
          },
          {
            title: "Hotel Website Project",
            description:
              "Hotel owner approving website design and OTA integration.",
            image: "/whatsapp-hotel.jpg",
          },
        ],
      },
      {
        id: "payments",
        icon: Handshake,
        title: "Payment Confirmations",
        color: "text-cyan-400",
        items: [
          {
            title: "WeChat Payment",
            description: "Chinese supplier payment via WeChat Pay.",
            image: "/wechat-payment.jpg",
          },
          {
            title: "Alipay Transaction History",
            description:
              "Multiple successful transactions with Chinese suppliers.",
            image: "/alipay-history.jpg",
          },
          {
            title: "Nigeria Bank Transfer",
            description: "GTBank transfer confirmation for services rendered.",
            image: "/bank-transfer.jpg",
          },
        ],
      },
      {
        id: "meetings",
        icon: Building,
        title: "Business Meetings",
        color: "text-violet-400",
        items: [
          {
            title: "Hotel Product Proposal Meeting",
            description:
              "Conference hall presentation for hospitality digital transformation.",
            image: "/conference-meeting.jpg",
          },
        ],
      },
      {
        id: "delivered",
        icon: Monitor,
        title: "Delivered Projects & Goods",
        color: "text-blue-400",
        items: [
          {
            title: "Happy Customer with Delivered Goods",
            description:
              "Client selfie showing received packages from international sourcing.",
            image: "/delivery-selfie.jpg",
          },
          {
            title: "Professional Website Delivered",
            description: "Modern responsive website built for client.",
            image: "/website-work.jpg",
          },
        ],
      },
      {
        id: "training",
        icon: GraduationCap,
        title: "Training & Development",
        color: "text-amber-400",
        items: [
          {
            title: "Digital Skills Training Session",
            description:
              "Students learning web development and digital skills in our training center.",
            image: "/student-training.jpg",
          },
          {
            title: "Import/Export Training",
            description:
              "Professional training on international trade and sourcing procedures.",
            image: "/import-training.jpg",
          },
          {
            title: "Online Coding Bootcamp",
            description:
              "Virtual learning session with students from across Nigeria.",
            image: "/online-class-1.jpg",
          },
          {
            title: "Digital Marketing Webinar",
            description:
              "Remote training on SEO, content creation, and social media strategies.",
            image: "/online-class-2.jpg",
          },
          {
            title: "Certificate Ceremony",
            description:
              "Graduates receiving certificates after completing training programs.",
            image: "/certificate-ceremony.jpg",
          },
          {
            title: "Training Completion",
            description:
              "Proud graduate with certificate after completing our digital skills program.",
            image: "/student-testimonial.jpg",
          },
        ],
      },
    ],
    [],
  );

  // Flatten all images using useMemo instead of useEffect + setState
  const allImages = useMemo(
    () => categories.flatMap((cat) => cat.items),
    [categories],
  );

  const openLightbox = useCallback(
    (categoryIndex: number, itemIndex: number) => {
      let globalIndex = 0;
      for (let i = 0; i < categoryIndex; i++) {
        globalIndex += categories[i].items.length;
      }
      globalIndex += itemIndex;
      setLightboxIndex(globalIndex);
      setLightboxOpen(true);
    },
    [categories],
  );

  const navigateLightbox = useCallback(
    (dir: number) => {
      setLightboxIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return allImages.length - 1;
        if (next >= allImages.length) return 0;
        return next;
      });
    },
    [allImages.length],
  );

  return (
    <section
      id="proof"
      className="py-24 lg:py-40 relative overflow-hidden bg-[#030305]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.015)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* â”€â”€ HEADER â”€â”€ */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">
              Real Proof
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            See Our Work in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Action
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Real images from our sourcing trips, client feedback, payment
            confirmations, delivered goods, training sessions, and business
            meetings.
          </motion.p>

          <TrustBadge delay={0.4} />
        </div>

        {/* â”€â”€ CATEGORIES â”€â”€ */}
        <div ref={ref} className="space-y-20">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <CategoryHeader
                icon={category.icon}
                title={category.title}
                color={category.color}
                count={category.items.length}
                delay={0.1}
              />

              <div
                className={cx(
                  "grid gap-4",
                  category.items.length === 1
                    ? "grid-cols-1 max-w-2xl"
                    : category.items.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : category.items.length === 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {category.items.map((item, itemIndex) => (
                  <GalleryCard
                    key={item.title}
                    item={item}
                    index={itemIndex}
                    onClick={() => openLightbox(catIndex, itemIndex)}
                    categoryColor={category.color
                      .replace("text-", "#")
                      .replace("blue", "3B82F6")
                      .replace("green", "10B981")
                      .replace("cyan", "06B6D4")
                      .replace("violet", "8B5CF6")
                      .replace("amber", "F59E0B")}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* â”€â”€ BOTTOM CTA â”€â”€ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to see your project here?
              </h3>
              <p className="text-white/40 mb-8 max-w-lg mx-auto">
                Join 100+ satisfied clients who trust DMULTICHOICE for their
                digital and logistics needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#030305] font-bold text-sm hover:bg-white/90 transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]"
                >
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/2348158484621"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* â”€â”€ LIGHTBOX â”€â”€ */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={allImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={navigateLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

