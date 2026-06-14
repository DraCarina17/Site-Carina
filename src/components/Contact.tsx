/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Mail, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../gtag';

export default function Contact() {
  return (
    <div className="min-h-screen bg-bg text-brand-navy">
      <nav className="p-6 md:p-8 flex items-center justify-between max-w-7xl mx-auto border-b border-border">
        <Link to="/" className="flex items-center text-xs uppercase tracking-widest font-bold group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Home
        </Link>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold">
          <Link to="/procedimentos" className="hover:text-accent transition-colors">Procedimentos</Link>
          <Link to="/casos-clinicos" className="hover:text-accent transition-colors">Casos Clínicos</Link>
          <Link to="/contato" className="text-accent underline underline-offset-4">Contato</Link>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display">Fale Conosco | <span className="text-accent italic">Dentista em São Carlos</span></h1>
              <p className="text-muted leading-relaxed max-w-lg">
                Seu novo sorriso começa com uma conversa. Escolha o canal de sua preferência para agendar sua avaliação personalizada com a Dra. Carina Corneta.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://wa.me/5516996300633" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => trackWhatsAppClick('contact_page')}
                className="flex items-center p-6 border border-border bg-white rounded-2xl hover:border-accent transition-all group"
              >
                <div className="p-4 bg-green-500/10 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Agendar avaliação personalizada</p>
                  <p className="text-lg font-semibold">(16) 99630-0633</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/dra.carinacorneta" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center p-6 border border-border bg-white rounded-2xl hover:border-accent transition-all group"
              >
                <div className="p-4 bg-brand-navy/5 text-brand-navy rounded-xl group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Acompanhe nosso trabalho</p>
                  <p className="text-lg font-semibold">@dra.carinacorneta</p>
                </div>
              </a>
            </div>

            <div className="pt-8 space-y-4 border-t border-border">
              <div className="flex items-center text-muted">
                <MapPin className="w-5 h-5 mr-4 text-accent" />
                <span className="text-sm">Rua Marechal Deodoro, 2722 - Centro, São Carlos/SP</span>
              </div>
              <div className="flex items-center text-muted">
                <Mail className="w-5 h-5 mr-4 text-accent" />
                <span className="text-sm">dracarinacorneta@gmail.com</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-card rounded-2xl border border-border overflow-hidden shadow-2xl relative"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.418730991316!2d-47.8841457!3d-22.0048682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b870cd70df57e3%3A0x7d0e4086622ec92!2sR.%20Mal.%20Deodoro%2C%202722%20-%20Centro%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-201!5e0!3m2!1spt-BR!2sbr!4v1714778000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
             ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
