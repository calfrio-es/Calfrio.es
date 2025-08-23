import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/camarasfrigorificas (2).jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (4).jpg';

const PuertaCamaraFrigorificas = () => {
  const navigate = useNavigate();

  const serviciosEspecificos = [
    {
      id: 1,
      number: "01",
      title: "¿Qué tipos de puertas de cámaras frigoríficas ofrecen?",
      description: "Ofrecemos puertas de cámaras frigoríficas de diferentes tipos: puertas abatibles, puertas correderas, puertas automáticas, puertas de alta frecuencia y puertas de emergencia. Disponibles en acero inoxidable, lacado blanco y con diferentes sistemas de cierre y juntas para máxima estanqueidad.",
      isHighlighted: true,
      route: '/tipos-puertas-camaras-frigorificas-mallorca'
    },
    {
      id: 2,
      number: "02",
      title: "¿Cuál es el proceso de instalación y mantenimiento de puertas frigoríficas?",
      description: "Nuestro proceso incluye medición y selección de la puerta adecuada, desmontaje de la puerta antigua si es necesario, instalación profesional con juntas y sellado, ajuste de bisagras y cierres, pruebas de estanqueidad y garantía de 12 meses. También ofrecemos servicio de mantenimiento preventivo.",
      route: '/instalacion-mantenimiento-puertas-frigorificas-mallorca'
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
              alt="Puertas de cámaras frigoríficas" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              PUERTAS CÁMARAS FRIGORÍFICAS
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Puertas de Cámaras Frigoríficas Profesionales
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre puertas de cámaras frigoríficas.';
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
                  Puertas de Cámaras Frigoríficas: Calidad y Eficiencia
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestras puertas de cámaras frigoríficas son la solución perfecta para garantizar la estanqueidad y eficiencia energética de sus instalaciones frigoríficas. Ofrecemos puertas de alta calidad fabricadas con los mejores materiales y sistemas de cierre avanzados para minimizar las pérdidas de frío.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En Mallorca, disponemos de un amplio catálogo de puertas frigoríficas que incluye puertas abatibles, correderas, automáticas y de alta frecuencia. Cada puerta viene con juntas especiales, sistemas de cierre herméticos y garantía completa, asegurando un rendimiento óptimo y durabilidad a largo plazo.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  La elección de la puerta frigorífica adecuada es fundamental para el correcto funcionamiento de la cámara. Nuestros técnicos especializados asesoran sobre la mejor opción según el uso, frecuencia de apertura y condiciones ambientales, garantizando la máxima eficiencia energética y durabilidad.
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
                Te puede interesar sobre Puertas Frigoríficas
              </h2>
              
              <p className="text-gray-500 text-base max-w-3xl mx-auto">
                Información detallada sobre tipos de puertas frigoríficas, proceso de instalación y servicios de mantenimiento disponibles.
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
                     alt="Puertas de cámaras frigoríficas" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Tipos de Puertas */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Tipos de Puertas</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Amplio catálogo de puertas frigoríficas:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Puertas abatibles y correderas</li>
                      <li>Puertas automáticas</li>
                      <li>Puertas de alta frecuencia</li>
                      <li>Puertas de emergencia</li>
                      <li>Acero inoxidable y lacado blanco</li>
                    </ul>
                    <p className="text-sm">
                      Juntas especiales y sistemas de cierre herméticos incluidos.
                    </p>
                  </div>
                </div>

                {/* Card de Instalación y Mantenimiento */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Instalación y Mantenimiento</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Servicio completo profesional:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Medición y selección adecuada</li>
                      <li>Instalación con juntas y sellado</li>
                      <li>Ajuste de bisagras y cierres</li>
                      <li>Pruebas de estanqueidad</li>
                      <li>Mantenimiento preventivo</li>
                    </ul>
                    <p className="text-sm">
                      Garantía de 12 meses y servicio técnico especializado.
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

export default PuertaCamaraFrigorificas;
