import { IDataStorage } from "./data-storage.interface";

export class AppDataStorage implements IDataStorage {
  private storage: IDataStorage;

  setStorage(storage: IDataStorage) {
    this.storage = storage;
  }

  get<T>(key: string, defaultValue?: T): Promise<T> {
    return this.storage.get(key, defaultValue);
  }

  set(key: string, value: any): Promise<void> {
    return this.storage.set(key, value);
  }

  private static instance: AppDataStorage;

  static getInstance() {
    if (!AppDataStorage.instance) {
      AppDataStorage.instance = new AppDataStorage();
    }

    return AppDataStorage.instance;
  }
}
