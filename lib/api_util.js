import axios from 'axios';
import request from 'sync-request';
// import ajax from 'ajax-request';

// export const fetchPlayers = () => {
//   return $.ajax({
//     type: "GET",
//     url: `https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/cumulative_player_stats.json?playerstats=2PM,3PM,FTM`,
//     dataType: 'json',
//     async: false,
//     headers: {
//       "Authorization": "Basic " + btoa("lookatamonkey" + ":" + "hudgens")
//     },
//   });
// };


export const fetchPlayers = () => {
  return request('GET',
    `https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/cumulative_player_stats.json?playerstats=2PM,3PM,FTM`, {
      headers: {
        "Authorization": "Basic " + btoa("lookatamonkey" + ":" + "hudgens")
      }
    });
};