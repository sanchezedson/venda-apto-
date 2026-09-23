import React, { useState } from 'react';
import { POINTS_OF_INTEREST, OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePoiId, setActivePoiId] = useState<string>(POINTS_OF_INTEREST[0].id);

  const filteredPois = selectedCategory === 'all'
    ? POINTS_OF_INTEREST
    : POINTS_OF_INTEREST.filter(p => p.category === selectedCategory);

  const activePoi = POINTS_OF_INTEREST.find(p => p.id === activePoiId) || POINTS_OF_INTEREST[0];

  return (
    <section id="localizacao" className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Localização Estratégica
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-stone-900 leading-tight">
            Viver nos Jardins: ruas arborizadas e conveniência a pé.
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Uma localização nobre cercada pelos melhores restaurantes, renomados colégios, parques e vias de acesso rápido para você economizar tempo e ganhar qualidade de vida.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
            }`}
          >
            Todos os Pontos ({POINTS_OF_INTEREST.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('nature')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'nature'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
            }`}
          >
            Lazer & Parques
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('education')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'education'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
            }`}
          >
            Educação
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('dining')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'dining'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
            }`}
          >
            Gastronomia
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('shopping')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'shopping'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
            }`}
          >
            Compras
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('health')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              selectedCategory === 'health'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900'
            }`}
          >
            Saúde
          </button>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* POI List Column */}
          <div className="lg:col-span-6 space-y-3">
            {filteredPois.map((poi) => {
              const isSelected = poi.id === activePoiId;
              return (
                <div
                  key={poi.id}
                  onClick={() => setActivePoiId(poi.id)}
                  className={`p-5 cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-white border-stone-900 shadow-md translate-x-1'
                      : 'bg-stone-50 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-amber-700 font-semibold mb-1">
                        {poi.categoryLabel}
                      </div>
                      <h4 className="text-base font-semibold text-stone-900">
                        {poi.name}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">
                        {poi.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0 ml-4">
                      <div className="flex items-center justify-end gap-1 text-sm font-bold text-stone-900 tabular-nums">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{poi.timeMinutes} min</span>
                      </div>
                      <div className="text-[11px] text-stone-400 font-mono">
                        {poi.distanceKm}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Map Visual Panel */}
          <div className="lg:col-span-6 bg-white border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="text-sm font-semibold text-stone-900">
                    Alameda dos Jacarandás, 480 · Jardins
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-mono">São Paulo - SP</span>
              </div>

              {/* Graphic Map Canvas Simulation */}
              <div className="mt-6 aspect-[16/10] bg-stone-950 p-6 relative overflow-hidden flex flex-col justify-between border border-stone-800">
                {/* Decorative architectural grid lines */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Central pin for Vitra Jardins */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-400/20 animate-pulse" />
                  <div>
                    <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                      Vitra Jardins
                    </span>
                    <span className="text-[10px] text-stone-400">
                      Local das Obras & Estande de Vendas
                    </span>
                  </div>
                </div>

                {/* Active Selected POI details */}
                <div className="relative z-10 bg-stone-900/90 border border-stone-700 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-amber-400">
                        Ponto em destaque
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {activePoi.name}
                      </div>
                      <div className="text-xs text-stone-300">
                        {activePoi.description}
                      </div>
                    </div>
                    <div className="text-right pl-4 border-l border-stone-700">
                      <div className="text-lg font-bold text-amber-400 tabular-nums">
                        {activePoi.timeMinutes} min
                      </div>
                      <div className="text-[10px] text-stone-400">
                        {activePoi.distanceKm}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit invitation and CTA */}
            <div className="mt-6 pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase text-stone-900">
                  Agende sua visita ao apartamento decorado
                </div>
                <div className="text-xs text-stone-500">
                  Horário: Diariamente das 09h às 19h com valet cortesia.
                </div>
              </div>

              <a
                href={OFFICIAL_INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm shrink-0"
              >
                <span>Tenho interesse em visitar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
