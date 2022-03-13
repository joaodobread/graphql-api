import { Context } from "koa";
import { Controller, HttpRequest } from "../../presentation/controller";

export const koaAdapter = (controller: Controller) => {
  return async ({ request, response, params }: Context) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      params: params,
    };
    const res = await controller.handle(httpRequest);
    response.body = res.body;
    response.status = res.status;
  };
};
