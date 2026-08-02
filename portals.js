/*
=================================================
OMNIVERSE SANDFORGE
portals.js
Partie 1 : Portal Engine
Version 0.1
=================================================
*/


runAfterLoad(function(){

    if(!window.Omniverse){

        console.error(
            "Omniverse doit être chargé avant les portails"
        );

        return;

    }


    /*
    ===============================================
    CONFIGURATION
    ===============================================
    */


    Omniverse.portals = {};


    Omniverse.activePortal = null;


    Omniverse.portalHistory = [];



    /*
    ===============================================
    CREATION D'UN PORTAIL
    ===============================================
    */


    Omniverse.createPortal = function(id,data){


        if(Omniverse.portals[id]){

            console.warn(
                "Portail déjà existant :",
                id
            );

            return;

        }



        Omniverse.portals[id] = {


            id:id,


            name:
            data.name || id,


            destination:
            data.destination || "overworld",


            energy:
            data.energy ?? 100,


            stability:
            data.stability ?? 1,


            size:
            data.size ?? 5,


            color:
            data.color || "#FFFFFF",


            description:
            data.description || ""

        };


        console.log(
            "🌀 Portail créé :",
            id
        );


    };



    /*
    ===============================================
    OUVRIR UN PORTAIL
    ===============================================
    */


    Omniverse.openPortal = function(id){


        let portal =
        Omniverse.portals[id];



        if(!portal){

            console.error(
                "Portail inconnu :",
                id
            );

            return false;

        }



        Omniverse.activePortal =
        portal;



        console.log(
            "🌀 Portail ouvert vers :",
            portal.destination
        );



        return true;

    };



    /*
    ===============================================
    FERMER UN PORTAIL
    ===============================================
    */


    Omniverse.closePortal = function(){


        if(!Omniverse.activePortal){

            return false;

        }



        console.log(
            "🌀 Portail fermé"
        );


        Omniverse.activePortal = null;


        return true;


    };



    /*
    ===============================================
    TELEPORTATION
    ===============================================
    */


    Omniverse.teleport = function(){


        let portal =
        Omniverse.activePortal;



        if(!portal){

            console.error(
                "Aucun portail actif"
            );

            return false;

        }



        if(
        !Omniverse.dimensions[
            portal.destination
        ]){


            console.error(
                "Destination inconnue"
            );


            return false;

        }



        Omniverse.portalHistory.push({

            portail:
            portal.id,


            destination:
            portal.destination

        });



        return Omniverse.switchDimension(
            portal.destination
        );


    };



    console.log(
        "🌀 Portal Engine chargé"
    );

/*
=================================================
OMNIVERSE SANDFORGE
portals.js
Partie 2 : Portails du Multivers
=================================================
*/


/*
===============================================
🌍 PORTAIL OVERWORLD
===============================================
*/

Omniverse.createPortal("overworld_portal", {

    name: "Portail Overworld",

    destination: "overworld",

    energy: 50,

    stability: 1,

    size: 5,

    color: "#55FF55",

    description:
    "Retour vers le monde normal."

});



/*
===============================================
⚫ PORTAIL VOID
===============================================
*/

Omniverse.createPortal("void_portal", {

    name: "Portail Void",

    destination: "void",

    energy: 150,

    stability: 0.7,

    size: 7,

    color: "#000000",

    description:
    "Un passage vers le vide absolu."

});



/*
===============================================
🔥 PORTAIL INFERNO
===============================================
*/

Omniverse.createPortal("inferno_portal", {

    name: "Portail Inferno",

    destination: "inferno",

    energy: 200,

    stability: 0.8,

    size: 6,

    color: "#FF3300",

    description:
    "Un passage vers une dimension brûlante."

});



/*
===============================================
❄ PORTAIL CRYO
===============================================
*/

Omniverse.createPortal("cryo_portal", {

    name: "Portail Cryo",

    destination: "cryo",

    energy: 120,

    stability: 0.9,

    size: 6,

    color: "#66FFFF",

    description:
    "Un portail vers un monde gelé."

});



/*
===============================================
🟣 PORTAIL QUANTUM
===============================================
*/

Omniverse.createPortal("quantum_portal", {

    name: "Portail Quantum",

    destination: "quantum",

    energy: 300,

    stability: 0.5,

    size: 8,

    color: "#AA00FF",

    description:
    "Un passage instable entre les lois physiques."

});



/*
===============================================
🌌 PORTAIL DEEP SPACE
===============================================
*/

Omniverse.createPortal("deep_space_portal", {

    name: "Portail Deep Space",

    destination: "deep_space",

    energy: 400,

    stability: 0.6,

    size: 10,

    color: "#111144",

    description:
    "Vers les profondeurs de l'espace."

});



/*
===============================================
⚡ PORTAIL STORM
===============================================
*/

Omniverse.createPortal("storm_portal", {

    name: "Portail Storm",

    destination: "storm",

    energy: 350,

    stability: 0.7,

    size: 8,

    color: "#4488FF",

    description:
    "Une dimension d'énergie et d'orages."

});



/*
===============================================
⚫ PORTAIL DARK MATTER
===============================================
*/

Omniverse.createPortal("dark_matter_portal", {

    name: "Portail Dark Matter",

    destination: "dark_matter",

    energy: 800,

    stability: 0.3,

    size: 12,

    color: "#050005",

    description:
    "Un portail vers la matière noire."

});



console.log(
"🌌 Portails principaux ajoutés"
);
/*
=================================================
OMNIVERSE SANDFORGE
portals.js
Partie 3 : Portails spéciaux
=================================================
*/


/*
===============================================
🌈 PORTAIL PRISM
===============================================
*/

Omniverse.createPortal("prism_portal", {

    name: "Portail Prism",

    destination: "prism",

    energy: 500,

    stability: 0.6,

    size: 9,

    color: "#FF55FF",

    description:
    "Un passage rempli de lumière et d'énergie."

});



/*
===============================================
⏳ PORTAIL TIME RIFT
===============================================
*/

Omniverse.createPortal("time_rift_portal", {

    name: "Portail Time Rift",

    destination: "time_rift",

    energy: 1000,

    stability: 0.2,

    size: 12,

    color: "#FFFF00",

    description:
    "Une faille qui traverse le temps."

});



/*
===============================================
🅰️ PORTAIL A-1
===============================================
*/

Omniverse.createPortal("a1_portal", {

    name: "Portail Universe A-1",

    destination: "A1",

    energy: 600,

    stability: 0.8,

    size: 10,

    color: "#114488",

    description:
    "Connexion avec un univers parallèle."

});



/*
===============================================
🅰️ PORTAIL A-2
===============================================
*/

Omniverse.createPortal("a2_portal", {

    name: "Portail Universe A-2",

    destination: "A2",

    energy: 700,

    stability: 0.7,

    size: 10,

    color: "#881144",

    description:
    "Connexion avec une réalité alternative."

});



/*
===============================================
♾️ PORTAIL OMNIVERSE CORE
===============================================
*/

Omniverse.createPortal("omniverse_portal", {

    name: "Portail Omniverse Core",

    destination: "omniverse",

    energy: 9999,

    stability: 0.1,

    size: 20,

    color: "#FFFFFF",

    description:
    "Le passage vers le centre de toutes les réalités."

});



/*
===============================================
🌀 TROU DE VER ALÉATOIRE
===============================================
*/


Omniverse.createRandomPortal = function(){


    let dimensions =
    Object.keys(
        Omniverse.dimensions
    );


    let destination =
    dimensions[
        Math.floor(
            Math.random()
            *
            dimensions.length
        )
    ];


    let id =
    "wormhole_" 
    +
    Date.now();



    Omniverse.createPortal(id, {

        name:
        "Trou de ver aléatoire",

        destination:
        destination,

        energy:
        Math.floor(
            Math.random()*1000
        ),

        stability:
        Math.random(),

        size:
        Math.floor(
            Math.random()*15
        )+5,

        color:
        "#FFFFFF",

        description:
        "Un passage imprévisible dans le multivers."

    });


    return id;

};



/*
===============================================
⚠️ PORTAIL INSTABLE
===============================================
*/


Omniverse.createUnstablePortal = function(destination){


    let id =
    "unstable_" + Date.now();



    Omniverse.createPortal(id, {


        name:
        "Portail instable",


        destination:
        destination,


        energy:
        2000,


        stability:
        0.05,


        size:
        15,


        color:
        "#FF0000",


        description:
        "Un portail proche de la destruction."

    });



    return id;

};



console.log(
"🌀 Portails spéciaux chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
portals.js
Partie 4 : Physique des portails
=================================================
*/


/*
===============================================
⚡ SYSTEME D'ENERGIE
===============================================
*/


Omniverse.portalPhysics = {

    energyDrain: 1,

    stabilityLoss: 0.001,

    maxLifetime: 10000

};



/*
===============================================
🔋 UTILISER L'ENERGIE D'UN PORTAIL
===============================================
*/


Omniverse.consumePortalEnergy = function(id,amount){


    let portal =
    Omniverse.portals[id];


    if(!portal){

        return false;

    }


    portal.energy -= amount;



    if(portal.energy <= 0){


        portal.energy = 0;


        console.warn(
            "⚡ Portail sans énergie :",
            id
        );


        Omniverse.closePortal();


    }


    return true;

};



/*
===============================================
📉 STABILITE DU PORTAIL
===============================================
*/


Omniverse.updatePortalStability = function(id){


    let portal =
    Omniverse.portals[id];


    if(!portal){

        return false;

    }



    portal.stability -=
    Omniverse.portalPhysics.stabilityLoss;



    if(portal.stability <= 0){


        portal.stability = 0;


        console.warn(
            "🌀 Portail détruit :",
            id
        );


        delete Omniverse.portals[id];


    }


    return true;

};



/*
===============================================
⏱️ CREATION D'UNE DUREE
===============================================
*/


Omniverse.setPortalLifetime = function(id,time){


    let portal =
    Omniverse.portals[id];


    if(!portal){

        return false;

    }


    portal.lifetime = time;


    return true;

};



/*
===============================================
🔄 TICK DES PORTAILS
===============================================
*/


Omniverse.updatePortals = function(){


    for(let id in Omniverse.portals){


        let portal =
        Omniverse.portals[id];



        if(portal.lifetime){


            portal.lifetime--;


            if(portal.lifetime <= 0){


                console.log(
                    "🌀 Portail fermé :",
                    id
                );


                delete Omniverse.portals[id];


                continue;

            }

        }



        Omniverse.updatePortalStability(id);


    }



};



/*
===============================================
🕳️ EFFET PORTAIL DANGEREUX
===============================================
*/


Omniverse.portalDanger = function(id){


    let portal =
    Omniverse.portals[id];


    if(!portal){

        return 0;

    }



    let danger = 0;



    danger +=
    (1 - portal.stability)
    * 50;



    danger +=
    portal.energy / 1000;



    return danger;

};



/*
===============================================
🔍 INFOS PORTAIL
===============================================
*/


Omniverse.getPortalInfo = function(id){


    let portal =
    Omniverse.portals[id];


    if(!portal){

        return null;

    }



    return {


        nom:
        portal.name,


        destination:
        portal.destination,


        energie:
        portal.energy,


        stabilite:
        portal.stability,


        taille:
        portal.size


    };


};



console.log(
"⚛️ Physique des portails chargée"
);

});
