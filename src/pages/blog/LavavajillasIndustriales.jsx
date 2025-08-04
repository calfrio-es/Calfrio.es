import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import lavavajillasIndustrialesImg from '../../assets/img/lavavajillasindustriales.jpg';

const LavavajillasIndustriales = () => {
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
                  <Link to="#beneficios" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Beneficios de los Lavavajillas Industriales
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#elegir" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Cómo Elegir el Mejor Lavavajillas Industrial
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Mantenimiento y Consejos
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
                    Invierte en Calidad
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
                Lavavajillas Industriales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eficiencia y Limpieza para tu Negocio
              </p>
            </div>
            
            {/* Imagen del lavavajillas industrial */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavajillasIndustrialesImg} 
                alt="Lavavajillas industrial profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En el mundo de la hostelería y la restauración, la eficiencia en la limpieza es clave. Los lavavajillas industriales son la mejor opción para garantizar vajilla impecable en el menor tiempo posible, permitiendo mantener un servicio ágil y sin interrupciones.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="beneficios" className="text-2xl font-bold text-gray-800 mb-4">
              Beneficios de los Lavavajillas Industriales
            </h1>
            
            {/* Beneficios */}
            <div className="space-y-4 mb-8">
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Ahorro de tiempo y esfuerzo:</strong> Gracias a su alta capacidad y rapidez, los lavavajillas industriales reducen el tiempo de lavado y optimizan el trabajo en cocinas de restaurantes, hoteles y comedores.</li>
                <li><strong>Mayor higiene y desinfección:</strong> Funcionan a temperaturas elevadas que eliminan grasa, bacterias y residuos de comida, asegurando platos y utensilios completamente limpios.</li>
                <li><strong>Eficiencia energética y ahorro de agua:</strong> Diseñados para un consumo eficiente, estos equipos utilizan menos agua y detergente en comparación con el lavado manual, reduciendo costos operativos.</li>
                <li><strong>Adaptabilidad a diferentes necesidades:</strong> Existen modelos compactos para pequeños negocios y opciones más grandes para grandes restaurantes, garantizando soluciones a medida.</li>
              </ol>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Cómo elegir el mejor lavavajillas industrial */}
            <div id="elegir" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cómo Elegir el Mejor Lavavajillas Industrial
              </h2>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Capacidad y tamaño:</strong> Dependiendo del volumen de platos y utensilios a lavar.</li>
                <li><strong>Consumo de energía y agua:</strong> Modelos eficientes pueden reducir costos a largo plazo.</li>
                <li><strong>Sistema de lavado:</strong> Hay opciones con brazos giratorios, túneles de lavado y sistemas de alta presión.</li>
                <li><strong>Facilidad de mantenimiento:</strong> Un equipo con limpieza automática y filtros desmontables es ideal para mayor durabilidad.</li>
              </ol>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento y consejos */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Consejos para su Correcto Funcionamiento
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Para evitar fallos y prolongar la vida útil del equipo, sigue estas recomendaciones:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>✅ Limpia los filtros regularmente para evitar acumulaciones de residuos.</li>
                  <li>✅ Utiliza detergente y abrillantador adecuados para evitar corrosión en el acero inoxidable.</li>
                  <li>✅ Verifica el sistema de desagüe para evitar obstrucciones.</li>
                  <li>✅ Realiza revisiones periódicas con un servicio técnico especializado.</li>
                </ul>
              </div>
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
                  Si tu frigorífico Whirlpool No Frost no enfría, o presentas problemas con frigoríficos Candy, Daewoo, Electrolux o Fagor, es fundamental contar con un equipo de mantenimiento profesional.
                </p>
                
                <p className="mb-4">
                  Además, si necesitas asistencia técnica para tus electrodomésticos, confía en:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>🔹 Garland Servicio Técnico</li>
                  <li>🔹 General Electric Servicio Técnico</li>
                  <li>🔹 Go He Service Candy UM</li>
                  <li>🔹 Go He Service Hoover UM</li>
                </ul>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Conclusión */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Invierte en Calidad y Optimiza tu Cocina!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Un lavavajillas industrial de calidad no solo mejora la productividad de tu negocio, sino que también garantiza higiene y seguridad alimentaria. No esperes a que los problemas surjan, ¡elige la mejor opción para tu cocina profesional hoy mismo!
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
                  Los Hornos para Pizza
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

            {/* Sección 4: Horno de Gas */}
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

export default LavavajillasIndustriales;
