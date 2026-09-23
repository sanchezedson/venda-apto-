import React, { useState, useEffect } from 'react';
import { OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { ArrowRight, Sparkles } from 'lucide-react';

export const StickyCtaBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (e.g. > 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Barra de contato rápido"
      className="fixed bottom-0 inset-x-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 text-white shadow-2xl py-2.5 px-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 truncate">
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <div className="truncate">
            <span className="text-xs sm:text-sm font-medium text-white truncate block">
              Vitra Jardins <span className="hidden sm:inline text-stone-400">· Condições Especiais de Lançamento</span>
            </span>
            <span className="text-[10px] text-stone-400 block sm:hidden">
              Últimas unidades de lançamento
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={OFFICIAL_INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-sm whitespace-nowrap"
          >
            <span>Tenho interesse</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
};
