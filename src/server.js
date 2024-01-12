const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { playerIndex } = require("./fieldResolvers/playerIndex");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    playerIndex: playerIndex,
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
