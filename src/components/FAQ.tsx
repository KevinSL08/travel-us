import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquareCode, HelpCircle } from 'lucide-react';
import { TelegramConfig } from '../types';

interface FAQProps {
  telegramConfig: TelegramConfig;
}

export default function FAQ({ telegramConfig }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuál es la ventaja de que el dueño sea un piloto de aerolínea comercial?',
      answer: 'Un piloto de avión comercial entiende las dinámicas operativas de la aviación internacional. Sabemos cómo operan las conexiones en aeropuertos complejos (como Madrid, París, Miami), qué aerolíneas tienen mejores registros de puntualidad, qué tipos de aeronaves (Boeing, Airbus) son más cómodas para vuelos largos y cómo evitar las trampas de retrasos de equipaje. Esa experiencia técnica se traslada directamente al diseño de tu tiquete.'
    },
    {
      question: '¿Por qué cotizar tiquetes por Telegram en vez de usar un buscador automatizado?',
      answer: 'Los buscadores de vuelos comunes muestran tarifas gancho que no incluyen equipaje, cobran tarifas ocultas y te dejan desamparado si hay una cancelación. En Travel US, accedemos a tarifas de consolidador GDS exclusivas, validamos la ruta técnicamente y te atendemos de forma humana e instantánea por Telegram. Si hay un imprevisto, tienes un piloto y un equipo comercial dándote soporte real en tiempo récord.'
    },
    {
      question: '¿Cómo funciona el proceso de pago y emisión del tiquete?',
      answer: 'Una vez acordada la ruta y tarifa perfecta a través de Telegram, te enviamos un enlace de pago seguro con tarjeta de crédito, débito o instrucciones para transferencia internacional. Emitimos tu tiquete aéreo y código de reserva localizador (PNR) de la aerolínea de inmediato para que puedas comprobarlo directamente en la web de la aerolínea.'
    },
    {
      question: '¿Qué incluye la tarifa aérea que me cotizan?',
      answer: 'Te asesoramos con transparencia absoluta. Te informamos con exactitud qué tipo de equipaje incluye cada opción (artículo personal, equipaje de mano de 10kg o maleta facturada de 23kg), la política de selección de asientos y si acumula millas de viajero frecuente (Star Alliance, SkyTeam, Oneworld).'
    },
    {
      question: '¿Puedo cotizar vuelos multidestino o rutas complejas?',
      answer: '¡Por supuesto! Diseñar conexiones eficientes de vuelos multidestino o intercontinentales complejos es nuestro mayor fuerte. Nuestro piloto revisa el plan de vuelo para garantizar que el tiempo de conexión en los hubs intermedios cumpla con el estándar de seguridad operacional MCT (Minimum Connection Time).'
    }
  ];

  return (
    <section className="py-24 bg-brand-beige relative overflow-hidden" id="faq-section">
      {/* Background thematic aviation sky image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80')` 
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Soporte Aéreo de Confianza
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4" id="faq-title">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 font-sans leading-relaxed text-xs md:text-sm max-w-xl mx-auto">
            Resolviendo tus dudas técnicas sobre reservas, aerolíneas, políticas de equipaje en Pesos Colombianos (COP) y el respaldo técnico de aviación comercial.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4" id="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-bold text-brand-navy hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 text-xs md:text-sm leading-tight">
                    <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs text-gray-500 font-sans leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Floating CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-navy border border-white/10 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <MessageSquareCode className="w-8 h-8 text-brand-gold shrink-0 hidden sm:block animate-pulse" />
            <div>
              <p className="font-display font-extrabold text-sm sm:text-base text-white mb-1">¿Tienes una duda específica o un itinerario para cotizar?</p>
              <p className="text-xs text-gray-300 font-sans">Escríbenos directamente y buscaremos la tarifa óptima con la asesoría de un piloto comercial.</p>
            </div>
          </div>
          <a
            href={`https://t.me/${telegramConfig.channelUsername}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-display font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-0.5 shrink-0 cursor-pointer"
          >
            💬 Cotizar en Telegram
          </a>
        </div>

      </div>
    </section>
  );
}
