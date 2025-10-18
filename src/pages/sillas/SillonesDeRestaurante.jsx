import { CheckCircle, Clock, Shield, Wrench, ChevronDown } from "lucide-react"
import { useState } from "react"
import SEO from "../../components/layout/SEO.jsx"
import Header from "../../components/layout/Header.jsx"
import Footer from "../../components/layout/Footer.jsx"

// Importar imágenes locales de sillones
import barSofa1 from "../../assets/sofas/bar-sofa-1.jpg"
import barSofa2 from "../../assets/sofas/bar-sofa-2.jpg"
import barSofa3 from "../../assets/sofas/bar-sofa-3.jpg"
import barSofa4 from "../../assets/sofas/bar-sofa-4.jpg"

export default function SillonesDeRestaurante() {
  const [openFaq, setOpenFaq] = useState(null)

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Inmediata",
      description: "Disponibilidad inmediata de nuestros sillones para restaurante. Entrega en 24-48 horas.",
      image: barSofa2,
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Calidad Premium",
      description: "Sillones fabricados con materiales resistentes y tapizados duraderos para ambientes elegantes.",
      image: barSofa4,
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Instalación Profesional",
      description: "Servicio de montaje incluido con nuestros técnicos especializados en mobiliario de restaurante.",
      image: barSofa3,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía Extendida",
      description: "Garantía de 2 años en estructura y tapizado. Durabilidad certificada.",
      image: barSofa1,
    },
  ]

  const faqs = [
    {
      question: "¿Qué tipos de sillones ofrecen para restaurantes?",
      answer:
        "Ofrecemos sillones individuales, sillones dobles, sillones de esquina y sillones modulares, todos con diseños elegantes que combinan confort, comodidad y estilo para ambientes de restaurante.",
    },
    {
      question: "¿Son apropiados para uso diario intensivo?",
      answer:
        "Sí, nuestros sillones están fabricados con materiales resistentes al desgaste diario, tapizados impermeables y estructuras robustas que mantienen su apariencia profesional incluso en ambientes de alto tráfico.",
    },
    {
      question: "¿Cuánto tiempo dura la entrega?",
      answer:
        "La entrega estándar es de 24-48 horas para modelos en stock. Para pedidos personalizados con medidas específicas, coordinamos plazos según la disponibilidad de materiales.",
    },
    {
      question: "¿Incluyen la instalación?",
      answer:
        "Sí, todos nuestros sillones incluyen instalación profesional por parte de nuestro equipo técnico especializado. Nos aseguramos de que queden perfectamente nivelados y listas para su uso inmediato.",
    },
  ]

  return (
    <div className="w-full min-h-screen">
      <Header />
      <SEO
        title="Sillones De Restaurante"
        description="Sillones para restaurante elegantes y confortables. Calidad premium y durabilidad excepcional para ambientes sofisticados."
        keywords="sillones restaurante, mobiliario restaurante, sillones elegantes, sillones comedor, sillones bar restaurante"
        canonical="/sillones-de-restaurante"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sillones De <span className="text-cyan-600">Restaurante</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Sillones para restaurante elegantes y confortables. Calidad premium y durabilidad excepcional
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '+34632075370'
                const message = 'Hola, estoy interesado en sillones para mi restaurante. ¿Podrían asesorarme?'
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
                const message = 'Hola, quiero comprar sillones para mi restaurante. ¿Me pueden ayudar?'
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
              Ofrecemos sillones diseñados específicamente para restaurantes y espacios de hostelería que requieren
              elegancia y confort. Nuestros sillones combinan diseños sofisticados con materiales resistentes al desgaste diario,
              garantizando higiene máxima y durabilidad excepcional. Ideales para crear ambientes acogedores y elegantes
              en restaurantes, bares y cafeterías con servicio de calidad.
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
              src={barSofa3}
              alt="Sillones para restaurante elegantes y confortables"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-700/70 flex items-center">
              <div className="px-8 sm:px-16 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Elegancia y Confort Profesional
                </h2>
                <p className="text-lg sm:text-xl text-cyan-50">
                  Nuestros sillones para restaurante ofrecen elegancia máxima y confort excepcional para ambientes sofisticados.
                  Diseños ergonómicos que combinan estilo moderno con comodidad duradera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas sillones para tu restaurante?</h2>
          <p className="text-xl text-cyan-50 mb-8">Contáctanos ahora y recibe asesoramiento personalizado para tu proyecto</p>
          <button
            onClick={() => {
              const phoneNumber = '+34632075370'
              const message = 'Hola, estoy interesado en sillones para mi restaurante. ¿Podrían asesorarme?'
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
                  src={barSofa4}
                  alt="Sillones para restaurante elegantes y confortables"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="mb-4 text-3xl font-bold text-white">Calidad y Durabilidad Premium</h3>
                <p className="mb-6 text-pretty text-lg leading-relaxed text-cyan-50">
                  Nuestros sillones para restaurante están fabricados con materiales de alta calidad que garantizan
                  elegancia máxima, confort duradero y resistencia al desgaste diario. Diseñados para crear ambientes sofisticados y acogedores.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Diseños elegantes y modernos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Tapizados resistentes y confortables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Fáciles de limpiar y mantener</span>
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
