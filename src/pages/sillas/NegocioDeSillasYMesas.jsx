import { CheckCircle, Clock, Shield, Wrench, ChevronDown } from "lucide-react"
import { useState } from "react"
import SEO from "../../components/layout/SEO.jsx"
import Header from "../../components/layout/Header.jsx"
import Footer from "../../components/layout/Footer.jsx"

// Importar imágenes locales de mesas
import mesaBarAcero6 from "../../assets/mesas/mesa-bar-acero-6.jpg"
import mesaBarAcero5 from "../../assets/mesas/mesa-bar-acero-5.jpg"
import mesaBarAcero2 from "../../assets/mesas/mesa-bar-acero-2.jpg"
import mesaBar3 from "../../assets/mesas/mesa-bar-3.jpg"
import mesaBar2 from "../../assets/mesas/mesa-bar-2.jpg"
import mesaBar5 from "../../assets/mesas/mesa-bar-5.jpg"

export default function NegocioDeSillasYMesas() {
  const [openFaq, setOpenFaq] = useState(null)

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Inmediata",
      description: "Disponibilidad inmediata de nuestro negocio de sillas y mesas. Entrega en 24-48 horas.",
      image: mesaBarAcero2,
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Calidad Premium",
      description: "Sillas y mesas fabricadas con materiales resistentes y acabados profesionales.",
      image: mesaBarAcero5,
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Instalación Profesional",
      description: "Servicio de montaje incluido con nuestros técnicos especializados en mobiliario.",
      image: mesaBar3,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía Extendida",
      description: "Garantía de 2 años en estructura y acabados. Servicio postventa incluido.",
      image: mesaBar5,
    },
  ]

  const faqs = [
    {
      question: "¿Qué tipos de sillas y mesas ofrecen?",
      answer:
        "Ofrecemos sillas y mesas para bares, restaurantes, cafeterías, terrazas, cocinas industriales y cualquier negocio de hostelería, con materiales como acero inoxidable, madera, plástico y diseños modernos o clásicos.",
    },
    {
      question: "¿Ofrecen servicio de montaje?",
      answer:
        "Sí, incluimos servicio de montaje profesional en todos nuestros productos, con técnicos especializados que garantizan una instalación perfecta y segura.",
    },
    {
      question: "¿Cuánto tiempo dura la entrega?",
      answer:
        "La entrega estándar es de 24-48 horas para modelos en stock. Para pedidos personalizados con medidas específicas, coordinamos plazos según la disponibilidad de materiales.",
    },
    {
      question: "¿Ofrecen asesoramiento personalizado?",
      answer:
        "Sí, nuestro equipo de expertos asesora personalmente cada proyecto, considerando espacio, presupuesto, estilo y funcionalidad para ofrecer la mejor solución.",
    },
  ]

  return (
    <div className="w-full min-h-screen">
      <Header />
      <SEO
        title="Negocio De Sillas Y Mesas"
        description="Negocio especializado en sillas y mesas para hostelería. Calidad, variedad y servicio profesional para tu negocio."
        keywords="negocio sillas mesas, mobiliario hostelería, sillas mesas restaurante, mobiliario bar, equipamiento hostelería"
        canonical="/negocio-de-sillas-y-mesas"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Negocio De Sillas Y <span className="text-cyan-600">Mesas</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Negocio especializado en sillas y mesas para hostelería. Calidad y servicio profesional
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '+34632075370'
                const message = 'Hola, estoy interesado en equipar mi negocio con sillas y mesas. ¿Podrían asesorarme?'
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
                const message = 'Hola, quiero comprar sillas y mesas para mi negocio. ¿Me pueden ayudar?'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="inline-block bg-white text-cyan-600 border-2 border-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Comprar
            </button>
          </div>
        </div>
      </section>

      {/* Explanatory Text */}
      <section className="py-2 px-4 sm:px-6 lg:px-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-t-4 border-cyan-500">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos un negocio especializado en sillas y mesas para el sector de la hostelería y gastronomía. Ofrecemos
              una amplia variedad de productos de alta calidad, desde mesas y sillas para restaurantes, bares y cafeterías,
              hasta mobiliario para cocinas industriales. Nuestro compromiso es proporcionar soluciones completas con
              asesoramiento personalizado, entrega rápida y servicio postventa profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">¿Por qué elegirnos?</h2>
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
              src={mesaBarAcero6}
              alt="Negocio especializado en sillas y mesas para hostelería"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-700/70 flex items-center">
              <div className="px-8 sm:px-16 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Higiene y Resistencia Profesional
                </h2>
                <p className="text-lg sm:text-xl text-cyan-50">
                  Nuestro negocio ofrece sillas y mesas profesionales que garantizan higiene máxima y resistencia excepcional.
                  Materiales duraderos que soportan el uso intensivo diario de cualquier negocio de hostelería.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas equipar tu negocio con sillas y mesas?</h2>
          <p className="text-xl text-cyan-50 mb-8">Contáctanos ahora y recibe asesoramiento personalizado para tu proyecto</p>
          <button
            onClick={() => {
              const phoneNumber = '+34632075370'
              const message = 'Hola, estoy interesado en equipar mi negocio con sillas y mesas. ¿Podrían asesorarme?'
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
                  src={mesaBar2}
                  alt="Negocio especializado en sillas y mesas para hostelería"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="mb-4 text-3xl font-bold text-white">Calidad y Durabilidad Premium</h3>
                <p className="mb-6 text-pretty text-lg leading-relaxed text-cyan-50">
                  Nuestro negocio ofrece sillas y mesas fabricadas con materiales de alta calidad que garantizan
                  higiene máxima, resistencia al desgaste y facilidad de mantenimiento. Diseñadas para satisfacer las necesidades de cualquier negocio de hostelería.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Variedad completa de productos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Asesoramiento personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Servicio postventa garantizado</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
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
