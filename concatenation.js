alert('Bonjour');
//2 slashes pour un commentaire sur une ligne
/*Commentaire
sur plusieur
ligne */

/*(shoft + alt +a)
Les DOM (Document Object Model) est un programme interne au navigateur qui fait en sorte que 
- chaque balise HTML
- chaque attribut de ballise(class,id,name...)
- chaque évenement(clic, double-clic,survol de la souris) devienne des objets que l'on peut cibler,stocker dans une variable et manipuler*/

/* 1. L'objet WINDOW en JS => Le navigateur
    -alert('Bonjour); est pareil que windo.alert('Bonjour');
    - window est le seul objet du DOM qui peut s'utiliser implicitement (sans l'écrire)
    2. L'objet DOCUMENT en JS => La page HTML
        -document.getElementBy... */
    
        
/* =================== 1- Les Variables =========== */
/* =================== 2-- Les types de données =========== */
/* =================== 3- Les Constantes =========== */

/* =================== 1- Les Variables =========== */
/* -- 1 - Déclarer une variable */
var maVariable;

/* -- 2 - Affecter une valeur (stocker une valeur)
maVariable="fleur" 
var coucou = "Bonjour";// déclarer + affecter*/

/* -- 3 -- Une instruction se termine TOUJOURS par un point virgule (;)
mais je peux écrire plusieur instruction sur la même ligne */
/*instruction_1;
instruction_2; instruction_3; instruction_4;*\

/* --- 4 -- Afficher une boite de dialogue */
// window.alert('Hello Worls');
// alert('Hello World');

/* -- 5 - Afficher dans la console /!\ très important pour débuger son code */
console.log('Mila');

/* -- 6 -- Afficher du texte dans la page web */
document.write('VLG 2018-19 on adore Jvascipt !!');

/* -- 7 - Demander une info à l'internaute */
window.prompt('On mange quand ?');
prompt('On mange quand');

/* -- 8 - Le JS est sensible à la casse (case sensitive) */
// maVariable =/= maVariable
// monPrenom =/= mon_prenom
// mon_nom =/= mon-nom

// Ecriture camelCase
// Ecriture snake_case

/* -- 9 - une variable ne PEUT PAS commencer par un chiffre 
-ne doit contenir que des caractères alphanumérique(Lettres et chciffres - pas de caractere spéciaux type accents ou & par ex.)
ne DOIT PAS être un mot réservé (var,for.... des éléments natifs du JS)
 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s  */

/* var mangerOu = window.prompt('On mange ou?');
var mangerQuoi = prompt('On mange quoi ?');
console.log(mangerOu);
console.log(mangerQuoi); */

/* -- 10 - une variable peut être déclarée:
- de facon explicite :var manger = "oui";
- ou mplicite : quand = "13 heures"; */

/* =================== 2- Les types de données =========== */
/* -- 1 - Une chaine de caracteres (string) */
// var les_meilleurs = "VLG"; ou var les_meilleurs = 'VLG';
// var les_meilleurs = "2018"; ou var les_meilleurs = '2018';

/* -- 2 - Un nombre entier (integer ou int) */
var les_meilleurs = 2018;

/*-- 3 - Un nombre décimal (floot) */
var nb_a_virgule = -5.32;

// /!\ s'écrit avec un point '.''

// /!\ tous les nombres peuvent être soit positifs soit négatifs

/* -- 4 - Un booléen (boolean) :VRAI/FAUX  (TRUE/FALSE) */
var vrai = true;
var faux = false;
/* -- 5 - Un tableau (array) */
var gateau = ['farine', 'oeuf', 'chocolat', 4, true];


/* -- 6 - Un objet */
var voiture = {
    marque:'porsche',
    modele: 911,
    couleur: 'gris'
    // vitesse : true,
     // option :['radio', 'ABS', 'Freins', 4]
}


/* =================== 3- Les Constantes =========== */
 /* on déclare une constante avec le mot clé CONST ses particularités:
 - elle est accesible uniquement en Lecture
 -donc une fois déclare et une valeur affectée elle ne peut plus changer
 - elle ne peut etre déclaree qu'une fois dans le même script
 - par convention on écrit son nom en majuscules */

 const PAYS = "France";
   

 /* =================== 4- La Concaténation =========== */

 var annee = 2018;
var jo = 6;
var certificat_dev = "2019";

var calcul_1 = annee + jo;
document.write(calcul_1 + "<br>");

var calcul_1 = année + certificat_dev;
console.log(calcul_2);
document.write("<hr>" + calcul_2 + "<br>");

/* ******EXO***** */
var DebutPhrase = "Aujourd'hui";
var NbStagiaires = 12;
var SuitePhrase = "stagiaires";
var FinPhrase = "sont présents.";
// Nous souhaitons afficher La phrase en un seul morceau avec L concaténation => à vos claviers ! /!\ attention aux espaces entre les mots
document.write(DebutPhrase + NbStagiaires + SuitePhrase + "" + FinPhrase); 