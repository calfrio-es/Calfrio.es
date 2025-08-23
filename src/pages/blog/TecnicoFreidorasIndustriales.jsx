import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ButtonWhatsap from '../../components/layout/ButtonWhatsap';
import BlogRelacionadosReparaciones from './BlogRelacionadosReparaciones';

const TecnicoFreidorasIndustriales = () => {
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
                      const element = document.getElementById('servicio');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    ¿Qué incluye el servicio?
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
                    Cobertura en múltiples zonas
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
                    ¿Cada cuánto debo hacer mantenimiento?
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('atencion');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Atención inmediata para negocios de hostelería
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('promocion');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Promoción exclusiva
                  </button>
                </li>
                <li className="border-b border-gray-300 pb-1"></li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-black !text-black hover:text-cyan-400 transition-colors duration-300 block flex items-center w-full text-left cursor-pointer"
                  >
                    <span className="text-black !text-black mr-2">•</span>
                    Contáctanos ya
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
                Técnico en Freidoras Industriales en Madrid
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servicio técnico especializado 24/7 para hostelería
              </p>
            </div>
            
            {/* H1 para SEO */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Técnico en Freidoras Industriales en Madrid
            </h1>
            
            {/* Descripción principal */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-gray-700 leading-relaxed">
                Servicio técnico profesional en freidoras industriales, disponible todos los días del año, incluyendo fines de semana y festivos. Reparamos, restauramos y realizamos mantenimiento preventivo y correctivo en todo tipo de freidoras industriales, ya sean de gas o eléctricas, de una o varias cubas.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nuestros técnicos están capacitados para resolver todo tipo de averías:
              </p>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span>Sistema de drenaje de aceite obstruido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span>Fugas en válvulas y juntas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span>Termostato dañado o sin regulación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span>Fallos eléctricos o electrónicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span>Problemas de encendido o apagado automático</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🔧</span>
                  <span>Sobrecalentamiento o baja eficiencia</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Todas las reparaciones cuentan con garantía, seguimiento técnico y recambios originales o compatibles (OEM) con total fiabilidad.
              </p>
            </div>
            
            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>
            
            {/* ¿Qué incluye el servicio? */}
            <div id="servicio" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Qué incluye el servicio?
              </h2>
              
              <ul className="list-none space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Atención a domicilio en Madrid y alrededores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Servicio de urgencias 24 horas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Técnicos con años de experiencia en el sector hostelero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Repuestos disponibles incluso en horarios nocturnos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Asistencia en fines de semana y días festivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Presupuestos claros y sin letra pequeña</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>Revisión completa del sistema, con limpieza técnica y calibración de temperatura</span>
                </li>
              </ul>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Cobertura en múltiples zonas */}
            <div id="cobertura" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Cobertura en múltiples zonas
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Además de Madrid, prestamos servicio técnico en:
                </p>
                <p>
                  <strong>Palma de Mallorca, Valencia, Manacor, Inca, Calvià, Eivissa, Santa Eulària del Riu, Marratxí, Llucmajor, Arenal, Porreres, Algaida, y en toda la zona de Islas Baleares.</strong>
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* ¿Cada cuánto debo hacer mantenimiento? */}
            <div id="mantenimiento" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                ¿Cada cuánto debo hacer mantenimiento?
              </h2>
              
              <ul className="list-none space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📅</span>
                  <div>
                    <strong>Uso intensivo diario:</strong> se recomienda revisión cada 3 meses.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">📅</span>
                  <div>
                    <strong>Uso ocasional o fines de semana:</strong> revisión entre 6 y 8 meses.
                  </div>
                </li>
              </ul>
              
              <p className="text-sm text-gray-700 leading-relaxed">
                Hacer un mantenimiento a tiempo evita fallas inesperadas, asegura el buen funcionamiento del equipo y prolonga la vida útil de la freidora.
              </p>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Atención inmediata */}
            <div id="atencion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Atención inmediata para negocios de hostelería
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Si tu freidora falla durante el servicio, no te preocupes. Nuestro equipo de técnicos se desplaza a cualquier punto de Madrid y zonas cercanas con rapidez, incluso de madrugada. Sabemos que un equipo detenido significa pérdida de clientes.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Promoción exclusiva */}
            <div id="promocion" className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                🎉 Promoción exclusiva – Solo por hoy, 21 de abril de 2025
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p>
                  Solicita tu reparación hoy mismo y recibe un <strong>5% de descuento directo</strong> en el servicio. Aplica a todas las intervenciones realizadas en freidoras industriales. Solo válido si reservas desde este mismo momento.
                </p>
              </div>
            </div>

            {/* Línea negra separadora */}
            <div className="border-t-2 border-black mb-8"></div>

            {/* Contacto */}
            <div id="contacto" className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                📞 Contáctanos ya
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed">
                <p className="mb-4">
                  No importa el tipo o marca de tu freidora. Escríbenos, llámanos o envíanos un mensaje por WhatsApp y uno de nuestros técnicos acudirá en el menor tiempo posible. Atención rápida, profesional y con garantía.
                </p>
                
                <p className="text-center font-bold text-lg">
                  ¡No dejes que tu cocina se detenga! Manten tu freidora en perfecto estado y tu negocio funcionando al 100%.
                </p>
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

export default TecnicoFreidorasIndustriales;
