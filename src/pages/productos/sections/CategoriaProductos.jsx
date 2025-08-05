import React from 'react';
import { getCategories } from '../../../data/products';

const CategoriaProductos = ({ onCategoriaSelect, categoriaSeleccionada }) => {
  const categorias = [
    {
      id: 0,
      nombre: 'Todos los productos',
      icono: '📦',
      color: 'bg-gray-500',
      badge: null,
      slug: 'todos'
    },
    {
      id: 1,
      nombre: 'Accesorios de Lavado',
      icono: '🧺',
      color: 'bg-blue-500',
      badge: null,
      slug: 'accesorios-lavado'
    },
    {
      id: 2,
      nombre: 'Abrillantadoras Cubiertos',
      icono: '✨',
      color: 'bg-yellow-500',
      badge: null,
      slug: 'abrillantadoras-cubiertos'
    },
    {
      id: 3,
      nombre: 'Lavavajillas',
      icono: '🧽',
      color: 'bg-cyan-500',
      badge: null,
      slug: 'lavavajillas'
    },
    {
      id: 4,
      nombre: 'Abatidores',
      icono: '❄️',
      color: 'bg-indigo-500',
      badge: null,
      slug: 'abatidores'
    },
    {
      id: 5,
      nombre: 'Armarios refrigeradores',
      icono: '🏠',
      color: 'bg-green-500',
      badge: null,
      slug: 'armarios-refrigeradores'
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
        <div className="flex overflow-x-auto gap-10 pb-4 scrollbar-hide justify-center">
          {categorias.map((categoria) => (
            <div 
              key={categoria.id} 
              className={`flex flex-col items-center group cursor-pointer flex-shrink-0 w-20 ${
                categoriaSeleccionada === categoria.slug ? 'scale-110' : ''
              }`}
              onClick={() => handleCategoriaClick(categoria.slug)}
            >
              <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                categoriaSeleccionada === categoria.slug ? 'shadow-xl bg-cyan-50' : ''
              }`}>
                <span className="text-xl md:text-2xl">
                  {categoria.icono}
                </span>
                
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
