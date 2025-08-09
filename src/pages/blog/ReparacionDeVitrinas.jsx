import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const ReparacionDeVitrinas = () => {
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
                       const element = document.getElementById('servicios');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Servicios de Reparación
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('crucial');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Por Qué Es Crucial Reparar?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('consejos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Consejos para Mantener
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('cobertura');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Cobertura en Mallorca
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('marcas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Marcas que Reparamos
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
                    Contáctanos
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
                Reparación de Vitrinas Industriales en Palma de Mallorca
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio Técnico Experto para tu Negocio
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="servicios" className="text-2xl font-bold text-gray-800 mb-4">
              Servicios de Reparación de Vitrinas Industriales y Equipos de Cocina
            </h1>
            
            {/* Descripción con servicios */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                En [Nombre de tu empresa], nos especializamos en la reparación de vitrinas industriales y otros equipos de cocina industrial en Palma de Mallorca y sus alrededores. Sabemos que las vitrinas de exhibición y refrigeración son cruciales para la operación eficiente de tu negocio, ya que permiten mantener los productos frescos, accesibles y presentados de forma profesional. Es por eso que ofrecemos un servicio técnico experto para garantizar su funcionamiento óptimo y prolongar su vida útil.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Nuestras reparaciones cubren una amplia gama de equipos esenciales para la industria de la hostelería y restauración, incluidos:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Vitrinas refrigeradas y vitrinas de exposición</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Lavavajillas industriales, hornos y fuegos industriales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Máquinas de helado soft y congeladores industriales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Planchas de asar eléctricas y armarios de refrigeración</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🛠️</span>
                  <span>Escarchacopas y lavavasos</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestro equipo está altamente capacitado para realizar reparaciones de alta calidad que aseguren el rendimiento continuo de tus equipos, lo que resulta esencial para la eficiencia de la operación diaria de cualquier negocio de hostelería.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Por qué es crucial */}
            <div id="crucial" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Por Qué Es Crucial Reparar las Vitrinas Industriales?
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las vitrinas industriales juegan un papel fundamental en el sector de la restauración, ya que ayudan a mantener los alimentos frescos a la temperatura adecuada mientras los exhiben de manera atractiva para los clientes. Sin embargo, los fallos comunes en las vitrinas incluyen:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Problemas de refrigeración:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Esto puede afectar la conservación de los productos y poner en riesgo la seguridad alimentaria.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Fugas de gas o fallos en el sistema de enfriamiento:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Provocan un mal rendimiento y pérdidas económicas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Fallas en los controles electrónicos:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Impiden la correcta regulación de la temperatura.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">⚙️ Desgaste de las superficies:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Afecta tanto la estética como la funcionalidad de la vitrina.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Contamos con años de experiencia en la reparación de vitrinas industriales, lo que nos permite solucionar estos problemas de forma rápida y eficiente.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Consejos */}
            <div id="consejos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Consejos para Mantener las Vitrinas Industriales
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Para garantizar el rendimiento óptimo de tus vitrinas industriales y evitar fallos innecesarios, te recomendamos seguir estos consejos:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Revisión regular de la temperatura:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Asegúrate de que la vitrina mantenga la temperatura adecuada para la conservación de tus productos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Limpieza constante de las superficies:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    La acumulación de polvo y suciedad puede afectar la eficiencia de los sistemas de refrigeración.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Inspección de las puertas y sellos:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Verifica que no haya fugas de aire, lo que podría disminuir la eficiencia de la vitrina.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Desinfección mensual:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Es importante mantener las vitrinas limpias para asegurar una adecuada higiene, especialmente en entornos de preparación de alimentos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">💡 Reparación profesional periódica:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Solicita mantenimiento de forma regular para evitar que pequeños problemas se conviertan en averías costosas.
                  </p>
                </div>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura de Reparación de Equipos de Cocina Industrial en Palma de Mallorca
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Ofrecemos servicios completos de reparación de vitrinas industriales y otros equipos de cocina en Palma de Mallorca, así como en otras localidades de las Islas Baleares, incluyendo:
                </p>
                
                <div className="mb-4">
                  <p>🌍 Inca, Calvià, Santa Ponsa, Alcúdia, Cala d'Or, Magaluf, Pollença, y Arenal.</p>
                </div>
                
                <p>También atendemos a zonas turísticas como Cala Millor, Soller, Llucmajor, Manacor, y Campos, garantizando cobertura total para todo tipo de establecimientos.</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Marcas */}
            <div id="marcas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Marcas de Equipos que Reparamos
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Somos expertos en la reparación de vitrinas industriales y otros equipos de cocina de las principales marcas del mercado, tales como:
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                🔧 Gaggenau, Miele, Sub-Zero & Wolf, Smeg, Neff, Siemens, Bosch, AEG, Balay, Teka
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Promoción */}
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Promoción Especial de Verano
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="font-bold mb-2">🎁 Aprovecha nuestra promoción especial de verano: ¡5% de descuento en tu primer servicio de reparación! Esta oferta es válida hasta el 21 de abril de 2025.</p>
                <p>No dejes que tus equipos de cocina industrial se detengan. ¡Asegúrate de que tus vitrinas y otros equipos sigan funcionando a la perfección con la ayuda de nuestros técnicos especializados!</p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Solicita tu reparación */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Contáctanos para Reparar tu Vitrina Industrial
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Si necesitas reparar tu vitrina industrial o cualquier otro equipo de cocina industrial, contáctanos hoy mismo. Nuestro equipo está listo para ayudarte con un servicio rápido y de alta calidad.
                </p>
                
                <div className="text-center font-bold text-lg">
                  <p className="mb-2">📞 Llámanos o envíanos un mensaje para obtener asistencia técnica inmediata.</p>
                  <p>Estamos aquí para asegurarnos de que tu negocio de hostelería siga funcionando sin contratiempos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

                 {/* Columna derecha - un poco más grande - oculta en móviles */}
         <div className="hidden lg:block w-2/6">
           <BlogRelacionadosReparaciones />
         </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default ReparacionDeVitrinas;
