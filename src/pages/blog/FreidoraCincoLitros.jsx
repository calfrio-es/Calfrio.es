import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import freidoraCincoLitrosImg from '../../assets/img/freidoraindustrial5litros.webp';

const FreidoraCincoLitros = () => {
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
                    Introducción a las Freidoras Industriales de 5 Litros
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
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
                       const element = document.getElementById('usos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Usos Principales
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
                    Ventajas de una Freidora Industrial de 5 Litros
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
                    Características, Usos y Ventajas
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
                Freidora Industrial de 5 Litros
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características, Usos y Ventajas
              </p>
            </div>
            
            {/* Imagen de la freidora industrial de 5 litros */}
            <div className="flex justify-center mb-8">
              <img 
                src={freidoraCincoLitrosImg} 
                alt="Freidora industrial de 5 litros profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Freidoras Industriales de 5 Litros
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las freidoras industriales de 5 litros son equipos esenciales en cocinas profesionales, especialmente en pequeños restaurantes, cafeterías, food trucks y negocios de comida rápida. Su tamaño compacto, combinado con su alta eficiencia, permite preparar frituras de calidad con rapidez y sin desperdiciar aceite.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Estos equipos están diseñados para satisfacer las necesidades de negocios que requieren una solución práctica y eficiente para la preparación de alimentos fritos.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Características principales */}
            <div id="caracteristicas" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Características Principales
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Capacidad y Tamaño:</strong> Con un tanque de 5 litros, estas freidoras son ideales para negocios con una demanda media de frituras. Su tamaño permite freír porciones considerables sin ocupar demasiado espacio en la cocina.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Material de Fabricación:</strong> Generalmente construidas en acero inoxidable, lo que garantiza durabilidad, resistencia a la corrosión y fácil limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Control de Temperatura:</strong> Equipadas con termostatos ajustables que permiten seleccionar la temperatura ideal (normalmente entre 50 °C y 200 °C), asegurando una cocción precisa para diferentes tipos de alimentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Sistema de Seguridad:</strong> Incluyen sistemas de protección contra sobrecalentamiento, asas frías al tacto y patas antideslizantes para mayor estabilidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Drenaje de Aceite:</strong> Algunos modelos cuentan con una válvula de drenaje para facilitar el vaciado y la limpieza del aceite.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Usos principales */}
            <div id="usos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Usos Principales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las freidoras industriales de 5 litros son versátiles y se adaptan a diferentes tipos de negocios:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Restaurantes y bares:</strong> Perfectas para preparar papas fritas, aros de cebolla, nuggets, empanadas, croquetas y otros aperitivos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Comida rápida y food trucks:</strong> Su rapidez y tamaño las hacen ideales para negocios móviles que necesitan cocinar alimentos fritos en poco tiempo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Catering y eventos:</strong> Útiles en servicios de catering donde se requiere freír grandes cantidades sin perder calidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Hogar (uso semi-profesional):</strong> También pueden ser utilizadas en cocinas domésticas por personas que buscan resultados profesionales en sus preparaciones.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas de una freidora industrial de 5 litros */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas de una Freidora Industrial de 5 Litros
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Este tipo de freidora ofrece múltiples beneficios para negocios del sector:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Ahorro de tiempo y energía:</strong> Su rápida capacidad de calentamiento reduce los tiempos de espera.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Cocción uniforme:</strong> Mantiene temperaturas constantes, garantizando que los alimentos se frían de manera homogénea.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Menos consumo de aceite:</strong> Su diseño optimiza el uso del aceite, reduciendo desperdicios y costos operativos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Fácil mantenimiento:</strong> El acero inoxidable y los componentes desmontables facilitan la limpieza después del uso.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características, usos y ventajas */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Freidora Industrial de 5 Litros: Características, Usos y Ventajas
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las freidoras industriales de 5 litros son equipos esenciales en cocinas profesionales, especialmente en pequeños restaurantes, cafeterías, food trucks y negocios de comida rápida. Su tamaño compacto, combinado con su alta eficiencia, permite preparar frituras de calidad con rapidez y sin desperdiciar aceite.
                </p>
                
                <p className="mb-4">
                  Con su capacidad de 5 litros, estas freidoras son ideales para negocios con una demanda media de frituras, ofreciendo un tamaño que permite freír porciones considerables sin ocupar demasiado espacio en la cocina.
                </p>
                
                <p>
                  Este tipo de freidora es una opción eficiente para aquellos negocios que necesitan una solución práctica, versátil y duradera en la cocina, ofreciendo características de seguridad, control de temperatura preciso y fácil mantenimiento.
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

export default FreidoraCincoLitros;
