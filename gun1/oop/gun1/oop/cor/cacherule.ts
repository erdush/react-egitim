import { BaseRule } from "./baserule";
import { Person } from "./person";

export class CacheRule extends BaseRule {
  public HandleRule(person: Person): void {
    // Cache kontrolm kodları buraya yazılacak.

    let cacheStatus: boolean = true;

    if (person.city == "Ankara") {
      cacheStatus = false;
    }

    if (cacheStatus) {
      this.successorRule.HandleRule(person);
    }
  }
}
