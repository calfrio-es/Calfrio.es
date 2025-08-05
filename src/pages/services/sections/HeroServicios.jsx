import React from 'react';
import heroservicesavatar from '../../../assets/img/heroservicesavatar.png';

const HeroServicios = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-screen bg-cyan-100 overflow-hidden flex items-center justify-center">
      {/* Descripción arriba del título */}
      <div className="absolute top-10 md:top-24 lg:top-10 z-30 text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700 max-w-2xl mx-auto px-4">
          Soluciones profesionales para equipos de hostelería
        </p>
      </div>
      
      {/* Texto gigante de fondo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-[4rem] md:text-[6rem] lg:text-[10rem] xl:text-[12rem] font-black text-black uppercase tracking-widest leading-none -translate-y-20 md:-translate-y-28 lg:-translate-y-32 xl:-translate-y-36 whitespace-nowrap">
          SERVICIOS
        </span>
      </div>
      
                           {/* Imagen posicionada desde la mitad del texto */}
                                <div className="relative z-20 translate-y-24 md:translate-y-28 lg:translate-y-24 xl:translate-y-28">
                                        <img 
             src={heroservicesavatar} 
             alt="Técnico de servicios profesionales"
             className="w-80 h-96 md:w-[28rem] md:h-[32rem] lg:w-[32rem] lg:h-[36rem] object-contain"
           />
       </div>
       
                                                                                                                               {/* Descripción en la esquina inferior derecha */}
           <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-30 hidden md:block">
                                                                                                               <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800 max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                  Servicios de mantenimiento preventivo y reparación especializada para equipos de hostelería
                </p>
              </div>
              
              {/* Descripción en el lado izquierdo */}
              <div className="absolute bottom-8 left-4 md:bottom-12 md:left-8 lg:bottom-46 lg:left-12 z-30 hidden md:block">
                <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800 max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                  Venta, instalación y configuración de equipos profesionales para restaurantes y hoteles
                </p>
           </div>
    </section>
  );
};

export default HeroServicios;
