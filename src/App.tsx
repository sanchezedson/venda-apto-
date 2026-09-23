import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UnitsSection } from './components/UnitsSection';
import { GallerySection } from './components/GallerySection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LocationSection } from './components/LocationSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TrustProofSection } from './components/TrustProofSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { StickyCtaBar } from './components/StickyCtaBar';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans-body selection:bg-amber-200 selection:text-stone-900">
      {/* Strict 3-zone Top Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Tipologias & Plantas Interativas */}
        <UnitsSection />

        {/* Galeria de Fotos em Alta Resolução com Lightbox */}
        <GallerySection />

        {/* Diferenciais & Lazer em Bento Grid */}
        <AmenitiesSection />

        {/* Localização Estratégica & Pontos de Interesse */}
        <LocationSection />

        {/* Simulador Financeiro Interativo */}
        <CalculatorSection />

        {/* Garantias, Credibilidade & Depoimentos */}
        <TrustProofSection />

        {/* Seção Principal de Conversão / Contato */}
        <CtaSection />
      </main>

      {/* Rodapé Silencioso & Regulatório */}
      <Footer />

      {/* Barra Flutuante de Ação Rápida */}
      <StickyCtaBar />
    </div>
  );
}
