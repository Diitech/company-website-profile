import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Package, GraduationCap, Monitor, Handshake, Building } from 'lucide-react';

const sourcingProofs = [
  {
    title: 'Factory Sourcing in China',
    description: 'Our team meeting with manufacturers to inspect product quality and negotiate pricing.',
    image: '/sourcing-1.jpg',
  },
  {
    title: 'Quality Control Inspection',
    description: 'On-site verification of product specifications before shipment.',
    image: '/sourcing-2.jpg',
  },
  {
    title: 'International Shipping',
    description: 'Coordinating logistics from global ports to Nigeria.',
    image: '/shipping.jpg',
  },
  {
    title: 'Goods Unboxing & Inspection',
    description: 'Verifying imported electronics and gadgets upon arrival.',
    image: '/goods-unboxing.jpg',
  },
  {
    title: 'Factory Machine Delivered',
    description: 'Industrial machinery successfully delivered to Nigerian factory.',
    image: '/factory-machine.jpg',
  },
  {
    title: 'Client Meeting in Nigeria',
    description: 'Our sourcing agent discussing requirements with local client.',
    image: '/agent-meeting.jpg',
  },
];

const whatsappProofs = [
  {
    title: 'Website Project Approval',
    description: 'Client expressing satisfaction with website development work.',
    image: '/whatsapp-1.jpg',
  },
  {
    title: 'Shipping Fee Payment',
    description: 'Payment confirmation for international shipping services.',
    image: '/whatsapp-2.jpg',
  },
  {
    title: 'Proposal Accepted',
    description: 'Client agreeing to project terms and pricing.',
    image: '/whatsapp-3.jpg',
  },
  {
    title: 'Factory Machine Order',
    description: 'Client confirming industrial equipment purchase and delivery timeline.',
    image: '/whatsapp-machine.jpg',
  },
  {
    title: 'Hotel Website Project',
    description: 'Hotel owner approving website design and OTA integration.',
    image: '/whatsapp-hotel.jpg',
  },
];

const paymentProofs = [
  {
    title: 'WeChat Payment',
    description: 'Chinese supplier payment via WeChat Pay.',
    image: '/wechat-payment.jpg',
  },
  {
    title: 'Alipay Transaction History',
    description: 'Multiple successful transactions with Chinese suppliers.',
    image: '/alipay-history.jpg',
  },
  {
    title: 'Nigeria Bank Transfer',
    description: 'GTBank transfer confirmation for services rendered.',
    image: '/bank-transfer.jpg',
  },
];

const deliveryProofs = [
  {
    title: 'Happy Customer with Delivered Goods',
    description: 'Client selfie showing received packages from international sourcing.',
    image: '/delivery-selfie.jpg',
  },
  {
    title: 'Professional Website Delivered',
    description: 'Modern responsive website built for client.',
    image: '/website-work.jpg',
  },
];

const conferenceProofs = [
  {
    title: 'Hotel Product Proposal Meeting',
    description: 'Conference hall presentation for hospitality digital transformation.',
    image: '/conference-meeting.jpg',
  },
];

const trainingProofs = [
  {
    title: 'Digital Skills Training Session',
    description: 'Students learning web development and digital skills in our training center.',
    image: '/student-training.jpg',
  },
  {
    title: 'Import/Export Training',
    description: 'Professional training on international trade and sourcing procedures.',
    image: '/import-training.jpg',
  },
  {
    title: 'Online Coding Bootcamp',
    description: 'Virtual learning session with students from across Nigeria.',
    image: '/online-class-1.jpg',
  },
  {
    title: 'Digital Marketing Webinar',
    description: 'Remote training on SEO, content creation, and social media strategies.',
    image: '/online-class-2.jpg',
  },
  {
    title: 'Certificate Ceremony',
    description: 'Graduates receiving certificates after completing training programs.',
    image: '/certificate-ceremony.jpg',
  },
  {
    title: 'Training Completion',
    description: 'Proud graduate with certificate after completing our digital skills program.',
    image: '/student-testimonial.jpg',
  },
];

export function Proof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="proof" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
            Real Proof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            See Our Work in Action
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real images from our sourcing trips, client feedback, payment confirmations, 
            delivered goods, training sessions, and business meetings. This is the Dmultichoice difference.
          </p>
        </motion.div>

        {/* Sourcing & Procurement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Sourcing & Procurement</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sourcingProofs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Client Feedback</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {whatsappProofs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Proofs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Handshake className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Payment Confirmations</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {paymentProofs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Meetings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Building className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Business Meetings</h3>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {conferenceProofs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Delivered Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Delivered Projects & Goods</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {deliveryProofs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training & Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Training & Development</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingProofs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-glass">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
