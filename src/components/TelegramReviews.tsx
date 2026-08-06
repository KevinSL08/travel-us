import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const nightCityAerialImg = new URL('../assets/images/night_city_aerial_1785798983956.jpg', import.meta.url).href;
import { 
  Send, 
  CheckCheck, 
  Sparkles, 
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Image as ImageIcon
} from 'lucide-react';
import { TelegramConfig, TelegramReview } from '../types';
import { telegramReviews as initialReviews } from '../data/telegramReviews';

interface TelegramReviewsProps {
  telegramConfig: TelegramConfig;
}

export default function TelegramReviews({ telegramConfig }: TelegramReviewsProps) {
  const [reviewsList, setReviewsList] = useState<TelegramReview[]>(initialReviews);
  const [selectedChatId, setSelectedChatId] = useState<string>(initialReviews[0].id);
  // Modal Lightbox for images
  const [activeModalImage, setActiveModalImage] = useState<{ url: string; caption?: string; title?: string } | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Carousel ref for horizontal scrolling
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Continuous smooth auto-scroll effect
  React.useEffect(() => {
    let animationFrameId: number;

    const scroll = () => {
      if (carouselRef.current && !isPaused) {
        const container = carouselRef.current;
        container.scrollLeft += 0.8; // Smooth pixel movement per frame

        // When scrolled halfway through the duplicated array, loop back seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };



  const getTelegramUrl = (customText?: string) => {
    const text = customText 
      ? encodeURIComponent(customText)
      : encodeURIComponent(telegramConfig.customGreetingMessage || '¡Hola Capitán Brayan! Vengo desde la web y quiero cotizar un vuelo.');
    return `https://t.me/${telegramConfig.channelUsername}?text=${text}`;
  };

  return (
    <section className="py-20 bg-[#080d14] relative overflow-hidden text-white font-sans select-none" id="reviews-section">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-[#080d14] to-[#04070a] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight"
          >
            Clientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-brand-gold">Satisfechos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto"
          >
            Conoce a nuestros clientes en sus viajes alrededor del mundo. Descubre cómo disfrutan de itinerarios seguros.
          </motion.p>
        </div>

        {/* HORIZONTAL CAROUSEL OF HYPERREALISTIC TELEGRAM CHAT CARDS */}
        <div className="mb-10 relative group">
          {/* Section subtitle & navigation buttons */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-xs sm:text-sm font-bold text-sky-200 uppercase tracking-wider">
                Desliza para conocer las experiencias de nuestros viajeros
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="p-2 rounded-xl bg-[#17212b] border border-sky-400/30 text-gray-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 transition-all cursor-pointer shadow-lg active:scale-95"
                title="Deslizar izquierda"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="p-2 rounded-xl bg-[#17212b] border border-sky-400/30 text-gray-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-400 transition-all cursor-pointer shadow-lg active:scale-95"
                title="Deslizar derecha"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Container with Continuous Auto-slide & Pause on Hover */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-sky-500/30 scrollbar-track-transparent select-none"
          >
            {[...reviewsList, ...reviewsList].map((chat, idx) => {
              const isSelected = chat.id === selectedChatId;
              const displayPhoto = chat.photoUrl || chat.messages.find(m => m.imageAttachment)?.imageAttachment;
              const locationTitle = chat.locationHeader || chat.locationSubtitle || chat.routeTitle;

              return (
                <div
                  key={`${chat.id}-${idx}`}
                  onClick={() => setSelectedChatId(chat.id)}
                  className={`w-[320px] sm:w-[360px] shrink-0 bg-[#17212b] border rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group/card ${
                    isSelected
                      ? 'border-brand-gold ring-2 ring-brand-gold/30 scale-[1.02]'
                      : 'border-white/10 hover:border-brand-gold/50 hover:bg-[#1f2c38]'
                  }`}
                >
                  {/* Location Header - Prominent Country / City Title */}
                  <div className="bg-gradient-to-r from-[#101721] via-[#15202d] to-[#101721] p-3.5 border-b border-black/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-brand-gold/20 border border-brand-gold/40 text-brand-gold shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-display font-black text-sm text-white tracking-wide truncate">
                          {locationTitle}
                        </h4>
                        {chat.locationSubtitle && (
                          <p className="text-[11px] text-brand-gold/90 font-medium truncate">{chat.locationSubtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Client Travel Photo Container */}
                  <div className="relative bg-[#0e1621]">
                    {displayPhoto ? (
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalImage({
                            url: displayPhoto,
                            title: `${locationTitle} - ${chat.customerName}`
                          });
                        }}
                        className="relative h-64 sm:h-72 overflow-hidden group/photo cursor-pointer"
                      >
                        <img
                          src={displayPhoto}
                          alt={locationTitle}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-[#0e1621] p-4 flex items-center justify-center text-gray-400 text-xs">
                        Fotos del viaje
                      </div>
                    )}
                  </div>

                  {/* Card Footer Action */}
                  <div className="p-3 bg-[#101721] border-t border-black/30 flex items-center justify-center">
                    <a
                      href={getTelegramUrl(`¡Hola Capitán Brayan! Vi la foto de ${locationTitle} y me gustaría cotizar un viaje similar.`)}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-brand-gold text-brand-navy hover:bg-amber-300 shadow-md w-full max-w-[220px]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Cotizar destino</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HIGH IMPACT TELEGRAM CALL TO ACTION BANNER WITH HIGH RES NIGHT CITY AERIAL BACKDROP */}
        <div className="mt-14 text-center bg-[#142234] border border-sky-400/30 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden group">
          
          {/* Background image backdrop */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url(${nightCityAerialImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#142234]/85 via-[#142234]/90 to-[#0f1926]/95 z-0" />

          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-500/30 transition-all duration-700" />
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl group-hover:bg-brand-gold/30 transition-all duration-700" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-4 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              <span>DESPACHO DIRECTO DE TIQUETES Y TARIFAS CORPORATIVAS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-4 drop-shadow-md">
              ¿Te gustaría obtener los tiquetes Aéreos más económicos del mercado?
            </h3>
            
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-200 font-medium">
              <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">✓ Sin intermediarios</span>
              <span className="hidden sm:inline">•</span>
              <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">✓ Tarifas consolidadas</span>
              <span className="hidden sm:inline">•</span>
              <span className="bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">✓ Asesoría 100% gratuita</span>
            </div>

            <a
              href={getTelegramUrl()}
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-display font-black rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all cursor-pointer group/btn"
              id="btn-reviews-cta"
            >
              <Send className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>Hablar con el Capitán por Telegram (@{telegramConfig.channelUsername})</span>
            </a>
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL FOR TELEGRAM ATTACHMENT PHOTOS */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#17212b] border border-sky-400/30 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
            >
              <div className="p-4 bg-[#0e1621] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-sky-400" />
                  <span className="font-bold text-sm text-white">{activeModalImage.title || 'Adjunto Telegram'}</span>
                </div>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-2 bg-black flex items-center justify-center min-h-[300px]">
                <img
                  src={activeModalImage.url}
                  alt={activeModalImage.title || 'Imagen Telegram'}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
