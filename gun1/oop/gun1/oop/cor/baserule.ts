import { Person } from "./person";

export abstract class BaseRule{
    protected successorRule : BaseRule;

    public SetNextRule(rule : BaseRule) : void{
        this.successorRule = rule;
    }

    public abstract HandleRule(person : Person):void;
}