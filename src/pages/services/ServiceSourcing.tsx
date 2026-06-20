import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Check, ShieldCheck, Handshake, Search, Plane, FileCheck, Truck, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: ShieldCheck, title: 'Verified Supplier Network', desc: 'We only work with vetted, audited factories — no scams, no fake suppliers.' },
  { icon: Handshake, title: 'Price Negotiation', desc: 'We negotiate factory-direct prices on your behalf to protect your margins.' },
  { icon: Search, title: 'Quality Inspection', desc: 'Pre-shipment checks and sample testing so you get exactly what you paid for.' },
  { icon: FileCheck, title: 'Customs Clearance', desc: 'Full documentation and clearance handling so your goods sail through customs.' },
  { icon: Truck, title: 'Door-to-Door Delivery', desc: 'From the factory floor to your warehouse — we manage the entire journey.' },
  { icon: Plane, title: 'Air & Sea Freight', desc: 'Flexible shipping options to balance speed and cost for every order.' },
];

const countries = ['🇨🇳 China', '🇬🇧 UK', '🇹🇷 Turkey', '🇮🇹 Italy', '🇺🇸 USA', '🇦🇪 UAE'];

const steps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Share your product, target price, and quantity. We map out sourcing options.' },
  { num: '02', title: 'We Source & Verify', desc: 'We find vetted suppliers, negotiate prices, and inspect quality before you pay.' },
  { num: '03', title: 'Pay Securely', desc: 'We handle supplier payments (Alipay, WeChat, bank transfer) with full receipts.' },
  { num: '04', title: 'We Ship & Deliver', desc: 'Air or sea freight, customs clearance, and delivery straight to your door.' },
];

const gallery = [
  { name: 'Factory Sourcing', type: 'Manufacturing', image: '/factory-machine.jpg' },
  { name: 'Quality Inspection', type: 'Verification', image: '/goods-unboxing.jpg' },
  { name: 'Freight & Shipping', type: 'Logistics', image: '/shipment-truck.jpg' },
];

function ServiceSourcing() {
  return (
    <div className="pt-24 pb-16">
      <title>International Sourcing & Importing | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Source and import quality products directly from verified suppliers in China, UK, Turkey, Italy, USA & UAE. Price negotiation, quality inspection, customs clearance, and door-to-door delivery." />
      <meta name="keywords" content="international sourcing Nigeria, import from China, product sourcing agent, importing to Nigeria, freight forwarding Lagos" />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <Badge className="bg-teal-500/20 text-teal-400 border-0 mb-4">Procurement</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              International Sourcing
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Source and import quality products directly from verified foreign suppliers. We handle
              negotiation, inspection, payment, shipping, and customs — so you import with confidence.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {countries.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-sm">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Help You Import</h2>
            <p className="text-white/60 max-w-xl mx-auto">A complete sourcing service that removes the risk from buying abroad</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-white/60 max-w-xl mx-auto">Four simple steps from idea to delivery</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl font-black text-teal-400/40 mb-3">{step.num}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">From Factory to Your Door</h2>
            <p className="text-white/60 max-w-xl mx-auto">Real sourcing, inspection, and logistics we handle every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10">
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-teal-500/20 text-teal-400 border-0 mb-2">{project.type}</Badge>
                    <h4 className="text-white font-bold">{project.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-teal-600/20 to-emerald-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <Package className="w-12 h-12 text-teal-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Import With Confidence?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Tell us what you want to source and we'll send you a free quote with verified suppliers.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSourcing;
