import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  ArrowRight,
  Handshake,
  Globe,
  Target,
  BarChart3,
  Users,
  Shield,
  DollarSign,
  Lightbulb,
  Rocket,
  MessageCircle,
  Building2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "2348158484621";

const investmentHighlights = [
  {
    icon: TrendingUp,
    title: "High Growth Trajectory",
    description:
      "DMULTICHOICE has grown from a small Lagos web agency to a full-service digital studio and global procurement partner serving 5+ countries with 100+ clients.",
    color: "#3B82F6",
    stat: "300%",
    statLabel: "Revenue Growth (YoY)",
  },
  {
    icon: Globe,
    title: "Multi-Market Operations",
    description:
      "Active operations across Nigeria, UK, China, Turkey, and UAE. Diversified revenue streams across digital services, procurement, training, and logistics.",
    color: "#10B981",
    stat: "5",
    statLabel: "Countries Active",
  },
  {
    icon: Users,
    title: "Expanding Client Base",
    description:
      "100+ satisfied clients including schools, hotels, e-commerce brands, and SMEs across multiple sectors with 99% satisfaction rate.",
    color: "#8B5CF6",
    stat: "100+",
    statLabel: "Clients Served",
  },
  {
    icon: Building2,
    title: "Diversified Revenue Streams",
    description:
      "9 core service lines including web development, OTA management, AI automation, international sourcing, supplier verification, and professional training.",
    color: "#F59E0B",
    stat: "9",
    statLabel: "Revenue Streams",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Fully registered under CAMA 2020 (RC 9580371). SMEDAN certified. Insured imports and secure payment processing across all transactions.",
    color: "#6366F1",
    stat: "RC 9580371",
    statLabel: "CAC Registration",
  },
  {
    icon: BarChart3,
    title: "Scalable Business Model",
    description:
      "Technology-driven operations with AI automation, repeat service contracts, and recurring revenue from website management, OTA, and maintenance clients.",
    color: "#EC4899",
    stat: "70%",
    statLabel: "Recurring Revenue",
  },
];

const whyInvest = [
  {
    icon: Target,
    title: "Untapped Market Opportunity",
    description:
      "Nigeria's digital economy is projected to reach $18.3B by 2026. DMULTICHOICE is positioned as a first-mover in the integrated digital + procurement space.",
  },
  {
    icon: Lightbulb,
    title: "Proven Business Model",
    description:
      "5+ years of operations, profitable growth trajectory, and a diversified service portfolio that reduces single-point-of-failure risk.",
  },
  {
    icon: Rocket,
    title: "Scalable Tech Infrastructure",
    description:
      "AI-powered chatbots, automated workflows, and a growing SaaS component that enables margin expansion without proportional headcount growth.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Established relationships with global logistics providers (DHL, FedEx, Maersk), e-commerce platforms (Alibaba, Booking.com), and supplier networks.",
  },
];

const useOfFunds = [
  {
    label: "Technology & AI Infrastructure",
    percentage: 35,
    amount: "₦52.5M",
    color: "#3B82F6",
  },
  {
    label: "Marketing & Client Acquisition",
    percentage: 25,
    amount: "₦37.5M",
    color: "#10B981",
  },
  {
    label: "Operations & Team Expansion",
    percentage: 20,
    amount: "₦30M",
    color: "#F59E0B",
  },
  {
    label: "Working Capital & Inventory",
    percentage: 20,
    amount: "₦30M",
    color: "#8B5CF6",
  },
];

function PartnersPage() {
  return (
    <div className="pt-24 pb-16 bg-[#030305]">
      <title>Invest in DMULTICHOICE | Investment Opportunity Nigeria</title>
      <meta
        name="description"
        content="Investment opportunity in DMULTICHOICE, a fast-growing Nigerian digital studio and global procurement company. Join us in shaping the future of digital transformation in Africa."
      />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">
                Investment Opportunity
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Invest in Africa's{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              DMULTICHOICE is seeking strategic investors to scale our
              operations, expand into new markets, and build Africa's leading
              integrated digital solutions and global procurement platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20interested%20in%20investment%20opportunities.`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-[#030305] hover:bg-white/90 rounded-full px-8"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discuss Investment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-white/10 text-white/80 hover:bg-white/[0.06]"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Request Pitch Deck
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Invest in DMULTICHOICE?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              We're building the digital backbone for African businesses — and
              we want you to be part of it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div
                  className="rounded-2xl p-6 h-full transition-all duration-500 border"
                  style={{
                    background: "rgba(255,255,255,0.012)",
                    borderColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${item.color}15` }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">
                        {item.stat}
                      </div>
                      <div className="text-[10px] text-white/30">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Investment Thesis
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Four compelling reasons why DMULTICHOICE is the right investment
              at the right time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvest.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-3xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-xl p-8 lg:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Use of Funds
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Target raise: ₦150 Million (~$100,000 USD)
            </p>

            <div className="space-y-6">
              {useOfFunds.map((fund, index) => (
                <motion.div
                  key={fund.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">
                      {fund.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-xs">
                        {fund.amount}
                      </span>
                      <span className="text-white font-bold text-sm">
                        {fund.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${fund.percentage}%` }}
                      transition={{
                        duration: 1.5,
                        delay: 0.8 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full"
                      style={{ background: fund.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <Handshake className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Journey?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              We're looking for strategic investors who share our vision of
              transforming Africa's digital landscape. Let's build the future
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20DMULTICHOICE,%20I'm%20an%20investor%20and%20would%20like%20to%20learn%20more.`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with Founder
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-white/10 text-white/70"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Request Financials
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
