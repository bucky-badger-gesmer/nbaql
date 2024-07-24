const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { playerIndex, franchiseHistory } = require("./fieldResolvers");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    playerIndex: playerIndex,
    franchiseHistory: franchiseHistory,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== "production",
  playground: process.env.NODE_ENV !== "production",
});

// Specify the port
const port = process.env.PORT || 4000;

// Start the server
server.listen({ port: port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
