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
    title: "Maquinaria Hostelería Profesional - Calfrio Palma",
    description: "Maquinaria de hostelería profesional en Palma de Mallorca. Lavavajillas, cocinas, freidoras y equipos de acero inoxidable. Venta, reparación y servicio técnico.",
    keywords: "maquinaria hostelería Palma Mallorca, lavavajillas industriales, cocinas profesionales, freidoras, abatidores, acero inoxidable, reparación hostelería, equipos hostelería, Calfrio"
  });

  return (
    <div className="w-full min-h-screen">
      <Header />
      <main role="main">
        {/* H1 principal para SEO - visible y accesible */}
        <h1 className="sr-only">Maquinaria Hostelería Profesional - Calfrio Palma</h1>
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
