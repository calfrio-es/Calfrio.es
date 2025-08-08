import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import hornoRationalImg from '../../assets/img/hornorational.jpg';

const HornoRational = () => {
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
                       const element = document.getElementById('caracteristicas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Características Principales
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('tecnologia');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Innovación y Tecnología Inteligente
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
                    Ventajas y Beneficios
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('modelos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Modelos de Hornos Rational
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
                    Aplicaciones y Usos
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
                    Tecnología de Vanguardia
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
                Horno Rational
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovación y Eficiencia en la Cocina Profesional
              </p>
            </div>
            
            {/* Imagen del horno Rational */}
            <div className="flex justify-center mb-8">
              <img 
                src={hornoRationalImg} 
                alt="Horno Rational profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="caracteristicas" className="text-2xl font-bold text-gray-800 mb-4">
              Características Principales
            </h1>
            
            {/* Descripción con características */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Los hornos Rational son equipos de alta gama diseñados para cocinas industriales y profesionales. Reconocidos por su tecnología avanzada y eficiencia, estos hornos combinan vapor y calor seco para ofrecer resultados óptimos en la cocción de una amplia variedad de alimentos.
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Cocción Inteligente:</strong> Los hornos Rational incorporan sistemas de inteligencia artificial que ajustan automáticamente la temperatura, humedad y tiempo de cocción según el tipo de alimento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Versatilidad:</strong> Permiten cocinar carnes, pescados, verduras, panadería y repostería con resultados consistentes y de alta calidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Ahorro de Energía:</strong> Gracias a su sistema de optimización, reducen el consumo energético y minimizan el desperdicio de alimentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Facilidad de Uso:</strong> Equipados con pantallas táctiles intuitivas, programas preconfigurados y opciones de personalización para chefs y operadores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Autolimpieza:</strong> Incorporan programas de limpieza automática con productos específicos que garantizan la higiene y el mantenimiento del equipo.</span>
                </li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Innovación y Tecnología Inteligente */}
            <div id="tecnologia" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Innovación y Tecnología Inteligente
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Los hornos Rational se destacan por sus sistemas de cocción inteligente, que ajustan automáticamente la temperatura, humedad, velocidad del aire y tiempo de cocción según el tipo de alimento. Incorporan sensores que monitorean constantemente el proceso y realizan ajustes en tiempo real para garantizar resultados uniformes.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Principales Tecnologías:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>iCookingSuite:</strong> Aprende y se adapta al estilo de cocción, permitiendo cocinar diferentes alimentos simultáneamente sin afectar los sabores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>iDensityControl:</strong> Optimiza la circulación de aire y la distribución del calor, reduciendo tiempos de cocción y mejorando la eficiencia energética.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>iProductionManager:</strong> Organiza automáticamente los tiempos de cocción de varios platillos para que estén listos al mismo tiempo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>iCareSystem:</strong> Sistema de autolimpieza inteligente que detecta el nivel de suciedad y sugiere el programa de limpieza más adecuado.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas y Beneficios */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas y Beneficios
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Los hornos Rational ofrecen múltiples beneficios que los convierten en una inversión clave para cualquier cocina profesional.
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Versatilidad Total:</strong> Permiten cocinar carnes, pescados, verduras, pan, postres y hasta frituras con la misma eficiencia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Ahorro de Recursos:</strong> Reducen el consumo de energía, agua y materias primas gracias a su tecnología optimizada.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Calidad Consistente:</strong> Cada plato se cocina de manera uniforme, conservando el sabor, textura y nutrientes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Seguridad y Ergonomía:</strong> Diseñados para facilitar su uso con controles táctiles intuitivos y sistemas de seguridad avanzados.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Reducción de Costos Operativos:</strong> Al automatizar procesos, se minimiza la necesidad de supervisión constante y se mejora la productividad.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Modelos de Hornos Rational */}
            <div id="modelos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Modelos de Hornos Rational
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Rational ofrece diferentes modelos adaptados a las necesidades de cada cocina profesional:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>iCombi Pro:</strong> Modelo más avanzado con inteligencia artificial, múltiples sensores y conectividad para control remoto.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>iCombi Classic:</strong> Ideal para quienes buscan un horno eficiente con controles manuales intuitivos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>iVario Pro:</strong> Sustituye múltiples equipos de cocina, permitiendo hervir, freír y cocinar a presión en un solo dispositivo.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Aplicaciones y Usos */}
            <div id="aplicaciones" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Aplicaciones y Usos en la Industria Gastronómica
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Los hornos Rational son utilizados en:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍽</span>
                  <span><strong>Restaurantes y Bares:</strong> Permiten preparar grandes volúmenes de alimentos con rapidez y precisión.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏨</span>
                  <span><strong>Hoteles y Catering:</strong> Ideales para cocinas con alta demanda y necesidad de calidad constante.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏥</span>
                  <span><strong>Hospitales y Residencias:</strong> Garantizan dietas saludables y cocción sin grasas innecesarias.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🥖</span>
                  <span><strong>Panaderías y Pastelerías:</strong> Logran horneados perfectos con control exacto de temperatura y humedad.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tecnología de Vanguardia */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Horno Rational: Tecnología de Vanguardia para Cocinas Profesionales
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Los hornos Rational son equipos innovadores diseñados para satisfacer las necesidades de cocinas industriales y profesionales en restaurantes, hoteles, hospitales y otros sectores gastronómicos. Su avanzada tecnología combina precisión, eficiencia y versatilidad, permitiendo a los chefs optimizar los procesos de cocción y mejorar la calidad de los platillos.
                </p>
                
                <p>
                  Los hornos Rational representan una revolución en la cocina profesional, brindando eficiencia, calidad y ahorro en cada preparación.
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

export default HornoRational;
