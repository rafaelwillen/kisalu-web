export default class HTTPError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public error?: Error
  ) {
    super();
  }
}
