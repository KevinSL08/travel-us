import { motion } from 'motion/react';
import { Send, Plane, ArrowDown } from 'lucide-react';
import { TelegramConfig } from '../types';

const pilotHeroImg = new URL('../assets/images/hero_pilot_outside_plane_1785295229002.jpg', import.meta.url).href;

interface HeroProps {
  telegramConfig: TelegramConfig;
  onExploreClick: () => void;
  onPlanClick: () => void;
}

export default function Hero({ telegramConfig, onExploreClick, onPlanClick }: HeroProps) {
  const getTelegramUrl = () => {
    return `https://t.me/${telegramConfig.channelUsername}`;
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Pilot Selfie / Outside Airplane Image with elegant dark overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
        style={{ 
          backgroundImage: `url(${pilotHeroImg})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/75 via-brand-navy/65 to-brand-navy/95 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white select-none">
        
        {/* Badge detailing pilot founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          id="hero-badge"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-brand-beige flex items-center gap-1.5">
            👨‍✈️ LIDERADA POR UN PILOTO COMERCIAL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight"
          id="hero-title"
        >
          Tus Tiquetes Aéreos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-yellow-500">
            Con Altura de Piloto
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 font-sans max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in"
          id="hero-subtitle"
        >
          En <strong>Travel US</strong> garantizamos la tarifa aérea óptima, rutas eficientes y el soporte técnico que solo un piloto de aerolínea conoce. Cotiza al instante vía Telegram.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          id="hero-actions"
        >
          <a
            href={getTelegramUrl()}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-display font-extrabold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer text-xs sm:text-sm tracking-wider uppercase border border-amber-300/40"
            id="btn-telegram-hero"
          >
            <Send className="w-4 h-4 text-brand-navy group-hover:rotate-12 transition-transform duration-300 shrink-0" />
            <span>Cotizar Vuelo por Telegram</span>
            <span className="text-[10px] bg-brand-navy text-brand-gold font-mono px-2 py-0.5 rounded-full lowercase tracking-normal font-bold">
              &lt; 5 min
            </span>
          </a>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-display font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-xs sm:text-sm tracking-wide"
            id="btn-explore"
          >
            <Plane className="w-4 h-4 text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            Explorar Rutas
          </button>
        </motion.div>

        {/* Indicator to scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          onClick={onExploreClick}
          id="hero-scroll-indicator"
        >
          <span className="text-[10px] tracking-widest uppercase text-gray-400 font-light">Despegar</span>
          <ArrowDown className="w-4 h-4 text-brand-gold animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
