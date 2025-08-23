import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/camarasfrigorificas (1).jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const CamarasFrioSegundaMano = () => {
  const navigate = useNavigate();

  const serviciosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Qué tipos de cámaras de frío de segunda mano ofrecen?",
      description: "Ofrecemos un amplio catálogo de cámaras de frío de segunda mano que incluye cámaras frigoríficas, cámaras de congelación, cámaras de refrigeración positiva y negativa. Desde pequeñas cámaras para restaurantes hasta grandes instalaciones industriales, todas revisadas y garantizadas con capacidades desde 200 hasta 10,000 litros.",
      isHighlighted: true,
      route: '/tipos-camaras-frio-segunda-mano-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Cuál es el proceso de compra de cámaras de frío de segunda mano?",
      description: "Nuestro proceso de compra es simple y transparente: evaluación de necesidades, selección del equipo adecuado, inspección técnica, presupuesto detallado, instalación profesional y servicio post-venta. Ofrecemos financiación flexible y opciones de pago adaptadas a cada cliente con entrega e instalación incluida.",
      route: '/proceso-compra-camaras-frio-mallorca'
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
              alt="Cámaras de frío de segunda mano" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              CÁMARAS FRÍO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Cámaras de Frío de Segunda Mano Garantizadas
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre cámaras de frío de segunda mano.';
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
                  Cámaras de Frío de Segunda Mano: Solución Económica y Eficiente
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestras cámaras de frío de segunda mano son la solución perfecta para empresas que buscan optimizar su inversión en equipos de refrigeración sin comprometer la calidad. Todos nuestros equipos pasan por un riguroso proceso de revisión, reacondicionamiento y pruebas para garantizar su perfecto funcionamiento y eficiencia energética.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, ofrecemos un amplio catálogo de cámaras de frío de segunda mano que incluye cámaras frigoríficas, de congelación, de refrigeración positiva y negativa. Desde pequeñas cámaras para restaurantes hasta grandes instalaciones industriales, cada equipo viene con garantía completa y servicio técnico especializado.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  La compra de cámaras de frío de segunda mano puede representar un ahorro significativo del 40-60% sin comprometer la funcionalidad o el rendimiento. Nuestros técnicos especializados garantizan que cada equipo cumple con los más altos estándares de eficiencia y seguridad antes de ser puesto a la venta.
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
                Te puede interesar sobre Cámaras de Frío
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Información detallada sobre tipos de cámaras de frío de segunda mano, proceso de compra y garantías disponibles.
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
                     alt="Cámaras de frío de segunda mano" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Tipos de Cámaras */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Tipos de Cámaras</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Amplio catálogo de cámaras de frío de segunda mano:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Cámaras frigoríficas (0°C a +8°C)</li>
                      <li>Cámaras de congelación (-18°C a -25°C)</li>
                      <li>Cámaras de refrigeración positiva</li>
                      <li>Cámaras de refrigeración negativa</li>
                      <li>Cámaras industriales de gran capacidad</li>
                    </ul>
                    <p className="text-sm">
                      Capacidades desde 200 hasta 10,000 litros disponibles.
                    </p>
                  </div>
                </div>

                {/* Card de Proceso de Compra */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Proceso de Compra</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Proceso simple y transparente:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Evaluación de necesidades específicas</li>
                      <li>Selección del equipo adecuado</li>
                      <li>Inspección técnica completa</li>
                      <li>Presupuesto detallado sin compromiso</li>
                      <li>Instalación profesional incluida</li>
                    </ul>
                    <p className="text-sm">
                      Financiación flexible y opciones de pago adaptadas.
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

export default CamarasFrioSegundaMano;
