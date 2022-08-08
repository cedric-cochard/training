console.log("connecté !");
// je sélectionne et stocke
// icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector('i');
console.log(icone);
// btnbutton contient le premier élément avec la classe btn 
const btnButton = document.querySelector('.btn');
console.log(btnButton);
// je soumets le bouton à une action au clic 
btnButton.addEventListener('click', function() {
  console.log('bouton cliqué');
  // à chaque clic, on alterne le style
  btnButton.classList.toggle('abonne');
  // ici la condition
  // on vérifie le texte du bouton 
  if(btnButton.innertext === "Abonné") {
    // Action à réaliser si condition est vraie 
    btnButton.innertext = "Abonnez-vous"; }
    else {
      console.log('else');
      // Action à réaliser si condition fausse 
      btnButton.innertext = "Abonné";
    };
});
// je soumets l'icone à une action au clic
icone.addEventListener('click', function() {
  console.log("icone cliquée !");
  icone.classList.toggle('fa-smile-wink');
  icone.classList.toggle('happy');
});

