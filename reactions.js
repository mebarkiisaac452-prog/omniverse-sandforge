/*
=================================================
OMNIVERSE SANDFORGE
reactions.js
Partie 1 : Réactions de base
Sandboxels
=================================================
*/


runAfterLoad(function(){



/*
===============================================
⚛️ FUSION ÉNERGÉTIQUE
===============================================
*/


elements.energy_particle.reactions = {


    cosmic_dust:{

        elem1:"cosmic_plasma"

    },


    cosmic_plasma:{

        elem1:"energy_crystal"

    }


};




/*
===============================================
🔥 PLASMA COSMIQUE
===============================================
*/


elements.cosmic_plasma.reactions = {


    cosmic_dust:{


        elem1:"cosmic_star"


    },


    alien_rock:{


        elem1:"molten_planet"


    }


};




/*
===============================================
💎 CRÉATION DE CRISTAL
===============================================
*/


elements.cosmic_ore.reactions = {


    dimension_energy:{


        elem1:"omniverse_crystal"


    },


    energy_particle:{


        elem1:"energy_crystal"


    }


};




/*
===============================================
🌌 MATIÈRE DIMENSIONNELLE
===============================================
*/


elements.dimension_energy.reactions = {


    void_material:{


        elem1:"void_energy"


    },


    quantum_material:{


        elem1:"quantum_crystal"


    },


    cryo_material:{


        elem1:"cryo_material"


    }


};




/*
===============================================
⚫ VOID + ÉNERGIE
===============================================
*/


elements.void_energy.reactions = {


    cosmic_plasma:{


        elem1:"space_anomaly"


    },


    antimatter:{


        elem1:"perfect_singularity"


    }


};




/*
===============================================
🟣 QUANTUM
===============================================
*/


elements.quantum_material.reactions = {


    energy_crystal:{


        elem1:"quantum_crystal"


    },


    dimension_energy:{


        elem1:"omniverse_fragment"


    }


};




/*
===============================================
🔥 INFERNO
===============================================
*/


elements.inferno_material.reactions = {


    cryo_material:{


        elem1:"alien_water"


    },


    cosmic_plasma:{


        elem1:"inferno_plasma"


    }


};




/*
===============================================
❄ CRYO
===============================================
*/


elements.cryo_material.reactions = {


    inferno_material:{


        elem1:"dimension_energy"


    },


    cosmic_plasma:{


        elem1:"cryo_water"


    }


};




console.log(
"⚗️ Réactions de base chargées"
);


/*
=================================================
OMNIVERSE SANDFORGE
reactions.js
Partie 2 : Réactions avancées du multivers
Sandboxels
=================================================
*/


runAfterLoad(function(){



/*
===============================================
⭐ NAISSANCE D'ÉTOILE
===============================================
*/


elements.star_matter.reactions = {


    cosmic_dust:{

        elem1:"star_birth"

    },


    cosmic_plasma:{

        elem1:"cosmic_star"

    }


};




/*
===============================================
🪐 CRÉATION DE PLANÈTE
===============================================
*/


elements.molten_planet.reactions = {


    alien_water:{

        elem1:"artificial_planet"

    },


    cosmic_dust:{

        elem1:"alien_rock"

    }


};




/*
===============================================
🌌 FUSION GALACTIQUE
===============================================
*/


elements.galaxy_cluster.reactions = {


    galaxy_collision:{


        elem1:"quasar"


    },


    supermassive_black_hole:{


        elem1:"galaxy_collision"


    }


};




/*
===============================================
🌀 CRÉATION DE PORTAIL
===============================================
*/


elements.omniverse_crystal.reactions = {


    dimension_energy:{


        elem1:"creation_portal"


    },


    omniverse_fragment:{


        elem1:"omniverse_portal"


    }


};




/*
===============================================
💥 BIG BANG CONTRÔLÉ
===============================================
*/


elements.multiverse_origin.reactions = {


    universe_seed:{


        elem1:"big_bang_core"


    },


    absolute_matter:{


        elem1:"universe_seed"


    }


};




/*
===============================================
⚛️ ANTIMATIÈRE
===============================================
*/


elements.antimatter.reactions = {


    cosmic_plasma:{


        elem1:"big_bang_energy"


    },


    omniverse_crystal:{


        elem1:"dimension_energy"


    }


};




/*
===============================================
🔷 NOYAU OMNIVERSEL
===============================================
*/


elements.omniverse_core.reactions = {


    multiversal_matter:{


        elem1:"omniverse_fragment"


    },


    universe_seed:{


        elem1:"multiverse_origin"


    }


};




/*
===============================================
🌠 ÉVÉNEMENTS COSMIQUES
===============================================
*/


elements.quasar.reactions = {


    dark_matter_advanced:{


        elem1:"supermassive_black_hole"


    },


    cosmic_star:{


        elem1:"galaxy_collision"


    }


};




console.log(
"🌌 Réactions avancées du multivers chargées"
);


/*
=================================================
OMNIVERSE SANDFORGE
reactions.js
Partie 3 : Réactions ultimes du multivers
Sandboxels
=================================================
*/


runAfterLoad(function(){



/*
===============================================
🌌 NAISSANCE D'UN UNIVERS
===============================================
*/


elements.universe_seed.reactions = {


    big_bang_core:{


        elem1:"multiversal_matter"


    },


    dimension_energy:{


        elem1:"cosmic_plasma"


    }


};




/*
===============================================
♾️ FUSION OMNIVERSELLE
===============================================
*/


elements.omniverse_fragment.reactions = {


    omniverse_fragment:{


        elem1:"omniverse_core"


    },


    absolute_matter:{


        elem1:"multiverse_origin"


    }


};




/*
===============================================
💀 DESTRUCTION DIMENSIONNELLE
===============================================
*/


elements.perfect_singularity.reactions = {


    dimension_energy:{


        elem1:"universe_end"


    },


    omniverse_matter:{


        elem1:"universe_end"


    }


};




/*
===============================================
⏳ PARADOXE TEMPOREL
===============================================
*/


elements.time_rift = elements.time_rift || {};


elements.time_rift.reactions = {


    quantum_material:{


        elem1:"impossible_element"


    },


    universe_seed:{


        elem1:"dimension_energy"


    }


};




/*
===============================================
🌀 CRÉATION DE DIMENSION
===============================================
*/


elements.creation_portal.reactions = {


    universe_seed:{


        elem1:"dimension_energy"


    },


    omniverse_crystal:{


        elem1:"omniverse_portal"


    }


};




/*
===============================================
🔥 FIN COSMIQUE
===============================================
*/


elements.big_bang_core.reactions = {


    perfect_singularity:{


        elem1:"universe_end"


    },


    antimatter:{


        elem1:"big_bang_energy"


    }


};




/*
===============================================
🔄 RESET DE RÉALITÉ
===============================================
*/


elements.universe_end.reactions = {


    omniverse_core:{


        elem1:"universe_seed"


    },


    multiverse_origin:{


        elem1:"big_bang_core"


    }


};




/*
===============================================
🌠 RÉACTION ULTIME
===============================================
*/


elements.omniverse_core.reactions = {


    perfect_singularity:{


        elem1:"multiverse_origin"


    },


    big_bang_core:{


        elem1:"universe_seed"


    }


};




console.log(
"🌀 Réactions ultimes du multivers chargées"
);



});
