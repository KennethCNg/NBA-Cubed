import * as THREE from 'three';

let geometry, material;
// each cube has 6 faces, and each face is split into two triangles

// KNICKS
export const knicksMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const knicksGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#003DA5");
    let orange = new THREE.Color("#FF671F");
    let silver = new THREE.Color("#B1B3B3");
    let colors = [orange, silver, blue];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// CELTICS
export const celticsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const celticsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let green = new THREE.Color("#007A33");
    let silver = new THREE.Color("#C0C0C0");
    let black = new THREE.Color("black");
    let colors = [green, silver, black];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};
