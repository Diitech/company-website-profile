import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, TrendingDown, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    number: 'One',
    title: 'Access to Global Markets',
    description: 'Source quality products directly from verified suppliers in China, UK, Turkey, Italy, and more.',
    icon: Globe,
  },
  {
    number: 'Two',
    title: 'Lower Product Costs',
    description: 'Save up to 30-40% by buying directly from manufacturers without middlemen.',
    icon: TrendingDown,
  },
  {
    number: 'Three',
    title: 'Risk Reduction & Verification',
    description: 'We verify suppliers, confirm product authenticity, and ensure you receive exactly what you paid for.',
    icon: ShieldCheck,
  },
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-glass rounded-3xl p-8 h-full transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                {/* Number badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {benefit.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-500/20">
                  <benefit.icon className="w-7 h-7 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
