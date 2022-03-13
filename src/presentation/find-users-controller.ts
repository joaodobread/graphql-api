import { FindUsersUseCase } from "../use-case/find-users";
import { Controller, HttpRequest, HttpResponse } from "./controller";

type Body = { name: string; email: string };

export class FindUsersController implements Controller {
  constructor(private readonly findUsersUseCase: FindUsersUseCase) {}
  handle(request: HttpRequest<Body>): HttpResponse {
    return {
      body: this.findUsersUseCase.findAll(),
      status: 200,
    };
  }
}
