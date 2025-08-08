import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BlogRelacionadosReparaciones = () => {
  const location = useLocation();
  
  // Lista completa de todos los blogs de reparaciones disponibles
  const todosLosBlogsReparaciones = [
    {
      id: 'reparacion-lavavajillas-palma',
      path: '/blog/reparacion-lavavajillas-palma',
      title: 'Reparación de Lavavajillas en Palma de Mallorca'
    },
    {
      id: 'reparacion-lavavajillas-industriales',
      path: '/blog/reparacion-lavavajillas-industriales',
      title: 'Reparación de Lavavajillas Industriales en Palma de Mallorca'
    },
    {
      id: 'tecnicos-lavavajillas',
      path: '/blog/tecnicos-lavavajillas',
      title: 'Técnicos de Lavavajillas en Palma de Mallorca'
    },
    {
      id: 'reparacion-freidoras-industriales',
      path: '/blog/reparacion-freidoras-industriales',
      title: 'Reparación de Freidoras Industriales en Palma de Mallorca'
    },
    {
      id: 'reparar-freidora-palma',
      path: '/blog/reparar-freidora-palma',
      title: 'Reparar Freidora Industrial en Palma de Mallorca'
    },
    {
      id: 'reparacion-cocina-industrial',
      path: '/blog/reparacion-cocina-industrial',
      title: 'Reparación Cocina Industrial en Palma de Mallorca'
    },
    {
      id: 'reparacion-campanas-extractoras',
      path: '/blog/reparacion-campanas-extractoras',
      title: 'Reparación de Campanas Extractoras Industriales en Palma de Mallorca'
    }
  ];

  // Filtrar el blog actual para no mostrarlo
  const blogsRelacionados = todosLosBlogsReparaciones.filter(blog => blog.path !== location.pathname);

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

export default BlogRelacionadosReparaciones;
