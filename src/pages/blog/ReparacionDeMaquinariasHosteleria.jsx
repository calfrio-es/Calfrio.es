import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionDeMaquinariasHosteleria = () => {
  // Obtener la fecha actual formateada
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Header />
      <div className="min-h-screen flex pt-16">
        {/* Columna izquierda - muy delgada - oculta en móviles */}
        <div className="hidden lg:block w-1/6 border-r-2 border-black">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Índice
            </h2>
            
            <nav className="space-y-2">
              <ul className="space-y-1 text-sm">
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('servicios');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Servicios Especializados de Reparación
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('por-que-elegirnos');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Por Qué Elegirnos?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('zonas');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Servicios en Todo Palma de Mallorca
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('promocion');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Promoción Especial
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Contáctanos Ahora
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Columna central - más grande - ocupa todo el ancho en móviles */}
        <div className="w-full lg:w-4/6 lg:border-r-2 lg:border-black">
          <div className="p-6">
            {/* Fecha en la esquina superior izquierda */}
            <div className="text-sm text-gray-600 mb-6">
              {fechaActual}
            </div>
            
            {/* Título grande centrado */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Reparación de Maquinaria de Hostelería en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones Integrales para tu Negocio de Hostelería
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Reparación de Maquinaria de Hostelería en Palma de Mallorca
            </h1>
            
            {/* Descripción principal */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En Mantenimiento Hosteleria, somos expertos en la reparación de maquinaria de hostelería en Palma de Mallorca. Nos especializamos en brindar soluciones a todo tipo de restaurantes, bares, cafeterías, hoteles, supermercados, colegios, y cualquier establecimiento que dependa de maquinaria especializada para su operación diaria.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Entendemos la importancia de que tus equipos de cocina, refrigeración y climatización estén siempre en perfectas condiciones de funcionamiento, por lo que te ofrecemos un servicio rápido, eficiente y con garantía, para que tu negocio no se detenga. Nuestro equipo de técnicos altamente cualificados está preparado para enfrentar cualquier reto que surja en tus equipos de hostelería.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Servicios Especializados */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicios Especializados de Reparación
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nos encargamos de una amplia gama de servicios de reparación y mantenimiento para maquinaria de hostelería. Sabemos lo esencial que es contar con equipos que funcionen a la perfección en todo momento, por eso ofrecemos servicios integrales para cubrir todas las necesidades de tu establecimiento:
              </p>
              
              <ul className="list-none space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">1.</span>
                  <div>
                    <strong>Reparación de Equipos de Cocción:</strong>
                    <p className="mt-1">Los equipos de cocción, como freidoras industriales, planchas de asar, hornos industriales, y cocinas industriales son esenciales para el buen desempeño de cualquier negocio de hostelería. Cuando estos equipos fallan, pueden paralizar toda la operación. Nuestros técnicos tienen experiencia reparando todos estos dispositivos, garantizando que vuelvan a funcionar como nuevos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">2.</span>
                  <div>
                    <strong>Reparación de Equipos de Refrigeración:</strong>
                    <p className="mt-1">Cualquier negocio de hostelería necesita equipos de refrigeración que funcionen de manera constante y eficaz. Nos especializamos en la reparación de armarios de congelación, cámaras frigoríficas industriales, enfriadores de cerveza, botelleros, congeladores verticales, y armarios de refrigeración, asegurando que tus ingredientes y productos se mantengan en perfecto estado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">3.</span>
                  <div>
                    <strong>Reparación de Equipos de Lavado:</strong>
                    <p className="mt-1">Los lavavajillas industriales y lavavasos son esenciales para mantener la limpieza en un entorno de trabajo tan exigente. Ofrecemos soluciones rápidas y eficaces para cualquier tipo de falla, ya sea fallos eléctricos, problemas en los controles de temperatura, o obstrucciones en los sistemas de agua.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">4.</span>
                  <div>
                    <strong>Reparación de Climatización y Aire Acondicionado:</strong>
                    <p className="mt-1">Si tu establecimiento necesita un buen sistema de climatización para mantener un ambiente cómodo, podemos ayudarte. Reparamos aires acondicionados, chillers, y cualquier otro equipo de refrigeración y ventilación, para garantizar que el confort de tus empleados y clientes no se vea afectado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">5.</span>
                  <div>
                    <strong>Equipos de Preparación de Alimentos y Bebidas:</strong>
                    <p className="mt-1">Desde granizadoras hasta dispensadores de cerveza, pasamos por termoselladoras y otros equipos esenciales para la preparación de alimentos y bebidas. Sabemos lo crucial que es que estos equipos funcionen sin interrupciones, por lo que ofrecemos reparaciones rápidas para que tu negocio no pierda eficiencia.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">6.</span>
                  <div>
                    <strong>Equipos Inoxidables:</strong>
                    <p className="mt-1">Contamos con experiencia en la reparación de equipos de acero inoxidable que son comunes en cocinas y zonas de preparación de alimentos. Esto incluye mesas de trabajo, estanterías, y otros dispositivos de gran importancia en un entorno de trabajo profesional.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Por qué elegirnos */}
            <div id="por-que-elegirnos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por Qué Elegirnos?
              </h2>
              
              <ul className="list-none space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <div>
                    <strong>Servicio Rápido y Eficaz:</strong>
                    <p className="mt-1">Sabemos que el tiempo es crucial para tu negocio. Nuestros técnicos están disponibles para realizar reparaciones en el menor tiempo posible, evitando que tus equipos dejen de funcionar por largos periodos. Realizamos reparaciones en tiempo récord para que tu actividad comercial continúe sin interrupciones.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <div>
                    <strong>Garantía de hasta 6 Meses:</strong>
                    <p className="mt-1">Te ofrecemos hasta 6 meses de garantía en todas las reparaciones realizadas, asegurando que nuestros trabajos sean duraderos. Además, proporcionamos un seguimiento post-servicio: si tienes algún inconveniente con los equipos después de la reparación, estaremos listos para ayudarte sin costo adicional durante el periodo de garantía.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <div>
                    <strong>Recambios Originales y de Alta Calidad:</strong>
                    <p className="mt-1">Utilizamos recambios originales o recambios OEM (fabricante de equipo original) para todas las reparaciones, asegurando que la calidad y fiabilidad de tu maquinaria permanezca intacta.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <div>
                    <strong>Profesionales Altamente Capacitados:</strong>
                    <p className="mt-1">Contamos con técnicos certificados y con amplia experiencia en la reparación de maquinaria de hostelería de todas las marcas y modelos. Desde marcas populares como Rational, Hobart, Miele, hasta GE y Electrolux, tenemos el conocimiento y las herramientas necesarias para reparar cualquier equipo de hostelería.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Zonas de atención */}
            <div id="zonas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicios en Todo Palma de Mallorca
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Nos desplazamos a todos los rincones de Palma de Mallorca y alrededores, incluyendo <strong>Manacor, Inca, Calvià, Eivissa, Santa Eulària del Riu, Marratxí, Llucmajor, y más</strong>, para asegurar que tu maquinaria esté siempre en perfecto estado, independientemente de tu ubicación.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Promoción especial */}
            <div id="promocion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Promoción Especial
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  ¡Aprovecha nuestra oferta exclusiva! Si contratas nuestros servicios de reparación de maquinaria de hostelería hoy, <strong>21 de abril de 2025</strong>, obtendrás un <strong>5% de descuento</strong> en todos nuestros servicios. ¡No dejes que una máquina defectuosa afecte tu negocio!
                </p>
                <p>
                  Este descuento es solo por tiempo limitado, así que no pierdas la oportunidad de asegurar el buen funcionamiento de tu equipo con la ayuda de los mejores profesionales del sector.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Contacto */}
            <div id="contacto" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contáctanos Ahora
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  No dejes que tus equipos de hostelería fallen cuando más los necesitas. Contáctanos hoy mismo a través de Whatsapp o por teléfono, y uno de nuestros expertos en reparación de maquinaria de hostelería te ayudará de inmediato.
                </p>
                
                <p className="text-center font-bold text-lg">
                  Con Mantenimiento Hostelería, tu negocio siempre estará en buenas manos. ¡Estamos listos para ayudarte a mantener tus equipos de hostelería en perfectas condiciones!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - un poco más grande - oculta en móviles */}
        <div className="hidden lg:block w-2/6">
          <BlogRelacionadosReparaciones />
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default ReparacionDeMaquinariasHosteleria;
