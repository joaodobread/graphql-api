import Router from "koa-router";
import { AddUserController } from "../presentation/add-user-controller";
import { FindUserController } from "../presentation/find-user-controller";
import { FindUsersController } from "../presentation/find-users-controller";
import { koaAdapter } from "./adapters/koa-request-adapter";
import { addUserFactory } from "./factories/add-user-factory";
import { findUserFactory } from "./factories/find-user-factory";
import { findUsersFactory } from "./factories/find-users-factory";

const router = new Router();

router.post("/users", koaAdapter(new AddUserController(addUserFactory())));
router.get("/users/:id", koaAdapter(new FindUserController(findUserFactory())));
router.get("/users", koaAdapter(new FindUsersController(findUsersFactory())));

export { router };
