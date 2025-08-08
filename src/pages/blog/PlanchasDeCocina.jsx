import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import planchasDeCocinaImg from '../../assets/img/tiposlavavajillashosteleria.jpg';

const PlanchasDeCocina = () => {
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
                       const element = document.getElementById('introduccion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Introducción a las Planchas de Cocina
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
                    Tipos de Planchas de Cocina
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
                    Beneficios de una Plancha de Cocina
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
                    Mantenimiento y Cuidados
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('aplicaciones');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Aplicaciones en Hostelería
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
                    Invierte en Calidad
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
                Planchas de Cocina
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Versatilidad y Eficiencia en la Cocción Profesional
              </p>
            </div>
            
            {/* Imagen de las planchas de cocina */}
            <div className="flex justify-center mb-8">
              <img 
                src={planchasDeCocinaImg} 
                alt="Planchas de cocina profesionales" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Planchas de Cocina
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las planchas de cocina son equipos esenciales en cocinas profesionales y domésticas, diseñadas para cocinar una gran variedad de alimentos de manera rápida y uniforme. Estas superficies de cocción se caracterizan por su gran capacidad para distribuir el calor de manera homogénea, permitiendo sellar carnes, cocinar verduras, tostar pan o preparar alimentos sin necesidad de utilizar ollas o sartenes.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Tipos de planchas de cocina */}
            <div id="tipos" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Planchas de Cocina
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Existen diferentes tipos de planchas según su material, fuente de calor y uso:
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Según la fuente de energía:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Planchas de gas:</strong> Ideales para cocinas industriales debido a su rápida respuesta térmica y potencia regulable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Planchas eléctricas:</strong> Perfectas para cocinas domésticas o establecimientos que buscan eficiencia energética y facilidad de uso.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Planchas de inducción:</strong> Utilizan tecnología avanzada para calentar solo la superficie de contacto con el recipiente, reduciendo el consumo de energía.</span>
                </li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Según el material de la superficie:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas de acero inoxidable:</strong> Resistentes a la corrosión y fáciles de limpiar, ideales para cocinas profesionales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas de hierro fundido:</strong> Conservan el calor durante más tiempo y ofrecen una cocción uniforme.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas antiadherentes:</strong> Recubiertas con teflón o cerámica, permiten cocinar sin que los alimentos se adhieran.</span>
                </li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Según su uso y diseño:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Planchas industriales:</strong> Diseñadas para restaurantes y hoteles, con mayor capacidad y potencia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Planchas de sobremesa:</strong> Compactas y prácticas para uso en cocinas pequeñas o food trucks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Planchas con grill:</strong> Incorporan ranuras que dejan marcas en los alimentos, como en hamburguesas y carnes.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios de una plancha de cocina */}
            <div id="beneficios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Beneficios de una Plancha de Cocina
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Cocción uniforme:</strong> Su diseño permite que el calor se distribuya de manera homogénea.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Versatilidad:</strong> Se pueden cocinar diferentes tipos de alimentos sin mezclar sabores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Saludable:</strong> Permite cocinar con menos aceite, favoreciendo una alimentación más sana.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Fácil limpieza:</strong> La mayoría de modelos cuentan con superficies antiadherentes o de acero inoxidable, que facilitan la limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Ahorro de tiempo:</strong> Al cocinar directamente sobre la superficie, se reduce el tiempo de preparación.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Eficiencia energética:</strong> Al distribuir el calor de manera uniforme, se optimiza el consumo de energía.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento y cuidados */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Cuidados
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para prolongar la vida útil de tu plancha de cocina y mantener su rendimiento óptimo:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Limpia la superficie después de cada uso con productos específicos para el material.</li>
                <li>Evita usar utensilios metálicos en planchas antiadherentes para no dañar el recubrimiento.</li>
                <li>Realiza una limpieza profunda periódica para eliminar residuos acumulados.</li>
                <li>Verifica el estado de los quemadores o elementos calefactores regularmente.</li>
                <li>Mantén la plancha en un lugar seco y protegido cuando no esté en uso.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Aplicaciones en hostelería */}
            <div id="aplicaciones" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Aplicaciones en Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas de cocina son fundamentales en diferentes tipos de establecimientos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏪</span>
                  <span><strong>Restaurantes:</strong> Para preparar carnes, pescados y verduras con rapidez y calidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🍔</span>
                  <span><strong>Hamburgueserías:</strong> Para cocinar hamburguesas y sándwiches de manera eficiente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🥪</span>
                  <span><strong>Food trucks:</strong> Por su versatilidad y facilidad de transporte.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏨</span>
                  <span><strong>Hoteles:</strong> Para preparar desayunos y comidas rápidas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🏥</span>
                  <span><strong>Hospitales y residencias:</strong> Para cocinar alimentos saludables sin exceso de grasa.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Invierte en calidad */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Invierte en Calidad
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Una plancha de cocina de calidad es una inversión que se amortiza rápidamente en cualquier negocio gastronómico. Su versatilidad, eficiencia y facilidad de uso la convierten en un equipo indispensable para optimizar los procesos de cocción y mejorar la calidad de los alimentos.
                </p>
                
                <p>
                  Al elegir una plancha de cocina, considera las necesidades específicas de tu negocio, el volumen de trabajo y el tipo de alimentos que prepararás para seleccionar el modelo más adecuado.
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

export default PlanchasDeCocina;
