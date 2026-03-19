import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Check, Code, Palette, Shield, Zap, Globe, ArrowRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Code, title: 'Custom Development', desc: 'Tailored solutions built from scratch' },
  { icon: Palette, title: 'Modern Design', desc: 'Beautiful, responsive interfaces' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security' },
  { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed' },
  { icon: Globe, title: 'SEO Ready', desc: 'Built for search engines' },
  { icon: Monitor, title: 'Responsive', desc: 'Works on all devices' },
];

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    features: ['5 Pages', 'Mobile Responsive', 'Basic SEO', 'Contact Form', '1 Month Support'],
    highlighted: false
  },
  {
    name: 'Business',
    description: 'Ideal for growing businesses',
    features: ['10 Pages', 'Mobile Responsive', 'Advanced SEO', 'Contact Form', 'Blog Setup', '3 Months Support', 'Social Media Integration'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    features: ['Unlimited Pages', 'Custom Features', 'E-commerce', 'Admin Dashboard', 'API Integration', '6 Months Support', 'Priority Support'],
    highlighted: false
  }
];

function ServiceWebDev() {
  return (
    <div className="pt-24 pb-16">
      <title>Website Development Services | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Professional website development services in Nigeria. Custom websites, e-commerce, web applications, and more. Get a modern, secure, and fast website." />
      <meta name="keywords" content="website development Nigeria, web design Lagos, custom website, e-commerce development, web application" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <Badge className="bg-blue-500/20 text-blue-400 border-0 mb-4">Digital Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Website Development
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Transform your online presence with a modern, secure, and high-performing website 
              tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Comprehensive web development services to help your business succeed online
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Packages</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Choose the package that best fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl p-6 border ${pkg.highlighted ? 'bg-gradient-to-b from-blue-600/20 to-cyan-600/20 border-blue-500/30' : 'bg-glass border-white/10'}`}
              >
                {pkg.highlighted && (
                  <Badge className="bg-blue-500 text-white border-0 mb-4">Most Popular</Badge>
                )}
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

      {/* Portfolio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Work</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Websites we've built for clients across Nigeria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hotel Website', type: 'Hospitality', image: '/conference-meeting.jpg' },
              { name: 'E-commerce Store', type: 'Retail', image: '/goods-unboxing.jpg' },
              { name: 'School Portal', type: 'Education', image: '/student-training.jpg' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-0 mb-2">{project.type}</Badge>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready for Your New Website?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceWebDev;
