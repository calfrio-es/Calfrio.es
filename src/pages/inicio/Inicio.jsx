import React from 'react';
import Header from '../../components/layout/Header';
import Hero from './sections/HeroInicio';
import About from './sections/AboutInicio';
import Services from './sections/ServicesInicio';
import Footer from '../../components/layout/Footer';
import Contact from '../../components/sections/Contact';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';

const Inicio = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ButtonWhatsap />
    </div>
  );
};

export default Inicio;
