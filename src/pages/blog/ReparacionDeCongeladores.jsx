import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionDeCongeladores = () => {
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
                    Servicios de Reparación
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
                    Importancia de la Reparación
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
                    Cobertura en Mallorca
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
                Reparación de Congeladores Industriales en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Especializado para tu Negocio de Hostelería
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="servicios" className="text-2xl font-bold text-gray-800 mb-4">
              Servicios de Reparación de Congeladores y Equipos de Cocina Industrial
            </h1>
            
            {/* Descripción con servicios */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En [Nombre de tu empresa], ofrecemos servicios especializados en la reparación de congeladores industriales en Palma de Mallorca y sus alrededores. Sabemos lo crucial que es para tu negocio de hostelería contar con congeladores en perfectas condiciones para asegurar la correcta conservación de los alimentos y cumplir con los estándares de higiene y seguridad.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Desde congeladores verticales, hasta arcones congeladores, nuestros técnicos expertos están listos para reparar cualquier tipo de equipo de refrigeración industrial de forma rápida y eficiente, minimizando el impacto en tus operaciones diarias.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nos especializamos en la reparación de congeladores industriales y otros equipos de cocina que son esenciales para la operación de establecimientos de hostelería y restauración. Entre los equipos que mantenemos y reparamos se incluyen:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Congeladores verticales y arcones congeladores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Lavavajillas industriales, hornos y fuegos industriales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Máquinas de helado soft y vitrinas refrigeradas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Planchas de asar eléctricas y armarios de refrigeración</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Escarchacopas y lavavasos</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestros técnicos están altamente capacitados y poseen años de experiencia en la reparación de equipos de cocina industrial, lo que nos permite ofrecer un servicio rápido y de alta calidad, asegurando que tu negocio siga funcionando sin contratiempos.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Importancia */}
            <div id="importancia" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Importancia de la Reparación de Congeladores Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                El buen funcionamiento de los congeladores industriales es esencial para la conservación de productos perecederos en tu establecimiento. Los problemas más comunes en estos equipos incluyen:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❄️ Fugas de gas refrigerante:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Afectan la capacidad de enfriamiento del congelador.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❄️ Fallos en los controles de temperatura:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Pueden resultar en temperaturas incorrectas, comprometiendo la calidad de los productos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❄️ Desgaste de componentes:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Como el motor o los ventiladores, que reducen la eficiencia del equipo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">❄️ Bloqueo o congelación de la tubería:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Esto puede causar una parada completa del sistema.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Realizamos un diagnóstico preciso para identificar y solucionar estos problemas rápidamente, garantizando la mínima interrupción en tus operaciones.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Consejos */}
            <div id="consejos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para Mantener los Congeladores Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para asegurar que tu congelador industrial funcione correctamente durante mucho tiempo, te recomendamos seguir estos consejos:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Revisiones periódicas:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Realiza un mantenimiento regular para evitar que se acumulen problemas menores.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Limpieza frecuente:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Mantén el interior y los filtros del congelador limpios para asegurar un rendimiento óptimo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Verificación de la temperatura:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Asegúrate de que el congelador mantenga la temperatura adecuada para la conservación de los alimentos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Revisar sellos y puertas:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Los sellos de las puertas deben estar en buen estado para evitar la pérdida de frío.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Atención profesional:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Si notas alguna anomalía, como ruidos extraños o cambios en el rendimiento, es esencial contactar a un técnico especializado.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura de Reparación de Congeladores en Palma de Mallorca y Más Allá
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos reparación de congeladores industriales en Palma de Mallorca, así como en varias otras localidades de las Islas Baleares, incluyendo:
                </p>
                
                <div className="mb-4">
                  <p>🌍 Inca, Calvià, Santa Ponsa, Alcúdia, Cala d'Or, Magaluf, Pollença, y Arenal.</p>
                </div>
                
                <p>También atendemos zonas turísticas como Cala Millor, Soller, Llucmajor, Manacor, y Campos, garantizando un servicio completo en toda la región.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Marcas */}
            <div id="marcas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Reparación de Congeladores de las Mejores Marcas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Trabajamos con congeladores industriales de marcas líderes en la industria, como:
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                🔧 Gaggenau, Miele, Sub-Zero & Wolf, Smeg, Neff, Siemens, Bosch, AEG, Balay, Teka
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
                <p className="font-bold mb-2">🎁 ¡No dejes que tu congelador se detenga en plena temporada alta! Aprovecha nuestra promoción especial de verano: ¡5% de descuento en tu primer servicio de reparación!</p>
                <p>Esta oferta es válida hasta el 21 de abril de 2025. Confía en nuestros expertos para mantener tus equipos industriales en perfecto estado.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contáctanos para Reparar tu Congelador Industrial
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas reparar tu congelador industrial o cualquier otro equipo de cocina industrial, contáctanos hoy mismo. Estamos disponibles para ofrecer un servicio rápido y eficiente, para que tu negocio de hostelería siga funcionando sin problemas.
                </p>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 Llámanos o escríbenos para obtener asistencia inmediata.</p>
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

export default ReparacionDeCongeladores;
