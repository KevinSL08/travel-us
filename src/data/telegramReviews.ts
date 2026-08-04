import { TelegramReview } from '../types';
import eticketImg from '../assets/images/telegram_eticket_photo_1785618376440.jpg';
import planeWindowImg from '../assets/images/airplane_window_photo_1785618390022.jpg';
import seatmapImg from '../assets/images/flight_seatmap_photo_1785618405082.jpg';
import madridImg from '../assets/images/madrid_cibeles_fountain_1785618135352.jpg';
import parisImg from '../assets/images/paris_eiffel_twilight_1785618208244.jpg';
import medellinImg from '../assets/images/medellin_comuna_13_1785617983921.jpg';

export const telegramReviews: TelegramReview[] = [
  {
    id: 'rev-1',
    customerName: 'Carlos Mendoza',
    customerHandle: '@carlosmendoza_bog',
    customerAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Directo a Madrid (MAD)',
    rating: 5,
    date: 'Ayer, 18:42',
    verifiedPurchase: true,
    isOnline: true,
    pinnedMessage: '📌 Reserva #IB-7829 Confirmada • Vuelo Directo BOG → MAD (Iberia A350)',
    messages: [
      {
        id: 'm1-1',
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: '¡Hola Brayan! ✈️ Mi hermano me recomendó tu Telegram directo para cotizar tiquetes. Necesito 2 pasajes para Madrid saliendo de Bogotá el 18 de octubre, ida y vuelta con maleta de bodega.',
        time: '18:40',
        isRead: true
      },
      {
        id: 'm1-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Hola Carlos! Excelente recomendación. Te coticé cupo consolidado directo en Iberia (Airbus A350) saliendo a las 22:15. Te comparto el mapa de asientos disponibles en la cabina preferencial y el precio especial por persona con maleta de 23kg.',
        time: '18:41',
        flightBadge: '✈️ MADRID (MAD) — Cupo Consolidado Iberia — PNR: #IB-7829',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: seatmapImg,
        imageCaption: '📸 Mapa de asientos Airbus A350 — Fila 14 reservada con espacio extra',
        reactions: [
          { emoji: '🔥', count: 4, userReacted: true },
          { emoji: '✈️', count: 5 }
        ],
        isRead: true
      },
      {
        id: 'm1-3',
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: '¡Espectacular Brayan! En la página web de la aerolínea estaba carísimo y sin opción de equipaje. Te hice la transferencia directa a la cuenta corporativa. Comprobante de Bancolombia adjunto 👍',
        time: '18:43',
        replyTo: {
          senderName: 'Capitán Brayan • Travel US 👨‍✈️',
          text: 'Mapa de asientos Airbus A350 — Fila 14 reservada con espacio extra'
        },
        reactions: [
          { emoji: '👍', count: 3 }
        ],
        isRead: true
      },
      {
        id: 'm1-4',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Pago verificado y tiquetes emitidos al instante Carlos! Te adjunto el PDF del E-Ticket oficial de Iberia listo para check-in + la foto física del boarding pass de soporte para migración.',
        time: '18:45',
        attachmentType: 'ticket',
        attachmentTitle: 'E-Ticket_Confirmado_Iberia_CarlosMendoza.pdf',
        imageAttachment: eticketImg,
        imageCaption: '📄 Documento oficial e-ticket verificado por sistema Amadeus',
        reactions: [
          { emoji: '❤️', count: 6 },
          { emoji: '🙏', count: 4 }
        ],
        isRead: true
      },
      {
        id: 'm1-5',
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: 'Brayan, te escribo ya desde el avión sobrevolando el Atlántico. ¡Mira esta vista! El vuelo impecable, la selección de asiento perfecta y la documentación que me diste en PDF para Barajas es 10/10. ¡El mejor servicio aéreo! ⭐⭐⭐⭐⭐',
        time: '18:48',
        attachmentType: 'photo',
        imageAttachment: planeWindowImg,
        imageCaption: '🌅 Vista desde el asiento 14A — Vuelo BOG-MAD',
        reactions: [
          { emoji: '👏', count: 8 },
          { emoji: '😍', count: 5 }
        ],
        isRead: true
      }
    ]
  },
  {
    id: 'rev-2',
    customerName: 'Valeria Restrepo',
    customerHandle: '@valeria_mde',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Express a Medellín (MDE)',
    rating: 5,
    date: 'Hace 2 días',
    verifiedPurchase: true,
    isOnline: false,
    lastSeen: 'visto hace 15 min',
    pinnedMessage: '📌 Tiquete Express LATAM BOG-MDE Emitido #LA-4109',
    messages: [
      {
        id: 'm2-1',
        sender: 'customer',
        senderName: 'Valeria Restrepo',
        text: 'Hola Brayan, buenas tardes! Me te recomendó un colega de la oficina. Necesito viajar de urgencia a Medellín este jueves por un compromiso de trabajo. ¿Conseguimos buena tarifa?',
        time: '11:15',
        isRead: true
      },
      {
        id: 'm2-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Hola Valeria! Claro que sí. Te escuché y te grabé esta nota de voz explicándote la mejor opción de salida sin escalas al José María Córdova (MDE).',
        time: '11:16',
        attachmentType: 'voice',
        audioDuration: '0:34',
        reactions: [
          { emoji: '🎧', count: 2 }
        ],
        isRead: true
      },
      {
        id: 'm2-3',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: 'Te reservé el cupo corporativo directo saliendo a las 07:15 AM. Tarifa promo express preferencial ida y vuelta con equipaje de mano de 10kg.',
        time: '11:17',
        flightBadge: '✈️ MEDELLÍN (MDE) — Cupo Corporativo Express LATAM',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Reserva_Express_LATAM_Medellin.pdf',
        imageAttachment: medellinImg,
        imageCaption: '📍 Medellín, Colombia — Destino directo verificado',
        reactions: [
          { emoji: '🔥', count: 3 }
        ],
        isRead: true
      },
      {
        id: 'm2-4',
        sender: 'customer',
        senderName: 'Valeria Restrepo',
        text: '¡Salvada total! Pago confirmado por Nequi. En menos de 10 minutos me emitiste todo directo aquí al Telegram. Llegué a Medellín sin contratiempos. Mil gracias Brayan! 👏',
        time: '11:22',
        reactions: [
          { emoji: '❤️', count: 4 }
        ],
        isRead: true
      }
    ]
  },
  {
    id: 'rev-3',
    customerName: 'Santiago & Familia',
    customerHandle: '@santiago_paris',
    customerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Nocturno a París (CDG)',
    rating: 5,
    date: 'Hace 3 días',
    verifiedPurchase: true,
    isOnline: true,
    pinnedMessage: '📌 Grupo Familiar Air France CDG — 3 Pasajeros Asientos Juntos',
    messages: [
      {
        id: 'm3-1',
        sender: 'customer',
        senderName: 'Santiago',
        text: 'Hola Brayan! Buscamos tiquetes para 3 adultos a París para vacaciones familiares en octubre. ¿Tienen tarifa con maleta de bodega?',
        time: '15:02',
        isRead: true
      },
      {
        id: 'm3-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Hola Santiago! Te estructuré tarifa especial de grupo directo en Air France (Boeing 787 Dreamliner). Tarifa consolidada por persona ida y vuelta con equipaje completo de 23kg y asientos juntos en zona central.',
        time: '15:05',
        flightBadge: '🗼 PARÍS (CDG) — Tarifa Especial Air France Directo',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Cotización_AirFrance_Paris_Familia.pdf',
        imageAttachment: parisImg,
        imageCaption: '🗼 Vuelo Nocturno Directo Bogotá → París Charles de Gaulle',
        reactions: [
          { emoji: '😍', count: 6 },
          { emoji: '✈️', count: 5 }
        ],
        isRead: true
      },
      {
        id: 'm3-3',
        sender: 'customer',
        senderName: 'Santiago',
        text: '¡Nos ahorraste muchísimo presupuesto! La atención por Telegram súper rápida, transferencia directa y tiquetes oficiales en el acto. Pasamos migración en París sin pedirnos nada extra. 10/10 🎉',
        time: '15:10',
        reactions: [
          { emoji: '🎉', count: 5 },
          { emoji: '💯', count: 4 }
        ],
        isRead: true
      }
    ]
  },
  {
    id: 'rev-4',
    customerName: 'Dr. Fernando Gómez',
    customerHandle: '@dr_fernando_g',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Ejecutivo a Cali (CLO)',
    rating: 5,
    date: 'Hace 4 días',
    verifiedPurchase: true,
    isOnline: false,
    lastSeen: 'visto ayer',
    pinnedMessage: '📌 Vuelo Ejecutivo BOG-CLO Avianca Flex',
    messages: [
      {
        id: 'm4-1',
        sender: 'customer',
        senderName: 'Dr. Fernando Gómez',
        text: 'Buenas noches Brayan. Necesito viajar a un congreso médico en Cali con fechas fijas y buena flexibilidad por si la agenda se extiende.',
        time: '09:30',
        isRead: true
      },
      {
        id: 'm4-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: 'Hola Dr. Fernando. Le envié este audio explicativo con la política de cambios sin penalidad y le programé el itinerario directo a Cali (CLO) con tarifa preferencial flexible.',
        time: '09:35',
        flightBadge: '✈️ CALI (CLO) — Tarifa Preferencial Ejecutivo Avianca',
        isVerified: true,
        attachmentType: 'voice',
        audioDuration: '0:28',
        reactions: [
          { emoji: '👍', count: 2 }
        ],
        isRead: true
      },
      {
        id: 'm4-3',
        sender: 'customer',
        senderName: 'Dr. Fernando Gómez',
        text: 'Viaje impecable Brayan. Puntualidad perfecta, el abordaje prioritario funcionó de maravilla y la atención por Telegram fue inmejorable.',
        time: '09:45',
        reactions: [
          { emoji: '👏', count: 3 }
        ],
        isRead: true
      }
    ]
  },
  {
    id: 'rev-5',
    customerName: 'Camila Silva',
    customerHandle: '@cami_silva_adz',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo a San Andrés (ADZ)',
    rating: 5,
    date: 'Hace 5 días',
    verifiedPurchase: true,
    isOnline: true,
    pinnedMessage: '📌 Cupo Promo LATAM San Andrés Isla (ADZ)',
    messages: [
      {
        id: 'm5-1',
        sender: 'customer',
        senderName: 'Camila Silva',
        text: 'Hola chicos! Tienen vuelos a San Andrés para este puente festivo? En aerolíneas directo todo está súper caro 😭',
        time: '14:20',
        isRead: true
      },
      {
        id: 'm5-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Hola Cami! Te liberamos 2 cupos directos en tarifa promo especial con LATAM ida y vuelta con maleta de mano y morral incluido.',
        time: '14:28',
        flightBadge: '🇨🇴 SAN ANDRÉS (ADZ) — Cupo Promo Especial LATAM',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Reserva_LATAM_SanAndres_Camila.pdf',
        reactions: [
          { emoji: '❤️', count: 5 }
        ],
        isRead: true
      },
      {
        id: 'm5-3',
        sender: 'customer',
        senderName: 'Camila Silva',
        text: '¡Comprado de una Brayan! Transferencia de Bancolombia hecha. En 5 min me tenías la reserva emitida. Pasamos un fin de semana hermoso en el mar ❤️✈️',
        time: '14:35',
        reactions: [
          { emoji: '🔥', count: 4 },
          { emoji: '😍', count: 3 }
        ],
        isRead: true
      }
    ]
  }
];

