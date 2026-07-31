import { TelegramReview } from '../types';

export const telegramReviews: TelegramReview[] = [
  {
    id: 'rev-1',
    customerName: 'Carlos Mendoza',
    customerAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Directo a Madrid (MAD)',
    rating: 5,
    date: 'Ayer, 18:42',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: '¡Hola Brayan! ✈️ Mi hermano me recomendó tu Telegram directo para cotizar tiquetes. Necesito 2 pasajes para Madrid saliendo de Bogotá el 18 de octubre, ida y vuelta con maleta de bodega.',
        time: '18:40'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Capitán Travel US 👨‍✈️',
        text: '¡Hola Carlos! Excelente recomendación. Te coticé cupo consolidado directo en Iberia (Airbus A350) saliendo a las 22:15. Tarifa preferencial: $2.850.000 COP por persona con maleta de 23kg y documento de soporte para migración.',
        time: '18:41',
        flightBadge: '✈️ MADRID (MAD) — $2.850.000 COP / pax — PNR: #IB-7829',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Cotización_Oficial_Iberia_MAD.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: '¡Espectacular Brayan! En la página de la aerolínea estaba casi en 4 millones. Te hice la transferencia directa a la cuenta corporativa. comprobante enviado 👍',
        time: '18:43'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Capitán Travel US 👨‍✈️',
        text: '¡Pago verificado y tiquetes emitidos al instante Carlos! Aquí tienes los e-tickets con PNR confirmado + la guía de entrada para migración en Barajas.',
        time: '18:45',
        attachmentType: 'ticket',
        attachmentTitle: 'E-Ticket_Confirmado_Iberia_CarlosMendoza.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: 'Brayan, te escribo ya desde Madrid. El vuelo impecable, la selección de asiento perfecta y en migración en Barajas pasé sin preguntas en 5 minutos con la documentación que me diste. ¡El mejor servicio aéreo! ⭐⭐⭐⭐⭐',
        time: '18:48'
      }
    ]
  },
  {
    id: 'rev-2',
    customerName: 'Valeria Restrepo',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Express a Miami (MIA)',
    rating: 5,
    date: 'Hace 2 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Valeria Restrepo',
        text: 'Hola Brayan, buenas tardes! Me te recomendó un colega de la oficina. Necesito viajar de urgencia a Miami este jueves por un compromiso de trabajo. ¿Conseguimos buena tarifa?',
        time: '11:15'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Asesoría Travel US',
        text: '¡Hola Valeria! Claro que sí. Te reservé un cupo corporativo directo en American Airlines saliendo a las 07:15 AM. Tarifa promo express por $1.350.000 COP ida y vuelta con maleta de mano.',
        time: '11:17',
        flightBadge: '✈️ MIAMI (MIA) — $1.350.000 COP — Vuelo Confirmado AA',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Reserva_AmericanAirlines_MIA.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Valeria Restrepo',
        text: '¡Salvada total! Pago confirmado por Nequi. En menos de 10 minutos me emitiste todo directo aquí al Telegram. Llegué a Miami sin contratiempos. Mil gracias! 👏',
        time: '11:22'
      }
    ]
  },
  {
    id: 'rev-3',
    customerName: 'Santiago & Familia',
    customerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Familiar a Punta Cana (PUJ)',
    rating: 5,
    date: 'Hace 3 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Santiago',
        text: 'Hola! Buscamos tiquetes para 4 adultos a Punta Cana para vacaciones familiares en junio. ¿Tienen tarifa de grupo?',
        time: '15:02'
      },
      {
        sender: 'agent',
        senderName: 'Despacho Travel US',
        text: '¡Hola Santiago! Sí, te estructuré tarifa especial de grupo por Copa Airlines con conexión rápida. $1.250.000 COP por persona ida y vuelta con equipaje completo de 23kg y asientos juntos.',
        time: '15:05',
        flightBadge: '🏝️ PUNTA CANA (PUJ) — $1.250.000 COP / pax — Tarifa Grupal',
        isVerified: true
      },
      {
        sender: 'customer',
        senderName: 'Santiago',
        text: '¡Nos ahorraste casi 2 millones de pesos en total! La atención por Telegram súper rápida, transferencia directa y tiquetes oficiales en el acto. Nos fue espectacular en el viaje. 10/10 🎉',
        time: '15:10'
      }
    ]
  },
  {
    id: 'rev-4',
    customerName: 'Dr. Fernando Gómez',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Larga Distancia a Tokio (NRT)',
    rating: 5,
    date: 'Hace 4 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Dr. Fernando Gómez',
        text: 'Buenas noches. Estoy planificando un viaje a Japón. Me preocupan las horas de vuelo, el jetlag y los controles de escala.',
        time: '09:30'
      },
      {
        sender: 'agent',
        senderName: 'Capitán Travel US 👨‍✈️',
        text: 'Hola Dr. Fernando. Te programé el itinerario en Boeing 787 Dreamliner de ANA por $5.200.000 COP ida y vuelta. La cabina presurizada reduce la deshidratación y la fatiga. Escala idónea de 2 horas.',
        time: '09:35',
        flightBadge: '⛩️ TOKIO (NRT) — $5.200.000 COP — Dreamliner Confort',
        isVerified: true,
        attachmentType: 'voice',
        audioDuration: '0:38'
      },
      {
        sender: 'customer',
        senderName: 'Dr. Fernando Gómez',
        text: 'Llegué a Tokio la semana pasada y debo confirmar que la recomendación técnica sobre la presurización de la nave fue 100% acertada. Pasé migración sin novedad y descansado. Excelente servicio por Telegram.',
        time: '09:45'
      }
    ]
  },
  {
    id: 'rev-5',
    customerName: 'Camila Silva',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo a San Andrés (ADZ)',
    rating: 5,
    date: 'Hace 5 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Camila Silva',
        text: 'Hola chicos! Tienen vuelos a San Andrés para este puente festivo? En aerolíneas directo todo está súper caro 😭',
        time: '14:20'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Soporte Vuelos',
        text: '¡Hola Cami! Te liberamos 2 cupos directos con LATAM por $420.000 COP ida y vuelta con maleta de mano y morral incluido.',
        time: '14:28',
        flightBadge: '🇨🇴 SAN ANDRÉS (ADZ) — $420.000 COP — Cupo Promo LATAM',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Reserva_LATAM_SanAndres_Camila.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Camila Silva',
        text: '¡Comprado de una Brayan! Transferencia de Bancolombia hecha. En 5 min me tenías la reserva emitida. Pasamos un fin de semana hermoso en el mar ❤️✈️',
        time: '14:35'
      }
    ]
  }
];
