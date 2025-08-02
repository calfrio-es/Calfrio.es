import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import hornoDeGasImg from '../../assets/img/elhornodegas.jpg';

const HornoDeGas = () => {
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
        {/* Columna izquierda - muy delgada */}
        <div className="w-1/6 border-r-2 border-black">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Índice
            </h2>
            
            <nav className="space-y-2">
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="#funcionamiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Funcionamiento del Horno de Gas
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#ventajas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas del Horno de Gas
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Cuidados y Mantenimiento
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#conclusion" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Conclusión
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Columna central - más grande */}
        <div className="w-4/6 border-r-2 border-black">
          <div className="p-6">
            {/* Fecha en la esquina superior izquierda */}
            <div className="text-sm text-gray-600 mb-6">
              {fechaActual}
            </div>
            
            {/* Título grande centrado */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                El Horno de Gas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Funcionamiento y Beneficios
              </p>
            </div>
            
            {/* Imagen del horno de gas */}
            <div className="flex justify-center mb-8">
              <img 
                src={hornoDeGasImg} 
                alt="Horno de gas moderno" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                El horno de gas es un electrodoméstico esencial en muchas cocinas alrededor del mundo. Su funcionamiento se basa en la combustión de gas natural o propano para generar calor, permitiendo la cocción eficiente de diferentes tipos de alimentos. A diferencia de los hornos eléctricos, el horno de gas ofrece un calentamiento más rápido y un consumo energético más económico, lo que lo convierte en una opción ideal para quienes buscan eficiencia y rendimiento.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Funcionamiento del Horno de Gas */}
            <div id="funcionamiento" className="space-y-4 pb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Funcionamiento del Horno de Gas
              </h1>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  El horno de gas opera mediante un quemador que se encuentra en la parte inferior, el cual se enciende con un sistema de chispa o piloto. Al encenderse, el gas se distribuye uniformemente, proporcionando un calor constante. Algunos modelos incluyen un termostato que regula automáticamente la temperatura, garantizando una cocción homogénea de los alimentos.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas del Horno de Gas */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas del Horno de Gas
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Ahorro energético:</strong> Dado que el gas suele ser más económico que la electricidad, el horno de gas representa una alternativa más rentable a largo plazo.</li>
                <li><strong>Cocción uniforme:</strong> La distribución del calor permite que los alimentos se cocinen de manera equilibrada, evitando que queden crudos o demasiado cocidos en ciertas partes.</li>
                <li><strong>Mayor humedad:</strong> A diferencia de los hornos eléctricos, el horno de gas mantiene la humedad en el interior, lo que resulta ideal para la preparación de panes y repostería.</li>
                <li><strong>Encendido rápido:</strong> Su tiempo de calentamiento es menor en comparación con otros tipos de hornos, permitiendo una cocción más eficiente.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cuidados y Mantenimiento */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cuidados y Mantenimiento
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Para garantizar el buen funcionamiento del horno de gas, es importante realizar un mantenimiento periódico. Esto incluye la limpieza de los quemadores, la verificación de las conexiones de gas y la inspección de la llama para asegurar que sea azul y estable. Si la llama es amarilla o irregular, podría indicar un problema en la combustión que requiere atención técnica.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Conclusión */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Conclusión
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  En conclusión, el horno de gas es una herramienta indispensable en la cocina que combina eficiencia, ahorro energético y calidad en la cocción. Su adecuado mantenimiento garantizará su durabilidad y óptimo desempeño en la preparación de deliciosos platillos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - un poco más grande */}
        <div className="w-2/6">
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

            {/* Sección 4: Cocina de Gas Butano */}
            <div className="mb-8 relative">
              <Link to="/blog/cocina-gas-butano" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Cocina de Gas Butano
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

export default HornoDeGas;
