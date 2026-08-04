import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const nightCityAerialImg = new URL('../assets/images/night_city_aerial_1785798983956.jpg', import.meta.url).href;
import { 
  Send, 
  CheckCheck, 
  Star, 
  Sparkles, 
  X,
  Check,
  ChevronLeft,
  ChevronRight,
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

  // Carousel ref for horizontal scrolling
  const carouselRef = useRef<HTMLDivElement | null>(null);

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
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>INTERFAZ TELEGRAM REAL EN TIEMPO REAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight"
          >
            Chats y Tiquetes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-brand-gold">
              Emitidos Directo por Telegram
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto"
          >
            Nuestros pasajeros conversan directamente con el Capitán Brayan. Mira los e-tickets oficiales, mapas de asientos, fotos de vuelo y notas de voz reales.
          </motion.p>
        </div>

        {/* HORIZONTAL CAROUSEL OF HYPERREALISTIC TELEGRAM CHAT CARDS */}
        <div className="mb-10 relative group">
          {/* Section subtitle & navigation buttons */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-xs sm:text-sm font-bold text-sky-200 uppercase tracking-wider">
                Desliza para ver todos los chats reales en vivo ({reviewsList.length})
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

          {/* Scrollable Container */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-sky-500/30 scrollbar-track-transparent select-none scroll-smooth"
          >
            {reviewsList.map((chat) => {
              const isSelected = chat.id === selectedChatId;
              const customerFirstMsg = chat.messages.find(m => m.sender === 'customer') || chat.messages[0];
              const agentFirstMsg = chat.messages.find(m => m.sender === 'agent');
              const lastPhotoMsg = chat.messages.find(m => m.imageAttachment);

              return (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChatId(chat.id)}
                  className={`w-[310px] sm:w-[350px] shrink-0 snap-start bg-[#17212b] border rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group/card ${
                    isSelected
                      ? 'border-sky-400 ring-2 ring-sky-400/30 scale-[1.02]'
                      : 'border-white/10 hover:border-sky-400/50 hover:bg-[#1f2c38]'
                  }`}
                >
                  {/* Card Header (Telegram Phone Header Style) */}
                  <div className="bg-[#101721] p-3.5 border-b border-black/30 flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <img
                          src={chat.customerAvatar}
                          alt={chat.customerName}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-sky-400/40"
                        />
                        {chat.isOnline && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#101721] rounded-full" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-xs text-white truncate flex items-center gap-1.5">
                          <span>{chat.customerName}</span>
                          <span className="text-[10px] text-sky-300 font-mono font-normal truncate">{chat.customerHandle}</span>
                        </h4>
                        <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 truncate">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>E-Ticket Emitido • {chat.routeTitle}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                      {Array.from({ length: chat.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Card Body (Chat Preview Bubble Window) */}
                  <div 
                    className="p-3.5 space-y-2.5 flex-grow bg-[#0e1621] relative min-h-[220px]"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)`,
                      backgroundSize: '16px 16px'
                    }}
                  >
                    {/* Customer Question Bubble */}
                    <div className="bg-[#182533] p-2.5 rounded-xl rounded-tl-xs border border-white/5 text-[11px] text-gray-200 leading-snug">
                      <p className="font-bold text-amber-400 text-[10px] mb-0.5">{chat.customerName}</p>
                      <p className="line-clamp-2">{customerFirstMsg.text}</p>
                      <span className="text-[9px] text-gray-400 block text-right mt-1">{customerFirstMsg.time}</span>
                    </div>

                    {/* Photo preview if available */}
                    {lastPhotoMsg?.imageAttachment && (
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalImage({
                            url: lastPhotoMsg.imageAttachment!,
                            caption: lastPhotoMsg.imageCaption,
                            title: `E-ticket - ${chat.customerName}`
                          });
                        }}
                        className="rounded-lg overflow-hidden border border-sky-400/30 relative h-28 group-hover/card:scale-[1.01] transition-transform cursor-pointer"
                      >
                        <img
                          src={lastPhotoMsg.imageAttachment}
                          alt="Vuelo adjunto"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[10px] font-bold text-white truncate drop-shadow">
                            📸 {lastPhotoMsg.imageCaption || 'Adjunto oficial'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Agent Response Bubble */}
                    {agentFirstMsg && (
                      <div className="bg-[#2b5278] p-2.5 rounded-xl rounded-tr-xs border border-sky-400/20 text-[11px] text-white leading-snug ml-3">
                        <p className="font-bold text-sky-300 text-[10px] mb-0.5">Capitán Brayan 👨‍✈️</p>
                        <p className="line-clamp-2">{agentFirstMsg.text}</p>
                        
                        {agentFirstMsg.flightBadge && (
                          <div className="mt-1.5 p-1 bg-black/30 rounded border-l-2 border-amber-400 text-[10px] font-bold text-amber-300 truncate">
                            {agentFirstMsg.flightBadge}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between mt-1 text-[9px] text-sky-200/80">
                          <span className="text-emerald-300 font-bold">✓ PNR Amadeus</span>
                          <span className="flex items-center gap-0.5">
                            {agentFirstMsg.time} <CheckCheck className="w-3 h-3 text-sky-300" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-3 bg-[#17212b] border-t border-black/30 flex items-center justify-between">
                    <span className="text-[10px] text-sky-300 font-mono">
                      {chat.messages.length} mensajes • {chat.date.split(',')[0]}
                    </span>
                    
                    <a
                      href={getTelegramUrl()}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer bg-sky-500/20 text-sky-300 hover:bg-sky-500 hover:text-white"
                    >
                      <span>Cotizar en Telegram</span>
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
                  alt={activeModalImage.caption || 'Imagen Telegram'}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>

              {activeModalImage.caption && (
                <div className="p-4 bg-[#17212b] border-t border-white/10 text-xs text-gray-200 text-center font-medium">
                  {activeModalImage.caption}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
