import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/camarasfrigorificas (2).jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const CamarasFrigorificasIndustriales = () => {
  const navigate = useNavigate();

  const serviciosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Qué características tienen las cámaras frigoríficas industriales?",
      description: "Las cámaras frigoríficas industriales están diseñadas para almacenamiento masivo con capacidades desde 1,000 hasta 50,000 litros. Incluyen sistemas de control de temperatura avanzados, puertas de alta frecuencia, sistemas de descongelación automática y paneles frigoríficos de alta densidad para máxima eficiencia energética.",
      isHighlighted: true,
      route: '/caracteristicas-camaras-industriales-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Cuáles son las aplicaciones de las cámaras frigoríficas industriales?",
      description: "Las cámaras frigoríficas industriales se utilizan en supermercados, centros logísticos, industrias alimentarias, pesqueras y cárnicas. Perfectas para almacenamiento de productos refrigerados y congelados a gran escala con control de humedad y temperatura optimizado para cada tipo de producto.",
      route: '/aplicaciones-camaras-industriales-mallorca'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-cyan-50">
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden flex items-center justify-center pt-18">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img 
              src={heroBarcosImg} 
              alt="Cámaras frigoríficas industriales" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              CÁMARAS INDUSTRIALES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Cámaras Frigoríficas Industriales de Alta Capacidad
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre cámaras frigoríficas industriales.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <span className="mr-3">Solicitar Presupuesto</span>
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg className="w-3 h-3 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Contenido principal */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  Cámaras Frigoríficas Industriales: Soluciones de Gran Capacidad
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestras cámaras frigoríficas industriales están diseñadas para satisfacer las demandas más exigentes del sector industrial. Con capacidades que van desde 1,000 hasta 50,000 litros, estas cámaras ofrecen la máxima eficiencia energética y control de temperatura para almacenamiento masivo de productos refrigerados y congelados.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, somos especialistas en el diseño, fabricación e instalación de cámaras frigoríficas industriales para supermercados, centros logísticos, industrias alimentarias y pesqueras. Cada instalación se adapta a las necesidades específicas del cliente con sistemas de control avanzados y máxima durabilidad.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Las cámaras frigoríficas industriales incluyen características avanzadas como puertas de alta frecuencia, sistemas de descongelación automática, control de humedad y paneles frigoríficos de alta densidad que garantizan la conservación óptima de sus productos con el menor consumo energético posible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de servicios específicos */}
        <section className="py-12 bg-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Servicios Específicos
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Te puede interesar sobre Cámaras Industriales
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Respuestas detalladas a las preguntas más comunes sobre cámaras frigoríficas industriales, sus características y aplicaciones en diferentes sectores.
              </p>
            </div>

            {/* Main Content - Services Column */}
            <div className="space-y-6 max-w-6xl mx-auto">
              {serviciosEspecificos.map((servicio, index) => (
                <div 
                  key={servicio.id} 
                  className={`${servicio.isHighlighted ? "bg-cyan-100 text-black p-6 rounded-lg" : "p-6 border-b border-gray-200"} cursor-pointer hover:shadow-lg transition-all duration-300`}
                  onClick={() => navigate(servicio.route)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className={`text-4xl font-light leading-none ${servicio.isHighlighted ? 'text-black' : 'text-gray-300'}`}>
                      {servicio.number}
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 flex-1">
                      <h3 className={`text-2xl font-bold ${servicio.isHighlighted ? 'text-black' : 'text-gray-800'}`}>
                        {servicio.title}
                      </h3>
                      <p className={`text-sm lg:flex-1 ${servicio.isHighlighted ? 'text-black' : 'text-gray-500'}`}>
                        {servicio.description}
                      </p>
                    </div>
                    <svg className="w-8 h-8 text-black flex-shrink-0 self-center lg:self-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cards de información */}
        <div className="bg-white py-4">
          <div className="container mx-auto px-2">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-4 relative">
                 
                 {/* Imagen central */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-30">
                   <img 
                     src={servicesBarcosImg} 
                     alt="Cámaras frigoríficas industriales" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Características */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Características Principales</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Las cámaras frigoríficas industriales incluyen:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Capacidades de 1,000 a 50,000 litros</li>
                      <li>Control de temperatura avanzado</li>
                      <li>Puertas de alta frecuencia</li>
                      <li>Sistemas de descongelación automática</li>
                      <li>Paneles frigoríficos de alta densidad</li>
                    </ul>
                    <p className="text-sm">
                      Máxima eficiencia energética y durabilidad para uso industrial intensivo.
                    </p>
                  </div>
                </div>

                {/* Card de Aplicaciones */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Aplicaciones Industriales</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Sectores que utilizan cámaras frigoríficas industriales:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Supermercados y centros comerciales</li>
                      <li>Centros logísticos y almacenes</li>
                      <li>Industrias alimentarias</li>
                      <li>Pesqueras y cárnicas</li>
                      <li>Restaurantes y hoteles</li>
                    </ul>
                    <p className="text-sm">
                      Soluciones personalizadas para cada tipo de negocio y necesidad específica.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CamarasFrigorificasIndustriales;
