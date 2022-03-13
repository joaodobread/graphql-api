import { UserRepository } from "../../data/user-repository";
import { AddUserUseCase } from "../../use-case/add-user";

export const addUserFactory = () =>
  new AddUserUseCase(UserRepository.getInstance());
