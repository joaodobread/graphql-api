import { UserRepository } from "../../data/user-repository";
import { FindUserUseCase } from "../../use-case/find-user";

export const findUserFactory = () =>
  new FindUserUseCase(UserRepository.getInstance());
