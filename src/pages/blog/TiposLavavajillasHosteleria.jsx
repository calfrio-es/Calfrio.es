import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import tiposLavavajillasHosteleriaImg from '../../assets/img/tiposlavavajillashosteleria.jpg';

const TiposLavavajillasHosteleria = () => {
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
                  <Link to="#funcionamiento" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Cómo Funciona
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#tipos" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Tipos de Lavavajillas
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#caracteristicas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Características Claves
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
                Lavavajillas de Hostelería
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características, Tipos y Beneficios
              </p>
            </div>
            
            {/* Imagen del lavavajillas de hostelería */}
            <div className="flex justify-center mb-8">
              <img 
                src={tiposLavavajillasHosteleriaImg} 
                alt="Lavavajillas de hostelería profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Los lavavajillas de hostelería son equipos diseñados para garantizar una limpieza eficiente y rápida de la vajilla, cristalería y utensilios en bares, restaurantes, hoteles y otros establecimientos del sector gastronómico. Su uso es clave para mantener la higiene y optimizar el tiempo de trabajo en cocinas profesionales. A continuación, te presentamos toda la información relevante sobre estos dispositivos.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="funcionamiento" className="text-2xl font-bold text-gray-800 mb-4">
              1. ¿Cómo Funciona un Lavavajillas de Hostelería?
            </h1>
            
            {/* Funcionamiento */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 mb-4">
                A diferencia de los lavavajillas domésticos, los modelos para hostelería están diseñados para soportar un uso intensivo y reducir el tiempo de lavado. Su funcionamiento se basa en los siguientes pasos:
              </p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Carga de la vajilla:</strong> Se colocan platos, vasos, cubiertos y otros utensilios en cestas o bandejas específicas.</li>
                <li><strong>Lavado a alta presión:</strong> Se rocía agua caliente (entre 55°C y 85°C) con detergente especializado para eliminar restos de grasa, alimentos y bebidas.</li>
                <li><strong>Enjuague con agua limpia:</strong> Se eliminan los restos de detergente y suciedad, asegurando una limpieza completa.</li>
                <li><strong>Secado o evaporación:</strong> Algunos modelos incorporan sistemas de secado rápido o utilizan la temperatura para facilitar la evaporación del agua.</li>
              </ol>
              
              <p className="text-sm text-gray-700 mt-4">
                Estos equipos pueden procesar grandes volúmenes de vajilla en tiempos reducidos, con ciclos de lavado de entre 1 y 3 minutos en la mayoría de los casos.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Tipos de lavavajillas */}
            <div id="tipos" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                2. Tipos de Lavavajillas de Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Existen diferentes tipos de lavavajillas diseñados para adaptarse a las necesidades específicas de cada negocio.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">a) Lavavajillas de Carga Frontal</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Similares a los domésticos pero con mayor capacidad y velocidad.</li>
                <li>Ideales para pequeños bares, cafeterías y restaurantes con volumen medio de vajilla.</li>
                <li>Compactos y fáciles de instalar bajo encimeras.</li>
                <li>Capacidad para cestas estándar de 35×35 cm o 50×50 cm.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">b) Lavavajillas de Capota o Cúpula</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Diseñados para restaurantes y cocinas con alto flujo de vajilla.</li>
                <li>Permiten introducir bandejas enteras y lavarlas con un sistema de elevación superior.</li>
                <li>Capaces de lavar hasta 1.000 platos por hora con ciclos rápidos.</li>
                <li>Requieren una mesa de entrada y salida para optimizar el proceso.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">c) Lavavasos Industriales</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Especialmente diseñados para cristalería delicada como copas y vasos.</li>
                <li>Utilizan detergentes y temperaturas adecuadas para evitar residuos y marcas de cal.</li>
                <li>Modelos compactos para instalación bajo la barra.</li>
                <li>Ciclos ultrarrápidos de 45 a 120 segundos para una rotación constante de vasos limpios.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">d) Lavavajillas de Cinta Transportadora</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Equipos de gran capacidad para hoteles, hospitales y grandes restaurantes.</li>
                <li>Funcionan con un sistema de transporte automático que mueve la vajilla a través de distintas fases de lavado y enjuague.</li>
                <li>Consumo eficiente de agua y energía gracias a su diseño optimizado.</li>
                <li>Capacidad para procesar miles de platos por hora.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">e) Lavavajillas de Túnel</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                <li>Similar a los de cinta transportadora, pero con mayor automatización.</li>
                <li>Equipados con sensores y programas de lavado avanzados.</li>
                <li>Utilizados en grandes centros de producción gastronómica.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características */}
            <div id="caracteristicas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                3. Características Claves de un Lavavajillas de Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Los lavavajillas industriales cuentan con tecnologías avanzadas para garantizar un lavado eficiente y un bajo consumo de recursos. Algunas de sus características más importantes incluyen:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Ciclos de lavado ultrarrápidos:</strong> Reducen tiempos de espera y aumentan la productividad.</li>
                <li><strong>Temperaturas de desinfección:</strong> Eliminan bacterias y residuos sin necesidad de productos químicos agresivos.</li>
                <li><strong>Filtros y sistemas de reciclado de agua:</strong> Optimizan el consumo y reducen el impacto ambiental.</li>
                <li><strong>Sistemas de dosificación automática:</strong> Controlan la cantidad de detergente y abrillantador utilizada en cada ciclo.</li>
                <li><strong>Diseño en acero inoxidable:</strong> Material resistente a la corrosión, fácil de limpiar y duradero.</li>
                <li><strong>Panel de control digital:</strong> Permite programar ciclos de lavado según el tipo de vajilla.</li>
                <li><strong>Bomba de desagüe integrada:</strong> Facilita la evacuación del agua sin necesidad de inclinaciones manuales.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios */}
            <div id="beneficios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                4. Beneficios de Utilizar un Lavavajillas de Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Invertir en un lavavajillas profesional trae múltiples ventajas en términos de eficiencia y calidad del servicio:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>✅ Ahorro de tiempo:</strong> Lava grandes volúmenes de vajilla en minutos.</li>
                <li><strong>✅ Mayor higiene:</strong> Elimina bacterias y residuos de manera efectiva.</li>
                <li><strong>✅ Reducción del consumo de agua y detergente:</strong> Uso optimizado de recursos.</li>
                <li><strong>✅ Menos rotura de cristalería:</strong> Lavado delicado para copas y vasos frágiles.</li>
                <li><strong>✅ Optimización del espacio:</strong> Modelos compactos para cualquier tipo de cocina.</li>
                <li><strong>✅ Cumplimiento con normativas sanitarias:</strong> Garantiza estándares de limpieza adecuados en la hostelería.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento */}
            <div id="mantenimiento" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                5. Consejos para el Mantenimiento de un Lavavajillas de Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Para prolongar la vida útil del equipo y garantizar su óptimo funcionamiento, es esencial seguir estas recomendaciones:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>🔹 Limpieza diaria de filtros:</strong> Evita la acumulación de residuos y grasa.</li>
                <li><strong>🔹 Uso de detergentes específicos:</strong> Asegura un lavado eficiente sin dañar el equipo.</li>
                <li><strong>🔹 Revisión de brazos aspersores:</strong> Evita obstrucciones en los inyectores de agua.</li>
                <li><strong>🔹 Descalcificación periódica:</strong> Previene la acumulación de cal en resistencias y conductos.</li>
                <li><strong>🔹 Comprobación del nivel de detergente y abrillantador:</strong> Mantiene la calidad del lavado y el secado.</li>
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

            {/* Sección 1: Lavavajillas de Bar */}
            <div className="mb-8 relative">
              <Link to="/blog/lavavajillas-de-bar" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Lavavajillas de Bar
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 2: Lavavajillas de Copas para Hostelería */}
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

            {/* Sección 3: Lavavajillas para Hostelería */}
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

            {/* Sección 4: Lavavajillas Industriales */}
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

            {/* Sección 5: Lavavajillas SMEG */}
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
          </div>
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default TiposLavavajillasHosteleria;
