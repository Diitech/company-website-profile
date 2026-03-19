import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, User, ArrowRight, TrendingUp, BookOpen, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: 'How to Source Products from China: A Complete Guide for Nigerian Businesses',
    excerpt: 'Learn the step-by-step process of finding reliable suppliers, negotiating prices, and shipping goods from China to Nigeria safely.',
    image: '/sourcing-1.jpg',
    author: 'Lucky Joy',
    date: 'March 1, 2025',
    category: 'Import Guide',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Top 10 Digital Skills to Learn in 2025 for Career Growth',
    excerpt: 'Discover the most in-demand digital skills that can help you land high-paying jobs and grow your career in the tech industry.',
    image: '/student-training.jpg',
    author: 'David Ibrahim',
    date: 'February 25, 2025',
    category: 'Career',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Hotel OTA Management: Maximizing Your Bookings on Booking.com & Airbnb',
    excerpt: 'Expert tips on optimizing your hotel listings, managing reviews, and increasing direct bookings through effective OTA strategies.',
    image: '/conference-meeting.jpg',
    author: 'Amara Okafor',
    date: 'February 18, 2025',
    category: 'Hospitality',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding Shipping Methods: Sea vs Air Freight for Nigerian Importers',
    excerpt: 'Compare the pros and cons of different shipping methods to choose the best option for your business needs and budget.',
    image: '/shipping.jpg',
    author: 'Michael Adeyemi',
    date: 'February 10, 2025',
    category: 'Logistics',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Success Story: How We Helped a School Increase Enrollment by 40%',
    excerpt: 'Read how our digital transformation services helped a Lagos school boost their online presence and attract more students.',
    image: '/testimonial-1.jpg',
    author: 'Lucky Joy',
    date: 'February 5, 2025',
    category: 'Case Study',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'AI Automation for Small Businesses: Getting Started Guide',
    excerpt: 'Learn how small businesses in Nigeria can leverage AI tools to automate tasks and improve efficiency.',
    image: '/online-class-1.jpg',
    author: 'Amara Okafor',
    date: 'January 28, 2025',
    category: 'Technology',
    readTime: '6 min read',
    featured: false,
  },
];

const rankings = [
  { title: 'Top 100 Fastest Growing Companies', organization: 'Business Day Nigeria', year: '2024' },
  { title: 'Best Digital Solutions Provider', organization: 'Nigeria Tech Awards', year: '2024' },
  { title: 'Excellence in Import/Export Services', organization: 'Lagos Chamber of Commerce', year: '2023' },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="py-24 lg:py-32 relative overflow-hidden">
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
            Insights & Rankings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Blog & Achievements
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay updated with industry insights, success stories, and our latest achievements.
          </p>
        </motion.div>

        {/* Rankings Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Our Rankings & Awards</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {rankings.map((ranking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20"
              >
                <TrendingUp className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="text-white font-bold mb-1">{ranking.title}</h4>
                <p className="text-white/50 text-sm">{ranking.organization}</p>
                <p className="text-yellow-400 text-sm font-medium mt-2">{ranking.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Featured Article</h3>
            </div>
            <div className="bg-glass rounded-3xl overflow-hidden border border-white/10">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500 text-white border-0">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-0">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-white/40 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h4>
                  <p className="text-white/60 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                        <p className="text-white/40 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-medium">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
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
        >
          <h3 className="text-xl font-bold text-white mb-6">Latest Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                  },
                }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-glass rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-glow-sm">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-0 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-bold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white hover:bg-white/10 transition-all">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
