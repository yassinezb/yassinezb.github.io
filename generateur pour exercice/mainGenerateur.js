/* $(function() { 

}); */

var genereAttack = [10] ;
var aleatoire = 0;
var i = 0;


var genereDef = [10];
var aleatoireDef = 0;
var j = 0;

var genereAttack2 = [10] ;
var aleatoire2 = 0;
var k = 0;

var genereDef2 = [10] ;
var aleatoireDef2 = 0;
var l = 0;

function generate(){
    aleatoire = Math.floor(Math.random() * genereAttack[i]);
    document.getElementById("attack").innerHTML = "Niveau de codage: "+ aleatoire;
    aleatoireDef = Math.floor(Math.random() * genereDef[j]);
    document.getElementById("defense").innerHTML = "Nombres d'absence: "+ aleatoireDef;
    aleatoire2 = Math.floor(Math.random() * genereAttack2[k]);
    document.getElementById("attack2").innerHTML = "Niveau de codage: "+ aleatoire2;
    aleatoireDef2 = Math.floor(Math.random() * genereDef2[l]);
    document.getElementById("defense2").innerHTML = "Nombres d'absence: "+ aleatoireDef2;
    /* --- */
    var randomNumber2 = Math.floor(Math.random() * 9) + 1;
    var imgName = "cartes_" + randomNumber2 + ".jpg";
    document.getElementById("imgCard").src= "img cartes1" + "/" + imgName ;
    /* --- */
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    var imgName = "cartes" + randomNumber + ".jpg";
    document.getElementById("imgCard2").src= "img cartes2" + "/" + imgName ;
    document.getElementById('sword1').style.display = 'none';
};

function fight(){
    if (aleatoire + aleatoireDef < aleatoire2 + aleatoireDef2) {
        document.getElementById('sword1').innerHTML = "The winner is player 2, player 1 va faire l'exo"
    }
    else if (aleatoire + aleatoireDef > aleatoire2 + aleatoireDef2) 
    document.getElementById('sword1').innerHTML = "The winner is player 1, player 2 va faire l'exo";
    document.getElementById('sword1').style.display = 'block';
}