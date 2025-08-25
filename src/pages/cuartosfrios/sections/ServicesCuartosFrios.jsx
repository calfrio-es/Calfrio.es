import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgInst from '../../../assets/img/camarasfrigorificas (1).jpg';
import imgMant from '../../../assets/img/camarasfrigorificas (2).jpg';
import imgRep from '../../../assets/img/camarasfrigorificas.jpg';

const ServicesCuartosFrios = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Nuestros Servicios de Refrigeración</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* Casilla 1: Venta de Cámaras Frigoríficas */}
           <div className="flex flex-col lg:flex-row bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
             <img
               src={imgInst}
               alt="Venta de cámaras frigoríficas"
               className="w-full lg:w-1/2 h-56 lg:h-72 object-cover"
             />
             <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-black mb-2">Venta de Cámaras Frigoríficas</h3>
               <p className="text-gray-700">
                 Amplio catálogo de cámaras frigoríficas nuevas y de ocasión. Desde pequeñas cámaras para restaurantes 
                 hasta grandes instalaciones industriales. Asesoramiento técnico especializado.
               </p>
               <div className="mt-4 flex justify-end">
                                    <button
                     className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                     onClick={() => navigate('/venta-camaras-frigorificas-mallorca')}
                   >
                     Conocer más &gt;
                   </button>
               </div>
             </div>
           </div>
                     {/* Casilla 2: Cámaras Frigoríficas Industriales */}
           <div className="flex flex-col lg:flex-row bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
             <img
               src={imgMant}
               alt="Cámaras frigoríficas industriales"
               className="w-full lg:w-1/2 h-56 lg:h-72 object-cover"
             />
             <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-black mb-2">Cámaras Frigoríficas Industriales</h3>
               <p className="text-gray-700">
                 Cámaras frigoríficas de gran capacidad para uso industrial. Diseñadas para almacenamiento 
                 masivo de productos refrigerados y congelados. Control de temperatura avanzado.
               </p>
               <div className="mt-4 flex justify-end">
                                    <button
                     className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                     onClick={() => navigate('/camaras-frigorificas-industriales-mallorca')}
                   >
                     Conocer más &gt;
                   </button>
               </div>
             </div>
           </div>
                     {/* Casilla 3: Puertas de Cámaras Frigoríficas - ocupa dos columnas */}
           <div className="flex flex-col lg:flex-row lg:col-span-2 bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
             <img
               src={imgRep}
               alt="Puertas de cámaras frigoríficas"
               className="w-full lg:w-1/2 h-64 lg:h-80 object-cover"
             />
             <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-black mb-2">Puertas de Cámaras Frigoríficas</h3>
               <p className="text-gray-700">
                 Puertas frigoríficas de alta calidad para todo tipo de cámaras:
               </p>
               <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
                 <li>Puertas automáticas y manuales</li>
                 <li>Puertas de alta frecuencia para uso intensivo</li>
                 <li>Puertas con cortinas de aire</li>
                 <li>Reparación y mantenimiento de puertas</li>
               </ul>
               <p className="text-gray-600 mt-3 text-sm">
                 Instalación profesional y servicio técnico especializado en puertas frigoríficas.
               </p>
               <div className="mt-4 flex justify-end">
                                    <button
                     className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                     onClick={() => navigate('/puertas-camaras-frigorificas-mallorca')}
                   >
                     Conocer más &gt;
                   </button>
               </div>
             </div>
           </div>

                     {/* Casilla 4: Cuartos Fríos - ocupa dos columnas */}
           <div className="lg:col-span-2 bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer p-8">
             <div className="text-center">
               <h3 className="text-3xl font-bold text-black mb-4">Cuartos Fríos</h3>
               <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                 Diseño, fabricación e instalación de cuartos fríos a medida. Desde pequeños cuartos para restaurantes 
                 hasta grandes instalaciones industriales. Paneles frigoríficos de alta calidad y sistemas de refrigeración 
                 eficientes para mantener la temperatura óptima de sus productos.
               </p>
               <div className="mt-6 flex justify-center">
                                    <button
                     className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium text-lg"
                     onClick={() => navigate('/cuartos-frios-mallorca')}
                   >
                     Conocer más &gt;
                   </button>
               </div>
             </div>
           </div>

                     {/* Casilla 5: Equipos de Frío Industrial */}
           <div className="bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer p-6">
             <div className="text-center">
               <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-black mb-3">Equipos de Frío Industrial</h3>
               <p className="text-gray-700 text-sm mb-4">
                 Compresores, condensadores, evaporadores y sistemas de control para instalaciones frigoríficas industriales de alta capacidad.
               </p>
               <div className="flex justify-center">
                 <button
                   className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                   onClick={() => navigate('/equipos-frio-industrial-mallorca')}
                 >
                   Conocer más &gt;
                 </button>
               </div>
             </div>
           </div>

           {/* Casilla 6: Paneles Frigoríficos */}
           <div className="bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer p-6">
             <div className="text-center">
               <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-black mb-3">Paneles Frigoríficos</h3>
               <p className="text-gray-700 text-sm mb-4">
                 Paneles frigoríficos de poliuretano de alta densidad para construcción de cámaras frigoríficas y cuartos fríos.
               </p>
               <div className="flex justify-center">
                 <button
                   className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                   onClick={() => navigate('/paneles-frigorificos-mallorca')}
                 >
                   Conocer más &gt;
                 </button>
               </div>
             </div>
           </div>

           {/* Casilla 7: Precios de Cámaras Frigoríficas */}
           <div className="bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer p-6">
             <div className="text-center">
               <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-black mb-3">Precios de Cámaras Frigoríficas</h3>
               <p className="text-gray-700 text-sm mb-4">
                 Precios competitivos en cámaras frigoríficas nuevas y de ocasión. Presupuestos personalizados sin compromiso.
               </p>
               <div className="flex justify-center">
                 <button
                   className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                   onClick={() => navigate('/precios-camaras-frigorificas-mallorca')}
                 >
                   Conocer más &gt;
                 </button>
               </div>
             </div>
           </div>

                     {/* Casilla 8: Segunda Mano de Cámaras Frigoríficas */}
           <div className="flex flex-col lg:flex-row bg-white rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
             <img
               src={imgInst}
               alt="Cámaras frigoríficas de segunda mano"
               className="w-full lg:w-1/2 h-56 lg:h-72 object-cover"
             />
             <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-black mb-2">Segunda Mano de Cámaras Frigoríficas</h3>
               <p className="text-gray-700">
                 Cámaras frigoríficas de segunda mano en excelente estado. Revisadas y garantizadas. 
                 Opción económica para empresas que buscan calidad a un precio más accesible.
               </p>
               <div className="mt-4 flex justify-end">
                                    <button
                     className="px-4 py-2 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 rounded-md font-medium"
                     onClick={() => navigate('/segunda-mano-camaras-frigorificas-mallorca')}
                   >
                     Conocer más &gt;
                   </button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCuartosFrios;
