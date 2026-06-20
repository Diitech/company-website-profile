import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Check, Video, PlayCircle, Award, Users, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Video, title: 'Live Zoom Sessions', desc: 'Interactive classes with industry experts — ask questions and learn in real time.' },
  { icon: PlayCircle, title: 'Recorded Video Library', desc: 'Miss a class? Rewatch every lesson anytime, at your own pace.' },
  { icon: Award, title: 'Certification', desc: 'Earn a recognized certificate of completion to showcase your new skills.' },
  { icon: Users, title: '1-on-1 Mentorship', desc: 'Personal guidance from mentors who have built real businesses.' },
  { icon: InfinityIcon, title: 'Lifetime Community', desc: 'Join an ongoing network of students, alumni, and instructors for life.' },
  { icon: GraduationCap, title: 'Practical Projects', desc: 'Learn by doing with real-world assignments you can add to your portfolio.' },
];

const courses = [
  {
    name: 'Digital Skills',
    description: 'Web development, design, social media & more',
    features: ['Website building', 'Graphic & UI design', 'Social media marketing', 'Live + recorded classes', 'Completion certificate'],
    highlighted: false,
  },
  {
    name: 'Import & Export Mastery',
    description: 'Our most popular program for aspiring importers',
    features: ['Sourcing from China & beyond', 'Supplier verification', 'Shipping & customs', 'Payment methods (Alipay, WeChat)', '1-on-1 mentorship', 'Lifetime community access'],
    highlighted: true,
  },
  {
    name: 'Professional Development',
    description: 'Business and career growth courses',
    features: ['Business fundamentals', 'Branding & sales', 'Productivity & tools', 'Live Q&A sessions', 'Completion certificate'],
    highlighted: false,
  },
];

const gallery = [
  { name: 'Online Classes', type: 'Live Sessions', image: '/online-class-1.jpg' },
  { name: 'Import Training', type: 'Hands-On', image: '/import-training.jpg' },
  { name: 'Graduation', type: 'Certification', image: '/certificate-ceremony.jpg' },
];

function ServiceTraining() {
  return (
    <div className="pt-24 pb-16">
      <title>Online Training & Classes | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Digital skills training, import/export mastery, and professional development courses. Live Zoom sessions, recorded videos, certification, and 1-on-1 mentorship. Learn from industry experts." />
      <meta name="keywords" content="online training Nigeria, digital skills course, import export training, learn importing from China, professional development Lagos" />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <Badge className="bg-orange-500/20 text-orange-400 border-0 mb-4">Education</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Online Training & Classes
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Digital skills training, import/export mastery, and professional development courses.
              Learn practical, money-making skills from industry experts — live and on demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '500+', label: 'Students Trained' },
              { value: '97%', label: 'Satisfaction Rate' },
              { value: '100%', label: 'Online & Flexible' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-glass rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-1">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-white/60 max-w-xl mx-auto">Everything you need to learn a new skill and put it to work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-glass rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Courses</h2>
            <p className="text-white/60 max-w-xl mx-auto">Pick the program that matches your goals</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`rounded-2xl p-6 border ${course.highlighted ? 'bg-gradient-to-b from-orange-600/20 to-amber-600/20 border-orange-500/30' : 'bg-glass border-white/10'}`}
              >
                {course.highlighted && <Badge className="bg-orange-500 text-white border-0 mb-4">Most Popular</Badge>}
                <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                <p className="text-white/60 text-sm mb-6">{course.description}</p>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button className={`w-full rounded-full ${course.highlighted ? 'bg-white text-black hover:bg-white/90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Inside Our Classes</h2>
            <p className="text-white/60 max-w-xl mx-auto">Real students learning real, practical skills</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-orange-500/20 text-orange-400 border-0 mb-2">{item.type}</Badge>
                    <h4 className="text-white font-bold">{item.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <GraduationCap className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Start Learning Today</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Join 500+ students who have built new skills and new income streams with us.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ServiceTraining;
