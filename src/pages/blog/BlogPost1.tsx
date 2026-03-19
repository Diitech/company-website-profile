import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BlogPost1() {
  const post = {
    title: 'How to Source Products from China: A Complete Guide for Nigerian Businesses',
    excerpt: 'Learn the step-by-step process of finding reliable suppliers, negotiating prices, and shipping goods from China to Nigeria safely.',
    image: '/sourcing-1.jpg',
    author: 'Lucky Joy',
    authorRole: 'Founder & CEO, DMULTICHOICE',
    date: 'March 1, 2025',
    category: 'Import Guide',
    readTime: '8 min read',
    keywords: ['China sourcing', 'Nigeria import', 'Alibaba suppliers', 'international trade', '1688 sourcing', 'Guangzhou market']
  };

  return (
    <article className="pt-24 pb-16">
      {/* SEO Meta */}
      <title>{post.title} | DMULTICHOICE Blog</title>
      <meta name="description" content={post.excerpt} />
      <meta name="keywords" content={post.keywords.join(', ')} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.image} />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <Badge className="bg-blue-500/20 text-blue-400 border-0 mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-sm">{post.authorRole}</p>
                </div>
              </div>
              <span className="hidden sm:block">|</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <span className="hidden sm:block">|</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-96 object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Sourcing products from China has become increasingly popular among Nigerian entrepreneurs and businesses. 
              With the right knowledge and partners, you can import quality goods at competitive prices while minimizing risks. 
              This comprehensive guide will walk you through everything you need to know.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why Source from China?</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              China remains the world's manufacturing hub, offering Nigerian businesses several advantages:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong>Lower production costs</strong> - Manufacturing in China is significantly cheaper than in most countries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong>Wide product variety</strong> - Access to virtually any product category imaginable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong>Scalability</strong> - Chinese factories can handle both small and large orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span><strong>Customization options</strong> - OEM and ODM services readily available</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 1: Finding Reliable Suppliers</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The first and most crucial step is finding trustworthy suppliers. Here are the best platforms to use:
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">1. Alibaba.com</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Alibaba is the world's largest B2B marketplace. Look for suppliers with:
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li>• Gold Supplier status (verified by Alibaba)</li>
              <li>• Trade Assurance protection</li>
              <li>• At least 3 years in business</li>
              <li>• Positive reviews and ratings</li>
              <li>• Response rate above 80%</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">2. 1688.com</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              1688 is Alibaba's domestic platform, offering even lower prices. However, it's in Chinese and requires 
              a local agent or translator to navigate effectively.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3. Trade Shows</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Attending trade shows like the Canton Fair gives you direct access to manufacturers. 
              You can inspect products firsthand and build personal relationships with suppliers.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 my-8">
              <h4 className="text-lg font-bold text-white mb-3">Pro Tip from DMULTICHOICE</h4>
              <p className="text-white/70">
                Always verify suppliers through multiple channels. Check their business license, 
                request samples, and if possible, visit their factory or hire a local inspection agent 
                to verify their operations.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 2: Negotiating Prices</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Effective negotiation can save you 10-30% on your orders. Here's how to negotiate like a pro:
            </p>
            <ol className="space-y-4 text-white/70 mb-8">
              <li>
                <strong className="text-white">1. Get multiple quotes</strong> - Contact at least 5-10 suppliers for the same product
              </li>
              <li>
                <strong className="text-white">2. Order in bulk</strong> - Larger quantities mean better per-unit pricing
              </li>
              <li>
                <strong className="text-white">3. Build relationships</strong> - Long-term partnerships lead to better deals
              </li>
              <li>
                <strong className="text-white">4. Be specific</strong> - Clear specifications prevent misunderstandings and extra costs
              </li>
              <li>
                <strong className="text-white">5. Ask about payment terms</strong> - 30/70 or 50/50 payment splits are common
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 3: Quality Control</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Never skip quality control. Here's your quality assurance checklist:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Request product samples before placing bulk orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Hire a third-party inspection company (like SGS or Bureau Veritas)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Conduct pre-shipment inspections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Document everything with photos and videos</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 4: Shipping to Nigeria</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Choosing the right shipping method depends on your product type, budget, and timeline:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-glass rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3">Sea Freight</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Best for: Large, heavy shipments</li>
                  <li>• Transit time: 4-6 weeks</li>
                  <li>• Cost: $$$ (most economical)</li>
                  <li>• Port: Lagos (Apapa/Tincan)</li>
                </ul>
              </div>
              <div className="bg-glass rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3">Air Freight</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Best for: Urgent, high-value items</li>
                  <li>• Transit time: 3-7 days</li>
                  <li>• Cost: $$$$$ (most expensive)</li>
                  <li>• Airport: Lagos (MMIA)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Step 5: Customs Clearance in Nigeria</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Proper documentation is essential for smooth customs clearance:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li>• <strong>Form M</strong> - Required for all imports (obtained from your bank)</li>
              <li>• <strong>PAAR</strong> - Pre-Arrival Assessment Report from Nigeria Customs</li>
              <li>• <strong>Bill of Lading/Airway Bill</strong> - From your shipping company</li>
              <li>• <strong>Commercial Invoice</strong> - From your supplier</li>
              <li>• <strong>Packing List</strong> - Detailed list of goods</li>
              <li>• <strong>SONCAP Certificate</strong> - For regulated products</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Common Mistakes to Avoid</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-8">
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Not verifying suppliers properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Skipping quality inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Underestimating shipping and customs costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Not understanding import regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Paying 100% upfront without protection</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">How DMULTICHOICE Can Help</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              At DMULTICHOICE, we specialize in helping Nigerian businesses source products from China safely and efficiently. 
              Our services include:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Supplier verification and factory audits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Price negotiation on your behalf</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Quality control and product inspections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Shipping and customs clearance assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Warehousing and distribution in Nigeria</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Importing?</h3>
              <p className="text-white/70 mb-6">
                Let our experienced team handle your China sourcing needs. We've helped hundreds of Nigerian businesses 
                import quality products at competitive prices.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Get Started Today
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Sourcing products from China can be highly profitable for Nigerian businesses when done correctly. 
              By following this guide and working with experienced partners like DMULTICHOICE, you can minimize risks 
              and maximize your import success. Remember: thorough research, proper verification, and quality control 
              are the keys to successful international trade.
            </p>
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-white/60 text-sm">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}

export default BlogPost1;
