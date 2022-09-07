console.log("connecté !");
// je sélectionne et je stocke
// bouton .btn-success
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
// DIV cookies;
const cookies = document.querySelector('.cookies');
console.log(cookies);

// je stocke la valeur du localStorage
let valeurCle = localStorage.getItem('banniere');
console.log(valeurCle, 'valeur de la clé');

btnSuccess.addEventListener('click',function(){
    console.log('bouton cliqué !');
    cookies.style.opacity = "0";
    // je créé le localStorage avec la valeur "oui"
    localStorage.setItem('banniere', 'oui');
    
});

// je déclare la fonction 
function check(){
    console.log('déclenchée');
    if (valeurCle) {
        console.log('stockage existe');
        cookies.remove();
    } else {
        console.log("stockage n'existe pas");
    };
}
// j'appelle la fonction 
check();