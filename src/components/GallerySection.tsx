import React, { useState } from 'react';
import { GALLERY_ITEMS, OFFICIAL_INTEREST_FORM_URL } from '../data/apartments';
import { Maximize2, X, ExternalLink } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section id="galeria" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Galeria de Ambientes
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white leading-tight">
              Design autoral e acabamentos que despertam sensações.
            </h2>
            <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
              Materiais nobres como madeira certificada, mármore selecionado e amplas esquadrias de vidro que valorizam a luz natural e a ventilação cruzada.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href={OFFICIAL_INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <span>Tenho interesse no decorado</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative cursor-pointer overflow-hidden bg-stone-800 border border-stone-800 hover:border-amber-400/50 transition-colors"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 max-w-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="p-2 bg-stone-900/80 text-stone-300 group-hover:text-amber-400 group-hover:bg-stone-900 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md">
            <div className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 overflow-hidden shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-stone-950/80 hover:bg-stone-950 text-stone-200 hover:text-white transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-800">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                    {activeItem.category}
                  </div>
                  <h4 className="text-xl font-display font-medium text-white">
                    {activeItem.title}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1">
                    {activeItem.description}
                  </p>
                </div>

                <a
                  href={OFFICIAL_INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0"
                >
                  <span>Tenho interesse</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
