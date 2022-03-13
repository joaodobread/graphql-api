import { User } from "../entity/user";
import { randomUUID } from "crypto";
import {
  AddUserRepository,
  FindUserRepository,
  FindUsersRepository,
} from "../use-case/contracts";

export class UserRepository
  implements AddUserRepository, FindUserRepository, FindUsersRepository
{
  private static __instance: UserRepository;
  public static getInstance() {
    if (!this.__instance) this.__instance = new UserRepository();
    return this.__instance;
  }

  private users: User[] = [
    {
      id: "feae0d21-df33-4082-8493-914477e11a9f",
      email: "joao@gmail.com",
      name: "Joao",
    },
    {
      id: "72d04411-8ebe-4482-961b-663bbcca6097",
      email: "joao@gmail.com",
      name: "Joao",
    },
    {
      id: "a72cbe9d-e6fe-45a5-b3ec-64fdc393e5a0",
      email: "joao@gmail.com",
      name: "Joao",
    },
    {
      id: "8aa1324a-84b0-473c-a5bb-07d02ffed7e2",
      email: "joao@gmail.com",
      name: "Joao",
    },
    {
      id: "bc6105c5-c3ee-4f7a-8d5e-7ba1b791768a",
      email: "joao@gmail.com",
      name: "Joao",
    },
    {
      id: "5a3c360e-6936-415a-add6-093f93cf8489",
      email: "joao@gmail.com",
      name: "Joao",
    },
  ];

  addUser({ email, name }: AddUserRepository.Params): AddUserRepository.Result {
    const user: User = {
      id: randomUUID(),
      email,
      name,
    };
    this.users.push(user);
    return user;
  }

  findAll(): FindUsersRepository.Result {
    return this.users;
  }

  findOne({ id }: FindUserRepository.Params): FindUserRepository.Result {
    return this.users.find((user) => user.id === id);
  }
}
