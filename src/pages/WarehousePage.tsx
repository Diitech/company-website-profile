import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Warehouse, MapPin, Package, Truck, Shield, Clock, TrendingUp, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Package, title: 'Secure Storage', desc: '24/7 monitored facility with CCTV surveillance' },
  { icon: Truck, title: 'Fast Dispatch', desc: 'Same-day dispatch for orders before 2 PM' },
  { icon: Shield, title: 'Insurance Coverage', desc: 'Full insurance for all stored goods' },
  { icon: Clock, title: 'Real-time Tracking', desc: 'Track inventory and shipments live' },
];

function WarehousePage() {
  return (
    <div className="pt-24 pb-16">
      <title>Warehouse & Logistics | DMULTICHOICE Nigeria</title>
      <meta name="description" content="DMULTICHOICE state-of-the-art warehouse in Lagos Nigeria. 10,000+ sq ft facility with secure storage, fast dispatch, and real-time tracking." />
      <meta name="keywords" content="warehouse Lagos, Nigeria logistics, secure storage, import warehouse, Lagos port" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <Warehouse className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Our Facilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              State-of-the-Art Warehouse
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our modern warehousing facility in Lagos ensures safe storage and efficient 
              distribution of imported goods across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/warehouse.jpg"
                alt="DMULTICHOICE Warehouse"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lagos, Nigeria</span>
                </div>
                <h4 className="text-white font-bold text-2xl">DMULTICHOICE Logistics Hub</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '10,000+', label: 'Sq Ft Space' },
              { number: '500+', label: 'Pallet Positions' },
              { number: '24/7', label: 'Operations' },
              { number: '99.9%', label: 'Security Uptime' },
            ].map((stat, index) => (
              <div key={index} className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <p className="text-3xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Warehouse Features</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Designed for efficiency, security, and scalability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Warehousing Services</h2>
              <div className="space-y-4">
                {[
                  'Short-term and long-term storage',
                  'Inventory management system',
                  'Order fulfillment and packaging',
                  'Quality control inspections',
                  'Cross-docking services',
                  'Temperature-controlled storage',
                  'Dangerous goods handling',
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/70">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/shipment-truck.jpg" alt="Delivery Truck" className="rounded-2xl h-48 object-cover" />
              <img src="/lagos-port.jpg" alt="Lagos Port" className="rounded-2xl h-48 object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-glass rounded-3xl p-8 border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <img
                  src="/office-interior.jpg"
                  alt="Office Interior"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Our Office Location</h3>
                <div className="space-y-4 text-white/70">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-white">DMULTICHOICE Headquarters</strong><br />
                      18 Awoniyi Elemo Street,<br />
                      Victoria Island, Lagos, Nigeria
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+234 815 848 4621</span>
                  </p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Victoria+Island+Lagos+Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Need Warehousing Services?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Store your imported goods in our secure facility and enjoy fast, reliable distribution across Nigeria.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Get a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WarehousePage;
