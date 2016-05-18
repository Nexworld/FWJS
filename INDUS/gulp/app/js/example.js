// Début de fichier avec
// des lignes de commentaire

var CONFIG = {
    loops: 20
};

console.log("Début de l'execution");

for(var i = 0; i < CONFIG.loops; i++) {
    displayNumber(i);
}

console.log("Fin de l'execution");

//////////

function displayNumber(number) {
    console.info(number);
}