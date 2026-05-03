/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Procedures() {
  const allProcedures = [
    {
      title: 'Lentes de Contato Dental',
      category: 'Estética',
      description: 'Lâminas de porcelana ultra-finas que corrigem cor, formato e alinhamento com o máximo de naturalidade.',
      details: ['Textura idêntica ao esmalte', 'Resistência a manchas', 'Longevidade superior'],
      icon: <Sparkles className="w-6 h-6 text-accent" />
    },
    {
      title: 'Reabilitação Oral',
      category: 'Função',
      description: 'Tratamentos complexos para devolver a função mastigatória e o equilíbrio da saúde bucal.',
      details: ['Planejamento digital', 'Abordagem multidisciplinar', 'Conforto garantido'],
      icon: <ShieldCheck className="w-6 h-6 text-accent" />
    },
    {
      title: 'Clareamento Premium',
      category: 'Estética',
      description: 'Protocolos personalizados para um sorriso radiante sem causar sensibilidade excessiva.',
      details: ['Resultados duradouros', 'Acompanhamento clínico', 'Gel de alta performance'],
      icon: <Heart className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <div className="min-h-screen bg-bg text-brand-navy">
      <nav className="p-6 md:p-8 flex items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center text-xs uppercase tracking-widest font-bold group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar
        </Link>
      </nav>

      <header className="py-20 px-8 text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-6xl font-display">Nossos <span className="text-accent italic">Procedimentos</span></h1>
        <p className="text-muted leading-relaxed">Cada tratamento é planejado de forma individualizada, unindo ciência e arte para resultados excepcionais em São Carlos.</p>
      </header>

      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProcedures.map((proc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent transition-all group"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-brand-navy/5 rounded-xl group-hover:bg-accent/10 transition-colors">
                  {proc.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent/60">{proc.category}</span>
              </div>
              <h3 className="text-2xl font-display mb-4">{proc.title}</h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">{proc.description}</p>
              <ul className="space-y-3 mb-8">
                {proc.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center text-xs font-medium text-brand-navy/80">
                    <CheckCircle2 className="w-4 h-4 text-accent mr-2" /> {detail}
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/5516996300633" 
                target="_blank" 
                rel="noreferrer"
                className="block text-center py-3 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-accent transition-colors"
              >
                Solicitar Informações
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
