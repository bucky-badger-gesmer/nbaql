const axios = require("axios");

const playerDashboardByYearOverYearCombined = async (_, { playerId }) => {
  try {
    const response = await axios.get(
      "https://stats.nba.com/stats/playerdashboardbyyearoveryearcombined",
      {
        params: {
          DateFrom: "",
          DateTo: "",
          GameSegment: "",
          LastNGames: 0,
          LeagueID: "00",
          Location: "",
          MeasureType: "Base",
          Month: 0,
          OpponentTeamID: 0,
          Outcome: "",
          PORound: 0,
          PaceAdjust: "N",
          PerMode: "PerGame",
          Period: 0,
          PlayerID: playerId, // 1630162
          PlusMinus: "N",
          Rank: "N",
          Season: "2024-25",
          SeasonSegment: "",
          SeasonType: "Regular Season",
          ShotClockRange: "",
          VsConference: "",
          VsDivision: "",
        },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0",
          Accept: "*/*",
          Referer: "https://www.nba.com/",
          Origin: "https://www.nba.com",
        },
      }
    );

    const headers = response.data.resultSets[0].headers;
    const rowSet = response.data.resultSets[0].rowSet;

    const playerDashboardByYearOverYearCombined = rowSet.map((row) => {
      return {
        year: row[headers.indexOf("GROUP_VALUE")],
        teamId: row[headers.indexOf("TEAM_ID")],
        teamAbbreviation: row[headers.indexOf("TEAM_ABBREVIATION")],
        gamesPlayed: row[headers.indexOf("GP")],
        wins: row[headers.indexOf("W")],
        losses: row[headers.indexOf("L")],
        winPct: row[headers.indexOf("W_PCT")],
        minutes: row[headers.indexOf("MIN")],
        fieldGoalsMade: row[headers.indexOf("FGM")],
        fieldGoalsAttempted: row[headers.indexOf("FGA")],
        fieldGoalPercentage: row[headers.indexOf("FG_PCT")],
        threePointFieldGoalsMade: row[headers.indexOf("FG3M")],
        threePointFieldGoalsAttempted: row[headers.indexOf("FG3A")],
        threePointFieldGoalPercentage: row[headers.indexOf("FG3_PCT")],
        freeThrowsMade: row[headers.indexOf("FTM")],
        freeThrowsAttempted: row[headers.indexOf("FTA")],
        freeThrowPercentage: row[headers.indexOf("FT_PCT")],
        offensiveRebounds: row[headers.indexOf("OREB")],
        defensiveRebounds: row[headers.indexOf("DREB")],
        rebounds: row[headers.indexOf("REB")],
        assists: row[headers.indexOf("AST")],
        turnovers: row[headers.indexOf("TOV")],
        steals: row[headers.indexOf("STL")],
        blocks: row[headers.indexOf("BLK")],
        personalFouls: row[headers.indexOf("PF")],
        plusMinus: row[headers.indexOf("PLUS_MINUS")],
        doubleDoubles: row[headers.indexOf("DD2")],
        tripleDoubles: row[headers.indexOf("TD3")],
      };
    });

    return playerDashboardByYearOverYearCombined;
  } catch (error) {
    console.log("errr", error);
    return null; // Handle errors appropriately
  }
};

module.exports = { playerDashboardByYearOverYearCombined };
