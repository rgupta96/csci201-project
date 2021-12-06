export class Listing {
    id?: number;
    userId: number;
    propertyId: number;
    dateListed: number;
    numberConsidering: number;

    constructor(
        userID: number,
        propertyID: number,
        dateListed: number,
        numberConsidering: number,
        id?: number
    ) {
      this.id = id;
      this.userId = userID;
      this.propertyId = propertyID;
      this.dateListed = dateListed;
      this.numberConsidering = numberConsidering;
    }

    getId(): number {
      return this.id;
    }

    getUserID(): number {
      return this.userId;
    }

    setUserID(x: number) {
      this.userId = x;
    }

    getPropertyID(): number {
      return this.propertyId;
    }

    setPropertyID(x: number) {
      this.propertyId = x;
    }

    getDateListed(): number {
      return this.dateListed;
    }

    setDateListed(x: number) {
      this.dateListed = x;
    }

    getNumberConsidering(): number {
      return this.numberConsidering;
    }

    setNumberConsidering(x: number) {
      this.numberConsidering = x;
    }

    toString() {
      return "Listing [id=" + this.id + ", userID=" + this.userId + ", propertyID=" + this.propertyId + ", dateListed=" + this.dateListed + ", numberConsidering=" + this.numberConsidering + "]";
    }
  }

