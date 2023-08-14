import { BaseRule } from "./baserule";
import { Person } from "./person";

export class AuthRule extends BaseRule{
    public HandleRule(person: Person): void {
        // Auth kontrol kodları yazılacak. 
        console.log("Auth kontrol yapıldı.")

        let authStatus : boolean = true;

        if(!person.headofficeemployee){
            authStatus = false;
        }

        if(authStatus){
            this.successorRule.HandleRule(person);
        }
    }

}