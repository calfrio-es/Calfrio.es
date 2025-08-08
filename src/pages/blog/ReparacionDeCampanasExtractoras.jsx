import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionDeCampanasExtractoras = () => {
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
                       const element = document.getElementById('expertos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Expertos en Reparación
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('tipos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Tipos de Campanas Extractoras
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('cobertura');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Cobertura Total en Mallorca
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('confiar');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Por Qué Confiar en Nosotros?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('mantenimiento');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Mantenimiento Preventivo
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('marcas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Marcas que Atendemos
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('faq');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Preguntas Frecuentes
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('conclusion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Contáctenos Hoy
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
                Reparación de Campanas Extractoras Industriales en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Técnico Profesional y Garantizado
              </p>
            </div>
            

            
            {/* H1 para SEO */}
            <h1 id="expertos" className="text-2xl font-bold text-gray-800 mb-4">
              Expertos en Reparación de Campanas Extractoras Industriales
            </h1>
            
            {/* Descripción con expertos */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las campanas extractoras industriales son un componente vital en cualquier cocina profesional. Su función principal es la extracción de humos, vapores, grasas y olores, manteniendo el aire limpio y reduciendo el riesgo de incendios. Cuando estos sistemas fallan, no solo afecta la comodidad del entorno, sino que también se expone a sanciones por incumplimiento de normativas sanitarias y de seguridad.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Por eso, nuestro servicio de reparación de campanas extractoras industriales es rápido, profesional y respaldado por técnicos altamente cualificados. Atendemos emergencias y también ofrecemos mantenimiento preventivo para evitar futuras averías.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Tipos de campanas */}
            <div id="tipos" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Qué Tipos de Campanas Extractoras Industriales Reparamos?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nuestro equipo técnico trabaja con todo tipo de sistemas de extracción profesional, incluyendo:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Campanas extractoras de humos</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Para eliminar los gases y vapores generados en la cocción.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Campanas de ventilación general</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ideales para mantener el flujo de aire en cocinas industriales.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Campanas de aire compensado</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Equilibran la presión del aire extrayendo el aire viciado y reintroduciendo aire limpio.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Campanas con filtros de carbón activado</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Usadas especialmente para neutralizar olores fuertes en locales cerrados.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Campanas tipo isla</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Instaladas en techos, perfectas para cocinas centrales o de exhibición.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Campanas murales o de pared</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Las más comunes, ideales para líneas de cocina apoyadas sobre paredes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Sistemas de extracción centralizados</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Donde varias campanas están conectadas a un único sistema de ventilación.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Conductos, extractores y motores industriales</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Revisión, limpieza y reparación de toda la red de extracción.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Sistemas antiincendios integrados</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Verificación y reparación de mecanismos automáticos de seguridad contra fuego.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔸 Filtros metálicos y de grasa</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Limpieza, sustitución y optimización del rendimiento de filtrado.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura Total en Palma y Toda Mallorca
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Realizamos reparación de campanas extractoras industriales en:
                </p>
                
                <div className="mb-4">
                  <p>Palma de Mallorca, Manacor, Inca, Calvià, Santa Eulària, Llucmajor, Marratxí, Campos, Algaida, Arenal, Porreres y zonas turísticas como Alcúdia, Cala d'Or, Pollença, Magaluf, y Santa Ponsa.</p>
                </div>
                
                <p>
                  Trabajamos tanto en cocinas de restaurantes, hoteles y cafeterías, como en comedores industriales, food trucks, obradores y cocinas centrales.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Confiar en nosotros */}
            <div id="confiar" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por Qué Confiar en Nosotros?
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔️</span>
                  <span>Técnicos especializados en ventilación industrial y extracción de humos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔️</span>
                  <span>Uso de repuestos originales o compatibles de alta calidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔️</span>
                  <span>Más de 10 años de experiencia en reparación de equipos hosteleros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔️</span>
                  <span>Atención rápida, servicio de urgencia y disponibilidad 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔️</span>
                  <span>Garantía por escrito en cada intervención</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔️</span>
                  <span>Mantenimiento técnico para evitar futuras averías</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento preventivo */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento Preventivo de Campanas Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Una campana extractora en mal estado es un riesgo real. Además del mal olor y el humo, puede acumular grasa que actúa como combustible ante una chispa. Nuestro servicio de mantenimiento preventivo incluye:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🧰</span>
                  <span>Limpieza técnica de filtros y conductos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🧰</span>
                  <span>Revisión del motor y el sistema eléctrico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🧰</span>
                  <span>Comprobación del sistema antiincendios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🧰</span>
                  <span>Sustitución de piezas desgastadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🧰</span>
                  <span>Optimización del flujo de aire</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Recomendamos revisar el sistema cada 3 a 6 meses, dependiendo de la carga de trabajo.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Marcas */}
            <div id="marcas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Marcas que Atendemos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Contamos con experiencia en la reparación de campanas extractoras industriales de todas las principales marcas:
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Gaggenau, Miele, Bosch, Teka, Smeg, Neff, Siemens, AEG, Balay, Sub-Zero & Wolf, entre otras.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                También trabajamos con equipos a medida o de fabricación artesanal, especialmente comunes en cocinas grandes o de diseño personalizado.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Promoción */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Promoción Especial Verano 2025
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-bold mb-2">🎁 Solo por hoy, 21 de abril de 2025, obtenga 5% de descuento en su primer servicio de reparación de campanas extractoras industriales.</p>
                <p>👉 Solicítelo ahora desde AQUI y disfrute de un servicio técnico profesional, rápido y con garantía.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* FAQ */}
            <div id="faq" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Preguntas Frecuentes (FAQ)
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❓ ¿Cómo saber si mi campana necesita reparación?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ➡ Ruidos extraños, menor capacidad de extracción, acumulación de humo o grasa, y olores persistentes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❓ ¿Pueden venir hoy mismo?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ➡ Sí. Contamos con servicio de emergencia en Palma y alrededores. ¡Consúltenos!
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❓ ¿Realizan limpieza profunda de campanas?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ➡ Sí. Además de reparar, también ofrecemos servicio completo de limpieza técnica de filtros, motor y conductos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❓ ¿Dan factura y garantía?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ➡ Por supuesto. Somos empresa legalmente registrada, y cada servicio incluye factura y garantía por escrito.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contáctenos Hoy
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  No permita que una campana extractora defectuosa detenga la operativa de su cocina. Estamos listos para asistirle.
                </p>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📍 Palma de Mallorca – Islas Baleares</p>
                  <p className="mb-2">📲 WhatsApp | 📞 Teléfono directo | 📧 Correo electrónico</p>
                  <p className="mb-2">🛠️ Reparación de campanas extractoras industriales en manos de profesionales. ¡Respire tranquilo</p>
                </div>
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

export default ReparacionDeCampanasExtractoras;
