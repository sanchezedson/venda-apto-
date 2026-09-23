import React from 'react';
import { AMENITIES, OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { Waves, Dumbbell, Coffee, Sparkles, TreePine, ShieldCheck, ArrowRight } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-amber-600" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-amber-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'TreePine':
        return <TreePine className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="lazer" className="py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Lazer & Áreas Comuns
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-stone-900 leading-tight">
            Uma extensão completa do seu apartamento para todos os momentos.
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Áreas comuns entregues totalmente equipadas e decoradas com marcas de referência internacional, conectando conforto, bem-estar e conveniência sem sair de casa.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AMENITIES.map((amenity, index) => (
            <div
              key={amenity.id}
              className={`p-8 bg-white border border-stone-200 hover:border-amber-400 transition-colors flex flex-col justify-between ${
                amenity.span || 'col-span-1'
              }`}
            >
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-amber-50 border border-amber-200/60 mb-6">
                  {getIcon(amenity.iconName)}
                </div>
                <div className="text-xs font-mono text-stone-400 mb-1">
                  0{index + 1}.
                </div>
                <h3 className="text-xl font-display font-semibold text-stone-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {amenity.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Entregue decorado e climatizado</span>
                <span className="text-amber-700 font-medium">Uso exclusivo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Prompt */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-display font-medium text-white">
              Quer receber o book completo com todas as plantas e áreas comuns?
            </h4>
            <p className="text-xs text-stone-300 mt-1">
              Envie seus dados no formulário e nosso consultor especializado entrará em contato em minutos.
            </p>
          </div>

          <a
            href={OFFICIAL_INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm shrink-0 whitespace-nowrap"
          >
            <span>Tenho interesse no book digital</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
