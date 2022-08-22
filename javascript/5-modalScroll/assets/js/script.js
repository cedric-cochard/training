// je sélectionne et je stocke la DIV modal-container 
const modal = document.querySelector('.modal-container');
console.log(modal);

// je sélectionne le bouton 
const btn = document.querySelector('.btn-success');
console.log(btn);
btn.addEventListener('click', function() {
  console.log('bouton cliqué');
  btn.style.display= "none";
});

// je sélectionne le code 
const code = document.querySelector('.code');
console.log(code);
code.style.display = "block";

// je sélectionne l'icone 
const icone = document.querySelector('.fa-solid');
console.log(icone);
icone.addEventListener('click', function() {
  console.log('icone cliquée');
  modal.style.display = "none";
  window.removeEventListener('scroll', displayModal)
});

window.addEventListener('scroll', displayModal)

function displayModal () {
  console.log('défilement détecté !');

  let hauteur = document.documentElement.scrollTop;
  console.log(hauteur,'nombre de pixels depuis le haut de la page');

  if (hauteur > 400) {
    console.log('affichage de la modale!');
    modal.style.display = "flex";
  };
};


