export interface FlightRoute {
  id: string;
  destination: string;
  country: string;
  airportCode: string;
  description: string;
  image: string;
  priceFrom: number;
  flightType: 'Directo' | '1 Escala' | '2 Escalas';
  duration: string;
  category: 'nacional' | 'internacional' | 'america' | 'europa' | 'asia' | 'caribe' | 'oceania';
  routeScope?: 'Nacional' | 'Internacional';
  tags: string[];
  rating: number;
  airlines: string[];
  pilotTip: string; // The USP: Tip from the pilot owner!
  highlights: string[];
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  cabinClass: 'Económica' | 'Premium Economy' | 'Ejecutiva (Business)' | 'Primera Clase';
  tripType: 'Ida y Vuelta' | 'Solo Ida' | 'Multidestino';
  notes: string;
}

export interface TelegramMessage {
  sender: 'customer' | 'agent';
  senderName?: string;
  avatar?: string;
  text: string;
  time: string;
  flightBadge?: string;
  isVerified?: boolean;
  audioDuration?: string;
  attachmentType?: 'ticket' | 'image' | 'voice';
  attachmentTitle?: string;
}

export interface TelegramReview {
  id: string;
  customerName: string;
  customerHandle?: string;
  customerAvatar: string;
  routeTitle: string;
  rating: number;
  date: string;
  messages: TelegramMessage[];
  verifiedPurchase: boolean;
}

export interface TelegramConfig {
  channelUsername: string; // e.g. 'TravelUS'
  isChannel: boolean;
  customGreetingMessage: string;
}
