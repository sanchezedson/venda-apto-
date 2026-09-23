import React from 'react';
import { OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-900">
          <div>
            <span className="text-xl font-display font-medium text-white block">
              Vitra Jardins Residencial
            </span>
            <span className="text-xs text-stone-400 mt-1 block">
              Alameda dos Jacarandás, 480 · Jardins · São Paulo - SP
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-stone-300">
            <a href="#visao-geral" className="hover:text-white transition-colors">Visão Geral</a>
            <a href="#tipologias" className="hover:text-white transition-colors">Plantas & Tipologias</a>
            <a href="#lazer" className="hover:text-white transition-colors">Áreas Comuns</a>
            <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
            <a href="#simulador" className="hover:text-white transition-colors">Simulador</a>
            <a 
              href={OFFICIAL_INTEREST_FORM_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Tenho interesse
            </a>
          </div>
        </div>

        {/* Legal Disclaimers & RI */}
        <div className="text-[11px] leading-relaxed text-stone-400 space-y-2">
          <p>
            Incorporação Imobiliária registrada sob o R.04 da matrícula nº 182.490 no 4º Cartório de Registro de Imóveis da Comarca da Capital de São Paulo - SP. Todas as imagens e perspectivas artísticas contidas neste material são meramente ilustrativas e possuem caráter de sugestão de decoração. Os acabamentos, equipamentos e mobiliário serão entregues estritamente conforme as especificações detalhadas no Memorial Descritivo de Venda.
          </p>
          <p>
            Vendas e intermediação: Incorporadora Vitra & Parceiros Imobiliários Credenciados. CRECI/SP nº 038942-J.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Vitra Jardins Residencial. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a href="#politica" className="hover:text-stone-300 transition-colors">Privacidade de Dados (LGPD)</a>
            <a href="#termos" className="hover:text-stone-300 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
