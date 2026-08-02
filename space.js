/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 1 : Space Engine
Version 0.1
=================================================
*/


runAfterLoad(function(){


    if(!window.Omniverse){


        console.error(
            "Omniverse doit être chargé avant Space Engine"
        );


        return;


    }



    /*
    ===============================================
    CONFIGURATION ESPACE
    ===============================================
    */


    Omniverse.space = {};


    Omniverse.space.objects = {};


    Omniverse.space.galaxies = {};


    Omniverse.space.systems = {};



    /*
    ===============================================
    CREER UN OBJET SPATIAL
    ===============================================
    */


    Omniverse.space.createObject = function(id,data){



        if(
        Omniverse.space.objects[id]
        ){


            console.warn(
                "Objet spatial déjà existant :",
                id
            );


            return;


        }



        Omniverse.space.objects[id] = {


            id:id,


            name:
            data.name || id,


            type:
            data.type || "unknown",


            mass:
            data.mass ?? 1,


            size:
            data.size ?? 1,


            position:
            data.position || {

                x:0,

                y:0,

                z:0

            },


            temperature:
            data.temperature ?? 0,


            gravity:
            data.gravity ?? 0,


            description:
            data.description || ""


        };



        console.log(
            "🌌 Objet spatial créé :",
            id
        );


    };



    /*
    ===============================================
    CREER UNE PLANETE
    ===============================================
    */


    Omniverse.space.createPlanet = function(id,data){



        data.type = "planet";


        Omniverse.space.createObject(
            id,
            data
        );


    };



    /*
    ===============================================
    CREER UNE ETOILE
    ===============================================
    */


    Omniverse.space.createStar = function(id,data){



        data.type = "star";


        Omniverse.space.createObject(
            id,
            data
        );


    };



    /*
    ===============================================
    CREER UN TROU NOIR
    ===============================================
    */


    Omniverse.space.createBlackHole = function(id,data){



        data.type = "black_hole";


        data.gravity =
        data.gravity ?? 1000;



        Omniverse.space.createObject(
            id,
            data
        );


    };



    /*
    ===============================================
    RECUPERER UN OBJET
    ===============================================
    */


    Omniverse.space.getObject = function(id){


        return Omniverse.space.objects[id];


    };



    /*
    ===============================================
    SUPPRIMER UN OBJET
    ===============================================
    */


    Omniverse.space.removeObject = function(id){



        delete Omniverse.space.objects[id];



        console.log(
            "🌌 Objet supprimé :",
            id
        );


    };



    console.log(
        "🚀 Space Engine chargé"
    );

/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 2 : Systèmes solaires et galaxies
=================================================
*/


/*
===============================================
☀️ CREER UN SYSTEME SOLAIRE
===============================================
*/


Omniverse.space.createSystem = function(id,data){


    if(Omniverse.space.systems[id]){

        console.warn(
            "Système déjà existant :",
            id
        );

        return;

    }


    Omniverse.space.systems[id] = {


        id:id,


        name:
        data.name || id,


        star:
        data.star || null,


        planets:
        data.planets || [],


        position:
        data.position || {

            x:0,

            y:0,

            z:0

        },


        description:
        data.description || ""

    };


    console.log(
        "☀️ Système solaire créé :",
        id
    );


};




/*
===============================================
🪐 AJOUTER UNE PLANETE A UN SYSTEME
===============================================
*/


Omniverse.space.addPlanetToSystem = function(system,planet){



    let solar =
    Omniverse.space.systems[system];



    if(!solar){


        console.error(
            "Système inconnu :",
            system
        );


        return false;

    }



    if(
    !Omniverse.space.objects[planet]
    ){


        console.error(
            "Planète inconnue :",
            planet
        );


        return false;

    }



    solar.planets.push(
        planet
    );



    return true;


};




/*
===============================================
🌌 CREER UNE GALAXIE
===============================================
*/


Omniverse.space.createGalaxy = function(id,data){



    if(
    Omniverse.space.galaxies[id]
    ){


        console.warn(
            "Galaxie déjà existante :",
            id
        );


        return;

    }



    Omniverse.space.galaxies[id] = {


        id:id,


        name:
        data.name || id,


        systems:
        data.systems || [],


        size:
        data.size ?? 1000,


        type:
        data.type || "spiral",


        position:
        data.position || {

            x:0,

            y:0,

            z:0

        },


        description:
        data.description || ""


    };



    console.log(
        "🌌 Galaxie créée :",
        id
    );


};




/*
===============================================
⭐ AJOUTER UN SYSTEME A UNE GALAXIE
===============================================
*/


Omniverse.space.addSystemToGalaxy = function(galaxy,system){



    let gal =
    Omniverse.space.galaxies[galaxy];



    if(!gal){

        console.error(
            "Galaxie inconnue"
        );

        return false;

    }



    if(
    !Omniverse.space.systems[system]
    ){

        console.error(
            "Système inconnu"
        );

        return false;

    }



    gal.systems.push(
        system
    );


    return true;


};




/*
===============================================
🔍 INFORMATIONS ESPACE
===============================================
*/


Omniverse.space.getGalaxy = function(id){

    return Omniverse.space.galaxies[id];

};



Omniverse.space.getSystem = function(id){

    return Omniverse.space.systems[id];

};



console.log(
"🌌 Systèmes solaires et galaxies chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 3 : Générateur d'univers
=================================================
*/


/*
===============================================
🎲 GENERATEUR ALEATOIRE
===============================================
*/


Omniverse.space.random = function(min,max){

    return Math.floor(
        Math.random()*(max-min+1)
    )+min;

};



/*
===============================================
⭐ GENERER UNE ETOILE ALEATOIRE
===============================================
*/


Omniverse.space.generateStar = function(id){


    let types = [

        "yellow_star",
        "blue_giant",
        "red_giant",
        "white_dwarf"

    ];


    let type =
    types[
        Math.floor(
            Math.random()*types.length
        )
    ];



    Omniverse.space.createStar(id,{

        name:id,

        mass:
        Omniverse.space.random(10,1000),


        size:
        Omniverse.space.random(1,20),


        temperature:
        Omniverse.space.random(2000,15000),


        description:
        "Une étoile générée automatiquement."

    });


    return id;

};



/*
===============================================
🪐 GENERER UNE PLANETE ALEATOIRE
===============================================
*/


Omniverse.space.generatePlanet = function(id){


    let worlds = [

        "rocky",

        "gas",

        "ice",

        "ocean",

        "volcanic"

    ];


    let type =
    worlds[
        Math.floor(
            Math.random()*worlds.length
        )
    ];



    Omniverse.space.createPlanet(id,{


        name:id,


        mass:
        Omniverse.space.random(1,500),


        size:
        Omniverse.space.random(1,15),


        temperature:
        Omniverse.space.random(
            -200,
            500
        ),


        gravity:
        Math.random()*3,


        description:
        "Planète de type "+type


    });



    return id;

};




/*
===============================================
🌌 GENERER UNE GALAXIE
===============================================
*/


Omniverse.space.generateGalaxy = function(id){



    let galaxyTypes = [

        "spiral",

        "elliptical",

        "irregular"

    ];



    let galaxyType =
    galaxyTypes[
        Math.floor(
            Math.random()
            *
            galaxyTypes.length
        )
    ];



    Omniverse.space.createGalaxy(id,{


        name:id,


        type:
        galaxyType,


        size:
        Omniverse.space.random(
            1000,
            100000
        ),


        description:
        "Galaxie générée automatiquement."


    });



    let systems =
    Omniverse.space.random(
        5,
        50
    );



    for(
        let i=0;
        i<systems;
        i++
    ){


        let systemID =
        id+"_system_"+i;



        let starID =
        systemID+"_star";



        Omniverse.space.generateStar(
            starID
        );



        Omniverse.space.createSystem(
            systemID,
            {

            name:
            systemID,


            star:
            starID

            }
        );



        let planets =
        Omniverse.space.random(
            1,
            12
        );



        for(
            let p=0;
            p<planets;
            p++
        ){


            let planetID =
            systemID+"_planet_"+p;


            Omniverse.space.generatePlanet(
                planetID
            );


            Omniverse.space.addPlanetToSystem(
                systemID,
                planetID
            );


        }



        Omniverse.space.addSystemToGalaxy(
            id,
            systemID
        );


    }



    console.log(
        "🌌 Univers généré :",
        id
    );


    return id;

};




/*
===============================================
🕳️ GENERER UN TROU NOIR
===============================================
*/


Omniverse.space.generateBlackHole = function(id){


    Omniverse.space.createBlackHole(id,{


        name:
        "Trou noir "+id,


        mass:
        1000000,


        size:
        50,


        description:
        "Une singularité cosmique."


    });


    return id;

};



console.log(
"♾️ Générateur d'univers chargé"
);

});
