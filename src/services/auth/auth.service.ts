import { HTTPAdapter } from "@/lib/http-adapter.interface";
import { XtsHttpAdapter } from "@/lib/xts-http-adapter";

export class AuthService {
  private httpAdapter: HTTPAdapter;

  constructor() {}

  setAdapter(adapter: HTTPAdapter) {
    this.httpAdapter = adapter;
  }

  async getXtsAccessToken(params: {
    zaloAccessToken: string;
    zaloUserId: string;
    name?: string;
    phone?: string;
  }): Promise<{
    token: string;
    user: any;
  } | null> {
    return this.httpAdapter.post({});
  }

  static instance: AuthService;

  static getInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
      AuthService.instance.setAdapter(XtsHttpAdapter.getInstance());
    }

    return AuthService.instance;
  }
}
