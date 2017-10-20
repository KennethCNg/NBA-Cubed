import * as THREE from 'three';

var scene, camera, renderer;
var geometry, material, mesh, sphere, light, light1, lines;

init();
animate();

function init() {


    // camera and lights //
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight);
    // camera = new THREE.StereoCamera( 40, window.innerWidth / window.innerHeight);

    light = new THREE.AmbientLight(0xffffff, 1);
    // light1 = new THREE.PointLight(0xffffff, 1);
    light1 = new THREE.DirectionalLight(0xffffff, 1);


    // lines //

    lines = new THREE.LineBasicMaterial({ color: "000000" });

    
    // sphere //
    geometry = new THREE.SphereGeometry( 10, 32, 32);
    material = new THREE.MeshPhongMaterial( { color: "#cc8400" } );
    sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(0, 0, -75);
    scene.add( sphere, light, light1 );
    

    // control viewer perspective //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    sphere.rotation.x += 0.05;
    sphere.rotation.y += 0.05;

    renderer.render( scene, camera );

}
