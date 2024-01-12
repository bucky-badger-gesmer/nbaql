const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { playerIndex } = require("./fieldResolvers");

// Construct a schema using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    playerIndex: [Player]
  }

  type Player {
    id: ID
    lastName: String
    firstName: String
    playerSlug: String
    team: NbaPlayerIndexTeamInfo
    jerseyNumber: String
    position: String
    height: String
    weight: String
    college: String
    country: String
    draft: NbaPlayerIndexDraft
    active: Boolean
    headlineStats: NbaPlayerIndexHeadlineStats
    career: NbaPlayerIndexCareer
  }

  type NbaPlayerIndexTeamInfo {
    id: ID
    slug: String
    city: String
    name: String
    abbreviation: String
  }

  type NbaPlayerIndexDraft {
    year: Int
    round: Int
    pick: Int
  }

  type NbaPlayerIndexHeadlineStats {
    points: Float
    rebounds: Float
    assists: Float
    timeFrame: String
  }

  type NbaPlayerIndexCareer {
    fromYear: String
    toYear: String
  }
`);

// The root provides the resolver functions for the API
const root = {
  hello: () => {
    return "Hello World!";
  },
  playerIndex: playerIndex,
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface
  })
);

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
