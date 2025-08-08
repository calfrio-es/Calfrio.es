import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const TecnicosDeLavavajillas = () => {
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
                    ¿Qué Hacen Nuestros Técnicos?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('averias');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Averías Comunes que Solucionamos
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
                    Mantenimiento y Optimización
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
                    Dónde Trabajamos
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
                    ¡Contáctanos Hoy!
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
                Técnicos de Lavavajillas en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reparación Profesional y Mantenimiento Especializado
              </p>
            </div>
            

            
            {/* H1 para SEO */}
            <h1 id="servicios" className="text-2xl font-bold text-gray-800 mb-4">
              ¿Qué Hacen Nuestros Técnicos de Lavavajillas?
            </h1>
            
            {/* Descripción con servicios */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Contamos con personal técnico especializado en diagnóstico, reparación y mantenimiento de lavavajillas industriales. Estos dispositivos requieren conocimientos avanzados para detectar y solucionar fallos que podrían afectar gravemente la operación diaria de un negocio. Nuestro servicio incluye:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Diagnóstico técnico preciso</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Reparación de fallos eléctricos, hidráulicos y mecánicos</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Sustitución de piezas averiadas o desgastadas</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Configuración de parámetros técnicos</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Revisión del sistema de lavado, enjuague y desagüe</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Mantenimiento preventivo y correctivo</strong></span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestros técnicos de lavavajillas están capacitados para trabajar con equipos de uso intensivo, donde la velocidad y la fiabilidad son esenciales.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Averías comunes */}
            <div id="averias" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Averías Comunes que Solucionamos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Estos son algunos de los problemas más comunes que solucionamos con rapidez y eficacia:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>El lavavajillas no arranca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>No calienta el agua</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>Problemas con el aclarado o la dosificación de detergente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>Errores en el panel de control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>Ruidos anormales o vibraciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>Fugas de agua o problemas con la bomba de desagüe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚙️</span>
                  <span>Baja eficacia de limpieza</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Sea cual sea la avería, nuestros técnicos tienen la experiencia y las herramientas para dejar tu equipo como nuevo.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento y optimización */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Optimización de Lavavajillas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                No solo reparamos: también optimizamos el funcionamiento de tus equipos para que ofrezcan un rendimiento superior, reduciendo el consumo de agua, detergente y electricidad. El mantenimiento periódico incluye:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Limpieza técnica interna y externa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Ajuste de temperaturas y presión</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Comprobación de filtros y válvulas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Control de bombas y resistencias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Verificación de tiempos de ciclo y seguridad</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Contar con nuestros técnicos de lavavajillas en Palma de Mallorca es apostar por la eficiencia a largo plazo.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Zonas de trabajo */}
            <div id="zonas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Dónde Trabajamos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos servicio técnico en Palma de Mallorca y todas las Islas Baleares. Cubrimos tanto áreas urbanas como zonas turísticas, incluyendo:
                </p>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔹 Palma y sus barrios:</p>
                  <p>Santa Catalina, Son Espanyolet, El Terreno, Es Rafal, Son Cladera, El Molinar, La Vileta, Camp Redó, Son Roca, Pere Garau, Son Ferriol, Son Oliva, Establiments.</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔹 Municipios de Mallorca:</p>
                  <p>Manacor, Inca, Calvià, Llucmajor, Marratxí, Campos, Porreres, Algaida, Santa Maria del Camí, Felanitx, Sóller, Sa Pobla, Artà, Binissalem.</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔹 Zonas turísticas:</p>
                  <p>Cala d'Or, Magaluf, Santa Ponsa, Port de Pollença, Alcúdia, Cala Millor, Playa de Palma, Arenal, Can Pastilla, Colònia de Sant Jordi.</p>
                </div>
                
                <p>
                  También atendemos a establecimientos de Ibiza, como Eivissa y Santa Eulària del Riu, con servicio planificado para hoteles y restaurantes.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Contáctanos Hoy!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <div className="mb-4">
                  <p className="font-bold mb-2">🔒 ¿Por Qué Elegirnos?</p>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Técnicos certificados con años de experiencia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Atención urgente en menos de 24h</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Garantía en todas nuestras reparaciones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Servicio especializado para profesionales de hostelería</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Repuestos originales de las principales marcas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Trato cercano y profesional</span>
                    </li>
                  </ul>
                </div>
                
                <p className="mb-4">
                  Ya sea para una reparación puntual o un contrato de mantenimiento, nuestros técnicos de lavavajillas en Palma de Mallorca están listos para ayudarte.
                </p>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🎁 Promoción Especial – Solo Hoy</p>
                  <p className="mb-2">📆 21 de abril de 2025 – ¡Aprovecha ahora!</p>
                  <p>Solicita tu primera reparación y recibe un 5% de descuento inmediato. Solo tienes que contactarnos desde AQUÍ.</p>
                </div>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 Contáctanos Hoy</p>
                  <p className="mb-2">📲 Llama o escríbenos por WhatsApp</p>
                  <p className="mb-2">📧 Solicita presupuesto sin compromiso</p>
                  <p className="mb-2">🕒 Disponibles todos los días de la semana</p>
                  <p className="mb-2">🔹 Somos los aliados técnicos que tu negocio necesita.</p>
                  <p>🔹 Soluciones reales, rápidas y garantizadas.</p>
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

export default TecnicosDeLavavajillas;
