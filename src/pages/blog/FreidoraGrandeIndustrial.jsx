import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import freidoraGrandeIndustrialImg from '../../assets/img/freidora grande industrial.webp';

const FreidoraGrandeIndustrial = () => {
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
                    Introducción a las Freidoras Grandes Industriales
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
                       const element = document.getElementById('ventajas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas de Usar una Freidora Grande Industrial
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
                    Usos en Diferentes Negocios
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
                    Características y Beneficios
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
                Freidora Grande Industrial
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características y Beneficios
              </p>
            </div>
            
            {/* Imagen de la freidora grande industrial */}
            <div className="flex justify-center mb-8">
              <img 
                src={freidoraGrandeIndustrialImg} 
                alt="Freidora grande industrial profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Freidoras Grandes Industriales
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las freidoras industriales grandes son equipos esenciales en cocinas profesionales, restaurantes, hoteles y negocios de comida rápida. Están diseñadas para soportar altos volúmenes de trabajo y garantizar una fritura uniforme y eficiente.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Estas freidoras están específicamente diseñadas para satisfacer las demandas de negocios con alto volumen de producción, ofreciendo capacidad, eficiencia y durabilidad en un solo equipo.
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
                  <span><strong>Capacidad:</strong> Varía entre 10 y 50 litros o más, permitiendo cocinar grandes cantidades de alimentos al mismo tiempo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Materiales:</strong> Fabricadas en acero inoxidable, lo que garantiza durabilidad, resistencia a la corrosión y fácil limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Sistemas de calentamiento:</strong> Pueden ser eléctricas o a gas, con quemadores potentes o resistencias de alto rendimiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Zonas frías:</strong> Algunas incluyen áreas donde se depositan residuos sin quemarse, prolongando la vida útil del aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Termostato regulable:</strong> Permite ajustar la temperatura entre 90°C y 200°C, asegurando una fritura precisa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Grifo de vaciado:</strong> Facilita la limpieza y el cambio de aceite de manera segura y rápida.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Cestas de acero:</strong> Resistentes al calor y diseñadas para un manejo eficiente de los alimentos.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas de usar una freidora grande industrial */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas de Usar una Freidora Grande Industrial
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las freidoras grandes industriales ofrecen múltiples beneficios para negocios con alta demanda:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Eficiencia y rapidez:</strong> Capaces de freír grandes volúmenes de papas fritas, pollo, empanadas y otros alimentos en minutos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Consistencia en la cocción:</strong> Gracias al control de temperatura, los alimentos quedan crujientes por fuera y jugosos por dentro.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Ahorro de aceite:</strong> La tecnología de zona fría y filtrado reduce el consumo de aceite y mejora su durabilidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Seguridad:</strong> Incluyen sistemas de apagado automático y protección contra sobrecalentamiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Fácil mantenimiento:</strong> Gracias a sus materiales y accesorios desmontables, su limpieza es rápida y sencilla.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Usos en diferentes negocios */}
            <div id="usos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Usos en Diferentes Negocios
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las freidoras grandes industriales son ideales para diversos tipos de negocios gastronómicos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">📌</span>
                  <span><strong>Restaurantes y comedores:</strong> Para la preparación de grandes cantidades de frituras con calidad uniforme.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">📌</span>
                  <span><strong>Fast food y food trucks:</strong> Perfectas para negocios de comida rápida con alta demanda.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">📌</span>
                  <span><strong>Pastelerías y panaderías:</strong> Ideales para freír donas, buñuelos y otros productos de repostería.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">📌</span>
                  <span><strong>Supermercados y buffets:</strong> Para ofrecer alimentos listos para consumir en grandes cantidades.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características y beneficios */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Freidora Grande Industrial: Características y Beneficios
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las freidoras industriales grandes son equipos esenciales en cocinas profesionales, restaurantes, hoteles y negocios de comida rápida. Están diseñadas para soportar altos volúmenes de trabajo y garantizar una fritura uniforme y eficiente.
                </p>
                
                <p className="mb-4">
                  Con capacidades que varían entre 10 y 50 litros o más, estas freidoras permiten cocinar grandes cantidades de alimentos al mismo tiempo, ofreciendo eficiencia, rapidez y consistencia en la cocción.
                </p>
                
                <p>
                  Su construcción en acero inoxidable, sistemas de calentamiento potentes, termostatos regulables y características de seguridad las convierten en la opción ideal para negocios que requieren alta producción de alimentos fritos con calidad profesional.
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

export default FreidoraGrandeIndustrial;
