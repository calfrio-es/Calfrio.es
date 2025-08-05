import React, { useState, useEffect } from 'react';
import { getProductsByCategory, getCategories } from '../../../data/products';
import hero1 from '../../../assets/img/hero1.webp';
import hero2 from '../../../assets/img/hero2.webp';
import hero3 from '../../../assets/img/hero3.webp';
import hero4 from '../../../assets/img/hero4.webp';
import hero5 from '../../../assets/img/hero5.webp';

const CatalogoProductos = ({ categoriaSeleccionada }) => {


  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // Imágenes por defecto para los productos
  const imagenesPorDefecto = [hero1, hero2, hero3, hero4, hero5];

  useEffect(() => {
    if (categoriaSeleccionada && categoriaSeleccionada !== 'todos') {
      const productosCategoria = getProductsByCategory(categoriaSeleccionada);
      const productosConImagenes = productosCategoria.map((producto) => ({
        ...producto,
        imagen: producto.image || imagenesPorDefecto[Math.floor(Math.random() * imagenesPorDefecto.length)],
        marca: 'Calfrio',
        medidas: producto.dimensions || 'Medidas a consultar'
      }));
      setProductosFiltrados(productosConImagenes);
    } else {
      // Mostrar todos los productos si no hay categoría seleccionada o si se selecciona "todos"
      const todosLosProductos = getProductsByCategory('accesorios-lavado')
        .concat(getProductsByCategory('abrillantadoras-cubiertos'))
        .concat(getProductsByCategory('lavavajillas'))
        .concat(getProductsByCategory('abatidores'))
        .concat(getProductsByCategory('armarios-refrigeradores'));
      
      const productosConImagenes = todosLosProductos.map((producto) => ({
        ...producto,
        imagen: producto.image || imagenesPorDefecto[Math.floor(Math.random() * imagenesPorDefecto.length)],
        marca: 'Calfrio',
        medidas: producto.dimensions || 'Medidas a consultar'
      }));
      setProductosFiltrados(productosConImagenes);
    }
  }, [categoriaSeleccionada]);

    return (
    <section className="py-12 bg-white" data-productos-section>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Título dinámico */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {categoriaSeleccionada && categoriaSeleccionada !== 'todos'
              ? productosFiltrados[0]?.categoryName || 'Productos'
              : 'Todos los productos'
            }
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {productosFiltrados.length} productos disponibles
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                                          {/* Productos dinámicos */}
                     {productosFiltrados.map((producto, index) => (
                                                                       <div key={producto.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative min-h-[420px] sm:min-h-[380px] max-h-[480px] sm:max-h-[440px]">
                          <div className="h-64 sm:h-72 overflow-hidden">
                           <img 
                             src={producto.imagen} 
                             alt={producto.name}
                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                           />
                         </div>
                         <div className="p-3 flex flex-col h-full">
                           <div className="flex justify-start items-start mb-1">
                             <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                               {producto.categoryName}
                             </span>
                           </div>
                           <h3 className="text-sm font-semibold text-gray-800 mb-1">{producto.name}</h3>
                           <p className="text-xs text-gray-600 mb-1">Marca: {producto.marca}</p>
                           <p className="text-xs text-gray-500">Medidas: {producto.medidas}</p>
                           {producto.capacity && (
                             <p className="text-xs text-gray-500">Capacidad: {producto.capacity}</p>
                           )}
                         </div>
                         <div className="absolute bottom-3 right-3 bg-cyan-500 text-white p-2 rounded-full shadow-lg hover:bg-cyan-600 transition-colors cursor-pointer">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                         </div>
                       </div>
                     ))}
                   </div>
       </div>
     </section>
   );
 };

export default CatalogoProductos;
