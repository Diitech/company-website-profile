import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BlogPost5() {
  const post = {
    title: 'Success Story: How We Helped a School Increase Enrollment by 40%',
    excerpt: 'Read how our digital transformation services helped a Lagos school boost their online presence and attract more students.',
    image: '/testimonial-1.jpg',
    author: 'Lucky Joy',
    authorRole: 'Founder & CEO, DMULTICHOICE',
    date: 'February 5, 2025',
    category: 'Case Study',
    readTime: '4 min read',
    keywords: ['school marketing', 'enrollment growth', 'digital transformation', 'Lagos school', 'website case study'],
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
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <Badge className="bg-emerald-500/20 text-emerald-400 border-0 mb-4">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-400" />
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
              When a respected secondary school in Lagos came to us, they had a strong reputation offline — but almost no
              presence online. Parents researching schools simply could not find them. Over one academic cycle, our
              digital transformation work helped them grow new enrollment by 40%. Here is exactly how we did it.
            </p>

            {/* Results snapshot */}
            <div className="grid grid-cols-3 gap-4 my-8">
              {[
                { value: '+40%', label: 'New Enrollment' },
                { value: '5×', label: 'Website Traffic' },
                { value: '#1', label: 'Local Search Rank' },
              ].map((s) => (
                <div key={s.label} className="text-center bg-glass rounded-2xl p-5 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">{s.value}</div>
                  <div className="text-white/50 text-xs sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Challenge</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The school had everything going for it — great teachers, strong results, and happy parents. But its digital
              footprint told a different story:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>An outdated website that did not work on mobile phones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>No way for parents to enquire or apply online</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>Invisible on Google when parents searched for nearby schools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <span>Inactive, inconsistent social media pages</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">What We Did</h2>

            <h3 className="text-xl font-semibold text-white mb-4">1. A Modern, Mobile-First Website</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              We built a fast, mobile-friendly website with clear sections for academics, admissions, facilities, and
              results — plus a simple online enquiry and application form so parents could reach out in seconds.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">2. Local SEO</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              We optimized the site for the searches parents actually make, set up and verified their Google Business
              Profile, and built local citations. Within months, the school ranked on page one for "schools near me" in
              their area.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3. Social Media That Builds Trust</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              We created a consistent content calendar showcasing student achievements, events, and testimonials —
              turning their pages into proof that the school delivers.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">4. Paid Ads During Admissions Season</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              We ran targeted Facebook and Instagram campaigns aimed at parents in the catchment area during the peak
              admissions window, driving qualified enquiries straight to the application form.
            </p>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 my-8">
              <h4 className="text-lg font-bold text-white mb-3">In Their Words</h4>
              <p className="text-white/70 italic">
                "For the first time, parents told us they found us on Google. The new website and our active social pages
                made us look as professional online as we are in the classroom."
              </p>
              <p className="text-white/50 text-sm mt-3">— School Administrator, Lagos</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Results</h2>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>40% increase</strong> in new student enrollment within one academic cycle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>5× more website traffic</strong> from organic search alone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Page-one ranking</strong> for high-intent local searches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>A steady stream of online enquiries the school can now track and follow up</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Takeaway</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              A great institution deserves a great digital presence. The right website, local SEO, and consistent social
              proof do not just look good — they bring real students through the door. The same playbook works for
              schools, hotels, clinics, and businesses of every kind.
            </p>

            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Want Results Like These?</h3>
              <p className="text-white/70 mb-6">
                Let DMULTICHOICE transform your online presence and bring you more customers, students, or guests.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Start Your Transformation
                </Button>
              </Link>
            </div>
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

export default BlogPost5;
