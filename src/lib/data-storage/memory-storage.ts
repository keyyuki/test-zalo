import { IDataStorage } from "./data-storage.interface";

export class MemoryStorage implements IDataStorage {
  private storage: Map<string, any> = new Map();

  async get<T>(key: string, defaultValue?: T): Promise<T> {
    return this.storage.get(key) ?? null;
  }

  async set(key: string, value: any) {
    this.storage.set(key, value);
  }
}
