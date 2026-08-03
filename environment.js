/*
=================================================
OMNIVERSE SANDFORGE
environment.js
Système environnemental
Sandboxels
Version 1.0
=================================================
*/


runAfterLoad(function(){


window.Omniverse =
window.Omniverse || {};



Omniverse.environment = {


    temperature:20,

    pressure:1,

    radiation:0,

    atmosphere:true


};




/*
===============================================
🌡️ CHANGEMENT TEMPÉRATURE
===============================================
*/


Omniverse.setTemperature=function(value){


    Omniverse.environment.temperature=value;


    console.log(

    "Température : "
    +value

    );


};




/*
===============================================
💨 PRESSION
===============================================
*/


Omniverse.setPressure=function(value){


    Omniverse.environment.pressure=value;


    console.log(

    "Pression : "
    +value

    );


};




/*
===============================================
☢️ RADIATION
===============================================
*/


Omniverse.setRadiation=function(value){


    Omniverse.environment.radiation=value;


    console.log(

    "Radiation : "
    +value

    );


};




/*
===============================================
🌌 APPLICATION DIMENSION
===============================================
*/


Omniverse.applyDimensionEnvironment=function(id){


    if(
    Omniverse.dimensions &&
    Omniverse.dimensions[id]
    ){


        let dim =
        Omniverse.dimensions[id];


        Omniverse.environment.temperature =
        dim.temperature;


        Omniverse.environment.pressure =
        dim.pressure;


        Omniverse.environment.radiation =
        dim.radiation;



        console.log(

        "Environnement appliqué : "
        +dim.name

        );


    }


};




/*
===============================================
⚠️ SURVEILLANCE
===============================================
*/


Omniverse.environmentTick=function(){


    if(
    Omniverse.environment.radiation > 10
    ){


        console.log(

        "☢️ Radiation extrême"

        );


    }


    if(
    Omniverse.environment.temperature > 500
    ){


        console.log(

        "🔥 Température critique"

        );


    }


};




setInterval(

Omniverse.environmentTick,

3000

);




Omniverse.modules &&
Omniverse.modules.register(
"environment"
);



console.log(
"🌍 Environment chargé"
);



});
