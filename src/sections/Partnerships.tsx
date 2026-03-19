import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake } from 'lucide-react';

const partners = [
  { name: 'DHL Express', logo: '/partner-dhl.png', description: 'Global courier and logistics partner' },
  { name: 'FedEx', logo: '/partner-fedex.png', description: 'International shipping solutions' },
  { name: 'Booking.com', logo: '/partner-booking.png', description: 'Hotel OTA platform partner' },
  { name: 'Alibaba.com', logo: '/partner-alibaba.png', description: 'B2B sourcing platform partner' },
  { name: 'Maersk', logo: '/partner-maersk.png', description: 'Global container shipping' },
  { name: 'GIG Logistics', logo: '/partner-gig.png', description: 'Nigerian logistics partner' },
];

export function Partnerships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We partner with global leaders in logistics, hospitality, and e-commerce 
            to deliver exceptional service to our clients.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="bg-glass rounded-2xl p-6 h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h4 className="text-white font-semibold text-sm text-center">{partner.name}</h4>
                <p className="text-white/50 text-xs text-center mt-1">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-glass rounded-full px-6 py-3 border border-white/10">
            <Handshake className="w-5 h-5 text-blue-400" />
            <span className="text-white/80 text-sm">Interested in partnering with us?</span>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Contact Us →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
