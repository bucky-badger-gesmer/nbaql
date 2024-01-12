const { gql } = require("apollo-server");

const typeDefs = gql`
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
`;

module.exports = { typeDefs };
