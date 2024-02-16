import { Context } from "apollo-server-core";
import { loadFiles } from "@graphql-tools/load-files";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    hello: (root: null, args: {}, context: Context): string => "Hello worlds!"
  }
};

export const getResolvers = async () => {
  const resolvers = await loadFiles("**/*resolvers.{js,ts}");
  return resolvers;
};
