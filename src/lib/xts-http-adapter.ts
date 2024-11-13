import { IDataStorage, MemoryStorage, STORAGE_KEY } from "./data-storage";
import { HttpRequestException } from "./exception/http-request.exception";
import { HTTPAdapter } from "./http-adapter.interface";

export class XtsHttpAdapter implements HTTPAdapter {
  private dataStorage: IDataStorage;

  constructor() {
    this.dataStorage = new MemoryStorage();
  }

  setStorage(storage: IDataStorage) {
    this.dataStorage = storage;
  }

  async post(body: any): Promise<any> {
    const token = await this.dataStorage.get(STORAGE_KEY.XTS_TOKEN, "");
    const deviceId = await this.dataStorage.get(STORAGE_KEY.DEVICEID, "");
    const domain = await this.dataStorage.get(STORAGE_KEY.DOMAIN, "");

    return fetch(`${domain}/api/v1/xts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "x-device-id": deviceId,
        domain: domain,
      },
      body: body,
    })
      .then((response) => response.json())
      .catch((error) => {
        throw new HttpRequestException(error.message);
      });
  }

  async postWithHeader(
    body: any,
    headers: Record<string, string>
  ): Promise<any> {
    const token = await this.dataStorage.get(STORAGE_KEY.XTS_TOKEN, "");
    const deviceId = await this.dataStorage.get(STORAGE_KEY.DEVICEID, "");
    const domain = await this.dataStorage.get(STORAGE_KEY.DOMAIN, "");
    return fetch(`${domain}/api/v1/xts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "x-device-id": deviceId,
        domain: domain,
        ...headers,
      },
      body: body,
    })
      .then((response) => response.json())
      .catch((error) => {
        throw new HttpRequestException(error.message);
      });
  }

  static instance: XtsHttpAdapter;

  static getInstance() {
    if (!XtsHttpAdapter.instance) {
      XtsHttpAdapter.instance = new XtsHttpAdapter();
    }

    return XtsHttpAdapter.instance;
  }
}
