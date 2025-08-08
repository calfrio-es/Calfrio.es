import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const RepararFreidoraPalmaDeMallorca = () => {
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
                       const element = document.getElementById('importante');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Por qué es Importante Reparar Freidora Industrial?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
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
                    Servicios Profesionales
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
                    Cobertura de Servicio
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('beneficios');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Beneficios de Reparar Freidora Industrial
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
                    Tipos de Freidoras que Reparamos
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
                    ¡Llámanos Ahora!
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
                Reparar Freidora Industrial en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Técnico Profesional y Rápido
              </p>
            </div>
            

            
            {/* H1 para SEO */}
            <h1 id="importante" className="text-2xl font-bold text-gray-800 mb-4">
              ¿Por qué es Importante Reparar Freidora Industrial con Profesionales?
            </h1>
            
            {/* Descripción con importancia */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las freidoras industriales son equipos esenciales en cocinas de alto rendimiento. Una avería puede afectar la producción, generar pérdidas económicas y comprometer la seguridad.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Reparar freidora industrial requiere conocimientos técnicos específicos en sistemas eléctricos, a gas, controles electrónicos, termostatos y más. Nuestro equipo se especializa en:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔍</span>
                  <span><strong>Diagnóstico preciso</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Reparación técnica avanzada</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔄</span>
                  <span><strong>Sustitución de componentes</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙️</span>
                  <span><strong>Optimización del rendimiento energético</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✅</span>
                  <span><strong>Mantenimiento preventivo y formación del personal</strong></span>
                </li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Servicios profesionales */}
            <div id="servicios" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicios Profesionales para Reparar Freidora Industrial
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🛠️ Diagnóstico y Reparación Técnica</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Identificamos y solucionamos fallos en sistemas de calentamiento, controles de temperatura, líneas de gas o electricidad, sensores, válvulas, y más. Nuestro servicio de reparar freidora industrial es rápido, eficaz y con garantía.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🧼 Mantenimiento Preventivo</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Un mantenimiento regular evita fallos inesperados. Incluye:
                  </p>
                  <ul className="list-none space-y-1 text-sm text-gray-700 mt-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Limpieza de componentes internos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Calibración de termostatos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Revisión de líneas de gas y conexiones eléctricas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Verificación de sistemas de seguridad</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">
                    Cuidar tu equipo te ahorra costes y prolonga su vida útil.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Optimización del Rendimiento</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Reparamos y ajustamos tu freidora para que consuma menos energía y ofrezca resultados de cocción más consistentes. Nuestro enfoque busca reducir tiempos de espera y mejorar la eficiencia general del equipo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔄 Reemplazo de Componentes</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Si una pieza está defectuosa, la sustituimos con repuestos originales o equivalentes de alta calidad, asegurando la durabilidad y funcionamiento continuo de la máquina.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🧠 Asesoramiento Técnico y Formación</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Al reparar freidora industrial, también te ayudamos a que tu equipo de cocina sepa cómo usarla y mantenerla correctamente. Esto previene averías, mejora la seguridad y optimiza el rendimiento diario.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura de Servicio – Islas Baleares
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos atención técnica para reparar freidora industrial en:
                </p>
                
                <div className="mb-4">
                  <p>Palma de Mallorca, Manacor, Inca, Calvià, Llucmajor, Marratxí, Eivissa, Santa Eulària del Riu, Campos, Porreres, Algaida, Arenal</p>
                </div>
                
                <p>
                  También atendemos zonas turísticas como Alcúdia, Magaluf, Pollença, Santa Ponsa y Cala d'Or. Vamos a tu cocina en menos de 24 h.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios */}
            <div id="beneficios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Beneficios de Reparar Freidora Industrial
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Aumenta la vida útil del equipo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Reduce riesgos de incendio y accidentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Mejora el rendimiento y la eficiencia energética</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Evita tiempos de inactividad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Asegura una cocción uniforme y de calidad</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Una freidora en mal estado compromete la calidad de tu servicio. Nosotros lo evitamos.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos de freidoras */}
            <div id="tipos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Freidoras Industriales que Reparamos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Reparamos todas las variantes del mercado:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de gas</strong> (natural o propano)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras eléctricas</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de alta capacidad</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de mesa o portátiles</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de presión</strong> (freído rápido y crujiente, ideal para pollo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras con zona fría</strong> (mejor calidad del aceite y menor mezcla de sabores)</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Llámanos Ahora!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <div className="mb-4">
                  <p className="font-bold mb-2">🎁 PROMOCIÓN ESPECIAL DE VERANO – SOLO HOY</p>
                  <p className="mb-2">📆 21 de abril de 2025</p>
                  <p>🎉 Solicita hoy tu primer servicio para reparar freidora industrial y recibe un 5% de descuento inmediato.</p>
                  <p>Haz clic AQUÍ para aprovechar esta oferta y volver a poner en marcha tu cocina con total seguridad.</p>
                </div>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 ¿Necesitas Reparar una Freidora Industrial? Llámanos</p>
                  <p className="mb-2">✅ Atención rápida y personalizada</p>
                  <p className="mb-2">✅ Técnicos certificados</p>
                  <p className="mb-2">✅ Reparaciones con garantía</p>
                  <p className="mb-2">✅ Cobertura completa en Baleares</p>
                  <p className="mb-2">🔧 No dejes que una avería te frene.</p>
                  <p>Somos tu aliado de confianza para reparar freidora industrial en Palma de Mallorca.</p>
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

export default RepararFreidoraPalmaDeMallorca;
