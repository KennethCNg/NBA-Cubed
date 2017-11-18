import * as API from './api_util.js';

class PlayerStat {
    constructor(teamName, firstName, lastName, gamesPlayed, twoPts, threePts, ftMade) {
        this.teamName = teamName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.twoPts = twoPts;
        this.threePts = threePts;
        this.ftMade = ftMade;
        this.gamesPlayed = gamesPlayed;
        this.ppg = this.addPoints(gamesPlayed, twoPts, threePts, ftMade);
    }

    

    addPoints(gamesPlayed, twoPts, threePts, ftMade) {
        gamesPlayed = parseInt(gamesPlayed);
        twoPts = parseInt(twoPts);
        threePts = parseInt(threePts);
        ftMade = parseInt(ftMade);
        let ppg = ( (twoPts + threePts + ftMade) / gamesPlayed );

        // round to nearest hundreth place : http://www.javascripter.net/faq/rounding.htm
        ppg = Math.round(100 * ppg)/100;

        return ppg;
    }
}

export default PlayerStat;