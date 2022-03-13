import { FindUserRepository } from "./contracts";

export namespace FindUserUseCase {
  export type Params = {
    id: string;
  };
}

export class FindUserUseCase {
  constructor(private readonly userRepository: FindUserRepository) {}

  findOne(params: FindUserUseCase.Params) {
    return this.userRepository.findOne(params);
  }
}
