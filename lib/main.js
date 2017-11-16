import * as THREE from 'three';
import * as Team from './team_colors';
import * as API from './api_util.js';
var OrbitControls = require('three-orbit-controls')(THREE);

let data = API.fetchCurry();

console.log(data);

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
    

    light = new THREE.AmbientLight(0xffffff, 0.7);
    // light = new THREE.PointLight(0xffffff, 1);
    // light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1.5);
    // light = new THREE.DirectionalLight(0xffffff, 1);
    // light = new THREE.SpotLight( 0xffffff );
    // light.position.set( 100, 1000, 100 );
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
    cube = new THREE.Mesh( Team.wizardsGeometry(), Team.wizardsMaterial() );

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