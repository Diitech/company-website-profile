import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'Website Development', path: '/services' },
  { name: 'AI & Automation', path: '/services' },
  { name: 'Import Services', path: '/services' },
  { name: 'Social Media Management', path: '/services' },
  { name: 'Online Classes', path: '/online-classes' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Dmutiechoice" className="h-12 w-auto mb-4" />
            <p className="text-sm opacity-90 mb-4">
              Digital Solutions & Global Procurement Company. We build, manage, 
              automate, and source. Your trusted partner since 2022.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-90 hover:opacity-100 hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to={service.path} className="text-sm opacity-90 hover:opacity-100 hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  9, No 9 Okene Street, Okuokoko, Delta, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+2348158484621" className="text-sm opacity-90 hover:underline">
                  +234 815 848 4621
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:Deliamutiempire@gmail.com" className="text-sm opacity-90 hover:underline">
                  Deliamutiempire@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Dmutiechoice. All rights reserved. | 
            TIN: 1072093089 | Delta State Board of Internal Revenue
          </p>
        </div>
      </div>
    </footer>
  );
}
