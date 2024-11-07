export interface DataStorage {
  get: <T>(key: string, defaultValue?: T) => Promise<T>;

  set: (key: string, value: any) => Promise<void>;
}
