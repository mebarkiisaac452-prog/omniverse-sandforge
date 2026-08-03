/*
=================================================
OMNIVERSE SANDFORGE
mod.js
Chargeur principal Sandboxels
Version Alpha 0.1
=================================================
*/


/*
===============================================
📦 INFORMATIONS DU MOD
===============================================
*/


var modInfo = {

    name:
    "Omniverse SandForge",

    version:
    "0.1 Alpha",

    author:
    "SandForge"

};



console.log(
"♾️ Chargement de Omniverse SandForge..."
);




/*
===============================================
🧩 CHARGEMENT DES MODULES
===============================================
*/


var omniverseFiles = [

    "core.js",

    "dimensions.js",

    "space.js",

    "elements.js",

    "reactions.js",

    "tools.js",

    "environment.js"

];




/*
===============================================
🚀 INITIALISATION
===============================================
*/


runAfterLoad(function(){



    window.Omniverse =
    window.Omniverse || {};



    Omniverse.modInfo =
    modInfo;



    console.log(
    "================================"
    );


    console.log(
    "♾️ Omniverse SandForge démarré"
    );


    console.log(
    "Version : "
    +
    modInfo.version
    );


    console.log(
    "Modules prévus : "
    +
    omniverseFiles.length
    );


    console.log(
    "================================"
    );



});




/*
===============================================
🛡️ PROTECTION ERREURS
===============================================
*/


window.addEventListener(
"error",
function(error){


console.error(
"❌ Erreur Omniverse :",
error.message
);


});




console.log(
"📦 Chargeur Omniverse prêt"
);
