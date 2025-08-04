import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import lavavajillasDeBarImg from '../../assets/img/lavavajillasdebar.jpg';

const LavavajillasDeBar = () => {
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
                  <Link to="#caracteristicas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Características Claves
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#tipos" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Tipos de Lavavajillas de Bar
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#beneficios" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Beneficios
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#funcionamiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Cómo Funciona
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#tecnologia" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Tecnología
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#mantenimiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Mantenimiento
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
                Lavavajillas de Bar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características, Tipos y Beneficios
              </p>
            </div>
            
            {/* Imagen del lavavajillas de bar */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavajillasDeBarImg} 
                alt="Lavavajillas de bar profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Los lavavajillas de bar son equipos esenciales en la hostelería, diseñados para garantizar una limpieza rápida y eficiente de vasos, copas y platos en entornos de alto tráfico. Su uso es fundamental en bares, cafeterías, restaurantes y discotecas, donde la rotación de cristalería y utensilios es constante.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="caracteristicas" className="text-2xl font-bold text-gray-800 mb-4">
              Características Claves de los Lavavajillas de Bar
            </h1>
            
            {/* Características */}
            <div className="space-y-4 mb-8">
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Tamaño compacto:</strong> Diseñados para adaptarse a espacios reducidos detrás de la barra o en zonas de lavado pequeñas.</li>
                <li><strong>Ciclo de lavado rápido:</strong> La mayoría de los modelos cuentan con ciclos de lavado de entre 90 y 180 segundos para una limpieza eficiente.</li>
                <li><strong>Consumo eficiente de agua y energía:</strong> Optimizan el uso del agua y detergentes, reduciendo costos operativos.</li>
                <li><strong>Doble sistema de aclarado:</strong> Permite eliminar restos de jabón y residuos, asegurando una cristalería reluciente.</li>
                <li><strong>Bomba de desagüe y detergente automático:</strong> Facilitan el mantenimiento y aseguran un lavado constante sin intervención manual.</li>
                <li><strong>Diseño en acero inoxidable:</strong> Resistente a la humedad y al uso intensivo, garantizando una larga vida útil.</li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Tipos de lavavajillas de bar */}
            <div id="tipos" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tipos de Lavavajillas de Bar
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Lavavajillas de carga frontal:</strong> Similares a los domésticos, con puerta abatible y capacidad para varios cestos de vasos y platos.</li>
                <li><strong>Lavavasos industriales:</strong> Especializados en la limpieza de cristalería delicada, como copas de vino y vasos de cócteles.</li>
                <li><strong>Lavavajillas de cúpula:</strong> Más potentes y con mayor capacidad, ideales para bares con alto volumen de trabajo.</li>
                <li><strong>Lavavajillas con bomba de calor:</strong> Mejoran la eficiencia energética y reducen la humedad en los vasos, evitando la condensación.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios */}
            <div id="beneficios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Beneficios de Utilizar un Lavavajillas de Bar
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Mayor higiene y seguridad alimentaria:</strong> Elimina residuos y bacterias de manera eficiente.</li>
                <li><strong>Ahorro de tiempo:</strong> Reduce la carga de trabajo del personal y agiliza el servicio.</li>
                <li><strong>Cristalería sin marcas ni residuos:</strong> Evita restos de detergente y cal, mejorando la presentación de las bebidas.</li>
                <li><strong>Reducción del consumo de agua:</strong> Los modelos modernos gastan menos agua que el lavado manual.</li>
                <li><strong>Durabilidad y resistencia:</strong> Fabricados para soportar un uso continuo sin deterioro.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cómo funciona */}
            <div id="funcionamiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                1. ¿Cómo Funciona un Lavavajillas de Bar?
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                El funcionamiento de un lavavajillas de bar es similar al de un lavavajillas industrial, pero optimizado para el lavado rápido de vasos y copas.
              </p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Carga de los vasos o copas en un cesto especial.</li>
                <li>Inyección de agua a alta temperatura (entre 55°C y 85°C) mezclada con detergente para eliminar residuos.</li>
                <li>Ciclo de enjuague con agua limpia para eliminar restos de jabón y desinfectar la cristalería.</li>
                <li>Secado rápido o evaporación natural, dependiendo del modelo.</li>
              </ol>
              
              <p className="text-sm text-gray-700 mt-4">
                Gracias a su sistema de lavado a presión, los residuos de bebidas, grasas y azúcares se eliminan sin necesidad de prelavado manual.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características técnicas */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                2. Características Técnicas de los Lavavajillas de Bar
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Los lavavajillas de bar cuentan con características diseñadas para garantizar un rendimiento óptimo en la hostelería.
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Dimensiones compactas:</strong> Permiten su instalación bajo la barra o en áreas reducidas.</li>
                <li><strong>Ciclo de lavado corto:</strong> Modelos con ciclos de entre 60 y 180 segundos para garantizar una rotación rápida de la cristalería.</li>
                <li><strong>Control digital o mecánico:</strong> Algunos modelos incluyen paneles táctiles con programas de lavado personalizables.</li>
                <li><strong>Temperatura regulable:</strong> Garantiza un lavado seguro para diferentes tipos de vidrio y materiales.</li>
                <li><strong>Bajo consumo de agua y energía:</strong> Diseñados para optimizar el uso de recursos y reducir costos operativos.</li>
                <li><strong>Materiales resistentes:</strong> Acero inoxidable de alta calidad para garantizar durabilidad y fácil limpieza.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tipos detallados */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                3. Tipos de Lavavajillas de Bar
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Dependiendo del volumen de lavado y el tipo de negocio, existen diferentes tipos de lavavajillas de bar:
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">a) Lavavajillas de Carga Frontal</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Similares a los domésticos, con puerta abatible.</li>
                <li>Ideales para bares pequeños y medianos.</li>
                <li>Capacidad para cestos de diferentes tamaños.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">b) Lavavasos Industriales</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Especializados en la limpieza de cristalería delicada, como copas de vino y vasos de cócteles.</li>
                <li>Evitan residuos de cal y marcas de agua.</li>
                <li>Diseñados para trabajar con temperaturas suaves y detergentes específicos.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">c) Lavavajillas de Cúpula o Capota</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Más potentes y con capacidad para grandes volúmenes de cristalería y platos.</li>
                <li>Funcionan con un sistema de apertura superior para mayor comodidad.</li>
                <li>Ideales para restaurantes y bares con alto tráfico.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">d) Lavavajillas con Bomba de Calor</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Incorporan tecnología de secado por calor, evitando la condensación en la cristalería.</li>
                <li>Reducen el tiempo de secado y eliminan la necesidad de secado manual.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Tecnología */}
            <div id="tecnologia" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                4. Tecnología en los Lavavajillas de Bar
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Los modelos más modernos incorporan innovaciones tecnológicas para mejorar la eficiencia y el rendimiento:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Sistemas de filtrado de agua:</strong> Eliminan partículas y evitan acumulación de cal en los vasos.</li>
                <li><strong>Dosificación automática de detergente y abrillantador:</strong> Permite un uso preciso de los productos de limpieza.</li>
                <li><strong>Eficiencia energética:</strong> Modelos con certificaciones de ahorro energético y menor consumo de agua.</li>
                <li><strong>Bomba de desagüe integrada:</strong> Facilita la evacuación del agua sin necesidad de inclinación manual.</li>
                <li><strong>Sistemas de autolimpieza:</strong> Facilitan el mantenimiento y prolongan la vida útil del equipo.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento */}
            <div id="mantenimiento" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                5. Mantenimiento y Limpieza de un Lavavajillas de Bar
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Para asegurar el correcto funcionamiento y prolongar la vida útil del equipo, es importante realizar un mantenimiento adecuado:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Limpieza diaria:</strong> Retirar los filtros y lavar con agua corriente para evitar acumulación de residuos.</li>
                <li><strong>Uso de productos adecuados:</strong> Detergentes y abrillantadores específicos para lavavajillas industriales.</li>
                <li><strong>Descalcificación periódica:</strong> Evita la acumulación de cal en las resistencias y boquillas de agua.</li>
                <li><strong>Revisión de inyectores y brazos de lavado:</strong> Asegurar que no haya obstrucciones en los conductos de agua.</li>
                <li><strong>Verificación del nivel de detergente y abrillantador:</strong> Evita lavados deficientes y mantiene la cristalería impecable.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios finales */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                6. Beneficios de Usar un Lavavajillas de Bar
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Ahorro de tiempo:</strong> Lava grandes cantidades de vasos y copas en segundos.</li>
                <li><strong>Mayor higiene:</strong> Temperaturas elevadas eliminan bacterias y residuos de bebidas.</li>
                <li><strong>Eficiencia energética y de agua:</strong> Modelos diseñados para reducir el consumo.</li>
                <li><strong>Mejor presentación:</strong> Evita marcas de agua y residuos de jabón en la cristalería.</li>
                <li><strong>Facilidad de uso:</strong> Controles intuitivos y programas de lavado automáticos.</li>
              </ul>
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

            {/* Sección 1: Lavavajillas de Copas para Hostelería */}
            <div className="mb-8 relative">
              <Link to="/blog/lavavajillas-copas-hosteleria" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Lavavajillas de Copas para Hostelería
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 2: Lavavajillas para Hostelería */}
            <div className="mb-8 relative">
              <Link to="/blog/lavavajillas-hosteleria" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Lavavajillas para Hostelería
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 3: Lavavajillas Industriales */}
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

            {/* Sección 4: Lavavajillas SMEG */}
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

            {/* Sección 5: Hornos para Pizza */}
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
          </div>
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default LavavajillasDeBar;
