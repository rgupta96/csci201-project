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

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  userType: number;
  loginType: number;
  dateCreated: number;
}

export interface Listing {
  id?: number;
  userID: number;
  propertyID: number;
  dateListed: number;
  numberConsidering: number;
  dateCreated: number;
  active: number;
}
