import * as THREE from 'three';
import * as API from './api_util';
import playerCube from './player_cube';
import Stats from './stats';
let OrbitControls = require('three-orbit-controls')(THREE);

let scene, camera, renderer, geometry, material, mesh, sphere, light, lines, map, controls;
let playerStatArr = [];
let cubeArr = [];

init();
animate();

// controls everything
function init() {

    // functions that deal with construction
    grabStats();
    sortPlayersByPpg();

    // functions that deal with making environment
    addScene();
    addCameraAndControls();
    addLight();
    makeCubes();
}
 

/////////////////////  HELPER FUNCTIONS ////////////////////////

// Grab team names from API
function grabStats() {
    let data = API.fetchPlayers();
    let playersJSON = data.responseJSON.cumulativeplayerstats.playerstatsentry;
    let len = playersJSON.length;    
    let playerObj, teamName, firstName, lastName, gamesPlayed, twoPts, threePts, ftMade;

    for ( let i = 0; i < len; i++ ) {
        teamName = (playersJSON[i].team.Name);
        firstName = (playersJSON[i].player.FirstName);
        lastName = (playersJSON[i].player.LastName);
        gamesPlayed = (playersJSON[i].stats.GamesPlayed["#text"]);
        twoPts = (playersJSON[i].stats.Fg2PtMade["#text"]);
        threePts = (playersJSON[i].stats.Fg3PtMade["#text"]);
        ftMade = (playersJSON[i].stats.FtMade["#text"]);

        // NO SCRUBS
        if (twoPts === "0" && threePts === "0" && ftMade === "0") {
            continue;
        }
    
        playerObj = new Stats(teamName, firstName, lastName, gamesPlayed, twoPts, threePts, ftMade);
        playerStatArr.push(playerObj);
    }

    return playerStatArr;
}

function compare(a, b) {
    const playerA = a.ppg;
    const playerB = b.ppg;
    
    let comparison = 0;
    if (playerA > playerB) {
      comparison = 1;
    } else if (playerA < playerB) {
      comparison = -1;
    }
    return comparison;
  }

// Sorts the array of players by points
function sortPlayersByPpg() {
    console.log(playerStatArr.sort(compare));
}


// Add scene
function addScene() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor ("white", 1);
        
    document.body.appendChild( renderer.domElement );
}

// Add light to the scene
function addLight() {
    light = new THREE.AmbientLight(0xffffff,1);
    // light = new THREE.DirectionalLight( 0xffffff, 1 );
    // light = new THREE.PointLight("white", 3, 1000);
    // light.position.set( 400, 400, 400 );
    // scene.add(light);
    // scene.add(new THREE.PointLightHelper(light, 3));

    scene.add( light );
}

// Camera controls from OrbitControls library
function addCameraAndControls() {
    // camera
    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    camera.position.z = 500;
    
    // controls
    controls = new OrbitControls( camera );
    controls.enabled = true;
    controls.target = new THREE.Vector3(); 
    controls.enableRotate = true;
    controls.rotateSpeed = 1.0;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5; 
    controls.minDistance = 0;
    controls.maxDistance = 1000;

    controls.update();
}

function makeCubes() {
    for ( let i = 0; i < playerStatArr.length; i++ ) {
        const cube = new playerCube(playerStatArr[i].teamName);
        // set position within the scene //
        cube.mesh.position.set(cube.xPos, cube.yPos, cube.zPos);
        cubeArr.push(cube.mesh);
        scene.add( cube.mesh );
    }
}

function rotateCubes() {
    // iterates through cubeArr and rotates them
    for (let i = 0; i < cubeArr.length; i++ ) {
        cubeArr[i].rotation.x += 0.015;
        cubeArr[i].rotation.y += 0.015;    
    }
}

// animates
function animate() {
    requestAnimationFrame( animate );

    rotateCubes();

    controls.update();
    renderer.render( scene, camera );
}


