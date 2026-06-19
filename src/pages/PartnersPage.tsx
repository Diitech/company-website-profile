import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, Globe, Ship, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partners = [
  { 
    name: 'DHL Express', 
    logo: '/partner-dhl.png', 
    description: 'Global courier and logistics partner for express deliveries worldwide',
    services: ['Express Shipping', 'International Delivery', 'Tracking Services']
  },
  { 
    name: 'FedEx', 
    logo: '/partner-fedex.png', 
    description: 'International shipping solutions for time-sensitive cargo',
    services: ['Air Freight', 'Ground Shipping', 'Customs Clearance']
  },
  { 
    name: 'Booking.com', 
    logo: '/partner-booking.png', 
    description: 'Hotel OTA platform partner for hospitality industry clients',
    services: ['Hotel Listings', 'Reservation Management', 'Revenue Optimization']
  },
  { 
    name: 'Alibaba.com', 
    logo: '/partner-alibaba.png', 
    description: 'B2B sourcing platform partner for China procurement',
    services: ['Supplier Network', 'Trade Assurance', 'Bulk Purchasing']
  },
  { 
    name: 'Maersk', 
    logo: '/partner-maersk.png', 
    description: 'Global container shipping for sea freight logistics',
    services: ['Sea Freight', 'Container Shipping', 'Port Services']
  },
  { 
    name: 'GIG Logistics', 
    logo: '/partner-gig.png', 
    description: 'Nigerian logistics partner for domestic deliveries',
    services: ['Last Mile Delivery', 'Warehousing', 'Express Delivery']
  },
];

const benefits = [
  'Access to global shipping networks',
  'Competitive shipping rates',
  'Priority handling for our clients',
  'Dedicated account management',
  'Streamlined customs clearance',
  'Real-time tracking integration',
];

function PartnersPage() {
  return (
    <div className="pt-24 pb-16">
      <title>Our Partners | DMULTICHOICE Nigeria</title>
      <meta name="description" content="DMULTICHOICE partners with industry leaders including DHL, FedEx, Booking.com, Alibaba, Maersk, and GIG Logistics for comprehensive digital and logistics solutions." />
      <meta name="keywords" content="DMULTICHOICE partners, DHL Nigeria, FedEx Nigeria, Alibaba partner, logistics partners" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Handshake className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Strategic Partnerships</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We partner with global leaders in logistics, hospitality, and e-commerce 
              to deliver exceptional service to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-glass rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center justify-center h-24 mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{partner.name}</h3>
                <p className="text-white/60 text-center text-sm mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Benefits of Our Partnerships</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-white/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <Globe className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">200+</p>
                <p className="text-white/50 text-sm">Countries Covered</p>
              </div>
              <div className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <Ship className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">50K+</p>
                <p className="text-white/50 text-sm">Shipments Annually</p>
              </div>
              <div className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <Building2 className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">6</p>
                <p className="text-white/50 text-sm">Strategic Partners</p>
              </div>
              <div className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <TrendingUp className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">99%</p>
                <p className="text-white/50 text-sm">On-Time Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <Handshake className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Partnering With Us?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              We're always looking for strategic partnerships that can help us deliver better value to our clients.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Become a Partner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
