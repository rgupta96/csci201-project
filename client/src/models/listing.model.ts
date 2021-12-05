
export class Listing {
    id?: number;
    userID: number;
    propertyID: number;
    dateListed: number;
    numberConsidering: number;
    dateCreated: number;
    active: number;
  
    constructor(
        userID: number,
        propertyID: number,
        dateListed: number,
        numberConsidering: number,
        dateCreated: number,
        active: number,
        id?: number
    ) {
      this.id = id;
      this.userID = userID;
      this.propertyID = propertyID;
      this.dateListed = dateListed;
      this.numberConsidering = numberConsidering;
      this.dateCreated = dateCreated;
      this.active = active;
    }
  
    getId(): number {
      return this.id;
    }
  
    getUserID(): number {
      return this.userID;
    }
  
    setUserID(x: number) {
      this.userID = x;
    }
  
    getPropertyID(): number {
      return this.propertyID;
    }
  
    setPropertyID(x: number) {
      this.propertyID = x;
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
    getActive(): number {
        return this.active;
    } 
    
    setActive(x: number) {
        this.active = x;
    }
  
    toString() {
      return "Listing [id=" + this.id + ", userID=" + this.userID + ", propertyID=" + this.propertyID + ", dateListed=" + this.dateListed + ", numberConsidering=" + this.numberConsidering + ", dateCreated=" + this.dateCreated + ", active=" + this.active + "]";
    }
  }
  