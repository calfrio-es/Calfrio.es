import React from 'react';
import hero1 from '../../../assets/img/hero1.webp';

const HeroServicios = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Texto gigante de fondo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-[4rem] md:text-[6rem] lg:text-[10rem] xl:text-[12rem] font-black text-black uppercase tracking-widest leading-none -translate-y-20 md:-translate-y-28 lg:-translate-y-32 xl:-translate-y-36 whitespace-nowrap">
          SERVICIOS
        </span>
      </div>
      
      {/* Imagen posicionada desde la mitad del texto */}
      <div className="relative z-20 translate-y-16 md:translate-y-20 lg:translate-y-24 xl:translate-y-28">
        <img 
          src={hero1} 
          alt="Electricista profesional"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroServicios;
