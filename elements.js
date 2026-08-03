/*
=================================================
OMNIVERSE SANDFORGE
elements.js
Partie 1 : Éléments de base
Sandboxels
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
🌌 CATÉGORIE OMNIVERSE
===============================================
*/


if(typeof categoryLists !== "undefined"){

    categoryLists.omniverse = [];

}



/*
===============================================
⚛️ MATIÈRE QUANTIQUE
===============================================
*/


elements.quantum_matter = {

    color:"#7700ff",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:4000,

    temp:0,


    description:
    "Une matière provenant d'une dimension quantique."

};




/*
===============================================
🌑 MATIÈRE DU VIDE
===============================================
*/


elements.void_matter = {

    color:"#111111",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:10000,

    temp:-273,


    description:
    "Une matière née dans le vide absolu."

};




/*
===============================================
✨ CRISTAL D'ÉNERGIE
===============================================
*/


elements.energy_crystal = {

    color:"#00ffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:3000,


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
    "Cristal contenant une énergie concentrée."

};




/*
===============================================
🧬 MATIÈRE OMNIVERSELLE
===============================================
*/


elements.omniverse_matter = {

    color:"#ffffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:99999,


    description:
    "Une matière provenant du centre du multivers."

};




/*
===============================================
🔥 PLASMA COSMIQUE
===============================================
*/


elements.cosmic_plasma = {

    color:"#ff00ff",

    behavior:behaviors.GAS,

    category:"omniverse",

    state:"gas",

    density:1,

    temp:20000,


    description:
    "Un plasma extrêmement énergétique."

};




/*
===============================================
💎 CRISTAL QUANTIQUE
===============================================
*/


elements.quantum_crystal = {

    color:"#aa00ff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:5000,


    reactions:{


        energy_particle:{

            elem1:"energy_crystal"

        }


    },


    description:
    "Un cristal capable de stocker de l'énergie quantique."

};




console.log(
"🧪 Elements.js partie 1 chargé"
);

/*
=================================================
OMNIVERSE SANDFORGE
elements.js
Partie 2 : Éléments planétaires
Sandboxels
=================================================
*/


/*
===============================================
🪨 ROCHE ALIEN
===============================================
*/


elements.alien_rock = {

    color:"#556677",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:3500,


    description:
    "Une roche provenant d'une planète inconnue."

};




/*
===============================================
🌑 ROCHE LUNAIRE
===============================================
*/


elements.moon_rock = {

    color:"#888888",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:2500,


    description:
    "Une roche trouvée sur des lunes lointaines."

};




/*
===============================================
🏜️ SOL EXTRATERRESTRE
===============================================
*/


elements.alien_soil = {

    color:"#996633",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:1200,


    reactions:{


        cosmic_dust:{

            elem1:"alien_rock"

        }


    },


    description:
    "Un sol d'une planète extraterrestre."

};




/*
===============================================
🌊 EAU ALIEN
===============================================
*/


elements.alien_water = {

    color:"#0088ff",

    behavior:behaviors.LIQUID,

    category:"omniverse",

    state:"liquid",

    density:1000,


    tempHigh:150,

    stateHigh:"alien_steam",


    tempLow:-50,

    stateLow:"alien_ice",


    description:
    "Une eau possédant une composition inconnue."

};




/*
===============================================
💨 VAPEUR ALIEN
===============================================
*/


elements.alien_steam = {

    color:"#aaddff",

    behavior:behaviors.GAS,

    category:"omniverse",

    state:"gas",

    density:1,


    description:
    "Une vapeur provenant d'un océan extraterrestre."

};




/*
===============================================
🧊 GLACE ALIEN
===============================================
*/


elements.alien_ice = {

    color:"#66ccff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:900,


    description:
    "Une glace provenant d'une planète froide."

};




/*
===============================================
🌋 ROCHE VOLCANIQUE
===============================================
*/


elements.volcanic_alien_rock = {

    color:"#aa2200",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:4000,

    temp:1000,


    description:
    "Une roche formée par des volcans extraterrestres."

};




/*
===============================================
⛓️ MINERAI COSMIQUE
===============================================
*/


elements.cosmic_ore = {

    color:"#ffaa00",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:6000,


    reactions:{


        cosmic_plasma:{

            elem1:"energy_crystal"

        }


    },


    description:
    "Un minerai rare provenant de l'espace profond."

};




