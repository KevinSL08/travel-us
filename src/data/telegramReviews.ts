import { TelegramReview } from '../types';
import turkeyImg from '../assets/images/turquia.jpeg';
import disneyUsa1Img from '../assets/images/disneylandusa.jpeg';
import disneyUsa2Img from '../assets/images/disneylandusa2.jpeg';
import disneyUsa3Img from '../assets/images/disneylandusa3.jpeg';
import sanAndres1Img from '../assets/images/sanandres.jpeg';
import sanAndres2Img from '../assets/images/sanandres2.jpeg';
import barcelonaImg from '../assets/images/barcelona.jpeg';
import paris1Img from '../assets/images/paris.jpeg';
import paris2Img from '../assets/images/paris2.jpeg';
import disneyParisImg from '../assets/images/disneyland_paris.jpeg';
import romeImg from '../assets/images/roma.jpeg';
import hollandImg from '../assets/images/holanda.jpeg';
import madrid1Img from '../assets/images/madrid_cibeles_fountain_1785618135352.jpg';
import madrid2Img from '../assets/images/madrid2.jpeg';

export const telegramReviews: TelegramReview[] = [
  // 1. Turquía (1)
  {
    id: 'rev-turkey',
    locationHeader: 'Turquía 🇹🇷',
    locationSubtitle: 'Estambul, Turquía',
    photoUrl: turkeyImg,
    customerName: 'Juan & Familia',
    customerHandle: '@juan_turquia_fly',
    customerAvatar: turkeyImg,
    routeTitle: 'Vuelo BOG → IST (Turkish Airlines)',
    rating: 4.9,
    date: 'Hace 1 día',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: '¡Un viaje mágico por Turquía! El Capitán Brayan nos consiguió la mejor tarifa en Turkish Airlines con excelente conexión. Todo el proceso por Telegram fue rápido y seguro.',
    pinnedMessage: '📌 Reserva #TK-4920 Confirmada • Vuelo BOG → IST (Turkish Airlines)',
    messages: [
      {
        id: 'm-turk-1',
        sender: 'customer',
        senderName: 'Juan',
        text: '¡Hola Capitán Brayan! Te escribo desde Estambul. Míranos aquí frente a la Mezquita Azul, ¡el viaje ha sido increíble! Los vuelos que nos emitiste salieron perfectos y el equipaje llegó intacto.',
        time: '14:20',
        isRead: true
      },
      {
        id: 'm-turk-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué alegría verlos disfrutar en Turquía, Juan! Me alegra enormemente que la conexión por Estambul haya sido tan fluida. Gracias por la confianza en Travel US.',
        time: '14:22',
        flightBadge: '✈️ ESTAMBUL (IST) — Turkish Airlines Confirmado',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: turkeyImg,
        reactions: [
          { emoji: '😍', count: 8, userReacted: true },
          { emoji: '🇹🇷', count: 12 },
          { emoji: '✈️', count: 7 }
        ],
        isRead: true
      }
    ]
  },

  // 2. Disneyland Estados Unidos (1/3)
  {
    id: 'rev-disney-usa-1',
    locationHeader: 'Disneyland EE.UU. 🇺🇸',
    locationSubtitle: 'Orlando & Anaheim, EE.UU.',
    photoUrl: disneyUsa1Img,
    customerName: 'Familia Ramírez',
    customerHandle: '@ramirez_disney',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Paquete Volar + Boletos Disney Orlando',
    rating: 5.0,
    date: 'Hace 2 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Cumplimos el sueño de nuestros hijos en Disney Orlando. El Capitán Brayan nos armó el vuelo con equipaje de bodega y entradas con descuento especial. ¡Inolvidable!',
    pinnedMessage: '📌 Paquete Orlando Disney World • Vuelos Directos + Entradas Parques',
    messages: [
      {
        id: 'm-du1-1',
        sender: 'customer',
        senderName: 'Sra. Ramírez',
        text: '¡Capitán Brayan, ya estamos frente al castillo de Magic Kingdom! Todo salió perfecto con el vuelo a Orlando y las maletas. Los niños no caben de la felicidad ❤️✨',
        time: '11:15',
        isRead: true
      },
      {
        id: 'm-du1-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué fotografía tan hermosa Familia Ramírez! Es un verdadero honor ayudarles a construir estos recuerdos mágicos en Disney World Orlando.',
        time: '11:18',
        flightBadge: '🏰 ORLANDO (MCO) — Paquete Familiar Disney World',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: disneyUsa1Img,
        reactions: [
          { emoji: '🏰', count: 15 },
          { emoji: '❤️', count: 10 }
        ],
        isRead: true
      }
    ]
  },

  // 3. San Andrés (1/2)
  {
    id: 'rev-san-andres-1',
    locationHeader: 'San Andrés 🇨🇴',
    locationSubtitle: 'Isla de San Andrés, Colombia',
    photoUrl: sanAndres1Img,
    customerName: 'Camila & Mateo',
    customerHandle: '@camila_sanandres',
    customerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Directo BOG → ADZ (LATAM)',
    rating: 4.8,
    date: 'Hace 3 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: '¡El mar de los 7 colores de San Andrés es irreal! Reservamos el vuelo ida y vuelta express con equipaje de mano. La emisión fue inmediata en Telegram.',
    pinnedMessage: '📌 Vuelo BOG → ADZ Emitido #LA-4210 • Mar de 7 Colores',
    messages: [
      {
        id: 'm-sa1-1',
        sender: 'customer',
        senderName: 'Camila',
        text: '¡Hola Brayan! Mira la vista del mar aquí en la playa Spratt Bight de San Andrés 🏝️. El vuelo de LATAM que nos cotizaste salió súper puntual. ¡Muchas gracias por todo!',
        time: '12:30',
        isRead: true
      },
      {
        id: 'm-sa1-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué paraíso Camila y Mateo! Disfruten muchísimo del clima caribeño y los paseos en lancha. ¡Cualquier requerimiento me escriben directo al Telegram!',
        time: '12:33',
        flightBadge: '🏝️ SAN ANDRÉS (ADZ) — Tarifa Caribe LATAM',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: sanAndres1Img,
        reactions: [
          { emoji: '🌊', count: 18 },
          { emoji: '☀️', count: 12 }
        ],
        isRead: true
      }
    ]
  },

  // 4. París (1/2)
  {
    id: 'rev-paris-1',
    locationHeader: 'París 🇫🇷',
    locationSubtitle: 'París, Francia',
    photoUrl: paris1Img,
    customerName: 'Santiago & Valentina',
    customerHandle: '@santiago_valen_paris',
    customerAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Nocturno Directo BOG → CDG (Air France)',
    rating: 4.9,
    date: 'Hace 3 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: '¡Una experiencia inolvidable en París! Volamos en Air France directo, ahorrando presupuesto y viajando con asientos juntos y maleta incluida.',
    pinnedMessage: '📌 Vuelo Directo BOG → CDG Air France • Asientos Reservados Juntos',
    messages: [
      {
        id: 'm-p1-1',
        sender: 'customer',
        senderName: 'Santiago',
        text: '¡Hola Brayan! Míranos aquí en la Torre Eiffel al atardecer 🗼. No podíamos estar más contentos con el servicio. Todo el tiquete emitido y verificado en la app oficial de Air France.',
        time: '19:40',
        isRead: true
      },
      {
        id: 'm-p1-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Foto de revista Santiago y Valentina! París al atardecer es mágico. Gracias por preferir el servicio personalizado de Travel US.',
        time: '19:45',
        flightBadge: '🗼 PARÍS (CDG) — Air France Directo Confirmado',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: paris1Img,
        reactions: [
          { emoji: '😍', count: 21 },
          { emoji: '🇫🇷', count: 16 }
        ],
        isRead: true
      }
    ]
  },

  // 5. Madrid (1/2)
  {
    id: 'rev-madrid-1',
    locationHeader: 'Madrid 🇪🇸',
    locationSubtitle: 'Madrid, España',
    photoUrl: madrid1Img,
    customerName: 'Carlos & Elena',
    customerHandle: '@carlos_madrid_fly',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Directo BOG → MAD (Iberia / Avianca)',
    rating: 4.8,
    date: 'Hace 1 día',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Llegamos a Madrid directo desde Bogotá. La Fuente de Cibeles y la Gran Vía iluminadas son una maravilla. El Capitán Brayan nos dio la mejor tarifa disponible.',
    pinnedMessage: '📌 Vuelo Directo BOG → MAD (Iberia) • 2 Maletas Incluidas',
    messages: [
      {
        id: 'm-mad1-1',
        sender: 'customer',
        senderName: 'Carlos',
        text: '¡Hola Capitán! Te mandamos abrazo desde la Plaza de Cibeles en Madrid 🇪🇸. El vuelo directo por Iberia estuvo súper cómodo y las maletas llegaron rapidísimo.',
        time: '18:20',
        isRead: true
      },
      {
        id: 'm-mad1-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué buena foto Carlos y Elena! Madrid es una ciudad increíble para iniciar cualquier recorrido por Europa. ¡Sigan disfrutando de la Gran Vía y las tapas!',
        time: '18:25',
        flightBadge: '🏛️ MADRID (MAD) — Vuelo Directo Iberia Confirmado',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: madrid1Img,
        reactions: [
          { emoji: '🏛️', count: 15 },
          { emoji: '🇪🇸', count: 18 }
        ],
        isRead: true
      }
    ]
  },

  // 6. Disneyland Estados Unidos (2/3)
  {
    id: 'rev-disney-usa-2',
    locationHeader: 'Disneyland EE.UU. 🇺🇸',
    locationSubtitle: 'Orlando & Anaheim, EE.UU.',
    photoUrl: disneyUsa2Img,
    customerName: 'Andrés & Marcela',
    customerHandle: '@andres_epcot_usa',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelos MCO + Lightning Pass Disney',
    rating: 4.9,
    date: 'Hace 4 días',
    verifiedPurchase: true,
    isOnline: false,
    lastSeen: 'hace 30 min',
    testimonial: 'Increíble viaje de aniversario en Disney World EPCOT. Nos ahorramos más de 400 dólares en los tiquetes aéreos reservando por Telegram con Travel US.',
    pinnedMessage: '📌 Vuelo BOG → MCO (American Airlines) • Tarifa Pareja',
    messages: [
      {
        id: 'm-du2-1',
        sender: 'customer',
        senderName: 'Andrés',
        text: 'Hola Brayan! Queremos agradecerte por la asesoría para nuestro viaje a Orlando. El vuelo por American Airlines súper puntual y la llegada al hotel fue muy fácil.',
        time: '16:40',
        isRead: true
      },
      {
        id: 'm-du2-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Feliz aniversario Andrés y Marcela! Disfruten al máximo EPCOT y no olviden probar la atracción de Guardians of the Galaxy. ¡Un abrazo de todo el equipo de Travel US!',
        time: '16:45',
        flightBadge: '✨ ORLANDO (MCO) — Vuelo Confirmado American Airlines',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: disneyUsa2Img,
        reactions: [
          { emoji: '🔥', count: 9 },
          { emoji: '😍', count: 11 }
        ],
        isRead: true
      }
    ]
  },

  // 7. Barcelona (1)
  {
    id: 'rev-barcelona-1',
    locationHeader: 'Barcelona 🇪🇸',
    locationSubtitle: 'Barcelona, España',
    photoUrl: barcelonaImg,
    customerName: 'Sonia & Alejandro',
    customerHandle: '@sonia_bcn_fly',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Directo BOG → BCN (Avianca/Iberia)',
    rating: 4.9,
    date: 'Hace 2 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Visitamos la Sagrada Familia y el Parque Güell en Barcelona. El Capitán Brayan nos ubicó en vuelo directo con excelente franquicia de equipaje.',
    pinnedMessage: '📌 Reserva #BCN-8812 Confirmada • Vuelo Directo a Barcelona',
    messages: [
      {
        id: 'm-bcn-1',
        sender: 'customer',
        senderName: 'Sonia',
        text: '¡Hola Capitán Brayan! Te mandamos foto frente a la Sagrada Familia. El viaje a Barcelona ha sido espectacular. Migración en El Prat fue súper rápida con los documentos que nos enviaste.',
        time: '13:05',
        isRead: true
      },
      {
        id: 'm-bcn-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué gran postal de Barcelona, Sonia! La ruta a El Prat (BCN) es bellísima. Me alegro mucho de que la asesoría les haya dado total tranquilidad en el aeropuerto.',
        time: '13:08',
        flightBadge: '🏛️ BARCELONA (BCN) — Directo Confirmado Avianca',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: barcelonaImg,
        reactions: [
          { emoji: '🏛️', count: 11 },
          { emoji: '🇪🇸', count: 13 }
        ],
        isRead: true
      }
    ]
  },

  // 8. Holanda / Ámsterdam (1)
  {
    id: 'rev-holanda-1',
    locationHeader: 'Holanda 🇳🇱',
    locationSubtitle: 'Ámsterdam, Holanda',
    photoUrl: hollandImg,
    customerName: 'Mariana & Lucas',
    customerHandle: '@mariana_amsterdam_fly',
    customerAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo Directo BOG → AMS (KLM Royal Dutch)',
    rating: 5.0,
    date: 'Hace 1 día',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Volamos directo a Ámsterdam con KLM. Los canales y molinos de Holanda son espectaculares. El Capitán Brayan nos aseguró la mejor tarifa corporativa.',
    pinnedMessage: '📌 Vuelo Directo BOG → AMS (KLM) • Maleta de Bodega Incluida',
    messages: [
      {
        id: 'm-hol-1',
        sender: 'customer',
        senderName: 'Mariana',
        text: '¡Hola Capitán! Míranos recorriendo en bicicleta los canales de Ámsterdam en Holanda 🇳🇱🚲. Volar directo por KLM fue la mejor decisión. ¡Mil gracias por la tarifa promo!',
        time: '11:45',
        isRead: true
      },
      {
        id: 'm-hol-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué gran paisaje en Holanda Mariana y Lucas! KLM ofrece uno de los mejores servicios a bordo hacia Europa. ¡Sigan disfrutando de Ámsterdam!',
        time: '11:50',
        flightBadge: '🌷 ÁMSTERDAM (AMS) — Vuelo Directo KLM Confirmado',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: hollandImg,
        reactions: [
          { emoji: '🌷', count: 16 },
          { emoji: '🚲', count: 14 }
        ],
        isRead: true
      }
    ]
  },

  // 9. San Andrés (2/2)
  {
    id: 'rev-san-andres-2',
    locationHeader: 'San Andrés 🇨🇴',
    locationSubtitle: 'Isla de San Andrés, Colombia',
    photoUrl: sanAndres2Img,
    customerName: 'Felipe & Amigos',
    customerHandle: '@felipe_johnnycay',
    customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Tiquetes Grupo BOG/MDE → ADZ',
    rating: 4.7,
    date: 'Hace 6 días',
    verifiedPurchase: true,
    isOnline: false,
    lastSeen: 'hace 1 hora',
    testimonial: 'Cotizamos pasajes de grupo para 5 amigos a San Andrés. Nos ahorramos un buen dinero y viajamos todos en el mismo vuelo sin líos.',
    pinnedMessage: '📌 Grupo 5 Pasajeros San Andrés ADZ • Wingo / LATAM',
    messages: [
      {
        id: 'm-sa2-1',
        sender: 'customer',
        senderName: 'Felipe',
        text: '¡Capitán! Estamos en Johnny Cay disfrutando el coco loco 🥥. Agradecidos con la gestión tan rápida por Telegram. Nos ahorraste casi el 35% frente a la página oficial.',
        time: '15:20',
        isRead: true
      },
      {
        id: 'm-sa2-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Excelente Felipe! Las tarifas de grupo consolidadas a San Andrés siempre tienen el mejor rendimiento. ¡Pásenla genial en la isla!',
        time: '15:25',
        flightBadge: '🚤 JOHNNY CAY (ADZ) — Tarifa Grupo Consolidada',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: sanAndres2Img,
        reactions: [
          { emoji: '🍹', count: 10 },
          { emoji: '💯', count: 9 }
        ],
        isRead: true
      }
    ]
  },

  // 10. Roma (1)
  {
    id: 'rev-roma-1',
    locationHeader: 'Roma 🇮🇹',
    locationSubtitle: 'Roma, Italia',
    photoUrl: romeImg,
    customerName: 'Diego & Laura',
    customerHandle: '@diego_roma_italia',
    customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo a Roma Fiumicino (FCO) con Escala',
    rating: 4.9,
    date: 'Hace 2 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: '¡Viaje soñado a la ciudad eterna! Estuvimos en el Coliseo y la Fontana de Trevi. La atención del Capitán Brayan por Telegram fue ágil y 100% segura.',
    pinnedMessage: '📌 Reserva Roma FCO Confirmada • Air Europa / ITA Airways',
    messages: [
      {
        id: 'm-rom-1',
        sender: 'customer',
        senderName: 'Diego',
        text: '¡Ciao Capitán Brayan! Reportándome desde el Coliseo de Roma 🏛️. La ruta por Madrid hacia Fiumicino fue súper cómoda y llegamos a tiempo para iniciar nuestro tour.',
        time: '16:10',
        isRead: true
      },
      {
        id: 'm-rom-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Benvenuti a Roma Diego y Laura! Disfruten de la gastronomía italiana y de la historia de la Ciudad Eterna. ¡Gracias por compartir esta linda foto!',
        time: '16:15',
        flightBadge: '🏛️ ROMA (FCO) — Vuelo Confirmado Fiumicino',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: romeImg,
        reactions: [
          { emoji: '🏛️', count: 13 },
          { emoji: '🇮🇹', count: 19 }
        ],
        isRead: true
      }
    ]
  },

  // 11. Disneyland Estados Unidos (3/3)
  {
    id: 'rev-disney-usa-3',
    locationHeader: 'Disneyland EE.UU. 🇺🇸',
    locationSubtitle: 'Orlando & Anaheim, EE.UU.',
    photoUrl: disneyUsa3Img,
    customerName: 'Carolina & Grupo',
    customerHandle: '@caro_anaheim_disney',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo a Los Ángeles (LAX) + Disney California',
    rating: 4.8,
    date: 'Hace 5 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Viajamos a Disneyland California en Los Ángeles. El Capitán nos buscó la ruta más directa a LAX con excelente precio de equipaje. ¡Repetiremos seguro!',
    pinnedMessage: '📌 Vuelo Directo BOG → LAX (Avianca) • Disney California Park',
    messages: [
      {
        id: 'm-du3-1',
        sender: 'customer',
        senderName: 'Carolina',
        text: '¡Hola Capitán! Te enviamos abrazo desde California. Entramos hoy a Disneyland Park en Anaheim y la experiencia ha sido fantástica. Tiquetes en orden y sin sorpresas.',
        time: '18:10',
        isRead: true
      },
      {
        id: 'm-du3-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué gran foto en California, Carolina! Me alegra que la tarifa directa a Los Ángeles les haya funcionado perfecto. ¡Sigan disfrutando de la magia!',
        time: '18:15',
        flightBadge: '🎢 LOS ÁNGELES (LAX) — Disneyland California Express',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: disneyUsa3Img,
        reactions: [
          { emoji: '✨', count: 14 },
          { emoji: '👏', count: 8 }
        ],
        isRead: true
      }
    ]
  },

  // 12. París (2/2)
  {
    id: 'rev-paris-2',
    locationHeader: 'París 🇫🇷',
    locationSubtitle: 'París, Francia',
    photoUrl: paris2Img,
    customerName: 'Isabella & Mamá',
    customerHandle: '@isabella_louvre_paris',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo BOG → CDG (Iberia / Air France)',
    rating: 4.8,
    date: 'Hace 5 días',
    verifiedPurchase: true,
    isOnline: false,
    lastSeen: 'hace 45 min',
    testimonial: 'Viaje de madre e hija a París. El Capitán nos ayudó con la reserva, itinerario para la visa Schengen y emisión inmediata de tiquetes. ¡Servicio de 10!',
    pinnedMessage: '📌 Tiquetes Emitidos París CDG • Documentación Completa',
    messages: [
      {
        id: 'm-p2-1',
        sender: 'customer',
        senderName: 'Isabella',
        text: 'Capitán Brayan! Saludos desde la pirámide del Louvre en París 🎨. Mi mamá está feliz, todo el viaje ha sido de ensueño. Mil gracias por la paciencia en la cotización.',
        time: '14:15',
        isRead: true
      },
      {
        id: 'm-p2-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Un abrazo enorme para ti y tu mamá, Isabella! Ver las fotos de mis viajeros disfrutando en Europa es la mayor satisfacción.',
        time: '14:20',
        flightBadge: '🎨 PARÍS (CDG) — Itinerario Confirmado',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: paris2Img,
        reactions: [
          { emoji: '🖼️', count: 8 },
          { emoji: '❤️', count: 12 }
        ],
        isRead: true
      }
    ]
  },

  // 13. Disneyland París (1)
  {
    id: 'rev-disney-paris-1',
    locationHeader: 'Disneyland París 🇫🇷',
    locationSubtitle: 'Disneyland París, Francia',
    photoUrl: disneyParisImg,
    customerName: 'Familia Gómez',
    customerHandle: '@gomez_disney_paris',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Paquete Europa + Entradas Disneyland París',
    rating: 4.9,
    date: 'Hace 4 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Combinamos nuestro Eurotrip con 2 días en Disneyland París. El castillo de la Bella Durmiente es precioso y los pasajes nos salieron muy económicos.',
    pinnedMessage: '📌 Paquete Disneyland París • Vuelo + Parque Temático',
    messages: [
      {
        id: 'm-dp-1',
        sender: 'customer',
        senderName: 'Sr. Gómez',
        text: '¡Hola Capitán! Estamos disfrutando al máximo Disneyland París 🏰✨. Las niñas fascinadas con el desfile de las princesas. Todo excelente con los tiquetes que nos gestionaste.',
        time: '17:30',
        isRead: true
      },
      {
        id: 'm-dp-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Magia pura Familia Gómez! Disneyland París es una joya imperdible en Europa. ¡Que disfruten cada segundo del parque!',
        time: '17:35',
        flightBadge: '👑 DISNEYLAND PARÍS — Paquete Eurotrip Especial',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: disneyParisImg,
        reactions: [
          { emoji: '✨', count: 17 },
          { emoji: '👑', count: 14 }
        ],
        isRead: true
      }
    ]
  },

  // 14. Madrid (2/2)
  {
    id: 'rev-madrid-2',
    locationHeader: 'Madrid 🇪🇸',
    locationSubtitle: 'Madrid, España',
    photoUrl: madrid2Img,
    customerName: 'Patricia & Familia',
    customerHandle: '@patricia_madrid_sol',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    routeTitle: 'Vuelo BOG → MAD (Air Europa)',
    rating: 4.9,
    date: 'Hace 3 días',
    verifiedPurchase: true,
    isOnline: true,
    testimonial: 'Recorriendo la Plaza Mayor en Madrid. Todo el proceso de compra de tiquetes por Telegram fue ágil, seguro y con asesoría constante.',
    pinnedMessage: '📌 Paquete España • Vuelos BOG → MAD Confirmados',
    messages: [
      {
        id: 'm-mad2-1',
        sender: 'customer',
        senderName: 'Patricia',
        text: '¡Capitán Brayan! Saludos desde la Plaza Mayor de Madrid 🇪🇸. Todo el viaje de la familia ha salido tal cual lo planificamos. ¡Mil gracias por tu gestión tan profesional!',
        time: '12:10',
        isRead: true
      },
      {
        id: 'm-mad2-2',
        sender: 'agent',
        senderName: 'Capitán Brayan • Travel US 👨‍✈️',
        text: '¡Qué gran postal familiar en la Plaza Mayor, Patricia! Es un placer enorme servirles y brindarles la seguridad que necesitan para volar a Europa.',
        time: '12:15',
        flightBadge: '☀️ MADRID (MAD) — Air Europa Confirmado',
        isVerified: true,
        attachmentType: 'photo',
        imageAttachment: madrid2Img,
        reactions: [
          { emoji: '❤️', count: 12 },
          { emoji: '🇪🇸', count: 14 }
        ],
        isRead: true
      }
    ]
  }
];
