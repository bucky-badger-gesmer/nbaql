import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./src/typeDefs.js";
import { playerIndex, franchiseHistory } from "./src/fieldResolvers/index.js";

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    playerIndex: playerIndex,
    franchiseHistory: franchiseHistory,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
