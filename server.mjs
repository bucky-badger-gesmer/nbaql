import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./src/typeDefs.js";
import {
  playerDashboardByYearOverYearCombined,
  playerIndex,
  franchiseHistory,
} from "./src/fieldResolvers/index.js";

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    playerDashboardByYearOverYearCombined:
      playerDashboardByYearOverYearCombined,
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
