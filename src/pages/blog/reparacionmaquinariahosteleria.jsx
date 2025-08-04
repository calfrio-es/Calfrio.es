import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';

const ReparacionMaquinariaHosteleria = () => {
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
                  <Link to="#importancia" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Importancia de la Reparación
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#marcas" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Marcas Especializadas
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#servicios" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Servicios por Municipios
                  </Link>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <Link to="#beneficios" className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center">
                    <span className="text-black !text-black mr-2">•</span>
                    Beneficios del Servicio
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
                Reparación de Maquinaria de Hostelería
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio especializado en Palma de Mallorca y toda la isla
              </p>
            </div>
            
            {/* Descripción inicial */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                La reparación de maquinaria de hostelería es un servicio esencial para garantizar el correcto funcionamiento de los negocios del sector en Palma de Mallorca y en toda la isla. Desde restaurantes hasta hoteles, el mantenimiento y arreglo de equipos industriales es fundamental para evitar interrupciones en la operativa diaria. En este artículo, abordaremos la importancia de contar con un servicio de calidad, las marcas más reconocidas en el mercado y los municipios donde se ofrece asistencia especializada.
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 id="importancia" className="text-2xl font-bold text-gray-800 mb-4">
              1. Importancia de la Reparación de Maquinaria de Hostelería
            </h1>
            
            {/* Importancia */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                El correcto mantenimiento y reparación de maquinaria de hostelería prolonga la vida útil de los equipos y evita costosos reemplazos. Negocios en zonas como Cala Major, Santa Catalina o Playa de Palma dependen de equipos eficientes para brindar un servicio de calidad. Desde hornos hasta lavavajillas industriales, contar con un servicio técnico especializado es clave para asegurar la productividad y la seguridad en el entorno de trabajo.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* Marcas especializadas */}
            <div id="marcas" className="space-y-4 pb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                2. Marcas Especializadas en Maquinaria de Hostelería
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Trabajar con marcas líderes garantiza la calidad y durabilidad de los equipos. Algunas de las principales marcas de maquinaria de hostelería incluyen:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Alfa Forni:</strong> Especialistas en hornos profesionales para pizzerías.</li>
                <li><strong>Cool Head:</strong> Equipos de refrigeración industrial de alta eficiencia.</li>
                <li><strong>Sammic:</strong> Fabricantes de maquinaria de preparación de alimentos y lavado.</li>
                <li><strong>Servicio oficial Smeg:</strong> Asistencia técnica para electrodomésticos y equipos industriales.</li>
                <li><strong>Smeg SAT:</strong> Servicio autorizado para el mantenimiento y reparación.</li>
                <li><strong>SAT Smeg:</strong> Cobertura especializada en la reparación de maquinaria de hostelería.</li>
                <li><strong>Smeg Servicio:</strong> Soluciones para negocios que buscan calidad y respaldo técnico.</li>
                <li><strong>Infrico:</strong> Líder en sistemas de refrigeración para hostelería.</li>
                <li><strong>Silanos:</strong> Innovación en lavavajillas industriales.</li>
                <li><strong>Vulcan:</strong> Fabricantes de cocinas y equipos de alta gama.</li>
                <li><strong>Adler:</strong> Especialistas en maquinaria para la industria alimentaria.</li>
                <li><strong>Rational:</strong> Soluciones de cocción inteligente para restaurantes.</li>
                <li><strong>Coreco:</strong> Refrigeración profesional adaptada a las necesidades del sector.</li>
                <li><strong>Edenox:</strong> Equipamiento de hostelería con tecnología avanzada.</li>
                <li><strong>Fagor Industrial:</strong> Innovación y eficiencia en equipamiento para hostelería.</li>
                <li><strong>Jemi:</strong> Fabricantes de lavavajillas y cocinas industriales de alto rendimiento.</li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Servicios por municipios */}
            <div id="servicios" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                3. Servicios de Reparación en Diferentes Municipios de Mallorca
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                El servicio de reparación de maquinaria de hostelería está disponible en diversos municipios de la isla, brindando cobertura a negocios de todas las dimensiones. Algunos de los municipios y zonas donde se presta asistencia incluyen:
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">3.1 Palma de Mallorca:</h3>
              <p className="text-sm text-gray-700 mb-4">
                En la ciudad de Palma de Mallorca, la reparación de maquinaria de hostelería se extiende por diversas zonas, incluyendo el Aeropuerto, Amanecer, Archiduque, Bellver, Bons Aires, Cala Major, Cas Capiscol, Coll d'en Rabassa, Cort, El Arenal, Es Fortí, Playa de Palma, Santa Catalina, Son Cladera, Son Espanyolet, Son Rapinya, Son Sardina y S'Arenal. Estos barrios concentran una gran cantidad de restaurantes, cafeterías y hoteles que requieren un mantenimiento constante de sus equipos.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">3.2 Municipios de Mallorca:</h3>
              <p className="text-sm text-gray-700 mb-4">
                En toda la isla de Mallorca, también se presta servicio en municipios como Alaró, Alcúdia, Andratx, Artà, Calvià, Campos, Felanitx, Inca, Llucmajor, Manacor, Marratxí, Pollença, Santa María del Camí, Santanyí, Sóller y Valldemossa. Estas localidades cuentan con una oferta gastronómica y hotelera significativa, lo que hace indispensable un servicio de reparación de maquinaria de hostelería de calidad para evitar interrupciones en la atención al cliente.
              </p>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">3.3 Llucmajor y zonas cercanas:</h3>
              <p className="text-sm text-gray-700 mb-4">
                En la región de Llucmajor y sus alrededores, el servicio cubre Llucmajor (Pueblo), El Arenal (s'Arenal), La Torre (sa Torre), Bahía Grande (Badia Gran), Bahía Azul (Badia Blava), Las Palmeras (ses Palmeres o Son Granada), Maioris Décima (Maioris Dècima) y Puig de Ros (es Puigderrós). Estas zonas, con una alta densidad de negocios de hostelería, requieren un servicio de asistencia técnica rápido y eficiente.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Beneficios */}
            <div id="beneficios" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                4. Beneficios de Contratar un Servicio Especializado
              </h2>
              
              <p className="text-sm text-gray-700 mb-4">
                Contar con un servicio técnico especializado en reparación de maquinaria de hostelería garantiza:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li><strong>Rapidez y eficiencia:</strong> Reducción del tiempo de inactividad de los equipos.</li>
                <li><strong>Repuestos originales:</strong> Uso de piezas certificadas por cada fabricante.</li>
                <li><strong>Mantenimiento preventivo:</strong> Evita averías costosas y prolonga la vida de los equipos.</li>
                <li><strong>Asesoramiento técnico:</strong> Soluciones adaptadas a las necesidades del negocio.</li>
              </ul>
              
              <p className="text-sm text-gray-700 mt-6">
                Si tienes un negocio en Palma de Mallorca o en cualquier municipio de la isla y necesitas reparación de maquinaria de hostelería, contar con un equipo especializado marcará la diferencia en la operativa diaria y la satisfacción de tus clientes. Un servicio técnico de calidad te permitirá mantener en óptimas condiciones tus equipos, garantizando el mejor rendimiento para tu negocio y evitando imprevistos que puedan afectar el servicio al cliente.
              </p>
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

            {/* Sección 1: Tipos de Lavavajillas de Hostelería */}
            <div className="mb-8 relative">
              <Link to="/blog/tipos-lavavajillas-hosteleria" className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-cyan-400 transition-colors duration-300">
                  Tipos de Lavavajillas de Hostelería
                </h2>
                <div className="absolute bottom-0 right-0 text-black text-3xl font-bold">
                  →
                </div>
              </Link>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Sección 2: Lavavajillas de Bar */}
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

            {/* Sección 3: Lavavajillas de Copas para Hostelería */}
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

            {/* Sección 4: Lavavajillas para Hostelería */}
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

            {/* Sección 5: Lavavajillas Industriales */}
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
          </div>
        </div>
      </div>
      <Footer />
      <ButtonWhatsap />
    </>
  );
};

export default ReparacionMaquinariaHosteleria;
