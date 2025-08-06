import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogsRelacionados = () => {
  const location = useLocation();
  
  // Lista completa de todos los blogs disponibles
  const todosLosBlogs = [
    {
      id: 'horno-pizza',
      path: '/blog/horno-pizza',
      title: 'Los Hornos para Pizza'
    },
    {
      id: 'lavavajillas-industriales',
      path: '/blog/lavavajillas-industriales',
      title: 'Lavavajillas Industriales'
    },
    {
      id: 'lavavajillas-smeg',
      path: '/blog/lavavajillas-smeg',
      title: 'Lavavajillas SMEG'
    },
    {
      id: 'lavavajillas-hosteleria',
      path: '/blog/lavavajillas-hosteleria',
      title: 'Lavavajillas para Hostelería'
    },
    {
      id: 'lavavajillas-copas-hosteleria',
      path: '/blog/lavavajillas-copas-hosteleria',
      title: 'Lavavajillas de Copas para Hostelería'
    },
    {
      id: 'lavavajillas-de-bar',
      path: '/blog/lavavajillas-de-bar',
      title: 'Lavavajillas de Bar'
    },
    {
      id: 'tipos-lavavajillas-hosteleria',
      path: '/blog/tipos-lavavajillas-hosteleria',
      title: 'Tipos de Lavavajillas de Hostelería'
    },
    {
      id: 'fogones-gas',
      path: '/blog/fogones-gas',
      title: 'Los Fogones de Gas'
    },
    {
      id: 'cocinas-gas',
      path: '/blog/cocinas-gas',
      title: 'Cocinas de Gas Profesionales'
    },
    {
      id: 'cocina-gas-butano',
      path: '/blog/cocina-gas-butano',
      title: 'Cocina de Gas Butano'
    },
    {
      id: 'horno-gas',
      path: '/blog/horno-gas',
      title: 'El Horno de Gas'
    },
    {
      id: 'reparacion-maquinaria-hosteleria',
      path: '/blog/reparacion-maquinaria-hosteleria',
      title: 'Reparación de Maquinaria de Hostelería'
    }
  ];

  // Filtrar el blog actual para no mostrarlo
  const blogsRelacionados = todosLosBlogs.filter(blog => blog.path !== location.pathname);

  return (
    <div className="p-6">
      {/* Mini título */}
      <h3 className="text-sm text-gray-500 mb-6">
        También te puede interesar
      </h3>

      {/* Renderizar todos los blogs excepto el actual */}
      {blogsRelacionados.map((blog, index) => (
        <React.Fragment key={blog.id}>
          <div className="mb-8 relative">
            <Link to={blog.path} className="block">
              <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                {blog.title}
              </h2>
              <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                →
              </div>
            </Link>
          </div>

          {/* Línea negra separadora (excepto para el último elemento) */}
          {index < blogsRelacionados.length - 1 && (
            <div className="border-t-2 border-black mb-8"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlogsRelacionados;
