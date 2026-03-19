import { motion } from 'framer-motion';

function TermsConditions() {
  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="text-white/60 mb-4">
          By using this website, you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Website</h2>
        <p className="text-white/60">
          You agree to use this site only for lawful purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="text-white/60">
          All content on this website belongs to DMULTICHOICE and cannot be copied without permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="text-white/60">
          We are not liable for any damages resulting from the use of this website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes</h2>
        <p className="text-white/60">
          We may update these terms at any time without notice.
        </p>
      </motion.div>
    </div>
  );
}

export default TermsConditions;