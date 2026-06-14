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
      title: 'Prótese Total',
      category: 'Reabilitação',
      description: 'Recuperação completa da estética e função para quem busca segurança e conforto ao sorrir e falar.',
      details: ['Estética personalizada', 'Ajuste anatômico preciso', 'Devolve a autoconfiança'],
      icon: <ShieldCheck className="w-6 h-6 text-accent" />
    },
    {
      title: 'Prótese Parcial Removível',
      category: 'Reabilitação',
      description: 'Solução eficiente para repor dentes ausentes, restabelecendo o equilíbrio e a mastigação.',
      details: ['Preservação dos dentes naturais', 'Estrutura leve e resistente', 'Harmonia visual'],
      icon: <CheckCircle2 className="w-6 h-6 text-accent" />
    },
    {
      title: 'Prótese sobre Implante',
      category: 'Inovação',
      description: 'A máxima estabilidade para o seu sorriso, com a sensação e aparência de dentes naturais fixos.',
      details: ['Fixação absoluta', 'Prevenção de perda óssea', 'Conforto total ao comer'],
      icon: <ShieldCheck className="w-6 h-6 text-accent" />
    },
    {
      title: 'Coroas em Porcelana',
      category: 'Restauração',
      description: 'Restaurações de alta resistência que devolvem a integridade e a beleza de dentes comprometidos.',
      details: ['Material biocompatível', 'Resistência superior', 'Adaptação perfeita'],
      icon: <Sparkles className="w-6 h-6 text-accent" />
    },
    {
      title: 'Clareamento',
      category: 'Estética',
      description: 'Protocolos seguros para remover pigmentações e devolver o brilho natural dos seus dentes.',
      details: ['Brilho renovado', 'Protocolo personalizado', 'Mínima sensibilidade'],
      icon: <Heart className="w-6 h-6 text-accent" />
    },
    {
      title: 'Odontologia Preventiva',
      category: 'Manutenção',
      description: 'O segredo da longevidade. Cuidado contínuo para evitar problemas complexos e manter a saúde em dia.',
      details: ['Limpeza técnica profunda', 'Diagnóstico precoce', 'Prevenção de doenças'],
      icon: <Heart className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <div className="min-h-screen bg-bg text-brand-navy">
      <nav className="p-6 md:p-8 flex items-center justify-between max-w-7xl mx-auto border-b border-border">
        <Link to="/" className="flex items-center text-xs uppercase tracking-widest font-bold group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Home
        </Link>
        <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold">
          <Link to="/procedimentos" className="text-accent underline underline-offset-4">Procedimentos</Link>
          <Link to="/casos-clinicos" className="hover:text-accent transition-colors">Casos Clínicos</Link>
          <Link to="/contato" className="hover:text-accent transition-colors">Contato</Link>
        </div>
      </nav>

      <header className="py-20 px-8 text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-6xl font-display">Tratamentos de Prótese e <span className="text-accent italic">Estética Dental em São Carlos</span></h1>
        <p className="text-muted leading-relaxed">Cada tratamento é planejado de forma individualizada, unindo ciência e arte para resultados excepcionais e recuperação total da sua auto estima e função.</p>
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
