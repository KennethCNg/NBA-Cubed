import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);
const NBA = require("nba");
const player = NBA.findPlayer('Carmelo Anthony');
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
// NBA.stats.assistTracker( )

var scene, camera, renderer;
var geometry, material, mesh, sphere, light, light1, light2, lines, map, cube, box;
let cube1;
let controls;
let cubeArr = [];

init();
animate();

function init() {


    // camera and lights //
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight);
    camera.position.z = 700;
    // camera.lookAt(new THREE.Vector3());

    // light = new THREE.AmbientLight(0xffffff, 1);
    light = new THREE.PointLight(0xffffff, 1);
    // light = new THREE.DirectionalLight(0xffffff, 1);
    scene.add( light );
    

    // creates cubes (i) amount of times //
    for (let i = 0; i < 41; i++) {
        cubeArr.push( createCube() );
    }

    // TEST CUBE
    // geometry = new THREE.BoxBufferGeometry( 32, 32, 32);
    // material = new THREE.MeshPhongMaterial({ color: 'red'});
    // cube1 = new THREE.Mesh( geometry, material );
    // cube1.position.set(0, 0, 50);

    // scene.add ( cube1 );

    
  // material
  material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors
  });

  // geometry
  geometry = new THREE.BoxGeometry(100, 100, 100);

  // colors
  let red = new THREE.Color(1, 0, 0);
  let green = new THREE.Color(0, 1, 0);
  let blue = new THREE.Color(0, 0, 1);
  var colors = [red, green, blue];
  
  for (var i = 0; i < 3; i++) {
    geometry.faces[4 * i].color = colors[i];
    geometry.faces[4 * i + 1].color = colors[i];
    geometry.faces[4 * i + 2].color = colors[i];
    geometry.faces[4 * i + 3].color = colors[i];
  }

  // mesh
  box = new THREE.Mesh(geometry, material);
  box.position.set(500, 500, 200);
  scene.add(box);

    
        
    // control viewer perspective //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor ("white", 1);
        
    document.body.appendChild( renderer.domElement );
    

    // controls cameran //
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

// determine random color of cube
function generateRandomColor() {
    let colors = ["#E74C3C", "#5DADE2", "green", "#F1C40F", "#A569BD", "#F5B041", "#AAB7B8"];
    let num = Math.round(Math.random() * 100);
    let idx = num % 7;
    return colors[idx];
}


// creates cubes
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

// animates
function animate() {
    
    requestAnimationFrame( animate );

    for (let i = 0; i < cubeArr.length; i++ ) {
        
        cubeArr[i].rotation.x += 0.03;
        cubeArr[i].rotation.y += 0.03;    
    }

    // cube1.rotation.x += 0.03;
    // cube1.rotation.y += 0.03;  
    box.rotation.x += 0.03;
    box.rotation.y += 0.03;  

    controls.update();
    
    renderer.render( scene, camera );

}