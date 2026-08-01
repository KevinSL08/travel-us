import { FlightRoute } from '../types';
import bogotaImg from '../assets/images/bogota_night_skyline_1785617738908.jpg';
import medellinImg from '../assets/images/medellin_comuna_13_1785617983921.jpg';
import caliImg from '../assets/images/cali_feria_salsa_1785618050742.jpg';
import madridImg from '../assets/images/madrid_cibeles_fountain_1785618135352.jpg';
import parisImg from '../assets/images/paris_eiffel_twilight_1785618208244.jpg';

export const flightRoutes: FlightRoute[] = [
  // VUELOS NACIONALES
  {
    id: 'nat-1',
    destination: 'Medellín',
    country: 'Colombia',
    airportCode: 'MDE / EOH',
    description: 'La ciudad de la eterna primavera. Conexión directa al Aeropuerto José María Córdova (Rionegro) u Olaya Herrera con las mejores aerolíneas nacionales.',
    image: medellinImg,
    flightType: 'Directo',
    duration: '55m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Negocios & Cultura', 'Disponibilidad Diaria'],
    rating: 4.9,
    airlines: ['Avianca', 'LATAM', 'Wingo', 'Clic'],
    pilotTip: 'La aproximación a Rionegro (MDE) entre las montañas del valle de Aburrá requiere pilotos con entrenamiento de alta montaña. Volamos con tripulaciones experimentadas en vientos cruzados.',
    highlights: [
      'Conexión directa súper rápida con puente aéreo diario',
      'Opciones de vuelo directo al aeropuerto urbano Olaya Herrera (EOH)',
      'Tarifas corporativas flexibles para viajes exprés el mismo día',
      'Soporte directo por Telegram con Brayan ante cualquier cambio de itinerario'
    ]
  },
  {
    id: 'nat-2',
    destination: 'Bogotá',
    country: 'Colombia',
    airportCode: 'BOG',
    description: 'La capital de Colombia y el principal centro de conexiones aéreas del país. Vuelos directos diarios al Aeropuerto Internacional El Dorado.',
    image: bogotaImg,
    flightType: 'Directo',
    duration: '1h 00m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Capital & Negocios', 'Puente Aéreo'],
    rating: 4.88,
    airlines: ['Avianca', 'LATAM', 'Wingo', 'Clic'],
    pilotTip: 'El Dorado (BOG) se ubica a 2,548 metros de altitud. La menor densidad del aire requiere un cálculo preciso de longitud de pista y peso al despegar. ¡Máxima precisión de ingeniería aeronáutica!',
    highlights: [
      'Puente aéreo con salidas continuas cada hora',
      'Acceso a salas VIP y counters de atención rápida',
      'Manejo de equipaje prioritario de bodega y mano',
      'Atención personalizada para vuelos ejecutivos y familiares'
    ]
  },
  {
    id: 'nat-3',
    destination: 'Cali',
    country: 'Colombia',
    airportCode: 'CLO',
    description: 'La capital mundial de la salsa y centro económico del suroccidente colombiano. Vuelos directos al Aeropuerto Internacional Alfonso Bonilla Aragón.',
    image: caliImg,
    flightType: 'Directo',
    duration: '1h 05m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Salsa & Gastronomía', 'Frecuencia Diaria'],
    rating: 4.86,
    airlines: ['Avianca', 'LATAM', 'Wingo'],
    pilotTip: 'Ubicado en el fértil valle del río Cauca, el aeropuerto Alfonso Bonilla Aragón ofrece condiciones meteorológicas óptimas y aproximaciones muy suaves durante todo el año.',
    highlights: [
      'Conexión sin escalas desde Bogotá, Medellín y la Costa Atlántica',
      'Flexibilidad de cambio de horario en caso de eventos o reuniones',
      'Descuentos especiales para grupos y eventos corporativos',
      'Gestión rápida de tiquetes vía Telegram directamente con Brayan'
    ]
  },
  {
    id: 'nat-4',
    destination: 'San Andrés Islas',
    country: 'Colombia',
    airportCode: 'ADZ',
    description: 'El mar de los siete colores en el Caribe colombiano. Tiquetes aéreos a tarifas consolidadas ideales para vacaciones de sol, descanso y playa.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    flightType: 'Directo',
    duration: '2h 05m',
    category: 'nacional',
    routeScope: 'Nacional',
    tags: ['🇨🇴 Vuelo Nacional', 'Isla Caribeña', 'Vacacional'],
    rating: 4.95,
    airlines: ['Avianca', 'LATAM', 'Wingo'],
    pilotTip: 'El aeropuerto Gustavo Rojas Pinilla (ADZ) tiene la pista justo al lado del mar. Pide ventana en el lado derecho para contemplar los cambios de tonalidad del agua y el arrecife de coral en el viraje final.',
    highlights: [
      'Vuelos directos desde las principales ciudades del país',
      'Incluye orientación sobre la tarjeta de turismo OCCRE para el ingreso',
      'Descuentos especiales para parejas y grupos familiares',
      'Políticas de equipaje optimizadas para artículos de playa'
    ]
  },

  // VUELOS INTERNACIONALES
  {
    id: 'intl-1',
    destination: 'Madrid',
    country: 'España',
    airportCode: 'MAD',
    description: 'La principal puerta de entrada a Europa. Vuelos nocturnos directos en aviones de fuselaje ancho con la mayor comodidad de cabina y servicios preferenciales.',
    image: madridImg,
    flightType: 'Directo',
    duration: '10h 15m',
    category: 'europa',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Vuelo Nocturno', 'Equipaje Incluido'],
    rating: 4.92,
    airlines: ['Iberia', 'Air Europa', 'Avianca'],
    pilotTip: 'Volar la ruta nocturna de las 22:00 te permite sincronizar tu reloj biológico. Al ingresar al espacio aéreo de Madrid en la mañana, el viento de cola suele reducir el tiempo de vuelo en casi 30 minutos.',
    highlights: [
      'Alianza SkyTeam y Oneworld con acumulación de millas',
      'Acompañamiento en guías para control migratorio de Barajas',
      'Configuración de cabina moderna de fuselaje ancho (Boeing 787 / Airbus A350)',
      'Selección de asiento y equipaje incluido con nuestra tarifa consolidada'
    ]
  },
  {
    id: 'intl-2',
    destination: 'París',
    country: 'Francia',
    airportCode: 'CDG',
    description: 'Viaja a la Ciudad de la Luz con tarifas corporativas negociadas. Disfruta de la comodidad y el refinamiento de las aerolíneas europeas premium.',
    image: parisImg,
    flightType: 'Directo',
    duration: '10h 40m',
    category: 'europa',
    routeScope: 'Internacional',
    tags: ['🌐 Internacional', 'Europa Premium', 'Cultura & Arte'],
    rating: 4.9,
    airlines: ['Air France', 'Iberia', 'Avianca'],
    pilotTip: 'El aeropuerto Charles de Gaulle es un hub internacional de vanguardia. Te asesoramos sobre las mejores conexiones en la terminal 2E para un ingreso ágil a Francia.',
    highlights: [
      'Vuelo directo nocturno para descansar y llegar en la mañana a París',
      'Kit de confort e itinerarios flexibles de retorno',
      'Asesoría técnica para evitar contratiempos en migración Schengen',
      'Atención rápida y reservación directa vía Telegram con Brayan'
    ]
  }
];
