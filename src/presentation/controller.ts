export type HttpRequest<T = any> = {
  params?: Record<string, unknown>;
  body?: T;
};

export type HttpResponse = {
  status: number;
  body: any;
};

export interface Controller {
  handle: (request: HttpRequest) => HttpResponse;
}
