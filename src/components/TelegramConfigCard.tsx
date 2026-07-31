import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Send, CheckCircle2, ShieldAlert, HelpCircle } from 'lucide-react';
import { TelegramConfig } from '../types';

interface TelegramConfigCardProps {
  config: TelegramConfig;
  onUpdateConfig: (newConfig: TelegramConfig) => void;
}

export default function TelegramConfigCard({ config, onUpdateConfig }: TelegramConfigCardProps) {
  const [username, setUsername] = useState(config.channelUsername);
  const [isChannel, setIsChannel] = useState(config.isChannel);
  const [saved, setSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig({
      channelUsername: username.replace('@', '').trim(),
      isChannel: isChannel,
      customGreetingMessage: config.customGreetingMessage
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <section className="bg-slate-900 border-t border-slate-800 text-white py-8" id="agency-config-panel">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-brand-gold/10 text-brand-gold">
              <Settings className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Panel de Integración de Telegram
              </h4>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                Configura el destino de los botones de cotización para tu propia agencia de viajes.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 text-xs font-semibold bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isOpen ? 'Ocultar Ajustes' : 'Personalizar mi Telegram'}
          </button>
        </div>

        {/* Collapsible Config Content */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10 font-sans"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-display font-semibold text-sm text-brand-gold mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ¿Cómo funciona esta redirección?
                </h5>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  El sitio web está programado con el protocolo de enlace universal de Telegram. Al configurar tu usuario, todos los botones de <strong>"Cotizar"</strong>, <strong>"Preguntar por Telegram"</strong> y la <strong>"Solicitud de Cotización"</strong> abrirán directamente tu chat o canal con la información del cliente precargada.
                </p>
                <div className="flex items-start gap-2 p-3 bg-brand-gold/5 border border-brand-gold/10 rounded-lg">
                  <ShieldAlert className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-[10px] text-gray-400 leading-normal">
                    <strong>Siguiente paso:</strong> Cambia el usuario predeterminado por el tuyo, haz clic en guardar y prueba los botones superiores para ver la redirección en vivo.
                  </span>
                </div>
              </div>

              {/* Form settings */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Usuario de Telegram (sin @)
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-white/20 bg-white/5 text-gray-400 text-xs">
                      t.me/
                    </span>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="TuUsuarioDeTelegram"
                      className="flex-1 min-w-0 block w-full bg-transparent border border-white/20 rounded-r-md px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                {/* Direct Chat / Channel public flag */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1">
                    Tipo de enlace
                    <HelpCircle className="w-3 h-3 text-gray-500 cursor-help" title="Un chat de agente directo soporta mensajes precargados; los canales o grupos se abren como comunidad." />
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-300">
                      <input
                        type="radio"
                        checked={!isChannel}
                        onChange={() => setIsChannel(false)}
                        className="accent-brand-gold"
                      />
                      <span>Agente / Chat Directo (Soporta texto)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-300">
                      <input
                        type="radio"
                        checked={isChannel}
                        onChange={() => setIsChannel(true)}
                        className="accent-brand-gold"
                      />
                      <span>Canal Público / Comunidad</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-sky-400">
                    Enlace activo: <code className="bg-white/5 px-1.5 py-0.5 rounded">t.me/{username || '...'}</code>
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {saved ? '¡Ajustes Guardados!' : 'Guardar Ajustes'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
