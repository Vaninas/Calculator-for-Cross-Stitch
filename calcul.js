//Surligne les champs faux
 function surligne(champ, erreur) {
   if(erreur) {
      champ.style.backgroundColor = "#fba";
      alert("La largeur et la hauteur des point doivent être compris entre 1 et 1000");
      document.getElementById("nombrePointsL").focus();
   } else {
      champ.style.backgroundColor = "";
   }
}


//Vérification que la largeur de point est en entier et un nombre entre 1 et 1000
function verifLargeur(champ) {
    var largeurVerif = parseInt(champ.value);
    if(isNaN(largeurVerif) || largeurVerif <= 0 || largeurVerif > 1000) {
       surligne(champ, true);
       return false; 
   } else {
      surligne(champ, false);
      return true;
   }
}

// Idem avec la hauteur
function verifHauteur(champ) {
    var hauteurVerif = parseInt(champ.value);
    if(isNaN(hauteurVerif) || hauteurVerif <= 0 || hauteurVerif > 1000) {
       surligne(champ, true);
       return false;
} else {
      surligne(champ, false);
      return true;
   }
}

 /*----------------------------------------------------*/
//Calcul des dimensions nécessaires pour la toile au click sur le bouton
document.getElementById("calculer").addEventListener("click", function () {   

    //Recherche des valeurs et transformation des input en nombres
    var largeurElt = Number(document.getElementById("nombrePointsL").value);
    var hauteurElt = Number(document.getElementById("nombrePointsH").value);
    var nombrePointsElt = document.getElementById("nombrePoints").value;
    var brodeFilElt = document.getElementById("brodeFils").value;
    var toileElt = document.getElementById("choixToile").value;
    
  if(toileElt == "aida") {
       /* calcul de la largeur de toile*/
    var calculL = (largeurElt / nombrePointsElt) + 20;
    /* calcul de la Hauteur de toile*/
    var calculH = (hauteurElt / nombrePointsElt) + 20;  
    //Phrase qui s'affichera du calcul pour les autres toiles avec arrondi à 2 décimals des calculs   
    resultatElt = "Pour votre ouvrage de " + largeurElt + " points x " + hauteurElt + " points, votre toile " + toileElt + " en " + nombrePointsElt + " fils, devra mesurer " + calculL.toFixed(2) + " cm de largeur x " + calculH.toFixed(2) + " cm de hauteur. Bonne réalisation !";
  } else {
    /* calcul de la largeur de toile*/
    var calculL = (largeurElt / (nombrePointsElt / brodeFilElt)) + 20;
    /* calcul de la Hauteur de toile*/
    var calculH = (hauteurElt / (nombrePointsElt / brodeFilElt)) + 20;  
    //Phrase qui s'affichera du calcul pour les autres toiles avec arrondi à 2 décimals des calculs   
    resultatElt = "Pour votre ouvrage de " + largeurElt + " points x " + hauteurElt + " points, votre toile " + toileElt + " en " + nombrePointsElt + " fils, devra mesurer " + calculL.toFixed(2) + " cm de largeur x " + calculH.toFixed(2) + " cm de hauteur. Bonne réalisation !";
  }

    // Création d'un paragraphe pour afficher la réponse et effacement de l'ancien si déjà calculer
    var p = document.createElement("p");
    var r = document.createTextNode(resultatElt);
    p.appendChild(r);
    document.getElementById("resultat").appendChild(p)
});