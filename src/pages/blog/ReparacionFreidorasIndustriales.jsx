import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionFreidorasIndustriales = () => {
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
                       const element = document.getElementById('confiar');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Por qué confiar en nosotros?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
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
                    ¿Qué Problemas Solucionamos?
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
                    Servicios Incluidos
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
                    Cobertura en Islas Baleares
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
                    ¡Contáctanos Ahora!
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
                Reparación de Freidoras Industriales en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Técnico Profesional
              </p>
            </div>
            
            
            {/* H1 para SEO */}
            <h1 id="confiar" className="text-2xl font-bold text-gray-800 mb-4">
              Reparación Freidoras Industriales – ¿Por qué confiar en nosotros?
            </h1>
            
            {/* Descripción con confianza */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Porque contamos con técnicos especializados en freidoras a gas, eléctricas, de alta capacidad y freidoras de presión, con amplio conocimiento técnico para diagnosticar, reparar y optimizar cualquier tipo de equipo.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestra intervención incluye:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔎</span>
                  <span><strong>Diagnóstico profesional</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙️</span>
                  <span><strong>Reparaciones de sistemas eléctricos, electrónicos y a gas</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔄</span>
                  <span><strong>Sustitución de componentes</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span><strong>Calibración de termostatos y controles</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✅</span>
                  <span><strong>Verificación de medidas de seguridad y normativa</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📊</span>
                  <span><strong>Optimización del rendimiento energético</strong></span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Trabajamos con todas las marcas del mercado y garantizamos resultados duraderos.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Problemas que solucionamos */}
            <div id="problemas" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Qué Problemas Solucionamos?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Somos expertos en solucionar las averías más comunes en freidoras industriales, como:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>La freidora no calienta correctamente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>Problemas con el termostato o el sensor de temperatura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>Fugas de aceite o gas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>Saltos de térmico o problemas eléctricos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>Panel de control sin respuesta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>Cocción desigual o tiempos lentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">📉</span>
                  <span>Encendido irregular o intermitente</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                No importa si la freidora está en una cocina pequeña o en una gran cadena hotelera: tenemos la solución adecuada.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicios incluidos */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicios Incluidos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔧 Diagnóstico y Reparación Técnica</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Detectamos y reparamos fallos de forma eficiente. Si hay fallos electrónicos, mecánicos o térmicos, nuestros técnicos están capacitados para actuar con rapidez, garantizando la seguridad y el buen funcionamiento del equipo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🧼 Mantenimiento Preventivo</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Una freidora cuidada dura más y funciona mejor. Realizamos limpieza técnica, inspección de conexiones eléctricas o de gas, revisión de resistencias, quemadores, válvulas y más.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🔄 Reemplazo de Piezas</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Si una pieza ha dejado de funcionar, la sustituimos por repuestos de calidad profesional, asegurando la durabilidad del equipo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Optimización Energética</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Mejoramos el rendimiento y eficiencia energética de la freidora. Calibramos los ciclos de cocción para reducir consumos innecesarios y tiempos muertos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">🧠 Asesoramiento y Formación</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Al realizar la reparación de freidoras industriales, también ofrecemos formación al personal para su uso correcto, limpieza segura y mantenimiento básico, alargando así la vida útil de la máquina.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura en Islas Baleares
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos reparación de freidoras industriales en toda la isla de Mallorca, incluyendo:
                </p>
                
                <div className="mb-4">
                  <p>Palma de Mallorca, Manacor, Inca, Calvià, Llucmajor, Marratxí, Campos, Porreres, Algaida, Santa Eulària del Riu, Eivissa</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">Y también en zonas turísticas de alto flujo:</p>
                  <p>🔹 Alcúdia, Cala d'Or, Magaluf, Pollença, Santa Ponsa, Arenal y más.</p>
                </div>
                
                <p>
                  Disponemos de técnicos móviles que se desplazan a tu local, restaurante, hotel o cocina industrial en menos de 24 horas.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos de freidoras */}
            <div id="tipos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Freidoras que Reparamos
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de gas</strong> – Rápida recuperación de temperatura.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras eléctricas</strong> – Perfectas para espacios sin conexión de gas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de presión</strong> – Freído uniforme y crujiente, ideal para pollo y frituras especiales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de alta capacidad</strong> – Cocinas de gran volumen.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras de mesa</strong> – Compactas y versátiles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span><strong>Freidoras con zona fría</strong> – Aumentan la duración del aceite y evitan la transferencia de sabores.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Contáctanos Ahora!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <div className="mb-4">
                  <p className="font-bold mb-2">⚠️ ¿Por Qué es Crucial la Reparación de Freidoras Industriales?</p>
                  <p className="mb-2">Una freidora defectuosa puede:</p>
                  <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Aumentar el consumo de energía</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Dañar la calidad de los alimentos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Poner en riesgo la seguridad del personal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Causar pérdidas económicas por tiempos de inactividad</span>
                    </li>
                  </ul>
                  <p>Con nuestro servicio técnico, tu freidora volverá a funcionar al 100%, manteniendo la calidad, velocidad y seguridad en tu cocina.</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🎁 Promoción Especial de Verano – SOLO HOY</p>
                  <p className="mb-2">📅 21 de abril de 2025</p>
                  <p>Solicita hoy tu primera reparación de freidoras industriales y obtén un 5% de descuento inmediato. ¡Haz clic AQUÍ y empieza a ahorrar ahora!</p>
                </div>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 Contáctanos Ahora</p>
                  <p className="mb-2">✅ Atención inmediata</p>
                  <p className="mb-2">✅ Presupuestos sin compromiso</p>
                  <p className="mb-2">✅ Técnicos disponibles todos los días</p>
                  <p className="mb-2">✅ Reparación garantizada</p>
                  <p className="mb-2">🔧 No dejes que una avería interrumpa tu cocina.</p>
                  <p>Confía en nuestros técnicos especializados y mantén tus freidoras industriales en condiciones óptimas, seguras y listas para cocinar sin pausas.</p>
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

export default ReparacionFreidorasIndustriales;
