import { ApolloServer } from "apollo-server-express";
import Express from "express";
import playgroundMiddleware from "graphql-playground-middleware-express";

// Graphql imports
import { getResolvers } from "./resolvers";
import { getTypeDefs } from "./schema";

// REST route imports
import { getRoutes } from "./routes";

const PORT = 4444;

const startServer = async () => {
  const app = Express();
  const server = new ApolloServer({
    typeDefs: await getTypeDefs(),
    resolvers: await getResolvers(),
  });

  await server.start();

  server.applyMiddleware({ app });
  // Middleware
  // app.get(
  //   "/graphql",
  //   //@ts-ignore
  //   playgroundMiddleware({
  //     endpoint: "/graphql",
  //     env: process.env,
  //     workspaceName: "Example App",
  //   })
  // );

  const routes = getRoutes();

  routes.forEach((route: any) => {
    console.log("adding routes:", route);
    app.use(route.route, route.handler);
  });

  app
    .listen(PORT)
    .once("listening", () => {
      console.log(`🚀 Server is ready at http://localhost:${PORT}/graphql`);

    })
    .once("error", (err: any): void => {
      console.error("💀 Error starting the node server", err);
    });
};

startServer();
