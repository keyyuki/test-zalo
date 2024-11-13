export interface HTTPAdapter {
  post(body: any): Promise<any>;
  postWithHeader(body: any, headers: Record<string, string>): Promise<any>;
}
