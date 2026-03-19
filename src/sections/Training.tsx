import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Globe, Monitor, TrendingUp, Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const trainingPrograms = [
  {
    title: 'Digital Skills Mastery',
    description: 'Learn web development, digital marketing, and social media management. Get certified and job-ready in 12 weeks.',
    icon: Monitor,
    duration: '12 Weeks',
    students: '500+ Graduates',
    tags: ['Online & In-Person'],
  },
  {
    title: 'Import/Export Business Training',
    description: 'Master the art of international trade. Learn supplier verification, shipping logistics, customs clearance, and payment methods.',
    icon: Globe,
    duration: '8 Weeks',
    students: '300+ Graduates',
    tags: ['Online Classes'],
  },
  {
    title: 'Hotel Digital Management',
    description: 'Specialized training for hospitality professionals. Learn OTA management, revenue optimization, and guest engagement strategies.',
    icon: TrendingUp,
    duration: '6 Weeks',
    students: '150+ Graduates',
    tags: ['In-Person'],
  },
];

const announcements = [
  {
    title: 'New Batch Starting Soon!',
    message: 'Enroll now for our next Digital Skills Bootcamp starting next month. Limited seats available!',
    icon: Users,
    urgent: true,
  },
  {
    title: 'Import Training Webinar',
    message: 'Free introductory webinar on "How to Start Import Business from China" this Saturday.',
    icon: Globe,
    urgent: false,
  },
  {
    title: 'Certification Program',
    message: 'All graduates receive internationally recognized certificates and job placement assistance.',
    icon: GraduationCap,
    urgent: false,
  },
];

export function Training() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            Training & Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Learn. Grow. Succeed.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional training programs designed to equip you with in-demand skills 
            for the digital economy and international trade.
          </p>
        </motion.div>

        {/* Announcements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Announcements
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {announcements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`bg-glass rounded-xl p-4 border ${item.urgent ? 'border-cyan-500/30' : 'border-white/10'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${item.urgent ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                    <item.icon className={`w-4 h-4 ${item.urgent ? 'text-cyan-400' : 'text-white/60'}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {trainingPrograms.map((program) => (
            <motion.div
              key={program.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                },
              }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-glow-sm">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border-0 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-cyan-500/20">
                  <program.icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {program.students}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Transform Your Career?
            </h3>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Join thousands of successful graduates who have launched their careers 
              through our professional training programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-5 font-medium transition-all hover:scale-105">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-5 font-medium">
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
