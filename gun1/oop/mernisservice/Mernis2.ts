import { IMernisService } from "./IMernisService";

export class Mernis2 implements IMernisService{

    constructor() {
        console.log("Mernis 2 çalıştı");
    }
    CheckRegisterService(name: string): boolean {
        return true;
    }

}