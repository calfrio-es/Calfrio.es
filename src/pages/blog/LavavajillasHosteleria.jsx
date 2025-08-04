import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import lavavajillasHosteleriaImg from '../../assets/img/lavavajillashosteleria.jpg';

const LavavajillasHosteleria = () => {
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
                    Ventajas de un Lavavajillas para Hostelería
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#tipos" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Tipos de Lavavajillas para Hostelería
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Consejos para el Mantenimiento
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#servicios" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Servicio Técnico
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#conclusion" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Optimiza la Higiene
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
                Lavavajillas para Cocina de Hostelería
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eficiencia y Limpieza Profesional
              </p>
            </div>
            
            {/* Imagen del lavavajillas para hostelería */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavajillasHosteleriaImg} 
                alt="Lavavajillas profesional para hostelería" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En la industria de la hostelería, la rapidez y la higiene son fundamentales. Contar con un lavavajillas para cocina de hostelería garantiza una limpieza eficaz de platos, vasos y utensilios, optimizando los tiempos y asegurando la satisfacción de los clientes.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="ventajas" className="text-2xl font-bold text-gray-800 mb-4">
              Ventajas de un Lavavajillas para Hostelería
            </h1>
            
            {/* Ventajas */}
            <div className="space-y-4 mb-8">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>✔ Ahorro de tiempo y esfuerzo:</strong> Un lavado rápido permite atender una gran demanda en restaurantes, bares y hoteles.</li>
                <li><strong>✔ Higiene garantizada:</strong> Funcionan a altas temperaturas eliminando bacterias y residuos de grasa.</li>
                <li><strong>✔ Consumo eficiente:</strong> Reducen el gasto de agua y detergente en comparación con el lavado manual.</li>
                <li><strong>✔ Diseño robusto y duradero:</strong> Fabricados en acero inoxidable para soportar un uso intensivo.</li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Tipos de lavavajillas para hostelería */}
            <div id="tipos" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Lavavajillas para Hostelería
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>🔹 Lavavajillas de cúpula:</strong> Ideales para restaurantes con alto volumen de vajilla.</li>
                <li><strong>🔹 Lavavajillas de arrastre:</strong> Perfectos para grandes cocinas industriales.</li>
                <li><strong>🔹 Lavavajillas bajo mostrador:</strong> Compactos y funcionales para bares y cafeterías.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Consejos para el mantenimiento */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para el Mantenimiento
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>👉 Limpieza diaria de los filtros</strong> para evitar obstrucciones.</li>
                <li><strong>👉 Uso de detergentes específicos</strong> para mayor durabilidad del equipo.</li>
                <li><strong>👉 Verificación de la presión del agua</strong> para garantizar un lavado óptimo.</li>
                <li><strong>👉 Revisión periódica por técnicos especializados</strong> para evitar fallos en el sistema.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicio técnico */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Técnico para Electrodomésticos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas asistencia técnica para electrodomésticos industriales o tienes problemas con tu refrigeración, revisa estos servicios:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>✔ Garland Servicio Técnico</li>
                  <li>✔ General Electric Servicio Técnico</li>
                  <li>✔ Go He Service Candy UM</li>
                  <li>✔ Go He Service Hoover UM</li>
                </ul>
                
                <p className="mt-4">
                  También, si notas que tu frigorífico Whirlpool No Frost no enfría o tienes problemas con frigoríficos Candy, Daewoo, Electrolux o Fagor, es recomendable contactar con un profesional.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Conclusión */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Optimiza la Higiene en tu Cocina de Hostelería!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Elige el mejor lavavajillas para cocina de hostelería y mejora la eficiencia de tu negocio. No pongas en riesgo la calidad del servicio, invierte en un equipo profesional que garantice vajilla impecable y seguridad alimentaria. ¡Haz la mejor elección hoy mismo! 🚀
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

            {/* Sección 2: Lavavajillas SMEG */}
            <div className="mb-8 relative">
              <Link to="/blog/lavavajillas-smeg" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Lavavajillas SMEG
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 3: Hornos para Pizza */}
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

            {/* Sección 4: Fogones de Gas */}
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
          </div>
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default LavavajillasHosteleria;
