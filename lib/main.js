import * as THREE from 'three';

var scene, camera, renderer;
var geometry, material, mesh, sphere;

init();
animate();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    // geometry = new THREE.BoxGeometry( 200, 200, 200 );
    geometry = new THREE.SphereBufferGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( {color: "#33F6FF"} );

    sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );

}
