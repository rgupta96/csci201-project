export type UserType = 'SUBLEASER' | 'SUBLETTOR';
// Subleaser - person listing, Sublettor - person wanting to sublet from someone

export interface Property {
  id?: number;
  headline: string;
  description: string;
  address: string;
  amenities: string;
  price: number;
  duration: number;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  userType: number;
  loginType: number;
  dateCreated: number;
  email: string
}

export interface Listing {
  id?: number;
  userId: number;
  propertyId: number;
  dateListed: number;
  numberConsidering: number;
}
