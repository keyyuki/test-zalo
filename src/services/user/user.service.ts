import { HTTPAdapter } from "@/lib/http-adapter.interface";
import { XtsHttpAdapter } from "@/lib/xts-http-adapter";

export class UserService {
  private httpAdapter: HTTPAdapter;

  constructor() {}

  setAdapter(adapter: HTTPAdapter) {
    this.httpAdapter = adapter;
  }

  async getUserInfo() {
    return this.httpAdapter.post({});
  }

  async updateUserInfo(body: any) {
    return this.httpAdapter.post(body);
  }

  static instance: UserService;

  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
      UserService.instance.setAdapter(XtsHttpAdapter.getInstance());
    }

    return UserService.instance;
  }
}
