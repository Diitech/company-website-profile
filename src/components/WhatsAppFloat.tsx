import { MessageCircle } from "lucide-react";

const WHATSAPP = "2348158484621";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi%20Dmultichoice`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60]"
    >
      <span className="relative block">
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20" />
        <span
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Chat Now"
        >
          <MessageCircle className="w-6 h-6" />
        </span>
      </span>
      <span className="sr-only">Chat Now</span>
    </a>
  );
}
