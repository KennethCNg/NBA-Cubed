import * as THREE from 'three';

var scene, camera, renderer;
var geometry, material, mesh, sphere, light, light1, lines, map, cube;
let cubeArr = [];

init();
animate();

function init() {


    // camera and lights //
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    // camera = new THREE.StereoCamera( 40, window.innerWidth / window.innerHeight);

    light = new THREE.AmbientLight(0xffffff, 1);
    // light1 = new THREE.PointLight(0xffffff, 1);
    light1 = new THREE.DirectionalLight(0xffffff, 1);
    scene.add( light, light1 );


    for (let i = 0; i < 10; i++) {
        cubeArr.push( createCube() );
    }
    
    // sphere //
    geometry = new THREE.BoxBufferGeometry( 32, 32, 32 );
    material = new THREE.MeshBasicMaterial( { color: "purple" } );
    sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(-50, -50, -500);
    scene.add( sphere );

    // load texture //
    
    // var textureLoader = new THREE.TextureLoader();
    // var sphereTexture = new textureLoader.load("./lib/textures/ball.png");
    // if (sphereTexture ) {
    //     console.log("found file");
    // }
    
    // var loader = new THREE.TextureLoader();
    // loader.load( 'textures/ball.png', function ( texture ) {
    //     geometry = new THREE.SphereGeometry( 200, 20, 20 );
    //     material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    //     mesh = new THREE.Mesh( geometry, material );
    //     scene.add( mesh );
    // } );
    
        
    // control viewer perspective //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

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
    let num = Math.random() * 1000;
    num = 0 - num;


    if ( num > -400 ) {
        return generateRandDepth();
    } else {
        return num;
    }
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
    
    sphere.rotation.x += 0.03;
    sphere.rotation.y += 0.03;

    renderer.render( scene, camera );

}
