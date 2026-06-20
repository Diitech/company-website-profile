import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Check, ClipboardCheck, FileBadge, FlaskConical, PhoneCall, Lock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: ClipboardCheck, title: 'Factory Audit Reports', desc: 'On-the-ground checks of the factory, capacity, and conditions before you commit.' },
  { icon: FileBadge, title: 'Business License Verification', desc: 'We confirm the supplier is a real, registered, legitimate company.' },
  { icon: FlaskConical, title: 'Product Sample Testing', desc: 'We test samples for quality and authenticity so there are no surprises.' },
  { icon: PhoneCall, title: 'Reference Checks', desc: 'We speak to past buyers to confirm the supplier delivers as promised.' },
  { icon: Lock, title: 'Insurance-Backed Guarantee', desc: 'Your order is protected — verified suppliers come with a safety net.' },
  { icon: ShieldCheck, title: 'Anti-Scam Protection', desc: 'Avoid fake suppliers and wasted money. Never get scammed again.' },
];

const packages = [
  {
    name: 'Basic Check',
    description: 'Quick verification before a small order',
    features: ['Business license check', 'Registration verification', 'Online reputation scan', 'Verdict report'],
    highlighted: false,
  },
  {
    name: 'Full Verification',
    description: 'Recommended before any serious order',
    features: ['Everything in Basic', 'Factory audit report', 'Product sample testing', 'Reference checks', 'Risk assessment'],
    highlighted: true,
  },
  {
    name: 'Ongoing Assurance',
    description: 'For repeat importers and bulk buyers',
    features: ['Everything in Full', 'Per-shipment inspections', 'Quality monitoring', 'Insurance-backed guarantee', 'Priority turnaround'],
    highlighted: false,
  },
];

function ServiceSupplierVerification() {
  return (
    <div className="pt-24 pb-16">
      <title>Supplier Verification Services | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Comprehensive supplier verification — factory audits, business license checks, product sample testing, and reference checks. Verify manufacturers and never get scammed again." />
      <meta name="keywords" content="supplier verification Nigeria, factory audit China, manufacturer verification, import scam protection, product authenticity check" />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <Badge className="bg-indigo-500/20 text-indigo-400 border-0 mb-4">Procurement</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Supplier Verification
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Comprehensive verification of manufacturers and product authenticity checks.
              Know exactly who you are buying from before you send a single naira — never get scammed again.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '300+', label: 'Suppliers Verified' },
              { value: '99.8%', label: 'Accuracy Rate' },
              { value: '0', label: 'Scams On Our Watch' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-glass rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-indigo-400 mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How We Verify</h2>
            <p className="text-white/60 max-w-xl mx-auto">A thorough background check that protects your money and your reputation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Verification Packages</h2>
            <p className="text-white/60 max-w-xl mx-auto">Choose the level of due diligence your order needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl p-6 border ${pkg.highlighted ? 'bg-gradient-to-b from-indigo-600/20 to-blue-600/20 border-indigo-500/30' : 'bg-glass border-white/10'}`}
              >
                {pkg.highlighted && <Badge className="bg-indigo-500 text-white border-0 mb-4">Most Popular</Badge>}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/60 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button className={`w-full rounded-full ${pkg.highlighted ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <ShieldCheck className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Verify Before You Buy</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Send us your supplier's details and we'll tell you if they're safe to do business with.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Verify a Supplier
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSupplierVerification;
