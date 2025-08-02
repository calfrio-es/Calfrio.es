import React from 'react';

const CategoriaProductos = () => {
  const categorias = [
    {
      id: 1,
      nombre: 'Hornos',
      icono: '🔥',
      color: 'bg-orange-500',
      badge: null
    },
    {
      id: 2,
      nombre: 'Frigoríficos',
      icono: '❄️',
      color: 'bg-blue-500',
      badge: null,
      destacado: false
    },
    {
      id: 3,
      nombre: 'Lavavajillas',
      icono: '🧽',
      color: 'bg-cyan-500',
      badge: null
    },
    {
      id: 4,
      nombre: 'Planchas',
      icono: '🍳',
      color: 'bg-gray-600',
      badge: null
    },
    {
      id: 5,
      nombre: 'Batidoras',
      icono: '🥄',
      color: 'bg-purple-500',
      badge: null
    },
    {
      id: 6,
      nombre: 'Cafeteras',
      icono: '☕',
      color: 'bg-brown-600',
      badge: null
    },
    {
      id: 7,
      nombre: 'Ventilación',
      icono: '💨',
      color: 'bg-green-500',
      badge: null
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-4 scrollbar-hide justify-start md:justify-center">
          {categorias.map((categoria) => (
                         <div key={categoria.id} className="flex flex-col items-center group cursor-pointer flex-shrink-0">
              <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                categoria.destacado ? 'ring-2 ring-green-500' : ''
              }`}>
                <span className="text-2xl md:text-3xl">
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
              
              <span className="text-sm md:text-base font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
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
