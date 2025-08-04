import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import hornoParaPizzaImg from '../../assets/img/hornoparapizza.jpg';

const HornoParaPizza = () => {
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
                    Ventajas de Usar un Horno para Pizza
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#consejos" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Consejos para Usar un Horno para Pizza
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#problemas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Problemas Comunes en Electrodomésticos
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
                    Disfruta de Pizzas Perfectas
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
                Los Hornos para Pizza
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Todo lo que necesitas saber sobre hornos profesionales para pizzerías
              </p>
            </div>
            
            {/* Imagen del horno para pizza */}
            <div className="flex justify-center mb-8">
              <img 
                src={hornoParaPizzaImg} 
                alt="Horno profesional para pizza" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="ventajas" className="text-2xl font-bold text-gray-800 mb-4">
              Ventajas de Usar un Horno para Pizza
            </h1>
            
            {/* Descripción con ventajas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Los hornos especializados para pizza ofrecen numerosas ventajas que los convierten en una inversión esencial para cualquier pizzería o restaurante que busque ofrecer la mejor calidad a sus clientes.
              </p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Temperatura alta y estable:</strong> Permite una cocción rápida y uniforme.</li>
                <li><strong>Ahorro energético:</strong> Modelos a gas o de leña pueden reducir el consumo eléctrico.</li>
                <li><strong>Sabor auténtico:</strong> Especialmente en hornos de leña, que aportan un toque ahumado único.</li>
                <li><strong>Versatilidad:</strong> También se pueden preparar otros alimentos como panes y carnes.</li>
                <li><strong>Fácil mantenimiento:</strong> Con una limpieza regular, el horno se mantiene en óptimas condiciones por más tiempo.</li>
              </ol>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Consejos para usar un horno para pizza */}
            <div id="consejos" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para Usar un Horno para Pizza
              </h2>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Precalentar el horno:</strong> Al menos 15-20 minutos antes de cocinar la pizza.</li>
                <li><strong>Usar una piedra refractaria:</strong> Ayuda a distribuir el calor de manera uniforme y mejora la textura de la base.</li>
                <li><strong>Regular la temperatura:</strong> La mayoría de las pizzas se cocinan entre 250°C y 300°C.</li>
                <li><strong>Colocación adecuada:</strong> Para una base crujiente, sitúa la pizza en la parte baja del horno.</li>
                <li><strong>Mantenimiento regular:</strong> Limpia los restos de harina y queso derretido para evitar olores y acumulación de residuos.</li>
              </ol>
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

            {/* Servicio técnico para hornos y otros electrodomésticos */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Técnico para Hornos y Otros Electrodomésticos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas asistencia con tu horno para pizza, consulta con especialistas en:
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

            {/* Disfruta de pizzas perfectas en casa */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¡Disfruta de Pizzas Perfectas en Casa!
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Con un mantenimiento adecuado y un uso correcto, tu horno para pizza te permitirá preparar deliciosas pizzas con una cocción ideal. Sigue estos consejos y conviértete en un experto pizzero desde la comodidad de tu hogar.
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

            {/* Sección 1: Hornos Industriales */}
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

            {/* Sección 2: Mantenimiento */}
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

            {/* Sección 3: Recetas */}
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

export default HornoParaPizza;
