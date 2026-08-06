import { Send, MapPin, Phone, Plane, ShieldCheck } from 'lucide-react';
import { TelegramConfig } from '../types';

interface FooterProps {
  telegramConfig: TelegramConfig;
}

export default function Footer({ telegramConfig }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-gray-300 font-sans border-t border-white/5" id="footer-section">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Information */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-4">
            <Plane className="w-6 h-6 text-brand-gold rotate-45" />
            <span className="font-display font-extrabold text-xl tracking-wider uppercase">
              Travel <span className="text-brand-gold">US</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Agencia aérea premium liderada por pilotos de aviación comercial. Diseñamos tus conexiones de vuelos internacionales con el máximo rigor de seguridad y tarifas preferenciales de consolidador.
          </p>
        </div>

        {/* Dynamic Flight Plan Structure */}
        <div className="md:col-span-1">
          <h4 className="font-display font-bold text-xs text-white mb-4 uppercase tracking-widest text-brand-gold">
            Plan de Cotización
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold font-bold text-[10px]">1</span>
              <span>Indicas tu aeropuerto de origen, destino y fechas aproximadas.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold font-bold text-[10px]">2</span>
              <span>El formulario estructura el plan de vuelo para validación técnica.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold font-bold text-[10px]">3</span>
              <span>Redirigimos tu solicitud de tiquetes directamente a Telegram.</span>
            </li>
            <li className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold font-bold text-[10px]">4</span>
              <span>Recibes opciones de tarifas consolidadas y cotización final en minutos.</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h4 className="font-display font-bold text-xs text-white mb-4 uppercase tracking-widest text-brand-gold">
            Enlaces de Vuelo
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <a href="#features-section" className="hover:text-brand-gold transition-colors">
                Garantías de Piloto
              </a>
            </li>
            <li>
              <a href="#destinations-section" className="hover:text-brand-gold transition-colors">
                Rutas Destacadas
              </a>
            </li>
            <li>
              <a href="#reviews-section" className="hover:text-brand-gold transition-colors">
                Clientes Satisfechos
              </a>
            </li>
            <li>
              <a 
                href={`https://t.me/${telegramConfig.channelUsername}`} 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="text-sky-400 hover:text-brand-gold font-bold transition-colors flex items-center gap-1.5"
              >
                💬 Chatear en Telegram <Send className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Office Contact Info */}
        <div className="md:col-span-1 text-xs">
          <h4 className="font-display font-bold text-xs text-white mb-4 uppercase tracking-widest text-brand-gold">
            Centro de Control
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>Cúcuta, Norte de Santander</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <span>+57 3107800721</span>
            </li>
            <li className="flex items-center gap-2 text-sky-400 font-bold">
              <Send className="w-4 h-4 shrink-0" />
              <span>t.me/{telegramConfig.channelUsername}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/5 bg-black/20 text-xs py-6 text-center text-gray-500">
        <p>
          &copy; {currentYear} Travel US Flights & Air Ticketing. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-[10px] text-gray-600 font-sans">
          Inscrita bajo los estándares internacionales de despacho aéreo privado. Soporte en vivo vía Telegram.
        </p>
      </div>
    </footer>
  );
}
