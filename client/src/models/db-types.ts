export type UserType = 'SUBLEASER' | 'SUBLETTOR';
// Subleaser - person listing, Sublettor - person wanting to sublet from someone

export interface Property {
  id?: number;
  headline: string;
  description: string;
  amenities: string;
  price: number;
  duration: number;
}
