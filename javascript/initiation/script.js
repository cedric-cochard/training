console.log("connecté !");
// document.getElementById('titre').style.color = "green";

let titre = document.getElementById('titre');
console.log(titre);
titre.style.color = "green";
// titre = 2;
console.log(titre);
let score = 0;
console.log(score, "initialisation");
score = score + 1;
console.log(score, "après addition");
const cours = "Javascript";
console.log(cours, "cours");
const mot1 = "Hello";
const mot2 = "World";
const phrase = mot1 + " " + mot2;
console.log(phrase, "phrase");

let compteur = 0;
console.log(compteur, "compteur au démarrage");

// je sélectionne et je stocke un cercle rouge 
const btnRed = document.getElementById('btn-red');
console.log(btnRed, "bouton rouge");

// je soumets le cercle rouge à une action 
btnRed.addEventListener('click', function () {
    console.log('cercle rouge cliqué');
    // ici l'action
    // incrémenter le compteur de 1  
   add();
});

// je sélectionne et je stocke un cercle bleu
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue, "bouton bleu");

// je soumets le cercle rouge à une action 
btnBlue.addEventListener('click', function () {
    console.log('cercle bleu cliqué');
    // ici l'action
    // incrémenter le compteur de 1  
    add();
});

function add () {
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = compteur;
};

setTimeout (function() {
// action à réaliser
    // à la fin du délai
    console.log('fin du chromo');
    btnBlue.remove();
    btnRed.remove(); 
}, 10000);

