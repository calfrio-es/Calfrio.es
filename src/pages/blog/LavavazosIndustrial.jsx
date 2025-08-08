import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import lavavasosIndustrialImg from '../../assets/img/lavavasosindustrial.jpg';

const LavavazosIndustrial = () => {
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
                    Ventajas de un Lavavasos Industrial
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
                    Mantenimiento y Cuidados
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
                    Optimiza tu Negocio de Hostelería
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
                Lavavasos Industrial
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eficiencia y Limpieza para Hostelería
              </p>
            </div>
            
            {/* Imagen del lavavasos industrial */}
            <div className="flex justify-center mb-8">
              <img 
                src={lavavasosIndustrialImg} 
                alt="Lavavasos industrial para hostelería" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="ventajas" className="text-2xl font-bold text-gray-800 mb-4">
              Ventajas de un Lavavasos Industrial
            </h1>
            
            {/* Descripción con ventajas */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En el sector de la hostelería, contar con un lavavasos industrial es esencial para mantener la higiene y ofrecer un servicio de calidad. Este equipo permite lavar grandes volúmenes de vasos de forma rápida y eficiente, garantizando la limpieza y desinfección necesaria para restaurantes, bares y cafeterías.
              </p>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Ahorro de tiempo y esfuerzo:</strong> Lava y desinfecta en pocos minutos, optimizando el trabajo en cocinas profesionales.</li>
                <li><strong>Consumo eficiente de agua y energía:</strong> Diseñados para reducir el gasto sin comprometer la calidad del lavado.</li>
                <li><strong>Higiene garantizada:</strong> Eliminación de bacterias y residuos, asegurando cristalería impecable.</li>
                <li><strong>Adaptabilidad:</strong> Modelos compactos y funcionales que se ajustan a diferentes espacios y necesidades.</li>
              </ol>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Mantenimiento y cuidados */}
            <div id="mantenimiento" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Mantenimiento y Cuidados
              </h2>
              
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Limpieza diaria:</strong> Elimina residuos de grasa y cal para prolongar la vida útil del equipo.</li>
                <li><strong>Uso de detergentes específicos:</strong> Garantiza un lavado eficaz sin dañar el material de los vasos.</li>
                <li><strong>Revisión de filtros y boquillas:</strong> Evita obstrucciones y mantiene el rendimiento óptimo.</li>
                <li><strong>Revisión profesional periódica:</strong> Asegura el correcto funcionamiento y previene averías.</li>
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

            {/* Servicio técnico para lavavasos y otros electrodomésticos */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Servicio Técnico para Lavavasos y Otros Electrodomésticos
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas asistencia con tu lavavasos industrial, consulta con especialistas en:
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

            {/* Optimiza tu negocio de hostelería */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Necesitas un Lavavasos Industrial para tu Negocio?
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si buscas mejorar la eficiencia en la limpieza de cristalería, invertir en un lavavasos industrial es la mejor opción. Optimiza el tiempo de trabajo y garantiza la mejor experiencia para tus clientes.
                </p>
                <p>
                  ¿Tienes dudas sobre cuál elegir? Contáctanos y te ayudaremos a encontrar el equipo ideal para tu cocina profesional.
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

export default LavavazosIndustrial;
