import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BlogPost4() {
  const post = {
    title: 'Understanding Shipping Methods: Sea vs Air Freight for Nigerian Importers',
    excerpt: 'Compare the pros and cons of different shipping methods to choose the best option for your business needs and budget.',
    image: '/shipping.jpg',
    author: 'Michael Adeyemi',
    authorRole: 'Logistics Lead, DMULTICHOICE',
    date: 'February 10, 2025',
    category: 'Logistics',
    readTime: '7 min read',
    keywords: ['sea freight', 'air freight', 'shipping Nigeria', 'logistics', 'import shipping', 'Lagos port'],
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={post.image} alt={post.title} className="w-full h-64 sm:h-96 object-cover rounded-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              One of the biggest decisions every Nigerian importer faces is how to ship goods home. The choice between
              sea freight and air freight affects your costs, your timelines, and ultimately your profit margins. This
              guide breaks down both options so you can pick the right one for every shipment.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Two Main Shipping Methods</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              For most importers bringing goods into Nigeria, it comes down to two choices — moving your cargo by sea
              or by air. Each has clear strengths, and the smartest importers use both depending on the order.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-glass rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3">Sea Freight</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Best for: Large, heavy, non-urgent cargo</li>
                  <li>• Transit time: 4–6 weeks</li>
                  <li>• Cost: Most economical per kg</li>
                  <li>• Port: Lagos (Apapa / Tincan)</li>
                </ul>
              </div>
              <div className="bg-glass rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-3">Air Freight</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Best for: Urgent, high-value, light cargo</li>
                  <li>• Transit time: 3–7 days</li>
                  <li>• Cost: Premium per kg</li>
                  <li>• Airport: Lagos (MMIA)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Sea Freight: The Economical Choice</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Sea freight is the backbone of global trade and the most affordable way to move bulk goods. If you are
              importing furniture, machinery, building materials, or large quantities of stock, this is usually your
              best bet.
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">Advantages</h3>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span><strong>Lowest cost</strong> — far cheaper per kilogram than air, especially in bulk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span><strong>High capacity</strong> — ideal for heavy or oversized shipments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span><strong>FCL or LCL</strong> — ship a full container or share one (less-than-container load)</span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-4">Drawbacks</h3>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Slow — 4 to 6 weeks of transit, plus port clearance time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Port congestion at Apapa/Tincan can cause delays</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Air Freight: Speed When It Matters</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              When time is money — fast-moving stock, electronics, samples, or anything seasonal — air freight pays for
              itself. You trade a higher shipping cost for getting your goods on the shelf in days, not weeks.
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">Advantages</h3>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span><strong>Fast</strong> — 3 to 7 days door-to-door in most cases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span><strong>Reliable schedules</strong> — frequent flights and fewer delays</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span><strong>Lower insurance & storage</strong> — goods spend less time in transit</span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-4">Drawbacks</h3>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Expensive — priced by weight and volume, so heavy goods cost a lot</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Restrictions on certain goods (batteries, liquids, hazardous items)</span>
              </li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 my-8">
              <h4 className="text-lg font-bold text-white mb-3">Pro Tip from DMULTICHOICE</h4>
              <p className="text-white/70">
                A simple rule: if your shipping cost by air is more than 20–25% of your goods' value, sea freight is
                usually the smarter choice. For light, high-value, or urgent items, air almost always wins.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Choose the Right Method</h2>
            <ol className="space-y-4 text-white/70 mb-8">
              <li><strong className="text-white">1. Weigh value vs. weight</strong> — light and valuable favours air; heavy and cheap favours sea</li>
              <li><strong className="text-white">2. Check your timeline</strong> — can you wait 6 weeks, or do you need stock now?</li>
              <li><strong className="text-white">3. Calculate the landed cost</strong> — add freight, duties, and clearance, not just the freight quote</li>
              <li><strong className="text-white">4. Consider your cash flow</strong> — sea ties up capital longer in transit</li>
              <li><strong className="text-white">5. Mix and match</strong> — air-freight a small urgent batch while the bulk follows by sea</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help Shipping Your Goods?</h3>
              <p className="text-white/70 mb-6">
                DMULTICHOICE handles sea and air freight, customs clearance, and door-to-door delivery across Nigeria.
                Let us find the most cost-effective route for your shipment.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Get a Shipping Quote
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              There is no single "best" shipping method — only the best one for each shipment. Sea freight saves money
              on bulk; air freight saves time on urgent, valuable goods. Master both, calculate your true landed cost,
              and you will protect your margins on every import.
            </p>
          </motion.div>

          {/* Share Buttons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 pt-8 border-t border-white/10">
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

export default BlogPost4;
