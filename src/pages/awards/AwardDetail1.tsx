import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Calendar, Building2, MapPin, Star, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function AwardDetail1() {
  return (
    <div className="pt-24 pb-16">
      <title>Top 100 Fastest Growing Companies 2024 | DMULTICHOICE Award</title>
      <meta name="description" content="DMULTICHOICE recognized among Nigeria's Top 100 Fastest Growing Companies by Business Day Nigeria in 2024." />
      <meta name="keywords" content="DMULTICHOICE award, fastest growing company Nigeria, Business Day Nigeria, company recognition" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/awards" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Awards
            </Link>
            
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">2024</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Top 100 Fastest Growing Companies
            </h1>
            
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Business Day Nigeria</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Award Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl p-12 text-center border border-yellow-500/30"
          >
            <TrendingUp className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
            <Badge className="bg-yellow-500 text-black border-0 mb-4">Ranked #47</Badge>
            <h2 className="text-2xl font-bold text-white mb-2">Fastest Growing Companies</h2>
            <p className="text-white/60">Business Day Nigeria Annual Ranking</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mt-8 mb-6">About This Recognition</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The Business Day Nigeria Top 100 Fastest Growing Companies award recognizes Nigerian businesses 
              that have demonstrated exceptional growth in revenue, innovation, and market impact over the past year. 
              DMULTICHOICE was ranked #47 in the 2024 edition, marking our position among Nigeria's most dynamic enterprises.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Selection Criteria</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Companies were evaluated based on the following criteria:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span><strong>Revenue Growth:</strong> Year-over-year revenue increase of over 150%</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span><strong>Innovation:</strong> Implementation of new technologies and business models</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span><strong>Market Impact:</strong> Significant contribution to industry development</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span><strong>Employment:</strong> Job creation and talent development</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span><strong>Customer Satisfaction:</strong> High client retention and satisfaction rates</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Growth Story</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Since our founding in 2020, DMULTICHOICE has experienced remarkable growth:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">300%</p>
                <p className="text-white/50">Revenue Growth (2023-2024)</p>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-white/50">Clients Served</p>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">50+</p>
                <p className="text-white/50">Team Members</p>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">5</p>
                <p className="text-white/50">Countries Served</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">What This Means for Our Clients</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              This recognition validates our commitment to delivering exceptional value to our clients. 
              Our rapid growth is a direct result of our focus on:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li>• Providing reliable international sourcing services</li>
              <li>• Delivering cutting-edge digital solutions</li>
              <li>• Maintaining the highest standards of quality and integrity</li>
              <li>• Building long-term partnerships with our clients</li>
              <li>• Continuously innovating our service offerings</li>
            </ul>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-8 my-12">
              <Quote className="w-8 h-8 text-yellow-400 mb-4" />
              <p className="text-white/80 text-lg italic mb-4">
                "Being recognized among Nigeria's fastest-growing companies is a testament to the trust 
                our clients place in us and the dedication of our team. We remain committed to helping 
                Nigerian businesses succeed in the global marketplace."
              </p>
              <p className="text-white font-medium">— Lucky Joy, Founder & CEO</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Awards Ceremony</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The award was presented at the Business Day Nigeria Annual Business Summit held at the 
              Eko Hotel & Suites in Lagos. The event brought together industry leaders, policymakers, 
              and entrepreneurs to celebrate business excellence in Nigeria.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Looking Ahead</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              As we continue to grow, our mission remains unchanged: to empower Nigerian businesses with 
              world-class digital solutions and international trade services. This award motivates us to 
              push boundaries and set new standards in our industry.
            </p>

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Partner With a Growing Company</h3>
              <p className="text-white/70 mb-6">
                Join hundreds of businesses that trust DMULTICHOICE for their digital and sourcing needs.
              </p>
              <Link to="/register">
                <button className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-semibold transition-all">
                  Get Started Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AwardDetail1;
