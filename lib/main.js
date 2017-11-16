import * as THREE from 'three';
import * as Team from './team_colors';
import * as API from './api_util.js';

const teamMaterial = {
    "Hawks" : Team.hawksMaterial,
    "Celtics" : Team.celticsMaterial,
    "Nets" : Team.netsMaterial,
    "Hornets" : Team.hornetsMaterial, 
    "Bulls" : Team.bullsMaterial,
    "Cavaliers" : Team.cavsMaterial,
    "Mavericks" : Team.mavsMaterial,
    "Nuggets" : Team.nuggetsMaterial,
    "Pistons" : Team.pistonsMaterial,
    "Warriors" : Team.warriorsMaterial,
    "Rockets" : Team.rocketsMaterial,
    "Pacers" : Team.pacersMaterial,
    "Clippers" : Team.clippersMaterial,
    "Lakers" : Team.lakersMaterial,
    "Grizzles" : Team.grizzlesMaterial,
    "Heat" : Team.heatMaterial, 
    "Bucks" : Team.bucksMaterial, 
    "Timberwolves" : Team.twolvesMaterial,
    "Pelicans" : Team.pelicansMaterial,
    "Knicks" : Team.knicksMaterial,
    "Thunder" : Team.thunderMaterial(),
    "Magic" : Team.magicMaterial,
    "Sixers" : Team.sixersMaterial,
    "Suns" : Team.sunsMaterial,
    "Trailblazers" : Team.blazersMaterial,
    "Kings" : Team.kingsMaterial,
    "Spurs" : Team.spursMaterial,
    "Raptors" : Team.raptorsMaterial,
    "Jazz" : Team.jazzMaterial,
    "Wizards" : Team.wizardsMaterial
};

const teamGeometry = {
    "Hawks" : Team.hawksGeometry,
    "Celtics" : Team.celticsGeometry,
    "Nets" : Team.netsGeometry,
    "Hornets" : Team.hornetsGeometry, 
    "Bulls" : Team.bullsGeometry,
    "Cavaliers" : Team.cavsGeometry,
    "Mavericks" : Team.mavsGeometry,
    "Nuggets" : Team.nuggetsGeometry,
    "Pistons" : Team.pistonsGeometry,
    "Warriors" : Team.warriorsGeometry,
    "Rockets": Team.rocketsGeometry,
    "Pacers" : Team.pacersGeometry,
    "Clippers" : Team.clippersGeometry,
    "Lakers" : Team.lakersGeometry,
    "Grizzles" : Team.grizzlesGeometry,
    "Heat" : Team.heatGeometry, 
    "Bucks" : Team.bucksGeometry, 
    "Timberwolves" : Team.twolvesGeometry,
    "Pelicans" : Team.pelicansGeometry,
    "Knicks" : Team.knicksGeometry,
    "Thunder" : Team.thunderGeometry(),
    "Magic" : Team.magicGeometry,
    "Sixers" : Team.sixersGeometry,
    "Suns" : Team.sunsGeometry,
    "Trailblazers" : Team.blazersGeometry,
    "Kings" : Team.kingsGeometry,
    "Spurs" : Team.spursGeometry,
    "Raptors" : Team.raptorsGeometry,
    "Jazz" : Team.jazzGeometry,
    "Wizards" : Team.wizardsGeometry
};

let data = API.fetchPlayers();

let player = data.responseJSON.cumulativeplayerstats.playerstatsentry[0];
let name = player.team.Name;
console.log(teamGeometry[`${name}`]);

// console.log(player.player.LastName);
// console.log(player.player.FirstName);

















var OrbitControls = require('three-orbit-controls')(THREE);

var scene, camera, renderer;
var geometry, material, mesh, sphere, light, lines, map, cube, box;
let cube1;
let controls;
let cubeArr = [];

init();
animate();

function init() {


// CAMERA AND LIGHTS //
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    camera.position.z = 500;
    

    light = new THREE.AmbientLight(0xffffff, 1);
    scene.add( light );
    

    function createCubes() {
        for (let i = 0; i < 75; i++) {
            cubeArr.push( createCube() );
        }
        return cubeArr;
    }
    createCubes();
        
// control viewer perspective //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor ("white", 1);
        
    document.body.appendChild( renderer.domElement );
    controlCamera();


}

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
function createCube() {
    cube = new THREE.Mesh( teamGeometry[`${name}`], teamMaterial[`${name}`] );

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
    for (let i = 0; i < cubeArr.length; i++ ) {
        
        cubeArr[i].rotation.x += 0.015;
        cubeArr[i].rotation.y += 0.015;    
    }
    controls.update();
    renderer.render( scene, camera );
}