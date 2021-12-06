export class Listing {
    id?: number;
    userId: number;
    propertyId: number;
    dateListed: number;
    numberConsidering: number;
    dateCreated: number;

    constructor(
        userID: number,
        propertyID: number,
        dateListed: number,
        numberConsidering: number,
        dateCreated: number,
        id?: number
    ) {
      this.id = id;
      this.userId = userID;
      this.propertyId = propertyID;
      this.dateListed = dateListed;
      this.numberConsidering = numberConsidering;
      this.dateCreated = dateCreated;
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

    getDateCreated(): number {
        return this.dateCreated;
    }

    setDateCreated(x: number) {
        this.dateCreated = x;
    }

    toString() {
      return "Listing [id=" + this.id + ", userID=" + this.userId + ", propertyID=" + this.propertyId + ", dateListed=" + this.dateListed + ", numberConsidering=" + this.numberConsidering + ", dateCreated=" + this.dateCreated + "]";
    }
  }

