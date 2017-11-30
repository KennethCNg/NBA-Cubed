import * as THREE from 'three';
import * as API from './api_util';
import playerCube from './player_cube';
import Stats from './stats';
let OrbitControls = require('three-orbit-controls')(THREE);


let scene, camera, renderer, mesh, light, controls;
let raycaster, mouse, INTERSECTED, statDiv, clickedCube;
let playerStatArr = [];
let cubeArr = [];

init();
animate();

// controls everything
function init() {

    // functions that provide properties for the cube to be built
    grabStats();
    sortPlayersByPpg();

    // functions that deal with making environment
    addScene();
    addCameraAndControls();
    addMouseHandler();
    addLight();

    // function actually makes the cube
    makeCubes();
}

/////////////////////////////////  HELPER FUNCTIONS /////////////////////////////////////

// Grab stats from API
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

// comparator function to sort players
function compare(a, b) {
    const playerA = a.ppg;
    const playerB = b.ppg;
    
    let comparison = 0;
    if (playerA > playerB) {
      comparison = -1;
    } else if (playerA < playerB) {
      comparison = 1;
    }
    return comparison;
  }

// Sorts the array of players by points
function sortPlayersByPpg() {
    playerStatArr = playerStatArr.sort(compare);
}

function onMouseMove( event ) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1 ;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

// adds functionality to highlight and click cubes
function addMouseHandler() {
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2(), INTERSECTED;    

    window.addEventListener( 'mousemove', onMouseMove, false );
    document.addEventListener( 'mousedown', onDocumentMouseDown, cubeArr, false );
}

// Add scene
function addScene() {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor ("black", 1);
        
    document.body.appendChild( renderer.domElement );
}

// Add light to the scene
function addLight() {
    light = new THREE.AmbientLight(0xffffff,1);
    scene.add( light );
}

// Camera controls from OrbitControls library
function addCameraAndControls() {
    // camera
    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 1000;
    
    // controls
    controls = new OrbitControls( camera );
    controls.enabled = true;
    controls.target = new THREE.Vector3(); 
    controls.enableRotate = true;
    controls.rotateSpeed = 1.0;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0; 
    controls.update();
}

function makeCubes() {
    let angle;
    let ppg;
    let radius;
    let len = playerStatArr.length;
    for ( let i = 0; i < len; i++ ) {
        // angle determines the x & y coordinates of the cube
        angle = i % 360;
        ppg = playerStatArr[i].ppg;
        radius = i;
        const cube = new playerCube(
            playerStatArr[i].firstName, 
            playerStatArr[i].lastName, 
            playerStatArr[i].teamName, 
            angle, 
            ppg, 
            radius
        );
        // set position within the scene //
        cube.mesh.position.set(cube.xPos, cube.yPos, cube.zPos);
        cubeArr.push( cube );
        scene.add( cube.mesh );
    }
}

function rotateCubes() {
    // iterates through cubeArr and rotates each cube
    for (let i = 0; i < cubeArr.length; i++ ) {
        cubeArr[i].mesh.rotation.x += 0.015;
        cubeArr[i].mesh.rotation.y += 0.015;    
    }
}

// gives the hover effect over cubes
function checkIntersection() {
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children );
    
    if ( intersects.length > 0 ) {
        
        if ( INTERSECTED !== intersects[ 0 ].object ) {
            if ( INTERSECTED ) {
                INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
            }
            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex( 0x9984D8 );
        }
    } else {
        if ( INTERSECTED ) {
            INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        }
        INTERSECTED = null;
    }
}


// function that deals with clicked-on cubes
function onDocumentMouseDown(event) {
    if ( INTERSECTED ) {

        // find player's stats
        for ( let i = 0; i < cubeArr.length; i++ ) {
            if ( cubeArr[i].mesh.uuid === INTERSECTED.uuid ) {
                clickedCube = cubeArr[i];
                break;
            }
        }
    }
}

// animates
function animate() {
    requestAnimationFrame( animate );
    rotateCubes();
    controls.update();
    checkIntersection();
    renderer.render( scene, camera );
}


