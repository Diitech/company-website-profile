import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Dmultichoice built our school website and now manages our social media. Our enrollment increased by 40%! Professional service from start to finish.",
    author: "Mrs. Adebayo",
    role: "School Principal",
    image: "/testimonial-1.jpg",
    rating: 5,
  },
  {
    quote: "They helped us import quality furniture from Turkey. The verification process gave us peace of mind. Highly recommended for any import needs.",
    author: "Mr. Okafor",
    role: "Business Owner",
    image: "/testimonial-2.jpg",
    rating: 5,
  },
  {
    quote: "Our AI chatbot has reduced customer support tickets by 60%. Dmultichoice made the integration seamless and provided excellent training.",
    author: "Sarah Johnson",
    role: "E-commerce Founder",
    image: "/testimonial-3.jpg",
    rating: 5,
  },
  {
    quote: "The OTA management service transformed our hotel business. We're now fully booked on weekends and our direct bookings have doubled!",
    author: "Chief Emmanuel",
    role: "Hotel Owner, Lagos",
    image: "/testimonial-6.jpg",
    rating: 5,
  },
  {
    quote: "I completed their digital marketing training and landed a remote job within 2 weeks. The skills I learned were exactly what employers wanted.",
    author: "Chioma Nwosu",
    role: "Digital Marketing Specialist",
    image: "/testimonial-7.jpg",
    rating: 5,
  },
  {
    quote: "We imported factory machines from China through Dmultichoice. They handled everything from supplier verification to customs clearance. Excellent service!",
    author: "Engineer Ibrahim",
    role: "Manufacturing Director",
    image: "/testimonial-4.jpg",
    rating: 5,
  },
  {
    quote: "The import/export training course was comprehensive and practical. I now run my own sourcing business thanks to what I learned at Dmultichoice.",
    author: "Fatima Bello",
    role: "Entrepreneur & Import Consultant",
    image: "/testimonial-5.jpg",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 relative">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            These <span className="text-gradient">Real-Life Stories</span> Showcase
            <br />the Impact We Make Every Day
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The best way to showcase our commitment is through the experiences and 
            stories of those who have partnered with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.3 } 
              }}
              className="group"
            >
              <div className="bg-glass rounded-3xl p-6 h-full transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-blue-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{testimonial.author}</p>
                    <p className="text-white/50 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
