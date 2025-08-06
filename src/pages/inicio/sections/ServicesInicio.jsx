import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Reparación",
      description: "Servicio técnico especializado para equipos de hostelería. Reparamos todo tipo de maquinaria y equipamiento con garantía y piezas originales.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Mantenimiento",
      description: "Programas de mantenimiento preventivo para garantizar el óptimo funcionamiento de sus equipos y prolongar su vida útil.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Venta",
      description: "Amplio catálogo de equipos de hostelería de acero inoxidable. Productos de alta calidad fabricados en España con garantía.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Atención Posventa",
      description: "Soporte técnico continuo después de la compra. Asesoramiento, garantías extendidas y servicio de atención al cliente.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Soluciones a Medida",
      description: "Diseño y fabricación personalizada de equipos según sus necesidades específicas. Adaptamos soluciones a su espacio y requerimientos.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-cyan-400">Servicios</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios para el sector de la hostelería, 
            desde la venta hasta el mantenimiento y reparación de equipos.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-transparent p-3 rounded-lg text-gray-800 mr-4 border-2 border-cyan-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          
          {/* Botón "Conoce más" en el sexto espacio */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white border border-gray-100 flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Descubre todos nuestros servicios especializados y soluciones personalizadas para tu negocio.
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 bg-transparent text-gray-800 font-medium rounded-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors duration-300"
            >
              Ver Todos los Servicios
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Services; 