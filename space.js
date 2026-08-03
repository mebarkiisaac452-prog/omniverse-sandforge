/*
=================================================
OMNIVERSE SANDFORGE
space.js
Version Sandboxels
Partie 1 : Éléments cosmiques
=================================================
*/


runAfterLoad(function(){


if(typeof elements === "undefined"){

    console.error(
        "Sandboxels elements introuvable"
    );

    return;

}



/*
===============================================
🌌 CATÉGORIE ESPACE
===============================================
*/


if(typeof categoryLists !== "undefined"){

    categoryLists.space = [];

}



/*
===============================================
🌑 POUSSIÈRE COSMIQUE
===============================================
*/


elements.cosmic_dust = {

    color:"#555577",

    behavior:behaviors.POWDER,

    category:"space",

    state:"solid",

    density:500,

    temp:20,

    description:
    "Poussière provenant des profondeurs de l'espace."

};



/*
===============================================
⭐ MATIÈRE STELLAIRE
===============================================
*/


elements.star_matter = {

    color:"#ffaa22",

    behavior:behaviors.LIQUID,

    category:"space",

    state:"liquid",

    density:5000,

    temp:5000,

    reactions:{

        cosmic_dust:{

            elem1:"star_core"

        }

    },


    description:
    "Matière concentrée utilisée pour former des étoiles."

};




/*
===============================================
🔥 COEUR D'ÉTOILE
===============================================
*/


elements.star_core = {

    color:"#ffffff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:10000,

    temp:10000,


    tick:function(pixel){


        pixel.temp += 10;


    },


    description:
    "Le centre brûlant d'une étoile."

};




/*
===============================================
🕳️ MATIÈRE DU TROU NOIR
===============================================
*/


elements.black_hole_matter = {

    color:"#080008",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:999999,


    tick:function(pixel){


        if(pixel.x && pixel.y){


            deletePixel(
                pixel.x,
                pixel.y
            );


        }


    },


    description:
    "Une matière tellement dense qu'elle absorbe tout."

};




/*
===============================================
⚫ MATIÈRE NOIRE
===============================================
*/


elements.dark_matter = {

    color:"#111122",

    behavior:behaviors.POWDER,

    category:"space",

    density:3000,

    temp:-200,


    reactions:{


        radiation:{

            elem1:"energy_particle"

        }


    },


    description:
    "Une matière mystérieuse de l'univers."

};




/*
===============================================
⚡ PARTICULE D'ÉNERGIE
===============================================
*/


elements.energy_particle = {

    color:"#00ffff",

    behavior:behaviors.GAS,

    category:"space",

    density:1,

    temp:10000,


    description:
    "Une particule énergétique cosmique."

};




/*
===============================================
☢️ RADIATION COSMIQUE
===============================================
*/


elements.cosmic_radiation = {

    color:"#ff00ff",

    behavior:behaviors.GAS,

    category:"space",

    density:0.1,

    temp:500,


    description:
    "Radiation venant des étoiles lointaines."

};




console.log(
"🌌 Space.js Sandboxels chargé"
);

/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 2 : Phénomènes cosmiques
Sandboxels
=================================================
*/


/*
===============================================
⭐ ÉTOILE
===============================================
*/


elements.cosmic_star = {

    color:"#ffaa00",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:8000,

    temp:6000,


    tick:function(pixel){


        pixel.temp += 5;



        if(pixel.temp > 12000){


            changePixel(
                pixel,
                "supernova"
            );


        }


    },


    description:
    "Une étoile miniature contenant une énergie énorme."

};




/*
===============================================
💥 SUPERNOVA
===============================================
*/


elements.supernova = {

    color:"#ff4400",

    behavior:behaviors.EXPLOSION,

    category:"space",

    state:"energy",

    temp:15000,


    tick:function(pixel){


        if(Math.random()<0.05){


            createPixel(
                "cosmic_radiation",
                pixel.x+
                Math.floor(
                    Math.random()*3-1
                ),
                pixel.y
            );


        }


    },


    description:
    "Explosion finale d'une étoile."

};




/*
===============================================
🕳️ TROU NOIR
===============================================
*/


elements.black_hole = {

    color:"#000000",

    behavior:behaviors.WALL,

    category:"space",

    density:999999,

    state:"solid",



    tick:function(pixel){



        for(
            let x=-2;
            x<=2;
            x++
        ){

            for(
                let y=-2;
                y<=2;
                y++
            ){


                let target =
                pixelMap[
                    pixel.x+x
                ] &&
                pixelMap[
                    pixel.x+x
                ][
                    pixel.y+y
                ];



                if(
                target &&
                target.element !==
                "black_hole"
                ){


                    deletePixel(
                        pixel.x+x,
                        pixel.y+y
                    );


                }


            }

        }


    },


    description:
    "Une singularité qui absorbe les pixels proches."

};




/*
===============================================
🌫️ NÉBULEUSE
===============================================
*/


elements.nebula = {

    color:"#aa55ff",

    behavior:behaviors.GAS,

    category:"space",

    density:5,

    temp:-100,


    reactions:{


        cosmic_dust:{


            elem1:"star_matter"


        }


    },


    description:
    "Nuage cosmique où naissent les étoiles."

};




/*
===============================================
🌌 GALAXIE
===============================================
*/


elements.galaxy_cluster = {

    color:"#4444ff",

    behavior:behaviors.POWDER,

    category:"space",

    density:100,


    tick:function(pixel){


        if(Math.random()<0.01){


            createPixel(
                "cosmic_star",
                pixel.x,
                pixel.y-1
            );


        }


    },


    description:
    "Un fragment de galaxie contenant des étoiles."

};




/*
===============================================
🌀 ANOMALIE SPATIALE
===============================================
*/


elements.space_anomaly = {

    color:"#00ff88",

    behavior:behaviors.GAS,

    category:"space",

    density:1,

    temp:0,


    tick:function(pixel){


        if(Math.random()<0.02){


            pixel.temp += 500;

        }


    },


    description:
    "Une zone où les lois physiques changent."

};




console.log(
"🌌 Phénomènes cosmiques chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 3 : Portails et dimensions spatiales
Sandboxels
=================================================
*/


/*
===============================================
🌀 PORTAIL SPATIAL DE BASE
===============================================
*/


elements.space_portal = {

    color:"#00ffff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    movable:false,


    portalTarget:"void",


    tick:function(pixel){


        for(
            let x=-1;
            x<=1;
            x++
        ){

            for(
                let y=-1;
                y<=1;
                y++
            ){


                let target =
                pixelMap[
                    pixel.x+x
                ] &&
                pixelMap[
                    pixel.x+x
                ][
                    pixel.y+y
                ];



                if(
                target &&
                target.element !==
                "space_portal"
                ){


                    changePixel(

                        target,

                        "void_energy"

                    );


                }


            }

        }


    },


    description:
    "Un portail reliant plusieurs dimensions."

};




/*
===============================================
⚫ PORTAIL VOID
===============================================
*/


elements.void_portal = {

    color:"#000000",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",


    portalTarget:"void",



    tick:function(pixel){


        if(Math.random()<0.05){


            createPixel(

                "void_energy",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un portail vers une dimension vide."

};




/*
===============================================
🟣 PORTAIL QUANTUM
===============================================
*/


elements.quantum_portal = {

    color:"#7700ff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",


    portalTarget:"quantum",



    tick:function(pixel){


        if(Math.random()<0.03){


            createPixel(

                "energy_particle",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un portail instable vers une dimension quantique."

};




/*
===============================================
♾️ PORTAIL OMNIVERSE
===============================================
*/


elements.omniverse_portal = {

    color:"#ffffff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",


    portalTarget:"omniverse",



    tick:function(pixel){


        if(Math.random()<0.02){


            createPixel(

                "space_anomaly",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un passage vers le cœur du multivers."

};




/*
===============================================
⚫ ÉNERGIE DU VIDE
===============================================
*/


elements.void_energy = {

    color:"#111111",

    behavior:behaviors.GAS,

    category:"space",

    density:0.1,

    temp:-273,


    tick:function(pixel){


        if(Math.random()<0.01){


            deletePixel(

                pixel.x,

                pixel.y

            );


        }


    },


    description:
    "Énergie provenant d'une dimension vide."

};




/*
===============================================
🌌 SYSTEME DE DIMENSION
===============================================
*/


Omniverse.space.dimensionEffects = {


    void:{


        gravity:0,


        temperature:-273,


        radiation:10


    },


    quantum:{


        gravity:-0.5,


        temperature:20,


        radiation:50


    },


    omniverse:{


        gravity:0,


        temperature:0,


        radiation:100


    }


};




Omniverse.space.getDimensionEffect =
function(id){


    return (

        Omniverse.space.dimensionEffects[id]

        ||

        null

    );


};




console.log(
"🌀 Portails spatiaux chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 4 : Civilisations spatiales
Structures cosmiques
Sandboxels
=================================================
*/


/*
===============================================
🛰️ STATION SPATIALE
===============================================
*/


elements.space_station = {

    color:"#bbbbbb",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:4000,


    description:
    "Une station construite dans l'espace."
};




/*
===============================================
🌐 PLANÈTE ARTIFICIELLE
===============================================
*/


elements.artificial_planet = {

    color:"#3366aa",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:6000,


    tick:function(pixel){


        if(Math.random()<0.01){


            createPixel(

                "cosmic_dust",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Une planète créée artificiellement par une civilisation avancée."

};




/*
===============================================
☀️ SPHÈRE DE DYSON
===============================================
*/


elements.dyson_sphere = {

    color:"#ffaa33",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:8000,


    tick:function(pixel){


        if(Math.random()<0.02){


            createPixel(

                "energy_particle",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Structure géante entourant une étoile pour absorber son énergie."

};




/*
===============================================
🏛️ ARTEFACT COSMIQUE
===============================================
*/


elements.cosmic_artifact = {

    color:"#00ffff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:3000,


    reactions:{


        dark_matter:{


            elem1:"energy_particle"


        }


    },


    description:
    "Une technologie ancienne contenant une énergie inconnue."

};




/*
===============================================
🧱 MÉTAL SPATIAL
===============================================
*/


elements.space_metal = {

    color:"#444444",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:9000,

    tempHigh:5000,

    stateHigh:"star_matter",


    description:
    "Un métal extrêmement résistant trouvé dans l'espace."

};




/*
===============================================
💎 CRISTAL COSMIQUE
===============================================
*/


elements.cosmic_crystal = {

    color:"#aa00ff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:3500,


    tick:function(pixel){


        if(Math.random()<0.02){


            createPixel(

                "energy_particle",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un cristal chargé d'énergie cosmique."

};




/*
===============================================
🌌 MÉGA STRUCTURE
===============================================
*/


elements.megastructure = {

    color:"#555555",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:10000,


    description:
    "Une construction gigantesque capable de modifier un système solaire."

};




/*
===============================================
🔋 RÉACTEUR COSMIQUE
===============================================
*/


elements.cosmic_reactor = {

    color:"#00ff00",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:5000,


    tick:function(pixel){


        if(Math.random()<0.05){


            createPixel(

                "energy_particle",

                pixel.x+1,

                pixel.y

            );


        }


    },


    description:
    "Un générateur utilisant l'énergie des étoiles."

};




console.log(
"🏛️ Civilisations spatiales chargées"
);
/*
=================================================
OMNIVERSE SANDFORGE
space.js
Partie 5 : Événements cosmiques
Sandboxels
=================================================
*/


/*
===============================================
💥 IMPACT PLANÉTAIRE
===============================================
*/


elements.planet_impact = {

    color:"#ff5500",

    behavior:behaviors.EXPLOSION,

    category:"space",

    state:"energy",

    temp:10000,


    description:
    "Collision entre deux corps célestes."

};




/*
===============================================
🪐 PLANÈTE EN FUSION
===============================================
*/


elements.molten_planet = {

    color:"#ff3300",

    behavior:behaviors.LIQUID,

    category:"space",

    state:"liquid",

    density:6000,

    temp:3000,


    tick:function(pixel){


        if(Math.random()<0.02){


            changePixel(

                pixel,

                "cosmic_dust"

            );


        }


    },


    description:
    "Une planète détruite devenue un océan de roche fondue."

};




/*
===============================================
⭐ NAISSANCE D'ÉTOILE
===============================================
*/


elements.star_birth = {

    color:"#ffff00",

    behavior:behaviors.GAS,

    category:"space",

    state:"gas",

    temp:1000,


    tick:function(pixel){


        pixel.temp += 50;



        if(pixel.temp > 5000){


            changePixel(

                pixel,

                "cosmic_star"

            );


        }


    },


    description:
    "Nuage de matière créant une nouvelle étoile."

};




/*
===============================================
🕳️ TROU NOIR SUPERMASSIF
===============================================
*/


elements.supermassive_black_hole = {

    color:"#000000",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:9999999,


    tick:function(pixel){



        for(
            let x=-3;
            x<=3;
            x++
        ){


            for(
                let y=-3;
                y<=3;
                y++
            ){


                let target =
                pixelMap[
                    pixel.x+x
                ] &&
                pixelMap[
                    pixel.x+x
                ][
                    pixel.y+y
                ];



                if(
                target &&
                target.element !==
                "supermassive_black_hole"
                ){


                    deletePixel(

                        pixel.x+x,

                        pixel.y+y

                    );


                }


            }

        }


    },


    description:
    "Un trou noir capable d'engloutir une galaxie."

};




/*
===============================================
🌌 COLLISION DE GALAXIES
===============================================
*/


elements.galaxy_collision = {

    color:"#ff00ff",

    behavior:behaviors.EXPLOSION,

    category:"space",

    state:"energy",

    temp:20000,


    description:
    "Deux galaxies fusionnent dans une explosion cosmique."

};




/*
===============================================
🌠 QUASAR
===============================================
*/


elements.quasar = {

    color:"#00ffff",

    behavior:behaviors.WALL,

    category:"space",

    state:"solid",

    density:50000,

    temp:50000,


    tick:function(pixel){


        if(Math.random()<0.05){


            createPixel(

                "cosmic_radiation",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un noyau galactique extrêmement énergétique."

};




/*
===============================================
♾️ FIN D'UNIVERS
===============================================
*/


elements.universe_end = {

    color:"#ffffff",

    behavior:behaviors.GAS,

    category:"space",

    state:"energy",

    temp:0,


    tick:function(pixel){



        if(Math.random()<0.03){


            deletePixel(

                pixel.x,

                pixel.y

            );


        }


    },


    description:
    "Une anomalie représentant la fin d'une réalité."

};




/*
===============================================
🌌 BIG BANG
===============================================
*/


elements.big_bang_energy = {

    color:"#ffffff",

    behavior:behaviors.EXPLOSION,

    category:"space",

    state:"energy",

    temp:999999,


    description:
    "Énergie primordiale de création d'un univers."

};




console.log(
"🌠 Événements cosmiques chargés"
);

});
