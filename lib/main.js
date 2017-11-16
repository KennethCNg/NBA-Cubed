import * as THREE from 'three';
import * as API from './api_util.js';
import playerCube from './player_cube';
let OrbitControls = require('three-orbit-controls')(THREE);



let scene, camera, renderer, geometry, material, mesh, sphere, light, lines, map, controls;
let data = API.fetchPlayers();
let players = data.responseJSON.cumulativeplayerstats.playerstatsentry;
let cubeArr = [];
let teamNames = [];

init();
animate();

// controls everything
function init() {
    grabTeamNames();
    
    addScene();
    addCameraAndControls();
    addLight();
    grabTeamNames();
    makeCubes();
}
 

/////////////////////  HELPER FUNCTIONS ////////////////////////

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
    light = new THREE.AmbientLight(0xffffff, 0.9);
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

// Grab team names from API
function grabTeamNames() {
    let len = players.length;

    for ( let i = 0; i < len; i++ ) {
        teamNames.push(players[i].team.Name);
    }
    return teamNames;
}

function makeCubes() {
    for ( let i = 0; i < teamNames.length; i++ ) {
        const cube = new playerCube(teamNames[i]);
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


