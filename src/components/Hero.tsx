import React from 'react';
import { OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import heroApartmentFacade from '../assets/images/hero_apartment_facade_1790202044546.jpg';
import { ArrowRight, Compass, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="visao-geral" className="relative bg-stone-950 text-white overflow-hidden">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroApartmentFacade}
          alt="Fachada do empreendimento residencial Vitra Jardins"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to public folder path if needed
            (e.target as HTMLImageElement).src = '/images/hero_apartment_facade.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-3xl space-y-6">
          {/* Natural editorial kicker without pill wrappers */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
            <span>Lançamento Exclusivo</span>
            <span aria-hidden="true">·</span>
            <span>Jardins</span>
            <span aria-hidden="true">·</span>
            <span>Obras Iniciadas</span>
          </div>

          {/* Master Headline with balanced wrap */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light tracking-tight text-stone-50 leading-[1.1] text-balance">
            A essência do alto padrão onde o verde encontra o horizonte urbano.
          </h1>

          {/* Subheading with concrete value proposition */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
            Apartamentos residenciais de <strong className="text-white font-medium">84m² a 258m²</strong> com 2 a 4 suítes, varanda gourmet integrada com churrasqueira a carvão e rooftop com piscina de borda infinita. O endereço definitivo para viver com segurança e tranquilidade.
          </p>

          {/* CTA Group: Primary "Tenho interesse" button leading to Google Forms */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={OFFICIAL_INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-lg hover:shadow-amber-400/20"
            >
              <span>Tenho interesse</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#tipologias"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-stone-200 border border-stone-700 hover:bg-stone-900/80 hover:text-white transition-colors"
            >
              <span>Conhecer plantas & metragens</span>
            </a>
          </div>

          {/* Trust points without badges */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Patrimônio de afetação constituído</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Bairro Jardins · São Paulo</span>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-display font-medium text-white tabular-nums">
              84m² <span className="text-xl font-light text-stone-400">a</span> 258m²
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400 mt-1">
              Metragens privativas
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-medium text-white tabular-nums">
              2 <span className="text-xl font-light text-stone-400">a</span> 4
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400 mt-1">
              Suítes confortáveis
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-medium text-white tabular-nums">
              2 <span className="text-xl font-light text-stone-400">a</span> 4
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400 mt-1">
              Vagas de garagem + Tomada VE
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-medium text-amber-400 tabular-nums">
              28 anos
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-400 mt-1">
              Solidez da construtora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
