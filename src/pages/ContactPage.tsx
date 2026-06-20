import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowLeft,
  Phone,
  Mail,
  User,
  Home,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ───────────────────────────────────────────────
   GOOGLE SHEET ENDPOINT
   Submissions are sent to a Google Sheet via a
   Google Apps Script Web App. Paste your deployed
   web-app URL below (see setup steps in the repo /
   the message from your developer).
   Example: https://script.google.com/macros/s/AKfy.../exec
   ─────────────────────────────────────────────── */
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzfBYMSQrvmCJOOpXyD9_81l-fLFXA3pV7VqdTiwdeVQ9gvcihy0b_dUREJ9QAzvZP8/exec';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  comments: '',
};

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (GOOGLE_SCRIPT_URL.includes('PASTE_YOUR_DEPLOYMENT_ID')) {
      setStatus('error');
      setErrorMsg(
        'The form is not connected to Google Sheets yet. Please add your Apps Script URL.',
      );
      return;
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          ...form,
          submittedAt: new Date().toISOString(),
        }).toString(),
      });
      // With mode: 'no-cors' the response is opaque, so a resolved
      // fetch is treated as a successful submission.
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  };

  const inputBase =
    'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all';

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
              Have a question or ready to get started? Fill out the form and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-gradient-to-b from-blue-600/15 to-violet-600/10 rounded-3xl p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-3">Contact Information</h2>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  We are a Digital Solutions &amp; Global Procurement Company. If you have any inquiries,
                  business requests, or need our services, please fill out the form and we will respond as
                  soon as possible.
                </p>

                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </span>
                    <div>
                      <p className="text-white/40 text-xs">Email</p>
                      <a href="mailto:support@dmultichoice.com" className="text-white text-sm font-medium hover:text-blue-400 transition-colors break-all">
                        support@dmultichoice.com
                      </a>
                      <p className="text-white/40 text-xs mt-1">Backup</p>
                      <a href="mailto:Deliamutiempire@gmail.com" className="text-white/70 text-sm hover:text-blue-400 transition-colors break-all">
                        Deliamutiempire@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </span>
                    <div>
                      <p className="text-white/40 text-xs">Phone</p>
                      <a href="tel:+2348158484621" className="block text-white text-sm font-medium hover:text-blue-400 transition-colors">
                        🇳🇬 +234 815 848 4621
                      </a>
                      <a href="tel:+19064302144" className="block text-white text-sm font-medium hover:text-blue-400 transition-colors mt-1">
                        🇺🇸 +1 (906) 430-2144
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </span>
                    <div>
                      <p className="text-white/40 text-xs">Location</p>
                      <p className="text-white text-sm font-medium">18 Awoniyi Elemo St, Victoria Island, Lagos, Nigeria</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 bg-glass rounded-3xl p-8 border border-white/10"
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 max-w-sm mb-6">
                    Thank you for reaching out. Our team will get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    className="bg-white text-black hover:bg-white/90 rounded-full px-6"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputBase + ' pl-10'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputBase + ' pl-10'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 ..."
                        className={inputBase + ' pl-10'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Address <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                        placeholder="City, State, Country"
                        className={inputBase + ' pl-10'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Comments</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-white/30" />
                      <textarea
                        name="comments"
                        rows={4}
                        value={form.comments}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry or project..."
                        className={inputBase + ' pl-10 resize-none'}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 text-base font-semibold transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-white/30 text-xs text-center">
                    Your details are securely recorded. We never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
