/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Instagram, CheckCircle2, PlayCircle, Sparkles, ChevronRight, ChevronDown, HelpCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../gtag';

const cases = [
  {
    id: 1,
    category: 'Lente de Contato',
    imageAfter: '/lente1.png',
  },
  {
    id: 2,
    category: 'Lente de Contato',
    imageAfter: '/lente2.png',
  },
  {
    id: 3,
    category: 'Prótese Protocolo',
    imageAfter: '/protocolo.png',
  },
  {
    id: 4,
    category: 'Transformação com Coroas em Porcelana',
    imageAfter: '/reabilitacao.png',
  }
].sort((a, b) => a.category.localeCompare(b.category));

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto border-b border-border">
        <div className="flex flex-col">
          <span className="font-display text-2xl tracking-tighter text-text uppercase">Dra. Carina Corneta</span>
          <span className="text-[10px] sm:text-xs tracking-[0.05em] font-semibold text-accent max-w-xs sm:max-w-md pt-1">
            Dentista em São Carlos especializada em Reabilitação Oral, Implantes, Próteses e Estética Dental.
          </span>
        </div>
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-bold">
          <Link to="/procedimentos" className="hover:text-accent transition-colors">Procedimentos</Link>
          <Link to="/casos-clinicos" className="hover:text-accent transition-colors">Casos Clínicos</Link>
          <Link to="/contato" className="hover:text-accent transition-colors">Contato</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: Intro & Call to Action */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8 order-2 lg:order-1 pt-4 lg:pt-8"
            >
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-border rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-muted italic">Consultório Odontológico em São Carlos/SP</span>
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.6rem] font-display leading-[1.12] tracking-tight text-brand-navy">
                  Dentista em São Carlos <br />
                  Prótese e Clareamento <br />
                  <span className="text-accent italic font-light">com Excelência</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed font-light border-l-2 border-accent/20 pl-6">
                  Se você teme um resultado artificial, está no lugar certo. Valorizamos sua melhor essência através de próteses de alta precisão e clareamento dental personalizado, planejados sob medida para o seu rosto.
                </p>

                {/* Micro-Trust Badges for CRO (Google Ads) */}
                <div className="flex flex-wrap gap-y-2 gap-x-6 pt-2 text-xs font-medium text-brand-navy/90">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Estética Natural</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Formação UNICAMP</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>+10 anos de experiência</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/5516996300633" 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={() => trackWhatsAppClick('hero_button')}
                    className="px-8 py-5 bg-brand-navy text-white rounded-lg font-bold tracking-widest uppercase text-[10px] hover:bg-brand-navy/90 transition-all flex items-center shadow-2xl shadow-brand-navy/20 active:scale-[0.98]"
                  >
                    Falar no WhatsApp e Agendar <span className="ml-3 w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  </a>
                  <Link to="/procedimentos" className="px-8 py-5 border border-accent/40 text-accent rounded-lg font-bold tracking-widest uppercase text-[10px] hover:bg-accent hover:text-white transition-all text-center flex items-center">
                    Ver Procedimentos
                  </Link>
                </div>
                <p className="text-xs text-muted/80 pl-1 font-light italic">
                  * Clique acima para falar diretamente conosco. Agendamento simples em menos de 2 minutos.
                </p>
              </div>
            </motion.div>

            {/* Column 2: Specialist Profile */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="lg:col-span-5 w-full order-1 lg:order-2 space-y-8"
            >
              <div className="relative group max-w-md mx-auto lg:ml-auto">
                <div className="aspect-[4/5] rounded-[2.5rem] border border-accent/20 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative z-10 bg-brand-navy/5">
                  <img 
                    src="/dra_carina_corneta.png" 
                    alt="Dra. Carina Corneta" 
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent text-white">
                    <p className="font-display text-2xl mb-1">Dra. Carina Corneta</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-accent font-bold">Resgatando sua melhor essência</p>
                  </div>
                </div>
                
                {/* Decorative Accents */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-navy/10 rounded-full blur-3xl -z-10"></div>
                
                {/* Floating CRO Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-xl z-20 border border-border whitespace-nowrap">
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-navy">CROSP 113657</p>
                </div>
              </div>

              {/* Advanced Bio Card - Repositioned Below Photo */}
              <div className="bg-white/60 backdrop-blur-md border border-accent/10 rounded-2xl p-8 max-w-md mx-auto lg:ml-auto relative group hover:border-accent/30 transition-all shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">Sua Especialista</p>
                      <h3 className="text-2xl font-display text-brand-navy italic">Dra. Carina Corneta - Reabilitação Oral e Prótese</h3>
                    </div>
                    <div className="space-y-4 text-sm text-muted leading-relaxed font-light">
                      <p>
                        Cirurgiã-dentista formada pela <span className="font-semibold text-brand-navy underline decoration-accent/30 underline-offset-4">Unicamp</span>, especialista em reabilitação oral, próteses dentárias, coroas em porcelana, lentes de contato dental e estética do sorriso em São Carlos/SP.
                      </p>
                      <p>
                        Com mais de <span className="font-semibold text-brand-navy italic">10 anos de experiência</span>, dedica-se a criar sorrisos naturais, longe de padrões artificiais, através de um planejamento personalizado e cuidadoso.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 font-display italic text-brand-navy border-l border-border pl-6">
                    <span className="text-3xl">10+</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold not-italic text-accent">Anos de <br/>Carreira</span>
                  </div>
                </div>
              </div>

              {/* Procedures Image - Mobile Only */}
              <div className="block lg:hidden mt-8 max-w-md mx-auto w-full">
                <div className="bg-white border border-accent/15 rounded-2xl overflow-hidden relative group hover:border-accent/40 transition-all shadow-lg shadow-brand-navy/5">
                  <div className="relative overflow-hidden w-full">
                    <img 
                      src="/capa_meu_negocio.png" 
                      alt="Procedimentos Clínicos - Dra. Carina Corneta" 
                      className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Procedures Image - Desktop Only */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block mt-20 max-w-4xl mx-auto w-full px-4"
          >
            <div className="bg-white border border-accent/15 rounded-3xl overflow-hidden relative group hover:border-accent/40 transition-all shadow-xl shadow-brand-navy/5">
              <div className="relative overflow-hidden w-full">
                <img 
                  src="/capa_meu_negocio.png" 
                  alt="Procedimentos Clínicos - Dra. Carina Corneta" 
                  className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation Section */}
      <section className="py-24 px-8 bg-brand-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-5xl font-display text-white">Nosso Consultório Odontológico em <span className="text-accent italic">São Carlos</span></h2>
             <p className="text-white/60 max-w-2xl mx-auto">Tecnologia avançada e um ambiente planejado para o seu máximo conforto em São Carlos.</p>
          </div>

          <div className="w-full aspect-video rounded-2xl border border-accent/30 overflow-hidden shadow-2xl relative group bg-black/20">
             <video 
                src="/clinic_video.mp4" 
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
             >
                Seu navegador não suporta vídeos.
             </video>
          </div>
        </div>
        {/* Background decorative element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Clinical Cases Section - Embedded for Home */}
      <section className="py-24 px-8 bg-white overflow-hidden" id="casos">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-4 h-4" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Transformações Reais</p>
              </div>
              <h2 className="text-4xl md:text-6xl font-display text-brand-navy">
                Casos Clínicos de <span className="text-accent italic">Lentes e Próteses</span>
              </h2>
              <p className="text-muted max-w-xl font-light">
                Conheça alguns dos resultados que alcançamos através de um planejamento personalizado e humanizado.
              </p>
            </div>
            <Link 
              to="/casos-clinicos" 
              className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-accent transition-colors"
            >
              Ver galeria completa
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cases.map((c, idx) => (
              <motion.div 
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group space-y-4"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-sm bg-brand-navy/5">
                  <img 
                    src={c.imageAfter} 
                    alt={c.category} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-navy text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {c.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile direct CTA for cases */}
          <div className="md:hidden pt-4">
            <Link 
              to="/casos-clinicos" 
              className="w-full flex items-center justify-center gap-3 py-4 border border-accent/20 rounded-xl text-[10px] font-bold uppercase tracking-widest text-accent hover:bg-accent/5 transition-all"
            >
              Ver todos os resultados
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Coroas em Porcelana em São Carlos */}
      <section className="py-24 px-8 bg-brand-navy text-white relative overflow-hidden border-t border-accent/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Máxima Resistência e Estereotomia Estética</span>
              <h2 className="text-4xl md:text-5xl font-display leading-tight">
                Coroas em Porcelana <br />
                <span className="text-accent italic font-light">em São Carlos</span>
              </h2>
              <p className="text-white/80 font-light text-lg leading-relaxed max-w-xl">
                Recuperação de dentes fraturados, desgastados ou comprometidos com coroas de porcelana altamente estéticas e resistentes. Devolvemos a harmonia e o prazer de mastigar com modernos materiais livres de metal.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 font-light">
                    <strong className="text-white font-medium">Livre de metal (Metal-free):</strong> Coroas de altíssima fidelidade estética e biocompatibilidade, ideais para se fundirem perfeitamente aos seus dentes naturais.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 font-light">
                    <strong className="text-white font-medium">Ajuste de altíssima precisão:</strong> Planejamento focado na naturalidade com laboratórios de prótese artesanal de alto nível.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="https://wa.me/5516996300633" 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={() => trackWhatsAppClick('porcelain_crowns_section')}
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-bold tracking-widest uppercase text-[10px] transition-all inline-flex items-center active:scale-95"
                >
                  Consultar sobre Coroas de Porcelana <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-accent/20 shadow-2xl relative bg-white/5">
                <img 
                  src="/reabilitacao.png" 
                  alt="Tratamento com Coroa em Porcelana em São Carlos" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-brand-navy/95 text-accent text-[9px] font-bold uppercase tracking-widest rounded-full border border-accent/30 shadow-sm animate-pulse">
                    Caso Realizado
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10"></div>
      </section>

      {/* Info Grid - Updated Style with optimized SEO layout */}
      <section className="bg-white/50 py-24 px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">REABILITAÇÃO E ESTÉTICA</span>
            <h2 className="text-3xl md:text-5xl font-display text-brand-navy leading-tight">
              Estética Dental, Coroas em Porcelana e Reabilitação Oral em São Carlos
            </h2>
            <p className="text-base md:text-lg text-muted font-light max-w-2xl mx-auto leading-relaxed pt-2">
              Tratamentos personalizados para recuperar dentes desgastados, quebrados ou comprometidos, devolvendo função, conforto e estética natural.
            </p>
            
            {/* Texto forte para indexação no Google de forma elegante */}
            <p className="text-xs text-muted/65 max-w-2xl mx-auto leading-relaxed pt-3 italic font-light border-t border-border/40 mt-4">
              <strong>Tratamentos odontológicos em São Carlos:</strong> implantes dentários, próteses fixas e removíveis, coroas em porcelana, lentes de contato dental, clareamento dental, restaurações estéticas e tratamento do bruxismo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Lentes de Contato Dental', 
                badge: 'Procedimento Premium',
                desc: 'Laminados ultrafinos em porcelana que transformam o sorriso de forma rápida, segura e natural. Indicadas para corrigir cor, formato e pequenos desalinhamentos.' 
              },
              { 
                title: 'Seu Tratamento Personalizado', 
                badge: 'O MELHOR PARA VOCÊ',
                desc: 'Entregamos um serviço exclusivo baseado em sua necessidade. Buscamos ouvir as queixas e desejos do paciente para, combinado com nossa expertise, gerar a melhor entrega para você.' 
              },
              { 
                title: 'Recupere sua Função e Estética', 
                badge: 'VOLTE A SORRIR E COMER',
                desc: 'Nossa missão é te fazer sorrir e voltar a ter uma mastigação satisfatória, devolvendo a confiança e o prazer em cada momento da sua vida.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-border rounded-xl hover:border-accent transition-all shadow-sm group">
                <div className="badge border border-accent/20 text-accent mb-4 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-accent/5 inline-block">{item.badge}</div>
                <h3 className="text-xl font-display mb-3 text-brand-navy group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