console.log(
"🌍 Elements planétaires chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
elements.js
Partie 3 : Éléments dimensionnels
Sandboxels
=================================================
*/


/*
===============================================
⚫ MATIÈRE VOID
===============================================
*/


elements.void_material = {

    color:"#050505",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:8000,

    temp:-270,


    reactions:{


        cosmic_plasma:{

            elem1:"void_energy"

        }


    },


    description:
    "Matière provenant d'une dimension sans lumière."

};




/*
===============================================
⚫ ÉNERGIE DU VIDE
===============================================
*/


elements.void_energy = {

    color:"#222222",

    behavior:behaviors.GAS,

    category:"omniverse",

    state:"gas",

    density:0.1,

    temp:-273,


    description:
    "Une énergie issue du néant."

};




/*
===============================================
🔥 MATIÈRE INFERNO
===============================================
*/


elements.inferno_material = {

    color:"#ff3300",

    behavior:behaviors.LIQUID,

    category:"omniverse",

    state:"liquid",

    density:5000,

    temp:1500,


    tempHigh:4000,

    stateHigh:"inferno_plasma",


    description:
    "Une matière provenant d'un monde de feu."

};




/*
===============================================
🔥 PLASMA INFERNO
===============================================
*/


elements.inferno_plasma = {

    color:"#ff9900",

    behavior:behaviors.GAS,

    category:"omniverse",

    state:"gas",

    density:5,

    temp:10000,


    description:
    "Une énergie brûlante d'une dimension infernale."

};




/*
===============================================
❄️ MATIÈRE CRYO
===============================================
*/


elements.cryo_material = {

    color:"#99ffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:3000,

    temp:-220,


    tempHigh:0,

    stateHigh:"cryo_water",


    description:
    "Une matière provenant d'un univers gelé."

};




/*
===============================================
🧊 LIQUIDE CRYO
===============================================
*/


elements.cryo_water = {

    color:"#55ddff",

    behavior:behaviors.LIQUID,

    category:"omniverse",

    state:"liquid",

    density:900,

    temp:-50,


    description:
    "Un liquide extrêmement froid."

};




/*
===============================================
🟣 MATIÈRE QUANTUM
===============================================
*/


elements.quantum_material = {

    color:"#7700ff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:4500,


    tick:function(pixel){


        if(Math.random()<0.02){


            pixel.temp += 100;


        }


    },


    description:
    "Une matière dont les lois physiques sont instables."

};




/*
===============================================
🅰️ MATIÈRE UNIVERS A-1
===============================================
*/


elements.a1_material = {

    color:"#114488",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:3000,


    description:
    "Matière provenant de l'univers parallèle A-1."

};




/*
===============================================
🅰️ MATIÈRE UNIVERS A-2
===============================================
*/


elements.a2_material = {

    color:"#881144",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:3500,


    description:
    "Matière provenant de l'univers parallèle A-2."

};




/*
===============================================
♾️ ÉNERGIE DIMENSIONNELLE
===============================================
*/


elements.dimension_energy = {

    color:"#ffffff",

    behavior:behaviors.GAS,

    category:"omniverse",

    state:"energy",

    density:1,

    temp:5000,


    reactions:{


        void_material:{

            elem1:"void_energy"

        },


        quantum_material:{

            elem1:"energy_crystal"

        }


    },


    description:
    "Une énergie reliant plusieurs dimensions."

};




console.log(
"🌌 Éléments dimensionnels chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
elements.js
Partie 4 : Éléments rares du multivers
Sandboxels
=================================================
*/


/*
===============================================
⚛️ ANTIMATIÈRE
===============================================
*/


elements.antimatter = {

    color:"#ff00aa",

    behavior:behaviors.GAS,

    category:"omniverse",

    state:"gas",

    density:1,

    temp:-270,


    reactions:{


        cosmic_matter:{

            elem1:"big_bang_energy"

        },


        omniverse_matter:{

            elem1:"dimension_energy"

        }


    },


    description:
    "Une matière opposée à la matière normale."

};




/*
===============================================
🕳️ MATIÈRE NOIRE AVANCÉE
===============================================
*/


elements.dark_matter_advanced = {

    color:"#220033",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:9000,


    tick:function(pixel){


        if(Math.random()<0.01){


            pixel.temp -= 10;


        }


    },


    description:
    "Une forme concentrée de matière noire."

};




/*
===============================================
🧱 NEUTRONIUM
===============================================
*/


elements.neutronium = {

    color:"#555555",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:50000,


    tempHigh:100000,

    stateHigh:"star_matter",


    description:
    "Une matière extrêmement dense composée de neutrons."

};




/*
===============================================
💎 CRISTAL OMNIVERSEL
===============================================
*/


elements.omniverse_crystal = {

    color:"#ffffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:7000,


    tick:function(pixel){


        if(Math.random()<0.03){


            createPixel(

                "dimension_energy",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un cristal contenant l'énergie de plusieurs univers."

};




/*
===============================================
🔮 ÉLÉMENT IMPOSSIBLE
===============================================
*/


elements.impossible_element = {

    color:"#00ff99",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:1,


    tick:function(pixel){


        if(Math.random()<0.02){


            pixel.x += Math.random()<0.5 ? 1 : -1;


        }


    },


    description:
    "Un élément qui ne respecte aucune loi physique connue."

};




/*
===============================================
🌠 POUSSIÈRE D'ÉTERNITÉ
===============================================
*/


elements.eternity_dust = {

    color:"#ffaaee",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:500,


    reactions:{


        dimension_energy:{

            elem1:"omniverse_crystal"

        }


    },


    description:
    "Une poussière provenant d'un temps infini."

};




/*
===============================================
🌌 MATIÈRE MULTIVERSELLE
===============================================
*/


elements.multiversal_matter = {

    color:"#00ffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:20000,


    description:
    "Une matière existant dans plusieurs réalités en même temps."

};




/*
===============================================
♾️ FRAGMENT D'OMNIVERS
===============================================
*/


elements.omniverse_fragment = {

    color:"#ffffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:99999,


    reactions:{


        antimatter:{

            elem1:"big_bang_energy"

        }


    },


    description:
    "Un fragment du cœur de l'Omniverse."

};




console.log(
"💎 Éléments rares du multivers chargés"
);
/*
=================================================
OMNIVERSE SANDFORGE
elements.js
Partie 5 : Éléments ultimes du multivers
Sandboxels
=================================================
*/


/*
===============================================
💥 ÉNERGIE BIG BANG
===============================================
*/


elements.big_bang_core = {

    color:"#ffffff",

    behavior:behaviors.EXPLOSION,

    category:"omniverse",

    state:"energy",

    density:1,

    temp:999999,


    tick:function(pixel){


        if(Math.random()<0.01){


            createPixel(

                "cosmic_plasma",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "L'énergie primordiale ayant créé les univers."

};




/*
===============================================
🌀 SINGULARITÉ PARFAITE
===============================================
*/


elements.perfect_singularity = {

    color:"#000000",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:9999999,


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


                if(
                pixelMap[pixel.x+x] &&
                pixelMap[pixel.x+x][pixel.y+y]
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
    "Une singularité dépassant les lois normales."

};




/*
===============================================
⚪ MATIÈRE ABSOLUE
===============================================
*/


elements.absolute_matter = {

    color:"#eeeeee",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:100000,


    tempHigh:1000000,

    stateHigh:"big_bang_core",


    description:
    "La forme de matière la plus stable connue."

};




/*
===============================================
🌱 GRAINE D'UNIVERS
===============================================
*/


elements.universe_seed = {

    color:"#00ffff",

    behavior:behaviors.POWDER,

    category:"omniverse",

    state:"solid",

    density:500,


    tick:function(pixel){


        if(Math.random()<0.01){


            createPixel(

                "dimension_energy",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Une graine capable de créer une nouvelle réalité."

};




/*
===============================================
♾️ ORIGINE DU MULTIVERS
===============================================
*/


elements.multiverse_origin = {

    color:"#ffff00",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:999999,


    reactions:{


        universe_seed:{

            elem1:"big_bang_core"

        },


        antimatter:{

            elem1:"perfect_singularity"

        }


    },


    description:
    "Le point d'origine du multivers."

};




/*
===============================================
🔷 NOYAU OMNIVERSEL
===============================================
*/


elements.omniverse_core = {

    color:"#ffffff",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",

    density:99999999,


    tick:function(pixel){


        if(Math.random()<0.02){


            createPixel(

                "omniverse_fragment",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Le noyau reliant toutes les réalités."

};




/*
===============================================
🌀 PORTAIL DE CRÉATION
===============================================
*/


elements.creation_portal = {

    color:"#ffaa00",

    behavior:behaviors.WALL,

    category:"omniverse",

    state:"solid",


    tick:function(pixel){


        if(Math.random()<0.03){


            createPixel(

                "universe_seed",

                pixel.x,

                pixel.y-1

            );


        }


    },


    description:
    "Un portail capable de lancer la création d'un univers."

};




console.log(
"🌀 Éléments ultimes du multivers chargés"
);

});
