import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/camarasfrigorificas (1).jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const PrecioCamarasDeFrio = () => {
  const navigate = useNavigate();

  const serviciosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Cuáles son los precios de cámaras de frío según el tamaño?",
      description: "Los precios de cámaras de frío varían según el tamaño: cámaras pequeñas (200-500 litros) desde 800€, cámaras medianas (500-1000 litros) desde 1.200€, cámaras grandes (1000-2000 litros) desde 1.800€, y cámaras industriales (más de 2000 litros) desde 2.500€. Todos los precios incluyen instalación y garantía de 12 meses.",
      isHighlighted: true,
      route: '/precios-camaras-frio-tamanos-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Qué factores influyen en el precio de las cámaras de frío?",
      description: "Los factores que influyen en el precio incluyen el tamaño y capacidad, el tipo de refrigeración (positiva o negativa), la marca y calidad del equipo, la complejidad de la instalación, los accesorios incluidos (puertas, estantes, iluminación), y si es equipo nuevo o de segunda mano. Ofrecemos financiación flexible y descuentos por volumen.",
      route: '/factores-precio-camaras-frio-mallorca'
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
              alt="Precios de cámaras de frío" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              PRECIOS CÁMARAS FRÍO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Precios Competitivos en Cámaras de Frío Garantizadas
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre precios de cámaras de frío.';
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
                  Precios de Cámaras de Frío: Calidad y Competitividad
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestros precios de cámaras de frío están diseñados para ofrecer la mejor relación calidad-precio del mercado. Ofrecemos cámaras de frío nuevas y de segunda mano con precios competitivos que se adaptan a diferentes presupuestos y necesidades, sin comprometer la calidad o el rendimiento.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, nuestros precios incluyen la cámara de frío completa, instalación profesional, pruebas de funcionamiento y garantía de 12 meses. Ofrecemos financiación flexible y opciones de pago adaptadas a cada cliente, incluyendo descuentos por volumen y equipos de segunda mano con ahorros significativos.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Los precios varían según el tamaño, tipo de refrigeración, marca y accesorios incluidos. Nuestros técnicos especializados asesoran sobre la mejor opción para cada necesidad específica, garantizando que cada inversión sea rentable y eficiente a largo plazo.
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
                Te puede interesar sobre Precios de Cámaras de Frío
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Información detallada sobre precios según tamaño, factores que influyen en el costo y opciones de financiación disponibles.
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
                     alt="Precios de cámaras de frío" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Precios por Tamaño */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Precios por Tamaño</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Precios orientativos según capacidad:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Cámaras pequeñas (200-500L): desde 800€</li>
                      <li>Cámaras medianas (500-1000L): desde 1.200€</li>
                      <li>Cámaras grandes (1000-2000L): desde 1.800€</li>
                      <li>Cámaras industriales (+2000L): desde 2.500€</li>
                      <li>Segunda mano: 40-60% de descuento</li>
                    </ul>
                    <p className="text-sm">
                      Precios incluyen instalación y garantía de 12 meses.
                    </p>
                  </div>
                </div>

                {/* Card de Factores de Precio */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Factores de Precio</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Elementos que influyen en el costo:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Tamaño y capacidad de refrigeración</li>
                      <li>Tipo de refrigeración (positiva/negativa)</li>
                      <li>Marca y calidad del equipo</li>
                      <li>Complejidad de la instalación</li>
                      <li>Accesorios incluidos</li>
                    </ul>
                    <p className="text-sm">
                      Financiación flexible y descuentos por volumen disponibles.
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

export default PrecioCamarasDeFrio;
