import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../../data/products';

// Importar imágenes de productos destacados
import cesta15platos from '../../../assets/img/products/accesorios-lavado/cesta15platos.webp';
import secadorabrillantadora3000ud from '../../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3000ud.webp';
import lavaobjetos445cm from '../../../assets/img/products/lavavajillas/lavaobjetos445cm.webp';
import abatidor10bandejas from '../../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-10-bandejas-gn2-1-y-600x400-mm-de-1270-x1090-x1800h-mm-cordoba-cr-102-600x600.webp';
import armariogn21inoxidable from '../../../assets/img/products/armarios-refrigeradores/armario-gn2-1-inoxidable-con-12-cajones-600.webp';

const ProductsInicio = () => {
  const navigate = useNavigate();

  // Productos destacados para mostrar en la animación
  const productosDestacados = [
    {
      id: 1,
      name: "Cesta 15 Platos",
      category: "Accesorios de Lavado",
      description: "Cesta para 15 platos de 500 x 500 x 100h mm",
      image: cesta15platos,
      slug: "cesta-15-platos"
    },
    {
      id: 10,
      name: "Secadora Abrillantadora 3000 ud/hora",
      category: "Abrillantadoras Cubiertos",
      description: "Secadora abrillantadora de cubiertos con capacidad de 3000 unidades por hora",
      image: secadorabrillantadora3000ud,
      slug: "secadora-abrillantadora-3000"
    },
    {
      id: 13,
      name: "Lavaobjetos con Cesta 60×67 cm",
      category: "Lavavajillas",
      description: "Lavaobjetos con cesta de 60×67 cm, altura de lavado 44,5 cm",
      image: lavaobjetos445cm,
      slug: "lavaobjetos-cesta-60x67-44-5cm"
    },
    {
      id: 27,
      name: "Abatidor de Temperatura Mixto 10 bandejas",
      category: "Abatidores",
      description: "Abatidor de temperatura mixto con 10 bandejas GN2/1 y 600×400 mm",
      image: abatidor10bandejas,
      slug: "abatidor-temperatura-mixto-10-bandejas-gn2-1"
    },
    {
      id: 32,
      name: "Armario GN2/1 Inoxidable 12 cajones",
      category: "Armarios refrigeradores",
      description: "Armario GN2/1 inoxidable con 12 cajones, 600 litros para congelados",
      image: armariogn21inoxidable,
      slug: "armario-gn2-1-inoxidable-12-cajones-600-litros"
    }
  ];

  // Duplicar productos para crear el efecto infinito
  const productosDuplicados = [...productosDestacados, ...productosDestacados, ...productosDestacados];

  const handleProductClick = (slug) => {
    navigate(`/producto/${slug}`);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
                 {/* Título de la sección */}
         <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
             Nuestros Productos Destacados
           </h2>
           <p className="text-gray-600 text-base max-w-xl mx-auto mb-4">
             Descubre nuestra amplia gama de equipos para hostelería.
           </p>
           
                       {/* Botón para ver todos los productos */}
            <div className="text-center mb-8">
              <button 
                onClick={() => navigate('/productos')}
                className="inline-flex items-center px-6 py-2 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
              >
                Ver todos los productos
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
         </div>

                 {/* Contenedor de animación infinita */}
         <div className="relative">
                                            {/* Contenedor de productos con animación */}
            <div className="flex animate-scroll-left">
              {productosDuplicados.map((producto, index) => (
                <div 
                  key={`${producto.id}-${index}`}
                  className="flex-shrink-0 w-full max-w-[calc(25%-1rem)] min-w-[240px] mx-2 cursor-pointer group"
                  onClick={() => handleProductClick(producto.slug)}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative min-h-[320px] sm:min-h-[280px] max-h-[380px] sm:max-h-[340px]">
                    {/* Imagen del producto */}
                    <div className="h-48 sm:h-56 overflow-hidden">
                      <img 
                        src={producto.image} 
                        alt={producto.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                                         {/* Información del producto */}
                     <div className="p-2 flex flex-col justify-center h-20">
                       {/* Badge de categoría */}
                       <div className="flex justify-start items-start mb-1">
                         <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                           {producto.category}
                         </span>
                       </div>
                       
                       {/* Nombre del producto */}
                       <h3 className="text-xs font-semibold text-gray-800 group-hover:text-cyan-400 transition-colors line-clamp-2">
                         {producto.name}
                       </h3>
                     </div>
                    
                                         {/* Icono de flecha */}
                     <div className="absolute bottom-2 right-2 bg-cyan-400 text-white p-1.5 rounded-full shadow-lg hover:bg-cyan-500 transition-colors">
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                     </div>
                  </div>
                </div>
              ))}
            </div>
                                   </div>
        </div>


    </section>
  );
};

export default ProductsInicio; 