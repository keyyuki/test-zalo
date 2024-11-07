export class HttpRequestException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HttpRequestException";
  }
}
