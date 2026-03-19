import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin, Award, Building2, ArrowRight, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Lucky Joy',
    role: 'Founder & CEO',
    image: '/founder-lucky-joy.png',
    bio: 'Visionary leader with 10+ years in digital solutions and international trade. Passionate about bridging Nigerian businesses to global markets.',
    location: 'Lagos, Nigeria',
    social: { linkedin: '#', twitter: '#', email: 'lucky@dmultichoice.com' },
  },
  {
    name: 'Michael Adeyemi',
    role: 'Operations Director',
    image: '/team-1.png',
    bio: 'Expert in logistics and supply chain management. Ensures seamless delivery of goods from international suppliers to Nigerian clients.',
    location: 'Lagos, Nigeria',
    social: { linkedin: '#', twitter: '#', email: 'michael@dmultichoice.com' },
  },
  {
    name: 'Amara Okafor',
    role: 'Head of Digital Solutions',
    image: '/team-2.png',
    bio: 'Tech enthusiast specializing in web development, AI automation, and digital transformation strategies for businesses.',
    location: 'Lagos, Nigeria',
    social: { linkedin: '#', twitter: '#', email: 'amara@dmultichoice.com' },
  },
  {
    name: 'Wei Chen',
    role: 'China Operations Manager',
    image: '/team-china.png',
    bio: 'Based in Guangzhou, China. Manages supplier relationships, quality control, and shipping coordination from Chinese manufacturers.',
    location: 'Guangzhou, China',
    social: { linkedin: '#', twitter: '#', email: 'wei@dmultichoice.com' },
  },
  {
    name: 'David Ibrahim',
    role: 'Training Coordinator',
    image: '/team-3.png',
    bio: 'Passionate educator leading our digital skills and import/export training programs. Helping Nigerians build successful careers.',
    location: 'Lagos, Nigeria',
    social: { linkedin: '#', twitter: '#', email: 'david@dmultichoice.com' },
  },
];

function TeamPage() {
  return (
    <div className="pt-24 pb-16">
      <title>Our Team | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Meet the expert team behind DMULTICHOICE. Founder Lucky Joy and our dedicated professionals in digital solutions and global procurement." />
      <meta name="keywords" content="DMULTICHOICE team, Lucky Joy founder, Nigeria digital experts, import export team" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Our People</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the Experts Behind DMULTICHOICE
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A dedicated team of professionals committed to delivering excellence 
              in digital solutions and global procurement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 lg:p-12 border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full max-w-md mx-auto rounded-2xl object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Founder & CEO
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">{teamMembers[0].name}</h2>
                <p className="text-blue-400 text-lg mb-4">{teamMembers[0].role}</p>
                <p className="text-white/70 mb-6 leading-relaxed">{teamMembers[0].bio}</p>
                <div className="flex items-center gap-2 text-white/50 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{teamMembers[0].location}</span>
                </div>
                <div className="flex gap-3">
                  <a href={teamMembers[0].social.linkedin} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-blue-500/20 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={teamMembers[0].social.twitter} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-blue-500/20 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${teamMembers[0].social.email}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-blue-500/20 transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Meet the professionals who make it all happen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(1).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-glass rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-bold text-lg">{member.name}</h4>
                    <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                    <p className="text-white/50 text-xs mb-3 line-clamp-2">{member.bio}</p>
                    <div className="flex items-center gap-1 text-white/40 text-xs mb-3">
                      <MapPin className="w-3 h-3" />
                      {member.location}
                    </div>
                    <div className="flex gap-2">
                      <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-500/20 transition-all">
                        <Linkedin className="w-3 h-3" />
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-500/20 transition-all">
                        <Twitter className="w-3 h-3" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-500/20 transition-all">
                        <Mail className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate & Location */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Link to="/certificate">
              <div className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                  <h4 className="text-white font-bold">Registered Business</h4>
                </div>
                <img
                  src="/certificate.jpg"
                  alt="Business Certificate"
                  className="w-full rounded-xl mb-4"
                />
                <p className="text-white/50 text-sm">
                  DMULTICHOICE is a registered company with the Corporate Affairs Commission of Nigeria.
                </p>
                <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm">
                  <span>View Certificate</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <div className="bg-glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h4 className="text-white font-bold">Headquarters</h4>
              </div>
              <img
                src="/office-building.jpg"
                alt="Office Location"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div>
                <p className="text-white font-medium">Lagos, Nigeria</p>
                <p className="text-white/50 text-sm">
                  18 Awoniyi Elemo Street, Victoria Island, Lagos
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Lagos+Nigeria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-blue-400 text-sm hover:underline"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
