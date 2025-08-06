import React from 'react';
import { getCategories } from '../../../data/products';

// Importar iconos de Lucide React
import { Package, Sparkles, Droplets, Snowflake, Box, CircleDot } from 'lucide-react';

const CategoriaProductos = ({ onCategoriaSelect, categoriaSeleccionada }) => {
  const categorias = [
    {
      id: 0,
      nombre: 'Todos',
      icono: Package,
      color: 'bg-gray-500',
      badge: null,
      slug: 'todos',
      tieneCyan: true
    },
    {
      id: 1,
      nombre: 'Abrillantadoras',
      icono: Sparkles,
      color: 'bg-yellow-500',
      badge: null,
      slug: 'abrillantadoras-cubiertos',
      tieneCyan: true
    },
    {
      id: 2,
      nombre: 'Lavavajillas',
      icono: Droplets,
      color: 'bg-cyan-500',
      badge: null,
      slug: 'lavavajillas',
      tieneCyan: true
    },
    {
      id: 3,
      nombre: 'Abatidores',
      icono: Snowflake,
      color: 'bg-indigo-500',
      badge: null,
      slug: 'abatidores',
      tieneCyan: true
    },
    {
      id: 4,
      nombre: 'Refrigeradores',
      icono: Box,
      color: 'bg-green-500',
      badge: null,
      slug: 'armarios-refrigeradores',
      tieneCyan: true
    },
    {
      id: 5,
      nombre: 'Accesorios',
      icono: CircleDot,
      color: 'bg-blue-500',
      badge: null,
      slug: 'accesorios-lavado',
      tieneCyan: true
    }
  ];

  const handleCategoriaClick = (slug) => {
    onCategoriaSelect(slug);
    
    // Scroll suave a los productos, ajustado para el sticky
    setTimeout(() => {
      const productosSection = document.querySelector('[data-productos-section]');
      if (productosSection) {
        const stickyHeight = 130; // Altura aproximada del sticky (top-16 + padding)
        const elementPosition = productosSection.offsetTop - stickyHeight - 20; // 20px de margen adicional
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
              Selecciona una categoría
            </h2>
            <p className="text-gray-600 text-sm">
              Explora nuestros productos por categoría
            </p>
          </div>
        </div>
      </section>
      
      <div className="sticky top-16 z-40 bg-gray-50 border-b border-gray-200 shadow-sm py-2">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex overflow-x-auto gap-8 pb-2 scrollbar-hide justify-start md:justify-center">
            {categorias.map((categoria) => {
              const IconComponent = categoria.icono;
              return (
                <div 
                  key={categoria.id} 
                  className={`flex flex-col items-center group cursor-pointer flex-shrink-0 w-20 ${
                    categoriaSeleccionada === categoria.slug ? 'scale-110' : ''
                  }`}
                  onClick={() => handleCategoriaClick(categoria.slug)}
                >
                  <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl overflow-hidden ${
                    categoriaSeleccionada === categoria.slug ? 'shadow-xl bg-gray-50' : ''
                  }`}>
                    <div className={`absolute inset-3 rounded-full border-2 border-cyan-300 flex items-center justify-center ${
                      categoriaSeleccionada === categoria.slug ? 'bg-cyan-100' : 'bg-transparent'
                    }`}>
                      <IconComponent 
                        size={20}
                        className={`transition-colors duration-300 ${
                          categoriaSeleccionada === categoria.slug 
                            ? 'text-cyan-600 group-hover:text-cyan-700' 
                            : 'text-gray-600 group-hover:text-gray-800'
                        }`}
                      />
                    </div>
                    
                    {/* Badge para elementos destacados */}
                    {categoria.badge && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">
                          {categoria.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <span className="text-xs font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {categoria.nombre}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriaProductos;
