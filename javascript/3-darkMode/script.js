console.log("connecté !");

// je sélectionne et je stocke
// la DIV switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);
// la DIV btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);
// l'icone
const icone = document.querySelector('i'); 
console.log(icone);
// la DIV container
const container = document.querySelector('.container');
console.log(container);
// le titre 
const titre = document.querySelector('h1');
console.log(titre);
// je soumets la DIV switch à une action au clic 
switchBox.addEventListener('click', function () {
console.log('DIV cliquée !');
// je déplace le cercle 
// j'utilise .classList.toggle
btn.classList.toggle('btn-change');
// je déplace l'icone
icone.classList.toggle('icone-change');
// je change l'icone 
icone.classList.toggle('fa-sun');
// la DIV switch change de couleur de fond
switchBox.classList.toggle('switch-change');
// la DIV container change de couleur de fond
container.classList.toggle('container-change');
// je modifie le texte du titre 
titre.innerText = "LIGHT MODE";
// je modifie le texte du titre 
if (titre.innerText === "DARK MODE") {
  titre.innerText = "LIGHT MODE";
} else {
  titre.innerText = "DARK MODE";
}
});
