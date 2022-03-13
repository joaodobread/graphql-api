import { User } from "../../entity/user";

export namespace FindUsersRepository {
  export type Result = User[];
}

export interface FindUsersRepository {
  findAll: () => FindUsersRepository.Result;
}
