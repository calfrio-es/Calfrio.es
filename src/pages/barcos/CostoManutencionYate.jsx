import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/herobarcos.jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const CostoManutencionYate = () => {
  const navigate = useNavigate();

  const costosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Cuánto cuesta mantener un yate de 30 metros?",
      description: "Los yates de 30 metros requieren un mantenimiento anual que oscila entre €60,000 y €120,000. Incluye mantenimiento de motores, sistemas de navegación, equipos de seguridad, limpieza especializada y revisiones técnicas obligatorias. La complejidad de los sistemas a bordo y la frecuencia de uso influyen significativamente en estos costos.",
      isHighlighted: true,
      route: '/costos-mantenimiento-yates-30m-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Cuánto cuesta mantener un yate de lujo?",
      description: "Los yates de lujo (40+ metros) pueden requerir inversiones anuales de €150,000 a €500,000+. Factores como materiales premium, sistemas avanzados de navegación, equipos de entretenimiento de alta gama, tripulación especializada y servicios exclusivos elevan considerablemente los costos de mantenimiento.",
      route: '/costos-mantenimiento-yates-lujo-mallorca'
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
              alt="Costos de mantenimiento de yates" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              COSTOS MANTENIMIENTO 
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Guía Completa de Costos de Mantenimiento de Yates
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre costos de mantenimiento de yates.';
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
                  Costos de Mantenimiento de Yates: Inversión en Excelencia
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El mantenimiento de un yate es una inversión estratégica que garantiza la seguridad, el rendimiento y la preservación del valor de su embarcación. Los costos varían según el tamaño, la edad y el uso del yate, pero es fundamental considerar todos los aspectos para mantener su embarcación en condiciones óptimas.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, los costos de mantenimiento náutico están influenciados por la calidad de los servicios, la disponibilidad de repuestos originales y la experiencia de los técnicos especializados. Nuestro equipo ofrece transparencia total en los costos y la mejor relación calidad-precio del mercado.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Es importante considerar que el mantenimiento preventivo regular puede reducir significativamente los costos a largo plazo, evitando reparaciones costosas y prolongando la vida útil de su inversión náutica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de costos específicos */}
        <section className="py-12 bg-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Costos Específicos
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Te puede interesar sobre Costos de Yates
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Respuestas detalladas a las preguntas más comunes sobre los costos de mantenimiento de yates de diferentes tamaños y categorías de lujo.
              </p>
            </div>

            {/* Main Content - Services Column */}
            <div className="space-y-6 max-w-6xl mx-auto">
              {costosEspecificos.map((costo, index) => (
                <div 
                  key={costo.id} 
                  className={`${costo.isHighlighted ? "bg-cyan-100 text-black p-6 rounded-lg" : "p-6 border-b border-gray-200"} cursor-pointer hover:shadow-lg transition-all duration-300`}
                  onClick={() => navigate(costo.route)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className={`text-4xl font-light leading-none ${costo.isHighlighted ? 'text-black' : 'text-gray-300'}`}>
                      {costo.number}
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 flex-1">
                      <h3 className={`text-2xl font-bold ${costo.isHighlighted ? 'text-black' : 'text-gray-800'}`}>
                        {costo.title}
                      </h3>
                      <p className={`text-sm lg:flex-1 ${costo.isHighlighted ? 'text-black' : 'text-gray-500'}`}>
                        {costo.description}
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
                     alt="Costos de mantenimiento" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Costos Anuales */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Costos Anuales Estimados</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Los costos anuales de mantenimiento varían según el tamaño del yate:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Yates 10-15m: €8,000 - €15,000</li>
                      <li>Yates 15-20m: €15,000 - €25,000</li>
                      <li>Yates 20-25m: €25,000 - €40,000</li>
                      <li>Yates 25m+: €40,000+</li>
                    </ul>
                    <p className="text-sm">
                      Incluye mantenimiento preventivo, cambio de aceites, filtros, ánodos y revisiones de seguridad.
                    </p>
                  </div>
                </div>

                {/* Card de Factores de Costo */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Factores que Afectan el Costo</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Varios factores influyen en los costos de mantenimiento:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Horas de navegación anuales</li>
                      <li>Edad y estado del yate</li>
                      <li>Complejidad de sistemas a bordo</li>
                      <li>Frecuencia de uso en agua salada</li>
                      <li>Calidad de mantenimiento previo</li>
                    </ul>
                    <p className="text-sm">
                      Un mantenimiento regular y profesional puede reducir los costos totales hasta en un 30%.
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

export default CostoManutencionYate;
