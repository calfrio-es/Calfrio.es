import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/herobarcos.jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const CostoManutencionYate30M = () => {
  const navigate = useNavigate();

  const serviciosDetallados = [
    {
      id: 1,
      number: "01",
      title: "¿Cuánto cuesta mantener un yate de lujo?",
      description: "Los yates de lujo (40+ metros) pueden requerir inversiones anuales de €150,000 a €500,000+. Factores como materiales premium, sistemas avanzados de navegación, equipos de entretenimiento de alta gama, tripulación especializada y servicios exclusivos elevan considerablemente los costos de mantenimiento.",
      isHighlighted: true,
      route: '/costos-mantenimiento-yates-lujo-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Cuánto cuesta mantener un yate?",
      description: "En Mallorca, los costos de mantenimiento náutico están influenciados por la calidad de los servicios, la disponibilidad de repuestos originales y la experiencia de los técnicos especializados. Nuestro equipo ofrece transparencia total en los costos y la mejor relación calidad-precio del mercado.",
      route: '/costos-mantenimiento-yates-mallorca'
    },
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
              alt="Costos de mantenimiento de yates de 30 metros" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              YATES DE 30 METROS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Guía Completa de Costos de Mantenimiento
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información específica sobre costos de mantenimiento de yates de 30 metros.';
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
                  Mantenimiento de Yates de 30 Metros: Inversión en Excelencia Náutica
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Los yates de 30 metros representan una categoría premium en el mundo náutico, combinando lujo, tecnología avanzada y capacidades de navegación excepcionales. El mantenimiento de estas embarcaciones requiere un enfoque especializado que garantice el rendimiento óptimo y la preservación del valor de la inversión.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, los yates de 30 metros son frecuentes en las aguas del Mediterráneo, y su mantenimiento debe cumplir con los más altos estándares de la industria. Nuestro equipo especializado comprende las necesidades específicas de estas embarcaciones y ofrece servicios integrales adaptados a sus características únicas.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  El costo anual de mantenimiento para un yate de 30 metros oscila entre €60,000 y €120,000, dependiendo de factores como la frecuencia de uso, la complejidad de los sistemas a bordo, y la calidad de los materiales utilizados en su construcción.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de servicios detallados */}
        <section className="py-12 bg-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Servicios Detallados
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Servicios de Mantenimiento Especializados
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Desglose detallado de todos los servicios necesarios para mantener un yate de 30 metros en condiciones óptimas, con costos específicos para cada categoría de servicio.
              </p>
            </div>

            {/* Main Content - Services Column */}
            <div className="space-y-6 max-w-6xl mx-auto">
              {serviciosDetallados.map((servicio, index) => (
                <div 
                  key={servicio.id} 
                  className={`${servicio.isHighlighted ? "bg-cyan-100 text-black p-6 rounded-lg" : "p-6 border-b border-gray-200"} ${servicio.route ? 'cursor-pointer hover:shadow-lg transition-all duration-300' : ''}`}
                  onClick={servicio.route ? () => navigate(servicio.route) : undefined}
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
                    {servicio.route && (
                      <svg className="w-8 h-8 text-black flex-shrink-0 self-center lg:self-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cards de información adicional */}
        <div className="bg-white py-4">
          <div className="container mx-auto px-2">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-4 relative">
                 
                 {/* Imagen central */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-30">
                   <img 
                     src={servicesBarcosImg} 
                     alt="Mantenimiento yates 30m" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Costos Totales */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Costos Totales Anuales</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Resumen de costos anuales para yates de 30 metros:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Mantenimiento básico: €45,000 - €78,000</li>
                      <li>Limpieza y cuidado: €22,000 - €38,000</li>
                      <li>Repuestos y materiales: €15,000 - €25,000</li>
                      <li>Servicios especializados: €8,000 - €15,000</li>
                    </ul>
                    <p className="text-sm font-semibold">
                      Total estimado: €60,000 - €120,000 anuales
                    </p>
                  </div>
                </div>

                {/* Card de Factores Específicos */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Factores Específicos</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Variables que afectan los costos en yates de 30m:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Horas de navegación (200-800h/año)</li>
                      <li>Edad del yate y estado general</li>
                      <li>Complejidad de sistemas a bordo</li>
                      <li>Materiales de construcción</li>
                      <li>Frecuencia de uso en agua salada</li>
                    </ul>
                    <p className="text-sm">
                      Un mantenimiento preventivo puede reducir costos hasta un 25%.
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

export default CostoManutencionYate30M;
