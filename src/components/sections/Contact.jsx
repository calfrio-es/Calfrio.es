import React, { useState } from 'react';

const Contact = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const preguntasFrecuentes = [
    {
      id: 1,
      pregunta: '¿Qué tipos de equipamiento de hostelería ofrecen?',
      respuesta: 'Ofrecemos una amplia gama de equipamiento profesional incluyendo hornos, frigoríficos, lavavajillas, planchas, batidoras, cafeteras, extractores de humos y mobiliario de acero inoxidable. Todos nuestros productos están diseñados para uso industrial y profesional.'
    },
    {
      id: 2,
      pregunta: '¿Proporcionan servicio de instalación?',
      respuesta: 'Sí, ofrecemos servicio completo de instalación y puesta en marcha de todos nuestros equipos. Nuestro equipo técnico especializado se encarga de la instalación, configuración y pruebas de funcionamiento para garantizar el correcto funcionamiento.'
    },
    {
      id: 3,
      pregunta: '¿Tienen servicio de mantenimiento y reparación?',
      respuesta: 'Absolutamente. Contamos con un servicio técnico especializado que ofrece mantenimiento preventivo, reparaciones de emergencia y servicio post-venta. Trabajamos con todas las marcas y garantizamos repuestos originales.'
    },
    {
      id: 4,
      pregunta: '¿Ofrecen garantía en sus productos?',
      respuesta: 'Todos nuestros productos incluyen garantía de fábrica que varía según el equipo. Además, ofrecemos garantía adicional de instalación y servicio técnico. Nuestro compromiso es la satisfacción total del cliente.'
    },
    {
      id: 5,
      pregunta: '¿Pueden hacer presupuestos personalizados?',
      respuesta: 'Sí, realizamos presupuestos personalizados según las necesidades específicas de cada cliente. Nuestros asesores técnicos visitan su establecimiento para evaluar las necesidades y ofrecer la mejor solución.'
    },
    {
      id: 6,
      pregunta: '¿Trabajan con financiación?',
      respuesta: 'Ofrecemos diferentes opciones de financiación para adaptarnos a las necesidades de cada cliente. Desde pagos en cuotas hasta leasing, con condiciones flexibles y aprobación rápida.'
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email
    console.log('Formulario enviado:', formData);
         // Resetear formulario
     setFormData({
       nombre: '',
       email: '',
       asunto: '',
       mensaje: ''
     });
  };

  return (
         <section className="py-12 bg-gray-50">
       <div className="container mx-auto max-w-7xl px-4">
         <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
             ¿Necesitas <span className="text-cyan-400">ayuda</span>?
           </h2>
           <p className="text-base text-gray-600 max-w-2xl mx-auto">
             Resuelve tus dudas o contáctanos directamente para obtener asesoramiento personalizado
           </p>
         </div>
 
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                     {/* Columna Izquierda - Preguntas Frecuentes */}
           <div className="lg:col-span-1">
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

                     {/* Columna Derecha - Formulario de Contacto */}
           <div className="lg:col-span-2">
             <div className="bg-white rounded-lg shadow-lg p-6 h-full">
               <h3 className="text-xl font-bold text-gray-800 mb-4">
                 Envíanos un mensaje
               </h3>
               <form onSubmit={handleSubmit} className="space-y-4">
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label htmlFor="nombre" className="block text-xs font-medium text-gray-700 mb-1">
                       Nombre completo *
                     </label>
                     <input
                       type="text"
                       id="nombre"
                       name="nombre"
                       value={formData.nombre}
                       onChange={handleInputChange}
                       required
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors duration-200 text-sm"
                       placeholder="Tu nombre completo"
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                       Email *
                     </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       required
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors duration-200 text-sm"
                       placeholder="tu@email.com"
                     />
                   </div>
                 </div>
 
                 <div>
                   <label htmlFor="asunto" className="block text-xs font-medium text-gray-700 mb-1">
                     Asunto *
                   </label>
                   <select
                     id="asunto"
                     name="asunto"
                     value={formData.asunto}
                     onChange={handleInputChange}
                     required
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors duration-200 text-sm"
                   >
                     <option value="">Selecciona un asunto</option>
                     <option value="consulta-producto">Consulta sobre producto</option>
                     <option value="presupuesto">Solicitar presupuesto</option>
                     <option value="servicio-tecnico">Servicio técnico</option>
                     <option value="mantenimiento">Mantenimiento</option>
                     <option value="otro">Otro</option>
                   </select>
                 </div>

                                 <div>
                   <label htmlFor="mensaje" className="block text-xs font-medium text-gray-700 mb-1">
                     Mensaje *
                   </label>
                   <textarea
                     id="mensaje"
                     name="mensaje"
                     value={formData.mensaje}
                     onChange={handleInputChange}
                     required
                     rows={4}
                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors duration-200 resize-none text-sm"
                     placeholder="Describe tu consulta o solicitud..."
                   />
                 </div>
 
                 <div className="flex items-center justify-between">
                   <p className="text-xs text-gray-500">
                     * Campos obligatorios
                   </p>
                   <button
                     type="submit"
                     className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-sm"
                   >
                     <span>Enviar mensaje</span>
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                     </svg>
                   </button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
