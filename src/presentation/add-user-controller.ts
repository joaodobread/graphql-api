import { AddUserUseCase } from "../use-case/add-user";
import { Controller, HttpRequest, HttpResponse } from "./controller";

type Body = { name: string; email: string };

export class AddUserController implements Controller {
  constructor(private readonly addUserUseCase: AddUserUseCase) {}
  handle(request: HttpRequest<Body>): HttpResponse {
    if (!request.body)
      return {
        body: { error: "no body provided" },
        status: 400,
      };
    return {
      body: this.addUserUseCase.addUser(request.body),
      status: 201,
    };
  }
}
