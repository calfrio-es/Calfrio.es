import { CheckCircle, Clock, Shield, Wrench, ChevronDown } from "lucide-react"
import { useState } from "react"
import SEO from "../../components/layout/SEO.jsx"
import Header from "../../components/layout/Header.jsx"
import Footer from "../../components/layout/Footer.jsx"

// Importar imágenes relacionadas con mobiliario y equipamiento profesional
import cocinadegasbutano from "../../assets/img/cocinadegasbutano.jpg"
import cocinadegasconhorno from "../../assets/img/cocinadegasconhorno.jpg"
import cocinasagas from "../../assets/img/cocinasagas.jpg"
import freidoraindustrial5litros from "../../assets/img/freidoraindustrial5litros.webp"
import freidorahosteleria from "../../assets/img/freidorahosteleria.jpg"
import freidoradobleindustrial from "../../assets/img/freidoradobleindustrial.jpg"

export default function Dina() {
  const [openFaq, setOpenFaq] = useState(null)

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Servicio Técnico Especializado",
      description: "Técnicos especializados en equipamiento Dina con amplia experiencia en mobiliario y equipamiento inoxidable para hostelería.",
      image: cocinadegasbutano,
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Recambios Originales",
      description: "Disponibilidad inmediata de piezas originales Dina para mantener el rendimiento óptimo de tus equipos.",
      image: cocinadegasconhorno,
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Instalación Profesional",
      description: "Montaje y configuración profesional de equipamiento Dina por especialistas certificados en mobiliario profesional.",
      image: cocinasagas,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía Extendida",
      description: "Garantía oficial Dina en todos nuestros servicios de venta, instalación y mantenimiento.",
      image: freidoraindustrial5litros,
    },
  ]

  const faqs = [
    {
      question: "¿Qué tipos de equipamiento Dina manejan?",
      answer:
        "Somos especialistas en mobiliario y equipamiento inoxidable Dina: mesas profesionales, fregaderos industriales, muebles de cocina, carros portavajillas, estanterías y todo el equipamiento necesario para cocinas y áreas de hostelería. Ofrecemos venta, instalación y mantenimiento para restaurantes, hoteles y colectividades.",
    },
    {
      question: "¿Ofrecen diseño personalizado de equipamiento Dina?",
      answer:
        "Sí, proporcionamos soluciones personalizadas para equipar cocinas profesionales. Nuestros técnicos especializados pueden adaptar el equipamiento Dina a las necesidades específicas de tu espacio, incluyendo medidas personalizadas y configuraciones especiales.",
    },
    {
      question: "¿Cuánto tiempo tardan en instalar equipamiento Dina?",
      answer:
        "Los tiempos de instalación dependen de la complejidad del proyecto, pero nuestros equipos especializados garantizan una instalación rápida y eficiente. La mayoría de los proyectos se completan en 1-3 días laborables.",
    },
    {
      question: "¿Trabajan con equipamiento Dina de segunda mano?",
      answer:
        "Sí, ofrecemos equipamiento Dina reacondicionado con garantía completa, inspección técnica exhaustiva y certificación de funcionamiento. Todos pasan por nuestro taller antes de la entrega para asegurar su perfecto estado.",
    },
  ]

  return (
    <div className="w-full min-h-screen">
      <Header />
      <SEO
        title="Especialistas en Dina - Mobiliario y Equipamiento Inoxidable"
        description="Especialistas en venta, instalación y mantenimiento de equipamiento Dina. Mobiliario inoxidable, mesas, fregaderos y equipamiento profesional."
        keywords="Dina mobiliario inoxidable, mantenimiento equipamiento Dina, mesas profesionales Dina, fregaderos industriales Dina, venta mobiliario Dina España"
        canonical="/marcas/dina"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Especialistas en <span className="text-cyan-600">Dina</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Venta, instalación y mantenimiento profesional de equipamiento Dina para hostelería
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '+34632075370'
                const message = 'Hola, estoy interesado en equipamiento Dina para mi establecimiento. ¿Podrían asesorarme?'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Presupuesto
            </button>
            <button
              onClick={() => {
                const phoneNumber = '+34632075370'
                const message = 'Hola, necesito mantenimiento para mi equipamiento Dina. ¿Me pueden ayudar?'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="inline-block bg-white text-cyan-600 border-2 border-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Servicio Técnico
            </button>
          </div>
        </div>
      </section>

      {/* Explanatory Text */}
      <section className="py-2 px-4 sm:px-6 lg:px-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-t-4 border-cyan-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos especialistas certificados en equipamiento Dina, el fabricante español líder en mobiliario y equipamiento
              inoxidable para el sector de la hostelería. Ofrecemos soluciones completas que incluyen venta de mesas profesionales,
              fregaderos industriales, muebles de cocina, carros portavajillas, estanterías y todo el equipamiento necesario
              para cocinas y áreas de servicio. Nuestro servicio técnico especializado garantiza la durabilidad y funcionalidad
              de tu equipamiento Dina con mantenimiento preventivo y reparaciones por técnicos certificados.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">¿Por qué elegirnos para tu equipamiento Dina?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-cyan-400">{benefit.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={freidorahosteleria}
              alt="Equipamiento Dina para cocinas y áreas de hostelería profesional"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-700/70 flex items-center">
              <div className="px-8 sm:px-16 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Calidad Española en Equipamiento Profesional
                </h2>
                <p className="text-lg sm:text-xl text-cyan-50">
                  El equipamiento Dina representa la excelencia española en mobiliario profesional, combinando
                  resistencia al desgaste, higiene perfecta y diseño funcional para satisfacer las demandas más
                  exigentes de las cocinas modernas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas equipamiento Dina o mantenimiento?</h2>
          <p className="text-xl text-cyan-50 mb-8">Contáctanos ahora y recibe asesoramiento especializado para equipar tu cocina profesional</p>
          <button
            onClick={() => {
              const phoneNumber = '+34632075370'
              const message = 'Hola, estoy interesado en equipamiento Dina para mi establecimiento. ¿Podrían asesorarme?'
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, '_blank')
            }}
            className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-cyan-600 shadow-2xl">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={freidoradobleindustrial}
                  alt="Equipamiento Dina con calidad premium para hostelería profesional"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="mb-4 text-3xl font-bold text-white">Servicio Técnico Certificado Dina</h3>
                <p className="mb-6 text-pretty text-lg leading-relaxed text-cyan-50">
                  Nuestro equipo técnico está certificado por Dina para proporcionar mantenimiento preventivo y correctivo
                  de todo el equipamiento. Garantizamos la durabilidad y funcionalidad óptima de tu mobiliario profesional.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Técnicos certificados por Dina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Recambios originales disponibles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Soluciones personalizadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes sobre Dina</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {/* Bottom Spacing */}
      <div className="h-16" />
    </div>
  )
}
