import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionLavavajillasIndustriales = () => {
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
                       const element = document.getElementById('especialistas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Especialistas en Lavavajillas Industriales
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
                    ¿Qué Tipos de Averías Reparamos?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('servicio');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Servicio Urgente de Reparación
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
                    Zonas de Cobertura en Palma
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
                    Optimización y Puesta a Punto
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
                    ¡Solicita tu Reparación Hoy!
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
                Reparación de Lavavajillas Industriales en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ¡Eficiencia para tu Negocio de Hostelería!
              </p>
            </div>
            
            
            {/* H1 para SEO */}
            <h1 id="especialistas" className="text-2xl font-bold text-gray-800 mb-4">
              Especialistas en Lavavajillas Industriales para Hostelería, Restauración y Turismo
            </h1>
            
            {/* Descripción con especialistas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Sabemos lo importante que es mantener la higiene y eficiencia en cocinas industriales. Por eso ofrecemos un servicio integral de reparación y mantenimiento de lavavajillas industriales, pensado especialmente para:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏨</span>
                  <span><strong>Hoteles</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🍽️</span>
                  <span><strong>Restaurantes</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">☕</span>
                  <span><strong>Bares y cafeterías</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏫</span>
                  <span><strong>Comedores escolares</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏥</span>
                  <span><strong>Hospitales y clínicas</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🎂</span>
                  <span><strong>Caterings y obradores</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛒</span>
                  <span><strong>Supermercados y empresas agroalimentarias</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏖️</span>
                  <span><strong>Complejos turísticos y resorts</strong></span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestros técnicos están capacitados para diagnosticar y solucionar problemas en sistemas de lavado, bombas, resistencias, controladores electrónicos, sensores de temperatura, y mucho más.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Tipos de averías */}
            <div id="averias" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Qué Tipos de Averías Reparamos?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Trabajamos con todo tipo de fallos, desde los más comunes hasta los más complejos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Lavavajillas industriales que no calientan el agua</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Sistemas de lavado que no arrancan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Bajos resultados de limpieza</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Errores electrónicos en el panel de control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Fugas de agua y fallos en las bombas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Problemas de presión o caudal de agua</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Fallos en sensores o sistemas de dosificación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔧</span>
                  <span>Atascos o ruidos inusuales</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nos encargamos de que cada máquina funcione con precisión y cumpla con las normativas de higiene alimentaria.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicio urgente */}
            <div id="servicio" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Urgente de Reparación y Mantenimiento
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                ¿Una avería fuera de horario o durante el fin de semana? ¡No hay problema! Ofrecemos servicio técnico urgente, ideal para negocios que trabajan los siete días de la semana. Además, realizamos mantenimiento preventivo para evitar paradas inesperadas.
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Diagnóstico rápido en el lugar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Presupuestos claros y sin sorpresas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Reparaciones con repuestos originales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Garantía en todos los trabajos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Asistencia técnica en menos de 24 horas</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Zonas de cobertura */}
            <div id="zonas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Zonas de Cobertura en Palma de Mallorca y Alrededores
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos cobertura completa en Palma de Mallorca y nos desplazamos sin coste adicional por gran parte de la isla. Estas son solo algunas de las zonas donde trabajamos con regularidad:
                </p>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔸 Palma y barrios cercanos:</p>
                  <p>Centro de Palma, Santa Catalina, Son Rapinya, El Terreno, Son Gotleu, Camp Redó, Pere Garau, El Molinar, Son Cladera, Son Rullan, Rafal Nou, Rafal Vell, La Soledad, Es Coll d'en Rabassa, Secar de la Real, Son Dameto, Son Oliva, Son Ferriol, Sa Teulera, La Vileta, Son Cotoner.</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔸 Zonas turísticas y pueblos cercanos:</p>
                  <p>Can Pastilla, Playa de Palma, El Arenal, Son Veri, Las Maravillas, Magaluf, Santa Ponsa, Palmanova, Peguera, Cala Major, Illetes, Bendinat, Portals Nous.</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔸 Municipios y localidades de Mallorca:</p>
                  <p>Marratxí, Inca, Manacor, Llucmajor, Campos, Porreres, Algaida, Santa María del Camí, Bunyola, Esporles, Sineu, Felanitx, Sóller, Andratx, Sa Pobla.</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🔸 Atención especial en zonas hoteleras y resorts:</p>
                  <p>Cala d'Or, Cala Millor, Port de Pollença, Alcúdia, Port d'Alcúdia, Cala Ratjada, Santanyí, Colònia de Sant Jordi, Formentor, Artà, Can Picafort.</p>
                </div>
                
                <p>
                  También llegamos a Eivissa (Ibiza) y Santa Eulària des Riu bajo cita previa y planificación especial para cadenas hoteleras o instalaciones de alto volumen.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Optimización */}
            <div id="optimizacion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Optimización y Puesta a Punto de Lavavajillas Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Además de la reparación, ofrecemos servicios de optimización de rendimiento. Esto incluye:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Ajuste de parámetros de lavado según tipo de vajilla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Configuración de temperatura y presión</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Revisión de consumos y eficiencia energética</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Mejora del rendimiento de secado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span>Reducción de fallos recurrentes</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                ¡Con una máquina bien ajustada, ahorras agua, energía y evitas el desgaste prematuro!
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Solicita tu Reparación Hoy!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  ¿Tu lavavajillas industrial no funciona como debería? ¡No esperes más!
                </p>
                
                <div className="mb-4">
                  <p className="font-bold mb-2">🎯 ¿Por Qué Elegirnos?</p>
                  <ul className="list-none space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Técnicos especialistas en lavavajillas industriales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Atención a negocios, empresas y grandes cocinas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Atención urgente y cobertura insular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Soporte profesional, amable y transparente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✅</span>
                      <span>Descuento exclusivo del 5% por tu primer servicio</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 ¡Solicita tu Reparación Hoy!</p>
                  <p className="mb-2">📆 Solicita tu reparación para hoy, 21 de abril de 2025, y accede a nuestra Promoción Especial de Verano:</p>
                  <p className="mb-2">🧾 5% de descuento en tu primer servicio, pidiéndolo desde AQUÍ.</p>
                  <p className="mb-2">🔧 Llámanos, escríbenos por WhatsApp o deja tus datos en nuestro formulario online.</p>
                  <p className="mb-2">📍 Estamos cerca, nos movemos rápido y lo dejamos todo funcionando como nuevo.</p>
                  <p>👉 Confía en nuestros profesionales y asegúrate de que tus equipos estén listos para cada servicio.</p>
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

export default ReparacionLavavajillasIndustriales;
