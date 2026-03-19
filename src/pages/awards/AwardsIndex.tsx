import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Star, Trophy, Medal, ArrowRight, Calendar, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const awards = [
  {
    id: 1,
    slug: 'fastest-growing-companies-2024',
    title: 'Top 100 Fastest Growing Companies',
    organization: 'Business Day Nigeria',
    year: '2024',
    description: 'Recognized among Nigeria\'s fastest-growing companies based on revenue growth, innovation, and market impact.',
    icon: TrendingUp,
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400'
  },
  {
    id: 2,
    slug: 'best-digital-solutions-provider-2024',
    title: 'Best Digital Solutions Provider',
    organization: 'Nigeria Tech Awards',
    year: '2024',
    description: 'Awarded for excellence in delivering innovative digital solutions to businesses across Nigeria.',
    icon: Trophy,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    id: 3,
    slug: 'excellence-import-export-2023',
    title: 'Excellence in Import/Export Services',
    organization: 'Lagos Chamber of Commerce',
    year: '2023',
    description: 'Honored for outstanding contribution to international trade and logistics in Nigeria.',
    icon: Medal,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400'
  },
];

const certifications = [
  {
    title: 'Corporate Affairs Commission (CAC)',
    description: 'Registered Business Entity in Nigeria',
    number: 'RC 1234567',
    year: '2020'
  },
  {
    title: 'SONCAP Certification',
    description: 'Standards Organization of Nigeria Conformity Assessment Program',
    number: 'SON-IMP-2024-001',
    year: '2024'
  },
  {
    title: 'Nigerian Export Promotion Council',
    description: 'Registered Export Company',
    number: 'NEPC-EXP-2023-456',
    year: '2023'
  }
];

function AwardsIndex() {
  return (
    <div className="pt-24 pb-16">
      <title>Awards & Recognition | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Discover DMULTICHOICE's awards, certifications, and recognitions. Top 100 fastest growing company in Nigeria, Best Digital Solutions Provider, and more." />
      <meta name="keywords" content="DMULTICHOICE awards, Nigeria business awards, digital solutions award, import export recognition" />
      
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Excellence Recognized</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Awards & Recognition
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry bodies 
              and publications across Nigeria and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: '10+', label: 'Industry Awards' },
              { number: '5+', label: 'Years of Excellence' },
              { number: '3', label: 'Major Recognitions' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="bg-glass rounded-2xl p-6 text-center border border-white/10">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Awards</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Recognition from prestigious organizations for our outstanding contributions 
              to digital solutions and international trade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link to={`/awards/${award.slug}`}>
                  <div className={`bg-gradient-to-r ${award.color} rounded-3xl p-8 border ${award.borderColor} hover:scale-[1.02] transition-all cursor-pointer h-full`}>
                    <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6`}>
                      <award.icon className={`w-8 h-8 ${award.iconColor}`} />
                    </div>
                    <Badge className="bg-white/10 text-white border-0 mb-4">{award.year}</Badge>
                    <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{award.organization}</p>
                    <p className="text-white/50 text-sm mb-6">{award.description}</p>
                    <div className="flex items-center gap-1 text-white/70 text-sm">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Certifications & Registrations</h2>
              </div>
              <p className="text-white/60 mb-8">
                DMULTICHOICE is a fully registered and certified business entity, 
                compliant with all Nigerian regulatory requirements for import/export and digital services.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-glass rounded-xl p-5 border border-white/10">
                    <h4 className="text-white font-bold mb-1">{cert.title}</h4>
                    <p className="text-white/50 text-sm mb-2">{cert.description}</p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span>Reg. No: {cert.number}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/certificate">
                <button className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span>View Business Certificate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div>
              <img
                src="/certificate.jpg"
                alt="Business Certificate"
                className="w-full rounded-3xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center"
          >
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">See All Our Recognition</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Explore our full list of awards, media mentions, and industry recognition 
              that showcase our commitment to excellence.
            </p>
            <Link to="/recognition">
              <button className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-semibold transition-all">
                <span>View Recognition Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AwardsIndex;