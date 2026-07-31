import { FlightRoute } from '../types';

export const flightRoutes: FlightRoute[] = [
  // VUELOS NACIONALES
  {
    id: 'nat-1',
    destination: 'Cartagena',
    country: 'Colombia',
    airportCode: 'CTG',
    description: 'La joya histórica del Caribe colombiano. Vuelos directos diarios al Aeropuerto Rafael Núñez con horarios perfectos para aprovechar el día de playa o reuniones de negocios.',
    image: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 280000,
    flightType: 'Directo',
    duration: '1h 20m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Playa & Historia', 'Equipaje Incluido'],
    rating: 4.9,
    airlines: ['Avianca', 'LATAM', 'Wingo', 'Clic'],
    pilotTip: 'Al aproximarte a la pista 01 de Cartagena sobre el mar, solicita asiento A (ventana izquierda). Tendrás la vista más espectacular del cerro de La Popa y las murallas de la ciudad colonial justo antes de tocar tierra.',
    highlights: [
      'Múltiples frecuencias diarias desde Bogotá, Medellín y Cali',
      'Asesoría en tarifas con equipaje de bodega y flexibilidad de cambios',
      'Atención rápida en counters y conectividad inmediata al centro histórico',
      'Garantía de asientos juntos para viajes familiares'
    ]
  },
  {
    id: 'nat-2',
    destination: 'Medellín',
    country: 'Colombia',
    airportCode: 'MDE / EOH',
    description: 'La ciudad de la eterna primavera. Conexión directa al Aeropuerto José María Córdova (Rionegro) u Olaya Herrera con las mejores aerolíneas nacionales.',
    image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 220000,
    flightType: 'Directo',
    duration: '55m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Negocios & Cultura', 'Tarifa Promo'],
    rating: 4.88,
    airlines: ['Avianca', 'LATAM', 'Wingo', 'Clic'],
    pilotTip: 'La aproximación a Rionegro (MDE) entre las montañas del valle de Aburrá requiere pilotos con entrenamiento de alta montaña. Volamos con tripulaciones experimentadas en vientos cruzados.',
    highlights: [
      'Conexión directa súper rápida con puente aéreo diario',
      'Opciones de vuelo directo al aeropuerto urbano Olaya Herrera (EOH)',
      'Tarifas corporativas flexibles para viajes exprés el mismo día',
      'Soporte directo por Telegram ante cualquier cambio de itinerario'
    ]
  },
  {
    id: 'nat-3',
    destination: 'San Andrés Islas',
    country: 'Colombia',
    airportCode: 'ADZ',
    description: 'El mar de los siete colores en el Caribe colombiano. Tiquetes aéreos a tarifas consolidadas ideales para vacaciones de sol, descanso y buceo.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 420000,
    flightType: 'Directo',
    duration: '2h 05m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Isla Caribeña', 'Vacacional'],
    rating: 4.95,
    airlines: ['Avianca', 'LATAM', 'Wingo'],
    pilotTip: 'El aeropuerto Gustavo Rojas Pinilla (ADZ) tiene la pista justo al lado del mar. Pide ventana en el lado derecho para contemplar los cambios de tonalidad del agua y el arrecife de coral en el viraje final.',
    highlights: [
      'Vuelos directos desde principales ciudades del país',
      'Incluye orientación sobre la tarjeta de turismo e ingreso a la isla',
      'Descuentos especiales para grupos familiares y parejas',
      'Políticas de equipaje optimizadas para artículos de playa'
    ]
  },
  {
    id: 'nat-4',
    destination: 'Santa Marta',
    country: 'Colombia',
    airportCode: 'SMR',
    description: 'El encuentro entre la Sierra Nevada y el Caribe. Aterriza en una de las pistas más bellas del país al borde del mar en el Aeropuerto Simón Bolívar.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 260000,
    flightType: 'Directo',
    duration: '1h 25m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Naturaleza & Tayrona', 'EcoTurismo'],
    rating: 4.85,
    airlines: ['Avianca', 'LATAM', 'Wingo'],
    pilotTip: 'Al despegar de Santa Marta por la pista 01, la aeronave realiza un viraje inmediato a la izquierda para esquivar las elevaciones de la Sierra Nevada. ¡Una maniobra técnica preciosa de contemplar desde la ventanilla!',
    highlights: [
      'Acceso rápido al Parque Nacional Natural Tayrona y Palomino',
      'Excelentes frecuencias de fin de semana para escapadas cortas',
      'Tarifas competitivas con equipaje deportivo y de camping',
      'Asistencia personalizada antes y durante el viaje'
    ]
  },

  // VUELOS INTERNACIONALES
  {
    id: 'intl-1',
    destination: 'Madrid',
    country: 'España',
    airportCode: 'MAD',
    description: 'La principal puerta de entrada a Europa. Vuelos nocturnos directos en aviones de fuselaje ancho con la mayor comodidad de cabina y servicios preferenciales.',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 2850000,
    flightType: 'Directo',
    duration: '10h 15m',
    category: 'europa',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Vuelo Nocturno', 'Equipaje Incluido'],
    rating: 4.9,
    airlines: ['Iberia', 'Air Europa', 'Avianca'],
    pilotTip: 'Volar la ruta nocturna de las 22:00 te permite sincronizar tu reloj biológico. Al ingresar al espacio aéreo de Madrid en la mañana, el viento de cola suele reducir el tiempo de vuelo en casi 30 minutos.',
    highlights: [
      'Alianza SkyTeam y Oneworld con acumulación de millas',
      'Acceso a Sala VIP en terminales de salida internacionales',
      'Configuración de cabina moderna de fuselaje ancho (Boeing 787 / Airbus A350)',
      'Selección de asiento gratuita con nuestra tarifa exclusiva'
    ]
  },
  {
    id: 'intl-2',
    destination: 'Miami',
    country: 'Estados Unidos',
    airportCode: 'MIA',
    description: 'Conexión directa al sol, los negocios y las compras. Rutas diarias con las mejores aerolíneas comerciales, ideales para viajes exprés o familiares.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 1350000,
    flightType: 'Directo',
    duration: '3h 45m',
    category: 'america',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Salidas Diarias', 'Compras'],
    rating: 4.8,
    airlines: ['American Airlines', 'Avianca', 'LATAM'],
    pilotTip: 'Al aproximarte a Miami desde el sur, solicita ventana en el costado izquierdo (asientos A/B/C). Tendrás una vista aérea espectacular de las islas de los cayos de Florida justo antes de tocar tierra.',
    highlights: [
      'Múltiples frecuencias diarias por la mañana y por la tarde',
      'Políticas de equipaje flexibles (Artículo de mano + Maleta de bodega)',
      'Check-in prioritario y asistencia ágil en counter',
      'Puntualidad histórica superior al 93%'
    ]
  },
  {
    id: 'intl-3',
    destination: 'Punta Cana',
    country: 'República Dominicana',
    airportCode: 'PUJ',
    description: 'Vuela al corazón del Caribe con las mejores tarifas aéreas. Te garantizamos tarifas preferenciales grupales e individuales para tus vacaciones resort.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 1250000,
    flightType: 'Directo',
    duration: '2h 30m',
    category: 'caribe',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Resorts All-Inclusive', 'Caribe'],
    rating: 4.75,
    airlines: ['Copa Airlines', 'Arajet', 'Avianca'],
    pilotTip: 'La aproximación visual a Punta Cana sobre el mar es increíblemente estable debido a los vientos alisios del noreste. Trata de conseguir asientos del lado derecho para ver la barrera de coral desde el aire.',
    highlights: [
      'Vuelos directos sin escalas con tarifas ultra-competitivas',
      'Opciones de equipaje deportivo sin costo adicional',
      'Excelente conectividad y horarios ideales para aprovechar el primer día',
      'Embarque prioritario familiar disponible'
    ]
  },
  {
    id: 'intl-4',
    destination: 'París',
    country: 'Francia',
    airportCode: 'CDG',
    description: 'Viaja a la Ciudad de la Luz con tarifas corporativas negociadas. Disfruta de la comodidad y el refinamiento de las aerolíneas europeas premium.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 3200000,
    flightType: 'Directo',
    duration: '10h 40m',
    category: 'europa',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Europa Premium', 'Cultura & Moda'],
    rating: 4.88,
    airlines: ['Air France', 'Iberia'],
    pilotTip: 'El aeropuerto Charles de Gaulle es enorme. Como pilotos, recomendamos reservar itinerarios con al menos 2 horas de margen en conexiones. Gestionamos tu reserva para cero imprevistos.',
    highlights: [
      'Vuelo directo nocturno para descansar y llegar fresco a Europa',
      'Kit de confort premium incluido en cabinas Turista y Ejecutiva',
      'Menús diseñados por reconocidos chefs franceses',
      'Posibilidad de stopover gratuito en París'
    ]
  },
  {
    id: 'intl-5',
    destination: 'Tokio',
    country: 'Japón',
    airportCode: 'NRT / HND',
    description: 'El vuelo definitivo hacia el lejano Oriente. Te conseguimos las mejores tarifas del mercado con escalas optimizadas y tiempos de espera mínimos.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 5200000,
    flightType: '1 Escala',
    duration: '19h 30m total',
    category: 'asia',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Larga Distancia', 'Asia Imperial'],
    rating: 4.95,
    airlines: ['ANA (All Nippon Airways)', 'Japan Airlines', 'United Airlines'],
    pilotTip: 'Para vuelos transpacíficos, las cabinas de los Boeing 787 están presurizadas a menor altitud (6,000 pies) con mayor humedad. Esto reduce drásticamente el jetlag y la deshidratación.',
    highlights: [
      'Catering internacional de primer nivel incluido',
      'Entretenimiento individual a bordo con más de 500 películas',
      'Escalas rápidas garantizadas en hubs modernos de EE.UU. o Europa',
      'Atención multilingüe durante todo el trayecto'
    ]
  }
];
