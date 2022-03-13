import { randomUUID } from "crypto";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { graphqlHTTP } from "koa-graphql";
import mount from "koa-mount";
import { Arg, buildSchema, Mutation, Query, Resolver } from "type-graphql";
import { Container, Service } from "typedi";

import { router } from "./routes";

@Service("StringService")
class StringService {
  genUUID() {
    return randomUUID();
  }
}
Container.set("StringService", new StringService());

@Resolver(() => String)
class StringResolver {
  constructor(private readonly service: StringService) {
    console.log(">>>", service);
  }

  @Query(() => String, { name: "stringResolver" })
  getString() {
    return randomUUID();
  }

  @Mutation(() => String)
  createString(@Arg("id") id: string) {
    return this.service.genUUID();
  }
}

export const bootstrap = async () => {
  const app = new Koa();
  const schema = await buildSchema({
    resolvers: [StringResolver],
    container: Container,
  });

  app.use(
    mount(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    )
  );

  app.use(bodyParser());
  app.use(router.routes());
  app.listen(3000);
  console.log("App listening: 3000");
};
