export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.gemspotke.co.ke/v1';

export const APP_NAME = 'GemSpot KE';

export const CATEGORIES = {
  NATURE: 'nature',
  EATS: 'eats',
  NIGHTLIFE: 'nightlife',
  ACTION: 'action',
};

export const CITIES = [
  'Nairobi',
  'Mombasa',
  'Nakuru',
  'Kisumu',
  'Naivasha',
  'Nanyuki',
];

export const MPESA_TILL_STATUS = {
  INSTANT: 'Instant (Confirmed)',
  DELAYED: 'Delayed / Cash Preferred',
  UNAVAILABLE: 'Not Available',
};