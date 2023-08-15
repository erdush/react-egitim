export class ContactModel {
  public name: string;
  public surname: string;
  public phone: string;
  public email: string;
  /**
   *
   */
  constructor() {
    this.email = this.phone = this.surname = this.name = "";
  }
}
