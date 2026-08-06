export interface FlightRoute {
  id: string;
  destination: string;
  country: string;
  airportCode: string;
  description: string;
  image: string;
  priceFrom?: number;
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

export interface TelegramReaction {
  emoji: string;
  count: number;
  userReacted?: boolean;
}

export interface TelegramMessage {
  id?: string;
  sender: 'customer' | 'agent';
  senderName?: string;
  avatar?: string;
  text: string;
  time: string;
  flightBadge?: string;
  isVerified?: boolean;
  audioDuration?: string;
  attachmentType?: 'ticket' | 'image' | 'voice' | 'photo';
  attachmentTitle?: string;
  imageAttachment?: string;
  imageCaption?: string;
  replyTo?: {
    senderName: string;
    text: string;
  };
  reactions?: TelegramReaction[];
  isRead?: boolean;
}

export interface TelegramReview {
  id: string;
  locationHeader?: string; // e.g. "Turquía 🇹🇷"
  locationSubtitle?: string; // e.g. "Estambul, Turquía"
  photoUrl?: string; // Main client trip photo
  customerName: string;
  customerHandle?: string;
  customerAvatar: string;
  routeTitle: string;
  rating: number;
  date: string;
  messages: TelegramMessage[];
  testimonial?: string;
  verifiedPurchase: boolean;
  pinnedMessage?: string;
  isOnline?: boolean;
  lastSeen?: string;
  unreadCount?: number;
  phone?: string;
}

export interface TelegramConfig {
  channelUsername: string; // e.g. 'TravelUS'
  isChannel: boolean;
  customGreetingMessage: string;
}
