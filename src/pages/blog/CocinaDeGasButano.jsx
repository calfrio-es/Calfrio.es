import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import cocinaDeGasButanoImg from '../../assets/img/cocinadegasbutano.jpg';

const CocinaDeGasButano = () => {
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
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Cómo Mantener tu Cocina de Gas Butano
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#problemas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Solución a Problemas Frecuentes
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#servicios" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Servicio Técnico Especializado
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#conclusion" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Asegura el Buen Funcionamiento
                  </Link>
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
                Cocina de Gas Butano
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mantenimiento y Consejos para un Uso Seguro
              </p>
            </div>
            
            {/* Imagen de la cocina de gas butano */}
            <div className="flex justify-center mb-8">
              <img 
                src={cocinaDeGasButanoImg} 
                alt="Cocina de gas butano" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                La cocina de gas butano es una opción eficiente y económica para el hogar, proporcionando una cocción rápida y uniforme. Para garantizar su correcto funcionamiento y evitar problemas, es fundamental realizar un mantenimiento adecuado.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Cómo Mantener tu Cocina de Gas Butano en Buen Estado */}
            <div id="mantenimiento" className="space-y-4 pb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Cómo Mantener tu Cocina de Gas Butano en Buen Estado
              </h1>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Limpieza después de cada uso:</strong> Usa un paño húmedo con detergente suave para eliminar grasa y residuos de comida.</li>
                  <li><strong>Revisión de quemadores:</strong> Si notas que la llama es amarilla o irregular, limpia los orificios de los quemadores con un alfiler.</li>
                  <li><strong>Verificación de conexiones:</strong> Asegúrate de que la manguera de gas está en buen estado y bien conectada.</li>
                  <li><strong>Ubicación segura:</strong> Coloca la bombona de butano en un lugar ventilado y alejado de fuentes de calor.</li>
                  <li><strong>Revisión profesional:</strong> Un técnico especializado puede detectar posibles fugas o problemas en el regulador de presión.</li>
                </ol>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solución a Problemas Frecuentes */}
            <div id="problemas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Solución a Problemas Frecuentes
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si tu frigorífico Whirlpool No Frost no enfría, verifica la temperatura y la ventilación. También pueden presentarse fallos en modelos como:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Frigoríficos Candy:</strong> problemas con el termostato.</li>
                  <li><strong>Frigoríficos Daewoo:</strong> problemas en la circulación de aire.</li>
                  <li><strong>Frigoríficos Electrolux:</strong> problemas por acumulación de hielo en el evaporador.</li>
                  <li><strong>Frigoríficos Fagor No Frost:</strong> problemas que requieren una limpieza en el condensador.</li>
                </ul>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicio Técnico Especializado */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Técnico Especializado
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si tu cocina presenta fallos graves, contacta con especialistas en:
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

            {/* Conclusión */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Asegura el Buen Funcionamiento de tu Cocina de Gas Butano!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Un mantenimiento adecuado no solo prolonga la vida útil de tu cocina de gas butano, sino que también garantiza tu seguridad. No esperes a que surjan problemas, mantén tu equipo en las mejores condiciones y cocina con tranquilidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - un poco más grande - oculta en móviles */}
        <div className="hidden lg:block w-2/6">
          <div className="p-6">
            {/* Mini título */}
            <h3 className="text-sm text-gray-500 mb-6">
              También te puede interesar
            </h3>

            {/* Sección 1: Hornos para Pizza */}
            <div className="mb-8 relative">
              <Link to="/blog/horno-pizza" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Hornos para Pizza
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 2: Fogones de Gas */}
            <div className="mb-8 relative">
              <Link to="/blog/fogones-gas" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Los Fogones de Gas
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 3: Cocinas de Gas */}
            <div className="mb-8 relative">
              <Link to="/blog/cocinas-gas" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Cocinas de Gas Profesionales
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 4: Equipamiento */}
            <div className="mb-8 relative">
              <Link to="/blog/horno-gas" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  El Horno de Gas
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default CocinaDeGasButano;
