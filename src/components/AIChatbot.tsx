import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, ArrowRight, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = "2348158484621";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

let msgCounter = 0;
function nextId(): string {
  msgCounter += 1;
  return msgCounter.toString();
}

const quickReplies = [
  { text: "Tell me about your services", response: "We offer 9 core services: Website Development, OTA Management, Social Media Management, AI & Automation, Digital Growth Strategy, International Sourcing, Supplier Verification, and Online Training. Which interests you?" },
  { text: "I want to import products", response: "Great! We source from China, UK, Turkey, Italy, USA, UAE, and more. All shipments are insured and customs-cleared. Would you like to discuss your specific product needs on WhatsApp?" },
  { text: "Website development pricing", response: "Our packages start from basic 5-page sites to full enterprise e-commerce solutions. Let's discuss your project requirements in detail — want to chat on WhatsApp?" },
  { text: "Talk to a human", response: "Sure! I'll connect you with our team directly." },
];

const responses: Record<string, string> = {
  default: "Hi! I'm the DMULTICHOICE assistant. I can help you with information about our services, pricing, and more. Or you can chat directly with our team on WhatsApp!",
  hello: "Hello! Welcome to DMULTICHOICE. How can I help you today?",
  hi: "Hi there! 👋 How can I assist you with your digital or procurement needs?",
  pricing: "Our pricing varies by service. Website development starts from ₦150,000, training programs from ₦100,000, and sourcing commissions start at 5%. Want specific details?",
  website: "We build modern, responsive websites using React, Next.js, and more. Delivery guaranteed within 2 weeks. Includes SEO, mobile optimization, and CMS integration.",
  sourcing: "We source products from verified suppliers across 8 countries. Full service includes: supplier verification, price negotiation, quality inspection, shipping, and customs clearance.",
  training: "We offer 3 programs: Digital Skills Mastery (12 wks, ₦150k), Import/Export Training (8 wks, ₦120k), and Hotel Digital Management (6 wks, ₦100k). All include certification.",
  contact: "You can reach us at Deliamutiempire@gmail.com or call +234 815 848 4621. Our team is available Mon-Fri, 9AM-6PM.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('hello') || lower.includes('hi ') || lower === 'hi') return responses.hello;
  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) return responses.pricing;
  if (lower.includes('website') || lower.includes('web dev') || lower.includes('site')) return responses.website;
  if (lower.includes('source') || lower.includes('import') || lower.includes('procurement')) return responses.sourcing;
  if (lower.includes('train') || lower.includes('course') || lower.includes('class') || lower.includes('learn')) return responses.training;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('call')) return responses.contact;
  return responses.default;
}

const TYPING_DELAY = 1100;

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), text: responses.default, isUser: false },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { id: nextId(), text, isUser: true }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { id: nextId(), text: getResponse(text), isUser: false }]);
      setIsTyping(false);
    }, TYPING_DELAY);
  };

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping bg-blue-400/20" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-40 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-8rem)] rounded-2xl bg-[#0a0a0f]/98 backdrop-blur-2xl border border-white/[0.08] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="shrink-0 px-5 py-4 border-b border-white/[0.06] bg-gradient-to-r from-blue-500/10 to-cyan-500/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/[0.08] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white">DMULTICHOICE AI</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400/80">Online</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.isUser
                        ? 'bg-blue-500/20 border border-blue-500/20 text-white/90'
                        : 'bg-white/[0.04] border border-white/[0.06] text-white/70'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl px-4 py-3">
                    <div className="flex gap-1.5">
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-white/30"
                      />
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                        className="w-2 h-2 rounded-full bg-white/30"
                      />
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                        className="w-2 h-2 rounded-full bg-white/30"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="shrink-0 px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((qr) => (
                    <button
                      key={qr.text}
                      onClick={() => handleSend(qr.text)}
                      className="text-[10px] px-2.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all"
                    >
                      {qr.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="shrink-0 px-4 py-3 border-t border-white/[0.06]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppRedirect}
                className="mt-2 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[11px] font-medium hover:bg-[#25D366]/15 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat directly on WhatsApp
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
