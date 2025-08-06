import React from 'react';
import { getCategories } from '../../../data/products';

// Importar imágenes representativas de cada categoría
import cesta15platos from '../../../assets/img/products/accesorios-lavado/cesta15platos.webp';
import secadorabrillantadora3000ud from '../../../assets/img/products/abrillantadoras-cubiertos/secadorabrillantadora3000ud.webp';
import lavaobjetos445cm from '../../../assets/img/products/lavavajillas/lavaobjetos445cm.webp';
import abatidor10bandejas from '../../../assets/img/products/abatidores/abatidor-de-temperatura-mixto-10-bandejas-gn2-1-y-600x400-mm-de-1270-x1090-x1800h-mm-cordoba-cr-102-600x600.webp';
import armariogn21inoxidable from '../../../assets/img/products/armarios-refrigeradores/armario-gn2-1-inoxidable-con-12-cajones-600.webp';

const CategoriaProductos = ({ onCategoriaSelect, categoriaSeleccionada }) => {
  const categorias = [
    {
      id: 0,
      nombre: 'Todos los productos',
      imagen: null,
      color: 'bg-gray-500',
      badge: null,
      slug: 'todos'
    },
    {
      id: 1,
      nombre: 'Abrillantadoras Cubiertos',
      imagen: secadorabrillantadora3000ud,
      color: 'bg-yellow-500',
      badge: null,
      slug: 'abrillantadoras-cubiertos'
    },
    {
      id: 2,
      nombre: 'Lavavajillas',
      imagen: lavaobjetos445cm,
      color: 'bg-cyan-500',
      badge: null,
      slug: 'lavavajillas'
    },
    {
      id: 3,
      nombre: 'Abatidores',
      imagen: abatidor10bandejas,
      color: 'bg-indigo-500',
      badge: null,
      slug: 'abatidores'
    },
    {
      id: 4,
      nombre: 'Armarios refrigeradores',
      imagen: armariogn21inoxidable,
      color: 'bg-green-500',
      badge: null,
      slug: 'armarios-refrigeradores'
    },
    {
      id: 5,
      nombre: 'Accesorios de Lavado',
      imagen: cesta15platos,
      color: 'bg-blue-500',
      badge: null,
      slug: 'accesorios-lavado'
    }
  ];

  const handleCategoriaClick = (slug) => {
    onCategoriaSelect(slug);
    
    // Scroll suave a los productos
    setTimeout(() => {
      const productosSection = document.querySelector('[data-productos-section]');
      if (productosSection) {
        productosSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Selecciona una categoría
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Explora nuestros productos por categoría
          </p>
        </div>
        <div className="flex overflow-x-auto gap-10 pb-4 scrollbar-hide justify-start md:justify-center">
          {categorias.map((categoria) => (
            <div 
              key={categoria.id} 
              className={`flex flex-col items-center group cursor-pointer flex-shrink-0 w-20 ${
                categoriaSeleccionada === categoria.slug ? 'scale-110' : ''
              }`}
              onClick={() => handleCategoriaClick(categoria.slug)}
            >
              <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl overflow-hidden ${
                categoriaSeleccionada === categoria.slug ? 'shadow-xl bg-cyan-50' : ''
              }`}>
                {categoria.imagen ? (
                  <img 
                    src={categoria.imagen} 
                    alt={categoria.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl md:text-2xl">
                    📦
                  </span>
                )}
                
                {/* Badge para elementos destacados */}
                {categoria.badge && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      {categoria.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <span className="text-xs md:text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {categoria.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriaProductos;
