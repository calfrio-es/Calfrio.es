import React from 'react';
import hero1 from '../../../assets/img/hero1.webp';
import hero2 from '../../../assets/img/hero2.webp';
import hero3 from '../../../assets/img/hero3.webp';
import hero4 from '../../../assets/img/hero4.webp';
import hero5 from '../../../assets/img/hero5.webp';

const CatalogoProductos = () => {
  const redireccionamientos = [
    {
      id: 1,
      titulo: 'Servicios',
      descripcion: 'Mantenimiento y reparación',
      icono: '🔧',
      enlace: '/servicios'
    },
    {
      id: 2,
      titulo: 'Contacto',
      descripcion: 'Solicita presupuesto',
      icono: '📞',
      enlace: '/contacto'
    },
    {
      id: 3,
      titulo: 'Ofertas',
      descripcion: 'Productos en promoción',
      icono: '🏷️',
      enlace: '/ofertas'
    },
    {
      id: 4,
      titulo: 'Catálogo',
      descripcion: 'Descarga nuestro catálogo',
      icono: '📋',
      enlace: '/catalogo'
    }
  ];

  const productos = [
    {
      id: 1,
      nombre: 'Horno Industrial Profesional',
      categoria: 'Hornos',
      marca: 'Calfrio',
      medidas: '60x60x85 cm',
      imagen: hero1,
      precio: '€1,299'
    },
    {
      id: 2,
      nombre: 'Frigorífico Industrial',
      categoria: 'Frigoríficos',
      marca: 'Calfrio',
      medidas: '80x70x190 cm',
      imagen: hero2,
      precio: '€2,199'
    },
    {
      id: 3,
      nombre: 'Lavavajillas Industrial',
      categoria: 'Lavavajillas',
      marca: 'Calfrio',
      medidas: '60x85x85 cm',
      imagen: hero3,
      precio: '€1,899'
    },
    {
      id: 4,
      nombre: 'Plancha de Cocina',
      categoria: 'Planchas',
      marca: 'Calfrio',
      medidas: '40x60x15 cm',
      imagen: hero4,
      precio: '€899'
    },
    {
      id: 5,
      nombre: 'Batidora Industrial',
      categoria: 'Batidoras',
      marca: 'Calfrio',
      medidas: '30x30x45 cm',
      imagen: hero5,
      precio: '€599'
    },
    {
      id: 6,
      nombre: 'Cafetera Profesional',
      categoria: 'Cafeteras',
      marca: 'Calfrio',
      medidas: '35x45x55 cm',
      imagen: hero1,
      precio: '€799'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
                 <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-8 gap-4 h-[140vh]">
                     {/* Columna 1 - Redireccionamientos */}
           <div className="hidden md:block row-span-8 bg-gray-50 rounded-lg p-6 flex flex-col justify-between">
                         <div>
               <h3 className="text-xl font-bold text-gray-800 mb-4">Enlaces de Interés</h3>
               <div className="space-y-4">
                 {redireccionamientos.map((item) => (
                   <div key={item.id} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="flex items-center space-x-3">
                       <span className="text-xl">{item.icono}</span>
                       <div>
                         <h4 className="text-sm font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                           {item.titulo}
                         </h4>
                         <p className="text-xs text-gray-600">{item.descripcion}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
               <div className="bg-cyan-50 rounded-lg p-3 mt-4">
                 <h4 className="text-sm font-semibold text-cyan-800 mb-1">¿Necesitas ayuda?</h4>
                 <p className="text-xs text-cyan-700">Nuestros expertos están disponibles para asesorarte</p>
               </div>
             </div>
          </div>

                     {/* Producto 2 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={productos[0].imagen} 
                 alt={productos[0].nombre}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                   {productos[0].categoria}
                 </span>
                 <span className="text-base font-bold text-gray-800">{productos[0].precio}</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">{productos[0].nombre}</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: {productos[0].marca}</p>
               <p className="text-xs text-gray-500">Medidas: {productos[0].medidas}</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-600 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

                     {/* Producto 3 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={productos[1].imagen} 
                 alt={productos[1].nombre}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                   {productos[1].categoria}
                 </span>
                 <span className="text-base font-bold text-gray-800">{productos[1].precio}</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">{productos[1].nombre}</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: {productos[1].marca}</p>
               <p className="text-xs text-gray-500">Medidas: {productos[1].medidas}</p>
             </div>
                           <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

                     {/* Producto 4 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={productos[2].imagen} 
                 alt={productos[2].nombre}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                   {productos[2].categoria}
                 </span>
                 <span className="text-base font-bold text-gray-800">{productos[2].precio}</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">{productos[2].nombre}</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: {productos[2].marca}</p>
               <p className="text-xs text-gray-500">Medidas: {productos[2].medidas}</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-600 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 5 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={productos[3].imagen} 
                 alt={productos[3].nombre}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                   {productos[3].categoria}
                 </span>
                 <span className="text-base font-bold text-gray-800">{productos[3].precio}</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">{productos[3].nombre}</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: {productos[3].marca}</p>
               <p className="text-xs text-gray-500">Medidas: {productos[3].medidas}</p>
             </div>
                           <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 6 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={productos[4].imagen} 
                 alt={productos[4].nombre}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                   {productos[4].categoria}
                 </span>
                 <span className="text-base font-bold text-gray-800">{productos[4].precio}</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">{productos[4].nombre}</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: {productos[4].marca}</p>
               <p className="text-xs text-gray-500">Medidas: {productos[4].medidas}</p>
             </div>
                           <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 7 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={productos[5].imagen} 
                 alt={productos[5].nombre}
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-brown-100 text-brown-800 px-2 py-1 rounded-full">
                   {productos[5].categoria}
                 </span>
                 <span className="text-base font-bold text-gray-800">{productos[5].precio}</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">{productos[5].nombre}</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: {productos[5].marca}</p>
               <p className="text-xs text-gray-500">Medidas: {productos[5].medidas}</p>
             </div>
                           <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
                      </div>
         </div>
         
         {/* Segundo Grid - Más Productos */}
         <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-8 gap-4 h-[140vh] mt-8">
           {/* Producto 8 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero2} 
                 alt="Horno de Convección"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                   Hornos
                 </span>
                 <span className="text-base font-bold text-gray-800">€1,599</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Horno de Convección Profesional</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 70x70x90 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 9 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero3} 
                 alt="Vitrina Refrigerada"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                   Frigoríficos
                 </span>
                 <span className="text-base font-bold text-gray-800">€2,899</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Vitrina Refrigerada Industrial</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 120x80x200 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 10 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero4} 
                 alt="Máquina de Hielo"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                   Refrigeración
                 </span>
                 <span className="text-base font-bold text-gray-800">€1,799</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Máquina de Hielo Industrial</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 50x60x75 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 11 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero5} 
                 alt="Freidora Industrial"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                   Fritura
                 </span>
                 <span className="text-base font-bold text-gray-800">€1,099</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Freidora Industrial Profesional</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 45x55x70 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 12 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero1} 
                 alt="Mesa de Trabajo"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                   Mobiliario
                 </span>
                 <span className="text-base font-bold text-gray-800">€699</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Mesa de Trabajo Acero Inoxidable</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 120x60x85 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 13 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero2} 
                 alt="Extractor de Humos"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                   Ventilación
                 </span>
                 <span className="text-base font-bold text-gray-800">€1,899</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Extractor de Humos Industrial</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 80x60x120 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 14 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero3} 
                 alt="Cocina Industrial"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                   Cocinas
                 </span>
                 <span className="text-base font-bold text-gray-800">€3,299</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Cocina Industrial 6 Fuegos</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 180x80x90 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>

           {/* Producto 15 */}
           <div className="row-span-4 col-span-1 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="h-2/3 overflow-hidden">
               <img 
                 src={hero4} 
                 alt="Salamandra"
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
               />
             </div>
             <div className="p-3">
               <div className="flex justify-between items-start mb-1">
                 <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                   Hornos
                 </span>
                 <span className="text-base font-bold text-gray-800">€2,199</span>
               </div>
               <h3 className="text-sm font-semibold text-gray-800 mb-1">Salamandra Profesional</h3>
               <p className="text-xs text-gray-600 mb-1">Marca: Calfrio</p>
               <p className="text-xs text-gray-500">Medidas: 60x50x80 cm</p>
             </div>
             <div className="absolute bottom-3 right-3 bg-cyan-400 text-white p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-colors cursor-pointer">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };

export default CatalogoProductos;
