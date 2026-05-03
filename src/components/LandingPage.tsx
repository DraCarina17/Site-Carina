/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Instagram, CheckCircle2, PlayCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto border-b border-border">
        <div className="flex flex-col">
          <span className="font-display text-2xl tracking-tighter text-text uppercase">Dra. Carina Corneta</span>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-accent">Reabilitação Oral & Estética Avançada</span>
        </div>
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-bold">
          <a href="#procedimentos" className="hover:text-accent transition-colors">Procedimentos</a>
          <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-10 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-lg shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted italic">Consultório Odontológico em São Carlos/SP</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] lg:-ml-1 text-brand-navy">
              Sorriso de <br />
              <span className="text-accent italic">Alta Performance</span>
            </h1>
            
            <p className="text-lg text-muted max-w-xl leading-relaxed font-light">
              Unimos a precisão do diagnóstico digital à arte da odontologia estética. Protocolos exclusivos para quem busca naturalidade e sofisticação em cada detalhe.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <a 
                href="https://wa.me/5516996300633" 
                target="_blank" 
                rel="noreferrer"
                className="px-10 py-5 bg-brand-navy text-white rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-brand-navy/90 transition-all flex items-center shadow-xl shadow-brand-navy/10"
              >
                Agende sua Consulta <PlayCircle className="ml-3 w-4 h-4 text-accent" />
              </a>
              <a href="#procedimentos" className="px-10 py-5 border border-accent text-accent rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-accent hover:text-white transition-all text-center">
                Ver Procedimentos
              </a>
            </div>
          </motion.div>

          {/* Persona Image - Empatia Intimista */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="flex-1 w-full lg:max-w-md order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl border border-accent/20 overflow-hidden shadow-2xl relative z-10 bg-brand-navy/5">
                <img 
                  src="/dra_carina.jpg" 
                  alt="Dra. Carina Corneta" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"; }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-navy/60 to-transparent text-white">
                  <p className="font-display text-xl">Dra. Carina Corneta</p>
                  <p className="text-[10px] tracking-widest uppercase text-accent font-bold">Cada detalhe planejado para o seu sorriso</p>
                </div>
              </div>
              {/* Artistic background blur */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 rotate-12"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-navy/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-24 px-8 bg-brand-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-5xl font-display text-white">Conheça nosso <span className="text-accent italic">Espaço</span></h2>
             <p className="text-white/60 max-w-2xl mx-auto">Tecnologia avançada e um ambiente planejado para o seu máximo conforto em São Carlos.</p>
          </div>

          <div className="w-full aspect-video rounded-2xl border border-accent/30 overflow-hidden shadow-2xl relative group bg-black/20">
             <video 
                src="/presentation_video.mp4" 
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1629909613654-28a3a7c4d459?q=80&w=2070&auto=format&fit=crop"
             >
                Seu navegador não suporta vídeos.
             </video>
          </div>
        </div>
        {/* Background decorative element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Info Grid - Updated Style */}
      <section className="bg-white/50 py-24 px-8 border-y border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Lentes de Contato Dental', desc: 'Sinta a excelência da porcelana em reproduzir a textura, translucidez e reflexão da luz natural do dente, garantindo estabilidade de cor e resistência superior.' },
            { title: 'Implantes Guiados', desc: 'Tecnologia 3D para cirurgias sem cortes e recuperação recorde.' },
            { title: 'Design Digital', desc: 'Planejamento virtual do seu novo sorriso antes do início.' }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white border border-border rounded-xl hover:border-accent transition-colors shadow-sm">
              <div className="badge border-accent/40 text-accent mb-4 px-2 py-0.5 rounded-full inline-block bg-accent/5">Procedimento Premium</div>
              <h3 className="text-xl font-display mb-3 text-brand-navy">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 flex flex-col items-center gap-10">
         <div className="flex gap-8">
            <a href="tel:16996300633" className="p-4 bg-white rounded-xl border border-border hover:border-accent text-brand-navy transition-all hover:-translate-y-1">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/dra.carinacorneta" target="_blank" rel="noreferrer" className="p-4 bg-white rounded-xl border border-border hover:border-accent text-brand-navy transition-all hover:-translate-y-1">
              <Instagram className="w-6 h-6" />
            </a>
         </div>
         <div className="text-center space-y-2">
           <p className="text-[10px] text-brand-navy uppercase tracking-[0.4em] font-bold">Dra. Carina Corneta | CRO-SP 12345</p>
           <p className="text-[10px] text-accent font-medium uppercase tracking-[0.2em]">Reabilitação Oral & Estética Avançada</p>
         </div>
      </footer>
    </div>
  );
}
