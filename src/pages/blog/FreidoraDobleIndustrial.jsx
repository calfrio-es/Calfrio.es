import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import freidoraDobleIndustrialImg from '../../assets/img/freidoradobleindustrial.jpg';

const FreidoraDobleIndustrial = () => {
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
                    Introducción a las Freidoras Dobles Industriales
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
                       const element = document.getElementById('tipos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Tipos de Freidoras Dobles Industriales
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
                    Ventajas de una Freidora Doble Industrial
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
                    Consejos para el Uso y Mantenimiento
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('negocios');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Para Qué Negocios es Ideal?
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
                    Características, Beneficios y Usos
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
                Freidora Doble Industrial
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características, Beneficios y Usos
              </p>
            </div>
            
            {/* Imagen de la freidora doble industrial */}
            <div className="flex justify-center mb-8">
              <img 
                src={freidoraDobleIndustrialImg} 
                alt="Freidora doble industrial profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Freidoras Dobles Industriales
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las freidoras dobles industriales son equipos esenciales en cocinas profesionales, diseñadas para optimizar el proceso de fritura y garantizar una alta producción en poco tiempo. Estas freidoras cuentan con dos depósitos independientes, lo que permite cocinar distintos alimentos de manera simultánea sin mezclar sabores ni tiempos de cocción.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Una freidora doble industrial es un equipo esencial en cocinas de alto rendimiento, diseñado para la preparación simultánea de grandes volúmenes de alimentos fritos. Estas freidoras cuentan con dos depósitos independientes, lo que permite cocinar diferentes productos sin mezclar sabores ni tiempos de cocción.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Son ampliamente utilizadas en restaurantes, hoteles, food trucks, comedores industriales y cualquier negocio de hostelería con gran demanda de alimentos fritos.
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
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Capacidad:</strong> Generalmente varía entre 8 y 20 litros por depósito, ideal para restaurantes, hoteles y establecimientos de comida rápida.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Material:</strong> Fabricadas en acero inoxidable para mayor resistencia y fácil limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Sistema de calentamiento:</strong> Pueden ser de gas o eléctricas, dependiendo de la necesidad del negocio.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Termostato ajustable:</strong> Permite controlar la temperatura con precisión para obtener frituras crujientes y doradas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Zonas frías:</strong> Ayudan a evitar que los residuos de alimentos se quemen, prolongando la vida útil del aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Grifos de drenaje:</strong> Facilitan el vaciado y la limpieza del aceite usado.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos de freidoras dobles industriales */}
            <div id="tipos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Freidoras Dobles Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Existen diferentes tipos de freidoras dobles industriales según el tipo de energía utilizada:
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Freidoras de Gas:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Funcionan con gas natural o GLP.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Calientan más rápido que las eléctricas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Requieren una instalación adecuada con ventilación y suministro de gas seguro.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Ideales para restaurantes con alto volumen de fritura.</span>
                </li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Freidoras Eléctricas:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span>Funcionan con resistencias eléctricas sumergidas en el aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span>Ofrecen mayor control de temperatura.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span>Son más eficientes en espacios cerrados, ya que no requieren ventilación especial.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span>Ideales para negocios pequeños o medianos.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características claves */}
            <div id="caracteristicas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Características Claves
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Capacidad:</strong> Varía entre 8 y 20 litros por tanque, permitiendo una producción masiva.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Material:</strong> Fabricadas en acero inoxidable, lo que les otorga resistencia a la corrosión y facilita la limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Termostato Ajustable:</strong> Control preciso de temperatura (entre 90°C y 200°C) para lograr frituras crujientes y homogéneas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Zonas Frías:</strong> Espacio en el fondo donde se acumulan residuos sin quemarse, prolongando la vida útil del aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Grifos de Drenaje:</strong> Facilitan el vaciado y limpieza del aceite usado.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Cestas de Acero Inoxidable:</strong> Permiten escurrir el exceso de aceite, evitando productos grasosos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Sistemas de Seguridad:</strong> Protección contra sobrecalentamiento y apagado automático en caso de emergencia.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas de una freidora doble industrial */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas de una Freidora Doble Industrial
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las freidoras dobles industriales ofrecen múltiples beneficios para negocios de hostelería:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Mayor Eficiencia y Productividad:</strong> Permite freír más alimentos en menos tiempo, optimizando el flujo de trabajo en la cocina.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Versatilidad:</strong> Puede usarse para preparar papas fritas, pollo, empanadas, churros, mariscos, croquetas, entre otros.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Ahorro de Aceite:</strong> Gracias a la zona fría, el aceite dura más tiempo limpio y sin sabores contaminados.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Mantenimiento Sencillo:</strong> Suelen incluir sistemas de drenaje y piezas desmontables para facilitar la limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Cocción Homogénea:</strong> Distribuye el calor de manera uniforme, asegurando un producto bien cocinado y crujiente.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Consejos para el uso y mantenimiento */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para el Uso y Mantenimiento
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para optimizar el rendimiento y prolongar la vida útil de tu freidora doble industrial:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔸</span>
                  <span><strong>Filtrar el Aceite Regularmente:</strong> Ayuda a eliminar residuos y extiende la vida útil del aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔸</span>
                  <span><strong>Limpiar la Freidora a Diario:</strong> Evita acumulaciones de grasa que pueden afectar el rendimiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔸</span>
                  <span><strong>No Sobrecargar la Cesta:</strong> Colocar demasiados alimentos a la vez reduce la temperatura del aceite y afecta la textura final.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔸</span>
                  <span><strong>Usar Aceite de Alta Calidad:</strong> Aceites vegetales con alto punto de humo son ideales para evitar sabores rancios.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🔸</span>
                  <span><strong>Revisar el Termostato Periódicamente:</strong> Asegurar que la temperatura sea precisa para evitar quemaduras o cocción desigual.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* ¿Para qué negocios es ideal? */}
            <div id="negocios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Para Qué Negocios es Ideal una Freidora Doble Industrial?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Este tipo de freidoras es ideal para preparar papas fritas, empanadas, pollo, mariscos y otros alimentos de manera eficiente y uniforme en:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🔹</span>
                  <span><strong>Restaurantes y Fast Food</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🔹</span>
                  <span><strong>Comedores Industriales</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🔹</span>
                  <span><strong>Hoteles y Buffets</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🔹</span>
                  <span><strong>Food Trucks y Ferias Gastronómicas</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🔹</span>
                  <span><strong>Pizzerías y Pollerías</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">🔹</span>
                  <span><strong>Pastelerías y Panaderías</strong></span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características, beneficios y usos */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Freidora Doble Industrial: Características, Beneficios y Usos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las freidoras dobles industriales son equipos esenciales en cocinas profesionales, diseñadas para optimizar el proceso de fritura y garantizar una alta producción en poco tiempo. Estas freidoras cuentan con dos depósitos independientes, lo que permite cocinar distintos alimentos de manera simultánea sin mezclar sabores ni tiempos de cocción.
                </p>
                
                <p className="mb-4">
                  Son ampliamente utilizadas en restaurantes, hoteles, food trucks, comedores industriales y cualquier negocio de hostelería con gran demanda de alimentos fritos.
                </p>
                
                <p>
                  Este tipo de freidoras es ideal para preparar papas fritas, empanadas, pollo, mariscos y otros alimentos de manera eficiente y uniforme, ofreciendo una excelente relación calidad-precio para negocios que requieren alta producción de alimentos fritos.
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

export default FreidoraDobleIndustrial;
