import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import lavavajillasCopasImg from '../../assets/img/lavavajillascopas.jpg';

const LavavajillasCopasHosteleria = () => {
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
                      const element = document.getElementById('caracteristicas');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Características Principales
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('beneficios');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Beneficios para la Hostelería
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('recomendaciones');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Recomendaciones para su Uso
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
                    Mantenimiento
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
                Lavavajillas de Copas para Hostelería
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características, Beneficios y Recomendaciones
              </p>
            </div>
            
            {/* Imagen del lavavajillas de copas */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavajillasCopasImg} 
                alt="Lavavajillas de copas para hostelería" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                El lavavajillas de copas para hostelería es un equipo esencial en bares, restaurantes, hoteles y cualquier establecimiento que maneje un gran volumen de cristalería. Diseñado específicamente para limpiar copas de forma eficiente y sin dejar residuos o marcas de agua, este tipo de lavavajillas optimiza el tiempo de trabajo y mejora la presentación del servicio.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="caracteristicas" className="text-2xl font-bold text-gray-800 mb-4">
              Características Principales
            </h1>
            
            {/* Características */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Diseño Compacto y Eficiente:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Modelos de sobremesa o bajo mostrador para maximizar el espacio.</li>
                <li>Construcción en acero inoxidable para mayor durabilidad y resistencia a la corrosión.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ciclo de Lavado Rápido:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Programas de lavado de entre 90 y 180 segundos.</li>
                <li>Uso de agua a altas temperaturas (entre 55 °C y 85 °C) para eliminar grasa y bacterias sin necesidad de secado manual.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sistemas de Filtrado y Drenaje Avanzados:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Filtros de residuos que evitan obstrucciones en los conductos.</li>
                <li>Bombas de desagüe eficientes para garantizar un funcionamiento continuo.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Bajo Consumo de Agua y Energía:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Uso de solo 2 a 3 litros de agua por ciclo, reduciendo el gasto de suministros.</li>
                <li>Modelos con tecnología de ahorro energético y recuperación de calor.</li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Compatibilidad con Diferentes Detergentes y Abrillantadores:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Uso de productos específicos para cristalería que evitan residuos de jabón y marcas de cal.</li>
                <li>Posibilidad de incluir dispensadores automáticos de detergente y abrillantador para un resultado homogéneo.</li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Beneficios para la hostelería */}
            <div id="beneficios" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Beneficios para la Hostelería
              </h2>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Rapidez en el Servicio:</strong> Permite limpiar grandes volúmenes de copas en minutos, optimizando el tiempo en momentos de alta demanda.</li>
                <li><strong>Higiene Garantizada:</strong> Alcanza temperaturas elevadas que eliminan bacterias y residuos de manera eficiente.</li>
                <li><strong>Cuidado del Cristal:</strong> Evita roturas o daños en la cristalería gracias a sistemas de lavado a presión controlada.</li>
                <li><strong>Ahorro de Recursos:</strong> Reduce el consumo de agua, detergente y energía en comparación con el lavado manual.</li>
                <li><strong>Fácil Integración en la Cocina Industrial:</strong> Diseños ergonómicos y configuraciones adaptadas a diferentes necesidades de espacio.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Recomendaciones para su uso y mantenimiento */}
            <div id="recomendaciones" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recomendaciones para su Uso y Mantenimiento
              </h2>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Carga Correcta:</h3>
              <p className="text-sm text-gray-700 mb-4">
                Colocar las copas boca abajo sin que se toquen entre sí para garantizar un lavado uniforme.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Limpieza Diaria:</h3>
              <p className="text-sm text-gray-700 mb-4">
                Vaciar los filtros y revisar el estado de las boquillas de agua para evitar acumulaciones de residuos.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Uso de Agua Descalcificada:</h3>
              <p className="text-sm text-gray-700 mb-4">
                Reduce la formación de cal y prolonga la vida útil del lavavajillas.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento */}
            <div id="mantenimiento" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Revisión Periódica
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Inspeccionar las juntas, mangueras y sistemas de dosificación para evitar fallos en el funcionamiento.
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

export default LavavajillasCopasHosteleria;
