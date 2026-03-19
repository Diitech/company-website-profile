import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const serviceLinks = [
  { name: 'Website Development', href: '/services/website-development' },
  { name: 'OTA Management', href: '/services/ota-management' },
  { name: 'Social Media Management', href: '/services/social-media-management' },
  { name: 'AI Solutions', href: '/services/ai-automation' },
  { name: 'International Sourcing', href: '/services/international-sourcing' },
  { name: 'Online Training', href: '/services/training' },
];

const productLinks = [
  { name: 'Technology', href: '/products' },
  { name: 'Appliances', href: '/products' },
  { name: 'Furniture', href: '/products' },
  { name: 'Automobiles', href: '/products' },
  { name: 'Building Materials', href: '/products' },
];

const resourceLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Awards', href: '/awards' },
  { name: 'Contact', href: '/contact' }, // Updated to go to ContactPage
];

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Dmultichoice" className="w-12 h-12" />
              <span
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontWeight: 900 }}
              >
                DMULTICHOICE
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Digital Solutions & Global Procurement Company. We build, manage, 
              automate, source, and train.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Deliamutiempire@gmail.com"
                  className="text-white/60 text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Deliamutiempire@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348158484621"
                  className="text-white/60 text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +234 815 848 4621
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © Built with Love by <span className="font-bold text-white/70">DMULTICHOICE</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}