import React, { useState } from 'react';
import { OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { ExternalLink, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenInterestModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInterestClick = (e: React.MouseEvent) => {
    // If modal is provided we can optionally open modal or direct open the link
    // The user requested: "insira esse link dentro do botão https://forms.gle/k7LVju6p1hdPSbnx6"
    // So the primary button should lead to the Google Form!
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="text-2xl font-display font-medium tracking-tight text-white hover:text-amber-300 transition-colors shrink-0"
        >
          Vitra Jardins
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#visao-geral" className="hover:text-white transition-colors">
            Visão Geral
          </a>
          <a href="#tipologias" className="hover:text-white transition-colors">
            Tipologias
          </a>
          <a href="#lazer" className="hover:text-white transition-colors">
            Lazer & Áreas Comuns
          </a>
          <a href="#localizacao" className="hover:text-white transition-colors">
            Localização
          </a>
          <a href="#simulador" className="hover:text-white transition-colors">
            Simulador
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={OFFICIAL_INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInterestClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-sm rounded-none border border-amber-300 whitespace-nowrap"
            title="Preencher formulário de interesse"
          >
            <span>Tenho interesse</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-stone-300">
            <a 
              href="#visao-geral" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Visão Geral
            </a>
            <a 
              href="#tipologias" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Tipologias & Plantas
            </a>
            <a 
              href="#lazer" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Lazer & Áreas Comuns
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Localização
            </a>
            <a 
              href="#simulador" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white"
            >
              Simulador de Financiamento
            </a>
          </nav>
          <div className="pt-2 border-t border-stone-800">
            <a
              href={OFFICIAL_INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <span>Tenho interesse</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
