import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Check, Activity, DatabaseBackup, ShieldCheck, Gauge, FileText, Wrench, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Activity, title: '24/7 Uptime Monitoring', desc: 'We watch your site around the clock and act the moment anything goes down.' },
  { icon: DatabaseBackup, title: 'Daily Automated Backups', desc: 'Your data is backed up every day, so you can restore in minutes — not days.' },
  { icon: ShieldCheck, title: 'Security Patch Management', desc: 'Plugins, themes, and core kept patched against the latest threats.' },
  { icon: Gauge, title: 'Performance Optimization', desc: 'Caching, image optimization, and tuning to keep load times lightning fast.' },
  { icon: FileText, title: 'Monthly Reports', desc: 'Clear monthly reports on uptime, speed, security, and updates done.' },
  { icon: Wrench, title: 'Content Update Support', desc: 'Need text, images, or pages changed? Send it over — we handle it for you.' },
];

const packages = [
  {
    name: 'Care',
    description: 'Essential upkeep for small sites',
    features: ['Uptime monitoring', 'Weekly backups', 'Core & plugin updates', 'Monthly report', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Care Plus',
    description: 'For business sites that need to stay sharp',
    features: ['24/7 monitoring', 'Daily backups', 'Security hardening', 'Performance optimization', '2 hrs content updates/mo', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Managed Pro',
    description: 'Full hands-off management for busy teams',
    features: ['Everything in Care Plus', 'Unlimited content updates', 'Staging environment', 'Quarterly strategy review', 'Dedicated manager', 'Same-day support'],
    highlighted: false,
  },
];

function ServiceWebManagement() {
  return (
    <div className="pt-24 pb-16">
      <title>Website Management & Maintenance | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Website management and maintenance in Nigeria — security monitoring, daily backups, updates, and performance optimization. We keep your site fast, secure, and always online." />
      <meta name="keywords" content="website management Nigeria, website maintenance, website security, site backups, performance optimization Lagos" />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <Badge className="bg-cyan-500/20 text-cyan-400 border-0 mb-4">Digital Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Website Management
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Security monitoring, regular updates, backup protection, and performance optimization.
              We keep your site fast, secure, and always online — so you never have to worry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '80+', label: 'Sites Managed' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Monitoring' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-glass rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-1">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">What's Included</h2>
            <p className="text-white/60 max-w-xl mx-auto">Everything your website needs to stay secure, fast, and online</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
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
            <h2 className="text-3xl font-bold text-white mb-4">Care Plans</h2>
            <p className="text-white/60 max-w-xl mx-auto">Pick the level of care your website deserves</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl p-6 border ${pkg.highlighted ? 'bg-gradient-to-b from-cyan-600/20 to-blue-600/20 border-cyan-500/30' : 'bg-glass border-white/10'}`}
              >
                {pkg.highlighted && <Badge className="bg-cyan-500 text-white border-0 mb-4">Most Popular</Badge>}
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Let Us Handle the Tech</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Stop worrying about updates, backups, and security. We'll keep your site running perfectly.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Start Managing My Site
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceWebManagement;
