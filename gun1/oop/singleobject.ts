export class Cache {
  private static instance: Cache;

  private constructor() {}

  public static Instance(): Cache {
    if (Cache.instance == null) {
      Cache.instance = new Cache();
    }

    return Cache.Instance;
  }
}

let c: Cache =  Cache.Instance();
Cache.Instance();
