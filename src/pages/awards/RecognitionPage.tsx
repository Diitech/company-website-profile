import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Star, Trophy, Medal, TrendingUp, Calendar, Building2, Quote, ArrowRight, Newspaper, Mic, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mediaMentions = [
  {
    title: 'DMULTICHOICE: Bridging the Gap Between Nigerian Businesses and Global Markets',
    publication: 'Techpoint Africa',
    date: 'December 2024',
    type: 'Feature Article'
  },
  {
    title: 'How Digital Solutions Are Transforming Nigerian SMEs',
    publication: 'Business Day Nigeria',
    date: 'November 2024',
    type: 'Industry Analysis'
  },
  {
    title: 'The Rise of Import/Export Facilitators in Nigeria',
    publication: 'Nairametrics',
    date: 'October 2024',
    type: 'Market Report'
  },
  {
    title: 'Interview with Lucky Joy on International Trade',
    publication: 'Channels TV',
    date: 'September 2024',
    type: 'TV Interview'
  }
];

const milestones = [
  { year: '2020', event: 'DMULTICHOICE founded in Lagos, Nigeria' },
  { year: '2021', event: 'Launched international sourcing services' },
  { year: '2022', event: 'Expanded to serve 100+ clients' },
  { year: '2023', event: 'Opened China office in Guangzhou' },
  { year: '2024', event: 'Recognized as Top 100 Fastest Growing Company' },
];

const testimonials = [
  {
    quote: "DMULTICHOICE has been instrumental in helping us source quality products from China. Their professionalism is unmatched.",
    author: "Mrs. Adebayo",
    role: "School Principal",
    organization: "Lagos"
  },
  {
    quote: "The training program transformed my career. I now run a successful import business thanks to what I learned.",
    author: "Fatima Bello",
    role: "Entrepreneur",
    organization: "Abuja"
  },
  {
    quote: "Working with DMULTICHOICE reduced our procurement costs by 30%. Highly recommended!",
    author: "Engineer Ibrahim",
    role: "Manufacturing Director",
    organization: "Kano"
  }
];

function RecognitionPage() {
  return (
    <div className="pt-24 pb-16">
      <title>Recognition & Media | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Explore DMULTICHOICE's media mentions, industry recognition, milestones, and client testimonials." />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Industry Recognition</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Recognition & Media
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our journey of excellence has been recognized by media outlets, industry bodies, 
              and most importantly, our valued clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Summary */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <Link to="/awards/fastest-growing-companies-2024">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30 hover:scale-[1.02] transition-all cursor-pointer">
                <TrendingUp className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-white font-bold mb-2">Top 100 Fastest Growing</h3>
                <p className="text-white/50 text-sm">Business Day Nigeria 2024</p>
              </div>
            </Link>
            <Link to="/awards/best-digital-solutions-provider-2024">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30 hover:scale-[1.02] transition-all cursor-pointer">
                <Trophy className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-white font-bold mb-2">Best Digital Solutions</h3>
                <p className="text-white/50 text-sm">Nigeria Tech Awards 2024</p>
              </div>
            </Link>
            <Link to="/awards/excellence-import-export-2023">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 hover:scale-[1.02] transition-all cursor-pointer">
                <Medal className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-white font-bold mb-2">Excellence in Trade</h3>
                <p className="text-white/50 text-sm">Lagos Chamber of Commerce 2023</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Newspaper className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Media Mentions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaMentions.map((mention, index) => (
                <div key={index} className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    {mention.type === 'TV Interview' ? <Mic className="w-4 h-4 text-blue-400" /> : <Newspaper className="w-4 h-4 text-blue-400" />}
                    <Badge className="bg-blue-500/10 text-blue-400 border-0 text-xs">{mention.type}</Badge>
                  </div>
                  <h4 className="text-white font-bold mb-2">{mention.title}</h4>
                  <div className="flex items-center gap-4 text-white/50 text-sm">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {mention.publication}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {mention.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Our Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0f1c]" />
                    <div className="bg-glass rounded-xl p-5 border border-white/10">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-0 mb-2">{milestone.year}</Badge>
                      <p className="text-white">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-glass rounded-2xl p-6 border border-white/10">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-white/70 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                    <p className="text-white/40 text-xs">{testimonial.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Experience the award-winning service that has made DMULTICHOICE one of Nigeria's fastest-growing companies.
            </p>
            <Link to="/register">
              <button className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-semibold transition-all">
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default RecognitionPage;
