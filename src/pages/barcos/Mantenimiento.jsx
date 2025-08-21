import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import heroBarcosImg from '../../assets/img/herobarcos.jpg';
import servicesBarcosImg from '../../assets/img/servicesbarcos (1).jpg';

const Mantenimiento = () => {
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
              alt="Mantenimiento de barcos y yates" 
              className="w-full h-full object-cover"
            />
            {/* Overlay oscuro para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Texto centrado */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
              MANTENIMIENTO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
              Servicios Profesionales de Mantenimiento Náutico
            </p>
            
            {/* Botón de contacto */}
            <div className="flex justify-center mt-8">
              <button 
                className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
                onClick={() => {
                  const phoneNumber = '+34632075370';
                  const message = 'Hola, me gustaría obtener información sobre servicios de mantenimiento náutico.';
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
                  Mantenimiento Profesional de Embarcaciones
                </h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El mantenimiento de embarcaciones es fundamental para garantizar la seguridad, eficiencia y durabilidad de su inversión náutica. Nuestro equipo especializado ofrece servicios integrales que cubren todos los aspectos del mantenimiento marítimo.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Desde revisiones periódicas del motor y sistemas eléctricos hasta el cuidado del casco y equipos de navegación, nuestro servicio de mantenimiento preventivo y correctivo asegura que su embarcación esté siempre en óptimas condiciones para navegar con seguridad.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trabajamos con embarcaciones de todos los tamaños, desde lanchas deportivas hasta yates de lujo, proporcionando atención personalizada y soluciones adaptadas a las necesidades específicas de cada cliente.
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
                     alt="Mantenimiento náutico" 
                     className="w-full h-full object-cover rounded-full opacity-40"
                   />
                 </div>
                 
                 {/* Card de Mantenimiento Preventivo */}
                 <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Mantenimiento Preventivo</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Servicios de mantenimiento preventivo para evitar averías y prolongar la vida útil de su embarcación:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Revisión periódica del motor y sistemas</li>
                      <li>Cambio de aceites y filtros</li>
                      <li>Inspección de correas y ánodos</li>
                      <li>Chequeo de sistemas eléctricos</li>
                      <li>Preparación para temporada</li>
                    </ul>
                    <p className="text-sm">
                      Nuestro programa de mantenimiento preventivo garantiza que su embarcación esté siempre lista para navegar con seguridad.
                    </p>
                  </div>
                </div>

                {/* Card de Reparación y Emergencias */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Reparación y Emergencias</h3>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Servicio de reparación especializada y atención de emergencias para su embarcación:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Diagnóstico rápido de averías</li>
                      <li>Reparación de motores y sistemas</li>
                      <li>Servicio de emergencia 24/7</li>
                      <li>Repuestos originales</li>
                      <li>Garantía en todas las reparaciones</li>
                    </ul>
                    <p className="text-sm">
                      Nuestro equipo técnico especializado está disponible para resolver cualquier problema que pueda surgir con su embarcación.
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

export default Mantenimiento;
