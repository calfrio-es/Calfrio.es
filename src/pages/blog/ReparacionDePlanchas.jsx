import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionDePlanchas = () => {
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
                       const element = document.getElementById('reparacion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Reparación de Planchas y Equipos
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('importancia');
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
                       const element = document.getElementById('consejos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Consejos para Mantener
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
                    Cobertura de Reparación
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('seguridad');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Seguridad y Garantía
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
                    Marcas que Reparamos
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
                    Contáctanos
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
                Reparación de Planchas Industriales en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Técnico Especializado y Eficiente
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="reparacion" className="text-2xl font-bold text-gray-800 mb-4">
              Reparación de Planchas Industriales y Equipos de Cocina
            </h1>
            
            {/* Descripción con reparación */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En [Nombre de tu empresa], nos especializamos en la reparación de planchas industriales y otros equipos de cocina industrial, ofreciendo soluciones efectivas y rápidas para el sector hostelero, restauración y agroalimentario. Sabemos que una plancha industrial es un componente esencial en la cocina profesional, por lo que garantizamos un servicio técnico que asegure su correcto funcionamiento y eficiencia operativa.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas industriales son herramientas fundamentales en la preparación de alimentos a gran escala. Nuestro servicio incluye:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Reparación y mantenimiento de planchas de asar eléctricas y de gas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Diagnóstico y solución de fallos mecánicos y eléctricos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Ajustes y calibración de controles de temperatura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Reparación de superficies de cocción dañadas o desgastadas</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Además de las planchas, ofrecemos servicios de reparación para otros equipos de cocina industrial, tales como:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Lavavajillas industriales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Fuegos y hornos industriales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Máquinas de helado soft y vitrinas refrigeradas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Arcones congeladores y cámaras frigoríficas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Campanas extractoras industriales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Escarchacopas y dispensadores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Armarios de refrigeración y congeladores verticales</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Con una cobertura completa en Palma de Mallorca, Inca, Santa Ponsa, Magaluf, y otras localidades de las Islas Baleares, nuestro equipo asegura que cada equipo esté en óptimas condiciones, listo para ofrecer un servicio de calidad en tu negocio.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Importancia */}
            <div id="importancia" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por Qué Es Importante la Reparación de Planchas Industriales?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas industriales deben mantenerse en perfecto estado para garantizar una cocción uniforme y una eficiencia energética máxima. Los problemas comunes incluyen:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Desajustes de temperatura:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Las planchas pueden perder capacidad de regulación o tener una temperatura irregular.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Fallos en la superficie de cocción:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Con el tiempo, las superficies pueden presentar rayaduras o acumulación de residuos que afectan el rendimiento.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Problemas eléctricos:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Las planchas eléctricas pueden presentar cortocircuitos, fallos en los termostatos o en los interruptores.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestro equipo está altamente capacitado para diagnosticar y reparar estos problemas de manera rápida y eficaz, asegurando que tus planchas industriales vuelvan a funcionar como nuevas.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento preventivo */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento Preventivo para Planchas Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                La reparación de planchas industriales es solo una parte del proceso; también es importante realizar un mantenimiento preventivo regular para evitar averías mayores. Ofrecemos servicios de mantenimiento para:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Limpieza profunda de las superficies de cocción</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Revisión y calibración de termostatos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Inspección de conexiones eléctricas y gas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Desinfección y desincrustación de restos de alimentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Ajuste de la distribución del calor para asegurar un rendimiento óptimo</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Un mantenimiento adecuado prolonga la vida útil de las planchas y mejora la eficiencia de cocción, permitiendo ahorrar tiempo y energía en la operación diaria.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Consejos */}
            <div id="consejos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para Mantener Tu Plancha Industrial
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para mantener tus planchas industriales en las mejores condiciones, te recomendamos seguir estos consejos:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Limpieza diaria:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Asegúrate de limpiar bien la plancha después de cada uso para evitar que los restos de alimentos se adhieran a la superficie.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Verificación de temperatura:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Realiza un chequeo periódico de la temperatura para asegurar una distribución uniforme.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Desinfección mensual:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Desinfecta la plancha para evitar la acumulación de bacterias.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Revisión profesional periódica:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Programa revisiones técnicas con nuestro servicio para detectar posibles problemas antes de que se conviertan en averías graves.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura de Reparación de Equipos de Cocina Industrial
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos servicios de reparación de planchas industriales y equipos de cocina industrial en toda Palma de Mallorca, incluyendo las zonas más importantes como:
                </p>
                
                <div className="mb-4">
                  <p>🌍 Manacor, Inca, Calvià, Marratxí, Llucmajor, Arenal, Campos, Porreres, y Algaida</p>
                </div>
                
                <p>También atendemos complejos turísticos en Alcúdia, Cala d'Or, Magaluf, Santa Ponsa y Pollença.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Seguridad y garantía */}
            <div id="seguridad" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Seguridad y Garantía
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                🔒 Todos nuestros servicios de reparación de planchas industriales incluyen garantía sobre las piezas sustituidas y la mano de obra. Además, cumplimos con todas las normativas de seguridad e higiene, lo que es fundamental en el entorno de la cocina profesional.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Promoción */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Promoción Especial de Verano
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-bold mb-2">🎁 ¡Aprovecha nuestra promoción especial de verano! Durante este mes, ofrecemos un 5% de descuento en tu primer servicio de reparación de planchas industriales.</p>
                <p>📅 Hasta el 21 de abril de 2025 – ¡Solicita tu servicio ahora y asegura el buen funcionamiento de tus equipos!</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Marcas */}
            <div id="marcas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Reparación de Planchas Industriales de las Mejores Marcas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Trabajamos con las marcas más reconocidas del sector para la reparación de equipos de cocina industrial, incluyendo:
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                🔧 Gaggenau, Miele, Sub-Zero & Wolf, Smeg, Neff, Siemens, Bosch, AEG, Balay, Teka
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contáctanos para Reparar Tu Plancha Industrial
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si tu plancha industrial ha dejado de funcionar correctamente o necesitas mantenimiento, contáctanos ahora mismo. Nuestro servicio es rápido, confiable y garantizado. ¡Tu cocina no se detendrá con nosotros!
                </p>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 Llámanos o escríbenos a través de WhatsApp para recibir asistencia técnica inmediata.</p>
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

export default ReparacionDePlanchas;
