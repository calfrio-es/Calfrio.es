import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/camarasfrigorificas (2).jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const CuartosFriosUsadosVenta = () => {
  const navigate = useNavigate();

  const serviciosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Qué ventajas tienen los cuartos fríos usados?",
      description: "Los cuartos fríos usados ofrecen un ahorro significativo del 50-70% respecto a instalaciones nuevas, manteniendo la misma funcionalidad. Nuestros cuartos fríos usados son desmontados, transportados, reacondicionados y reinstalados profesionalmente. Incluyen paneles frigoríficos, puertas y sistemas de refrigeración garantizados.",
      isHighlighted: true,
      route: '/ventajas-cuartos-frios-usados-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Qué incluye la venta de cuartos fríos usados?",
      description: "La venta de cuartos fríos usados incluye desmontaje profesional, transporte, reacondicionamiento, instalación en nueva ubicación, pruebas de funcionamiento y garantía de 12 meses. También ofrecemos servicio de mantenimiento post-venta y asesoramiento técnico especializado para optimizar el rendimiento.",
      route: '/incluye-venta-cuartos-frios-usados-mallorca'
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
              alt="Cuartos fríos usados y venta" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              CUARTOS FRÍOS USADOS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Cuartos Fríos Usados y Venta con Garantía
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre cuartos fríos usados y venta.';
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
                  Cuartos Fríos Usados: Solución Económica y Eficiente
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestros cuartos fríos usados representan la solución perfecta para empresas que buscan optimizar su inversión en instalaciones frigoríficas. Todos nuestros cuartos fríos usados son desmontados profesionalmente, reacondicionados y reinstalados con garantía completa, ofreciendo un ahorro significativo sin comprometer la calidad.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, somos especialistas en la venta de cuartos fríos usados que incluyen desde pequeñas instalaciones para restaurantes hasta grandes cuartos fríos industriales. Cada instalación incluye paneles frigoríficos, puertas, sistemas de refrigeración y control de temperatura, todo reacondicionado y garantizado.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  La compra de cuartos fríos usados puede representar un ahorro del 50-70% respecto a instalaciones nuevas, incluyendo desmontaje, transporte, reacondicionamiento e instalación profesional. Nuestros técnicos especializados garantizan que cada instalación cumple con los más altos estándares de eficiencia y seguridad.
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
                Te puede interesar sobre Cuartos Fríos Usados
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Información detallada sobre ventajas de cuartos fríos usados, proceso de venta y servicios incluidos en la compra.
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
                     alt="Cuartos fríos usados y venta" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Ventajas */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ventajas de Cuartos Fríos Usados</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Beneficios de elegir cuartos fríos usados:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Ahorro del 50-70% en la inversión inicial</li>
                      <li>Desmontaje e instalación profesional incluida</li>
                      <li>Paneles frigoríficos reacondicionados</li>
                      <li>Sistemas de refrigeración garantizados</li>
                      <li>Garantía completa de 12 meses</li>
                    </ul>
                    <p className="text-sm">
                      Instalaciones completas listas para usar con máxima eficiencia energética.
                    </p>
                  </div>
                </div>

                {/* Card de Servicios Incluidos */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Servicios Incluidos</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Nuestro servicio completo incluye:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Desmontaje profesional en ubicación original</li>
                      <li>Transporte seguro a nueva ubicación</li>
                      <li>Reacondicionamiento de paneles y sistemas</li>
                      <li>Instalación profesional completa</li>
                      <li>Pruebas de funcionamiento y garantía</li>
                    </ul>
                    <p className="text-sm">
                      Servicio técnico post-venta y mantenimiento preventivo disponible.
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

export default CuartosFriosUsadosVenta;
