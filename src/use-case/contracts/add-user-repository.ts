import { User } from "../../entity/user";

export namespace AddUserRepository {
  export type Params = {
    name: string;
    email: string;
  };

  export type Result = User;
}

export interface AddUserRepository {
  addUser: (params: AddUserRepository.Params) => AddUserRepository.Result;
}
