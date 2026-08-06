import { ShieldCheck, Ticket, PlaneTakeoff, Send } from 'lucide-react';
import { motion } from 'motion/react';

const cockpitImg = new URL('../assets/images/cockpit_sunset_flight_1785799009662.jpg', import.meta.url).href;

export default function Features() {
  const features = [
    {
      icon: PlaneTakeoff,
      title: 'Validación Técnica de Piloto',
      description: 'El dueño de la agencia, piloto comercial activo, audita los itinerarios para evitar retrasos extremos, escalas imposibles y conexiones de alto riesgo de pérdida.',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      icon: Ticket,
      title: 'Tiquetes Nacionales & Internacionales',
      description: 'Accedemos a los sistemas de consolidación aérea GDS con tarifas exclusivas en COP. Te conseguimos tarifas promocionales y asientos preferenciales.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      icon: ShieldCheck,
      title: 'Soporte de Vuelo en Tiempo Real',
      description: 'Monitoreamos tu plan de vuelo e itinerario desde el despacho hasta el aterrizaje. Si hay una cancelación, te reacomodamos antes de que hagas fila en el aeropuerto.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: Send,
      title: 'Cotizaciones Express vía Telegram',
      description: 'Sin esperas obsoletas por correo. Configuras tus fechas y destinos en COP, y recibes tus opciones de tiquetes directamente en tu Telegram de manera inmediata.',
      color: 'text-sky-500',
      bg: 'bg-sky-500/10'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="py-24 bg-brand-beige relative overflow-hidden" id="features-section">
      {/* Background high-resolution cockpit photograph */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url(${cockpitImg})` 
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase block mb-3">
            Sello de Confianza de Aviación Comercial
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-navy mb-4" id="features-title">
            ¿Por qué comprar tus tiquetes en Travel US?
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 font-sans leading-relaxed text-xs md:text-sm">
            Somos profesionales del sector aeronáutico liderados por un Capitán comercial activo. Garantizamos la máxima seguridad técnica en tus itinerarios, tarifas de consolidación aérea en Pesos Colombianos (COP) y Dólares (USD), y atención personalizada directa sin intermediarios.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          id="features-grid"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
              id={`feature-card-${idx}`}
            >
              <div className={`p-4 rounded-lg ${feat.bg} ${feat.color} mb-6`}>
                <feat.icon className="w-6 h-6 shrink-0" />
              </div>
              <h3 className="text-lg font-display font-bold text-brand-navy mb-3 leading-tight">
                {feat.title}
              </h3>
              <p className="text-gray-500 font-sans text-xs leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
