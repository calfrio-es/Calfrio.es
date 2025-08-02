import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contenido de texto - Lado izquierdo */}
          <div className="space-y-5 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-900">
                Sobre <span className="text-cyan-400">Calfrio</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
              Especializados en la venta de productos de hotelería de alta calidad en Palma de Mallorca. Nos dedicamos a ofrecer una amplia gama de soluciones para el sector hostelero, con productos fabricados en acero inoxidable, garantizando durabilidad, resistencia y diseño moderno para satisfacer las exigencias de cualquier establecimiento.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                Equipamiento de Hostelería en Palma de Mallorca
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
              En nuestra tienda en Palma de Mallorca ofrecemos venta, reparación y servicio posventa de productos de acero inoxidable, garantizando durabilidad, atención personalizada y soluciones profesionales para cocinas domésticas y profesionales.              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
                <div className="text-xs text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
                <div className="text-xs text-gray-600">Clientes Satisfechos</div>
              </div>
            </div>

            
          </div>

          {/* Imagen - Lado derecho */}
          <div className="relative flex justify-center lg:justify-end hidden lg:block">            <div className="relative z-10">
              <img 
                src="/src/assets/img/hero1.webp" 
                alt="Equipamiento de hostelería Calfrio" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-cyan-400 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;