import { IMernisService } from "./IMernisService";
import { Mernis1 } from "./Mernis1";

export class MernisContext{
    
    private _service : IMernisService;
    /**
     *
     */
    constructor(service : IMernisService) {
        this._service = service;
    }

    public checkRegisterService():boolean{
        return this._service.CheckRegisterService("");
    }
    

}