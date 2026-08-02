runAfterLoad(function () {

if(window.Omniverse){
    console.warn("Omniverse déjà chargé.");
    return;
}

window.Omniverse = {};

/* ===========================================
   CONFIGURATION
=========================================== */

Omniverse.version = "0.1";

Omniverse.currentDimension = "overworld";

Omniverse.dimensions = {};

Omniverse.defaultDimension = "overworld";

/* ===========================================
   CREATION D'UNE DIMENSION
=========================================== */

Omniverse.registerDimension = function(id,data){

    if(Omniverse.dimensions[id]){
        console.warn("Dimension déjà existante :",id);
        return;
    }

    Omniverse.dimensions[id] = {

        id:id,

        name:data.name || id,

        gravity:data.gravity ?? 1,

        temperature:data.temperature ?? 20,

        pressure:data.pressure ?? 1,

        radiation:data.radiation ?? 0,

        airDensity:data.airDensity ?? 1,

        timeScale:data.timeScale ?? 1,

        explosionPower:data.explosionPower ?? 1,

        light:data.light ?? 1,

        sky:data.sky || "#87CEEB",

        fog:data.fog || "#FFFFFF",

        description:data.description || ""

    };

};

/* ===========================================
   GETTERS
=========================================== */

Omniverse.getDimension=function(){

    return Omniverse.dimensions[
        Omniverse.currentDimension
    ];

};

Omniverse.getGravity=function(){

    return Omniverse.getDimension().gravity;

};

Omniverse.getTemperature=function(){

    return Omniverse.getDimension().temperature;

};

Omniverse.getPressure=function(){

    return Omniverse.getDimension().pressure;

};

Omniverse.getRadiation=function(){

    return Omniverse.getDimension().radiation;

};

Omniverse.getLight=function(){

    return Omniverse.getDimension().light;

};

Omniverse.getTimeScale=function(){

    return Omniverse.getDimension().timeScale;

};

/* ===========================================
   CHANGER DE DIMENSION
=========================================== */

Omniverse.switchDimension=function(id){

    if(!Omniverse.dimensions[id]){
        console.error("Dimension inconnue :",id);
        return false;
    }

    Omniverse.currentDimension=id;

    console.log(
        "[Omniverse] ->",
        Omniverse.dimensions[id].name
    );

    return true;

};

/* ===========================================
   DIMENSIONS
=========================================== */

Omniverse.registerDimension("overworld",{

name:"Overworld",

gravity:1,

temperature:20,

pressure:1,

radiation:0,

airDensity:1,

timeScale:1,

explosionPower:1,

light:1,

sky:"#87CEEB",

description:"Monde normal"

});

Omniverse.registerDimension("void",{

name:"Void",

gravity:0,

temperature:-120,

pressure:0,

radiation:3,

airDensity:0,

timeScale:0.5,

explosionPower:0.2,

light:0,

sky:"#000000"

});

Omniverse.registerDimension("inferno",{

name:"Inferno",

gravity:1.3,

temperature:900,

pressure:2,

radiation:1,

airDensity:2,

timeScale:1,

explosionPower:2,

light:2,

sky:"#550000"

});

Omniverse.registerDimension("cryo",{

name:"Cryo",

gravity:0.9,

temperature:-220,

pressure:0.8,

radiation:0,

airDensity:0.7,

timeScale:0.8,

explosionPower:0.4,

light:0.7,

sky:"#99DDFF"

});

Omniverse.registerDimension("quantum",{

name:"Quantum",

gravity:-0.3,

temperature:5,

pressure:1,

radiation:6,

airDensity:1,

timeScale:2,

explosionPower:1,

light:1.5,

sky:"#7700FF"

});

console.log("Omniverse Engine chargé.");

/*
=================================================
OMNIVERSE SANDFORGE
dimensions.js
Partie 2 : Dimensions principales
=================================================
*/


/*
===============================================
🌍 OVERWORLD
===============================================
*/

Omniverse.registerDimension("overworld", {

    name: "Overworld",

    gravity: 1,

    temperature: 20,

    pressure: 1,

    radiation: 0,

    timeScale: 1,

    light: 1,

    sky: "#87CEEB",

    description:
    "Univers normal avec une physique classique."

});



/*
===============================================
⚫ VOID
===============================================
*/

Omniverse.registerDimension("void", {

    name: "Void",

    gravity: 0,

    temperature: -150,

    pressure: 0,

    radiation: 5,

    timeScale: 0.5,

    light: 0,

    sky: "#000000",

    description:
    "Un espace vide sans air ni lumière."

});



/*
===============================================
🔥 INFERNO
===============================================
*/

Omniverse.registerDimension("inferno", {

    name: "Inferno",

    gravity: 1.4,

    temperature: 900,

    pressure: 2,

    radiation: 3,

    timeScale: 1.2,

    light: 2,

    sky: "#660000",

    description:
    "Une dimension volcanique extrêmement chaude."

});



/*
===============================================
❄ CRYO
===============================================
*/

Omniverse.registerDimension("cryo", {

    name: "Cryo",

    gravity: 0.8,

    temperature: -220,

    pressure: 0.7,

    radiation: 0,

    timeScale: 0.8,

    light: 0.5,

    sky: "#AADDFF",

    description:
    "Un monde gelé où presque tout se solidifie."

});



/*
===============================================
🟣 QUANTUM
===============================================
*/

Omniverse.registerDimension("quantum", {

    name: "Quantum",

    gravity: -0.3,

    temperature: 10,

    pressure: 1,

    radiation: 10,

    timeScale: 3,

    light: 1.5,

    sky: "#7700FF",

    description:
    "Une dimension où les lois physiques changent."
});

/*
=================================================
OMNIVERSE SANDFORGE
dimensions.js
Partie 3 : Dimensions avancées
=================================================
*/


/*
===============================================
🌌 DEEP SPACE
===============================================
*/

Omniverse.registerDimension("deep_space", {

    name: "Deep Space",

    gravity: 0.05,

    temperature: -270,

    pressure: 0,

    radiation: 8,

    timeScale: 0.7,

    light: 0.1,

    sky: "#02020F",

    description:
    "Un océan cosmique rempli de vide et de radiations."

});



/*
===============================================
⚡ STORM DIMENSION
===============================================
*/

Omniverse.registerDimension("storm", {

    name: "Storm Dimension",

    gravity: 1.5,

    temperature: 150,

    pressure: 3,

    radiation: 4,

    timeScale: 1.5,

    light: 3,

    sky: "#3344AA",

    description:
    "Une dimension remplie d'orages d'énergie."

});



/*
===============================================
⚫ DARK MATTER
===============================================
*/

Omniverse.registerDimension("dark_matter", {

    name: "Dark Matter Dimension",

    gravity: 5,

    temperature: -100,

    pressure: 5,

    radiation: 15,

    timeScale: 0.3,

    light: 0.05,

    sky: "#080008",

    description:
    "Un univers dominé par la matière noire."

});



/*
===============================================
🌈 PRISM
===============================================
*/

Omniverse.registerDimension("prism", {

    name: "Prism Dimension",

    gravity: 0.5,

    temperature: 50,

    pressure: 1,

    radiation: 2,

    timeScale: 2,

    light: 5,

    sky: "#FF00FF",

    description:
    "Une dimension où l'énergie lumineuse domine."

});



/*
===============================================
⏳ TIME RIFT
===============================================
*/

Omniverse.registerDimension("time_rift", {

    name: "Time Rift",

    gravity: 1,

    temperature: 0,

    pressure: 1,

    radiation: 20,

    timeScale: 10,

    light: 1,

    sky: "#222222",

    description:
    "Une faille où le temps est instable."

});



/*
===============================================
🅰️ UNIVERS A-1
===============================================
*/

Omniverse.registerDimension("a_2", {

    name: "Universe A-1",

    gravity: 1,

    temperature: 20,

    pressure: 1,

    radiation: 1,

    timeScale: 1,

    light: 1,

    sky: "#114488",

    description:
    "Un univers parallèle stable."

});



/*
===============================================
🅰️ UNIVERS A-2
===============================================
*/

Omniverse.registerDimension("a_2", {

    name: "Universe A-2",

    gravity: 1.2,

    temperature: 30,

    pressure: 1.5,

    radiation: 3,

    timeScale: 1.3,

    light: 1,

    sky: "#881144",

    description:
    "Un univers parallèle avec une physique différente."

});



/*
===============================================
♾️ OMNIVERSE CORE
===============================================
*/

Omniverse.registerDimension("omniverse", {

    name: "Omniverse Core",

    gravity: 0,

    temperature: 0,

    pressure: 0,

    radiation: 100,

    timeScale: 0,

    light: 10,

    sky: "#FFFFFF",

    description:
    "Le centre reliant toutes les réalités."

});



console.log(
"♾️ Dimensions du multivers chargées"
);

console.log(
"🌌 Dimensions principales chargées"
);
/*
=================================================
OMNIVERSE SANDFORGE
dimensions.js
Partie 4 : Système avancé des dimensions
=================================================
*/


/*
===============================================
💾 SAUVEGARDE DE DIMENSION
===============================================
*/

Omniverse.dimensionHistory = [];


Omniverse.saveCurrentDimension = function(){

    Omniverse.dimensionHistory.push(
        Omniverse.currentDimension
    );

    console.log(
        "💾 Dimension sauvegardée :",
        Omniverse.currentDimension
    );

};



/*
===============================================
🔙 RETOUR A LA DIMENSION PRECEDENTE
===============================================
*/

Omniverse.returnPreviousDimension = function(){

    if(Omniverse.dimensionHistory.length === 0){

        console.warn(
            "Aucune ancienne dimension"
        );

        return false;

    }


    let previous =
    Omniverse.dimensionHistory.pop();


    return Omniverse.switchDimension(previous);

};



/*
===============================================
📊 INFORMATIONS DIMENSION
===============================================
*/

Omniverse.getDimensionInfo = function(id){

    let dimension =
    Omniverse.dimensions[id];


    if(!dimension){

        console.error(
            "Dimension inconnue"
        );

        return null;

    }


    return {

        nom: dimension.name,

        gravite: dimension.gravity,

        temperature: dimension.temperature,

        pression: dimension.pressure,

        radiation: dimension.radiation,

        vitesseTemps: dimension.timeScale,

        lumiere: dimension.light

    };

};



/*
===============================================
🌡️ APPLICATION DES REGLES PHYSIQUES
===============================================
*/

Omniverse.physics = {

    gravity: 1,

    temperature:20,

    radiation:0,

    timeScale:1

};



Omniverse.updatePhysics = function(){


    let dimension =
    Omniverse.getDimension();



    Omniverse.physics.gravity =
    dimension.gravity;


    Omniverse.physics.temperature =
    dimension.temperature;


    Omniverse.physics.radiation =
    dimension.radiation;


    Omniverse.physics.timeScale =
    dimension.timeScale;



    console.log(
        "⚛️ Physique appliquée :",
        dimension.name
    );


};



/*
===============================================
🌀 EVENEMENT DE CHANGEMENT
===============================================
*/


Omniverse.onDimensionChange = null;



let oldSwitch =
Omniverse.switchDimension;



Omniverse.switchDimension = function(id){


    let result =
    oldSwitch(id);



    if(result){

        Omniverse.saveCurrentDimension();

        Omniverse.updatePhysics();



        if(Omniverse.onDimensionChange){

            Omniverse.onDimensionChange(
                Omniverse.getDimension()
            );

        }

    }


    return result;

};



/*
===============================================
🔍 RECHERCHER UNE DIMENSION
===============================================
*/


Omniverse.findDimension = function(text){


    let results = [];


    for(let id in Omniverse.dimensions){


        let dim =
        Omniverse.dimensions[id];


        if(
            dim.name
            .toLowerCase()
            .includes(
                text.toLowerCase()
            )
        ){

            results.push(dim);

        }

    }


    return results;

};



/*
===============================================
🌌 API POUR LES AUTRES MODS
===============================================
*/

Omniverse.api = {

    changeDimension:
    Omniverse.switchDimension,


    getCurrent:
    Omniverse.getDimension,


    register:
    Omniverse.registerDimension,


    getGravity:
    Omniverse.getGravity,


    getTemperature:
    Omniverse.getTemperature

};



console.log(
"⚙️ Système avancé des dimensions chargé"
);

});
