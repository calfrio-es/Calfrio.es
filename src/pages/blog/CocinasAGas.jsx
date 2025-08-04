import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import cocinasAGasImg from '../../assets/img/cocinasagas.jpg';

const CocinasAGas = () => {
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
                    Ventajas de una Cocina de Gas
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#tipos" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Tipos de Cocinas de Gas
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#eleccion" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Cómo Elegir la Mejor
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Mantenimiento y Reparación
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#complementos" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Productos Complementarios
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#conclusion" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Contacta con Nosotros
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Columna central - más grande */}
        <div className="w-full lg:w-4/6 lg:border-r-2 lg:border-black">
          <div className="p-6">
            {/* Fecha en la esquina superior izquierda */}
            <div className="text-sm text-gray-600 mb-6">
              {fechaActual}
            </div>
            
            {/* Título grande centrado */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Cocina de Gas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cómo elegir la mejor para tu cocina profesional
              </p>
            </div>
            
            {/* Imagen de la cocina de gas */}
            <div className="flex justify-center mb-8">
              <img 
                src={cocinasAGasImg} 
                alt="Cocina de gas profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                La cocina de gas sigue siendo uno de los equipos preferidos en el sector de la restauración. Su rapidez, potencia y precisión la convierten en una herramienta indispensable en cocinas profesionales y establecimientos de hostelería. Si estás buscando una solución fiable, eficiente y duradera, te contamos todo lo que necesitas saber para elegir, mantener y sacar el máximo rendimiento a este equipo esencial en la maquinaria para hostelería.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Ventajas de una cocina de gas en entornos profesionales */}
            <div id="ventajas" className="space-y-4 pb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Ventajas de una Cocina de Gas en Entornos Profesionales
              </h1>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las cocinas de gas destacan por su eficiencia energética y capacidad de respuesta inmediata. A continuación, te explicamos por qué es una opción favorita entre los chefs y responsables de restaurantes:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Calor inmediato y regulable:</strong> permite un control preciso sobre la temperatura, algo esencial en la cocina profesional.</li>
                  <li><strong>Durabilidad:</strong> fabricadas con materiales resistentes al uso intensivo diario.</li>
                  <li><strong>Compatibilidad con otros equipos industriales de cocina:</strong> se integran fácilmente con hornos, planchas, freidoras y otros productos de hostelería.</li>
                </ul>
                
                <p className="mt-4">
                  Contar con una buena maquinaria de cocina no solo mejora el servicio, sino que también optimiza los costes y tiempos de preparación.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos de cocinas de gas para hostelería */}
            <div id="tipos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Cocinas de Gas para Hostelería
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Antes de elegir una cocina de gas, es fundamental conocer los distintos tipos disponibles en el mercado. Las necesidades de una pequeña cafetería no son las mismas que las de un gran restaurante. Aquí te mostramos las opciones más comunes:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Cocinas de gas de sobremesa:</strong> Ideales para espacios reducidos o cocinas auxiliares. Compactas, pero potentes, suelen tener entre 2 y 4 fuegos.</li>
                  <li><strong>Cocinas de gas con horno:</strong> Una opción muy versátil para restaurantes y hoteles. Combina la cocción en fogones con la función de horneado.</li>
                  <li><strong>Cocinas industriales modulares:</strong> Parte de sistemas más complejos de equipos industriales de cocina, estas cocinas pueden combinarse con planchas, freidoras o marmitas. Permiten una personalización total del espacio de trabajo.</li>
                  <li><strong>Cocinas de gas murales:</strong> Montadas en pared para maximizar el espacio útil, son muy utilizadas en cocinas industriales con alta rotación de platos.</li>
                </ul>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cómo elegir la cocina de gas perfecta para tu negocio */}
            <div id="eleccion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cómo Elegir la Cocina de Gas Perfecta para tu Negocio
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Al buscar una cocina de gas profesional, ten en cuenta los siguientes aspectos:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Tamaño y número de quemadores:</strong> Evalúa el volumen de producción diaria de tu negocio. ¿Necesitas 4 fuegos? ¿O 8?</li>
                  <li><strong>Tipo de gas:</strong> Verifica si la instalación funciona con gas natural o propano.</li>
                  <li><strong>Facilidad de limpieza:</strong> Las cocinas con superficies de acero inoxidable son más higiénicas y duraderas.</li>
                  <li><strong>Normativas de seguridad:</strong> Asegúrate de que cumple con la normativa vigente en seguridad y eficiencia energética.</li>
                </ul>
                
                <p className="mt-4">
                  En nuestra tienda de maquinaria de hostelería, te asesoramos sin compromiso para que tomes la mejor decisión.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento de cocinas de gas */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento de Cocinas de Gas: Claves para Prolongar su Vida Útil
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  El mantenimiento de la maquinaria de cocina es esencial para garantizar un funcionamiento seguro y prolongado. Aquí van algunos consejos prácticos:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Limpieza diaria:</strong> evita la acumulación de grasa, que puede dañar los componentes y reducir el rendimiento.</li>
                  <li><strong>Revisión de inyectores y válvulas:</strong> al menos una vez al trimestre, para asegurar una correcta combustión.</li>
                  <li><strong>Inspección del sistema de gas:</strong> prevenir fugas es crucial en cualquier instalación.</li>
                  <li><strong>Lubricación de mandos y grifos:</strong> para mantener un funcionamiento suave y sin bloqueos.</li>
                </ul>
                
                <p className="mt-4">
                  Ofrecemos servicio técnico de hostelería industrial con planes personalizados de mantenimiento de maquinaria. Así, tu equipo funcionará siempre al máximo nivel.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Productos complementarios */}
            <div id="complementos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Productos Complementarios para tu Cocina de Gas
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Una cocina profesional no es solo fogones. Para que tu espacio funcione de forma óptima, es esencial contar con productos para bares y restaurantes que se complementen entre sí:
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Lavavajillas para bares:</strong> esenciales para mantener el flujo de trabajo sin interrupciones.</li>
                  <li><strong>Freidoras industriales, planchas, marmitas:</strong> optimizan la preparación de distintos tipos de platos.</li>
                  <li><strong>Campanas extractoras industriales:</strong> mejoran la ventilación y cumplen con las normativas sanitarias.</li>
                  <li><strong>Mesas de trabajo, carros y estanterías inoxidables:</strong> mejoran la organización y limpieza.</li>
                </ul>
                
                <p className="mt-4">
                  Todos estos productos hosteleros están disponibles en nuestra web, junto con asesoría gratuita.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Conclusión */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contacta con Nosotros y Equípate con la Mejor Cocina de Gas
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  En resumen, una cocina de gas es una inversión estratégica para cualquier negocio de hostelería. Su potencia, control y resistencia la convierten en una aliada indispensable. Y lo mejor es que no estás solo: nosotros te acompañamos desde la elección hasta el mantenimiento.
                </p>
                
                <p className="mb-4">
                  ¿Quieres renovar tu cocina o montar tu primer restaurante?
                </p>
                
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Solicita asesoramiento gratuito.</li>
                  <li>Descubre nuestra gama completa de cocinas de gas y maquinaria de hostelería.</li>
                  <li>Recibe tu presupuesto en 24h.</li>
                </ul>
                
                <p className="mt-4">
                  Entra ahora en nuestra tienda de maquinaria de hostelería online, consulta con nuestros asesores y transforma tu cocina profesional con las mejores soluciones del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - un poco más grande */}
        <div className="hidden lg:block w-2/6">
          <div className="p-6">
            {/* Mini título */}
            <h3 className="text-sm text-gray-500 mb-6">
              También te puede interesar
            </h3>

            {/* Sección 1: Hornos Industriales */}
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

export default CocinasAGas;
