import React from 'react';

const HeroProductos = () => {
  return (
    <section className="relative bg-white overflow-hidden p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[70vh] md:h-[80vh]">
          {/* Celda 1 - Imagen */}
          <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/hero1.webp" 
              alt="Producto de hostelería"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Celda 2 - Imagen */}
          <div className="col-span-2 row-span-2 col-start-3 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/hero2.webp" 
              alt="Equipo profesional"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Celda 3 - Título PRODUCTOS */}
          <div className="col-span-3 row-span-2 col-start-2 row-start-3 bg-white rounded-lg flex items-center justify-center p-4">
            <div className="text-center text-black max-w-4xl px-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                Nuestros <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">Productos</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
                Equipamiento profesional para tu negocio
              </p>
            </div>
          </div>
          
          {/* Celda 4 - Imagen */}
          <div className="row-span-4 col-start-5 row-start-1 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/hero3.webp" 
              alt="Equipamiento industrial"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Celda 5 - Imagen */}
          <div className="row-span-2 col-start-1 row-start-3 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/hero4.webp" 
              alt="Maquinaria de cocina"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Celda 6 - Imagen */}
          <div className="col-span-3 row-span-2 col-start-3 row-start-5 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/hero5.webp" 
              alt="Equipos de acero inoxidable"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Celda 7 - Imagen */}
          <div className="col-span-2 row-span-2 col-start-1 row-start-5 bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/src/assets/img/hero1.webp" 
              alt="Hornos industriales"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProductos;
