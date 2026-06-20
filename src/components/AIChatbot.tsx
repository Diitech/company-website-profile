import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';

const WA_NIGERIA = "2348158484621";
const WA_US = "19064302144";

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
  contact: "You can reach us at support@dmultichoice.com, call 🇳🇬 +234 815 848 4621 or 🇺🇸 +1 (906) 430-2144. Our team is available Mon-Fri, 9AM-6PM.",
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

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40"
      >
        {/* Hover label */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ delay: 0.4 }}
              className="absolute right-[4.25rem] top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0f]/90 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <span className="text-xs font-medium text-white/80">Ask our AI</span>
              <Sparkles className="w-3 h-3 text-blue-400" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI assistant"
          className="group relative w-14 h-14 rounded-full flex items-center justify-center"
        >
          {/* Rotating gradient ring */}
          {!isOpen && (
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[3px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #3B82F6, #06B6D4, #8B5CF6, #3B82F6)",
              }}
            />
          )}
          {/* Outer glow + ping */}
          <span className="absolute inset-0 rounded-full bg-blue-500/40 blur-xl group-hover:bg-blue-500/60 transition-colors" />
          {!isOpen && <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />}

          {/* Core */}
          <span className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-105 active:scale-95 transition-transform">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6 text-white" />
                </motion.span>
              ) : (
                <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Bot className="w-6 h-6 text-white" />
                </motion.span>
              )}
            </AnimatePresence>
            {/* Sparkle accent */}
            {!isOpen && <Sparkles className="absolute -top-1 -left-1 w-3.5 h-3.5 text-amber-300 animate-pulse" />}
          </span>

          {/* Notification badge */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-rose-500 border-2 border-[#030305] flex items-center justify-center text-[9px] font-bold text-white shadow">
              1
            </span>
          )}
        </button>
      </motion.div>

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
            {/* Animated gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" />

            {/* Header */}
            <div className="shrink-0 px-5 py-4 border-b border-white/[0.06] bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-cyan-500/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0a0a0f]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-white truncate">DMULTICHOICE Assistant</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[10px] text-white/50 truncate">AI support · Human chat available</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white transition-colors shrink-0"
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
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.isUser
                        ? 'rounded-2xl rounded-tr-sm bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-blue-500/20'
                        : 'rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.06] text-white/75'
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

              {/* WhatsApp CTA — Nigeria & US */}
              <div className="mt-2">
                <div className="flex items-center justify-center gap-1.5 text-[#25D366] text-[10px] font-medium mb-1.5">
                  <MessageCircle className="w-3 h-3" />
                  Chat directly on WhatsApp
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openWhatsApp(WA_NIGERIA)}
                    className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[11px] font-semibold hover:bg-[#25D366]/20 transition-colors"
                  >
                    🇳🇬 Nigeria
                  </button>
                  <button
                    onClick={() => openWhatsApp(WA_US)}
                    className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-[11px] font-semibold hover:bg-[#25D366]/20 transition-colors"
                  >
                    🇺🇸 USA
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
