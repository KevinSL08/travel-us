import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  CheckCheck, 
  Star, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  LayoutGrid, 
  RotateCw, 
  Plane, 
  Award,
  Phone,
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  ArrowLeft,
  Sparkles,
  Clock
} from 'lucide-react';
import { TelegramConfig } from '../types';
import { telegramReviews } from '../data/telegramReviews';

interface TelegramReviewsProps {
  telegramConfig: TelegramConfig;
}

export default function TelegramReviews({ telegramConfig }: TelegramReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalReviews = telegramReviews.length;

  // Handle auto-rotation
  useEffect(() => {
    if (isPlaying && viewMode === 'carousel') {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalReviews);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, viewMode, totalReviews]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const getTelegramUrl = (customText?: string) => {
    const text = customText 
      ? encodeURIComponent(customText)
      : encodeURIComponent(telegramConfig.customGreetingMessage || '¡Hola! Me gustaría cotizar un vuelo.');
    return `https://t.me/${telegramConfig.channelUsername}?text=${text}`;
  };

  const activeReview = telegramReviews[currentIndex];

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden text-white select-none" id="reviews-section">
      {/* Background subtle atmospheric radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-brand-navy to-[#080d14] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>TESTIMONIOS EN TIEMPO REAL VÍA TELEGRAM</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight"
            id="reviews-title"
          >
            Así Cotizan y Compran <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-amber-300 to-brand-gold">
              Nuestros Pasajeros en Telegram
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed max-w-2xl mx-auto"
          >
            Sin formularios extensos ni esperas. Atención personalizada de piloto comercial con emisión instantánea de tiquetes.
          </motion.p>

          {/* Controls bar: Carousel vs Grid mode toggle + Auto-play toggle */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8" id="reviews-mode-toggle">
            <div className="bg-[#17212b]/90 p-1 rounded-xl border border-white/10 inline-flex shadow-lg backdrop-blur-md">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-brand-gold text-brand-navy shadow-md'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${viewMode === 'carousel' && isPlaying ? 'animate-spin' : ''}`} />
                Modo Chat Interactivo
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-brand-gold text-brand-navy shadow-md'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Mosaico ({totalReviews} Casos)
              </button>
            </div>

            {viewMode === 'carousel' && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs text-gray-200 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title={isPlaying ? 'Pausar rotación' : 'Reanudar rotación'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Girar</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* MODE 1: Animated Rotator (Authentic Telegram Chat Interface) */}
        {viewMode === 'carousel' && (
          <div className="max-w-3xl mx-auto" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
            
            <div className="relative min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview.id}
                  initial={{ opacity: 0, scale: 0.97, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-[#0e1621] border border-sky-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col font-sans border-t-2 border-t-sky-400"
                  id={`review-card-${activeReview.id}`}
                >
                  {/* REAL TELEGRAM TOP APP HEADER */}
                  <div className="bg-[#17212b] px-4 sm:px-6 py-3.5 border-b border-black/40 flex items-center justify-between shadow-md">
                    
                    {/* Left: Avatar + Real Telegram Contact Info */}
                    <div className="flex items-center gap-3">
                      <ArrowLeft className="w-5 h-5 text-gray-400 hidden sm:block cursor-pointer hover:text-white transition-colors" />
                      
                      <div className="relative">
                        <img
                          src={activeReview.customerAvatar}
                          alt={activeReview.customerName}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-sky-400/40 shadow-md"
                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#17212b] rounded-full" />
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-display font-bold text-sm text-white tracking-wide">
                            {activeReview.customerName}
                          </h4>
                          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                            Vuelo Emitido ✓
                          </span>
                        </div>
                        <p className="text-[11px] text-sky-300 font-sans flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>en línea • Cotizando {activeReview.routeTitle}</span>
                        </p>
                      </div>
                    </div>

                    {/* Right: Telegram Actions Icons */}
                    <div className="flex items-center gap-3 text-gray-400">
                      <div className="hidden sm:flex text-amber-400 items-center mr-2">
                        {Array.from({ length: activeReview.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                      <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                      <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* TELEGRAM CHAT CANVAS (WALLPAPER WITH PATTERN) */}
                  <div 
                    className="p-4 sm:p-6 space-y-4 flex-grow bg-[#0e1621] text-xs font-sans relative overflow-y-auto max-h-[460px]"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 1.2px, transparent 0)`,
                      backgroundSize: '18px 18px'
                    }}
                  >
                    {/* Floating Date Badge inside Telegram */}
                    <div className="text-center my-2">
                      <span className="bg-[#17212b]/90 backdrop-blur-md text-sky-200 text-[10px] px-3.5 py-1 rounded-full border border-sky-400/20 font-medium shadow-md">
                        📅 {activeReview.date} • Chat verificado por Telegram
                      </span>
                    </div>

                    {activeReview.messages.map((msg, idx) => {
                      const isAgent = msg.sender === 'agent';
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.1 }}
                          className={`flex flex-col ${isAgent ? 'items-end' : 'items-start'} mb-1`}
                        >
                          {/* Message Bubble with Telegram authentic styling */}
                          <div
                            className={`max-w-[88%] sm:max-w-[78%] p-3 rounded-2xl relative shadow-md text-xs sm:text-sm leading-relaxed ${
                              isAgent
                                ? 'bg-[#2b5278] text-white rounded-tr-xs'
                                : 'bg-[#182533] text-gray-100 rounded-tl-xs'
                            }`}
                          >
                            {/* Flight Ticket Quote Card (Telegram Quote Style) */}
                            {msg.flightBadge && (
                              <div className="mb-2 p-2.5 rounded-r-lg bg-black/25 border-l-4 border-amber-400 text-xs text-amber-100 flex items-center justify-between gap-2">
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                                    <Plane className="w-3 h-3 text-amber-400" />
                                    <span>Cotización Oficial Travel US</span>
                                  </div>
                                  <p className="font-semibold text-white text-xs">{msg.flightBadge}</p>
                                </div>
                                <span className="text-[9px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-400/30 shrink-0">
                                  CONFIRMADO
                                </span>
                              </div>
                            )}

                            {/* Voice Note Attachment UI (Authentic Telegram Audio Player) */}
                            {msg.attachmentType === 'voice' && (
                              <div className="mb-2.5 p-2 rounded-xl bg-black/20 flex items-center gap-3">
                                <button className="w-9 h-9 rounded-full bg-[#5288c1] text-white flex items-center justify-center shrink-0 shadow hover:scale-105 transition-transform">
                                  <Play className="w-4 h-4 ml-0.5 fill-white" />
                                </button>
                                <div className="flex-grow">
                                  <div className="flex items-center gap-1 h-4 px-1">
                                    <span className="w-1 bg-sky-300 h-3 rounded-full animate-pulse" />
                                    <span className="w-1 bg-sky-200 h-2 rounded-full" />
                                    <span className="w-1 bg-sky-300 h-4 rounded-full animate-pulse" />
                                    <span className="w-1 bg-sky-200 h-1.5 rounded-full" />
                                    <span className="w-1 bg-sky-300 h-3 rounded-full" />
                                    <span className="w-1 bg-sky-200 h-2.5 rounded-full animate-pulse" />
                                    <span className="w-1 bg-sky-300 h-4 rounded-full" />
                                    <span className="w-1 bg-sky-200 h-2 rounded-full" />
                                    <span className="w-1 bg-sky-300 h-3 rounded-full" />
                                    <span className="w-1 bg-sky-200 h-1 rounded-full" />
                                    <span className="w-1 bg-sky-300 h-2.5 rounded-full" />
                                  </div>
                                  <div className="flex justify-between text-[10px] text-sky-200/90 font-mono mt-0.5 px-1">
                                    <span>Mensaje de voz</span>
                                    <span>{msg.audioDuration || '0:28'}</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Document Attachment UI (Telegram File Style) */}
                            {msg.attachmentType === 'ticket' && (
                              <div className="mb-2 p-2.5 rounded-xl bg-black/25 flex items-center justify-between gap-3 border border-white/5">
                                <div className="flex items-center gap-2.5 overflow-hidden">
                                  <div className="w-9 h-9 rounded-lg bg-[#5288c1]/30 text-sky-300 flex items-center justify-center shrink-0">
                                    <Paperclip className="w-4 h-4" />
                                  </div>
                                  <div className="truncate">
                                    <p className="font-semibold text-white text-xs truncate">{msg.attachmentTitle || 'E-Ticket_Confirmado_TravelUS.pdf'}</p>
                                    <p className="text-[10px] text-gray-300/80">340 KB • Documento PDF</p>
                                  </div>
                                </div>
                                <span className="text-[9px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-1 rounded border border-emerald-500/30 shrink-0 uppercase">
                                  Verificado
                                </span>
                              </div>
                            )}

                            {/* Text Message */}
                            <p className="font-sans font-normal text-gray-100 text-xs sm:text-sm leading-relaxed">{msg.text}</p>

                            {/* Timestamp & Telegram double checkmark (Only agent outgoing gets checkmarks) */}
                            <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-sky-200/70 select-none">
                              <span>{msg.time}</span>
                              {isAgent && (
                                <CheckCheck className="w-3.5 h-3.5 text-sky-300 fill-sky-300/20" />
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Simulated typing indicator */}
                    <div className="flex items-center gap-2 text-[11px] text-sky-300/80 pt-2 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Despacho Travel US en línea... (Respuesta promedio &lt; 3 min por Telegram)</span>
                    </div>
                  </div>

                  {/* TELEGRAM REALISTIC BOTTOM INPUT PROMPT BAR */}
                  <div className="bg-[#17212b] p-3 border-t border-black/40 flex items-center gap-2">
                    <Paperclip className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors ml-1" />
                    
                    <a
                      href={getTelegramUrl(`Hola, me interesó la cotización de ${activeReview.routeTitle}`)}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex-grow bg-[#0e1621] hover:bg-[#121c2a] border border-white/10 rounded-full px-4 py-2.5 text-xs text-gray-300 flex items-center justify-between transition-colors cursor-pointer group"
                    >
                      <span className="text-gray-400 group-hover:text-white font-sans">
                        💬 Escribe tu ruta o cotiza igual a {activeReview.customerName}...
                      </span>
                      <Smile className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
                    </a>

                    <a
                      href={getTelegramUrl(`Hola, quiero cotizar un vuelo como el de ${activeReview.customerName}`)}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="p-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-transform active:scale-95 shadow-md flex items-center justify-center shrink-0 cursor-pointer"
                      title="Abrir Telegram"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="bg-[#121b26] px-6 py-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                      Atención directa por Piloto Comercial sin intermediarios
                    </span>
                    <span className="text-sky-400 font-semibold flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-sky-400" /> Respuesta &lt; 5 min
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rotator Controls & Navigation */}
            <div className="flex items-center justify-between mt-6 px-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10"
                aria-label="Anterior conversación"
                id="btn-prev-review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {telegramReviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentIndex ? 'w-8 bg-brand-gold' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir a conversación ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10"
                aria-label="Siguiente conversación"
                id="btn-next-review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        )}

        {/* MODE 2: Grid View (Mosaico Completo de Chats Telegram) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="reviews-grid">
            {telegramReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#0e1621] border border-white/10 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 group"
              >
                {/* Telegram Card Header */}
                <div className="bg-[#17212b] p-3.5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.customerAvatar}
                      alt={rev.customerName}
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 rounded-full object-cover border border-sky-400/30"
                    />
                    <div>
                      <h4 className="font-display font-bold text-xs text-white">{rev.customerName}</h4>
                      <p className="text-[10px] text-emerald-400 font-sans flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Vuelo Confirmado
                      </p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Body snippet */}
                <div className="p-4 bg-[#0e1621] space-y-3 flex-grow text-xs font-sans">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block bg-black/30 p-1.5 rounded border border-white/5">
                    📍 {rev.routeTitle}
                  </span>
                  
                  {rev.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl ${
                        msg.sender === 'agent'
                          ? 'bg-[#2b5278] text-white ml-auto max-w-[92%] rounded-tr-xs'
                          : 'bg-[#182533] text-gray-200 max-w-[92%] rounded-tl-xs'
                      }`}
                    >
                      <p className="text-[11px] font-light leading-relaxed">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 text-[9px] text-sky-200/80 mt-1">
                        <span>{msg.time}</span>
                        <CheckCheck className="w-3 h-3 text-sky-300" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="bg-[#17212b] px-4 py-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400 text-[10px]">{rev.date}</span>
                  <a
                    href={getTelegramUrl(`Hola, vi la experiencia de ${rev.customerName} y quiero cotizar mi vuelo.`)}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-sky-400 font-bold hover:text-brand-gold flex items-center gap-1 transition-colors"
                  >
                    Cotizar mi Vuelo <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* HIGH IMPACT TELEGRAM CALL-TO-ACTION BANNER */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#142234] via-[#1c2e47] to-[#142234] border border-sky-400/30 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto backdrop-blur-md shadow-2xl relative overflow-hidden group">
          
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-700" />
          <div className="absolute -left-10 -top-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all duration-700" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              <span>DESPACHO ACTIVO DE TIQUETES AÉREOS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-3">
              ¿Quieres Cotizar Tu Vuelo en Menos de 5 Minutos?
            </h3>
            
            <p className="text-gray-300 font-sans text-xs sm:text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Habla directamente con nuestro Capitán por Telegram. Te enviamos las mejores tarifas de aerolínea, horarios óptimos y consejos de cabina sin ningún compromiso.
            </p>

            <a
              href={getTelegramUrl()}
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-display font-black rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all cursor-pointer group/btn"
              id="btn-reviews-cta"
            >
              <Send className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>Hablar con el Capitán por Telegram</span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-400 font-medium">
              <span>✓ Sin intermediarios</span>
              <span>•</span>
              <span>✓ Tarifas consolidadas</span>
              <span>•</span>
              <span>✓ Asesoría 100% gratuita</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
