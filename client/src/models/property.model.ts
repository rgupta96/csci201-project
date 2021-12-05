
export class Property {
  id?: number;
  headline: string;
  description: string;
  address: string;
  amenities: string;
  price: number;
  duration: number;

  constructor(
      headline: string,
      description: string,
      address: string,
      amenities: string,
      price: number,
      duration: number,
      id?: number
  ) {
    this.id = id;
    this.headline = headline;
    this.description = description;
    this.address = address;
    this.amenities = amenities;
    this.price = price;
    this.duration = duration;
  }

  getId(): number {
    return this.id;
  }

  getHeadline(): string {
    return this.headline;
  }

  setHeadline(h: string) {
    this.headline = h;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string) {
    this.description = description;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    this.address = address;
  }

  getAmenities() {
    return this.amenities;
  }

  setAmenities(amenities: string) {
    this.amenities = amenities;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getDuration(): number {
    return this.duration;
  }

  setDuration(duration: number) {
    this.duration = duration;
  }

  toString() {
    return "Property [id=" + this.id + ", headline=" + this.headline + ", desc=" + this.description + ", address=" + this.address + ", address=" + this.address + ", amenities=" + this.amenities + ", price=" + this.price + ", duration=" + this.duration + "]";
  }
}
