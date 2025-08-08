import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import planchasElectricasImg from '../../assets/img/planchaselectricas.jpg';

const PlanchasElectricas = () => {
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
                    Introducción a las Planchas Eléctricas
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
                    Tipos de Planchas Eléctricas
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('materiales');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Materiales de Fabricación
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
                    Beneficios de Utilizar una Plancha Eléctrica
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
                    Usos Más Comunes
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
                    Todo lo que Necesitas Saber
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
                Planchas Eléctricas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todo lo que Necesitas Saber
              </p>
            </div>
            
            {/* Imagen de las planchas eléctricas */}
            <div className="flex justify-center mb-8">
              <img 
                src={planchasElectricasImg} 
                alt="Planchas eléctricas profesionales" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Planchas Eléctricas
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las planchas eléctricas son herramientas esenciales en la cocina moderna, utilizadas tanto en el hogar como en la industria gastronómica por su capacidad de cocinar de manera uniforme y eficiente. Son una alternativa práctica a las parrillas y sartenes tradicionales, proporcionando un calentamiento rápido y una distribución homogénea del calor.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Las planchas eléctricas son equipos de cocina versátiles y eficientes que permiten cocinar una gran variedad de alimentos de manera rápida y uniforme. Se utilizan tanto en hogares como en cocinas profesionales, especialmente en el sector de la hostelería, donde se requieren altas prestaciones y durabilidad.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Características principales */}
            <div id="caracteristicas" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Características Principales de las Planchas Eléctricas
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Materiales de fabricación:</strong> Generalmente están hechas de acero inoxidable, hierro fundido o cromo, lo que garantiza resistencia y facilidad de limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Superficie de cocción:</strong> Puede ser lisa, estriada o mixta, permitiendo diferentes tipos de cocción según el alimento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Control de temperatura:</strong> Cuentan con termostatos ajustables que permiten regular la temperatura con precisión, ofreciendo un control total sobre la cocción.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Rapidez y eficiencia:</strong> Se calientan rápidamente y distribuyen el calor de manera uniforme, lo que evita puntos fríos y asegura una cocción homogénea.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Fácil mantenimiento:</strong> Algunas incluyen bandejas recogegrasas desmontables para una limpieza más sencilla.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos de planchas eléctricas */}
            <div id="tipos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Planchas Eléctricas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Existen varios tipos de planchas eléctricas, cada una con características específicas según el uso:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas eléctricas domésticas:</strong> Más compactas y diseñadas para uso en el hogar. Ideales para preparar desayunos, carnes y verduras.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas eléctricas profesionales:</strong> Fabricadas con materiales de alta resistencia, utilizadas en restaurantes, bares y hoteles. Suelen tener mayor potencia y tamaño.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas con superficie lisa:</strong> Perfectas para cocinar alimentos como huevos, panqueques o tortillas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas con superficie estriada:</strong> Crean marcas en los alimentos, aportando un aspecto similar al de una parrilla. Ideales para carnes y sándwiches.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Planchas mixtas:</strong> Combinan zonas lisas y estriadas para mayor versatilidad.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Materiales de fabricación */}
            <div id="materiales" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Materiales de Fabricación
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Los materiales de una plancha eléctrica influyen en su durabilidad y eficiencia. Algunos de los más comunes son:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Acero inoxidable:</strong> Resistente, duradero y fácil de limpiar, ideal para uso profesional.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Hierro fundido:</strong> Retiene muy bien el calor y proporciona una cocción uniforme, aunque requiere un mayor mantenimiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Cromo duro:</strong> Reduce la adherencia de los alimentos y facilita la limpieza, siendo común en cocinas industriales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Aluminio con antiadherente:</strong> Ligero y fácil de usar, pero menos resistente en comparación con otros materiales.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características principales */}
            <div id="caracteristicas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Características Principales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas eléctricas ofrecen distintas funciones que facilitan la cocina:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Termostato regulable:</strong> Permite ajustar la temperatura con precisión según el tipo de alimento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Calentamiento rápido:</strong> Se calientan en pocos minutos, ahorrando tiempo en la preparación de los alimentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Bandeja recogegrasas:</strong> Facilita la limpieza y evita la acumulación de residuos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Superficie antiadherente:</strong> Evita que los alimentos se peguen y reduce el uso de aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Eficiencia energética:</strong> Consumen menos electricidad en comparación con otros electrodomésticos de cocina.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios de utilizar una plancha eléctrica */}
            <div id="beneficios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Beneficios de Utilizar una Plancha Eléctrica
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas eléctricas aportan múltiples ventajas tanto en el hogar como en negocios gastronómicos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Saludable:</strong> Permiten cocinar con menos grasa, favoreciendo una alimentación más saludable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Fácil de limpiar:</strong> Muchos modelos incluyen superficies antiadherentes y bandejas desmontables.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Versatilidad:</strong> Se pueden preparar desde carnes y mariscos hasta verduras, tortillas y panqueques.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Seguridad:</strong> Al no usar gas, reducen el riesgo de fugas o incendios en la cocina.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Ahorro de tiempo:</strong> Se calientan rápidamente y mantienen una temperatura constante.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Usos más comunes */}
            <div id="usos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Usos Más Comunes
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas eléctricas son ampliamente utilizadas en distintos entornos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍽</span>
                  <span><strong>En restaurantes y bares:</strong> Para cocinar hamburguesas, filetes, tortillas y otros platos con rapidez.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🚚</span>
                  <span><strong>En food trucks:</strong> Son compactas y eficientes, ideales para negocios de comida móvil.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏡</span>
                  <span><strong>En el hogar:</strong> Permiten preparar comidas rápidas y saludables sin necesidad de usar una estufa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏕</span>
                  <span><strong>En camping:</strong> Existen modelos portátiles ideales para cocinar al aire libre con acceso a electricidad.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Todo lo que necesitas saber */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Planchas Eléctricas: Todo lo que Necesitas Saber
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las planchas eléctricas son herramientas esenciales en la cocina moderna, utilizadas tanto en el hogar como en la industria gastronómica por su capacidad de cocinar de manera uniforme y eficiente. Son una alternativa práctica a las parrillas y sartenes tradicionales, proporcionando un calentamiento rápido y una distribución homogénea del calor.
                </p>
                
                <p className="mb-4">
                  Si buscas una plancha eléctrica, es recomendable elegir un modelo con buena potencia y materiales de alta calidad para garantizar una mayor durabilidad y eficiencia.
                </p>
                
                <p>
                  En restaurantes y bares se utilizan para preparar desayunos, hamburguesas, bocadillos, y platos a la plancha en poco tiempo. En food trucks y ferias son ideales para cocinas móviles gracias a su facilidad de instalación. En el hogar permiten cocinar de manera saludable y rápida sin necesidad de una estufa tradicional.
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

export default PlanchasElectricas;
