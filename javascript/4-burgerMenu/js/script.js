//je sélectionne et je stocke 
// l'icone burger 
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
icone.addEventListener('click', function() {
  console.log("icone cliquée");
  modal.classList.toggle('change-modal')
})
// la DIV modal 
const modal = document.querySelector('.modal');
console.log(modal);