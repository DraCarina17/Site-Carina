/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Video, Phone, Instagram, ArrowRight } from 'lucide-react';

export default function Sitemap() {
  const routes = [
    { path: '/lp-video', name: 'Landing Page Principal', icon: <Video className="w-5 h-5" />, description: 'Página de conversão em produção.' },
    { path: '/contato', name: 'Canal de Contato', icon: <Phone className="w-5 h-5" />, description: 'Integração direta com WhatsApp Business.' },
  ];

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <header className="px-8 py-6 bg-card border-b border-border flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Hybrid Router Architect <span className="text-accent font-normal text-sm ml-2">v1.2.0</span></h1>
          <p className="text-xs text-muted">Ambiente de Preview: Roteamento Híbrido Ativo</p>
        </div>
        <div className="flex gap-2">
          <div className="badge badge-dev">HashRouter</div>
          <div className="badge badge-prod opacity-50">BrowserRouter</div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full"
        >
          <div className="bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-border bg-bg/30">
              <h3 className="text-[10px] text-muted uppercase font-bold tracking-[0.2em] mb-4">Estrutura do Projeto</h3>
              <div className="space-y-1">
                {['App.tsx', 'vite.config.ts', 'vercel.json', 'components/LandingPage.tsx'].map((file) => (
                  <div key={file} className="flex items-center gap-3 p-2 text-sm text-muted">
                    <span className="text-xs opacity-50">📄</span> {file}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-[10px] text-muted uppercase font-bold tracking-[0.2em]">Ponto de Entrada das Rotas</h3>
              {routes.map((route) => (
                <Link 
                  key={route.path} 
                  to={route.path}
                  className="group block p-4 rounded-lg bg-bg border border-border hover:border-accent transition-all duration-200"
                >
                  <div className="flex items-center">
                    <div className="p-2.5 bg-card rounded-md text-accent group-hover:scale-110 transition-transform">
                      {route.icon}
                    </div>
                    <div className="ml-4 flex-grow">
                      <h2 className="font-semibold text-text group-hover:text-accent transition-colors">{route.name}</h2>
                      <p className="text-xs text-muted mt-0.5">{route.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="p-4 bg-bg/50 border-t border-border flex justify-between items-center text-[10px] text-muted uppercase font-medium">
              <span>Status: Online</span>
              <div className="flex gap-4">
                <Instagram className="w-3.5 h-3.5 hover:text-accent cursor-pointer" />
                <Phone className="w-3.5 h-3.5 hover:text-accent cursor-pointer" />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
