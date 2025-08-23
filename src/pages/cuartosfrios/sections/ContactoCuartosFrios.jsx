import React, { useState } from 'react';

const ContactoCuartosFrios = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const preguntasFrecuentes = [
    {
      id: 1,
      pregunta: '¿Qué servicios de refrigeración ofrecen?',
      respuesta: 'Ofrecemos instalación, mantenimiento y reparación de cuartos fríos, cámaras frigoríficas y sistemas de refrigeración industrial. Incluimos diseño personalizado, mantenimiento preventivo y servicio técnico especializado.'
    },
    {
      id: 2,
      pregunta: '¿Realizan instalación de cuartos fríos nuevos?',
      respuesta: 'Sí, realizamos instalación completa de cuartos fríos y cámaras frigoríficas. Diseñamos la solución según sus necesidades específicas, incluyendo dimensiones, temperatura requerida y tipo de negocio.'
    },
    {
      id: 3,
      pregunta: '¿Tienen servicio de mantenimiento preventivo?',
      respuesta: 'Absolutamente. Ofrecemos mantenimiento preventivo programado que incluye revisiones periódicas, limpieza de condensadores, verificación de gases refrigerantes y optimización del rendimiento energético.'
    },
    {
      id: 4,
      pregunta: '¿Ofrecen garantía en sus servicios?',
      respuesta: 'Todos nuestros servicios incluyen garantía de trabajo que varía según el tipo de servicio. Además, ofrecemos garantía adicional de instalación y servicio técnico post-venta.'
    },
    {
      id: 5,
      pregunta: '¿Pueden hacer presupuestos personalizados para cuartos fríos?',
      respuesta: 'Sí, realizamos presupuestos personalizados según las necesidades específicas de su negocio. Nuestros técnicos visitan su local para evaluar las necesidades y ofrecer la mejor solución de refrigeración.'
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            ¿Necesitas <span className="text-cyan-400">asesoramiento en refrigeración</span>?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Resuelve tus dudas o contáctanos directamente para obtener asesoramiento personalizado sobre cuartos fríos y sistemas de refrigeración
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna WhatsApp - Primera en móvil, segunda en desktop */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Instalación, mantenimiento y reparación de cuartos fríos!
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
                    Escríbenos por WhatsApp y te atenderemos de inmediato. Nuestro equipo especializado está listo para resolver todas tus dudas sobre refrigeración industrial.
                  </p>
                </div>
                
                <button
                  onClick={() => {
                    const phoneNumber = '+34632075370';
                    const message = 'Hola, me gustaría obtener más información sobre cuartos fríos y refrigeración industrial.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-sm mx-auto"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Escribir por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Columna Preguntas Frecuentes - Segunda en móvil, primera en desktop */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-5 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-3">
                {preguntasFrecuentes.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-3 py-2 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <span className="font-semibold text-gray-800 text-xs">
                        {item.pregunta}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                          activeAccordion === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`px-3 py-2 bg-white transition-all duration-300 ${
                        activeAccordion === item.id ? 'block' : 'hidden'
                      }`}
                    >
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.respuesta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoCuartosFrios;
