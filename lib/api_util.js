import request from 'sync-request';

export const fetchPlayers = () => {
  return request('GET',
    `https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/cumulative_player_stats.json?playerstats=2PM,3PM,FTM`, {
      headers: {
        "Authorization": "Basic " + btoa("lookatamonkey" + ":" + "hudgens")
      }
    });
};