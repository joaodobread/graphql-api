import { UserRepository } from "../../data/user-repository";
import { FindUsersUseCase } from "../../use-case/find-users";

export const findUsersFactory = () =>
  new FindUsersUseCase(UserRepository.getInstance());
