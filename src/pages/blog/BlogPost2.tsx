import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function BlogPost2() {
  return (
    <article className="pt-24 pb-16">
      <title>Top 10 Digital Skills to Learn in 2025 for Career Growth | DMULTICHOICE Blog</title>
      <meta name="description" content="Discover the most in-demand digital skills that can help you land high-paying jobs and grow your career in the tech industry." />
      <meta name="keywords" content="digital skills, career growth, tech jobs, online learning, web development, digital marketing Nigeria" />
      
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <Badge className="bg-cyan-500/20 text-cyan-400 border-0 mb-4">Career</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Top 10 Digital Skills to Learn in 2025 for Career Growth
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">David Ibrahim</p>
                  <p className="text-sm">Training Coordinator, DMULTICHOICE</p>
                </div>
              </div>
              <span className="hidden sm:block">|</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                February 25, 2025
              </div>
              <span className="hidden sm:block">|</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src="/student-training.jpg" alt="Digital Skills Training" className="w-full h-64 sm:h-96 object-cover rounded-3xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              The digital economy is booming, and Nigeria is no exception. Whether you're looking to switch careers, 
              start a side hustle, or advance in your current role, learning the right digital skills can open doors 
              to high-paying opportunities. Here are the top 10 digital skills you should learn in 2025.
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 my-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Why Digital Skills Matter in 2025</h3>
              </div>
              <p className="text-white/70">
                According to recent studies, digital skills can increase your earning potential by up to 40%. 
                Companies across all industries are seeking professionals who can navigate the digital landscape effectively.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Web Development</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Web development remains one of the most in-demand skills globally. With businesses moving online, 
              the need for skilled developers continues to grow.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Technologies to learn:</strong> HTML, CSS, JavaScript, React, Node.js</li>
              <li><strong>Average salary in Nigeria:</strong> ₦300,000 - ₦800,000/month</li>
              <li><strong>Remote opportunities:</strong> High demand for remote web developers</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Digital Marketing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Every business needs digital marketing to reach customers online. This skill combines creativity with analytics.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Key areas:</strong> SEO, social media marketing, email marketing, content strategy</li>
              <li><strong>Tools to master:</strong> Google Analytics, Facebook Ads, Mailchimp</li>
              <li><strong>Average salary:</strong> ₦200,000 - ₦600,000/month</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Data Analytics</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Data-driven decision making is crucial for modern businesses. Data analysts help companies make sense of their data.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Skills needed:</strong> Excel, SQL, Python, data visualization</li>
              <li><strong>Tools:</strong> Tableau, Power BI, Google Data Studio</li>
              <li><strong>Career path:</strong> Junior Analyst → Data Analyst → Senior Analyst → Data Scientist</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. UI/UX Design</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              User experience design focuses on creating products that are intuitive and enjoyable to use.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Design tools:</strong> Figma, Adobe XD, Sketch</li>
              <li><strong>Key concepts:</strong> User research, wireframing, prototyping, usability testing</li>
              <li><strong>Freelance rate:</strong> $25 - $100/hour</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Artificial Intelligence & Machine Learning</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              AI is transforming every industry. Understanding AI fundamentals can give you a significant career advantage.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Starting point:</strong> Python programming, basic statistics</li>
              <li><strong>Frameworks:</strong> TensorFlow, PyTorch, scikit-learn</li>
              <li><strong>Applications:</strong> Chatbots, recommendation systems, predictive analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Cybersecurity</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              With increasing cyber threats, cybersecurity professionals are in high demand across all sectors.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Certifications:</strong> CompTIA Security+, CEH, CISSP</li>
              <li><strong>Skills:</strong> Network security, ethical hacking, risk assessment</li>
              <li><strong>Salary range:</strong> ₦400,000 - ₦1,500,000/month</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Cloud Computing</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Cloud platforms like AWS, Azure, and Google Cloud are the backbone of modern IT infrastructure.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Platforms:</strong> AWS, Microsoft Azure, Google Cloud Platform</li>
              <li><strong>Certifications:</strong> AWS Solutions Architect, Azure Administrator</li>
              <li><strong>Roles:</strong> Cloud Engineer, DevOps Engineer, Solutions Architect</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. E-commerce Management</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              With the growth of online shopping, e-commerce specialists are essential for retail businesses.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Platforms:</strong> Shopify, WooCommerce, Magento</li>
              <li><strong>Skills:</strong> Product listing, inventory management, payment processing</li>
              <li><strong>Opportunity:</strong> Start your own online store or manage for others</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Content Creation & Copywriting</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Quality content drives engagement and sales. Skilled writers and content creators are always in demand.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Types:</strong> Blog writing, social media content, video scripts, email copy</li>
              <li><strong>SEO knowledge:</strong> Keyword research, on-page optimization</li>
              <li><strong>Rate:</strong> ₦5 - ₦50 per word depending on expertise</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Project Management</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Digital project managers coordinate teams and ensure projects are delivered on time and within budget.
            </p>
            <ul className="space-y-2 text-white/70 mb-6">
              <li><strong>Methodologies:</strong> Agile, Scrum, Kanban</li>
              <li><strong>Tools:</strong> Jira, Trello, Asana, Monday.com</li>
              <li><strong>Certifications:</strong> PMP, Scrum Master, PRINCE2</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">How to Get Started</h2>
            <ol className="space-y-4 text-white/70 mb-8">
              <li><strong className="text-white">1. Choose one skill</strong> - Focus on mastering one skill before moving to others</li>
              <li><strong className="text-white">2. Take online courses</strong> - Platforms like Coursera, Udemy, and our DMULTICHOICE training programs</li>
              <li><strong className="text-white">3. Build a portfolio</strong> - Create projects that demonstrate your skills</li>
              <li><strong className="text-white">4. Join communities</strong> - Network with other professionals in your field</li>
              <li><strong className="text-white">5. Stay updated</strong> - Technology evolves rapidly; continuous learning is essential</li>
            </ol>

            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Your Digital Skills Journey</h3>
              <p className="text-white/70 mb-6">
                DMULTICHOICE offers comprehensive training programs in web development, digital marketing, 
                and more. Join thousands of successful graduates who have transformed their careers.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                  Enroll in Our Training Program
                </Button>
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              The digital economy offers unprecedented opportunities for career growth. By investing in the right skills, 
              you can future-proof your career and access high-paying opportunities both locally and internationally. 
              Start your learning journey today and position yourself for success in 2025 and beyond.
            </p>
          </motion.div>

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

export default BlogPost2;
