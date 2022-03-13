import { AddUserRepository } from "./contracts";

export namespace AddUserUseCase {
  export type Params = {
    email: string;
    name: string;
  };
}

export class AddUserUseCase {
  constructor(private readonly userRepository: AddUserRepository) {}

  addUser(params: AddUserUseCase.Params) {
    return this.userRepository.addUser(params);
  }
}
