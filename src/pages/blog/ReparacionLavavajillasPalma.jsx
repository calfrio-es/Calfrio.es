import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionLavavajillasPalma = () => {
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
                       const element = document.getElementById('problemas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Qué Problemas Soluciona Nuestro Servicio?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('proceso');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Cómo Trabajamos? Nuestro Proceso
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
                       const element = document.getElementById('zonas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Zonas de Atención en Palma
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
                    ¡Solicita Tu Reparación Hoy!
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
                Reparación de Lavavajillas en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Atención Rápida, Profesional y con Garantía
              </p>
            </div>
            
            
            {/* H1 para SEO */}
            <h1 id="problemas" className="text-2xl font-bold text-gray-800 mb-4">
              ¿Qué Problemas Soluciona Nuestro Servicio de Reparación de Lavavajillas?
            </h1>
            
            {/* Descripción con problemas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Contamos con técnicos altamente capacitados para detectar y reparar todo tipo de fallos. Estos son algunos de los más comunes que tratamos a diario:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔌</span>
                  <span><strong>El lavavajillas no enciende:</strong> Si tu equipo no responde al encenderlo, puede deberse a un problema en el cableado, un fusible fundido, una conexión suelta o incluso un fallo en el panel electrónico. Realizamos un diagnóstico completo para detectar el origen exacto y aplicar la solución más adecuada.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🚿</span>
                  <span><strong>No desagua correctamente:</strong> Uno de los fallos más frecuentes. Puede estar causado por filtros obstruidos, bombas de drenaje defectuosas o mangueras atascadas. En muchos casos, una limpieza a fondo es suficiente. En otros, sustituimos la pieza dañada con repuestos originales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🌡️</span>
                  <span><strong>No calienta el agua:</strong> La falta de agua caliente durante el ciclo afecta directamente la calidad del lavado. Este problema suele estar relacionado con el termostato o la resistencia. Nuestros técnicos pueden comprobar estos componentes y reemplazarlos si es necesario.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🍽️</span>
                  <span><strong>Vajilla sucia o con residuos:</strong> ¿Sacas tus platos y vasos con restos de comida o mal lavados? Esto puede deberse a brazos rociadores tapados, filtros saturados o una mala presión de agua. Hacemos una limpieza integral y ajustes para mejorar el rendimiento del aparato.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💧</span>
                  <span><strong>Fugas de agua:</strong> Una fuga de agua en el lavavajillas no solo daña el aparato, también puede perjudicar tus muebles o suelos. Revisamos juntas, mangueras, bomba de agua y válvulas para detectar la fuente de la fuga y solucionar el problema sin demoras.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔊</span>
                  <span><strong>Ruidos extraños o excesivos:</strong> Los ruidos fuertes durante el funcionamiento pueden indicar la presencia de objetos atrapados, problemas con el motor o desgaste en componentes internos. Actuamos rápido para prevenir averías mayores.</span>
                </li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Proceso de reparación */}
            <div id="proceso" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Cómo Trabajamos? Nuestro Proceso de Reparación
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Diagnóstico profesional en el domicilio:</strong> Revisamos tu lavavajillas a fondo, sin prisas, identificando con precisión la falla y evaluando si se trata de un problema eléctrico, mecánico o hidráulico.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Presupuesto claro y sin sorpresas:</strong> Te explicamos el problema, las posibles soluciones y el coste total antes de hacer cualquier reparación.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Reparación con garantía:</strong> Utilizamos piezas de alta calidad y seguimos los estándares del fabricante para asegurarte un servicio duradero.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Pruebas de funcionamiento:</strong> Antes de irnos, comprobamos que el lavavajillas funcione perfectamente. Te damos recomendaciones para cuidarlo y evitar futuras averías.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento preventivo */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento Preventivo: Evita Reparaciones Costosas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Prevenir es mejor (y más barato) que reparar. Un mantenimiento adecuado puede evitar más del 70% de las averías más comunes. Aquí te dejamos algunas recomendaciones prácticas:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Limpia los filtros y brazos rociadores cada 1 o 2 semanas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Usa detergentes y abrillantadores de buena calidad para evitar acumulación de cal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>No sobrecargues el lavavajillas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Revisa periódicamente las mangueras de entrada y salida de agua.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Realiza un ciclo de limpieza con vinagre blanco o un producto desincrustante una vez al mes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Verifica que la puerta cierre correctamente y que las gomas de sellado no estén dañadas.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Zonas de atención */}
            <div id="zonas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Zonas de Atención en Palma de Mallorca y Alrededores
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos servicio de reparación de lavavajillas a domicilio en toda Palma de Mallorca y sus alrededores. Nos movemos rápido y cubrimos una amplia variedad de barrios y localidades, incluyendo:
                </p>
                
                <p className="mb-4">
                  <strong>Palma Centro, El Molinar, Santa Catalina, Foners, Pere Garau, El Terreno, Son Rapinya, Son Espanyolet, Camp Redó, Son Oliva, Son Gotleu, La Vileta, La Soledad, Son Cotoner, Rafal Nou, Rafal Vell, Son Rullan, Son Ferriol, Es Coll d'en Rabassa, Establiments, Son Dureta, Es Rafal, Son Dameto, Secar de la Real, Son Cladera, Verge de Lluc, Son Forteza, Son Malferit, Sa Teulera.</strong>
                </p>
                
                <p className="mb-4">
                  Además, llegamos a muchas zonas aledañas como:
                </p>
                
                <p>
                  <strong>Can Pastilla, Playa de Palma, Las Maravillas, El Arenal, Son Veri, Marratxí, Pont d'Inca, Es Pla de na Tesa, Sa Cabaneta, Bunyola, Esporles, Llucmajor, Santa Maria del Camí, Calvià, Magaluf, Palmanova, Son Ferrer, Santa Ponça, El Toro y muchas más.</strong>
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Solicita Tu Reparación de Lavavajillas en Palma Hoy Mismo!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">🕒</span>
                    <span><strong>Atendemos urgencias</strong> y trabajamos con flexibilidad horaria.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">🛠️</span>
                    <span><strong>Técnicos calificados</strong> con años de experiencia.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">💬</span>
                    <span><strong>Asesoría personalizada</strong> y sin compromiso.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✅</span>
                    <span><strong>Garantía por escrito</strong> en todas las reparaciones.</span>
                  </li>
                </ul>
                
                <p className="text-center font-bold text-lg">
                  👉 ¡Llámanos ahora o envíanos un mensaje! Te ayudamos a recuperar el funcionamiento de tu lavavajillas de forma rápida y profesional.
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

export default ReparacionLavavajillasPalma; 