import React, { useState } from 'react';
import { APARTMENT_UNITS, OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { Calculator, ArrowRight, Check, HelpCircle } from 'lucide-react';

export const CalculatorSection: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(APARTMENT_UNITS[0].id);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [installmentMonths, setInstallmentMonths] = useState<number>(36); // durante a obra
  const [financingType, setFinancingType] = useState<'construction' | 'bank'>('construction');

  const selectedUnit = APARTMENT_UNITS.find(u => u.id === selectedUnitId) || APARTMENT_UNITS[0];
  const totalValue = selectedUnit.priceFrom;

  const downPaymentValue = Math.round(totalValue * (downPaymentPercent / 100));
  
  // Simulation during construction: 35% paid during construction in 36 months, remainder at key handover
  const constructionPeriodAmount = Math.round(totalValue * 0.35);
  const monthlyConstructionInstallment = Math.round((constructionPeriodAmount - (downPaymentValue * 0.4)) / 36);

  // Bank financing simulation: remainder amortized
  const financedAmount = totalValue - downPaymentValue;
  const estimatedBankRateMonthly = 0.0085; // ~10.6% a.a. approximate CET
  const bankMonths = installmentMonths === 36 ? 240 : installmentMonths;
  const estimatedBankMonthly = Math.round(
    (financedAmount * estimatedBankRateMonthly) /
    (1 - Math.pow(1 + estimatedBankRateMonthly, -bankMonths))
  );

  const formatBRL = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Planejamento & Simulação Financeira
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-stone-900 leading-tight">
            Personalize o fluxo de pagamento para a sua conquista.
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Condições exclusivas de lançamento direto com a construtora durante a fase de obras, ou planos com financiamento bancário pós-habite-se.
          </p>
        </div>

        <div className="bg-stone-50 border border-stone-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unit Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                1. Escolha a unidade para simular:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {APARTMENT_UNITS.map(unit => {
                  const isSelected = unit.id === selectedUnitId;
                  return (
                    <button
                      key={unit.id}
                      type="button"
                      onClick={() => setSelectedUnitId(unit.id)}
                      className={`p-3 text-left border transition-all text-xs ${
                        isSelected
                          ? 'border-stone-900 bg-stone-900 text-white shadow-sm'
                          : 'border-stone-300 bg-white text-stone-800 hover:border-stone-400'
                      }`}
                    >
                      <div className="font-semibold">{unit.name} ({unit.area}m²)</div>
                      <div className={`mt-0.5 tabular-nums ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                        {formatBRL(unit.priceFrom)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                  2. Entrada inicial sugerida:
                </label>
                <span className="text-sm font-bold text-stone-900 tabular-nums">
                  {downPaymentPercent}% ({formatBRL(downPaymentValue)})
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>Mínimo 20%</span>
                <span>30%</span>
                <span>40%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Financing Mode */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                3. Modalidade preferencial:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setFinancingType('construction');
                    setInstallmentMonths(36);
                  }}
                  className={`p-3 text-xs text-left border transition-colors ${
                    financingType === 'construction'
                      ? 'border-stone-900 bg-white shadow-sm text-stone-900'
                      : 'border-stone-200 bg-stone-100/60 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-semibold">Direto na Obra (36 meses)</div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Sem burocracia bancária durante a construção.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFinancingType('bank');
                    setInstallmentMonths(240);
                  }}
                  className={`p-3 text-xs text-left border transition-colors ${
                    financingType === 'bank'
                      ? 'border-stone-900 bg-white shadow-sm text-stone-900'
                      : 'border-stone-200 bg-stone-100/60 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <div className="font-semibold">Financiamento Bancário</div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Prazos estendidos em até 360 meses.
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 flex flex-col justify-between border border-stone-800">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                  Resumo da Proposta Estimada
                </div>
                <Calculator className="w-4 h-4 text-amber-400" />
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs text-stone-400">Valor da Unidade ({selectedUnit.name})</div>
                  <div className="text-2xl font-display font-medium text-white tabular-nums">
                    {formatBRL(totalValue)}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-stone-400">Entrada estimada:</div>
                    <div className="text-base font-semibold text-white tabular-nums">
                      {formatBRL(downPaymentValue)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">
                      {financingType === 'construction' ? 'Parcela Mensal (Obra):' : 'Parcela Bancária Estimada:'}
                    </div>
                    <div className="text-base font-bold text-amber-400 tabular-nums">
                      {formatBRL(financingType === 'construction' ? monthlyConstructionInstallment : estimatedBankMonthly)}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-stone-800/80 text-[11px] text-stone-300 leading-relaxed border border-stone-700">
                  <span className="text-amber-300 font-medium">Nota:</span> Simulação meramente informativa com base na tabela preliminar de lançamento. Valores sujeitos a alteração e aprovação de crédito.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={OFFICIAL_INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-md"
              >
                <span>Tenho interesse na simulação</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="text-center text-[10px] text-stone-400 mt-2">
                Clique para enviar seus dados e receber o fluxo detalhado sem compromisso.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
