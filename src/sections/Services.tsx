import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Monitor, 
  Share2, 
  Bot, 
  Package, 
  CheckCircle,
  Hotel,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Website Development',
    description: 'Modern, secure, and professional websites for schools, businesses, hotels, and e-commerce brands.',
    tags: ['Digital Solutions'],
    icon: Monitor,
  },
  {
    title: 'Website Management',
    description: 'Security monitoring, regular updates, backup protection, and performance optimization.',
    tags: ['Digital Solutions'],
    icon: Globe,
  },
  {
    title: 'OTA Management',
    description: 'Professional management of Booking.com, Airbnb, Expedia, Agoda, and Hotels.com listings.',
    tags: ['Hospitality'],
    icon: Hotel,
  },
  {
    title: 'Social Media Management',
    description: 'Content planning, graphic design, post scheduling, and audience engagement.',
    tags: ['Digital Solutions'],
    icon: Share2,
  },
  {
    title: 'AI & Automation',
    description: 'AI chatbots, automated customer support, and business workflow automation.',
    tags: ['AI Solutions'],
    icon: Bot,
  },
  {
    title: 'Digital Growth Strategy',
    description: 'Data-driven growth planning, SEO optimization, and conversion rate improvement.',
    tags: ['Strategy'],
    icon: TrendingUp,
  },
  {
    title: 'International Sourcing',
    description: 'Source and import quality products directly from verified foreign suppliers.',
    tags: ['Procurement'],
    icon: Package,
  },
  {
    title: 'Supplier Verification',
    description: 'Comprehensive verification of manufacturers and product authenticity checks.',
    tags: ['Procurement'],
    icon: CheckCircle,
  },
  {
    title: 'Online Training & Classes',
    description: 'Digital skills training, import/export mastery, and professional development courses.',
    tags: ['Education'],
    icon: GraduationCap,
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Digital & Procurement Solutions
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From website development to international sourcing and professional training, 
            we provide end-to-end solutions to help your business thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 } 
              }}
              className="group"
            >
              <div className="bg-glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 border-0 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue-500/20">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
