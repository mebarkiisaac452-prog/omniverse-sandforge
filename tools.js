/*
=================================================
OMNIVERSE SANDFORGE
tools.js
Partie 1 : Outils cosmiques
Sandboxels
=================================================
*/


runAfterLoad(function(){



/*
===============================================
🌀 CRÉATEUR DE PORTAIL
===============================================
*/


elements.portal_tool = {


    color:"#00ffff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "space_portal"

        );


    },


    description:
    "Crée un portail spatial."


};




/*
===============================================
⭐ CRÉATEUR D'ÉTOILE
===============================================
*/


elements.star_tool = {


    color:"#ffff00",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "cosmic_star"

        );


    },


    description:
    "Crée une étoile cosmique."


};




/*
===============================================
🌌 PINCEAU DIMENSIONNEL
===============================================
*/


elements.dimension_tool = {


    color:"#7700ff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "dimension_energy"

        );


    },


    description:
    "Dépose de l'énergie dimensionnelle."


};




/*
===============================================
💥 GÉNÉRATEUR BIG BANG
===============================================
*/


elements.bigbang_tool = {


    color:"#ffffff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "big_bang_core"

        );


    },


    description:
    "Déclenche une explosion cosmique."


};




/*
===============================================
🧹 EFFACEUR COSMIQUE
===============================================
*/


elements.cosmic_eraser = {


    color:"#000000",


    category:"tools",


    tool:function(pixel){


        deletePixel(

            pixel.x,

            pixel.y

        );


    },


    description:
    "Supprime la matière sélectionnée."


};




console.log(
"🔧 Outils cosmiques chargés"
);


/*
=================================================
OMNIVERSE SANDFORGE
tools.js
Partie 2 : Outils avancés
Sandboxels
=================================================
*/


runAfterLoad(function(){



/*
===============================================
🕳️ GÉNÉRATEUR DE TROU NOIR
===============================================
*/


elements.blackhole_tool = {


    color:"#000000",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "black_hole"

        );


    },


    description:
    "Crée un trou noir absorbant la matière."

};




/*
===============================================
🌌 GÉNÉRATEUR DE GALAXIE
===============================================
*/


elements.galaxy_tool = {


    color:"#4444ff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "galaxy_cluster"

        );


    },


    description:
    "Crée un fragment de galaxie."

};




/*
===============================================
🪐 CRÉATEUR DE PLANÈTE
===============================================
*/


elements.planet_tool = {


    color:"#3366aa",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "artificial_planet"

        );


    },


    description:
    "Crée une planète artificielle."

};




/*
===============================================
⚖️ CONTRÔLEUR DE GRAVITÉ
===============================================
*/


elements.gravity_tool = {


    color:"#ff00ff",


    category:"tools",


    tool:function(pixel){



        if(
        typeof Omniverse !== "undefined"
        ){


            Omniverse.gravityMode =

            !Omniverse.gravityMode;



            console.log(

            "Gravité modifiée"

            );


        }


    },


    description:
    "Modifie la gravité globale."

};




/*
===============================================
⏳ CONTRÔLEUR DU TEMPS
===============================================
*/


elements.time_tool = {


    color:"#00ff88",


    category:"tools",


    tool:function(pixel){


        if(
        typeof Omniverse !== "undefined"
        ){


            Omniverse.timeMode =

            !Omniverse.timeMode;


            console.log(

            "Temps dimensionnel changé"

            );


        }


    },


    description:
    "Contrôle l'écoulement du temps."

};




/*
===============================================
♾️ CRÉATEUR OMNIVERSEL
===============================================
*/


elements.omniverse_tool = {


    color:"#ffffff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "omniverse_core"

        );


    },


    description:
    "Place un noyau de l'Omniverse."

};




console.log(
"🌀 Outils avancés chargés"
);


/*
=================================================
OMNIVERSE SANDFORGE
tools.js
Partie 3 : Outils ultimes
Sandboxels
=================================================
*/


runAfterLoad(function(){



/*
===============================================
🌌 CRÉATEUR D'UNIVERS
===============================================
*/


elements.universe_creator_tool = {


    color:"#00ffff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "universe_seed"

        );


    },


    description:
    "Crée une graine capable de former un univers."

};




/*
===============================================
💀 FIN DU MONDE
===============================================
*/


elements.end_universe_tool = {


    color:"#550000",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "universe_end"

        );


    },


    description:
    "Déclenche une fin d'univers locale."

};




/*
===============================================
🌀 FUSION DIMENSIONNELLE
===============================================
*/


elements.dimension_merge_tool = {


    color:"#ff00ff",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "multiverse_origin"

        );


    },


    description:
    "Fusionne plusieurs réalités."

};




/*
===============================================
🧬 ÉDITEUR DE RÉALITÉ
===============================================
*/


elements.reality_editor_tool = {


    color:"#00ff99",


    category:"tools",


    tool:function(pixel){



        if(
        typeof Omniverse !== "undefined"
        ){


            Omniverse.realityEdited = true;


            console.log(

            "Réalité modifiée"

            );


        }


    },


    description:
    "Modifie les règles de la réalité."

};




/*
===============================================
⚛️ MATIÈRE ABSOLUE
===============================================
*/


elements.absolute_tool = {


    color:"#eeeeee",


    category:"tools",


    tool:function(pixel){


        changePixel(

            pixel,

            "absolute_matter"

        );


    },


    description:
    "Crée la matière la plus stable."

};




/*
===============================================
♾️ RESET MULTIVERSEL
===============================================
*/


elements.reset_multiverse_tool = {


    color:"#000000",


    category:"tools",


    tool:function(pixel){



        if(
        typeof clearAll === "function"
        ){


            clearAll();


        }



        console.log(

        "♾️ Multivers réinitialisé"

        );


    },


    description:
    "Réinitialise la simulation."

};




console.log(
"♾️ Outils ultimes chargés"
);



});
});
});
