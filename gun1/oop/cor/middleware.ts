import { AuthRule } from "./authrule";
import { BaseRule } from "./baserule";
import { CacheRule } from "./cacherule";
import { Person } from "./person";
import { QueueRule } from "./queuerule";

export class Middleware {

    authRule : BaseRule = new AuthRule();
    cacheRule : BaseRule = new CacheRule();
    queueRule : BaseRule = new QueueRule();
  constructor() {
    // Zinciri tanımla
    this.authRule.SetNextRule(this.cacheRule);
    this.cacheRule.SetNextRule(this.queueRule);
  }

  public  SetPerson(person: Person) {
    // zinciri tetikle
    this.authRule.HandleRule(person);
  }
}
