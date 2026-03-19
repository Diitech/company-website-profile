import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Building2, MapPin, Calendar, CheckCircle, FileText, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function CertificatePage() {
  return (
    <div className="pt-24 pb-16">
      <title>Business Certificate & Registration | DMULTICHOICE Nigeria</title>
      <meta
        name="description"
        content="DMULTICHOICE is a registered company with the Corporate Affairs Commission of Nigeria. View our business certificate and registration details."
      />
      <meta
        name="keywords"
        content="DMULTICHOICE registration, CAC Nigeria, business certificate, registered company Lagos"
      />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/awards"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Awards
            </Link>

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Verified Business</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Business Certificate & Registration
            </h1>

            <p className="text-white/60 text-lg max-w-2xl">
              DMULTICHOICE is a fully registered and compliant business entity,
              authorized to operate in Nigeria and conduct international trade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificate Display */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-glass rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-center mb-8">
              <img
                src="/certificate.jpg"
                alt="DMULTICHOICE Business Certificate"
                className="w-full max-w-lg rounded-xl shadow-2xl"
              />
            </div>
            <div className="text-center">
              <Badge className="bg-green-500/20 text-green-400 border-0 mb-4">Active Registration</Badge>
              <p className="text-white/60 text-sm">
                Certificate of Incorporation issued by the Corporate Affairs Commission of Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Registration Details</h2>

            <div className="space-y-6">
              {[
                { icon: Building2, title: 'Company Name', value: 'DMULTICHOICE LIMITED' },
                { icon: FileText, title: 'Registration Number', value: 'RC 1234567' },
                { icon: Calendar, title: 'Date of Incorporation', value: 'January 15, 2020' },
                { icon: MapPin, title: 'Registered Address', value: '18 Awoniyi Elemo Street, Victoria Island, Lagos, Nigeria' },
                {
                  icon: Award,
                  title: 'Business Activities',
                  value: (
                    <ul className="text-white/60 space-y-1">
                      <li>• Digital Solutions & Web Development</li>
                      <li>• International Sourcing & Procurement</li>
                      <li>• Import/Export Services</li>
                      <li>• Training & Capacity Development</li>
                    </ul>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="bg-glass rounded-xl p-6 border border-white/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-white/60">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Compliance & Certifications</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Tax Identification Number', value: '01234567890', status: 'Active' },
                { title: 'SONCAP Registration', value: 'SON-IMP-2024-001', status: 'Active' },
                { title: 'NEPC Registration', value: 'NEPC-EXP-2023-456', status: 'Active' },
                { title: 'NAFDAC (Food/Drugs)', value: 'NAFDAC-REG-2024-789', status: 'Active' },
              ].map((item, index) => (
                <div key={index} className="bg-glass rounded-xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium text-sm">{item.title}</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-0 text-xs">{item.status}</Badge>
                  </div>
                  <p className="text-white/60 font-mono text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mt-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-2">Verified Business Entity</h4>
                  <p className="text-white/60 text-sm">
                    DMULTICHOICE LIMITED is a legally registered company in Nigeria, compliant with all
                    regulatory requirements for conducting business and international trade. You can verify
                    our registration status on the{' '}
                    <a
                      href="https://cac.gov.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      CAC website
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CertificatePage;