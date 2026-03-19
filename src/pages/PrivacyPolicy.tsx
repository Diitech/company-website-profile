import { motion } from 'framer-motion';

function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-white/60 mb-4">
          At DMULTICHOICE, we value your privacy and are committed to protecting your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="text-white/60">
          We may collect personal data such as your name, email, phone number, and usage data when you interact with our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="text-white/60">
          Your data is used to improve our services, respond to inquiries, and provide better user experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Security</h2>
        <p className="text-white/60">
          We implement security measures to protect your information from unauthorized access.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="text-white/60">
          If you have any questions, contact us via our contact page.
        </p>
      </motion.div>
    </div>
  );
}

export default PrivacyPolicy;