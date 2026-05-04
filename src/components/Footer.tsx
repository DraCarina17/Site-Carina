/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-border bg-white mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <p className="text-[10px] text-brand-navy uppercase tracking-[0.4em] font-bold">Dra. Carina Corneta | CROSP 113657</p>
          <p className="text-[10px] text-accent font-medium uppercase tracking-[0.2em]">Reabilitação Oral & Estética Avançada</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 text-muted">
          <div className="flex items-center text-xs">
            <MapPin className="w-4 h-4 mr-2 text-accent" />
            <span>Rua Marechal Deodoro, 2722 - Centro, São Carlos/SP</span>
          </div>
          <div className="flex items-center text-xs">
            <Phone className="w-4 h-4 mr-2 text-accent" />
            <span>(16) 99630-0633</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://instagram.com/dra.carinacorneta" target="_blank" rel="noreferrer" className="text-brand-navy hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:dracarinacorneta@gmail.com" className="text-brand-navy hover:text-accent transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/50 text-center">
        <p className="text-[9px] uppercase tracking-widest text-muted/60">
          © {new Date().getFullYear()} Dra. Carina Corneta. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
