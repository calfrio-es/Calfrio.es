import React from 'react';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import HeroBarcos from './sections/HeroBarcos.jsx';
import ServicesBarcos from './sections/ServicesBarcos.jsx';

const Barcos = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroBarcos />
        <ServicesBarcos />
      </main>
      <Footer />
    </>
  );
};

export default Barcos;


