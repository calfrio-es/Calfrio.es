import React from 'react';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import HeroCuartosFrios from './sections/HeroCuartosFrios.jsx';
import ServicesCuartosFrios from './sections/ServicesCuartosFrios.jsx';
import ContactoCuartosFrios from './sections/ContactoCuartosFrios.jsx';

const CuartosFrios = () => {
  return (
    <>
      <Header />
      <main className="pt-16 pb-16">
        <HeroCuartosFrios />
        <ServicesCuartosFrios />
        <ContactoCuartosFrios />
      </main>
      <Footer />
    </>
  );
};

export default CuartosFrios;
