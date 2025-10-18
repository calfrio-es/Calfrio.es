import { CheckCircle, Clock, Shield, Wrench, ChevronDown } from "lucide-react"
import { useState } from "react"
import SEO from "../../components/layout/SEO.jsx"
import Header from "../../components/layout/Header.jsx"
import Footer from "../../components/layout/Footer.jsx"
import bancoBarAcero1 from "../../assets/sillasimg/banco-bar-acero-1.jpg"
import sillaBarAcero2 from "../../assets/sillasimg/silla-bar-acero-2.jpg"
import bancoBarAcero4 from "../../assets/sillasimg/banco-bar-acero-4.jpg"
import sillaBarVintage from "../../assets/sillasimg/silla-bar-vintage.jpg"
import bancoBarModerno from "../../assets/sillasimg/banco-bar-moderno.jpg"
import bancoBarMetal from "../../assets/sillasimg/banco-bar-metal.jpg"

export default function SillasModernasParaBar() {
  const [openFaq, setOpenFaq] = useState(null)
  const benefits = [
    { icon: <Clock className="w-8 h-8" />, title: "Entrega Inmediata", description: "Disponibilidad inmediata de nuestras sillas modernas para bar.", image: sillaBarAcero2 },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Calidad Premium", description: "Sillas modernas con diseños contemporáneos y alta calidad.", image: bancoBarAcero4 },
    { icon: <Wrench className="w-8 h-8" />, title: "Instalación Profesional", description: "Servicio de montaje incluido con nuestros técnicos especializados.", image: sillaBarVintage },
    { icon: <Shield className="w-8 h-8" />, title: "Garantía Extendida", description: "Garantía de 2 años en estructura y acabados modernos.", image: bancoBarMetal }
  ]
  const faqs = [
    { question: "¿Qué estilos modernos ofrecen?", answer: "Ofrecemos sillas con diseños minimalistas, ergonómicos y contemporáneos, perfectos para bares modernos." },
    { question: "¿Son cómodas para largas estancias?", answer: "Sí, nuestras sillas modernas están diseñadas con ergonomía profesional para máxima comodidad." },
    { question: "¿Cuánto tiempo dura la entrega?", answer: "La entrega estándar es de 24-48 horas para modelos en stock." },
    { question: "¿Incluyen la instalación?", answer: "Sí, todas nuestras sillas incluyen instalación profesional." }
  ]
  return (
    <div className="w-full min-h-screen">
      <Header />
      <SEO title="Sillas Modernas Para Bar" description="Sillas modernas para bar. Diseño contemporáneo y ergonomía perfecta. Estilo vanguardista." keywords="sillas modernas bar, mobiliario moderno bar, sillas diseño contemporaneo, sillas ergonomicas bar" canonical="/sillas-modernas-para-bar" />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Sillas Modernas Para <span className="text-cyan-600">Bar</span></h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">Sillas con diseño moderno y vanguardista para bares. Ergonomía y estilo contemporáneo</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { const phoneNumber = '+573167137081'; const message = 'Hola, estoy interesado en sillas modernas para bar. ¿Podrían asesorarme?'; const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; window.open(whatsappUrl, '_blank') }} className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Solicitar Presupuesto</button>
            <button onClick={() => { const phoneNumber = '+573167137081'; const message = 'Hola, quiero comprar sillas modernas para bar. ¿Me pueden ayudar?'; const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; window.open(whatsappUrl, '_blank') }} className="inline-block bg-white text-cyan-600 border-2 border-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Comprar</button>
          </div>
        </div>
      </section>
      <section className="py-2 px-4 sm:px-6 lg:px-2">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-t-4 border-cyan-500">
            <p className="text-lg text-gray-700 leading-relaxed">Ofrecemos una colección vanguardista de sillas modernas para bares, diseñadas con líneas limpias y materiales contemporáneos. Nuestras sillas combinan estética minimalista con máxima comodidad, creando espacios que reflejan las tendencias más actuales del diseño de interiores.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={benefit.image || "/placeholder.svg"} alt={benefit.title} className="w-full h-full object-cover" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={bancoBarModerno} alt="Sillas modernas para bar" className="w-full h-[400px] sm:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-cyan-700/70 flex items-center">
              <div className="px-8 sm:px-16 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Diseño Vanguardista</h2>
                <p className="text-lg sm:text-xl text-cyan-50">Nuestras sillas modernas representan lo último en diseño contemporáneo para bares.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas sillas modernas para tu bar?</h2>
          <p className="text-xl text-cyan-50 mb-8">Contáctanos ahora y recibe asesoramiento personalizado</p>
          <button onClick={() => { const phoneNumber = '+573167137081'; const message = 'Hola, estoy interesado en sillas modernas para bar. ¿Podrían asesorarme?'; const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; window.open(whatsappUrl, '_blank') }} className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Solicitar Presupuesto</button>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-cyan-600 shadow-2xl">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img src={bancoBarAcero1} alt="Sillas modernas contemporáneas" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="mb-4 text-3xl font-bold text-white">Calidad y Durabilidad Premium</h3>
                <p className="mb-6 text-pretty text-lg leading-relaxed text-cyan-50">Nuestras sillas modernas están fabricadas con materiales contemporáneos y diseños innovadores.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" /><span className="text-cyan-50">Diseño minimalista y funcional</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" /><span className="text-cyan-50">Ergonomía profesional</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-200" /><span className="text-cyan-50">Materiales contemporáneos duraderos</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-48" : "max-h-0"}`}>
                  <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <div className="h-16" />
    </div>
  )
}
