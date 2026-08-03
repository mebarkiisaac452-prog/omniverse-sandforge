/*
=================================================
OMNIVERSE SANDFORGE
core.js
Système principal
Sandboxels
Version 1.0
=================================================
*/


runAfterLoad(function(){


/*
===============================================
♾️ CRÉATION DU CORE
===============================================
*/


window.Omniverse = window.Omniverse || {};



Omniverse.name =
"Omniverse SandForge";



Omniverse.version =
"1.0";



Omniverse.author =
"SandForge";



Omniverse.loaded =
true;




/*
===============================================
📦 CONFIGURATION DU MOD
===============================================
*/


Omniverse.config = {


    dimensions:true,


    space:true,


    elements:true,


    reactions:true,


    tools:true,


    mobs:true


};




/*
===============================================
🧩 GESTION DES MODULES
===============================================
*/


Omniverse.modules = {


    loaded:[],


    register:function(name){


        if(
        !this.loaded.includes(name)
        ){


            this.loaded.push(name);


            console.log(

            "Module chargé : "

            +name

            );


        }


    },


    list:function(){


        console.log(

        this.loaded

        );


    }


};




/*
===============================================
🌌 PHYSIQUE GLOBALE
===============================================
*/


Omniverse.physics = {


    gravity:1,


    timeScale:1,


    radiation:0,


    temperature:20,


    dimension:"overworld"


};




/*
===============================================
🪐 DIMENSION ACTIVE
===============================================
*/


Omniverse.setDimension=function(id){



    if(
    Omniverse.dimensions &&
    Omniverse.dimensions[id]
    ){


        Omniverse.physics.dimension=id;


        console.log(

        "Dimension actuelle : "

        +id

        );


        return true;


    }



    console.warn(

    "Dimension inconnue : "

    +id

    );


    return false;


};




/*
===============================================
⚙️ MODIFIER LA PHYSIQUE
===============================================
*/


Omniverse.setPhysics=function(data){



    for(
    let value in data
    ){


        if(
        Omniverse.physics[value]
        !== undefined
        ){


            Omniverse.physics[value]
            =
            data[value];


        }


    }


    console.log(

    "Physique modifiée"

    );


};




/*
===============================================
📊 INFORMATIONS
===============================================
*/


Omniverse.info=function(){


    console.log(

    "================================"

    );


    console.log(

    "♾️ Omniverse SandForge"

    );


    console.log(

    "Version : "
    +
    Omniverse.version

    );


    console.log(

    "Modules : "

    );


    console.log(

    Omniverse.modules.loaded

    );


    console.log(

    "================================"

    );


};




/*
===============================================
🚀 INITIALISATION
===============================================
*/


Omniverse.modules.register(
"core"
);



console.log(
"🧠 Omniverse Core chargé"
);



});
