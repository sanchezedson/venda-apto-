import React from 'react';
import { TESTIMONIALS, OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { ShieldCheck, Award, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export const TrustProofSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
            Segurança Jurídica & Reputação
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-stone-900 leading-tight">
            Mais de duas décadas de compromisso e pontualidade na entrega.
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Investir em um imóvel de alto padrão exige garantias sólidas. Conheça as salvaguardas que protegem o seu investimento em cada etapa da construção.
          </p>
        </div>

        {/* 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white border border-stone-200">
            <div className="w-10 h-10 flex items-center justify-center bg-stone-100 mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Patrimônio de Afetação
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Todos os recursos da obra ficam segregados em conta específica auditada, garantindo a conclusão da obra independentemente de qualquer fator externo.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
              Lei Federal nº 10.931/04
            </div>
          </div>

          <div className="p-6 bg-white border border-stone-200">
            <div className="w-10 h-10 flex items-center justify-center bg-stone-100 mb-4">
              <Building2 className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              42 Empreendimentos Entregues
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Histórico comprovado com mais de 350.000m² construídos nos bairros mais nobres da cidade, rigorosamente dentro do cronograma pactuado.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
              100% no prazo contratual
            </div>
          </div>

          <div className="p-6 bg-white border border-stone-200">
            <div className="w-10 h-10 flex items-center justify-center bg-stone-100 mb-4">
              <Award className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">
              Certificação PBQP-H Nível A
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Máxima qualificação no Programa Brasileiro da Qualidade e Produtividade do Habitat e certificação ISO 9001 de gestão e controle de obras.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
              Auditorias semestrais ativas
            </div>
          </div>
        </div>

        {/* Testimonials with concrete attribution */}
        <div className="bg-stone-900 text-stone-100 p-8 sm:p-12 border border-stone-800">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-6">
            O que dizem os nossos clientes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="flex flex-col justify-between border-l border-stone-700 pl-6">
                <p className="text-sm sm:text-base text-stone-200 italic leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-amber-400">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5">
                    {item.unitPurchased} · {item.deliveredYear}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-stone-400">
              Junte-se às mais de 1.800 famílias que escolheram a nossa assinatura.
            </span>

            <a
              href={OFFICIAL_INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Tenho interesse em conhecer o portfólio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
