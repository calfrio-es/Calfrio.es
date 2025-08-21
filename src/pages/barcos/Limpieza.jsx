import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/herobarcos2.jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (3).jpg';

const Limpieza = () => {
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
              alt="Limpieza de barcos y yates" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              LIMPIEZA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Servicios Profesionales de Limpieza Náutica
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre servicios de limpieza náutica.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <span className="mr-3">Contactar Ahora</span>
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
                  Limpieza Profesional de Embarcaciones
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  La limpieza profesional de embarcaciones es esencial para mantener el valor, la apariencia y la funcionalidad de su inversión náutica. Nuestro equipo especializado ofrece servicios integrales de limpieza que preservan la belleza y el rendimiento de su embarcación.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Desde la limpieza interior y exterior hasta el cuidado especializado de superficies como teak, cascos y cristales, nuestro servicio de limpieza náutica asegura que su embarcación mantenga su esplendor original y esté siempre lista para navegar.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trabajamos con embarcaciones de todos los tamaños, desde lanchas deportivas hasta yates de lujo, proporcionando atención personalizada y soluciones de limpieza adaptadas a las necesidades específicas de cada tipo de embarcación.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de información */}
        <div className="bg-white py-4">
          <div className="container mx-auto px-2">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-4 relative">
                 
                 {/* Imagen central */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-30">
                   <img 
                     src={servicesBarcosImg} 
                     alt="Limpieza náutica" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Limpieza Interior */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Limpieza Interior</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Servicios de limpieza interior completa para mantener el confort y la higiene de su embarcación:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Limpieza de cabinas y camarotes</li>
                      <li>Desinfección de superficies</li>
                      <li>Lavado de tapicerías y alfombras</li>
                      <li>Limpieza de cocina y baños</li>
                      <li>Tratamiento de olores</li>
                    </ul>
                    <p className="text-sm">
                      Utilizamos productos especializados que protegen los materiales náuticos y garantizan una limpieza profunda y duradera.
                    </p>
                  </div>
                </div>

                {/* Card de Limpieza Exterior */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Limpieza Exterior</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Servicios especializados de limpieza exterior para mantener el casco y superficies en perfecto estado:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Limpieza y pulido de casco</li>
                      <li>Teak care y tratamiento</li>
                      <li>Limpieza de cristales y ventanas</li>
                      <li>Pulido de superficies metálicas</li>
                      <li>Protección con ceras especializadas</li>
                    </ul>
                    <p className="text-sm">
                      Nuestros tratamientos protegen contra la sal marina, rayos UV y otros elementos que pueden dañar su embarcación.
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

export default Limpieza;
