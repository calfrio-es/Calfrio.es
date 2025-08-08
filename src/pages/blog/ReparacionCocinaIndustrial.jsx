import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionCocinaIndustrial = () => {
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
                       const element = document.getElementById('ofrecemos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Qué Ofrecemos?
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
                    Cobertura en Mallorca
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
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
                    ¿Por Qué Es Importante?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('optimizacion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Optimización del Rendimiento
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
                    ¿Cada Cuánto Tiempo Revisar?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('ventajas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas de Nuestro Servicio
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
                    ¡Contáctenos Ahora!
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
                Reparación Cocina Industrial en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Profesional y Rápido
              </p>
            </div>
            

            
            {/* H1 para SEO */}
            <h1 id="ofrecemos" className="text-2xl font-bold text-gray-800 mb-4">
              ¿Qué Ofrecemos?
            </h1>
            
            {/* Descripción con ofertas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En nuestro servicio de reparación cocina industrial, atendemos una amplia gama de equipos esenciales para la operativa diaria en negocios de hostelería, restauración y alimentación:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">✅ Maquinaria de Cocina</h3>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Lavavajillas industriales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Fuegos de gas o eléctricos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Planchas de asar eléctricas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Freidoras industriales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Hornos combinados y convencionales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Microondas industriales</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❄️ Maquinaria de Refrigeración</h3>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Armarios de refrigeración</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Congeladores verticales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Arcones congeladores</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🧑‍🍳 Equipos de Preparación de Alimentos</h3>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Cortadoras de fiambre</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Amasadoras y batidoras industriales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Procesadores de alimentos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Peladoras de patatas</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💦 Equipos de Lavado</h3>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Lavavasos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Lavavajillas industriales</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔩 Otros Equipos de Cocina</h3>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Campanas extractoras</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Carros de servicio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Mesas de trabajo en acero inoxidable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Envasadoras al vacío</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura en Mallorca y Alrededores
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos reparación cocina industrial en múltiples ubicaciones:
                </p>
                
                <div className="mb-4">
                  <p>Palma de Mallorca, Manacor, Inca, Calvià, Marratxí, Llucmajor, Campos, Arenal, Porreres, Algaida, Eivissa, Santa Eulària del Riu</p>
                </div>
                
                <p>
                  También damos soporte a zonas turísticas como: Magaluf, Santa Ponsa, Cala d'Or, Alcúdia y Pollença.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Importancia */}
            <div id="importante" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por Qué Es Importante la Reparación Cocina Industrial?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                La maquinaria de cocina profesional está en uso constante, y su correcto funcionamiento es vital para:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🕐</span>
                  <span>Garantizar la continuidad del servicio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">💸</span>
                  <span>Evitar pérdidas económicas por paradas inesperadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🍴</span>
                  <span>Mantener la calidad en la preparación de alimentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🧼</span>
                  <span>Cumplir con los estándares de higiene y seguridad</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestros técnicos cuentan con la experiencia y herramientas necesarias para diagnosticar y resolver problemas complejos en muy poco tiempo.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Optimización */}
            <div id="optimizacion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Optimización del Rendimiento
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Además de reparar, optimizamos el rendimiento de sus equipos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙️</span>
                  <span>Calibración de controles de temperatura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙️</span>
                  <span>Revisión de consumo energético</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙️</span>
                  <span>Configuración de tiempos de cocción</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙️</span>
                  <span>Ajustes en sistemas de refrigeración</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                ¡Una cocina eficiente es una cocina rentable!
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Cada Cuánto Tiempo Debería Revisar Su Cocina Industrial?
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">Depende del uso:</p>
                
                <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">📌</span>
                    <span><strong>Uso diario o continuo:</strong> cada 3 meses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">📌</span>
                    <span><strong>Uso ocasional</strong> (fines de semana o eventos): cada 6-8 meses</span>
                  </li>
                </ul>
                
                <p>
                  Recuerde: un buen mantenimiento previene reparaciones costosas y prolonga la vida útil de sus equipos.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas de Nuestro Servicio
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Técnicos cualificados y certificados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Uso de repuestos originales (OEM)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Atención rápida, sin esperas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Desplazamiento gratuito en zonas seleccionadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Garantía en todos los trabajos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🎯</span>
                  <span>Asesoramiento técnico personalizado</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Contáctenos Ahora!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <div className="mb-4">
                  <p className="font-bold mb-2">🎁 Promoción Especial – Solo Hoy</p>
                  <p className="mb-2">📆 21 de abril de 2025</p>
                  <p>Solicite su primer servicio de reparación cocina industrial y reciba un 5% de descuento.</p>
                  <p>👉 Haga clic AQUÍ para activar su promoción.</p>
                  <p>No deje que una avería arruine su operativa diaria. Confíe en nuestros expertos y mantenga su cocina siempre lista para la acción.</p>
                </div>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 ¡Contáctenos Ahora!</p>
                  <p className="mb-2">Estamos disponibles para atenderle de inmediato. Llámenos, escríbanos o complete nuestro formulario online.</p>
                  <p className="mb-2">📍 Servicio técnico en Palma de Mallorca, Islas Baleares y alrededores.</p>
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

export default ReparacionCocinaIndustrial;
