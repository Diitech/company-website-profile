import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Smartphone, 
  Home, 
  Shirt, 
  Sofa, 
  Car, 
  Building2, 
  Factory 
} from 'lucide-react';

const productCategories = [
  {
    title: 'Technology & Gadgets',
    items: ['Smartphones', 'Laptops', 'Electronics', 'Smart devices'],
    icon: Smartphone,
  },
  {
    title: 'Home & Kitchen Appliances',
    items: ['Refrigerators', 'Gas cookers', 'Washing machines', 'Kitchen equipment'],
    icon: Home,
  },
  {
    title: 'Fashion & Wears',
    items: ['Clothing', 'Shoes', 'Accessories'],
    icon: Shirt,
  },
  {
    title: 'Furniture',
    items: ['Office furniture', 'School furniture', 'Home furniture'],
    icon: Sofa,
  },
  {
    title: 'Automobiles',
    items: ['Cars', 'Auto parts', 'Vehicle accessories'],
    icon: Car,
  },
  {
    title: 'Building Materials',
    items: ['Tiles', 'Doors', 'Roofing materials', 'Construction supplies'],
    icon: Building2,
  },
  {
    title: 'Industrial Equipment',
    items: ['Factory machines', 'Processing equipment', 'Production tools'],
    icon: Factory,
  },
];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Products We Import
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Quality Products from Global Markets
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We facilitate the importation of a wide range of products from verified 
            suppliers across China, UK, Turkey, Italy, and more.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.3 } 
              }}
              className="group"
            >
              <div className="bg-glass rounded-2xl p-5 h-full transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-500/20">
                  <category.icon className="w-5 h-5 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3">
                  {category.title}
                </h3>

                {/* Items */}
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="text-white/50 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm mb-4">We source from verified suppliers in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['China', 'United Kingdom', 'Turkey', 'Italy', 'Other Global Markets'].map((country) => (
              <span
                key={country}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
