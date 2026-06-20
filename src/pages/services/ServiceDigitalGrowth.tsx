import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Check, Search, MousePointerClick, FlaskConical, Users, Map, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Search, title: 'SEO Audit & Optimization', desc: 'We find what is holding your rankings back and fix it to win more organic traffic.' },
  { icon: MousePointerClick, title: 'Conversion Rate Analysis', desc: 'We turn more of your existing visitors into leads and paying customers.' },
  { icon: FlaskConical, title: 'A/B Testing Framework', desc: 'Data-backed experiments to prove what works before you commit budget.' },
  { icon: Users, title: 'Competitor Research', desc: 'See what your rivals are doing — and how to out-position them.' },
  { icon: Map, title: 'Growth Roadmap', desc: 'A clear, prioritized plan that turns goals into measurable milestones.' },
  { icon: TrendingUp, title: 'Data-Driven Decisions', desc: 'Every move is guided by analytics, not guesswork — so growth compounds.' },
];

const steps = [
  { num: '01', title: 'Audit & Discover', desc: 'We analyze your traffic, funnel, and competitors to find the biggest opportunities.' },
  { num: '02', title: 'Strategize', desc: 'We build a prioritized growth roadmap focused on the highest-impact wins first.' },
  { num: '03', title: 'Test & Optimize', desc: 'We run experiments on SEO, copy, and conversion paths and double down on winners.' },
  { num: '04', title: 'Scale', desc: 'We scale what works and report on the metrics that actually grow your revenue.' },
];

function ServiceDigitalGrowth() {
  return (
    <div className="pt-24 pb-16">
      <title>Digital Growth Strategy | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Data-driven digital growth strategy in Nigeria — SEO optimization, conversion rate improvement, A/B testing, and growth roadmaps. Turn visitors into loyal customers." />
      <meta name="keywords" content="digital growth Nigeria, SEO services Lagos, conversion rate optimization, growth strategy, marketing strategy Nigeria" />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <Badge className="bg-emerald-500/20 text-emerald-400 border-0 mb-4">Strategy</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Growth Strategy
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Data-driven growth planning, SEO optimization, and conversion rate improvement.
              We turn your visitors into loyal customers and your traffic into real revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '90+', label: 'Growth Projects' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '100%', label: 'Data-Driven' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-glass rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-emerald-400 mb-1">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-white mb-4">How We Drive Growth</h2>
            <p className="text-white/60 max-w-xl mx-auto">A disciplined, data-led approach to compounding your results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
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
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-white/60 max-w-xl mx-auto">A repeatable growth engine, not one-off tactics</p>
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
                <div className="text-4xl font-black text-emerald-400/40 mb-3">{step.num}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Faster?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Get a free growth audit and a roadmap of your biggest opportunities — no obligation.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Get My Growth Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDigitalGrowth;
