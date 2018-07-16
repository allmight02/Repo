// alert('Hi');

/* =================== 1 - Les opérateurs =========== * /

/* =================== 1 - Les opérateurs ===========  */
// je déclare mes variables / constantes en début de fichier
// Je peux en déclarer plusieur à la volée:\
var nb1, nb2, resultat;

// J'affecte des valeurs à certaine variables
nb1 = 10;
nb2 = 5;

// -- 1 - Additioner avec '+'
resultat  = nb1 + nb2;
console.log(resultat);


// -- 2 -Soustraire avec '-'
resultat = nb1 - nb2;
console.log(resultat);

// --3 -  Multiplier avec '*'
resultat = nb1 * nb2;
console.log(resultat);

// -- 4 - Diviser avec '/'
resultat = nb1 / nb2;
console.log(resultat);

// -- 5 - le reste d'une division avec le modulo '%'
nb1 = 11;
resultat = nb1 % nb2;
console.log('Le rest de la division de ' + nb1 +'par'+ nb2 +'est egal a :'+ resultat)

//==================2 - Les 2 écriture simplifiés=======
var ex = 15;
ex = ex + 5;
console.log(ex);

ex +=5;
console.log(ex);

nb1 -=5;
console.log(nb1);

// ====== 3 - L'incrémentation et la décrémentation ====
var nb1 = 1;
nb1 = nb1 = 1; //nb1 +=1

nb1++, //++= 1 ;
nb1+2; // +2 = +2

// /!\ selon l'ordre Le calcul n'est pas fait au même moment
resultat_1 = --nb1;
resultat_2 = nb1--;
resultat_1 == resultat_2; // => true uniquement à la fin de des calculs

/*--nb1 => calcujle tout de suite
nb1-- => commence à la valeur de nb1 PUIS calcule
pareille avec ++ */
