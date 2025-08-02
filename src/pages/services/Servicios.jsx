import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HeroServicios from './sections/HeroServicios';
import ReparacionServicios from './sections/ReparacionServicios';
import MantenimientoServicios from './sections/MantenimientoServicios';
import VentaServicios from './sections/VentaServicios';
import OtrosServicios from './sections/OtrosServicios';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';

const Services = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroServicios />
        <VentaServicios />
        <MantenimientoServicios />
        <ReparacionServicios />
        <OtrosServicios />
      </div>
      <Footer />
      <ButtonWhatsap />
    </div>
  );
};

export default Services;
