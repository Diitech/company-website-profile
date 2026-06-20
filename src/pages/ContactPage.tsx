import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Phone, Mail } from 'lucide-react';

function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <title>Contact Us | DMULTICHOICE Nigeria</title>
      <meta
        name="description"
        content="Contact DMULTICHOICE for digital solutions, international sourcing, and training services. Lagos, Nigeria. Email: support@dmultichoice.com, Phone (Nigeria): +234 815 848 4621, Phone (U.S.): +1 (906) 430-2144"
      />
      <meta
        name="keywords"
        content="contact DMULTICHOICE, Lagos Nigeria, digital solutions contact, import export Nigeria"
      />

      {/* Hero */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Have a question or ready to get started? Fill the form below and we’ll get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone,
                label: "Call us (Nigeria)",
                value: "🇳🇬 +234 815 848 4621",
                href: "tel:+2348158484621",
              },
              {
                icon: Phone,
                label: "Call us (U.S.)",
                value: "🇺🇸 +1 (906) 430-2144",
                href: "tel:+19064302144",
              },
              {
                icon: Mail,
                label: "Email us",
                value: "support@dmultichoice.com",
                href: "mailto:support@dmultichoice.com",
              },
              {
                icon: MapPin,
                label: "Visit us",
                value: "Victoria Island, Lagos",
                href: "https://maps.google.com/?q=Victoria+Island+Lagos+Nigeria",
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group bg-glass rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-white/40 text-xs mb-1">{item.label}</p>
                <p className="text-white font-semibold text-sm break-words">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Google Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glass rounded-3xl p-6 border border-white/10">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf4BebsOPnUQ--kD6elRSltNUdxj7zn7unv2xeWdXa8FY-VhQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-2xl"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-glass rounded-3xl p-8 border border-white/10 text-center"
          >
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Visit Our Office</h2>
            <p className="text-white/60 mb-6">18 Awoniyi Elemo Street, Victoria Island, Lagos, Nigeria</p>
            <a
              href="https://maps.google.com/?q=Victoria+Island+Lagos+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-6 py-3 font-semibold transition-all"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;