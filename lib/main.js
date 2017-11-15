import * as THREE from 'three';
import { knicksMaterial } from './team_colors';
import { knicksGeometry } from './team_colors';
var OrbitControls = require('three-orbit-controls')(THREE);
const NBA = require("nba");


// test NBA api
const player = NBA.findPlayer('Kristaps Porzingis');
// console.log(player);

/* logs the following:
{
  firstName: 'Stephen',
  lastName: 'Curry',
  playerId: 201939,
  teamId: 1610612744,
  fullName: 'Stephen Curry',
  downcaseName: 'stephen curry'
}
*/

// NBA.stats.playerInfo({ PlayerID: player.playerId }).then(console.log);
// NBA.stats.commonTeamRoster({ TeamID: player.teamId }).then(console.log);

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
    camera.position.z = 700;

    // light = new THREE.AmbientLight(0xffffff, 1);
    light = new THREE.PointLight(0xffffff, 1);
    // light = new THREE.DirectionalLight(0xffffff, 1);
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
    controls.autoRotateSpeed = 2.0; 

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
    let depth = generateRandDepth();
    geometry = new THREE.BoxBufferGeometry( 100, 100, 100);
    cube = new THREE.Mesh( knicksGeometry(), knicksMaterial() );

    let posx = generateRandNum();
    let posy = generateRandNum();
    let posz = generateRandNum();
    cube.position.set(posx, posy, depth);
    scene.add ( cube );
    return cube;
}

// animates
function animate() {
    
    requestAnimationFrame( animate );
    for (let i = 0; i < cubeArr.length; i++ ) {
        
        cubeArr[i].rotation.x += 0.03;
        cubeArr[i].rotation.y += 0.03;    
    }

    controls.update();
    
    renderer.render( scene, camera );
}