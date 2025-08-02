import React from 'react';

const OtrosServicios = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Atención Postventa",
      description: "Servicio de atención postventa completo para todos nuestros equipos. Garantía extendida, repuestos originales y soporte técnico especializado disponible 24/7.",
      isHighlighted: true
    },
    {
      id: 2,
      number: "02",
      title: "Soluciones a Medida",
      description: "Desarrollamos soluciones personalizadas para cada negocio de hostelería. Análisis de necesidades específicas y equipamiento adaptado a tu espacio y requerimientos."
    }
  ];

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4 max-w-6xl">
                 {/* Header Section */}
         <div className="text-center mb-12">
           <div className="flex items-center justify-center mb-3">
             <div className="flex items-center text-gray-500 text-sm">
               <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
               </svg>
               Otros Servicios
             </div>
           </div>
           
           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
             Atención Postventa y Soluciones Personalizadas
           </h2>
           
           <p className="text-gray-500 text-base max-w-3xl mx-auto">
             Más allá de la venta e instalación, ofrecemos un servicio integral que incluye atención postventa completa y desarrollo de soluciones a medida para garantizar el éxito de tu negocio de hostelería.
           </p>
         </div>

        {/* Main Content - Services Column */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id} className={service.isHighlighted ? "bg-cyan-100 text-black p-6 rounded-lg" : "p-6 border-b border-gray-200"}>
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <div className={`text-4xl font-light leading-none ${service.isHighlighted ? 'text-black' : 'text-gray-300'}`}>
                  {service.number}
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 flex-1">
                  <h3 className={`text-2xl font-bold ${service.isHighlighted ? 'text-black' : 'text-gray-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm lg:flex-1 ${service.isHighlighted ? 'text-black' : 'text-gray-500'}`}>
                    {service.description}
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
  );
};

export default OtrosServicios;
