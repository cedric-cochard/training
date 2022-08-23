// je sélectionne et stocke le bouton 
const btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', function() {
  console.log('bouton cliqué !');
  // à la fin du chrono je retire la notification du DOM 
    setTimeout(function() {
    notification.remove();
  }, 2000);
});
// je sélectionne et stocke la DIV container-notifications 
const ctn = document.querySelector('.container-notifications');
console.log(ctn);

// je créé un élément 
const notification = document.createElement('div');
console.log(notification);
notification.classList.add('toast');
// j'insére du contenu texte
notification.innerText = "Votre fichier est bien enregistré";
console.log(notification);
// j'accroche notification à l'élément ctn 
ctn.appendChild(notification);
