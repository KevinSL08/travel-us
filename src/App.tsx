import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Send, Menu, X, ArrowUp } from 'lucide-react';
import { TelegramConfig } from './types';

// Component imports
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import TelegramReviews from './components/TelegramReviews';
import Footer from './components/Footer';

export default function App() {
  // Read Telegram configuration from localStorage, fallback to official Travelusagencia
  const [telegramConfig, setTelegramConfig] = useState<TelegramConfig>(() => {
    const saved = localStorage.getItem('travelus_telegram_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.channelUsername || parsed.channelUsername === 'TravelUSFlights') {
          parsed.channelUsername = 'Travelusagencia';
        }
        return parsed;
      } catch (e) {
        // ignore
      }
    }
    return {
      channelUsername: 'Travelusagencia',
      isChannel: false,
      customGreetingMessage: '¡Hola! Me gustaría cotizar un vuelo internacional con Travel US.'
    };
  });

  const [preselectedDestination, setPreselectedDestination] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Save config when changed
  const handleUpdateConfig = (newConfig: TelegramConfig) => {
    setTelegramConfig(newConfig);
    localStorage.setItem('travelus_telegram_config', JSON.stringify(newConfig));
  };

  // Pre-select a package in the form and scroll down to the quote section
  const handleSelectDestinationForQuote = (title: string) => {
    setPreselectedDestination(title);
    const element = document.getElementById('quote-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll handler for navbar and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTelegramUrl = () => {
    return `https://t.me/${telegramConfig.channelUsername}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col selection:bg-brand-gold selection:text-brand-navy">
      
      {/* Sticky Premium Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
          scrolled
            ? 'bg-brand-navy/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
            : 'bg-transparent py-6'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with Plane */}
          <div 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-white cursor-pointer select-none group"
            id="header-logo"
          >
            <Plane className="w-6 h-6 text-brand-gold group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-display font-extrabold text-lg tracking-wider uppercase">
              Travel <span className="text-brand-gold">US</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-gray-200">
            <button
              onClick={() => handleScrollToSection('features-section')}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Garantías
            </button>
            <button
              onClick={() => handleScrollToSection('destinations-section')}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Rutas
            </button>
            <button
              onClick={() => handleScrollToSection('reviews-section')}
              className="hover:text-brand-gold transition-colors cursor-pointer"
            >
              Clientes Satisfechos
            </button>
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getTelegramUrl()}
              target="_blank"
              referrerPolicy="no-referrer"
              className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-black text-xs rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider group"
              id="header-cta-telegram"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <Send className="w-3.5 h-3.5 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
              <span>Cotizar en Telegram</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-brand-gold transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            id="btn-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[68px] z-30 bg-brand-navy text-white flex flex-col p-6 space-y-6 md:hidden font-sans border-t border-white/5"
            id="mobile-nav-drawer"
          >
            <button
              onClick={() => handleScrollToSection('features-section')}
              className="text-left text-lg font-display font-medium py-2 border-b border-white/5 hover:text-brand-gold transition-colors"
            >
              Nuestras Garantías
            </button>
            <button
              onClick={() => handleScrollToSection('destinations-section')}
              className="text-left text-lg font-display font-medium py-2 border-b border-white/5 hover:text-brand-gold transition-colors"
            >
              Rutas Destacadas
            </button>
            <button
              onClick={() => handleScrollToSection('reviews-section')}
              className="text-left text-lg font-display font-medium py-2 border-b border-white/5 hover:text-brand-gold transition-colors"
            >
              Clientes Satisfechos
            </button>

            <div className="pt-6">
              <a
                href={getTelegramUrl()}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-center rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md uppercase text-xs tracking-wider"
              >
                <Send className="w-4 h-4 shrink-0" />
                Unirme al Canal de Telegram
              </a>
              <p className="text-[10px] text-center text-gray-500 mt-4 leading-normal">
                Conéctate con expertos en aviación para cotizar tus tiquetes aéreos de inmediato.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* 1. Hero banner */}
        <Hero
          telegramConfig={telegramConfig}
          onExploreClick={() => handleScrollToSection('destinations-section')}
          onPlanClick={() => handleScrollToSection('reviews-section')}
        />

        {/* 2. Visual Benefits & Processes */}
        <Features />

        {/* 3. Catalog / Destinations Selection */}
        <Destinations
          telegramConfig={telegramConfig}
          onSelectDestinationForQuote={handleSelectDestinationForQuote}
        />

        {/* 4. Animated Telegram Chat Reviews Section */}
        <TelegramReviews telegramConfig={telegramConfig} />

      </main>

      {/* 7. Footer section */}
      <Footer telegramConfig={telegramConfig} />

      {/* Floating Interactive Widget: Sticky Chat & Scroll-to-Top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3" id="floating-interactive-actions">
        
        {/* Floating Quick Telegram Chat Badge with Tooltip */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2"
        >
          <a
            href={getTelegramUrl()}
            target="_blank"
            referrerPolicy="no-referrer"
            className="hidden sm:flex items-center gap-2 bg-[#17212b]/95 text-white font-sans text-xs px-3.5 py-2 rounded-full border border-sky-400/30 shadow-2xl backdrop-blur-md group hover:border-sky-400 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">¿Cotizar tu vuelo?</span>
            <span className="text-sky-300 font-bold group-hover:underline">Chat directo →</span>
          </a>

          <a
            href={getTelegramUrl()}
            target="_blank"
            referrerPolicy="no-referrer"
            className="p-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-2xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer group relative"
            title="Cotizar Vuelo por Telegram"
            id="floating-telegram-badge"
          >
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-brand-navy rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-brand-navy rounded-full" />
            <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="p-3 bg-brand-navy hover:bg-brand-navy/90 text-brand-gold rounded-full shadow-lg border border-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center cursor-pointer"
              title="Volver arriba"
              id="floating-scroll-top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
