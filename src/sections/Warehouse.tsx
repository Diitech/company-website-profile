import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Warehouse, MapPin, Package, Truck, Shield, Clock } from 'lucide-react';

const warehouseFeatures = [
  {
    icon: Package,
    title: 'Secure Storage',
    description: '24/7 monitored facility with CCTV surveillance and access control.',
  },
  {
    icon: Truck,
    title: 'Fast Dispatch',
    description: 'Same-day dispatch for orders received before 2 PM.',
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: 'Full insurance coverage for all stored goods.',
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Track your inventory and shipments in real-time.',
  },
];

export function WarehouseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="warehouse" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            State-of-the-Art Warehouse
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our modern warehousing facility in Lagos ensures safe storage and efficient 
            distribution of imported goods across Nigeria.
          </p>
        </motion.div>

        {/* Main Content */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Warehouse Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/warehouse.jpg"
                alt="DMULTICHOICE Warehouse"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lagos, Nigeria</span>
                </div>
                <h4 className="text-white font-bold text-xl">DMULTICHOICE Logistics Hub</h4>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {warehouseFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-glass rounded-2xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-white/10"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-white">10,000+</p>
                  <p className="text-white/50 text-sm">Sq Ft Space</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-white/50 text-sm">Pallet Positions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-white/50 text-sm">Operations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Office Location Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Office Location</h3>
          <div className="bg-glass rounded-3xl p-6 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/office-interior.jpg"
                  alt="Office Interior"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Warehouse className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">DMULTICHOICE Headquarters</h4>
                    <p className="text-white/50 text-sm">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="space-y-3 text-white/70">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                    <span>18 Awoniyi Elemo Street,<br />Victoria Island, Lagos, Nigeria</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </p>
                </div>
                {/* Map Placeholder */}
                <div className="mt-6 bg-white/5 rounded-xl h-32 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-white/50 text-sm">Interactive Map</p>
                    <a 
                      href="https://maps.google.com/?q=Lagos+Nigeria" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm hover:underline"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
