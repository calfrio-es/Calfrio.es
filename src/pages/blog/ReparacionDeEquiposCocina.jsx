import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionDeEquiposCocina = () => {
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
                       const element = document.getElementById('servicio');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Qué Incluye Nuestro Servicio?
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
                       const element = document.getElementById('optimizacion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Reparación y Optimización
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
                    Seguridad y Normativas
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
                    Consejos para Cuidar Equipos
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
                    Marcas con las que Trabajamos
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('rapido');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Servicio Rápido y con Garantía
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('elegir');
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
                       const element = document.getElementById('conclusion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Contáctanos Hoy Mismo
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
                Reparación de Equipos de Cocina Industrial en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Técnico Profesional, Rápido y Eficaz
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="servicio" className="text-2xl font-bold text-gray-800 mb-4">
              ¿Qué Incluye Nuestro Servicio de Reparación?
            </h1>
            
            {/* Descripción con servicios */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En [Nombre de empresa], somos especialistas en la reparación de equipos de cocina industrial para el sector hostelero, restauración, comedores colectivos, obradores y empresas agroalimentarias. Ofrecemos un servicio técnico profesional, rápido y eficaz para que tu cocina nunca se detenga.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nuestro equipo técnico está capacitado para diagnosticar, reparar y optimizar todo tipo de maquinaria de cocina industrial, garantizando su funcionamiento eficiente y seguro. Trabajamos con los siguientes equipos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Lavavajillas industriales y lavavasos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Planchas de asar eléctricas o de gas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Cocinas industriales y fuegos de gran potencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Máquinas de helado soft y vitrinas refrigeradas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Armarios de refrigeración y congeladores verticales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Escarchacopas y dispensadores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Islas panorámicas, murales de frío y arcones congeladores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Hornos industriales, freidoras y microondas profesionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Campanas extractoras industriales y sistemas de ventilación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔸</span>
                  <span>Mesas refrigeradas, cámaras frigoríficas y abatidores de temperatura</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Gracias a nuestra experiencia, podemos ofrecer un servicio completo de reparación de equipos de cocina industrial, ya sea por averías eléctricas, problemas mecánicos, fallos en los controles digitales o desgastes por uso intensivo.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura en Palma y Toda Mallorca
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">Ofrecemos servicio de reparación en:</p>
                
                <div className="mb-4">
                  <p>📍 Palma de Mallorca, Inca, Manacor, Marratxí, Llucmajor, Calvià, Santa Eulària, Campos, Porreres, Algaida, Arenal, y zonas costeras como Cala d'Or, Magaluf, Santa Ponsa, Pollença y Alcúdia.</p>
                </div>
                
                <p>📦 Cubrimos desde restaurantes, hoteles y bares hasta grandes cocinas industriales, catering, food trucks y obradores.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Reparación y optimización */}
            <div id="optimizacion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Reparación y Optimización de Equipos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                La reparación de equipos de cocina industrial va más allá de arreglar una avería. También ofrecemos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Ajustes técnicos para mejorar el rendimiento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Optimización energética de equipos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Revisión de sistemas eléctricos y mecánicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Configuración de controles de temperatura y ciclos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Sustitución de piezas desgastadas o en mal estado</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Un equipo que funciona correctamente reduce los tiempos de servicio, ahorra energía y mejora la experiencia del cliente. Nos enfocamos en que cada máquina esté al 100% de su capacidad.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Seguridad, higiene y normativas */}
            <div id="seguridad" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Seguridad, Higiene y Normativas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                En cocinas industriales, la seguridad e higiene no son negociables. Por eso:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔒</span>
                  <span>Cumplimos las normativas sanitarias vigentes (HACCP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔒</span>
                  <span>Usamos repuestos originales o equivalentes certificados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔒</span>
                  <span>Reparamos y limpiamos sistemas de refrigeración y lavado para evitar contaminaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">🔒</span>
                  <span>Emitimos informes técnicos y certificados de intervención cuando es necesario</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Consejos */}
            <div id="consejos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para Cuidar tus Equipos de Cocina Industrial
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para reducir la necesidad de reparaciones costosas, te recomendamos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💡</span>
                  <span>Limpieza diaria de filtros, bandejas y componentes externos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💡</span>
                  <span>Revisión mensual del estado eléctrico y conexiones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💡</span>
                  <span>Desinfección profesional periódica (cada 3-6 meses)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💡</span>
                  <span>No forzar equipos fuera de su capacidad recomendada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">💡</span>
                  <span>Solicitar mantenimiento técnico preventivo con nuestros especialistas</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                ¡Un equipo bien mantenido dura más y da menos problemas!
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Marcas */}
            <div id="marcas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Marcas con las que Trabajamos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Ofrecemos reparación de equipos de cocina industrial de las principales marcas del mercado, incluyendo:
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Gaggenau, Miele, Sub-Zero & Wolf, Smeg, Neff, Siemens, Bosch, AEG, Balay, Teka
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                También atendemos equipos de marcas profesionales y fabricantes especializados en maquinaria industrial.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicio rápido */}
            <div id="rapido" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Rápido, Urgente y con Garantía
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">¿Tu horno dejó de calentar? ¿El lavavajillas no drena? ¿La plancha no enciende?</p>
                <p className="mb-4">📞 Llámanos y acudimos el mismo día, en muchos casos en menos de 3 horas.</p>
                <p>Todos nuestros trabajos incluyen garantía escrita y posibilidad de mantenimiento programado.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Promoción */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Promoción Especial – ¡Solo por Hoy!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-bold mb-2">🎁 21 de abril de 2025 – 5% de descuento en tu primer servicio de reparación de equipos de cocina industrial.</p>
                <p>Solicítalo ahora desde [AQUI] y asegura la operatividad total de tu cocina.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Por qué elegirnos */}
            <div id="elegir" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por Qué Elegirnos?
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Técnicos especializados en cocina profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Servicio en toda Mallorca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Precios transparentes y justos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Atención al cliente cercana y directa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Reparaciones urgentes o programadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Garantía por escrito en cada intervención</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contáctanos Hoy Mismo
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  No dejes que una avería paralice tu cocina. Llámanos, escríbenos por WhatsApp o correo y te ayudamos al instante.
                </p>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📍 Palma de Mallorca – Islas Baleares</p>
                  <p className="mb-2">📲 Asistencia técnica inmediata</p>
                  <p className="mb-2">🔧 Profesionales en reparación de equipos de cocina industrial</p>
                  <p>¡Tu cocina lista para seguir produciendo sin interrupciones!</p>
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

export default ReparacionDeEquiposCocina;
