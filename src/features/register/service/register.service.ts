import { HTTPAdapter } from "@/lib/http-adapter.interface";
import { XtsHttpAdapter } from "@/lib/xts-http-adapter";

export class RegisterService {
  private httpAdapter: HTTPAdapter;

  constructor() {}

  setAdapter(adapter: HTTPAdapter) {
    this.httpAdapter = adapter;
  }

  async register(params: {
    name: string;
    phone: string;
    address: string;
    province: string;
    district: string;
    ward: string;
  }): Promise<{ accessToken: string }> {
    return this.httpAdapter.post({});
  }

  static instance: RegisterService;

  static getInstance() {
    if (!RegisterService.instance) {
      RegisterService.instance = new RegisterService();
      RegisterService.instance.setAdapter(XtsHttpAdapter.getInstance());
    }

    return RegisterService.instance;
  }
}
