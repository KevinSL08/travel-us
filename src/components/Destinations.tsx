import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, CheckCircle, Send, ArrowRight, X, PlaneTakeoff, Info, Award, Plane } from 'lucide-react';
import { FlightRoute, TelegramConfig } from '../types';
import { flightRoutes } from '../data/flightRoutes';

const tarmacImg = new URL('../assets/images/tarmac_sunset_view_1785798997003.jpg', import.meta.url).href;

interface DestinationsProps {
  telegramConfig: TelegramConfig;
  onSelectDestinationForQuote: (title: string) => void;
}

type CategoryFilter = 'todos' | 'nacionales' | 'internacionales';

export default function Destinations({ telegramConfig, onSelectDestinationForQuote }: DestinationsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [selectedRoute, setSelectedRoute] = useState<FlightRoute | null>(null);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'todos', label: 'Todas las Rutas' },
    { value: 'nacionales', label: '🇨🇴 Rutas Nacionales (Medellín, Bogotá, Cali, San Andrés)' },
    { value: 'internacionales', label: '🌐 Rutas Internacionales (Madrid, París)' },
  ];

  const filteredRoutes = flightRoutes.filter(route => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'nacionales') return route.category === 'nacional' || route.routeScope === 'Nacional';
    if (activeCategory === 'internacionales') return route.category !== 'nacional' || route.routeScope === 'Internacional';
    return route.category === activeCategory;
  });

  const getTelegramInquiryUrl = (destName: string) => {
    const text = encodeURIComponent(
      `¡Hola Travel US! ✈️ Quisiera consultar la tarifa aérea para la ruta hacia *${destName}*. ¿Me podrían cotizar opciones? 👍`
    );
    return `https://t.me/${telegramConfig.channelUsername}?text=${text}`;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="destinations-section">
      {/* Background tarmac photo backdrop */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.06] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url(${tarmacImg})` 
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-widest text-brand-gold uppercase block mb-3">
            Rutas Nacionales e Internacionales Auditadas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy" id="destinations-title">
            Destinos Destacados Travel US
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto my-4 rounded-full" />
          <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            Explora las rutas más cotizadas. Planificadas y auditadas por un piloto comercial activo para asegurar escalas cómodas, aerolíneas seguras y tiempos de vuelo óptimos.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-gray-100" id="destinations-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-brand-beige text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="destinations-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredRoutes.map((route) => (
              <motion.div
                key={route.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
                id={`route-card-${route.id}`}
              >
                {/* Card Image Header with Airport code */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={route.image}
                    alt={route.destination}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Airport code badge */}
                  <div className="absolute top-4 left-4 bg-brand-navy text-white px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-widest flex items-center gap-1.5 border border-white/10 shadow-lg">
                    <PlaneTakeoff className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                    {route.airportCode}
                  </div>

                  {/* Flight type badge (Directo / 1 Escala) */}
                  <div className="absolute top-4 right-4 bg-brand-gold text-brand-navy px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {route.flightType}
                  </div>

                  {/* Flight Duration */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    {route.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-bold uppercase text-brand-gold tracking-widest">
                        Ruta {route.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                        <span className="text-xs font-bold text-brand-navy">{route.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {route.destination}, <span className="text-gray-400 font-light text-base">{route.country}</span>
                    </h3>

                    <p className="text-gray-500 font-sans text-xs leading-relaxed mb-4 line-clamp-3">
                      {route.description}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-wider">Disponibilidad</span>
                      <span className="text-sm font-display font-extrabold text-brand-navy flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Cotización en vivo</span>
                      </span>
                    </div>

                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setSelectedRoute(route)}
                        className="px-2.5 py-2 text-xs font-semibold border border-brand-navy text-brand-navy rounded-lg hover:bg-brand-navy hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        Info Ruta
                      </button>
                      <a
                        href={getTelegramInquiryUrl(route.destination)}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="px-3.5 py-2 text-xs font-black bg-brand-gold hover:bg-brand-gold-hover text-brand-navy rounded-lg transition-all duration-300 flex items-center gap-1.5 shadow-md hover:shadow-brand-gold/30 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
                      >
                        <Send className="w-3.5 h-3.5 shrink-0" />
                        <span>Cotizar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal/Drawer overlay */}
        <AnimatePresence>
          {selectedRoute && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRoute(null)}
                className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              >
                {/* Modal close */}
                <button
                  onClick={() => setSelectedRoute(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Banner */}
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={selectedRoute.image}
                    alt={selectedRoute.destination}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs bg-brand-gold text-brand-navy font-bold tracking-widest uppercase px-2.5 py-1 rounded mb-2 inline-block font-mono">
                      {selectedRoute.airportCode} | {selectedRoute.flightType}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-extrabold leading-tight">
                      Vuelo a {selectedRoute.destination}, <span className="font-light text-xl md:text-2xl">{selectedRoute.country}</span>
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-8 overflow-y-auto flex-grow font-sans">
                  
                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">
                    Acerca de esta Ruta Aérea
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {selectedRoute.description}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-3 border-b border-gray-100 pb-1.5">
                    Especificaciones y Garantías de Vuelo
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                    {selectedRoute.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Partner airlines */}
                  <div className="mb-8 p-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Aerolíneas Disponibles para esta ruta</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedRoute.airlines.map((airline, idx) => (
                        <span key={idx} className="bg-brand-navy/5 text-brand-navy text-[11px] px-2.5 py-1 rounded font-semibold border border-brand-navy/10">
                          ✈️ {airline}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking Section inside Modal */}
                  <div className="p-5 rounded-xl bg-brand-beige border border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wide">Cotización Inmediata</span>
                      <div className="text-lg font-display font-bold text-brand-navy">
                        Tarifa Personalizada Directa <span className="text-xs font-mono font-normal text-gray-500">vía Telegram</span>
                      </div>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <a
                        href={getTelegramInquiryUrl(selectedRoute.destination)}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex-1 sm:flex-none px-6 py-3.5 text-xs font-black bg-brand-gold hover:bg-brand-gold-hover text-brand-navy rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
                      >
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Cotizar {selectedRoute.destination} por Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
