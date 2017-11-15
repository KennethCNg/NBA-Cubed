import * as THREE from 'three';

let geometry, material;
// each cube has 6 faces, and each face is split into two triangles

// ATLANTA HAWKS
export const hawksMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const hawksGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let red = new THREE.Color("#C8102E");
    let volt = new THREE.Color("#C4D600");
    let granite = new THREE.Color("#25282A");
    let colors = [red, volt, granite];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// BOSTON CELTICS
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

// BROOKLYN NETS
export const netsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const netsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let white = new THREE.Color("white");
    let black = new THREE.Color("black");
    let colors = [white, black];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
        geometry.faces[4 * i + 4].color = colors[i];
        geometry.faces[4 * i + 5].color = colors[i];
    }
    return geometry;
};

// CHARLOTTE HORNETS
export const hornetsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const hornetsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let purple = new THREE.Color("#201747");
    let teal = new THREE.Color("#00778B");
    let gray = new THREE.Color("#888B8D");
    let colors = [purple, teal, gray];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// CHICAGO BULLS
export const bullsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const bullsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let red = new THREE.Color("#BA0C2F");
    let white = new THREE.Color("white");
    let black = new THREE.Color("black");
    let colors = [white, red, black];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};


// CLEVELAND CAVELIERS
export const cavsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const cavsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let wine = new THREE.Color("#6F263D");
    let gold = new THREE.Color("#FFB81C");
    let navy = new THREE.Color("#041E42");
    let colors = [wine, gold, navy];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};



// NEW YORK KNICKS
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