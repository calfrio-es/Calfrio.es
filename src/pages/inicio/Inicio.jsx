import React from 'react';
import Header from '../../components/layout/Header';
import Hero from './sections/HeroInicio';
import About from './sections/AboutInicio';
import Services from './sections/ServicesInicio';
import Footer from '../../components/layout/Footer';
import Contact from '../../components/sections/Contact';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import ProductsInicio from './sections/ProductsInicio';
import useSEO from '../../hooks/useSEO';

const Inicio = () => {
  // Configuración SEO específica para la página de inicio
  useSEO({
    title: "Maquinaria de Hostelería Profesional - Calfrio | Palma de Mallorca",
    description: "Descubre la mejor maquinaria de hostelería profesional en Palma de Mallorca. Lavavajillas industriales, cocinas profesionales, freidoras, abatidores y equipos de acero inoxidable. 15+ años de experiencia, venta, reparación y servicio técnico especializado.",
    keywords: "maquinaria hostelería Palma Mallorca, lavavajillas industriales, cocinas profesionales, freidoras, abatidores, acero inoxidable, reparación hostelería, equipos hostelería, Calfrio"
  });

  return (
    <div className="w-full min-h-screen">
      <Header />
      <main role="main">
        {/* H1 principal para SEO - visible y accesible */}
        <h1 className="sr-only">Maquinaria de Hostelería Profesional - Calfrio | Palma de Mallorca</h1>
        <Hero />
        <About />
        <ProductsInicio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ButtonWhatsap />
    </div>
  );
};

export default Inicio;
