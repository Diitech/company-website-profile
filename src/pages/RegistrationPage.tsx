import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Building, MapPin, Briefcase, GraduationCap, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const serviceOptions = [
  'Website Development',
  'OTA Management',
  'Social Media Management',
  'AI & Automation',
  'International Sourcing',
  'Supplier Verification',
  'Digital Skills Training',
  'Import/Export Training',
];

function RegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16">
      <title>Register for Services | DMULTICHOICE Nigeria</title>
      <meta name="description" content="Register for DMULTICHOICE services. Website development, international sourcing, training programs, and more. Get started today!" />
      <meta name="keywords" content="register DMULTICHOICE, Nigeria business services, website development Nigeria, import training" />
      
      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <Send className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Get Started</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Register for Our Services
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Fill out the form below and our team will get in touch with you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-glass rounded-3xl p-12 text-center border border-white/10">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Registration Successful!</h2>
                <p className="text-white/60 mb-6">
                  Thank you for registering. Our team will contact you within 24 hours.
                </p>
                <Link to="/">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-glass rounded-3xl p-8 lg:p-12 border border-white/10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-white/80 flex items-center gap-2">
                      <User className="w-4 h-4 text-green-400" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullname"
                      placeholder="Enter your full name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-400" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80 flex items-center gap-2">
                      <Building className="w-4 h-4 text-green-400" />
                      Company/Business Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name (optional)"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white/80 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-400" />
                      Location *
                    </Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white/80 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-green-400" />
                      Service Interested In *
                    </Label>
                    <Select required>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-green-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0f1c] border-white/10">
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')} className="text-white hover:bg-white/10">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="training" className="text-white/80 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-green-400" />
                      Training Program (if applicable)
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-green-500">
                        <SelectValue placeholder="Select training program (optional)" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0f1c] border-white/10">
                        <SelectItem value="digital-skills" className="text-white hover:bg-white/10">Digital Skills Mastery</SelectItem>
                        <SelectItem value="import-export" className="text-white hover:bg-white/10">Import/Export Training</SelectItem>
                        <SelectItem value="hotel-management" className="text-white hover:bg-white/10">Hotel Digital Management</SelectItem>
                        <SelectItem value="none" className="text-white hover:bg-white/10">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message" className="text-white/80">
                      Additional Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your requirements..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-green-500 resize-none"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 font-semibold transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Registration
                  </Button>
                </div>

                <p className="text-white/40 text-xs text-center mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default RegistrationPage;
