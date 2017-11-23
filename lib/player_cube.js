import * as Team from './team_colors';
import * as THREE from 'three';


const teamMaterial = {
    "Hawks" : Team.hawksMaterial(),
    "Celtics" : Team.celticsMaterial(),
    "Nets" : Team.netsMaterial(),
    "Hornets" : Team.hornetsMaterial(), 
    "Bulls" : Team.bullsMaterial(),
    "Cavaliers" : Team.cavsMaterial(),
    "Mavericks" : Team.mavsMaterial(),
    "Nuggets" : Team.nuggetsMaterial(),
    "Pistons" : Team.pistonsMaterial(),
    "Warriors" : Team.warriorsMaterial(),
    "Rockets" : Team.rocketsMaterial(),
    "Pacers" : Team.pacersMaterial(),
    "Clippers" : Team.clippersMaterial(),
    "Lakers" : Team.lakersMaterial(),
    "Grizzlies" : Team.grizzlesMaterial(),
    "Heat" : Team.heatMaterial(), 
    "Bucks" : Team.bucksMaterial(), 
    "Timberwolves" : Team.twolvesMaterial(),
    "Pelicans" : Team.pelicansMaterial(),
    "Knicks" : Team.knicksMaterial(),
    "Thunder" : Team.thunderMaterial(),
    "Magic" : Team.magicMaterial(),
    "76ers" : Team.sixersMaterial(),
    "Suns" : Team.sunsMaterial(),
    "Trail Blazers" : Team.blazersMaterial(),
    "Kings" : Team.kingsMaterial(),
    "Spurs" : Team.spursMaterial(),
    "Raptors" : Team.raptorsMaterial(),
    "Jazz" : Team.jazzMaterial(),
    "Wizards" : Team.wizardsMaterial()
};

const teamGeometry = {
    "Hawks" : Team.hawksGeometry(),
    "Celtics" : Team.celticsGeometry(),
    "Nets" : Team.netsGeometry(),
    "Hornets" : Team.hornetsGeometry(), 
    "Bulls" : Team.bullsGeometry(),
    "Cavaliers" : Team.cavsGeometry(),
    "Mavericks" : Team.mavsGeometry(),
    "Nuggets" : Team.nuggetsGeometry(),
    "Pistons" : Team.pistonsGeometry(),
    "Warriors" : Team.warriorsGeometry(),
    "Rockets": Team.rocketsGeometry(),
    "Pacers" : Team.pacersGeometry(),
    "Clippers" : Team.clippersGeometry(),
    "Lakers" : Team.lakersGeometry(),
    "Grizzlies" : Team.grizzlesGeometry(),
    "Heat" : Team.heatGeometry(), 
    "Bucks" : Team.bucksGeometry(), 
    "Timberwolves" : Team.twolvesGeometry(),
    "Pelicans" : Team.pelicansGeometry(),
    "Knicks" : Team.knicksGeometry(),
    "Thunder" : Team.thunderGeometry(),
    "Magic" : Team.magicGeometry(),
    "76ers" : Team.sixersGeometry(),
    "Suns" : Team.sunsGeometry(),
    "Trail Blazers" : Team.blazersGeometry(),
    "Kings" : Team.kingsGeometry(),
    "Spurs" : Team.spursGeometry(),
    "Raptors" : Team.raptorsGeometry(),
    "Jazz" : Team.jazzGeometry(),
    "Wizards" : Team.wizardsGeometry()
};


class playerCube {

    constructor(team, angle, ppg, radius) {
        this.angle = angle;
        this.radius = radius;
        this.ppg = ppg;
        this.xPos = this.generateXPos();
        this.yPos = this.generateYPos();
        this.zPos = this.generateZPos();
        this.mesh = this.createMesh(team);
    }

    // generates the swirl that you see
    generateYPos() {
        return Math.sin(this.angle) * this.radius;
    }
    generateXPos() {
        return Math.cos(this.angle) * this.radius;
    }

    // z-plane position of cube is determined by the player's points
    generateZPos() {
        return this.ppg * 20;
    }

    // this colors the cube to the specific team colors
    createMesh(team) {
        let mesh = new THREE.Mesh( teamGeometry[`${team}`], teamMaterial[`${team}`] );
        return mesh;
    }

}

export default playerCube;