import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BlogPost6() {
  const post = {
    title: 'AI Automation for Small Businesses: Getting Started Guide',
    excerpt: 'Learn how small businesses in Nigeria can leverage AI tools to automate tasks and improve efficiency.',
    image: '/online-class-1.jpg',
    author: 'Amara Okafor',
    authorRole: 'AI & Automation Specialist, DMULTICHOICE',
    date: 'January 28, 2025',
    category: 'Technology',
    readTime: '6 min read',
    keywords: ['AI automation', 'small business', 'chatbots', 'productivity', 'Nigeria business tools'],
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
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <Badge className="bg-amber-500/20 text-amber-400 border-0 mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-amber-400" />
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
              Artificial intelligence is no longer just for big tech companies. Today, small businesses in Nigeria can use
              affordable AI tools to handle repetitive work, answer customers around the clock, and free up time to focus
              on growth. This beginner-friendly guide shows you where to start.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">What Is Business Automation?</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Automation simply means letting software handle tasks you would otherwise do by hand. Add AI to the mix and
              that software can now understand language, make simple decisions, and talk to your customers — cutting
              manual work by as much as 70%.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">5 Easy Ways to Start Using AI Today</h2>

            <h3 className="text-xl font-semibold text-white mb-4">1. Add a Chatbot to Your Website & WhatsApp</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              An AI chatbot answers common questions, captures leads, and books appointments 24/7 — even while you sleep.
              For most small businesses, this is the single highest-impact place to start.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">2. Automate Your Customer Follow-Ups</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Set up automated email or WhatsApp sequences that welcome new customers, follow up on enquiries, and remind
              people about offers — no manual sending required.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3. Use AI for Content & Marketing</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              AI writing and design tools help you draft social media captions, product descriptions, and graphics in
              minutes, keeping your brand active without hiring a full team.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">4. Automate Bookkeeping & Invoicing</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Modern tools automatically generate invoices, track payments, and flag overdue accounts — so nothing slips
              through the cracks and you always know where your money is.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">5. Connect Your Tools Together</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              When a new lead fills your form, it can flow straight into your customer list, trigger a welcome message,
              and notify your team — all automatically. This is where the real time savings add up.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 my-8">
              <h4 className="text-lg font-bold text-white mb-3">Pro Tip from DMULTICHOICE</h4>
              <p className="text-white/70">
                Don't try to automate everything at once. Pick the one task that wastes the most of your time each week —
                usually answering the same customer questions — and automate that first. Build from there.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Common Myths About AI</h2>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span><strong>"It's too expensive."</strong> Many powerful tools are free or cost less than one staff salary.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span><strong>"It will replace my staff."</strong> It removes boring tasks so your team can do higher-value work.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span><strong>"It's too technical."</strong> Most modern tools are point-and-click, and we can set them up for you.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Benefits Add Up Fast</h2>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Up to 70% less time spent on repetitive tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Faster responses mean more customers and fewer lost leads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Consistent service, even outside business hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>More time to focus on growing your business</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Business?</h3>
              <p className="text-white/70 mb-6">
                DMULTICHOICE builds custom chatbots and automation for small businesses across Nigeria. Book a free
                consultation and we'll show you exactly where AI can save you time and money.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Book a Free Consult
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              You don't need a big budget or a tech background to benefit from AI. Start small, automate your most
              repetitive task, and build from there. The businesses that adopt these tools now will have a real edge over
              those that wait.
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

export default BlogPost6;
