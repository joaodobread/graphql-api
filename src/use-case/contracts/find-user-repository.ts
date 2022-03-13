import { User } from "../../entity/user";

export namespace FindUserRepository {
  export type Result = User | undefined;
  export type Params = { id: string };
}

export interface FindUserRepository {
  findOne: (params: FindUserRepository.Params) => FindUserRepository.Result;
}
