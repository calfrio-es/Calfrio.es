import { CheckCircle, Clock, Shield, Wrench, ChevronDown } from "lucide-react"
import { useState } from "react"
import SEO from "../../components/layout/SEO.jsx"
import Header from "../../components/layout/Header.jsx"
import Footer from "../../components/layout/Footer.jsx"

// Importar imágenes locales
import bancoBarAcero1 from "../../assets/sillasimg/banco-bar-acero-1.jpg"
import sillaBarAcero2 from "../../assets/sillasimg/silla-bar-acero-2.jpg"
import bancoBarAcero4 from "../../assets/sillasimg/banco-bar-acero-4.jpg"
import sillaBarVintage from "../../assets/sillasimg/silla-bar-vintage.jpg"
import bancoBarModerno from "../../assets/sillasimg/banco-bar-moderno.jpg"
import bancoBarMetal from "../../assets/sillasimg/banco-bar-metal.jpg"

export default function BancosYMesasParaBar() {
  const [openFaq, setOpenFaq] = useState(null)

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Inmediata",
      description: "Disponibilidad inmediata de nuestros bancos y mesas para bar. Entrega en 24-48 horas.",
      image: sillaBarAcero2,
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Calidad Premium",
      description: "Conjuntos de bancos y mesas fabricados con materiales de primera calidad para hostelería.",
      image: bancoBarAcero4,
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Instalación Profesional",
      description: "Servicio de montaje incluido con nuestros técnicos especializados en mobiliario de bar.",
      image: sillaBarVintage,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía Extendida",
      description: "Garantía de 2 años en estructura y materiales. Soporte técnico continuo.",
      image: bancoBarMetal,
    },
  ]

  const faqs = [
    {
      question: "¿Ofrecen conjuntos completos de bancos y mesas?",
      answer:
        "Sí, ofrecemos conjuntos coordinados de bancos y mesas para bar con diseños que combinan perfectamente. Todos nuestros conjuntos están pensados para crear espacios funcionales y estéticamente agradables.",
    },
    {
      question: "¿Qué medidas tienen las mesas y bancos?",
      answer:
        "Ofrecemos diferentes medidas según el espacio disponible. Las mesas van desde 60x60cm hasta 120x80cm, y los bancos tienen alturas estándar de 75-80cm. Podemos adaptar medidas específicas a tus necesidades.",
    },
    {
      question: "¿Cuánto tiempo dura la entrega?",
      answer:
        "La entrega estándar es de 24-48 horas para modelos en stock. Para pedidos personalizados o grandes cantidades, coordinamos plazos específicos según la disponibilidad de materiales.",
    },
    {
      question: "¿Incluyen la instalación?",
      answer:
        "Sí, todos nuestros conjuntos incluyen instalación profesional por parte de nuestro equipo técnico especializado. Nos aseguramos de que queden perfectamente nivelados y seguros.",
    },
  ]

  return (
    <div className="w-full min-h-screen">
      <Header />
      <SEO
        title="Bancos Y Mesas Para Bar"
        description="Bancos y mesas para bar. Conjuntos coordinados de mobiliario hostelero. Diseño funcional y máxima durabilidad."
        keywords="bancos y mesas para bar, mobiliario bar completo, conjuntos bar, bancos mesas bar, mobiliario hostelería"
        canonical="/bancos-y-mesas-para-bar"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bancos Y Mesas Para <span className="text-cyan-600">Bar</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Conjuntos completos de mobiliario para bares. Soluciones integrales que combinan funcionalidad y diseño moderno
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phoneNumber = '+573167137081'
                const message = 'Hola, estoy interesado en bancos y mesas para bar. ¿Podrían asesorarme?'
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Presupuesto
            </button>
            <button
              onClick={() => {
                const phoneNumber = '+573167137081'
                const message = 'Hola, quiero comprar bancos y mesas para bar. ¿Me pueden ayudar con el proceso de compra?'
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
              Ofrecemos conjuntos completos de bancos y mesas para bar diseñados específicamente para el sector hostelero.
              Nuestros muebles combinan diseño moderno con máxima durabilidad, utilizando materiales premium como
              acero inoxidable, madera maciza y superficies resistentes. Cada conjunto está pensado para crear
              espacios funcionales que optimizan el flujo de clientes y el servicio eficiente.
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
              src={bancoBarModerno}
              alt="Conjuntos de bancos y mesas para bar en establecimiento moderno"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-700/70 flex items-center">
              <div className="px-8 sm:px-16 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Conjuntos Completos y Coordinados
                </h2>
                <p className="text-lg sm:text-xl text-cyan-50">
                  Nuestros conjuntos de bancos y mesas para bar ofrecen soluciones integrales que combinan funcionalidad,
                  diseño moderno y máxima durabilidad para optimizar tu espacio y servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas bancos y mesas para tu bar?</h2>
          <p className="text-xl text-cyan-50 mb-8">Contáctanos ahora y recibe asesoramiento personalizado para tu proyecto</p>
          <button
            onClick={() => {
              const phoneNumber = '+573167137081'
              const message = 'Hola, estoy interesado en bancos y mesas para bar. ¿Podrían asesorarme?'
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
                  src={bancoBarAcero1}
                  alt="Conjuntos de bancos y mesas para bar con diseño funcional"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="mb-4 text-3xl font-bold text-white">Calidad y Durabilidad Premium</h3>
                <p className="mb-6 text-pretty text-lg leading-relaxed text-cyan-50">
                  Nuestros conjuntos de bancos y mesas están fabricados con materiales de primera calidad que resisten el uso intensivo
                  de entornos hosteleros. Diseñados para durar años manteniendo su funcionalidad.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Materiales resistentes al desgaste</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Fáciles de limpiar y mantener</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" />
                    <span className="text-cyan-50">Diseño ergonómico para máxima comodidad</span>
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
