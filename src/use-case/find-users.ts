import { FindUsersRepository } from "./contracts";

export class FindUsersUseCase {
  constructor(private readonly userRepository: FindUsersRepository) {}

  findAll() {
    return this.userRepository.findAll();
  }
}
