do {
do {
    var choix = Number(prompt("Que souhaitez-vous faire?  \n\n1 - Addition    \n2 - Multiplication  \n3 - Soustraction    \n4 - Division\n"));
    
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);



do {
    var premierNombre = Number(prompt("Choissisez le premier nombre"))
    
} while (isNaN(premierNombre));


do {
    var deuxiemeNombre = Number(prompt("Choissisez le deuxieme nombre"))
    
} while (isNaN(deuxiemeNombre));




function addition(nombreA, nombreB) {
    return  nombreA + nombreB
}

function multiplication(nombreA, nombreB) {
    return   nombreA * nombreB    
}

function soustraction(nombreA, nombreB) {
    return  nombreA - nombreB   
}
function division(nombreA, nombreB) {
    if (nombreB == 0){
        throw new Error("impossible de diviser par 0");
    }
    else{
    return  nombreA / nombreB}
}
var resultat


try{
switch (choix) {
    case 1:
        resultat = addition(premierNombre,deuxiemeNombre)
        break;
    case 2:
        resultat = multiplication(premierNombre,deuxiemeNombre)
        break;
    case 3:
        resultat = soustraction(premierNombre,deuxiemeNombre)
        break;
    case 4:
        resultat = division(premierNombre,deuxiemeNombre)
        break;
    default:
        throw new Error("Une erreur est survenu")
        break;
}
}

catch(error){
    alert(error);
}

alert(resultat)

var restart = confirm("souhaitez vous refaire un calcul")
}
while (restart)