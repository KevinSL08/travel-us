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
        text: '¡Hola Carlos! Excelente recomendación. Te coticé cupo consolidado directo en Iberia (Airbus A350) saliendo a las 22:15. Tarifa preferencial exclusiva por persona con maleta de 23kg y documento de soporte para migración.',
        time: '18:41',
        flightBadge: '✈️ MADRID (MAD) — Cupo Consolidado Iberia — PNR: #IB-7829',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Cotización_Oficial_Iberia_MAD.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Carlos Mendoza',
        text: '¡Espectacular Brayan! En la página web de la aerolínea estaba carísimo y sin opción de equipaje. Te hice la transferencia directa a la cuenta corporativa. comprobante enviado 👍',
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
    routeTitle: 'Vuelo Express a Medellín (MDE)',
    rating: 5,
    date: 'Hace 2 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Valeria Restrepo',
        text: 'Hola Brayan, buenas tardes! Me te recomendó un colega de la oficina. Necesito viajar de urgencia a Medellín este jueves por un compromiso de trabajo. ¿Conseguimos buena tarifa?',
        time: '11:15'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Asesoría Travel US',
        text: '¡Hola Valeria! Claro que sí. Te reservé un cupo corporativo directo saliendo a las 07:15 AM al aeropuerto José María Córdova (MDE). Tarifa promo express preferencial ida y vuelta con maleta de mano.',
        time: '11:17',
        flightBadge: '✈️ MEDELLÍN (MDE) — Cupo Corporativo Express LATAM',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Reserva_LATAM_Medellin.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Valeria Restrepo',
        text: '¡Salvada total! Pago confirmado por Nequi. En menos de 10 minutos me emitiste todo directo aquí al Telegram. Llegué a Medellín sin contratiempos. Mil gracias Brayan! 👏',
        time: '11:22'
      }
    ]
  },
  {
    id: 'rev-3',
    customerName: 'Santiago & Familia',
    customerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Nocturno a París (CDG)',
    rating: 5,
    date: 'Hace 3 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Santiago',
        text: 'Hola Brayan! Buscamos tiquetes para 3 adultos a París para vacaciones familiares en octubre. ¿Tienen tarifa con maleta de bodega?',
        time: '15:02'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Despacho Travel US',
        text: '¡Hola Santiago! Sí, te estructuré tarifa especial de grupo directo en Air France (Boeing 787). Tarifa consolidada por persona ida y vuelta con equipaje completo de 23kg y asientos juntos.',
        time: '15:05',
        flightBadge: '🗼 PARÍS (CDG) — Tarifa Especial Air France Directo',
        isVerified: true,
        attachmentType: 'ticket',
        attachmentTitle: 'Cotización_AirFrance_Paris_Familia.pdf'
      },
      {
        sender: 'customer',
        senderName: 'Santiago',
        text: '¡Nos ahorraste muchísimo presupuesto! La atención por Telegram súper rápida, transferencia directa y tiquetes oficiales en el acto. Pasamos migración en París sin pedirnos nada extra. 10/10 🎉',
        time: '15:10'
      }
    ]
  },
  {
    id: 'rev-4',
    customerName: 'Dr. Fernando Gómez',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Ejecutivo a Cali (CLO)',
    rating: 5,
    date: 'Hace 4 días',
    verifiedPurchase: true,
    messages: [
      {
        sender: 'customer',
        senderName: 'Dr. Fernando Gómez',
        text: 'Buenas noches Brayan. Necesito viajar a un congreso médico en Cali con fechas fijas y buena flexibilidad por si la agenda se extiende.',
        time: '09:30'
      },
      {
        sender: 'agent',
        senderName: 'Brayan • Capitán Travel US 👨‍✈️',
        text: 'Hola Dr. Fernando. Te programé el itinerario directo a Cali (CLO) con tarifa preferencial flexible. Asiento en primeras filas y prioridad de abordaje.',
        time: '09:35',
        flightBadge: '✈️ CALI (CLO) — Tarifa Preferencial Ejecutivo Avianca',
        isVerified: true,
        attachmentType: 'voice',
        audioDuration: '0:28'
      },
      {
        sender: 'customer',
        senderName: 'Dr. Fernando Gómez',
        text: 'Viaje impecable Brayan. Puntualidad perfecta, el abordaje prioritario funcionó de maravilla y la atención por Telegram fue inmejorable.',
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
        text: '¡Hola Cami! Te liberamos 2 cupos directos en tarifa promo especial con LATAM ida y vuelta con maleta de mano y morral incluido.',
        time: '14:28',
        flightBadge: '🇨🇴 SAN ANDRÉS (ADZ) — Cupo Promo Especial LATAM',
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
