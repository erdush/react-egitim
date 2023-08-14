import { IMernisService } from "./IMernisService";

export class Mernis1 implements IMernisService{

    /**
     *
     */
    constructor() {
        console.log("Mernis 1 çalıştı");
    }

    CheckRegisterService(name: string): boolean {
        // Mernis1 servis bağlantı kodları
        return true;
    }

}