export interface ApartmentUnit {
  id: string;
  name: string;
  tagline: string;
  area: number;
  privateGarden?: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpaces: number;
  priceFrom: number;
  floor: string;
  sunOrientation: string;
  image: string;
  features: string[];
  description: string;
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  span?: string;
  image?: string;
}

export interface PointOfInterest {
  id: string;
  name: string;
  category: 'nature' | 'education' | 'dining' | 'shopping' | 'health';
  categoryLabel: string;
  timeMinutes: number;
  distanceKm: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  unitPurchased: string;
  deliveredYear: string;
}
