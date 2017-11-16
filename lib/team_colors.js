import * as THREE from 'three';

let geometry, material;
// each cube has 6 faces, and each face is split diagonally




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

// DALLAS MAVERICKS
export const mavsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const mavsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#0050B5");
    let silver = new THREE.Color("#8D9093");
    let navy = new THREE.Color("#0C2340");
    let colors = [blue, silver, navy];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// DENVER NUGGETS
export const nuggetsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const nuggetsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let lightBlue = new THREE.Color("#418FDE");
    let gold = new THREE.Color("#FFC72C");
    let navy = new THREE.Color("#041E42");
    let colors = [gold, lightBlue, navy];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// DETROIT PISTONS 
export const pistonsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const pistonsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#003DA5");
    let red = new THREE.Color("#D50032");
    let white = new THREE.Color("white");
    let colors = [red, blue, white];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// GOLDEN STATE WARRIORS
export const warriorsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const warriorsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#003DA5");
    let gold = new THREE.Color("#FFC72D");
    let silver = new THREE.Color("#8D9093");
    let colors = [gold, blue, silver];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// HOUSTON ROCKETS
export const rocketsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const rocketsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let red = new THREE.Color("#BA0C2F");
    let silver = new THREE.Color("#8D9093");
    let mustard = new THREE.Color("#FDB927");
    let colors = [red, silver, mustard];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// INDIANA PACERS
export const pacersMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const pacersGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#041E42");
    let gold = new THREE.Color("#FFB81C");
    let silver = new THREE.Color("#B1B3B3");
    let colors = [silver, blue, gold];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// LOS ANGELES CLIPPERS
export const clippersMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const clippersGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#003DA5");
    let red = new THREE.Color("#D50032");
    let gray = new THREE.Color("#B1B3B3");
    let colors = [gray, blue, red];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// LOS ANGELES LAKERS
export const lakersMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const lakersGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let purple = new THREE.Color("#702F8A");
    let gold = new THREE.Color("#FFC72C");
    let white = new THREE.Color("white");
    let colors = [purple, gold, white];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// MEMPHIS GRIZZLES
export const grizzlesMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const grizzlesGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let darkBlue = new THREE.Color("#23375B");
    let blue = new THREE.Color("#6189B9");
    let lightBlue = new THREE.Color("#BBD1E4");
    let colors = [darkBlue, blue, lightBlue];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// MIAMI HEAT
export const heatMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const heatGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let red = new THREE.Color("#862633");
    let yellow = new THREE.Color("#FFA300");
    let white = new THREE.Color("white");
    let colors = [red, yellow, white];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// MILWAUKEE BUCKS
export const bucksMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const bucksGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let green = new THREE.Color("#2C5234");
    let cream = new THREE.Color("#DDCBA4");
    let blue = new THREE.Color("#0057B8");
    let colors = [green, cream, blue];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// MILWAUKEE TIMBERWOLVES
export const twolvesMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const twolvesGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let darkBlue = new THREE.Color("#002B5C");
    let gray = new THREE.Color("#C6CFD4");
    let blue = new THREE.Color("#005083");
    let colors = [darkBlue, gray, blue];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// NEW ORLEANS PELICANS
export const pelicansMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const pelicansGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#002B5C");
    let red = new THREE.Color("#E31937");
    let gold = new THREE.Color("#B4975A");
    let colors = [blue, red, gold];    

    
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

// OKLAHOMA CITY THUNDER
export const thunderMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const thunderGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#007DC3");
    let orange = new THREE.Color("#F05133");
    let yellow = new THREE.Color("#FDBB30");
    let colors = [blue, orange, yellow];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// ORLANDO MAGIC
export const magicMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const magicGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#007DC5");
    let silver = new THREE.Color("#C4CED3");
    let white = new THREE.Color("white");
    let colors = [blue, silver, white];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// PHILADELPHIA SIXERS
export const sixersMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const sixersGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#006BB6");
    let red = new THREE.Color("#ED174C");
    let white = new THREE.Color("white");
    let colors = [blue, red, white];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// PHOENIX SUNS
export const sunsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const sunsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let orange = new THREE.Color("#E56020");
    let purple = new THREE.Color("#1D1160");
    let gray = new THREE.Color("#63717A");
    let colors = [orange, purple, gray];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// PORTLAND TRAILBLAZERS
export const blazersMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const blazersGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let red = new THREE.Color("#F0163A");
    let gray = new THREE.Color("#B6BFBF");
    let white = new THREE.Color("white");
    let colors = [red, white, gray];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// SACRAMENTO KINGS
export const kingsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const kingsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let purple = new THREE.Color("#724C9F");
    let gray = new THREE.Color("#8E9090");
    let white = new THREE.Color("white");
    let colors = [purple, white, gray];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// SAN ANTONIO SPURS
export const spursMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const spursGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let black = new THREE.Color("black");
    let gray = new THREE.Color("#B6BFBF");
    let white = new THREE.Color("white");
    let colors = [black, white, gray];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// TORONTO RAPTORS
export const raptorsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const raptorsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let red = new THREE.Color("#CE1141");
    let purple = new THREE.Color("#9400D3");
    let silver = new THREE.Color("#C4CED3");
    let colors = [red, silver, purple];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// UTAH JAZZ
export const jazzMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const jazzGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#002B5C");
    let yellow = new THREE.Color("#F9A01B");
    let green = new THREE.Color("#00471B");
    let colors = [blue, yellow, green];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

// WASHINGTON WIZARDS
export const wizardsMaterial = () => {
    material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        vertexColors: THREE.FaceColors
    });

    return material;
};

export const wizardsGeometry = () => {
    geometry = new THREE.BoxGeometry(32, 32, 32);
    let blue = new THREE.Color("#0C2340");
    let red = new THREE.Color("#C8102E");
    let silver = new THREE.Color("#8D9093");
    let colors = [blue, silver, red];    

    
    for (var i = 0; i < 3; i++) {
        geometry.faces[4 * i].color = colors[i];
        geometry.faces[4 * i + 1].color = colors[i];
        geometry.faces[4 * i + 2].color = colors[i];
        geometry.faces[4 * i + 3].color = colors[i];
    }
    return geometry;
};

