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
    "Grizzles" : Team.grizzlesMaterial(),
    "Heat" : Team.heatMaterial(), 
    "Bucks" : Team.bucksMaterial(), 
    "Timberwolves" : Team.twolvesMaterial(),
    "Pelicans" : Team.pelicansMaterial(),
    "Knicks" : Team.knicksMaterial(),
    "Thunder" : Team.thunderMaterial(),
    "Magic" : Team.magicMaterial(),
    "Sixers" : Team.sixersMaterial(),
    "Suns" : Team.sunsMaterial(),
    "Trailblazers" : Team.blazersMaterial(),
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
    "Grizzles" : Team.grizzlesGeometry(),
    "Heat" : Team.heatGeometry(), 
    "Bucks" : Team.bucksGeometry(), 
    "Timberwolves" : Team.twolvesGeometry(),
    "Pelicans" : Team.pelicansGeometry(),
    "Knicks" : Team.knicksGeometry(),
    "Thunder" : Team.thunderGeometry(),
    "Magic" : Team.magicGeometry(),
    "Sixers" : Team.sixersGeometry(),
    "Suns" : Team.sunsGeometry(),
    "Trailblazers" : Team.blazersGeometry(),
    "Kings" : Team.kingsGeometry(),
    "Spurs" : Team.spursGeometry(),
    "Raptors" : Team.raptorsGeometry(),
    "Jazz" : Team.jazzGeometry(),
    "Wizards" : Team.wizardsGeometry()
};


class playerCube {

    constructor(team) {
        
        this.xPos = this.generateRandNum();
        this.yPos = this.generateRandNum();
        this.zPos = this.generateRandDepth();
        this.mesh = this.createMesh(team);
        
    }
    

    // determine random position of cube
    generateRandNum() {
        let num = Math.random() * 600;
        let sign = Math.round(Math.random() * 100);

        if ( sign % 2 === 0 ) {
            num = 0 - num;
        }
        return num;
    }


    // generate random z-plane
    generateRandDepth() {
        let num = Math.random() * 800;
        return num;
    }

    // create singular cube
    createMesh(team) {
        let mesh = new THREE.Mesh( teamGeometry[`${team}`], teamMaterial[`${team}`] );
        return mesh;
    }

}

export default playerCube;