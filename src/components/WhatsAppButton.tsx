import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../gtag';

export default function WhatsAppButton() {
  const whatsappNumber = "5516996300633"; // Número real extraído do Contact.tsx
  const message = encodeURIComponent("Olá Dra. Carina, gostaria de agendar uma consulta.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating_button')}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 group"
        id="whatsapp-floating-button"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        
        {/* Tooltip hint */}
        <div className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium border border-accent/20">
          Agendar avaliação personalizada
        </div>
      </motion.a>
    </div>
  );
}
