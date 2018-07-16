// alert('test');

/* -----1 - Structure de base IF*/ 
/* -----2 - Structure IF .... ELSE*/ 
/* -----2 - Structure IF .... ELSE IF........EELSE*/ 


/* -----1 - Structure de base IF*/
if (true) {
    // par défaut le IF vérifie si la condition est VRAIE (trur)
}

var nb1 = 99;
if (nb1 < 100 ) {
    console.log(nb1 + 'est plus petit que 100');
}

/* -----2 - Structure IF .... ELSE*/
if (true) {
    // par défaut le IF vérifie si la condition est VRAIE (trur)
    /*Code si condition VRAI */
} else {
    /*code si condition FAUSSE */

}
var nb2 = 399;
if (nb2 < 500) {
    console.log(nb2 +'est plus petit que 200');
} else {
    console.log(nb2 + 'est plus grand qque 200');
}


/* ----- 3 - Structure IF .... ELSE IF........ELSE*/
if (true) {//par défaut le IF verifie si la condition est vraie
    /* code si condition 1 VRAIE */
} else if (true) {
    /*code si condition 1 est FAUSSE ET la 2 est VRAIE */
} else { 
    /* code sies Les conditions 1 ET 2 sont FAUSSES*/
}
var nb4 = 50;
if (nb4 > 50){
    console.log(nb4 + 'plus petit que 50');
} else if (nb4 > 50) {
    console.log(nb4 + 'plus grand que 50');
} else {
console.log(nb4 + 'est égal à 50');
}