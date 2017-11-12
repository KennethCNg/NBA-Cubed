import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);
// import OrbitControls from 'three-orbit-controls';
// const OrbitalCOntrols = OrbitControls(THREE);


var scene, camera, renderer;
var geometry, material, mesh, sphere, light, light1, light2, lines, map, cube;
let cube1;
let controls;
let cubeArr = [];

init();
animate();

function init() {


    // camera and lights //
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    camera.position.z = -250;
    
    camera.lookAt(new THREE.Vector3());

    // camera = new THREE.StereoCamera( 40, window.innerWidth / window.innerHeight);

    // light = new THREE.AmbientLight(0xffffff, 1);
    light1 = new THREE.PointLight(0xffffff, 1);
    // light2 = new THREE.DirectionalLight(0xffffff, 1);
    scene.add( light1 );
    

    for (let i = 0; i < 100; i++) {
        cubeArr.push( createCube() );
    }

    // TEST CUBE
    geometry = new THREE.BoxBufferGeometry( 32, 32, 32);
    material = new THREE.MeshPhongMaterial({ color: 'red'});
    cube1 = new THREE.Mesh( geometry, material );
    cube1.position.set(0, 0, 50);
    scene.add ( cube1 );
        
    // control viewer perspective //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    

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

function generateRandDepth() {
    let num = Math.random() * 100;
    num = 0 - num;


    // if ( num > -400 ) {
    //     return generateRandDepth();
    // } else {
        return num;
    // }
}

// determine random color of cube

function generateRandomColor() {
    let colors = ["#E74C3C", "#5DADE2", "green", "#F1C40F", "#A569BD", "#F5B041", "#AAB7B8"];

    let num = Math.round(Math.random() * 100);
    let idx = num % 7;
    return colors[idx];
}


// cube
function createCube() {

    let posx = generateRandNum();
    let posy = generateRandNum();
    let posz = generateRandNum();
    let col = generateRandomColor();
    geometry = new THREE.BoxBufferGeometry( 32, 32, 32);
    material = new THREE.MeshPhongMaterial({ color: `${col}`});
    cube = new THREE.Mesh( geometry, material );
    let depth = generateRandDepth();
    cube.position.set(posx, posy, depth);
    scene.add ( cube );
    return cube;
}


function animate() {
    
    requestAnimationFrame( animate );

    for (let i = 0; i < cubeArr.length; i++ ) {
        
        cubeArr[i].rotation.x += 0.03;
        cubeArr[i].rotation.y += 0.03;    
    }

    cube1.rotation.x += 0.03;
    cube1.rotation.y += 0.03;    

    controls.update();
    
    renderer.render( scene, camera );

}