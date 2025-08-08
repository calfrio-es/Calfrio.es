import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogsRelacionados from './BlogsRelacionados';
import freidoraHosteleriaImg from '../../assets/img/freidorahosteleria.jpg';

const FreidoraIndustrialHosteleria = () => {
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
                       const element = document.getElementById('introduccion');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Introducción a las Freidoras Industriales para Hostelería
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
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
                       const element = document.getElementById('ventajas');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Ventajas de Usar una Freidora en Hostelería
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                                     <button 
                     onClick={() => {
                       const element = document.getElementById('usos');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                       }
                     }}
                     className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                   >
                    <span className="text-black !text-black mr-2">•</span>
                    Usos Principales en Hostelería
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
                    Características y Beneficios
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
                Freidora Industrial para Hostelería
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Características y Beneficios
              </p>
            </div>
            
            {/* Imagen de la freidora industrial para hostelería */}
            <div className="flex justify-center mb-8">
              <img 
                src={freidoraHosteleriaImg} 
                alt="Freidora industrial para hostelería profesional" 
                className="w-full h-92 rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* H1 para SEO */}
            <h1 id="introduccion" className="text-2xl font-bold text-gray-800 mb-4">
              Introducción a las Freidoras Industriales para Hostelería
            </h1>
            
            {/* Descripción introductoria */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Las freidoras industriales para hostelería son equipos esenciales en restaurantes, hoteles, bares y negocios de comida rápida. Están diseñadas para manejar grandes volúmenes de fritura con eficiencia, garantizando una cocción rápida, homogénea y de alta calidad.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Estos equipos están específicamente diseñados para satisfacer las demandas del sector de la hostelería, ofreciendo capacidad, durabilidad y eficiencia en un solo equipo.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Características principales */}
            <div id="caracteristicas" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Características Principales
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Capacidad y Tamaño:</strong> Existen modelos desde 5 hasta más de 50 litros, dependiendo de la demanda del negocio.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Materiales de Fabricación:</strong> Construidas en acero inoxidable, lo que garantiza resistencia a la corrosión, higiene y fácil limpieza.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Opciones de Alimentación:</strong></span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Freidoras a gas:</strong> Más potentes, ideales para grandes cocinas.</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Freidoras eléctricas:</strong> Perfectas para espacios con acceso limitado a gas y mayor control de temperatura.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Sistemas de Control de Temperatura:</strong> Rango ajustable entre 90°C y 200°C para diferentes tipos de frituras.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Zonas Frías:</strong> Mantienen los residuos lejos del calor para prolongar la vida útil del aceite.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Cestas Resistentes:</strong> Diseñadas en acero inoxidable para soportar temperaturas extremas y uso continuo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Grifo de Vaciado:</strong> Facilita la eliminación del aceite usado y la limpieza del equipo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Sistemas de Seguridad:</strong> Protección contra sobrecalentamiento y apagado automático.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Ventajas de usar una freidora en hostelería */}
            <div id="ventajas" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Ventajas de Usar una Freidora en Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las freidoras industriales para hostelería ofrecen múltiples beneficios para negocios del sector:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Mayor Producción:</strong> Permite freír grandes cantidades en poco tiempo, reduciendo los tiempos de espera.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Consistencia en la Cocción:</strong> Temperaturas precisas que garantizan frituras doradas y crujientes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Ahorro de Aceite:</strong> La tecnología de zona fría ayuda a mantener el aceite limpio por más tiempo.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Eficiencia Energética:</strong> Modelos optimizados para reducir el consumo de electricidad o gas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔹</span>
                  <span><strong>Fácil Mantenimiento:</strong> Gracias a su diseño desmontable y materiales resistentes.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Usos principales en hostelería */}
            <div id="usos" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Usos Principales en Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Las freidoras industriales para hostelería son ideales para diversos tipos de negocios del sector:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Restaurantes y Bares:</strong> Para freír patatas, calamares, croquetas y otros aperitivos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Hoteles y Catering:</strong> Perfectas para buffets y eventos con alta demanda.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Food Trucks y Fast Food:</strong> Ideales para la preparación rápida de comida frita.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span><strong>Pastelerías y Panaderías:</strong> Para donas, churros y otros productos dulces.</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Características y beneficios */}
            <div id="conclusion" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Freidora Industrial para Hostelería: Características y Beneficios
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Las freidoras industriales para hostelería son equipos esenciales en restaurantes, hoteles, bares y negocios de comida rápida. Están diseñadas para manejar grandes volúmenes de fritura con eficiencia, garantizando una cocción rápida, homogénea y de alta calidad.
                </p>
                
                <p className="mb-4">
                  Con capacidades que varían desde 5 hasta más de 50 litros, estas freidoras están diseñadas para satisfacer las demandas específicas del sector de la hostelería, ofreciendo eficiencia, durabilidad y facilidad de mantenimiento.
                </p>
                
                <p>
                  Su construcción en acero inoxidable, sistemas de control de temperatura precisos, opciones de alimentación (gas o eléctrica) y características de seguridad las convierten en la opción ideal para negocios de hostelería que requieren alta producción de alimentos fritos con calidad profesional.
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

export default FreidoraIndustrialHosteleria;
