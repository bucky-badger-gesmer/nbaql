const axios = require("axios");

const franchiseHistory = async () => {
  try {
    const response = await axios.get(
      "https://stats.nba.com/stats/franchisehistory",
      {
        params: {
          LeagueID: "00",
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

    const franchiseHistoryHeaders = response.data.resultSets[0].headers;
    const franchiseHistoryRowSet = response.data.resultSets[0].rowSet;

    const franchises = franchiseHistoryRowSet.map((row) => {
      return {
        leagueId: row[franchiseHistoryHeaders.indexOf("LEAGUE_ID")],
        teamId: row[franchiseHistoryHeaders.indexOf("TEAM_ID")],
        teamCity: row[franchiseHistoryHeaders.indexOf("TEAM_CITY")],
        teamName: row[franchiseHistoryHeaders.indexOf("TEAM_NAME")],
        startYear: row[franchiseHistoryHeaders.indexOf("START_YEAR")],
        endYear: row[franchiseHistoryHeaders.indexOf("END_YEAR")],
        years: row[franchiseHistoryHeaders.indexOf("YEARS")],
        games: row[franchiseHistoryHeaders.indexOf("GAMES")],
        wins: row[franchiseHistoryHeaders.indexOf("WINS")],
        losses: row[franchiseHistoryHeaders.indexOf("LOSSES")],
        winPct: row[franchiseHistoryHeaders.indexOf("WIN_PCT")],
        playoffAppearances:
          row[franchiseHistoryHeaders.indexOf("PO_APPEARANCES")],
        divisionTitles: row[franchiseHistoryHeaders.indexOf("DIV_TITLES")],
        conferenceTitles: row[franchiseHistoryHeaders.indexOf("CONF_TITLES")],
        leagueTitles: row[franchiseHistoryHeaders.indexOf("LEAGUE_TITLES")],
      };
    });

    return franchises;
  } catch (error) {
    console.log("errr", error);
    return null; // Handle errors appropriately
  }
};

module.exports = { franchiseHistory };
