
export class User {
    id?: number;
    firstName: string;
    lastName: string;
    userType: number;
    loginType: number;
    dateCreated: number;
  
    constructor(
        firstName: string,
        lastName: string,
        userType: number,
        loginType: number,
        dateCreated: number,
        id?: number
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userType = userType;
      this.loginType = loginType;
      this.dateCreated = dateCreated;
    }
  
    getId(): number {
      return this.id;
    }
  
    getFirstName(): string {
      return this.firstName;
    }
  
    setFirstName(x: string) {
      this.firstName = x;
    }
  
    getLastName(): string {
      return this.lastName;
    }
  
    setLastName(x: string) {
      this.lastName = x;
    }
  
    getUserType(): number {
      return this.userType;
    }
  
    setUserType(x: number) {
      this.userType = x;
    }
  
    getLoginType(): number {
      return this.loginType;
    }
  
    setLoginType(x: number) {
      this.loginType = x;
    }
  
    getDateCreated(): number {
      return this.dateCreated;
    }
  
    setDateCreated(x: number) {
      this.dateCreated = x;
    }

    toString() {
      return "User [id=" + this.id + ", firstName=" + this.firstName + ", lastName=" + this.lastName + ", userType=" + this.userType + ", loginType=" + this.loginType + ", dateCreated=" + this.dateCreated + "]";
    }
  }
  