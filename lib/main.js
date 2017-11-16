import * as THREE from 'three';
import * as Team from './team_colors';
import * as API from './api_util.js';
let OrbitControls = require('three-orbit-controls')(THREE);

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


let scene, camera, renderer;
let geometry, material, mesh, sphere, light, lines, map, cube, box, controls;
let data = API.fetchPlayers();
let players = data.responseJSON.cumulativeplayerstats.playerstatsentry;
let cubeArr = [];
let teamNames = [];

init();
animate();

function init() {


    // CAMERA AND LIGHTS //
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    camera.position.z = 500;
    

    light = new THREE.AmbientLight(0xffffff, 1);
    scene.add( light );

    // Grabs the team names from API
    function grabTeamNames(){
        let len = players.length;

        for ( let i = 0; i < len; i++ ) {
            teamNames.push(players[i].team.Name);
        }
        return teamNames;
    }
    grabTeamNames();

    // Creates cubes and stores in array 
    function createCubes() {
        console.log(teamNames);
        for (let i = 0; i < teamNames.length; i++) {
            cubeArr.push( createCube(i) );
        }
        return cubeArr;
    }
    createCubes();
        
    // CONTROL VIEWER PERSPECTIVE //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor ("white", 1);
        
    document.body.appendChild( renderer.domElement );
    controlCamera();
}

/////////////////////  HELPER FUNCTION ////////////////////////

// Camera controls from OrbitControls library
function controlCamera() {
    controls = new OrbitControls( camera );
    controls.enabled = true;
    controls.target = new THREE.Vector3(); 
    controls.enableRotate = true;
    controls.rotateSpeed = 1.0;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0; 
    controls.minDistance = 0;
    controls.maxDistance = 1200;

    controls.update();
}


// determine random position of cube
function generateRandNum() {
    let num = Math.random() * 600;
    let sign = Math.round(Math.random() * 100);

    if ( sign % 2 === 0 ) {
        num = 0 - num;
    }
    return num;
}

// generate random z-plane
function generateRandDepth() {
    let num = Math.random() * 800;
    return num;
}

// create singular cube
function createCube(i) {
    cube = new THREE.Mesh( teamGeometry[`${teamNames[i]}`], teamMaterial[`${teamNames[i]}`] );
    let posx = generateRandNum();
    let posy = generateRandNum();
    let posz = generateRandDepth();
    cube.position.set(posx, posy, posz);
    scene.add ( cube );
    return cube;
}

// animates
function animate() {
    requestAnimationFrame( animate );

    // iterates through cubeArr and rotates them
    for (let i = 0; i < cubeArr.length; i++ ) {
        cubeArr[i].rotation.x += 0.015;
        cubeArr[i].rotation.y += 0.015;    
    }

    controls.update();
    renderer.render( scene, camera );
}


