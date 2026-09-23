import React, { useState } from 'react';
import { OFFICIAL_INTEREST_FORM_URL, APARTMENT_UNITS } from '../data/apartments';
import { ArrowRight, ExternalLink, Phone, Calendar, Clock, CheckCircle } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('3-suites');

  return (
    <section id="contato" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
            Atendimento Exclusivo & Plantão de Vendas
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight leading-tight">
            Dê o primeiro passo para viver no Vitra Jardins.
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cadastre-se para receber a tabela de preços oficial do lançamento, book de plantas em alta resolução e agendar um atendimento personalizado com nossos corretores credenciados.
          </p>
        </div>

        {/* Action Box Card */}
        <div className="max-w-2xl mx-auto bg-stone-900 border border-stone-800 p-8 sm:p-10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                Qual tipologia você procura?
              </label>
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="garden">Garden Suítes (84m² + 32m² de jardim privativo)</option>
                <option value="3-suites">Residence Prime (122m² · 3 Suítes · 2 Vagas)</option>
                <option value="4-suites">Excellence Grand (178m² · 4 Suítes · 3 Vagas)</option>
                <option value="penthouse">Penthouse Duplex (258m² · Cobertura com piscina privativa)</option>
                <option value="all">Quero receber todas as opções e valores</option>
              </select>
            </div>

            <div className="p-4 bg-stone-950/60 border border-stone-800 text-xs text-stone-300 space-y-2">
              <div className="flex items-center gap-2 text-stone-200 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento direto pela equipe da incorporadora</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Acesso antecipado à escolha dos andares preferenciais</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200 font-medium">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Simulação personalizada do fluxo de pagamento</span>
              </div>
            </div>

            {/* The primary target CTA button explicitly requested by user */}
            <a
              href={OFFICIAL_INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-sm sm:text-base font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-xl hover:shadow-amber-400/20"
            >
              <span>Tenho interesse</span>
              <ExternalLink className="w-5 h-5" />
            </a>

            <div className="text-center">
              <p className="text-xs text-stone-400">
                Ao clicar em "Tenho interesse", você será direcionado com segurança para o nosso formulário oficial de atendimento.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Contact info bar */}
        <div className="mt-12 max-w-2xl mx-auto pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-400 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Plantão de Vendas: Segunda a Domingo, das 9h às 19h</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Visitas ao decorado com agendamento prévio</span>
          </div>
        </div>
      </div>
    </section>
  );
};
