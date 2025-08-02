import React from 'react';

const VentaServicios = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Hornos Industriales",
      description: "Venta de hornos industriales y domésticos de alta calidad para restaurantes, hoteles y cocinas profesionales."
    },
    {
      id: 2,
      number: "02",
      title: "Lavavajillas Profesionales",
      description: "Venta de lavavajillas industriales y equipos de limpieza profesional para el sector hostelero."
    },
    {
      id: 3,
      number: "03",
      title: "Planchas y Freidoras",
      description: "Venta de planchas, freidoras y equipos de cocción profesional para hostelería."
    },
    {
      id: 4,
      number: "04",
      title: "Neveras y Cámaras",
      description: "Venta de neveras, cámaras frigoríficas y equipos de refrigeración comercial."
    },
    {
      id: 5,
      number: "05",
      title: "Equipos de Acero Inoxidable",
      description: "Venta de equipamiento de acero inoxidable fabricado en España para cocinas profesionales."
    }
  ];

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Row - Title and Description */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Title and Badge */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-3">
              <div className="flex items-center text-cyan-400 text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Venta
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Venta de Equipos Profesionales de Hostelería
            </h2>
            
            <div className="text-gray-800 font-semibold">15+ AÑOS DE EXPERIENCIA</div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 text-base mb-6">
              Especializados en la venta de equipos de hostelería de alta calidad en Palma de Mallorca. Ofrecemos una amplia gama de productos fabricados en acero inoxidable, garantizando durabilidad, resistencia y diseño moderno para satisfacer las exigencias de cualquier establecimiento.
            </p>
          </div>
        </div>

        {/* Bottom Row - Image and Services */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Image with Overlay */}
          <div className="relative">
            <div className="relative h-full">
              <img 
                src="/src/assets/img/hero4.webp" 
                alt="Equipos de hostelería en venta"
                className="w-full h-[200px] lg:h-full object-cover rounded-lg"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 bg-white rounded-lg p-2 lg:p-4 shadow-lg max-w-[200px] lg:max-w-xs">
                <div className="flex items-center mb-1 lg:mb-2">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-1 lg:mr-2">
                    <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg lg:text-2xl font-bold text-gray-800">100%</span>
                </div>
                <h3 className="text-gray-800 font-semibold mb-1 text-xs lg:text-sm">Calidad Garantizada</h3>
                <p className="text-[10px] lg:text-xs text-gray-600">Productos Fabricados en España.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={service.id} className={`pb-4 ${index !== services.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl font-light text-gray-300 leading-none">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mb-2 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center text-gray-800 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
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

export default VentaServicios;
