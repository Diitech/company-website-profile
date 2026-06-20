import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import {
  User, Mail, Phone, Building, MapPin, Briefcase, GraduationCap, Send,
  CheckCircle2, ArrowRight, Shield, Clock, Globe, Star, ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

/* ─── UTILITIES ─── */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ─── FLOATING ORBS ─── */
function FloatingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[150px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

/* ─── ANIMATED INPUT ─── */
function AnimatedInput({
  id,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  delay = 0,
}: {
  id: string;
  label: string;
  icon: React.ElementType;
  type?: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  delay?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
    >
      <Label
        htmlFor={id}
        className={cx(
          "absolute left-12 transition-all duration-300 pointer-events-none z-10",
          isFocused || hasValue
            ? "-top-2.5 text-[11px] text-blue-400 bg-[#030305] px-2"
            : "top-3.5 text-sm text-white/40"
        )}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </Label>

      <div className={cx(
        "relative rounded-xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-300",
        isFocused
          ? "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          : "border-white/[0.08] hover:border-white/[0.12]"
      )}>
        <div className="absolute left-4 top-3.5 pointer-events-none">
          <Icon className={cx("w-5 h-5 transition-colors duration-300", isFocused ? "text-blue-400" : "text-white/20")} />
        </div>

        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent border-0 text-white placeholder:text-transparent pl-12 pr-4 py-3.5 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={placeholder}
          required={required}
        />

        {hasValue && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-4 top-3.5"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400/60" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── ANIMATED SELECT ─── */
function AnimatedSelect({
  label,
  icon: Icon,
  options,
  placeholder,
  required = false,
  value,
  onChange,
  delay = 0,
}: {
  label: string;
  icon: React.ElementType;
  options: { value: string; label: string }[];
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (val: string) => void;
  delay?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  // Use isFocused to avoid unused variable warning
  const focusClass = isFocused || isOpen ? "text-blue-400" : "text-white/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
    >
      <Label
        className={cx(
          "absolute left-12 transition-all duration-300 pointer-events-none z-10",
          isOpen || hasValue
            ? "-top-2.5 text-[11px] text-blue-400 bg-[#030305] px-2"
            : "top-3.5 text-sm text-white/40"
        )}
      >
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </Label>

      <div
        className={cx(
          "relative rounded-xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-300 cursor-pointer",
          isOpen
            ? "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            : "border-white/[0.08] hover:border-white/[0.12]"
        )}
        onClick={() => { setIsOpen(!isOpen); setIsFocused(true); }}
      >
        <div className="absolute left-4 top-3.5 pointer-events-none">
          <Icon className={cx("w-5 h-5 transition-colors duration-300", focusClass)} />
        </div>

        <div className="pl-12 pr-10 py-3.5 text-sm">
          <span className={hasValue ? "text-white" : "text-white/30"}>
            {hasValue ? options.find((o) => o.value === value)?.label || value : placeholder}
          </span>
        </div>

        <ChevronDown className={cx("absolute right-4 top-3.5 w-5 h-5 transition-all duration-300", isOpen ? "rotate-180 text-blue-400" : "text-white/20")} />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-white/[0.08] bg-[#0a0f1c]/95 backdrop-blur-xl overflow-hidden z-50 shadow-2xl"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => { onChange(option.value); setIsOpen(false); setIsFocused(false); }}
                  className={cx(
                    "w-full px-4 py-3 text-left text-sm transition-colors",
                    value === option.value
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => { setIsOpen(false); setIsFocused(false); }} />
      )}
    </motion.div>
  );
}

/* ─── ANIMATED TEXTAREA ─── */
function AnimatedTextarea({
  label,
  placeholder,
  value,
  onChange,
  delay = 0,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  delay?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
    >
      <Label
        className={cx(
          "absolute left-4 transition-all duration-300 pointer-events-none z-10",
          isFocused || hasValue
            ? "-top-2.5 text-[11px] text-blue-400 bg-[#030305] px-2"
            : "top-3.5 text-sm text-white/40"
        )}
      >
        {label}
      </Label>

      <div className={cx(
        "relative rounded-xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-300",
        isFocused
          ? "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          : "border-white/[0.08] hover:border-white/[0.12]"
      )}>
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent border-0 text-white placeholder:text-transparent px-4 py-3.5 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[120px]"
          placeholder={placeholder}
        />
      </div>
    </motion.div>
  );
}

/* ─── TRUST BADGE ─── */
function TrustBadge({ icon: Icon, label, delay }: { icon: React.ElementType; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-2 text-white/40 text-xs"
    >
      <Icon className="w-3.5 h-3.5 text-emerald-400/60" />
      <span>{label}</span>
    </motion.div>
  );
}

/* ─── SUCCESS STATE ─── */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-3xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-xl p-12 lg:p-16 text-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />

      <div className="relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-400" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Registration Successful!
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/50 mb-8 max-w-md mx-auto"
        >
          Thank you for registering. Our team will review your details and contact you within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-white/60">Response within 24h</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/60">Data securely encrypted</span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 text-sm font-medium"
        >
          <ArrowRight className="w-4 h-4" />
          Submit Another Registration
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─── MAIN FORM ─── */
export function RegistrationForm() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    service: "",
    training: "",
    message: "",
  });

  const updateField = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceOptions = [
    { value: "website-development", label: "Website Development" },
    { value: "ota-management", label: "OTA Management" },
    { value: "social-media", label: "Social Media Management" },
    { value: "ai-automation", label: "AI & Automation" },
    { value: "international-sourcing", label: "International Sourcing" },
    { value: "supplier-verification", label: "Supplier Verification" },
    { value: "digital-training", label: "Digital Skills Training" },
    { value: "import-export-training", label: "Import/Export Training" },
  ];

  const trainingOptions = [
    { value: "none", label: "Not Applicable" },
    { value: "digital-skills", label: "Digital Skills Mastery" },
    { value: "import-export", label: "Import/Export Training" },
    { value: "hotel-management", label: "Hotel Digital Management" },
  ];

  return (
    <section id="register" className="py-24 lg:py-40 relative overflow-hidden bg-[#030305]">
      {/* Background */}
      <FloatingOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.015)_0%,_transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6"
          >
            <Star className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">Get Started</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Register for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Fill out the form below and our team will get in touch with you within 24 hours.
          </motion.p>
        </div>

        {/* ── FORM ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessState key="success" onReset={() => { setSubmitted(false); setFormData({ fullName: "", email: "", phone: "", company: "", location: "", service: "", training: "", message: "" }); }} />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="relative rounded-3xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl p-8 lg:p-12 overflow-hidden"
              >
                {/* Subtle glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative">
                  {/* Form grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <AnimatedInput
                      id="fullname"
                      label="Full Name"
                      icon={User}
                      placeholder="John Doe"
                      required
                      value={formData.fullName}
                      onChange={(v) => updateField("fullName", v)}
                      delay={0.1}
                    />

                    <AnimatedInput
                      id="email"
                      label="Email Address"
                      icon={Mail}
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(v) => updateField("email", v)}
                      delay={0.15}
                    />

                    <AnimatedInput
                      id="phone"
                      label="Phone Number"
                      icon={Phone}
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      required
                      value={formData.phone}
                      onChange={(v) => updateField("phone", v)}
                      delay={0.2}
                    />

                    <AnimatedInput
                      id="company"
                      label="Company / Business"
                      icon={Building}
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(v) => updateField("company", v)}
                      delay={0.25}
                    />

                    <AnimatedInput
                      id="location"
                      label="Location"
                      icon={MapPin}
                      placeholder="City, State, Country"
                      required
                      value={formData.location}
                      onChange={(v) => updateField("location", v)}
                      delay={0.3}
                    />

                    <AnimatedSelect
                      label="Service Interested In"
                      icon={Briefcase}
                      options={serviceOptions}
                      placeholder="Select a service"
                      required
                      value={formData.service}
                      onChange={(v) => updateField("service", v)}
                      delay={0.35}
                    />

                    <div className="md:col-span-2">
                      <AnimatedSelect
                        label="Training Program"
                        icon={GraduationCap}
                        options={trainingOptions}
                        placeholder="Select training program (optional)"
                        value={formData.training}
                        onChange={(v) => updateField("training", v)}
                        delay={0.4}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <AnimatedTextarea
                        label="Additional Message"
                        placeholder="Tell us more about your project requirements, timeline, and budget..."
                        value={formData.message}
                        onChange={(v) => updateField("message", v)}
                        delay={0.45}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-[#030305] hover:bg-white/90 rounded-full py-7 font-bold text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Registration
                    </Button>
                  </motion.div>

                  {/* Trust badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mt-6"
                  >
                    <TrustBadge icon={Shield} label="SSL Encrypted" delay={0.6} />
                    <TrustBadge icon={Clock} label="24h Response" delay={0.65} />
                    <TrustBadge icon={Globe} label="Global Service" delay={0.7} />
                    <TrustBadge icon={Star} label="100+ Clients" delay={0.75} />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-white/25 text-xs text-center mt-6"
                  >
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </motion.p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
