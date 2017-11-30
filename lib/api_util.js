export const fetchPlayers = () => {
    return $.ajax
    ({
      type: "GET",
      url: `https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/cumulative_player_stats.json?playerstats=2PM,3PM,FTM`,
      dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("lookatamonkey" + ":" + "hudgens")
      },
    });
  };