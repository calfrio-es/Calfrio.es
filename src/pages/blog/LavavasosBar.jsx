import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import lavavasosBarImg from '../../assets/img/lavavasosbar.jpg';

const LavavasosBar = () => {
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
                       const element = document.getElementById('beneficios');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Beneficios de Usar un Lavavasos para Bar
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
                    ¿Cómo Elegir el Mejor Lavavasos para Bar?
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
                    Mantenimiento y Consejos Prácticos
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
                    Problemas Comunes en Electrodomésticos
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
                    Servicio Técnico
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
                    Mejora la Calidad de tu Bar
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
                Lavavasos para Bar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eficiencia y Limpieza en tu Negocio
              </p>
            </div>
            
            {/* Imagen del lavavasos para bar */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavasosBarImg} 
                alt="Lavavasos para bar profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="beneficios" className="text-2xl font-bold text-gray-800 mb-4">
              Beneficios de Usar un Lavavasos para Bar
            </h1>
            
            {/* Descripción con beneficios */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                El lavavasos para bar es un equipo esencial en cualquier negocio de hostelería. Su capacidad para lavar y desinfectar copas y vasos de manera rápida y eficiente garantiza un servicio ágil y de alta calidad.
              </p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Higiene y desinfección:</strong> Gracias a sus altas temperaturas, elimina bacterias y residuos sin esfuerzo.</li>
                <li><strong>Ahorro de tiempo:</strong> Lava múltiples vasos en pocos minutos, optimizando el trabajo del personal.</li>
                <li><strong>Menor consumo de agua y detergente:</strong> Diseñado para ser eficiente y sostenible.</li>
                <li><strong>Protección del cristal:</strong> Programas de lavado especiales que cuidan la cristalería y evitan roturas.</li>
                <li><strong>Mayor eficiencia en el servicio:</strong> Garantiza vasos limpios y listos para ser utilizados sin retrasos.</li>
              </ol>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Cómo elegir el mejor lavavasos para bar */}
            <div id="elegir" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Cómo Elegir el Mejor Lavavasos para Bar?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para encontrar el equipo ideal, ten en cuenta:
              </p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Capacidad y tamaño:</strong> Elige un modelo que se adapte al volumen de clientes de tu bar.</li>
                <li><strong>Consumo energético:</strong> Opta por lavavasos eficientes para reducir costos.</li>
                <li><strong>Opciones de secado:</strong> Algunos modelos incorporan secado rápido para mayor rapidez en el servicio.</li>
                <li><strong>Facilidad de uso y mantenimiento:</strong> Un sistema intuitivo y de fácil limpieza es clave para su durabilidad.</li>
              </ol>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento y consejos prácticos */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Consejos Prácticos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para prolongar la vida útil de tu lavavasos para bar, sigue estos consejos:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Limpia los filtros y revisa las boquillas regularmente.</li>
                <li>Usa detergentes adecuados para evitar residuos en los vasos.</li>
                <li>Realiza revisiones periódicas con un servicio técnico especializado.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Problemas comunes en electrodomésticos relacionados */}
            <div id="problemas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Problemas Comunes en Electrodomésticos Relacionados
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si tu frigorífico Whirlpool No Frost no enfría, revisa la temperatura y la ventilación. También pueden presentarse fallos en:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Frigoríficos Candy:</strong> problemas con la distribución del frío.</li>
                  <li><strong>Frigoríficos Daewoo:</strong> problemas en el motor del ventilador.</li>
                  <li><strong>Frigoríficos Electrolux:</strong> problemas por obstrucción en el sistema de refrigeración.</li>
                  <li><strong>Frigoríficos Fagor No Frost:</strong> problemas debido a acumulación de hielo en el evaporador.</li>
                </ul>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicio técnico para lavavasos y otros electrodomésticos */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Técnico para Lavavasos y Otros Electrodomésticos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas asistencia con tu lavavasos para bar, consulta con especialistas en:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Garland Servicio Técnico</strong></li>
                  <li><strong>General Electric Servicio Técnico</strong></li>
                  <li><strong>Go He Service Candy UM</strong></li>
                  <li><strong>Go He Service Hoover UM</strong></li>
                </ul>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mejora la calidad de tu bar */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mejora la Calidad de tu Bar con un Lavavasos Industrial
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Invertir en un lavavasos para bar de calidad es fundamental para mantener la eficiencia y la higiene en tu negocio. Un equipo bien mantenido garantiza un servicio rápido y profesional, mejorando la experiencia de tus clientes y optimizando el trabajo de tu personal.
                </p>
              </div>
            </div>
          </div>
        </div>

                 {/* Columna derecha - un poco más grande - oculta en móviles */}
         <div className="hidden lg:block w-2/6">
           <BlogsRelacionados />
         </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default LavavasosBar;
