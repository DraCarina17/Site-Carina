/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClinicalCases() {
  const cases = [
    // Placeholder cases to be populated soon
    {
      id: 1,
      title: 'Reabilitação Estética Total',
      category: 'Lentes de Contato',
      description: 'Transformação completa do sorriso utilizando lâminas de porcelana premium.',
      imageBefore: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Recuperação Funcional',
      category: 'Prótese sobre Implante',
      description: 'Devolvendo a segurança e o prazer de comer através de implantes estáveis.',
      imageBefore: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    }
  ];

  return (
    <div className="min-h-screen bg-bg text-brand-navy">
      <nav className="p-6 md:p-8 flex items-center justify-between max-w-7xl mx-auto border-b border-border">
        <Link to="/" className="flex items-center text-xs uppercase tracking-widest font-bold group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Home
        </Link>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold">
          <Link to="/procedimentos" className="hover:text-accent transition-colors">Procedimentos</Link>
          <Link to="/casos-clinicos" className="text-accent underline underline-offset-4">Casos Clínicos</Link>
          <Link to="/contato" className="hover:text-accent transition-colors">Contato</Link>
        </div>
      </nav>

      <header className="py-20 px-8 text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-6xl font-display">Galeria de <span className="text-accent italic">Transformações</span></h1>
        <p className="text-muted leading-relaxed">
          Resultados reais de pacientes que recuperaram a autoestima e a função através da Reabilitação Oral e Estética Avançada.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {cases.map((c, idx) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6 group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
                <img src={c.imageAfter} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                   <span className="px-3 py-1 bg-brand-navy/90 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">{c.category}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-display">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.description}</p>
              </div>

              <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="w-4 h-4 mr-2" /> Resultados que falam por si
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State / Coming Soon */}
        <div className="mt-20 p-20 border-2 border-dashed border-border rounded-3xl text-center">
            <ImageIcon className="w-12 h-12 text-border mx-auto mb-6" />
            <h3 className="text-xl font-display text-muted">Novos casos em breve</h3>
            <p className="text-xs text-muted/60 mt-2 uppercase tracking-widest">Aguardando novos dados para atualização</p>
        </div>
      </section>

      <footer className="py-20 px-8 border-t border-border flex flex-col items-center gap-4">
         <div className="text-center space-y-2">
           <p className="text-[10px] text-brand-navy uppercase tracking-[0.4em] font-bold">Dra. Carina Corneta | CROSP 113657</p>
           <p className="text-[10px] text-accent font-medium uppercase tracking-[0.2em]">Reabilitação Oral & Estética Avançada</p>
         </div>
      </footer>
    </div>
  );
}
