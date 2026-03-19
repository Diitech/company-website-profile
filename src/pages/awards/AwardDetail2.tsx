import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Calendar, Building2, MapPin, Star, Quote, CheckCircle, Monitor, Code, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function AwardDetail2() {
  return (
    <div className="pt-24 pb-16">
      <title>Best Digital Solutions Provider 2024 | DMULTICHOICE Award</title>
      <meta name="description" content="DMULTICHOICE awarded Best Digital Solutions Provider by Nigeria Tech Awards 2024. Excellence in web development, AI solutions, and digital transformation." />
      <meta name="keywords" content="DMULTICHOICE award, Nigeria Tech Awards, best digital solutions, web development award Nigeria" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/awards" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Awards
            </Link>
            
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">2024</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Best Digital Solutions Provider
            </h1>
            
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Nigeria Tech Awards</span>
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
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-12 text-center border border-blue-500/30"
          >
            <Trophy className="w-24 h-24 text-blue-400 mx-auto mb-6" />
            <Badge className="bg-blue-500 text-white border-0 mb-4">Winner</Badge>
            <h2 className="text-2xl font-bold text-white mb-2">Best Digital Solutions Provider</h2>
            <p className="text-white/60">Nigeria Tech Awards 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-white mt-8 mb-6">About This Award</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The Nigeria Tech Awards recognize outstanding contributions to Nigeria's technology ecosystem. 
              The Best Digital Solutions Provider award honors companies that have demonstrated excellence in 
              delivering innovative digital solutions that drive business growth and transformation.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Evaluation Criteria</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Companies were evaluated on the following criteria:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span><strong>Innovation:</strong> Use of cutting-edge technologies and creative solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span><strong>Quality:</strong> Consistent delivery of high-quality solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span><strong>Client Satisfaction:</strong> Positive feedback and retention rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span><strong>Impact:</strong> Measurable business results for clients</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span><strong>Scalability:</strong> Ability to handle projects of varying sizes</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Digital Solutions Portfolio</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <Monitor className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-white font-bold mb-2">Website Development</h4>
                <p className="text-white/60 text-sm">Custom websites, e-commerce platforms, web applications</p>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <Code className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-white font-bold mb-2">OTA Management</h4>
                <p className="text-white/60 text-sm">Hotel listing optimization on Booking.com, Airbnb, Expedia</p>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <Zap className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-white font-bold mb-2">AI & Automation</h4>
                <p className="text-white/60 text-sm">Chatbots, workflow automation, business intelligence</p>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-white font-bold mb-2">Digital Strategy</h4>
                <p className="text-white/60 text-sm">Growth planning, SEO, conversion optimization</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Client Success Stories</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">School Enrollment Growth</h4>
                <p className="text-white/60 text-sm mb-3">
                  Helped a Lagos school increase enrollment by 40% through website redesign and social media management.
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-0">+40% Enrollment</Badge>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">Hotel Booking Optimization</h4>
                <p className="text-white/60 text-sm mb-3">
                  Increased hotel direct bookings by 60% through OTA management and website optimization.
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-0">+60% Bookings</Badge>
              </div>
              <div className="bg-glass rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-bold mb-2">E-commerce Revenue Boost</h4>
                <p className="text-white/60 text-sm mb-3">
                  Built an e-commerce platform that generated ₦50M+ in first-year revenue.
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-0">₦50M+ Revenue</Badge>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 my-12">
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white/80 text-lg italic mb-4">
                "This award validates our commitment to delivering world-class digital solutions to Nigerian businesses. 
                We're proud to be recognized for our innovative approach and the tangible results we deliver to our clients."
              </p>
              <p className="text-white font-medium">— Amara Okafor, Head of Digital Solutions</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Awards Ceremony</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The Nigeria Tech Awards 2024 ceremony was held at the Landmark Event Centre in Lagos, bringing together 
              Nigeria's top technology companies, innovators, and industry leaders. The event celebrated excellence 
              across various categories including fintech, edtech, healthtech, and digital services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Commitment to Excellence</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              This award reinforces our commitment to staying at the forefront of digital innovation in Nigeria. 
              We continue to invest in:
            </p>
            <ul className="space-y-3 text-white/70 mb-8">
              <li>• Training our team on the latest technologies</li>
              <li>• Developing proprietary tools and solutions</li>
              <li>• Building strategic partnerships with global tech companies</li>
              <li>• Delivering measurable ROI for every client project</li>
              <li>• Contributing to Nigeria's digital economy growth</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Work With an Award-Winning Team</h3>
              <p className="text-white/70 mb-6">
                Experience the award-winning digital solutions that have helped hundreds of businesses grow.
              </p>
              <Link to="/register">
                <button className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-semibold transition-all">
                  Start Your Project
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AwardDetail2;
