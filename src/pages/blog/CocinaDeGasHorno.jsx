import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import cocinaDeGasHornoImg from '../../assets/img/cocinadegasconhorno.jpg';

const CocinaDeGasHorno = () => {
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
                       const element = document.getElementById('ventajas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas de una Cocina de Gas con Horno
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
                       const element = document.getElementById('elegir');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Cuál es la Mejor Cocina de Gas con Horno?
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
                    ¡Elige una Cocina de Gas con Horno!
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
                Cocina de Gas con Horno
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eficiencia y Versatilidad en tu Cocina
              </p>
            </div>
            
            {/* Imagen de la cocina de gas con horno */}
            <div className="flex justify-center mb-8">
              <img 
                src={cocinaDeGasHornoImg} 
                alt="Cocina de gas con horno profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="ventajas" className="text-2xl font-bold text-gray-800 mb-4">
              Ventajas de una Cocina de Gas con Horno
            </h1>
            
            {/* Descripción con ventajas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                La cocina de gas con horno es una opción preferida tanto en hogares como en negocios de hostelería debido a su eficiencia energética, rapidez y control preciso de temperatura. Este tipo de cocina es ideal para preparar una gran variedad de platillos, desde guisos hasta repostería, garantizando resultados profesionales.
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Mayor control de la temperatura:</strong> El fuego directo permite regular la intensidad de cocción de manera inmediata.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Ahorro energético:</strong> Funciona con gas, lo que resulta más económico en comparación con modelos eléctricos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Cocción uniforme en el horno:</strong> Ideal para panadería y repostería, asegurando un dorado perfecto.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Durabilidad y resistencia:</strong> Fabricadas en materiales robustos como acero inoxidable, son ideales para un uso frecuente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Compatible con cualquier tipo de utensilios:</strong> No requiere recipientes específicos como algunas cocinas de inducción.</span>
                </li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Mantenimiento y limpieza */}
            <div id="mantenimiento" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Limpieza de tu Cocina de Gas con Horno
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para garantizar el correcto funcionamiento y prolongar la vida útil de tu cocina de gas con horno, sigue estos consejos:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Limpia los quemadores regularmente para evitar obstrucciones y asegurar una llama uniforme.</li>
                <li>Verifica el estado de las mangueras y conexiones de gas para evitar fugas.</li>
                <li>Usa productos desengrasantes adecuados para limpiar la superficie sin dañar el material.</li>
                <li>Evita acumulación de residuos en el horno, limpiándolo con una mezcla de bicarbonato y vinagre tras cada uso.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cuál es la mejor cocina de gas con horno */}
            <div id="elegir" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Cuál es la Mejor Cocina de Gas con Horno para Ti?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Dependiendo de tus necesidades, puedes encontrar modelos con diferentes características:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Cocinas de gas con horno convencionales:</strong> Perfectas para el uso doméstico diario.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Cocinas industriales de gas con horno:</strong> Diseñadas para restaurantes y panaderías con mayor capacidad y potencia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Cocinas de gas con horno de convección:</strong> Distribuyen el calor de manera homogénea para una cocción más eficiente.</span>
                </li>
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

            {/* Servicio técnico para cocinas de gas con horno */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Encuentra el Mejor Servicio Técnico para tu Cocina de Gas con Horno
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si tu equipo presenta fallos, es importante contar con un servicio técnico especializado. Empresas como Garland Servicio Técnico o General Electric Servicio Técnico pueden ayudarte con mantenimiento y reparaciones.
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

            {/* Elige una cocina de gas con horno */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Elige una Cocina de Gas con Horno y Disfruta de una Cocina Eficiente!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Invertir en una cocina de gas con horno es sinónimo de ahorro, practicidad y versatilidad. Ya sea para el hogar o para un negocio de hostelería, este tipo de cocina garantiza resultados óptimos en cada preparación.
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

export default CocinaDeGasHorno;
