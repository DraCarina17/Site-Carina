/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Mail, ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-bg text-brand-navy">
      <nav className="p-6 md:p-8 flex items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center text-xs uppercase tracking-widest font-bold group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar
        </Link>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display">Fale <span className="text-accent italic">Conosco</span></h1>
              <p className="text-muted leading-relaxed max-w-lg">
                Seu novo sorriso começa com uma conversa. Escolha o canal de sua preferência e agende sua avaliação com a Dra. Carina Corneta.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://wa.me/5516996300633" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center p-6 border border-border bg-white rounded-2xl hover:border-accent transition-all group"
              >
                <div className="p-4 bg-green-500/10 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="ml-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Agendamento via WhatsApp</p>
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
                <span className="text-sm">Rua [Endereço], São Carlos/SP</span>
              </div>
              <div className="flex items-center text-muted">
                <Mail className="w-5 h-5 mr-4 text-accent" />
                <span className="text-sm">contato@dracarinacorneta.com.br</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-card rounded-2xl border border-border overflow-hidden shadow-2xl relative"
          >
             {/* Map Placeholder or Clinic Photo */}
             <div className="absolute inset-0 bg-brand-navy/5 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-display text-2xl mb-4">Localização Privilegiada</h3>
                <p className="text-sm text-muted leading-relaxed">Atendimento exclusivo com hora marcada em ambiente planejado para o seu conforto.</p>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
