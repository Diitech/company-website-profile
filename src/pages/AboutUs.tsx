import { motion } from 'framer-motion';
import { Users, Globe, Target, Lightbulb } from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-24 pb-16 text-white">
      
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About DMULTICHOICE
          </h1>
          <p className="text-white/60 text-lg">
            We are a modern digital solutions and global sourcing company helping 
            businesses grow, scale, and compete globally through technology, 
            automation, and smart procurement.
          </p>
        </motion.div>
      </section>

      {/* COMPANY STORY */}
      <section className="mt-16 max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-white/60 leading-relaxed">
            DMULTICHOICE was founded with a clear vision — to bridge the gap between 
            businesses and global opportunities. From helping companies build strong 
            online presence to sourcing high-quality products internationally, we 
            provide end-to-end solutions that drive real results.
            <br /><br />
            Over the years, we have worked with startups, SMEs, and growing brands, 
            delivering digital innovation and reliable sourcing services that 
            improve efficiency and profitability.
          </p>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="mt-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-glass p-6 rounded-2xl border border-white/10">
          <Target className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-white/60">
            To empower businesses with innovative digital solutions and reliable 
            global sourcing services that accelerate growth and success.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-glass p-6 rounded-2xl border border-white/10">
          <Globe className="w-8 h-8 text-green-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-white/60">
            To become a leading global brand known for innovation, excellence, 
            and trusted business solutions across industries.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="mt-16 max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-8 text-center">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-glass p-6 rounded-2xl border border-white/10">
              <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="font-bold mb-2">Digital Solutions</h4>
              <p className="text-white/60 text-sm">
                Website development, automation, and digital tools to grow your business.
              </p>
            </div>

            <div className="bg-glass p-6 rounded-2xl border border-white/10">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">Global Sourcing</h4>
              <p className="text-white/60 text-sm">
                We help businesses source quality products from international markets.
              </p>
            </div>

            <div className="bg-glass p-6 rounded-2xl border border-white/10">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="font-bold mb-2">Training & Consulting</h4>
              <p className="text-white/60 text-sm">
                We train individuals and businesses on digital skills and global trade.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-16 max-w-5xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-white/60">
            We combine technology, experience, and global connections to deliver 
            solutions that truly work. Our focus is not just service delivery, 
            but long-term success for our clients.
          </p>
        </motion.div>
      </section>

    </div>
  );
}

export default AboutPage;