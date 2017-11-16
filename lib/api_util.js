export const fetchPlayers = () => {
    return $.ajax
    ({
      type: "GET",
      url: `https://api.mysportsfeeds.com/v1.1/pull/nba/2016-2017-regular/cumulative_player_stats.json?playerstats=2PM,3PM,FTM`,
      dataType: 'json',
      async: false,
      headers: {
        "Authorization": "Basic " + btoa("lookatamonkey" + ":" + "hudgens")
      },
    });
  };