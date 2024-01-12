const { ApolloServer, gql } = require("apollo-server");

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// Specify the port
const port = process.env.PORT || 4000;

// Start the server
server.listen({ port: port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
