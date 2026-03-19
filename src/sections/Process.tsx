import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, CheckCircle, Handshake, Ship, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Verify Suppliers',
    description: 'We verify manufacturers and check credentials to ensure legitimacy.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Confirm Quality',
    description: 'Product authenticity and specification checks before purchase.',
    icon: CheckCircle,
  },
  {
    number: '03',
    title: 'Negotiate Prices',
    description: 'Competitive pricing negotiation on your behalf.',
    icon: Handshake,
  },
  {
    number: '04',
    title: 'Handle Shipping',
    description: 'Coordinate international logistics and documentation.',
    icon: Ship,
  },
  {
    number: '05',
    title: 'Deliver to You',
    description: 'Safe delivery to your location in Nigeria.',
    icon: Package,
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our streamlined process ensures safe, transparent, and efficient procurement 
            from international markets to your doorstep.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="relative"
        >
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                  },
                }}
                className="group relative"
              >
                <div className="text-center">
                  {/* Number & Icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-glass flex items-center justify-center transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 border border-white/10">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-glass rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our Value Advantage
              </h3>
              <p className="text-white/60 mb-6">
                We reduce risk, eliminate fraud exposure, and ensure clients receive 
                exactly what they paid for.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Access to global markets',
                'Lower product costs',
                'Supplier verification',
                'Transparent procurement',
                'Professional representation',
                'Local support in Nigeria',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
