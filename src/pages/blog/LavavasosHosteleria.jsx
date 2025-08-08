import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import lavavasosHosteleriaImg from '../../assets/img/lavavasoshosteleria.jpg';

const LavavasosHosteleria = () => {
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
                       const element = document.getElementById('ventajas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas de un Lavavasos para Hostelería
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('elegir');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Cómo Elegir el Mejor Lavavasos para Hostelería
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
                    Mantenimiento y Cuidado del Lavavasos Hostelería
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('problemas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Problemas Comunes en Electrodomésticos
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('servicios');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Servicio Técnico
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('conclusion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Invierte en Calidad y Mejora el Servicio
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
                Lavavasos Hostelería
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La Clave para un Servicio Rápido y Eficiente
              </p>
            </div>
            
            {/* Imagen del lavavasos para hostelería */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavasosHosteleriaImg} 
                alt="Lavavasos para hostelería profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="ventajas" className="text-2xl font-bold text-gray-800 mb-4">
              Ventajas de un Lavavasos para Hostelería
            </h1>
            
            {/* Descripción con ventajas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En el sector de la hostelería, la rapidez y la higiene son fundamentales. Un lavavasos hostelería es un equipo esencial que garantiza copas y vasos limpios en cuestión de minutos, optimizando el servicio y mejorando la experiencia del cliente.
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Rapidez y eficiencia:</strong> Lava y desinfecta en pocos minutos, permitiendo un flujo constante de cristalería limpia.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Ahorro de agua y energía:</strong> Diseñados para reducir el consumo sin comprometer la calidad del lavado.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Higiene garantizada:</strong> Elimina bacterias y residuos, asegurando una limpieza profunda con cada ciclo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Protección del cristal:</strong> Tecnología avanzada para evitar roturas y mantener la cristalería en perfecto estado.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span><strong>Facilidad de uso:</strong> Equipos con controles intuitivos para una operación sencilla y eficaz.</span>
                </li>
              </ul>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Cómo elegir el mejor lavavasos para hostelería */}
            <div id="elegir" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cómo Elegir el Mejor Lavavasos para Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para escoger el lavavasos hostelería ideal, considera estos aspectos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Capacidad de carga:</strong> Dependiendo del tamaño de tu negocio, elige un modelo compacto o de gran capacidad.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Programas de lavado:</strong> Opta por lavavasos con diferentes ciclos para adaptarse a todo tipo de vasos y copas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Eficiencia energética:</strong> Modelos con bajo consumo ayudan a reducir costos operativos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Materiales de fabricación:</strong> Acero inoxidable para mayor durabilidad y resistencia.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Mantenimiento y cuidado del lavavasos hostelería */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Cuidado del Lavavasos Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para garantizar el máximo rendimiento y prolongar la vida útil del equipo, sigue estos consejos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Limpieza diaria de filtros y boquillas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Uso de detergentes específicos para cristalería.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Comprobación periódica de la presión del agua y del estado de los brazos de lavado.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✔</span>
                  <span>Servicio técnico regular para prevenir averías y optimizar el funcionamiento.</span>
                </li>
              </ul>
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

            {/* Servicio técnico para lavavasos y otros electrodomésticos */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Técnico para Lavavasos y Otros Electrodomésticos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas asistencia con tu lavavasos para hostelería, consulta con especialistas en:
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

            {/* Invierte en calidad y mejora el servicio */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Invierte en Calidad y Mejora el Servicio de tu Negocio
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Un lavavasos hostelería no solo mejora la eficiencia en el lavado, sino que también garantiza una presentación impecable de la cristalería. Asegura la higiene y profesionalismo en tu establecimiento con un equipo de alta calidad.
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

export default LavavasosHosteleria;
