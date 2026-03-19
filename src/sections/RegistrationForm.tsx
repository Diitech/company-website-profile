import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { User, Mail, Phone, Building, MapPin, Briefcase, GraduationCap, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

export function RegistrationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Register for Our Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Fill out the form below and our team will get in touch with you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-glass rounded-3xl p-12 text-center border border-white/10">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Registration Successful!</h3>
              <p className="text-white/60 mb-6">
                Thank you for registering. Our team will contact you within 24 hours.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Submit Another Registration
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-glass rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-white/80 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="Enter your full name"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/80 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/80 flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-400" />
                    Company/Business Name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name (optional)"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white/80 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, State"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white/80 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    Service Interested In *
                  </Label>
                  <Select required>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-blue-500">
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

                {/* Training Program (conditional) */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="training" className="text-white/80 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    Training Program (if applicable)
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-blue-500">
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

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="text-white/80">
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
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
  );
}
