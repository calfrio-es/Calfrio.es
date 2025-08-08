import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import planchasDeAsarDeGasImg from '../../assets/img/planchasdeasardegas.jpg';

const PlanchasDeAsarDeGas = () => {
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
                    Introducción a las Planchas de Asar de Gas
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
                    Tipos de Planchas de Asar de Gas
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
                    Beneficios de Utilizar una Plancha de Gas
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
                    Uso y Aplicaciones
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
                    Mantenimiento y Limpieza
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
                    Información Ampliada
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
                Planchas de Asar de Gas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Información Ampliada
              </p>
            </div>
            
            {/* Imagen de las planchas de asar de gas */}
            <div className="flex justify-center mb-8">
              <img 
                src={planchasDeAsarDeGasImg} 
                alt="Planchas de asar de gas profesionales" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Planchas de Asar de Gas
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las planchas de asar de gas son herramientas fundamentales en la cocina profesional y doméstica, utilizadas para preparar alimentos de forma eficiente y con gran sabor. Son esenciales en restaurantes, bares, hoteles y food trucks debido a su potencia, rapidez y facilidad de uso.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Las planchas de asar de gas son equipos de cocina profesionales y domésticos diseñados para cocinar una variedad de alimentos de manera rápida y eficiente. Funcionan con gas natural o butano y ofrecen una distribución uniforme del calor, lo que permite una cocción homogénea en toda la superficie.
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
                  <span><strong>Materiales de fabricación:</strong> Las planchas pueden estar hechas de acero inoxidable, acero laminado, hierro fundido o cromo duro, cada uno con diferentes ventajas en cuanto a durabilidad, retención de calor y facilidad de limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Superficie de cocción:</strong> Algunas planchas incluyen superficies lisas, estriadas o mixtas para adaptarse a distintos tipos de alimentos, como carnes, verduras o pescados.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Regulación de temperatura:</strong> Incorporan mandos de control para ajustar la temperatura con precisión y lograr diferentes puntos de cocción.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Encendido y seguridad:</strong> Cuentan con sistemas de encendido piezoeléctrico o manual y dispositivos de seguridad que cortan el gas en caso de apagado accidental de la llama.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Tamaño y capacidad:</strong> Existen modelos compactos para pequeñas cocinas y versiones más grandes para negocios de hostelería y restauración.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos de planchas de asar de gas */}
            <div id="tipos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Planchas de Asar de Gas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Existen distintos tipos de planchas según su material de fabricación y diseño:
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Según el Material de la Superficie de Cocción:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Hierro fundido:</strong> Excelente retención de calor y durabilidad, ideal para un uso intensivo en restaurantes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Acero inoxidable:</strong> Más ligero y fácil de limpiar, resistente a la corrosión y recomendado para alimentos delicados.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Acero laminado:</strong> Buena transmisión de calor y precio accesible, pero requiere más mantenimiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Cromo duro:</strong> Reduce la adherencia de los alimentos, facilita la limpieza y ofrece una gran durabilidad, aunque su costo es más elevado.</span>
                </li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">Según el Tipo de Superficie de Cocción:</h3>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Planchas lisas:</strong> Perfectas para cocinar alimentos como pescados, verduras y huevos, garantizando una cocción uniforme.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Planchas estriadas:</strong> Aportan un acabado marcado similar a una parrilla, ideal para carnes y bocadillos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍳</span>
                  <span><strong>Planchas mixtas:</strong> Combinan secciones lisas y estriadas, ofreciendo versatilidad en la preparación de distintos platos.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características clave */}
            <div id="caracteristicas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Características Clave de las Planchas de Gas
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Distribución uniforme del calor:</strong> La combustión del gas genera una temperatura constante en toda la superficie de cocción.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Encendido rápido y eficiente:</strong> Con sistema piezoeléctrico o manual, según el modelo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Termostato regulable:</strong> Permite ajustar la temperatura para diferentes tipos de alimentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Bandeja recogegrasa:</strong> Facilita la limpieza al recolectar los residuos de aceite y restos de comida.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Compatibilidad con gas butano, propano o natural:</strong> Adaptadas a distintas fuentes de combustible según las necesidades del usuario.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios de utilizar una plancha de gas */}
            <div id="beneficios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Beneficios de Utilizar una Plancha de Asar de Gas
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas de asar de gas aportan múltiples ventajas tanto en el hogar como en negocios gastronómicos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Calentamiento rápido:</strong> Alcanzan altas temperaturas en pocos minutos, lo que permite una cocción eficiente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Mayor potencia:</strong> En comparación con las planchas eléctricas, las de gas suelen ofrecer mayor capacidad térmica.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Versatilidad:</strong> Aptas para cocinar carnes, pescados, mariscos, verduras y más, conservando los jugos y potenciando el sabor de los alimentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Eficiencia energética:</strong> Su uso de gas puede ser más económico en el largo plazo en comparación con la electricidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Mantenimiento sencillo:</strong> Modelos de acero inoxidable y cromo duro son fáciles de limpiar y mantener.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Durabilidad:</strong> Diseñadas para soportar uso intensivo en cocinas profesionales.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Uso y aplicaciones */}
            <div id="usos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Uso y Aplicaciones
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las planchas de asar de gas son ampliamente utilizadas en distintos entornos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🍽</span>
                  <span><strong>Restaurantes y bares:</strong> Para preparar bocadillos, carnes y desayunos de manera rápida y eficiente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🚚</span>
                  <span><strong>Food trucks:</strong> Por su versatilidad y capacidad de cocinar varios alimentos simultáneamente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏨</span>
                  <span><strong>Hoteles y comedores industriales:</strong> En cocinas de alto volumen donde se necesita eficiencia y rapidez.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">🏡</span>
                  <span><strong>Uso doméstico:</strong> Cada vez más personas incorporan planchas de gas en sus hogares para una cocción saludable y sin exceso de grasa.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento y limpieza */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos de Mantenimiento y Limpieza
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para prolongar la vida útil de la plancha, es importante:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Limpiar la superficie después de cada uso con una espátula y un paño húmedo.</li>
                <li>Evitar productos químicos agresivos en superficies de cromo duro o acero inoxidable.</li>
                <li>Realizar revisiones periódicas de los quemadores para evitar acumulación de grasa.</li>
                <li>Vaciar y limpiar la bandeja recogegrasa regularmente.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Información ampliada */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Planchas de Asar de Gas: Información Ampliada
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las planchas de asar de gas son herramientas fundamentales en la cocina profesional y doméstica, utilizadas para preparar alimentos de forma eficiente y con gran sabor. Son esenciales en restaurantes, bares, hoteles y food trucks debido a su potencia, rapidez y facilidad de uso.
                </p>
                
                <p className="mb-4">
                  Las planchas de asar de gas son ampliamente utilizadas en restaurantes, bares, hoteles, food trucks y también en hogares donde se busca una opción potente y rápida para cocinar. Son ideales para la preparación de hamburguesas, bocadillos, filetes, tortillas y muchos otros platos que requieren una cocción a la plancha.
                </p>
                
                <p>
                  Las planchas de asar de gas son una excelente inversión para cualquier cocina que busque potencia, eficiencia y calidad en la cocción. Si necesitas ayuda para elegir un modelo específico, dime qué características buscas y te ayudaré a encontrar la mejor opción.
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

export default PlanchasDeAsarDeGas;
