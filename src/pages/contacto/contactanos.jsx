import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import Contact from '../../components/sections/Contact';

const Contactanos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Contact />
      </main>
      <ButtonWhatsap />
      <Footer />
    </div>
  );
};

export default Contactanos;
