import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/camarasfrigorificas.jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const CamarasFrigorificasPrecio = () => {
  const navigate = useNavigate();

  const serviciosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Cuáles son los precios de cámaras frigoríficas nuevas?",
      description: "Los precios de cámaras frigoríficas nuevas varían según la capacidad y características. Cámaras pequeñas (200-500 litros) desde €800, medianas (500-1000 litros) desde €1,500, grandes (1000-2000 litros) desde €3,000, e industriales (2000+ litros) desde €5,000. Incluye instalación y garantía de 2 años.",
      isHighlighted: true,
      route: '/precios-camaras-nuevas-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Cuánto cuestan las cámaras frigoríficas de segunda mano?",
      description: "Las cámaras frigoríficas de segunda mano ofrecen un ahorro del 40-60% respecto a equipos nuevos. Precios desde €400 para cámaras pequeñas, €800 para medianas, €1,500 para grandes y €2,500 para industriales. Todas incluyen garantía de 12 meses y servicio técnico.",
      route: '/precios-camaras-segunda-mano-mallorca'
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
              alt="Precios de cámaras frigoríficas" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              PRECIOS CÁMARAS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Precios Competitivos en Cámaras Frigoríficas
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre precios de cámaras frigoríficas.';
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
                  Precios de Cámaras Frigoríficas: Transparencia Total
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ofrecemos precios competitivos y transparentes en todas nuestras cámaras frigoríficas, tanto nuevas como de segunda mano. Nuestros precios incluyen instalación profesional, garantía completa y servicio técnico post-venta, sin costos ocultos ni sorpresas desagradables.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, somos líderes en precios justos para cámaras frigoríficas de todos los tamaños y capacidades. Desde pequeñas cámaras para restaurantes hasta grandes instalaciones industriales, ofrecemos la mejor relación calidad-precio del mercado con financiación flexible y opciones de pago adaptadas a cada cliente.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Realizamos presupuestos personalizados sin compromiso, considerando las necesidades específicas de cada negocio, el espacio disponible y el tipo de productos a refrigerar. Nuestros técnicos especializados asesoran sobre la mejor opción para optimizar su inversión.
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
                Te puede interesar sobre Precios
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Información detallada sobre precios de cámaras frigoríficas nuevas y de segunda mano, incluyendo factores que afectan el costo y opciones de financiación.
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
                     alt="Precios de cámaras frigoríficas" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Precios Nuevas */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Precios Cámaras Nuevas</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Precios aproximados de cámaras frigoríficas nuevas:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Pequeñas (200-500L): desde €800</li>
                      <li>Medianas (500-1000L): desde €1,500</li>
                      <li>Grandes (1000-2000L): desde €3,000</li>
                      <li>Industriales (2000L+): desde €5,000</li>
                    </ul>
                    <p className="text-sm">
                      Incluye instalación, garantía de 2 años y servicio técnico.
                    </p>
                  </div>
                </div>

                {/* Card de Precios Segunda Mano */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Precios Segunda Mano</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Ahorro del 40-60% con cámaras de segunda mano:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Pequeñas (200-500L): desde €400</li>
                      <li>Medianas (500-1000L): desde €800</li>
                      <li>Grandes (1000-2000L): desde €1,500</li>
                      <li>Industriales (2000L+): desde €2,500</li>
                    </ul>
                    <p className="text-sm">
                      Garantía de 12 meses y equipos reacondicionados.
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

export default CamarasFrigorificasPrecio;
