import React from 'react';
import heroProductos from '../../../assets/img/hero-productos.png';

const HeroProductos = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img 
          src={heroProductos} 
          alt="Productos de hostelería"
          className="w-full h-full object-cover"
        />
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Contenido centrado */}
      <div className="relative z-10 flex items-center justify-center h-[70vh] md:h-[80vh]">
        <div className="text-center text-white max-w-4xl px-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            Nuestros <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">Productos</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
            Equipamiento de hostelería profesional para tu negocio
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroProductos;
