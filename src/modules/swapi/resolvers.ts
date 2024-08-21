import { Context } from "apollo-server-core";
import { GraphQLFieldResolver } from "graphql";

type Args = { id: string };

const Query: Record<string, GraphQLFieldResolver<{}, Context, any>> = {
  swapiCharacterById: async (_, args: Args, ctx) => {
    const char = await fetch(`https://swapi.dev/api/people/${args.id}/`);

    if (char.status == 404) {
      return {
        content: {
          message: "Character not found",
          localizedMessage: "Personaje no encontrado",
        },
        __typename: "StarWarsCharacterNotFound",
      };
    }

    if (new Date().getSeconds() % 3 == 0) {
      throw new Error("INTERNAL_SERVER_ERROR");
    }

    return { ...(await char.json()), __typename: "StarWarsCharacter" };
  },
};

const StarWarsCharacter = {
  //@ts-ignore
  name: (parent) => {
    return parent.name;
  },
  // height: () => {
  //   return "171";
  // },
  // mass: () => {
  //   return "100";
  // },
  //@ts-ignore
  gender: (parent) => {
    return parent.gender.toUpperCase();
  },
};

// You can add new Object Resolvers to the default export and the server will pick them up automatically
export default {
  Query,
  StarWarsCharacter,
};
