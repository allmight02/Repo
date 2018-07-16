
var jhordan = prompt('Quel âge a tu ?');
if (jhordan >= 18 ) {
    console.log('Bienvenue') ;
}else{
    alert('Tu est trop jeune mon coeur! va voir ailleur');
    document.location.href = 'page.html';
}