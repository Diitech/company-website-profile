import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Check, CalendarDays, Palette, Send, Users, BarChart3, Heart, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: CalendarDays, title: 'Custom Content Calendar', desc: 'A planned schedule of posts tailored to your brand, audience, and goals.' },
  { icon: Palette, title: 'Professional Graphic Design', desc: 'Scroll-stopping visuals and branded templates that make you look premium.' },
  { icon: Send, title: 'Post Scheduling & Automation', desc: 'Consistent posting at the best times — fully scheduled and automated.' },
  { icon: Users, title: 'Community Management', desc: 'We reply to comments and DMs to keep your audience engaged and loyal.' },
  { icon: BarChart3, title: 'Monthly Analytics', desc: 'Clear reports on reach, growth, and engagement so you see what works.' },
  { icon: Heart, title: 'Audience Growth', desc: 'Strategies that turn followers into a community that trusts your brand.' },
];

const platforms = ['Instagram', 'Facebook', 'TikTok', 'X (Twitter)', 'LinkedIn', 'WhatsApp'];

const packages = [
  {
    name: 'Spark',
    description: 'For brands building a presence',
    features: ['2 platforms', '12 posts / month', 'Basic graphics', 'Caption writing', 'Monthly report'],
    highlighted: false,
  },
  {
    name: 'Grow',
    description: 'For brands ready to scale engagement',
    features: ['3 platforms', '20 posts / month', 'Premium graphics', 'Stories & reels', 'Community management', 'Monthly analytics'],
    highlighted: true,
  },
  {
    name: 'Dominate',
    description: 'For brands going all-in on social',
    features: ['All major platforms', 'Daily posting', 'Video editing', 'Influencer outreach', 'Paid ads management', 'Dedicated strategist'],
    highlighted: false,
  },
];

function ServiceSocialMedia() {
  return (
    <div className="pt-24 pb-16">
      <title>Social Media Management | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Social media management in Nigeria — content planning, graphic design, post scheduling, and audience engagement. Build a brand people remember and trust." />
      <meta name="keywords" content="social media management Nigeria, content creation Lagos, instagram management, social media marketing, brand growth" />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <Badge className="bg-pink-500/20 text-pink-400 border-0 mb-4">Digital Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Social Media Management
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Content planning, graphic design, post scheduling, and audience engagement.
              We build a brand that people remember and trust — while you run your business.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {platforms.map((p) => (
                <span key={p} className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/70 text-sm">
                  {p}
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
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-white/60 max-w-xl mx-auto">Full-service social media management built to grow your brand</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '200+', label: 'Brands Managed' },
              { value: '96%', label: 'Client Satisfaction' },
              { value: '6', label: 'Platforms Covered' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-glass rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-pink-400 mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Packages</h2>
            <p className="text-white/60 max-w-xl mx-auto">Choose the plan that matches your social goals</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl p-6 border ${pkg.highlighted ? 'bg-gradient-to-b from-pink-600/20 to-rose-600/20 border-pink-500/30' : 'bg-glass border-white/10'}`}
              >
                {pkg.highlighted && <Badge className="bg-pink-500 text-white border-0 mb-4">Most Popular</Badge>}
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <Share2 className="w-12 h-12 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Brand?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Let's build a social presence your audience can't stop following. Get a free brand audit today.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Get a Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSocialMedia;
