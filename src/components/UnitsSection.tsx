import React, { useState } from 'react';
import { APARTMENT_UNITS, OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { ApartmentUnit } from '../types';
import { BedDouble, Bath, Car, Maximize2, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const UnitsSection: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(APARTMENT_UNITS[1].id);

  const currentUnit: ApartmentUnit =
    APARTMENT_UNITS.find((u) => u.id === selectedUnitId) || APARTMENT_UNITS[0];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="tipologias" className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Plantas & Tipologias Inteligentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-stone-900 leading-tight">
            Escolha a configuração perfeita para o seu estilo de vida.
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Todas as unidades contam com fechadura inteligente por biometria, churrasqueira a carvão com duto exclusivo, manta acústica de atenuação de ruído e infraestrutura pronta para ar-condicionado.
          </p>
        </div>

        {/* Functional Interactive Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/80 rounded-none max-w-fit mb-10 border border-stone-300">
          {APARTMENT_UNITS.map((unit) => {
            const isActive = unit.id === selectedUnitId;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnitId(unit.id)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/60'
                }`}
              >
                {unit.name} · {unit.area}m²
              </button>
            );
          })}
        </div>

        {/* Selected Unit Showcase Card */}
        <div className="bg-white border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          {/* Left Column: Image preview */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] bg-stone-900">
            <img
              src={currentUnit.image}
              alt={`Planta e interior da unidade ${currentUnit.name}`}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                {currentUnit.floor}
              </div>
              <div className="text-2xl font-display font-medium text-white">
                {currentUnit.name}
              </div>
              <p className="text-xs text-stone-300 mt-1 max-w-md">
                {currentUnit.tagline}
              </p>
            </div>
          </div>

          {/* Right Column: Specifications and CTA */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  Configuração da unidade
                </div>
                <h3 className="text-2xl font-display font-semibold text-stone-900 mt-1">
                  {currentUnit.name} ({currentUnit.area}m² privativos)
                </h3>
                {currentUnit.privateGarden && (
                  <div className="mt-1 text-xs text-emerald-700 font-medium">
                    + {currentUnit.privateGarden}m² de jardim privativo exclusivo
                  </div>
                )}
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {currentUnit.description}
                </p>
              </div>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-stone-200 text-xs text-stone-700">
                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>
                    <strong className="text-stone-900 font-semibold tabular-nums">{currentUnit.area} m²</strong> úteis
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <BedDouble className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>
                    <strong className="text-stone-900 font-semibold tabular-nums">{currentUnit.suites}</strong> suítes
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Bath className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>
                    <strong className="text-stone-900 font-semibold tabular-nums">{currentUnit.bathrooms}</strong> banheiros
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>
                    <strong className="text-stone-900 font-semibold tabular-nums">{currentUnit.parkingSpaces}</strong> vagas cobertas
                  </span>
                </div>
                <div className="flex items-center gap-2.5 col-span-2">
                  <Compass className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{currentUnit.sunOrientation}</span>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                  Destaques da planta:
                </div>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {currentUnit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Price and CTA box */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-stone-500">
                  Valor especial de lançamento:
                </span>
                <span className="text-xl sm:text-2xl font-display font-bold text-stone-900 tabular-nums">
                  {formatCurrency(currentUnit.priceFrom)}
                </span>
              </div>

              {/* CTA button: Tenho interesse com o link fornecido */}
              <a
                href={OFFICIAL_INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-sm"
              >
                <span>Tenho interesse nesta unidade</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-2 text-center text-[11px] text-stone-400">
                Condições de pagamento facilitadas durante o período de obras.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
