export interface IDataStorage {
  get: <T>(key: string, defaultValue?: T) => Promise<T>;

  set: (key: string, value: any) => Promise<void>;
}
