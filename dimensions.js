/*
====================================================
OMNIVERSE MOD
Part 1 - Dimension Engine
Version 0.1
====================================================
*/

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

});
