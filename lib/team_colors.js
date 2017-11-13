import * as THREE from 'three';

var geometry, material;

export const knicksMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const knicksGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let orange = new THREE.Color("orange");
    let gray = new THREE.Color("gray");
    let blue = new THREE.Color("blue");
    var colors = [orange, gray, blue];

    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    
    return geometry;
};

