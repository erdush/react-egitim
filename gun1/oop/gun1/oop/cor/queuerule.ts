import { BaseRule } from "./baserule";
import { Person } from "./person";

export class QueueRule extends BaseRule{
    public HandleRule(person: Person): void {
        // Queue rule kuralları buraya yazılacak. 
        let queueStatus : boolean = true;

        if(queueStatus){
            this.successorRule.HandleRule(person);
        }
    }

}