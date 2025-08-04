import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import lavavajillasSmegImg from '../../assets/img/lavavajillasmeg.jpg';

const LavavajillasSmeg = () => {
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
                  <Link to="#ventajas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas de un Lavavajillas SMEG
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Mantenimiento del Lavavajillas SMEG
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#elegir" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Por qué elegir un Lavavajillas SMEG?
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#conclusion" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Solución de Lavado Potente
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
                Lavavajillas SMEG
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovación y Eficiencia para tu Cocina
              </p>
            </div>
            
            {/* Imagen del lavavajillas SMEG */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavajillasSmegImg} 
                alt="Lavavajillas SMEG elegante y moderno" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                El lavavajillas SMEG es una opción ideal para quienes buscan eficiencia, diseño y tecnología avanzada en la limpieza de su vajilla. Con una combinación de funcionalidad y estética, estos electrodomésticos destacan en cocinas domésticas y profesionales.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="ventajas" className="text-2xl font-bold text-gray-800 mb-4">
              Ventajas de un Lavavajillas SMEG
            </h1>
            
            {/* Ventajas */}
            <div className="space-y-4 mb-8">
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Diseño elegante y moderno:</strong> Se integra perfectamente en cualquier tipo de cocina.</li>
                <li><strong>Tecnología de bajo consumo:</strong> Reduce el uso de agua y electricidad, siendo una opción ecológica.</li>
                <li><strong>Diferentes programas de lavado:</strong> Adaptados a diversos niveles de suciedad, desde lavados rápidos hasta ciclos intensivos.</li>
                <li><strong>Capacidad y flexibilidad:</strong> Modelos con diferentes tamaños y cestas ajustables para acomodar todo tipo de utensilios.</li>
                <li><strong>Funcionamiento silencioso:</strong> Ideal para hogares y negocios que necesitan un ambiente tranquilo.</li>
              </ol>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Mantenimiento del lavavajillas SMEG */}
            <div id="mantenimiento" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento del Lavavajillas SMEG
              </h2>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Limpieza periódica:</strong> Retirar residuos de comida y limpiar los filtros para evitar obstrucciones.</li>
                <li><strong>Uso de detergentes adecuados:</strong> SMEG recomienda el uso de productos específicos para prolongar la vida útil del electrodoméstico.</li>
                <li><strong>Revisión de brazos rociadores:</strong> Asegurar que no estén bloqueados para un lavado eficiente.</li>
                <li><strong>Descalcificación regular:</strong> Especialmente en zonas con agua dura para evitar acumulaciones de cal.</li>
              </ol>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* ¿Por qué elegir un Lavavajillas SMEG? */}
            <div id="elegir" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por qué elegir un Lavavajillas SMEG?
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Los lavavajillas SMEG combinan innovación con facilidad de uso, ofreciendo resultados impecables en cada lavado. Son perfectos tanto para cocinas modernas como para negocios de hostelería que buscan calidad y eficiencia.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Conclusión */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Solución de Lavado Potente y Sofisticada
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Si buscas una solución de lavado potente y con un diseño sofisticado, un lavavajillas SMEG es una excelente elección.
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

            {/* Sección 1: Lavavajillas Industriales */}
            <div className="mb-8 relative">
              <Link to="/blog/lavavajillas-industriales" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Lavavajillas Industriales
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 2: Hornos para Pizza */}
            <div className="mb-8 relative">
              <Link to="/blog/horno-pizza" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Los Hornos para Pizza
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 3: Fogones de Gas */}
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

            {/* Sección 4: Cocinas de Gas */}
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
          </div>
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default LavavajillasSmeg;
