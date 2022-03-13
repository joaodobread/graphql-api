import { FindUserUseCase } from "../use-case/find-user";
import { FindUsersUseCase } from "../use-case/find-users";
import { Controller, HttpRequest, HttpResponse } from "./controller";

type Body = { id: string };

export class FindUserController implements Controller {
  constructor(private readonly findUserUseCase: FindUserUseCase) {}
  handle(request: HttpRequest<Body>): HttpResponse {
    if (!request.params?.id)
      return {
        body: "Missing user id",
        status: 400,
      };
    const user = this.findUserUseCase.findOne({
      id: request.params.id as string,
    });

    if (!user)
      return {
        body: {},
        status: 404,
      };

    return {
      body: user,
      status: 200,
    };
  }
}
